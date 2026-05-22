import { Resend } from 'resend';

export type DiagnosticPayload = {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  score: number;
  levelTitle: string;
  situation: string;
  desiredResult: string;
  obstacles: string;
  solution: string;
  additionalInfo?: string;
  qa: { question: string; answer: boolean }[];
};

const MAX_LEN = 8000;

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function clamp(s: string, max = MAX_LEN): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max)}…`;
}

function buildHtml(data: DiagnosticPayload): string {
  const rows = data.qa
    .map(
      (q) =>
        `<tr><td style="padding:8px;border:1px solid #e2e8f0;vertical-align:top">${escapeHtml(clamp(q.question, 500))}</td><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold">${q.answer ? 'Sí' : 'No'}</td></tr>`,
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a;padding:24px">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:16px;padding:28px;border:1px solid #e2e8f0">
    <h1 style="margin:0 0 8px;font-size:20px;color:#003399">Informe de diagnóstico Pak Retail</h1>
    <p style="margin:0 0 24px;color:#64748b;font-size:14px">Resumen generado a partir de tus respuestas.</p>

    <div style="background:#f1f5f9;border-radius:12px;padding:16px;margin-bottom:24px">
      <p style="margin:0;font-size:28px;font-weight:800;color:#003399">${data.score}<span style="font-size:16px;color:#64748b">/10</span></p>
      <p style="margin:8px 0 0;font-size:14px;font-weight:700">${escapeHtml(data.levelTitle)}</p>
    </div>

    <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;margin:24px 0 8px">Datos de contacto</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr><td style="padding:6px 0;color:#64748f;width:120px">Nombre</td><td style="padding:6px 0">${escapeHtml(clamp(data.name, 200))}</td></tr>
      <tr><td style="padding:6px 0;color:#64748f">Correo</td><td style="padding:6px 0">${escapeHtml(clamp(data.email, 200))}</td></tr>
      <tr><td style="padding:6px 0;color:#64748f">Teléfono</td><td style="padding:6px 0">${escapeHtml(clamp(data.phone || '—', 80))}</td></tr>
      <tr><td style="padding:6px 0;color:#64748f">Ubicación</td><td style="padding:6px 0">${escapeHtml(clamp(data.location || '—', 200))}</td></tr>
    </table>

    <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;margin:24px 0 8px">Perfil</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr><td style="padding:6px 0;color:#64748f;vertical-align:top;width:140px">Situación actual</td><td style="padding:6px 0">${escapeHtml(clamp(data.situation))}</td></tr>
      <tr><td style="padding:6px 0;color:#64748f;vertical-align:top">Resultado deseado</td><td style="padding:6px 0">${escapeHtml(clamp(data.desiredResult))}</td></tr>
      <tr><td style="padding:6px 0;color:#64748f;vertical-align:top">Obstáculos</td><td style="padding:6px 0">${escapeHtml(clamp(data.obstacles))}</td></tr>
      <tr><td style="padding:6px 0;color:#64748f;vertical-align:top">Solución percibida</td><td style="padding:6px 0">${escapeHtml(clamp(data.solution))}</td></tr>
      <tr><td style="padding:6px 0;color:#64748f;vertical-align:top">Comentarios</td><td style="padding:6px 0">${escapeHtml(clamp(data.additionalInfo || '—'))}</td></tr>
    </table>

    <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;margin:24px 0 8px">Cuestionario</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px">${rows}</table>

    <p style="margin:28px 0 0;font-size:12px;color:#94a3b8">Btek · Soluciones tecnológicas</p>
  </div>
</body>
</html>`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Copia interna del informe si no defines `DIAGNOSTIC_BCC_EMAIL` en `.env`. */
const DEFAULT_DIAGNOSTIC_BCC_EMAIL = 'kdiaz@btek.com.mx';

export function validatePayload(raw: unknown): DiagnosticPayload | { error: string } {
  if (!raw || typeof raw !== 'object') return { error: 'Cuerpo inválido' };
  const o = raw as Record<string, unknown>;

  const name = typeof o.name === 'string' ? o.name.trim() : '';
  const email = typeof o.email === 'string' ? o.email.trim() : '';
  if (!name || name.length > 200) return { error: 'Nombre inválido' };
  if (!email || !EMAIL_RE.test(email) || email.length > 200) return { error: 'Correo inválido' };

  const score = Number(o.score);
  if (!Number.isFinite(score) || score < 0 || score > 10) return { error: 'Puntuación inválida' };

  const levelTitle = typeof o.levelTitle === 'string' ? o.levelTitle.trim() : '';
  if (!levelTitle || levelTitle.length > 120) return { error: 'Nivel inválido' };

  const situation = typeof o.situation === 'string' ? o.situation.trim() : '';
  const desiredResult = typeof o.desiredResult === 'string' ? o.desiredResult.trim() : '';
  const obstacles = typeof o.obstacles === 'string' ? o.obstacles.trim() : '';
  const solution = typeof o.solution === 'string' ? o.solution.trim() : '';
  if (!situation || !desiredResult || !obstacles || !solution) return { error: 'Perfil incompleto' };

  const phone = typeof o.phone === 'string' ? o.phone.trim() : '';
  const location = typeof o.location === 'string' ? o.location.trim() : '';
  const additionalInfo = typeof o.additionalInfo === 'string' ? o.additionalInfo.trim() : '';

  if (!Array.isArray(o.qa) || o.qa.length === 0 || o.qa.length > 50) {
    return { error: 'Respuestas inválidas' };
  }

  const qa: { question: string; answer: boolean }[] = [];
  for (const item of o.qa) {
    if (!item || typeof item !== 'object') return { error: 'Respuestas inválidas' };
    const q = item as Record<string, unknown>;
    const question = typeof q.question === 'string' ? q.question.trim() : '';
    if (!question || question.length > 500) return { error: 'Pregunta inválida' };
    if (typeof q.answer !== 'boolean') return { error: 'Respuesta inválida' };
    qa.push({ question, answer: q.answer });
  }

  return {
    name,
    email,
    phone: phone || undefined,
    location: location || undefined,
    score,
    levelTitle,
    situation,
    desiredResult,
    obstacles,
    solution,
    additionalInfo: additionalInfo || undefined,
    qa,
  };
}

export async function sendDiagnosticEmail(data: DiagnosticPayload): Promise<{ ok: true } | { ok: false; message: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return { ok: false, message: 'Servidor de correo no configurado' };
  }

  const bccRaw = (process.env.DIAGNOSTIC_BCC_EMAIL ?? DEFAULT_DIAGNOSTIC_BCC_EMAIL).trim();
  const bcc = EMAIL_RE.test(bccRaw) ? [bccRaw] : undefined;

  const resend = new Resend(apiKey);
  const html = buildHtml(data);

  try {
    const { data: sent, error } = await resend.emails.send({
      from,
      to: [data.email],
      bcc,
      subject: `Tu informe de diagnóstico Pak Retail — ${data.score}/10`,
      html,
    });

    if (error) {
      console.error('[diagnostic-mail]', error);
      return { ok: false, message: error.message || 'No se pudo enviar el correo' };
    }

    if (!sent?.id) {
      return { ok: false, message: 'Respuesta inesperada del proveedor de correo' };
    }

    return { ok: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Error al contactar Resend';
    console.error('[diagnostic-mail]', e);
    return { ok: false, message: msg };
  }
}
