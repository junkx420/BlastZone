import { normalizeStartggSlug } from '../../src/shared/startgg.js';
import { mockAllowed, readStartggOauthConfig } from './env.js';
import { cookie, HttpError, isHttps, parseCookies, requestHost } from './http.js';
import { checkParts, sameSecret, signParts } from './startggCache.js';
import { graphql, mockStartggUser, toStartggUser, type RawUser, type StartggUser } from './startgg.js';
import type { StartggLinkRow, StartggVerification } from './types.js';

/**
 * „Mit start.gg bestätigen“: OAuth 2.0 Authorization Code Flow gegen start.gg.
 *
 * Ablauf (drei Routen in api/_routes/startgg/):
 * 1. authorize (GET, Seitenaufruf): angemeldet? Dann zufälligen `state` in ein
 *    signiertes HttpOnly-Cookie, das an dieses Blastzone-Konto gebunden ist, und
 *    Weiterleitung zu start.gg.
 * 2. callback (GET, Rückkehr von start.gg): `state` aus der URL muss zum Cookie
 *    passen (sonst hat eine fremde Seite den Rücksprung ausgelöst). Code gegen
 *    Token tauschen, mit dem Token `currentUser` fragen, Token verwerfen. Das
 *    Ergebnis kommt signiert in ein zweites Cookie, 10 Minuten gültig.
 * 3. verify (POST vom Profil aus): Cookie prüfen, gehört es zum angemeldeten
 *    Konto, dann Verknüpfung mit signierter Bestätigung speichern.
 *
 * Warum Schritt 3 getrennt: Der Rücksprung von start.gg ist eine seitenfremde
 * Navigation. Dabei schickt der Browser das Refresh-Cookie (SameSite=Strict)
 * nicht mit, eine abgelaufene Sitzung ließe sich im Callback nicht erneuern.
 * Außerdem bleibt so jedes Schreiben hinter der Herkunftsprüfung.
 *
 * Gespeichert wird von start.gg nichts außer Slug, Gamertag und Nutzer-ID.
 * Access- und Refresh-Token verlassen die Function nie und landen nirgends.
 */

const AUTHORIZE_URL = 'https://start.gg/oauth/authorize';
const TOKEN_URL = 'https://api.start.gg/oauth/access_token';
/** Nur die Identität. Keine E-Mail, keine Turnierverwaltung. */
const SCOPE = 'user.identity';

const STATE_COOKIE = 'bz_sg_state';
const RESULT_COOKIE = 'bz_sg_result';
const COOKIE_PATH = '/api/startgg';
const STATE_TTL_SEC = 600;
const RESULT_TTL_SEC = 600;

const DOMAIN_STATE = 'blastzone-startgg-oauth-state';
const DOMAIN_RESULT = 'blastzone-startgg-oauth-result';
const DOMAIN_VERIFIED = 'blastzone-startgg-verified';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const STARTGG_ID = /^[0-9]{1,20}$/;

/** `live`: echte OAuth-Anwendung. `mock`: lokaler Speicher-Mock ohne Keys, simuliert start.gg. `null`: nicht eingerichtet. */
export function oauthMode(): 'live' | 'mock' | null {
  if (readStartggOauthConfig()) return 'live';
  return mockAllowed() ? 'mock' : null;
}

/**
 * Codes, mit denen die OAuth-Routen zurück ins Profil leiten. Die Profilseite kennt zu
 * jedem einen festen Text und zeigt nie etwas aus der URL an. Liste synchron halten mit
 * OAUTH_MESSAGES in src/components/startggLink.ts.
 */
export type OauthReturnCode = 'confirm' | 'login' | 'denied' | 'expired' | 'mismatch' | 'failed' | 'unavailable' | 'rate-limited' | 'not-configured';

export const profileReturn = (code: OauthReturnCode): string => `/#/profil?startgg=${code}`;

/** Ordnet einen Fehler aus dem Ablauf einem Rücksprung-Code zu. */
export function returnCodeFor(err: HttpError): OauthReturnCode {
  if (err.code === 'rate-limited' || err.code === 'startgg-rate-limited') return 'rate-limited';
  if (err.code === 'startgg-not-configured') return 'not-configured';
  if (err.status >= 500 && err.code !== 'startgg-oauth-failed') return 'unavailable';
  return 'failed';
}

const notConfigured = (): HttpError => new HttpError(503, 'startgg-not-configured', {
  de: 'Die Bestätigung über start.gg ist noch nicht eingerichtet.',
  en: 'Verification through start.gg is not set up yet.',
});

/** Muss Zeichen für Zeichen der Callback-URL entsprechen, die in der start.gg-Anwendung eingetragen ist. */
export const callbackUrl = (request: Request): string => `${isHttps(request) ? 'https' : 'http'}://${requestHost(request)}${COOKIE_PATH}/callback`;

const clear = (request: Request, name: string): string => cookie(name, '', { maxAge: 0, path: COOKIE_PATH, secure: isHttps(request) });
export const clearStateCookie = (request: Request): string => clear(request, STATE_COOKIE);
export const clearResultCookie = (request: Request): string => clear(request, RESULT_COOKIE);

function randomHex(bytes: number): string {
  return [...crypto.getRandomValues(new Uint8Array(bytes))].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/* ── Schritt 1: State ─────────────────────────────────────────────────── */

export async function createState(request: Request, ownerId: string): Promise<{ state: string; setCookie: string }> {
  const state = randomHex(24);
  const exp = String(Date.now() + STATE_TTL_SEC * 1000);
  const sig = await signParts(DOMAIN_STATE, [state, ownerId, exp]);
  // SameSite=Lax: Der Rücksprung von start.gg ist eine seitenfremde Navigation, Lax-Cookies gehen dabei mit.
  const setCookie = cookie(STATE_COOKIE, [state, ownerId, exp, sig].join('.'), { maxAge: STATE_TTL_SEC, path: COOKIE_PATH, sameSite: 'Lax', secure: isHttps(request) });
  return { state, setCookie };
}

/** Prüft `state` aus der URL gegen das Cookie. Liefert das Konto, für das der Login gestartet wurde. */
export async function checkState(request: Request, stateFromUrl: string): Promise<{ ownerId: string } | 'missing' | 'mismatch'> {
  const raw = parseCookies(request)[STATE_COOKIE];
  if (!raw) return 'missing';
  const [state = '', ownerId = '', exp = '', sig = ''] = raw.split('.');
  if (!/^[0-9a-f]{48}$/.test(state) || !UUID.test(ownerId) || !/^[0-9]{10,16}$/.test(exp)) return 'missing';
  if (!(await checkParts(DOMAIN_STATE, [state, ownerId, exp], sig))) return 'missing';
  if (Number(exp) < Date.now()) return 'missing';
  if (!/^[0-9a-f]{48}$/.test(stateFromUrl) || !sameSecret(state, stateFromUrl)) return 'mismatch';
  return { ownerId };
}

export function authorizeLocation(request: Request, state: string, mockAs: string | null): string {
  const mode = oauthMode();
  if (mode === 'live') {
    const { clientId } = readStartggOauthConfig()!;
    const params = new URLSearchParams({ response_type: 'code', client_id: clientId, scope: SCOPE, redirect_uri: callbackUrl(request), state });
    return `${AUTHORIZE_URL}?${params}`;
  }
  if (mode === 'mock') {
    // Simuliertes start.gg: sofort zurück zum Callback. `as` wählt den Test-Account, `denied` simuliert „Abbrechen“.
    const params = new URLSearchParams({ state });
    if (mockAs === 'denied') params.set('error', 'access_denied');
    else params.set('code', `mock.${mockAs && /^[0-9a-z]{8}$/.test(mockAs) ? mockAs : '1a2b3c4d'}`);
    return `${COOKIE_PATH}/callback?${params}`;
  }
  throw notConfigured();
}

/* ── Schritt 2: Code tauschen, Identität holen ─────────────────────────── */

const CODE_SHAPE = /^[A-Za-z0-9._~+/=-]{8,2048}$/;
const TOKEN_SHAPE = /^[A-Za-z0-9._~+/=-]{16,4096}$/;

const CURRENT_USER = `query BlastzoneCurrentUser {
  currentUser {
    id
    slug
    player {
      gamerTag
      prefix
    }
  }
}`;

/** Tauscht den Code und fragt, wer sich angemeldet hat. Der Token lebt nur in dieser Funktion. */
export async function identityFromCode(request: Request, code: string): Promise<StartggUser> {
  if (!CODE_SHAPE.test(code)) {
    throw new HttpError(400, 'startgg-oauth-failed', {
      de: 'Die Antwort von start.gg war unvollständig.',
      en: 'The response from start.gg was incomplete.',
    });
  }
  const mode = oauthMode();
  if (mode === 'mock') {
    const user = code.startsWith('mock.') ? mockStartggUser(`user/${code.slice(5)}`) : null;
    if (!user) {
      throw new HttpError(400, 'startgg-oauth-failed', {
        de: 'start.gg hat die Anmeldung nicht bestätigt.',
        en: 'start.gg did not confirm the login.',
      });
    }
    return user;
  }
  if (mode !== 'live') throw notConfigured();

  const { clientId, clientSecret } = readStartggOauthConfig()!;
  let res: Response;
  try {
    res = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      // Felder wie in der start.gg-Doku (developer.start.gg/docs/oauth/oauth-overview). Das Secret steht nur hier im Körper.
      body: JSON.stringify({ grant_type: 'authorization_code', client_id: clientId, client_secret: clientSecret, code, redirect_uri: callbackUrl(request), scope: SCOPE }),
      signal: AbortSignal.timeout(4000),
    });
  } catch (err) {
    const timedOut = err instanceof Error && (err.name === 'TimeoutError' || err.name === 'AbortError');
    console.warn(JSON.stringify({ t: 'startgg-oauth', step: 'token', error: timedOut ? 'timeout' : 'network' }));
    throw new HttpError(503, 'startgg-unavailable', {
      de: 'start.gg ist gerade nicht erreichbar. Versuch es gleich noch einmal.',
      en: 'start.gg is not reachable right now. Try again in a moment.',
    });
  }

  let body: { access_token?: unknown; error?: unknown } = {};
  try {
    body = (await res.json()) as typeof body;
  } catch {
    /* unten */
  }
  if (!res.ok) {
    // Nur Status und Fehlercode ins Log, nie Körper oder Header der Anfrage: Dort stehen Secret und Code.
    console.warn(JSON.stringify({ t: 'startgg-oauth', step: 'token', status: res.status, error: String(body.error ?? '').slice(0, 60) }));
    if (res.status === 429) {
      throw new HttpError(503, 'startgg-rate-limited', {
        de: 'start.gg bremst gerade die Anfragen. Versuch es in ein paar Minuten erneut.',
        en: 'start.gg is throttling requests right now. Try again in a few minutes.',
      });
    }
    if (res.status >= 500) {
      throw new HttpError(503, 'startgg-unavailable', {
        de: 'start.gg ist gerade nicht erreichbar. Versuch es gleich noch einmal.',
        en: 'start.gg is not reachable right now. Try again in a moment.',
      });
    }
    throw new HttpError(400, 'startgg-oauth-failed', {
      de: 'start.gg hat die Anmeldung nicht bestätigt. Versuch es noch einmal.',
      en: 'start.gg did not confirm the login. Try again.',
    });
  }
  const token = typeof body.access_token === 'string' ? body.access_token : '';
  if (!TOKEN_SHAPE.test(token)) {
    console.warn(JSON.stringify({ t: 'startgg-oauth', step: 'token', error: 'kein access_token' }));
    throw new HttpError(502, 'startgg-oauth-failed', {
      de: 'start.gg hat die Anmeldung nicht bestätigt. Versuch es noch einmal.',
      en: 'start.gg did not confirm the login. Try again.',
    });
  }

  const data = await graphql<{ currentUser: RawUser | null }>(CURRENT_USER, {}, token, 'user');
  const user = toStartggUser(data.currentUser, '');
  const slug = user ? normalizeStartggSlug(user.slug) : null;
  if (!user || !slug || !STARTGG_ID.test(user.userId)) {
    console.warn(JSON.stringify({ t: 'startgg-oauth', step: 'currentUser', error: 'unerwartete Form' }));
    throw new HttpError(502, 'startgg-oauth-failed', {
      de: 'start.gg hat kein Profil zurückgegeben. Versuch es noch einmal.',
      en: 'start.gg did not return a profile. Try again.',
    });
  }
  return { ...user, slug };
}

/* ── Ergebnis-Cookie zwischen Callback und Bestätigen ──────────────────── */

export interface OauthResult {
  ownerId: string;
  slug: string;
  startggUserId: string;
  gamerTag: string | null;
}

const toBase64Url = (text: string): string =>
  btoa(String.fromCharCode(...new TextEncoder().encode(text)))
    .replace(/[+]/g, '-')
    .replace(/[/]/g, '_')
    .replace(/=+$/, '');

function fromBase64Url(b64: string): string | null {
  try {
    const bin = atob(b64.replace(/-/g, '+').replace(/_/g, '/'));
    return new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
  } catch {
    return null;
  }
}

export async function resultCookie(request: Request, result: OauthResult): Promise<string> {
  const payload = toBase64Url(JSON.stringify({ o: result.ownerId, s: result.slug, u: result.startggUserId, g: result.gamerTag, e: Date.now() + RESULT_TTL_SEC * 1000 }));
  const sig = await signParts(DOMAIN_RESULT, [payload]);
  return cookie(RESULT_COOKIE, `${payload}.${sig}`, { maxAge: RESULT_TTL_SEC, path: COOKIE_PATH, sameSite: 'Lax', secure: isHttps(request) });
}

/** Liest das Ergebnis nur mit gültiger Signatur und vor Ablauf. `null` heißt: nichts Verwertbares da. */
export async function readResult(request: Request): Promise<OauthResult | null> {
  const raw = parseCookies(request)[RESULT_COOKIE];
  if (!raw || raw.length > 1024) return null;
  const [payload = '', sig = '', ...rest] = raw.split('.');
  if (rest.length || !/^[A-Za-z0-9_-]{1,900}$/.test(payload)) return null;
  if (!(await checkParts(DOMAIN_RESULT, [payload], sig))) return null;
  const text = fromBase64Url(payload);
  if (!text) return null;
  let data: { o?: unknown; s?: unknown; u?: unknown; g?: unknown; e?: unknown };
  try {
    data = JSON.parse(text) as typeof data;
  } catch {
    return null;
  }
  if (typeof data.e !== 'number' || data.e < Date.now()) return null;
  const slug = typeof data.s === 'string' ? normalizeStartggSlug(data.s) : null;
  if (typeof data.o !== 'string' || !UUID.test(data.o) || !slug || typeof data.u !== 'string' || !STARTGG_ID.test(data.u)) return null;
  const gamerTag = typeof data.g === 'string' ? data.g.slice(0, 80) : null;
  return { ownerId: data.o, slug, startggUserId: data.u, gamerTag };
}

/* ── Signierte Bestätigung in startgg_links ────────────────────────────── */

/*
 * Die Zeile in startgg_links ist über die öffentliche API vom Besitzer selbst
 * beschreibbar. Ein Feld „bestätigt: ja“ könnte also jeder setzen. Gültig ist
 * eine Bestätigung deshalb nur mit HMAC über Besitzer, Slug, start.gg-ID und
 * Zeitpunkt. Den Zeitpunkt signieren wir als Millisekunden: Postgres gibt
 * timestamptz in eigener Schreibweise zurück, der Zahlenwert bleibt gleich.
 */
const verifiedParts = (ownerId: string, slug: string, startggUserId: string, verifiedAt: string): string[] | null => {
  const ms = Date.parse(verifiedAt);
  return Number.isFinite(ms) && STARTGG_ID.test(startggUserId) ? [ownerId, slug, startggUserId, String(ms)] : null;
};

export async function createVerification(ownerId: string, slug: string, startggUserId: string, now = new Date()): Promise<StartggVerification> {
  const verifiedAt = now.toISOString();
  const parts = verifiedParts(ownerId, slug, startggUserId, verifiedAt);
  if (!parts) throw new Error('createVerification: ungültige start.gg-ID');
  return { startggUserId, verifiedAt, signature: await signParts(DOMAIN_VERIFIED, parts) };
}

/** Gilt nur für genau dieses Konto und genau diesen Slug. Wer das Profil wechselt, ist wieder unbestätigt. */
export async function isVerified(ownerId: string, row: StartggLinkRow): Promise<boolean> {
  const v = row.verification;
  if (!v) return false;
  const parts = verifiedParts(ownerId, row.slug, v.startggUserId, v.verifiedAt);
  return parts ? checkParts(DOMAIN_VERIFIED, parts, v.signature) : false;
}
