import { BackendError, type AuthSession, type AuthUser, type Backend, type CommentRow, type Profile, type Theme } from './types.js';
import type { Env } from './env.js';

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
  fighter_slug: string;
  body: string;
  created_at: string;
  author: { id: string; username: string; main_fighter: string | null } | null;
}

const TIMEOUT = 8000;

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
  fighter: c.fighter_slug,
  body: c.body,
  createdAt: c.created_at,
  author: { id: c.author?.id ?? '', username: c.author?.username ?? 'Gelöschtes Konto', mainFighter: c.author?.main_fighter ?? null },
});

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

  async function call<T>(path: string, init: RequestInit & { token?: string; prefer?: string } = {}): Promise<T> {
    const headers: Record<string, string> = { ...authHeaders(init.token) };
    if (init.prefer) headers.Prefer = init.prefer;
    let res: Response;
    try {
      res = await fetch(`${env.supabaseUrl}${path}`, { ...init, headers, signal: AbortSignal.timeout(TIMEOUT) });
    } catch (err) {
      console.error('[supabase] nicht erreichbar', err);
      throw new BackendError('unavailable');
    }
    if (!res.ok) throw await fehler(res);
    if (res.status === 204) return undefined as T;
    const text = await res.text();
    return (text ? JSON.parse(text) : undefined) as T;
  }

  const q = encodeURIComponent;

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

    async verifyEmail(tokenHash) {
      return toSession(await call<GoTrueSession>('/auth/v1/verify', { method: 'POST', body: JSON.stringify({ type: 'email', token_hash: tokenHash }) }));
    },

    async resendConfirmation(email) {
      await call('/auth/v1/resend', { method: 'POST', body: JSON.stringify({ type: 'signup', email }) });
    },

    async usernameTaken(username) {
      // ilike ohne Platzhalter: Groß- und Kleinschreibung zählen nicht, „Fox“ und „fox“ sind derselbe Name.
      const escaped = username.replace(/[%_\\]/g, (c) => `\\${c}`);
      const rows = await call<Array<{ id: string }>>(`/rest/v1/profiles?select=id&username=ilike.${q(escaped)}&limit=1`);
      return rows.length > 0;
    },

    async getProfile(accessToken, userId) {
      const rows = await call<ProfileRow[]>(`/rest/v1/profiles?select=id,username,main_fighter,theme&id=eq.${q(userId)}&limit=1`, { token: accessToken });
      return rows[0] ? toProfile(rows[0]) : null;
    },

    async updateProfile(accessToken, userId, patch) {
      const body: Record<string, unknown> = {};
      if (patch.mainFighter !== undefined) body.main_fighter = patch.mainFighter;
      if (patch.theme !== undefined) body.theme = patch.theme;
      const rows = await call<ProfileRow[]>(`/rest/v1/profiles?id=eq.${q(userId)}&select=id,username,main_fighter,theme`, {
        method: 'PATCH',
        token: accessToken,
        prefer: 'return=representation',
        body: JSON.stringify(body),
      });
      if (!rows[0]) throw new BackendError('not-found');
      return toProfile(rows[0]);
    },

    async deleteAccount(accessToken) {
      await call('/rest/v1/rpc/delete_own_account', { method: 'POST', token: accessToken, body: '{}' });
    },

    async listComments(fighter, limit) {
      const rows = await call<CommentDbRow[]>(
        `/rest/v1/comments?select=id,fighter_slug,body,created_at,author:profiles(id,username,main_fighter)&fighter_slug=eq.${q(fighter)}&order=created_at.desc&limit=${limit}`,
      );
      return rows.map(toComment);
    },

    async addComment(accessToken, fighter, body) {
      const rows = await call<CommentDbRow[]>(
        '/rest/v1/comments?select=id,fighter_slug,body,created_at,author:profiles(id,username,main_fighter)',
        { method: 'POST', token: accessToken, prefer: 'return=representation', body: JSON.stringify({ fighter_slug: fighter, body }) },
      );
      if (!rows[0]) throw new BackendError('forbidden');
      return toComment(rows[0]);
    },

    async deleteComment(accessToken, id) {
      // RLS lässt nur eigene Kommentare löschen. Trifft die Bedingung nichts, kommt eine leere Liste zurück.
      const rows = await call<Array<{ id: number }>>(`/rest/v1/comments?id=eq.${id}&select=id`, { method: 'DELETE', token: accessToken, prefer: 'return=representation' });
      if (!rows.length) throw new BackendError('not-found');
    },

    async listBookmarks(accessToken) {
      const rows = await call<Array<{ combo_id: string }>>('/rest/v1/bookmarks?select=combo_id&order=created_at.desc', { token: accessToken });
      return rows.map((r) => r.combo_id);
    },

    async addBookmark(accessToken, comboId) {
      await call('/rest/v1/bookmarks?on_conflict=user_id,combo_id', {
        method: 'POST',
        token: accessToken,
        prefer: 'resolution=ignore-duplicates,return=minimal',
        body: JSON.stringify({ combo_id: comboId }),
      });
    },

    async removeBookmark(accessToken, comboId) {
      await call(`/rest/v1/bookmarks?combo_id=eq.${q(comboId)}`, { method: 'DELETE', token: accessToken, prefer: 'return=minimal' });
    },
  };
}
