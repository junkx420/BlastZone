import { BackendError, type AuthSession, type AuthUser, type Backend, type BookmarkRow, type CommentRow, type Profile, type Theme, type VerifiedToken } from './types.js';
import type { Env } from './env.js';
import { createJwtVerifier } from './jwt.js';
import { eq, ilikeExact, ltInt, restPath, rpcPath, type Filter } from './postgrest.js';

/** Merkt pro Instanz, dass Migration 0003 noch fehlt, damit nicht jede Registrierung zweimal fragt. */
let usernameRpcMissing = false;

/**
 * Supabase über REST, ohne SDK.
 *
 * Auth:  {url}/auth/v1/…   (GoTrue)
 * Daten: {url}/rest/v1/…   (PostgREST, Row Level Security aktiv)
 *
 * Jede Datenbankanfrage schickt `apikey` (Anon-Key) UND `Authorization` mit dem
 * Token des Nutzers. Ohne Nutzer steht dort der Anon-Key, dann gelten die
 * Policies für die Rolle `anon` (nur lesen, wo erlaubt).
 */

interface GoTrueSession {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user: GoTrueUser;
}

interface GoTrueUser {
  id: string;
  email?: string;
  email_confirmed_at?: string | null;
  confirmed_at?: string | null;
}

interface ProfileRow {
  id: string;
  username: string;
  main_fighter: string | null;
  theme: Theme;
}

interface CommentDbRow {
  id: number;
  user_id: string;
  fighter_slug: string;
  body: string;
  created_at: string;
  author: { username: string; main_fighter: string | null } | null;
}

const TIMEOUT_READ = 4000;
const TIMEOUT_WRITE = 7000;

const toUser = (u: GoTrueUser): AuthUser => ({
  id: u.id,
  email: u.email ?? '',
  emailConfirmed: Boolean(u.email_confirmed_at ?? u.confirmed_at),
});

const toSession = (s: GoTrueSession): AuthSession => ({
  accessToken: s.access_token,
  refreshToken: s.refresh_token,
  expiresIn: s.expires_in,
  user: toUser(s.user),
});

const toProfile = (p: ProfileRow): Profile => ({ id: p.id, username: p.username, mainFighter: p.main_fighter, theme: p.theme });

const toComment = (c: CommentDbRow): CommentRow => ({
  id: c.id,
  userId: c.user_id,
  fighter: c.fighter_slug,
  body: c.body,
  createdAt: c.created_at,
  author: { username: c.author?.username ?? 'Gelöschtes Konto', mainFighter: c.author?.main_fighter ?? null },
});

const toBookmark = (b: { user_id: string; combo_id: string }): BookmarkRow => ({ userId: b.user_id, comboId: b.combo_id });

/* Ein Verifier pro Projekt-URL, damit die Schlüsselliste über Anfragen hinweg im Speicher der Instanz bleibt. */
const verifiers = new Map<string, ReturnType<typeof createJwtVerifier>>();
function verifierFor(supabaseUrl: string): ReturnType<typeof createJwtVerifier> {
  let v = verifiers.get(supabaseUrl);
  if (!v) {
    v = createJwtVerifier(async () => {
      const res = await fetch(`${supabaseUrl}/auth/v1/.well-known/jwks.json`, { signal: AbortSignal.timeout(5000) });
      if (!res.ok) throw new Error(`JWKS HTTP ${res.status}`);
      const body = (await res.json()) as { keys?: unknown };
      return Array.isArray(body.keys) ? body.keys : [];
    });
    verifiers.set(supabaseUrl, v);
  }
  return v;
}

/** Liest Fehlerantworten beider APIs und ordnet sie einem Code zu. */
async function fehler(res: Response): Promise<BackendError> {
  let body: Record<string, unknown> = {};
  try {
    body = (await res.json()) as Record<string, unknown>;
  } catch {
    /* kein JSON */
  }
  const code = String(body.error_code ?? body.code ?? body.error ?? '');
  const message = String(body.msg ?? body.message ?? body.error_description ?? '');
  const log = (): void => console.warn(`[supabase] ${res.status} ${code} ${message}`);

  if (res.status === 429 || code.startsWith('over_') || message === 'rate_limited') return new BackendError('rate-limited');
  if (code === 'invalid_credentials' || code === 'invalid_grant') return new BackendError('invalid-credentials');
  if (code === 'email_not_confirmed') return new BackendError('email-not-confirmed');
  if (code === 'weak_password') return new BackendError('weak-password');
  if (code === 'bad_jwt' || code === 'session_not_found' || code === 'refresh_token_not_found' || code === 'refresh_token_already_used' || code === 'PGRST301' || code === 'PGRST303') {
    return new BackendError('invalid-token');
  }
  if (code === 'otp_expired' || code === 'flow_state_expired') return new BackendError('invalid-token');
  if (code === '23505') return new BackendError('conflict');
  if (code === '23514' || code === '22001' || code === '22P02') return new BackendError('bad-request');
  if (code === '42501' || res.status === 403) return new BackendError('forbidden');
  if (res.status === 401) return new BackendError('invalid-token');
  if (res.status === 404) return new BackendError('not-found');
  // Scheitert der Trigger beim Anlegen (Name vergeben, Domain gesperrt), meldet GoTrue einen Datenbankfehler.
  if (/database error saving new user/i.test(message)) return new BackendError('conflict');
  log();
  if (res.status >= 500) return new BackendError('unavailable');
  return new BackendError('bad-request');
}

export function supabaseBackend(env: Env): Backend {
  // Ohne Nutzer nur `apikey`. Ein Publishable Key ist kein JWT und gehört nicht in den Authorization-Header.
  const authHeaders = (token?: string): Record<string, string> => ({
    apikey: env.supabaseAnonKey,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    'Content-Type': 'application/json',
  });

  /*
   * Ein Aufruf mit Timeout. Lesende Anfragen (GET) laufen bei Netzfehler,
   * Timeout oder 502/503/504 genau einmal erneut, nach kurzer Pause. Schreibende
   * nie: Ob ein POST angekommen ist, weiß man nach einem Timeout nicht, ein
   * zweiter Versuch könnte einen Kommentar doppelt anlegen.
   * Zwei Versuche à 4 s plus Pause bleiben unter dem 9-Sekunden-Limit aus route.ts.
   */
  async function call<T>(path: string, init: RequestInit & { token?: string; prefer?: string } = {}): Promise<T> {
    const headers: Record<string, string> = { ...authHeaders(init.token) };
    if (init.prefer) headers.Prefer = init.prefer;
    const idempotent = (init.method ?? 'GET') === 'GET';
    const attempts = idempotent ? 2 : 1;

    let res: Response | null = null;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      try {
        res = await fetch(`${env.supabaseUrl}${path}`, { ...init, headers, signal: AbortSignal.timeout(idempotent ? TIMEOUT_READ : TIMEOUT_WRITE) });
        if (![502, 503, 504].includes(res.status) || attempt === attempts) break;
      } catch (err) {
        const timedOut = err instanceof Error && (err.name === 'TimeoutError' || err.name === 'AbortError');
        console.warn(JSON.stringify({ t: 'supabase', path: path.split('?')[0], attempt, error: timedOut ? 'timeout' : 'network' }));
        if (attempt === attempts) throw new BackendError('unavailable');
      }
      await new Promise((r) => setTimeout(r, 250));
    }
    if (!res) throw new BackendError('unavailable');
    if (!res.ok) throw await fehler(res);
    if (res.status === 204) return undefined as T;
    const text = await res.text();
    if (!text) return undefined as T;
    try {
      return JSON.parse(text) as T;
    } catch {
      // Ein Proxy oder eine Wartungsseite liefert HTML mit Status 200. Nicht als Daten weiterreichen.
      console.warn(JSON.stringify({ t: 'supabase', path: path.split('?')[0], error: 'kein JSON' }));
      throw new BackendError('unavailable');
    }
  }

  // Alle PostgREST-Pfade entstehen über restPath/rpcPath: Eingaben sind dort nur Literale (siehe postgrest.ts).
  const COMMENT_SELECT = 'id,user_id,fighter_slug,body,created_at,author:profiles(username,main_fighter)';
  const PROFILE_SELECT = 'id,username,main_fighter,theme';

  /*
   * Tokenprüfung. Erst lokal über die öffentlichen Schlüssel des Projekts; nur
   * wenn das nicht geht (altes HS256-Token, Schlüsselliste nicht erreichbar),
   * fragt der Server Supabase Auth. Deren Bestätigung gilt 60 Sekunden, gemerkt
   * unter dem SHA-256 des Tokens, nie unter dem Token selbst.
   */
  const verifyLocally = verifierFor(env.supabaseUrl);
  const fallbackCache = new Map<string, { userId: string; exp: number; until: number }>();

  async function verifyWithAuthServer(token: string): Promise<VerifiedToken | null> {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token));
    const key = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
    const hit = fallbackCache.get(key);
    if (hit && hit.until > Date.now()) return { userId: hit.userId, exp: hit.exp };

    let user: GoTrueUser;
    try {
      user = await call<GoTrueUser>('/auth/v1/user', { token });
    } catch (err) {
      if (err instanceof BackendError && err.code === 'unavailable') throw err;
      return null;
    }
    // Den Ablauf liest erst jetzt jemand aus dem Payload: Supabase Auth hat das Token gerade als gültig bestätigt.
    let exp = 0;
    try {
      const payload = JSON.parse(atob((token.split('.')[1] ?? '').replace(/-/g, '+').replace(/_/g, '/'))) as { sub?: unknown; exp?: unknown };
      if (payload.sub !== user.id || typeof payload.exp !== 'number') return null;
      exp = payload.exp;
    } catch {
      return null;
    }
    if (fallbackCache.size > 500) fallbackCache.clear();
    fallbackCache.set(key, { userId: user.id, exp, until: Math.min(Date.now() + 60_000, exp * 1000) });
    return { userId: user.id, exp };
  }

  return {
    async signUp(email, password, username) {
      // Ist die E-Mail-Bestätigung aktiv, kommt hier kein Token zurück. Genau so soll es sein.
      await call('/auth/v1/signup', { method: 'POST', body: JSON.stringify({ email, password, data: { username } }) });
    },

    async signIn(email, password) {
      return toSession(await call<GoTrueSession>('/auth/v1/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email, password }) }));
    },

    async refresh(refreshToken) {
      return toSession(await call<GoTrueSession>('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: JSON.stringify({ refresh_token: refreshToken }) }));
    },

    async signOut(accessToken) {
      await call('/auth/v1/logout?scope=local', { method: 'POST', token: accessToken });
    },

    async getUser(accessToken) {
      return toUser(await call<GoTrueUser>('/auth/v1/user', { token: accessToken }));
    },

    async verifyAccessToken(accessToken) {
      const local = await verifyLocally(accessToken);
      return local === 'unverifiable' ? verifyWithAuthServer(accessToken) : local;
    },

    async verifyEmail(tokenHash) {
      return toSession(await call<GoTrueSession>('/auth/v1/verify', { method: 'POST', body: JSON.stringify({ type: 'email', token_hash: tokenHash }) }));
    },

    async resendConfirmation(email) {
      await call('/auth/v1/resend', { method: 'POST', body: JSON.stringify({ type: 'signup', email }) });
    },

    async usernameTaken(username) {
      // Groß- und Kleinschreibung zählen nicht, „Fox“ und „fox“ sind derselbe Name.
      // Bevorzugt die Funktion aus Migration 0003, die den Index auf lower(username) nutzt.
      if (!usernameRpcMissing) {
        try {
          return (await call<boolean>(rpcPath('username_taken'), { method: 'POST', body: JSON.stringify({ p_username: username }) })) === true;
        } catch (err) {
          if (!(err instanceof BackendError && err.code === 'not-found')) throw err;
          usernameRpcMissing = true;
          console.warn(JSON.stringify({ t: 'supabase', hinweis: 'username_taken fehlt, Migration 0003 ausführen. Nutze ilike.' }));
        }
      }
      // Rückfall vor Migration 0003. ilikeExact maskiert alle Platzhalter.
      const rows = await call<Array<{ id: string }>>(restPath('profiles', { select: 'id', where: { username: ilikeExact(username) }, limit: 1 }));
      return rows.length > 0;
    },

    /*
     * Ab hier: Jede Abfrage auf Nutzerdaten filtert ausdrücklich auf auth.userId,
     * zusätzlich zu RLS. Und jede liefert den Besitzer mit zurück, damit die Route
     * ihn prüfen kann (owner.ts), bevor irgendetwas den Server verlässt.
     */
    async getProfile(auth) {
      const rows = await call<ProfileRow[]>(restPath('profiles', { select: PROFILE_SELECT, where: { id: eq(auth.userId) }, limit: 1 }), { token: auth.token });
      return rows[0] ? toProfile(rows[0]) : null;
    },

    async updateProfile(auth, patch) {
      const body: Record<string, unknown> = {};
      if (patch.mainFighter !== undefined) body.main_fighter = patch.mainFighter;
      if (patch.theme !== undefined) body.theme = patch.theme;
      const rows = await call<ProfileRow[]>(restPath('profiles', { select: PROFILE_SELECT, where: { id: eq(auth.userId) } }), {
        method: 'PATCH',
        token: auth.token,
        prefer: 'return=representation',
        body: JSON.stringify(body),
      });
      if (!rows[0]) throw new BackendError('not-found');
      return toProfile(rows[0]);
    },

    async deleteAccount(auth) {
      // Die Funktion löscht ausschließlich auth.uid() aus dem Token, einen Parameter für die ID gibt es bewusst nicht.
      await call(rpcPath('delete_own_account'), { method: 'POST', token: auth.token, body: '{}' });
    },

    async listComments(fighter, limit, before) {
      // Seiten per id statt offset: bleibt stabil, wenn währenddessen neue Kommentare dazukommen,
      // und nutzt den Index (fighter_slug, id desc) aus Migration 0003.
      const where: Record<string, Filter> = { fighter_slug: eq(fighter) };
      if (before) where.id = ltInt(before);
      const rows = await call<CommentDbRow[]>(restPath('comments', { select: COMMENT_SELECT, where, order: 'id.desc', limit }));
      return rows.map(toComment);
    },

    async addComment(auth, fighter, body) {
      const rows = await call<CommentDbRow[]>(restPath('comments', { select: COMMENT_SELECT }), {
        method: 'POST',
        token: auth.token,
        prefer: 'return=representation',
        body: JSON.stringify({ fighter_slug: fighter, body }),
      });
      if (!rows[0]) throw new BackendError('forbidden');
      return toComment(rows[0]);
    },

    async deleteComment(auth, id) {
      const rows = await call<Array<{ id: number; user_id: string }>>(
        restPath('comments', { select: 'id,user_id', where: { id: eq(id), user_id: eq(auth.userId) } }),
        { method: 'DELETE', token: auth.token, prefer: 'return=representation' },
      );
      return rows.map((r) => ({ id: r.id, userId: r.user_id }));
    },

    async listBookmarks(auth) {
      const rows = await call<Array<{ user_id: string; combo_id: string }>>(
        restPath('bookmarks', { select: 'user_id,combo_id', where: { user_id: eq(auth.userId) }, order: 'created_at.desc' }),
        { token: auth.token },
      );
      return rows.map(toBookmark);
    },

    async addBookmark(auth, comboId) {
      // Kein user_id im Körper: Den setzt der Trigger aus auth.uid(). Bei einem Duplikat kommt eine leere Liste zurück.
      const rows = await call<Array<{ user_id: string; combo_id: string }>>(restPath('bookmarks', { select: 'user_id,combo_id', onConflict: ['user_id', 'combo_id'] }), {
        method: 'POST',
        token: auth.token,
        prefer: 'resolution=ignore-duplicates,return=representation',
        body: JSON.stringify({ combo_id: comboId }),
      });
      return (rows ?? []).map(toBookmark);
    },

    async removeBookmark(auth, comboId) {
      const rows = await call<Array<{ user_id: string; combo_id: string }>>(
        restPath('bookmarks', { select: 'user_id,combo_id', where: { user_id: eq(auth.userId), combo_id: eq(comboId) } }),
        { method: 'DELETE', token: auth.token, prefer: 'return=representation' },
      );
      return (rows ?? []).map(toBookmark);
    },
  };
}
