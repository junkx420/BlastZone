/**
 * Einziger Weg des Frontends zum Backend: fetch auf /api unter derselben Domain.
 *
 * Kein Token im Browser. Die Sitzung steckt in HttpOnly-Cookies, die der Browser
 * bei `credentials: 'same-origin'` von selbst mitschickt. Deshalb braucht es hier
 * weder localStorage noch einen Authorization-Header.
 */

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
  }
}

type Json = Record<string, unknown>;

const OFFLINE = 'Keine Verbindung zum Server. Prüf deine Internetverbindung und versuch es erneut.';

/** Der Pfad ist relativ, damit es in Unterordnern und im LAN-Dev genauso funktioniert. */
const url = (path: string): string => `./api/${path.replace(/^\//, '')}`;

export async function api<T extends Json = Json>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url(path), {
      method: init.method ?? 'GET',
      credentials: 'same-origin',
      cache: 'no-store',
      headers: init.body === undefined ? { Accept: 'application/json' } : { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: init.body === undefined ? undefined : JSON.stringify(init.body),
    });
  } catch {
    throw new ApiError(0, 'offline', OFFLINE);
  }

  let data: Json = {};
  try {
    data = (await res.json()) as Json;
  } catch {
    // Kein JSON, etwa eine HTML-Fehlerseite, wenn die Functions nicht deployt sind.
    throw new ApiError(res.status, 'bad-response', res.status === 404 ? 'Konten sind auf dieser Installation nicht eingerichtet.' : OFFLINE);
  }

  if (!res.ok || data.ok !== true) {
    const err = (data.error ?? {}) as { code?: string; message?: string };
    throw new ApiError(res.status, err.code ?? 'error', err.message ?? 'Das hat nicht geklappt.');
  }
  return data as T;
}
