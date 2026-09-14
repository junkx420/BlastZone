import { readEnv } from './env.js';
import { HttpError } from './http.js';

/**
 * Rate Limiting mit festem Zeitfenster.
 *
 * Zwei Speicher:
 * - Upstash Redis über die REST-API, sobald UPSTASH_REDIS_REST_URL und
 *   UPSTASH_REDIS_REST_TOKEN gesetzt sind. Das ist die Variante für Produktion:
 *   Vercel startet mehrere Instanzen, und nur ein gemeinsamer Zähler hält dann
 *   wirklich dicht.
 * - Speicher im Prozess als Rückfall. Wirkt pro Instanz, bremst Brute Force also
 *   nur, statt es sicher zu stoppen. Deshalb gilt zusätzlich das eingebaute
 *   Rate Limiting von Supabase Auth (siehe supabase/SETUP.md).
 *
 * Fällt Redis aus, zählt der Prozessspeicher weiter. Bewusst NICHT „bei Fehler
 * durchlassen“: Genau dann wäre der Login ungeschützt.
 *
 * Schlüssel werden gehasht, damit keine E-Mail-Adressen im Klartext in Redis liegen.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const g = globalThis as typeof globalThis & { __bzBuckets?: Map<string, Bucket> };
const memory = (g.__bzBuckets ??= new Map<string, Bucket>());

async function hashKey(key: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`blastzone:${key}`));
  return [...new Uint8Array(digest)]
    .slice(0, 16)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function hitMemory(key: string, windowSec: number): { count: number; ttl: number } {
  const now = Date.now();
  if (memory.size > 5000) for (const [k, b] of memory) if (b.resetAt <= now) memory.delete(k);
  const bucket = memory.get(key);
  if (!bucket || bucket.resetAt <= now) {
    memory.set(key, { count: 1, resetAt: now + windowSec * 1000 });
    return { count: 1, ttl: windowSec };
  }
  bucket.count++;
  return { count: bucket.count, ttl: Math.ceil((bucket.resetAt - now) / 1000) };
}

async function hitRedis(url: string, token: string, key: string, windowSec: number): Promise<{ count: number; ttl: number }> {
  const res = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, String(windowSec), 'NX'],
      ['TTL', key],
    ]),
    signal: AbortSignal.timeout(1500),
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const out = (await res.json()) as Array<{ result?: number; error?: string }>;
  const count = Number(out[0]?.result);
  const ttl = Number(out[2]?.result);
  if (!Number.isFinite(count)) throw new Error('Upstash: unerwartete Antwort');
  return { count, ttl: ttl > 0 ? ttl : windowSec };
}

export interface Limit {
  /** Name des Topfs, etwa "login-ip". */
  name: string;
  /** Was gezählt wird: IP, IP plus E-Mail, Nutzer-ID. */
  key: string;
  max: number;
  windowSec: number;
}

/** Zählt einen Versuch und wirft 429, wenn ein Topf voll ist. Alle Töpfe werden gezählt, auch wenn einer schon voll ist. */
export async function enforce(...limits: Limit[]): Promise<void> {
  const env = readEnv();
  let worst: { ttl: number } | null = null;
  for (const l of limits) {
    const key = `rl:${l.name}:${await hashKey(l.key)}`;
    let hit: { count: number; ttl: number };
    try {
      hit = env?.upstashUrl && env.upstashToken ? await hitRedis(env.upstashUrl, env.upstashToken, key, l.windowSec) : hitMemory(key, l.windowSec);
    } catch (err) {
      console.warn('[ratelimit] Redis nicht erreichbar, zähle im Prozess', err);
      hit = hitMemory(key, l.windowSec);
    }
    if (hit.count > l.max && (!worst || hit.ttl > worst.ttl)) worst = { ttl: hit.ttl };
  }
  if (worst) {
    const minuten = Math.max(1, Math.ceil(worst.ttl / 60));
    throw new HttpError(
      429,
      'rate-limited',
      `Zu viele Versuche. Versuch es in ${minuten === 1 ? 'einer Minute' : `${minuten} Minuten`} erneut.`,
      { 'Retry-After': String(worst.ttl) },
    );
  }
}
