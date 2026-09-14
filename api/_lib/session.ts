import { BackendError, type AuthSession, type Backend, type Profile } from './types.js';
import { cookie, HttpError, isHttps, parseCookies } from './http.js';

/**
 * Sitzung in zwei HttpOnly-Cookies.
 *
 * - bz_at: Access-Token (JWT von Supabase), lebt so lange wie das Token, meist eine Stunde.
 * - bz_rt: Refresh-Token, 30 Tage, SameSite=Strict.
 *
 * Beide gelten nur für Pfade unter /api. Das Frontend sieht die Tokens nie,
 * weder in JavaScript noch in localStorage. Eine XSS-Lücke könnte sie also
 * nicht auslesen, und sie gehen bei keinem Seitenaufruf mit, nur bei API-Aufrufen.
 */

const AT = 'bz_at';
const RT = 'bz_rt';
const REFRESH_TTL = 60 * 60 * 24 * 30;

export function sessionCookies(request: Request, s: AuthSession): string[] {
  const secure = isHttps(request);
  return [
    cookie(AT, s.accessToken, { maxAge: s.expiresIn, secure }),
    cookie(RT, s.refreshToken, { maxAge: REFRESH_TTL, sameSite: 'Strict', secure }),
  ];
}

export function clearCookies(request: Request): string[] {
  const secure = isHttps(request);
  return [cookie(AT, '', { maxAge: 0, secure }), cookie(RT, '', { maxAge: 0, sameSite: 'Strict', secure })];
}

/** Liest nur den Ablauf und die Nutzer-ID aus dem JWT. Die Signatur prüft Supabase bei jeder Anfrage selbst. */
function claims(token: string): { sub: string; exp: number } | null {
  const payload = token.split('.')[1];
  if (!payload) return null;
  try {
    const data = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/'))) as { sub?: unknown; exp?: unknown };
    return typeof data.sub === 'string' && typeof data.exp === 'number' ? { sub: data.sub, exp: data.exp } : null;
  } catch {
    return null;
  }
}

export interface Auth {
  token: string;
  userId: string;
}

export interface AuthResult {
  auth: Auth | null;
  /** Set-Cookie-Header, die die Route mitschicken muss (erneuerte oder gelöschte Sitzung). */
  cookies: string[];
}

/**
 * Holt die Sitzung aus den Cookies. Läuft das Access-Token in weniger als einer
 * Minute ab, wird es mit dem Refresh-Token erneuert.
 */
export async function authenticate(request: Request, be: Backend): Promise<AuthResult> {
  const jar = parseCookies(request);
  const at = jar[AT];
  const rt = jar[RT];

  const c = at ? claims(at) : null;
  if (at && c && c.exp * 1000 > Date.now() + 60_000) return { auth: { token: at, userId: c.sub }, cookies: [] };
  if (!rt) return { auth: null, cookies: at ? clearCookies(request) : [] };

  try {
    const s = await be.refresh(rt);
    return { auth: { token: s.accessToken, userId: s.user.id }, cookies: sessionCookies(request, s) };
  } catch (err) {
    if (err instanceof BackendError && err.code === 'unavailable') throw err;
    return { auth: null, cookies: clearCookies(request) };
  }
}

/** Wie authenticate, wirft aber 401, wenn niemand angemeldet ist. */
export async function requireAuth(request: Request, be: Backend): Promise<{ auth: Auth; cookies: string[] }> {
  const { auth, cookies } = await authenticate(request, be);
  if (!auth) throw new HttpError(401, 'unauthenticated', 'Bitte melde dich an.');
  return { auth, cookies };
}

/** Was der Browser über den angemeldeten Nutzer erfährt. Keine Tokens, keine internen Felder. */
export interface PublicUser {
  id: string;
  email: string;
  username: string;
  mainFighter: string | null;
  theme: Profile['theme'];
}

export const publicUser = (email: string, p: Profile): PublicUser => ({
  id: p.id,
  email,
  username: p.username,
  mainFighter: p.mainFighter,
  theme: p.theme,
});
