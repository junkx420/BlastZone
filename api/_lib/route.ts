import { clientIp, HttpError, json, requestLang } from './http.js';
import { enforce, type Limit } from './ratelimit.js';

/**
 * Rahmen um jede API-Route. Ersetzt das frühere `handle` aus http.ts.
 *
 * - Request-ID: aus `x-vercel-id`, sonst zufällig. Steht im Header `X-Request-Id`,
 *   in jeder Logzeile und bei 500ern in der Fehlermeldung. Meldet jemand einen
 *   Fehler mit dieser ID, findet man die Stelle im Vercel-Log sofort.
 * - Eine Logzeile pro Anfrage als JSON: Route, Methode, Status, Dauer. Keine IP,
 *   keine Mail, keine Inhalte.
 * - Gesamt-Timeout: Nach 9 Sekunden antwortet die Route selbst mit 504 und JSON,
 *   statt dass Vercel nach 10 Sekunden eine HTML-Fehlerseite schickt, mit der
 *   das Frontend nichts anfangen kann.
 * - Grundlimit pro IP für jede Route, zusätzlich zu den engen Limits in den
 *   Routen selbst (Login, Registrierung, Kommentare).
 */

type Handler = (request: Request) => Promise<Response>;

export const API_LIMITS = {
  /** Jede Anfrage an /api, pro IP. Großzügig: Eine Fighter-Seite braucht zwei bis drei Aufrufe. */
  anyPerMinute: 240,
  /** Schreibende Anfragen (POST, PATCH, DELETE) pro IP. */
  writesPerMinute: 60,
  /** Nach so vielen Millisekunden bricht die Route selbst ab. Vercel-Grenze steht in vercel.json (maxDuration 10 s). */
  deadlineMs: 9000,
} as const;

const requestId = (request: Request): string => {
  const vercel = request.headers.get('x-vercel-id');
  // x-vercel-id sieht aus wie "fra1::iad1::abc123-1700000000000-xyz"; der letzte Teil reicht zum Suchen.
  const tail = vercel?.split(':').pop();
  return tail && /^[A-Za-z0-9-]{6,80}$/.test(tail) ? tail : crypto.randomUUID().slice(0, 12);
};

function log(entry: Record<string, unknown>, level: 'info' | 'error' = 'info'): void {
  const line = JSON.stringify({ t: 'api', ...entry });
  if (level === 'error') console.error(line);
  else console.log(line);
}

export function route(fn: Handler, options: { skipBaseLimit?: boolean } = {}): Handler {
  return async (request) => {
    const started = Date.now();
    const id = requestId(request);
    const path = new URL(request.url).pathname;
    const method = request.method;
    const lang = requestLang(request);

    const withId = (res: Response): Response => {
      res.headers.set('X-Request-Id', id);
      return res;
    };
    const failResponse = (e: HttpError): Response =>
      json({ ok: false, error: { code: e.code, message: e.messageFor(lang), ref: e.status >= 500 ? id : undefined } }, e.status, [], e.headers);

    let timer: ReturnType<typeof setTimeout> | undefined;
    const deadline = new Promise<never>((_, reject) => {
      timer = setTimeout(
        () =>
          reject(
            new HttpError(504, 'timeout', {
              de: `Der Server hat zu lange gebraucht. Versuch es gleich noch einmal. (Fehler-ID ${id})`,
              en: `The server took too long. Try again in a moment. (Error ID ${id})`,
            }),
          ),
        API_LIMITS.deadlineMs,
      );
    });

    let res: Response;
    try {
      const work = (async () => {
        if (!options.skipBaseLimit) {
          const ip = clientIp(request);
          const limits: Limit[] = [{ name: 'api-ip', key: ip, max: API_LIMITS.anyPerMinute, windowSec: 60 }];
          if (method !== 'GET' && method !== 'HEAD') limits.push({ name: 'api-write-ip', key: ip, max: API_LIMITS.writesPerMinute, windowSec: 60 });
          await enforce(...limits);
        }
        return fn(request);
      })();
      res = await Promise.race([work, deadline]);
    } catch (err) {
      if (err instanceof HttpError) {
        res = failResponse(err);
        if (err.status >= 500) log({ id, path, method, status: err.status, code: err.code }, 'error');
      } else {
        log({ id, path, method, status: 500, error: err instanceof Error ? `${err.name}: ${err.message}` : String(err), stack: err instanceof Error ? err.stack?.split('\n').slice(0, 6).join(' | ') : undefined }, 'error');
        res = failResponse(
          new HttpError(500, 'server-error', {
            de: `Da ist auf unserer Seite etwas schiefgelaufen. Versuch es gleich noch einmal. (Fehler-ID ${id})`,
            en: `Something went wrong on our end. Try again in a moment. (Error ID ${id})`,
          }),
        );
      }
    } finally {
      clearTimeout(timer);
    }

    log({ id, path, method, status: res.status, ms: Date.now() - started });
    return withId(res);
  };
}
