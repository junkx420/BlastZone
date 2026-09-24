/**
 * Erkennt, welche Art Supabase-Key ein String ist, ohne ihn je auszugeben.
 *
 * Genutzt an zwei Stellen:
 * - api/_lib/env.ts: Der Server nimmt nur einen öffentlichen Key an. Steht in
 *   SUPABASE_PUBLISHABLE_KEY versehentlich der Secret Key (bei Vercel schon
 *   einmal passiert, Werte vertauscht), startet das Backend gar nicht erst,
 *   statt mit Admin-Rechten an Row Level Security vorbeizuarbeiten.
 * - vite.config.ts: Der Build bricht ab, wenn im Browser-Bundle ein Secret Key
 *   oder ein service_role-JWT auftaucht.
 *
 * Keine Imports, weil src/shared auch in api/ eingebunden wird.
 */

export type SupabaseKeyKind = 'publishable' | 'secret' | 'unknown';

/** Rolle aus dem Payload eines JWT, ohne Signaturprüfung. Nur zur Einordnung, nie zur Autorisierung. */
function jwtRole(token: string): string | null {
  const parts = token.split('.');
  if (parts.length !== 3 || !parts[1]) return null;
  try {
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '='))) as { role?: unknown };
    return typeof payload.role === 'string' ? payload.role : null;
  } catch {
    return null;
  }
}

export function classifySupabaseKey(key: string): SupabaseKeyKind {
  const k = key.trim();
  if (k.startsWith('sb_publishable_')) return 'publishable';
  if (k.startsWith('sb_secret_')) return 'secret';
  const role = jwtRole(k);
  // Alte Keys sind JWTs: `anon` ist öffentlich, `service_role` der Admin-Key.
  if (role === 'anon') return 'publishable';
  if (role === 'service_role' || role === 'supabase_admin') return 'secret';
  return 'unknown';
}

const SECRET_PREFIX = /sb_secret_[A-Za-z0-9_-]+/g;
const JWT = /eyJ[A-Za-z0-9_-]{6,}\.eyJ[A-Za-z0-9_-]{6,}\.[A-Za-z0-9_-]+/g;

/**
 * Sucht Admin-Keys in beliebigem Text (etwa einem Bundle). Liefert nur
 * geschwärzte Hinweise mit Position, nie den Key selbst, damit er auch im
 * Build-Log nicht auftaucht.
 */
export function findSecretKeys(text: string): string[] {
  const hits: string[] = [];
  for (const m of text.matchAll(SECRET_PREFIX)) hits.push(`sb_secret_… an Position ${m.index}`);
  for (const m of text.matchAll(JWT)) {
    if (classifySupabaseKey(m[0]) === 'secret') hits.push(`service_role-JWT an Position ${m.index}`);
  }
  return hits;
}
