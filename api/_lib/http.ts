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

export class HttpError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly headers: Record<string, string> = {},
  ) {
    super(message);
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

const fail = (e: HttpError, cookies: string[] = []): Response =>
  json({ ok: false, error: { code: e.code, message: e.message } }, e.status, cookies, e.headers);

type Handler = (request: Request) => Promise<Response>;

/** Fängt Fehler ab und übersetzt sie in JSON. Jede Route wird damit umwickelt. */
export function handle(fn: Handler): Handler {
  return async (request) => {
    try {
      return await fn(request);
    } catch (err) {
      if (err instanceof HttpError) return fail(err);
      console.error('[api] unerwarteter Fehler', err);
      return fail(new HttpError(500, 'server-error', 'Da ist auf unserer Seite etwas schiefgelaufen. Versuch es gleich noch einmal.'));
    }
  };
}

/* ── Herkunft ───────────────────────────────────────────────────────────── */

const requestHost = (request: Request): string =>
  (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? new URL(request.url).host).toLowerCase();

/**
 * CSRF-Schutz für alles außer GET. Browser schicken bei fetch mit POST, PATCH
 * und DELETE immer einen Origin-Header. Fehlt er oder zeigt er woandershin,
 * wird abgelehnt. `Sec-Fetch-Site` ist die zweite Meinung, wo vorhanden.
 */
export function assertSameOrigin(request: Request): void {
  const origin = request.headers.get('origin');
  const site = request.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin') throw new HttpError(403, 'forbidden-origin', 'Anfrage von fremder Herkunft abgelehnt.');
  if (!origin) throw new HttpError(403, 'forbidden-origin', 'Anfrage ohne Herkunft abgelehnt.');
  let host: string;
  try {
    host = new URL(origin).host.toLowerCase();
  } catch {
    throw new HttpError(403, 'forbidden-origin', 'Anfrage von fremder Herkunft abgelehnt.');
  }
  if (host !== requestHost(request)) throw new HttpError(403, 'forbidden-origin', 'Anfrage von fremder Herkunft abgelehnt.');
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
    throw new HttpError(415, 'unsupported-media-type', 'Erwartet wird JSON.');
  }
  const declared = Number(request.headers.get('content-length') ?? '0');
  if (declared > maxBytes) throw new HttpError(413, 'too-large', 'Die Anfrage ist zu groß.');
  const text = await request.text();
  if (new TextEncoder().encode(text).length > maxBytes) throw new HttpError(413, 'too-large', 'Die Anfrage ist zu groß.');
  try {
    const data: unknown = JSON.parse(text);
    if (data && typeof data === 'object' && !Array.isArray(data)) return data as Record<string, unknown>;
  } catch {
    /* unten */
  }
  throw new HttpError(400, 'bad-json', 'Die Anfrage ist kein gültiges JSON.');
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

/* ── Methoden ───────────────────────────────────────────────────────────── */

export const methodNotAllowed = (allow: string): Response =>
  json({ ok: false, error: { code: 'method-not-allowed', message: 'Methode nicht erlaubt.' } }, 405, [], { Allow: allow });
