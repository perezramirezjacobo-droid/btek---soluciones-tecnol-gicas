/**
 * El PNG exportado puede traer el patrón de "transparencia" del editor como píxeles opacos.
 * Este script hace flood-fill desde los bordes y pone alpha=0 en esas zonas (grises claros
 * acromáticos), sin tocar el logo (azul, rojo, blanco puro de la estrella).
 */
import fs from 'fs';
import { PNG } from 'pngjs';

const inputPath = new URL('../public/logobtek.png', import.meta.url);
const backupPath = new URL('../public/logobtek-baked-grid-backup.png', import.meta.url);

function isBackgroundPixel(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max - min > 26) return false;
  const avg = (r + g + b) / 3;
  // Cuadros del patrón típico ~190–236; excluimos blanco puro de la estrella (~255)
  return avg >= 176 && avg <= 246;
}

function main() {
  const buf = fs.readFileSync(inputPath);
  const png = PNG.sync.read(buf);
  const { width: w, height: h, data } = png;

  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, buf);
    console.log('Copia de seguridad:', backupPath.pathname);
  }

  const visited = new Uint8Array(w * h);
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
  for (let i = 0; i < w * h; i++) {
    if (!visited[i]) continue;
    const p = i * 4;
    data[p + 3] = 0;
    cleared++;
  }

  const out = PNG.sync.write(png);
  fs.writeFileSync(inputPath, out);
  console.log('Píxeles pasados a transparentes:', cleared, '/', w * h);
  console.log('Actualizado:', inputPath.pathname);
}

main();
