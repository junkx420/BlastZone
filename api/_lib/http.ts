/**
 * HTTP-Helfer für die Vercel-Functions (Web-Signatur: Request rein, Response raus).
 *
 * Sicherheitsentscheidungen, die hier zentral stehen:
 * - Jede Antwort ist `no-store`. Nichts mit Konto-Bezug landet in einem Cache.
 * - Schreibende Anfragen müssen vom eigenen Origin kommen (CSRF-Schutz). Die
 *   Session-Cookies sind zusätzlich SameSite, und ohne CORS-Header blockt der
 *   Browser fremde Seiten ohnehin beim Preflight, sobald JSON geschickt wird.
 * - Bodies sind auf wenige Kilobyte begrenzt und müssen JSON sein.
 * - Unbekannte Fehler gehen als generische 500 raus, Details nur ins Server-Log.
 */

/**
 * Text für die Oberfläche in beiden Sprachen. Die Seite schickt ihre Sprache im
 * Header `X-Blastzone-Lang` mit (src/services/api.ts), route() wählt danach aus.
 * Ein reiner String gilt für beide Sprachen und ist nur für Texte ohne Sprache gedacht.
 */
export type Text = string | { de: string; en: string };
export type Lang = 'de' | 'en';

/** Ohne Header (curl, alte Clients) bleibt es beim Deutschen, wie die Seite gebaut wurde. */
export const requestLang = (request: Request): Lang => (request.headers.get('x-blastzone-lang') === 'en' ? 'en' : 'de');

export const pick = (text: Text, lang: Lang): string => (typeof text === 'string' ? text : text[lang]);

export class HttpError extends Error {
  readonly text: Text;
  constructor(
    readonly status: number,
    readonly code: string,
    text: Text,
    readonly headers: Record<string, string> = {},
  ) {
    // `message` bleibt deutsch: Logs und Vergleiche im Code sehen immer dieselbe Fassung.
    super(pick(text, 'de'));
    this.text = text;
  }

  messageFor(lang: Lang): string {
    return pick(this.text, lang);
  }
}

const BASE_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
};

export function json(data: unknown, status = 200, cookies: string[] = [], extra: Record<string, string> = {}): Response {
  const headers = new Headers({ ...BASE_HEADERS, ...extra });
  cookies.forEach((c) => headers.append('Set-Cookie', c));
  return new Response(JSON.stringify(data), { status, headers });
}

export const ok = (data: Record<string, unknown> = {}, cookies: string[] = [], status = 200): Response => json({ ok: true, ...data }, status, cookies);

/**
 * 302 für Routen, die der Browser als Seite aufruft (OAuth). Kein Response.redirect:
 * Dessen Header sind unveränderlich, route() setzt aber noch X-Request-Id.
 * `no-referrer`, damit der OAuth-Code aus der URL nicht als Referrer weiterwandert.
 */
export function redirect(location: string, cookies: string[] = []): Response {
  const headers = new Headers({ Location: location, 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' });
  cookies.forEach((c) => headers.append('Set-Cookie', c));
  return new Response(null, { status: 302, headers });
}

// Fehlerbehandlung, Logging, Timeout und Grundlimit jeder Route: route.ts.

/* ── Herkunft ───────────────────────────────────────────────────────────── */

export const requestHost = (request: Request): string =>
  (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? new URL(request.url).host).toLowerCase();

/**
 * CSRF-Schutz für alles außer GET. Browser schicken bei fetch mit POST, PATCH
 * und DELETE immer einen Origin-Header. Fehlt er oder zeigt er woandershin,
 * wird abgelehnt. `Sec-Fetch-Site` ist die zweite Meinung, wo vorhanden.
 */
export function assertSameOrigin(request: Request): void {
  const origin = request.headers.get('origin');
  const site = request.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin') {
    throw new HttpError(403, 'forbidden-origin', {
      de: 'Anfrage von fremder Herkunft abgelehnt.',
      en: 'Request from a foreign origin rejected.',
    });
  }
  if (!origin) throw new HttpError(403, 'forbidden-origin', { de: 'Anfrage ohne Herkunft abgelehnt.', en: 'Request without origin rejected.' });
  let host: string;
  try {
    host = new URL(origin).host.toLowerCase();
  } catch {
    throw new HttpError(403, 'forbidden-origin', { de: 'Anfrage von fremder Herkunft abgelehnt.', en: 'Request from a foreign origin rejected.' });
  }
  if (host !== requestHost(request)) {
    throw new HttpError(403, 'forbidden-origin', {
      de: 'Anfrage von fremder Herkunft abgelehnt.',
      en: 'Request from a foreign origin rejected.',
    });
  }
}

export const isHttps = (request: Request): boolean =>
  (request.headers.get('x-forwarded-proto') ?? new URL(request.url).protocol.replace(':', '')) === 'https';

/** Vercel setzt x-forwarded-for selbst und überschreibt, was der Client schickt. Der erste Eintrag ist der Client. */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || request.headers.get('x-real-ip') || 'unbekannt';
}

/* ── Body ───────────────────────────────────────────────────────────────── */

export async function readJson(request: Request, maxBytes = 4096): Promise<Record<string, unknown>> {
  if (!(request.headers.get('content-type') ?? '').toLowerCase().startsWith('application/json')) {
    throw new HttpError(415, 'unsupported-media-type', { de: 'Erwartet wird JSON.', en: 'JSON expected.' });
  }
  const declared = Number(request.headers.get('content-length') ?? '0');
  if (declared > maxBytes) throw new HttpError(413, 'too-large', { de: 'Die Anfrage ist zu groß.', en: 'The request is too large.' });
  const text = await request.text();
  if (new TextEncoder().encode(text).length > maxBytes) {
    throw new HttpError(413, 'too-large', {
      de: 'Die Anfrage ist zu groß.',
      en: 'The request is too large.',
    });
  }
  try {
    const data: unknown = JSON.parse(text);
    if (data && typeof data === 'object' && !Array.isArray(data)) return data as Record<string, unknown>;
  } catch {
    /* unten */
  }
  throw new HttpError(400, 'bad-json', { de: 'Die Anfrage ist kein gültiges JSON.', en: 'The request is not valid JSON.' });
}

export const str = (v: unknown): string => (typeof v === 'string' ? v : '');

/* ── Cookies ────────────────────────────────────────────────────────────── */

export function parseCookies(request: Request): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of (request.headers.get('cookie') ?? '').split(';')) {
    const i = part.indexOf('=');
    if (i < 0) continue;
    const name = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();
    try {
      out[name] = decodeURIComponent(value);
    } catch {
      out[name] = value;
    }
  }
  return out;
}

export interface CookieOptions {
  maxAge: number;
  path?: string;
  sameSite?: 'Strict' | 'Lax';
  secure: boolean;
}

/** Immer HttpOnly: JavaScript im Browser kommt an die Tokens nicht heran, auch nicht bei einer XSS-Lücke. */
export function cookie(name: string, value: string, { maxAge, path = '/api', sameSite = 'Lax', secure }: CookieOptions): string {
  return [
    `${name}=${encodeURIComponent(value)}`,
    `Path=${path}`,
    `Max-Age=${Math.max(0, Math.floor(maxAge))}`,
    'HttpOnly',
    `SameSite=${sameSite}`,
    secure ? 'Secure' : '',
  ]
    .filter(Boolean)
    .join('; ');
}
