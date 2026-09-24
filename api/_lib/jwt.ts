import type { VerifiedToken } from './types.js';

/**
 * Prüft Supabase-Access-Tokens selbst, statt der Nutzer-ID im Cookie zu glauben.
 *
 * Supabase signiert Tokens asymmetrisch (dieses Projekt: ES256) und
 * veröffentlicht die öffentlichen Schlüssel unter /auth/v1/.well-known/jwks.json.
 * Mit WebCrypto lässt sich die Signatur ohne Abhängigkeit prüfen. Erst danach
 * gilt `sub` als Nutzer-ID, also auch für Rate-Limit-Schlüssel, die vor jedem
 * Datenbankzugriff greifen.
 *
 * Ergebnis:
 * - VerifiedToken: Signatur passt zu einem Schlüssel des Projekts, Token nicht
 *   abgelaufen, Rolle `authenticated`, `sub` ist eine UUID.
 * - null: Alles andere, was sich prüfen ließ.
 * - 'unverifiable': Algorithmus ohne öffentlichen Schlüssel (alte HS256-Tokens)
 *   oder Schlüsselliste nicht erreichbar. Dann fragt supabase.ts Supabase Auth.
 */

interface Jwk {
  kty?: string;
  kid?: string;
  alg?: string;
  crv?: string;
  x?: string;
  y?: string;
  n?: string;
  e?: string;
}

type Verified = VerifiedToken | null | 'unverifiable';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const JWKS_TTL = 10 * 60_000;
const REFETCH_GAP = 60_000;

function bytes(part: string): Uint8Array<ArrayBuffer> {
  const base64 = part.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '='));
  const out = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

const json = (part: string): Record<string, unknown> | null => {
  try {
    const value = JSON.parse(new TextDecoder().decode(bytes(part))) as unknown;
    return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
  } catch {
    return null;
  }
};

const ALGS = {
  ES256: { importAlg: { name: 'ECDSA', namedCurve: 'P-256' }, verifyAlg: { name: 'ECDSA', hash: 'SHA-256' }, kty: 'EC' },
  RS256: { importAlg: { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, verifyAlg: { name: 'RSASSA-PKCS1-v1_5' }, kty: 'RSA' },
} as const;

export function createJwtVerifier(loadJwks: () => Promise<Jwk[]>, now: () => number = Date.now): (token: string) => Promise<Verified> {
  let keys: Map<string, Promise<CryptoKey | null>> | null = null;
  let fetchedAt = 0;
  let loading: Promise<void> | null = null;

  const refresh = (): Promise<void> =>
    (loading ??= loadJwks()
      .then((list) => {
        const next = new Map<string, Promise<CryptoKey | null>>();
        for (const jwk of list) {
          const spec = jwk.alg === 'ES256' || jwk.alg === 'RS256' ? ALGS[jwk.alg] : null;
          if (!spec || !jwk.kid || jwk.kty !== spec.kty) continue;
          const material = spec.kty === 'EC' ? { kty: 'EC', crv: jwk.crv, x: jwk.x, y: jwk.y } : { kty: 'RSA', n: jwk.n, e: jwk.e };
          next.set(`${jwk.alg}:${jwk.kid}`, crypto.subtle.importKey('jwk', material as JsonWebKey, spec.importAlg, false, ['verify']).catch(() => null));
        }
        keys = next;
        fetchedAt = now();
      })
      .catch((err) => {
        console.warn('[jwt] Schlüsselliste nicht ladbar', err);
      })
      .finally(() => {
        loading = null;
      }));

  async function keyFor(alg: 'ES256' | 'RS256', kid: string): Promise<CryptoKey | null | undefined> {
    const id = `${alg}:${kid}`;
    if (!keys || now() - fetchedAt > JWKS_TTL) await refresh();
    // Unbekannte kid: Schlüssel könnten gerade rotiert worden sein. Höchstens einmal pro Minute nachladen.
    if (keys && !keys.has(id) && now() - fetchedAt > REFETCH_GAP) await refresh();
    if (!keys) return undefined;
    return keys.get(id) ?? null;
  }

  return async (token) => {
    const parts = token.split('.');
    if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) return null;
    const header = json(parts[0]);
    const payload = json(parts[1]);
    if (!header || !payload) return null;

    const alg = header.alg;
    if (alg === 'HS256') return 'unverifiable';
    if (alg !== 'ES256' && alg !== 'RS256') return null; // auch "none"
    if (typeof header.kid !== 'string') return null;

    const key = await keyFor(alg, header.kid);
    if (key === undefined) return 'unverifiable';
    if (key === null) return null;

    const signature = bytes(parts[2]);
    if (alg === 'ES256' && signature.length !== 64) return null;
    const signed = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
    let valid = false;
    try {
      valid = await crypto.subtle.verify(ALGS[alg].verifyAlg, key, signature, signed);
    } catch {
      valid = false;
    }
    if (!valid) return null;

    const { sub, exp, nbf, role } = payload;
    const nowSec = now() / 1000;
    if (typeof sub !== 'string' || !UUID.test(sub)) return null;
    if (typeof exp !== 'number' || exp <= nowSec) return null;
    if (typeof nbf === 'number' && nbf > nowSec + 30) return null;
    if (role !== 'authenticated') return null;
    return { userId: sub, exp };
  };
}
