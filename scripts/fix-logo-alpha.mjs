/**
 * Convierte en transparencia real:
 * - Patrón de cuadros grises del editor (como logobtek antes).
 * - Fondos blancos/casi blancos opacos en los bordes (logos exportados sobre lienzo blanco).
 *
 * Omite PNGs que ya tienen bastante transparencia (>2% de píxeles con alpha bajo).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PNG } from 'pngjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

/** Logos del carrusel (PartnersCarousel) — rutas bajo public/ */
const CAROUSEL_LOGOS = [
  'hp.png',
  'fortinet.png',
  'huawei.png',
  'tplink.png',
  'aruba.png',
  'dell.png',
  'microsoft.png',
  'axis.png',
  'belden.png',
  'dintelligence.png',
  'alhua.png',
];

const SKIP_IF_TRANSPARENT_RATIO = 0.02;
const MIN_CLEARED_TO_WRITE = 500;

function isBackgroundPixel(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const avg = (r + g + b) / 3;
  // Fondo blanco/casi blanco (exportación opaca sobre lienzo)
  if (max - min <= 22 && avg >= 247) return true;
  // Patrón de cuadros gris del editor
  if (max - min > 26) return false;
  return avg >= 176 && avg <= 246;
}

/**
 * @param {string} filename - nombre bajo public/ o ruta absoluta
 * @param {{ dryRun?: boolean, forceBackup?: boolean }} opts
 */
function processPngFile(filename, opts = {}) {
  const dryRun = opts.dryRun === true;
  const inputPath = path.isAbsolute(filename)
    ? filename
    : path.join(publicDir, filename);

  if (!fs.existsSync(inputPath)) {
    console.warn('No existe:', inputPath);
    return { ok: false, reason: 'missing' };
  }

  const buf = fs.readFileSync(inputPath);
  if (buf.length < 8 || buf[0] !== 0x89) {
    console.warn('No es PNG:', filename);
    return { ok: false, reason: 'not-png' };
  }

  const png = PNG.sync.read(buf);
  const { width: w, height: h, data } = png;
  const total = w * h;
  let transparent = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] < 8) transparent++;
  }
  if (transparent / total > SKIP_IF_TRANSPARENT_RATIO) {
    console.log('[omitido]', filename, `— ya tiene transparencia (${((transparent / total) * 100).toFixed(1)}%)`);
    return { ok: true, skipped: true, reason: 'already-transparent' };
  }

  const visited = new Uint8Array(total);
  const q = [];

  function idx(x, y) {
    return y * w + x;
  }
  function push(x, y) {
    const i = idx(x, y);
    if (visited[i]) return;
    const p = i * 4;
    const r = data[p],
      g = data[p + 1],
      b = data[p + 2];
    if (!isBackgroundPixel(r, g, b)) return;
    visited[i] = 1;
    q.push(i);
  }

  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

  while (q.length) {
    const i = q.pop();
    const x = i % w;
    const y = (i / w) | 0;
    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }

  let cleared = 0;
  for (let i = 0; i < total; i++) {
    if (!visited[i]) continue;
    const p = i * 4;
    data[p + 3] = 0;
    cleared++;
  }

  if (cleared < MIN_CLEARED_TO_WRITE) {
    console.log('[omitido]', filename, `— pocos píxeles de fondo (${cleared}), sin cambios`);
    return { ok: true, skipped: true, reason: 'too-few-cleared', cleared };
  }

  if (dryRun) {
    console.log('[dry-run]', filename, 'se transparentarían', cleared, '/', total, 'píxeles');
    return { ok: true, dryRun: true, cleared };
  }

  const backupPath = inputPath.replace(/\.png$/i, '-baked-grid-backup.png');
  if (opts.forceBackup !== false && !fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, buf);
    console.log('Copia:', path.basename(backupPath));
  }

  fs.writeFileSync(inputPath, PNG.sync.write(png));
  console.log('[ok]', filename, '→ transparentes:', cleared, '/', total);
  return { ok: true, cleared };
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const rest = args.filter((a) => a !== '--dry-run');

  let files;
  if (rest.includes('--carousel')) {
    files = [...CAROUSEL_LOGOS];
  } else if (rest.length) {
    files = rest;
  } else {
    files = ['logobtek.png'];
  }

  for (const f of files) {
    processPngFile(f, { dryRun });
  }
}

main();
