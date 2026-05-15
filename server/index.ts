import http from 'node:http';
import type { DiagnosticPayload } from './diagnostic-mail.ts';
import { validatePayload, sendDiagnosticEmail } from './diagnostic-mail.ts';

const PORT = Number(process.env.PORT_API ?? process.env.PORT ?? 8787);

function isDiagnosticPayload(v: DiagnosticPayload | { error: string }): v is DiagnosticPayload {
  return !('error' in v);
}

function json(res: http.ServerResponse, status: number, body: unknown) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(payload);
}

async function readBody(req: http.IncomingMessage): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(chunk as Buffer);
  }
  return Buffer.concat(chunks).toString('utf8');
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    });
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/api/send-diagnostic') {
    json(res, 404, { ok: false, error: 'No encontrado' });
    return;
  }

  let parsed: unknown;
  try {
    const raw = await readBody(req);
    parsed = JSON.parse(raw);
  } catch {
    json(res, 400, { ok: false, error: 'JSON inválido' });
    return;
  }

  const validated = validatePayload(parsed);
  if (!isDiagnosticPayload(validated)) {
    json(res, 400, { ok: false, error: validated.error });
    return;
  }

  const result = await sendDiagnosticEmail(validated);

  const cors = {'Access-Control-Allow-Origin': '*'};

  if (result.ok) {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      ...cors,
    });
    res.end(JSON.stringify({ ok: true }));
  } else {
    const errorMessage =
      'message' in result && typeof result.message === 'string' ? result.message : 'Error al enviar';
    res.writeHead(502, {
      'Content-Type': 'application/json; charset=utf-8',
      ...cors,
    });
    res.end(JSON.stringify({ ok: false, error: errorMessage }));
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[api] POST http://127.0.0.1:${PORT}/api/send-diagnostic`);
});
