import { mockAllowed, readEnv } from './_lib/env.js';
import { clientIp, json } from './_lib/http.js';
import { restPath } from './_lib/postgrest.js';
import { enforce } from './_lib/ratelimit.js';
import { route } from './_lib/route.js';

/**
 * GET /api/health  für Uptime-Monitoring (UptimeRobot, Better Stack …, siehe docs/BETRIEB.md)
 *
 * 200, wenn Supabase Auth und Datenbank antworten, sonst 503. Der Monitor muss
 * nur den Statuscode prüfen. Die Antwort enthält Laufzeiten, aber nichts über
 * Konfiguration, Keys oder Nutzer. Jede Prüfung hat 3 Sekunden, zusammen bleibt
 * das unter dem Limit aus route.ts.
 */

async function probe(url: string, apikey: string): Promise<{ ok: boolean; ms: number }> {
  const started = Date.now();
  try {
    const res = await fetch(url, { headers: { apikey }, signal: AbortSignal.timeout(3000) });
    return { ok: res.ok, ms: Date.now() - started };
  } catch {
    return { ok: false, ms: Date.now() - started };
  }
}

export const GET = route(async (request) => {
  await enforce({ name: 'health-ip', key: clientIp(request), max: 30, windowSec: 60 });
  const version = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'lokal';
  const env = readEnv();

  if (!env) {
    const mock = mockAllowed();
    return json({ ok: mock, status: mock ? 'mock' : 'nicht-konfiguriert', version, time: new Date().toISOString() }, mock ? 200 : 503);
  }

  const [auth, db] = await Promise.all([
    probe(`${env.supabaseUrl}/auth/v1/health`, env.supabaseAnonKey),
    probe(`${env.supabaseUrl}${restPath('profiles', { select: 'id', limit: 1 })}`, env.supabaseAnonKey),
  ]);
  const healthy = auth.ok && db.ok;
  return json({ ok: healthy, status: healthy ? 'ok' : 'gestört', checks: { auth, db }, version, time: new Date().toISOString() }, healthy ? 200 : 503);
});
