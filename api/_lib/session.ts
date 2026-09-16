import { BackendError, type Auth, type AuthSession, type Backend, type Profile, type VerifiedToken } from './types.js';
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

/*
 * Cookies kommen vom Browser und damit potenziell von jedem. Bevor ein Wert in
 * einen Header, eine Filter-URL oder einen JSON-Körper geht, muss er seine Form
 * haben: ein JWT aus Base64url-Teilen, eine UUID als Nutzer-ID, ein Refresh-Token
 * ohne Sonderzeichen. Alles andere gilt als nicht angemeldet.
 */
const JWT_SHAPE = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const REFRESH_SHAPE = /^[A-Za-z0-9_-]{1,512}$/;

/*
 * Die Nutzer-ID kommt nie ungeprüft aus dem Cookie. `verifyAccessToken` prüft
 * die Signatur gegen die öffentlichen Schlüssel des Supabase-Projekts (bzw. fragt
 * Supabase Auth). Erst dann gilt `sub` als der angemeldete Nutzer, auch für
 * Rate-Limit-Schlüssel und die Besitzprüfung in owner.ts. Vorher reichte ein
 * selbst gebautes Token mit fremder ID, um fremde Rate-Limit-Töpfe zu leeren.
 */
async function verifiedClaims(token: string, be: Backend): Promise<VerifiedToken | null> {
  if (token.length > 8192 || !JWT_SHAPE.test(token)) return null;
  const verified = await be.verifyAccessToken(token);
  return verified && UUID.test(verified.userId) ? verified : null;
}

export type { Auth };

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
  const rt = jar[RT] && REFRESH_SHAPE.test(jar[RT]) ? jar[RT] : undefined;

  const c = at ? await verifiedClaims(at, be) : null;
  if (at && c && c.exp * 1000 > Date.now() + 60_000) return { auth: { token: at, userId: c.userId }, cookies: [] };
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
  if (!auth) throw new HttpError(401, 'unauthenticated', { de: 'Bitte melde dich an.', en: 'Please log in.' });
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
