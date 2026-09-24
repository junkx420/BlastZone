/**
 * Einziger Weg des Frontends zum Backend: fetch auf /api unter derselben Domain.
 *
 * Kein Token im Browser. Die Sitzung steckt in HttpOnly-Cookies, die der Browser
 * bei `credentials: 'same-origin'` von selbst mitschickt. Deshalb braucht es hier
 * weder localStorage noch einen Authorization-Header.
 *
 * Robustheit, zentral an dieser einen Stelle:
 * - Timeout: 12 s für Lesen, 15 s für Schreiben. Danach ApiError `timeout`, nie ein
 *   Spinner, der für immer dreht.
 * - Wiederholen: nur GET, nur bei Netzfehler, Timeout, 502/503/504, höchstens zweimal
 *   mit wachsender Pause. Schreibende Anfragen nie automatisch, sonst entstünden
 *   bei einem Timeout doppelte Kommentare.
 * - Gleichzeitige gleiche GETs teilen sich eine Anfrage (zwei Komponenten fragen
 *   beim Seitenstart dasselbe).
 * - Optionaler Kurzzeit-Cache für GET (`ttl`), per `invalidate(prefix)` zu leeren.
 *   Alles mit Nutzerbezug bleibt ohne Cache, außer wer ihn ausdrücklich will.
 */

import { lang, t } from '../i18n';

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    /** Fehler-ID des Servers bei 5xx, zum Nachschlagen im Log. */
    readonly ref?: string,
  ) {
    super(message);
  }
}

type Json = Record<string, unknown>;

const OFFLINE = t('api.offline');
const TIMEOUT = t('api.timeout');

/** Der Pfad ist relativ, damit es in Unterordnern und im LAN-Dev genauso funktioniert. */
const url = (path: string): string => `./api/${path.replace(/^\//, '')}`;

export interface ApiOptions {
  method?: string;
  body?: unknown;
  /** Nur GET: Antwort so viele Millisekunden wiederverwenden. */
  ttl?: number;
}

const RETRY_STATUS = new Set([502, 503, 504]);
const inflight = new Map<string, Promise<Json>>();
const cache = new Map<string, { at: number; data: Json }>();

/** Leert zwischengespeicherte GET-Antworten, deren Pfad so beginnt. Nach jedem Schreiben aufrufen. */
export function invalidate(prefix: string): void {
  for (const key of cache.keys()) if (key.startsWith(prefix)) cache.delete(key);
}

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

async function once(path: string, method: string, body: unknown): Promise<Json> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), method === 'GET' ? 12_000 : 15_000);
  let res: Response;
  try {
    res = await fetch(url(path), {
      method,
      credentials: 'same-origin',
      cache: 'no-store',
      // X-Blastzone-Lang: Der Server übersetzt Fehlermeldungen in die Seitensprache, auch wenn sie von der Gerätesprache abweicht.
      headers: body === undefined ? { Accept: 'application/json', 'X-Blastzone-Lang': lang } : { Accept: 'application/json', 'Content-Type': 'application/json', 'X-Blastzone-Lang': lang },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    });
  } catch {
    throw controller.signal.aborted ? new ApiError(0, 'timeout', TIMEOUT) : new ApiError(0, 'offline', OFFLINE);
  } finally {
    clearTimeout(timer);
  }

  let data: Json = {};
  try {
    data = (await res.json()) as Json;
  } catch {
    // Kein JSON, etwa eine HTML-Fehlerseite, wenn die Functions nicht deployt sind oder Vercel selbst abbricht.
    if (res.status === 404) throw new ApiError(404, 'bad-response', t('api.notConfigured'));
    throw new ApiError(res.status, RETRY_STATUS.has(res.status) ? 'unavailable' : 'bad-response', res.status >= 500 ? TIMEOUT : OFFLINE);
  }

  if (!res.ok || data.ok !== true) {
    const err = (data.error ?? {}) as { code?: string; message?: string; ref?: string };
    throw new ApiError(res.status, err.code ?? 'error', err.message ?? t('api.failed'), err.ref);
  }
  return data;
}

const retryable = (err: unknown): boolean =>
  err instanceof ApiError && (err.code === 'offline' || err.code === 'timeout' || RETRY_STATUS.has(err.status));

async function withRetry(path: string): Promise<Json> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await once(path, 'GET', undefined);
    } catch (err) {
      // Offline gibt es nichts zu wiederholen, das spart dem Nutzer 1,5 s Warten auf dieselbe Meldung.
      if (attempt >= 2 || !retryable(err) || (typeof navigator !== 'undefined' && navigator.onLine === false)) throw err;
      await sleep(500 * 2 ** attempt);
    }
  }
}

export async function api<T extends Json = Json>(path: string, init: ApiOptions = {}): Promise<T> {
  const method = init.method ?? 'GET';
  if (method !== 'GET') return (await once(path, method, init.body)) as T;

  if (init.ttl) {
    const hit = cache.get(path);
    if (hit && Date.now() - hit.at < init.ttl) return hit.data as T;
  }
  let pending = inflight.get(path);
  if (!pending) {
    pending = withRetry(path).finally(() => inflight.delete(path));
    inflight.set(path, pending);
  }
  const data = await pending;
  if (init.ttl) cache.set(path, { at: Date.now(), data });
  return data as T;
}
