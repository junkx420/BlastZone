import {
  BackendError,
  COMMUNITY_DEFAULTS,
  type AuthSession,
  type AuthUser,
  type Backend,
  type BookmarkRow,
  type CommentRow,
  type CommunityRow,
  type MessageRow,
  type Profile,
  type StartggCacheRow,
  type StartggLinkRow,
  type Theme,
  type VerifiedToken,
} from './types.js';
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
  /** Fehlt vor Migration 0007. */
  main_skin?: number;
  theme: Theme;
}

interface CommentDbRow {
  id: number;
  user_id: string;
  fighter_slug: string;
  body: string;
  created_at: string;
  author: { username: string; main_fighter: string | null; main_skin?: number } | null;
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

const toProfile = (p: ProfileRow): Profile => ({ id: p.id, username: p.username, mainFighter: p.main_fighter, mainSkin: p.main_skin ?? 1, theme: p.theme });

const toComment = (c: CommentDbRow): CommentRow => ({
  id: c.id,
  userId: c.user_id,
  fighter: c.fighter_slug,
  body: c.body,
  createdAt: c.created_at,
  author: { username: c.author?.username ?? 'Gelöschtes Konto', mainFighter: c.author?.main_fighter ?? null, mainSkin: c.author?.main_skin ?? 1 },
});

const toBookmark = (b: { user_id: string; combo_id: string }): BookmarkRow => ({ userId: b.user_id, comboId: b.combo_id });

interface StartggLinkDbRow {
  user_id: string;
  slug: string;
  gamer_tag: string | null;
  updated_at: string;
  startgg_user_id?: string | null;
  verified_at?: string | null;
  verification?: string | null;
}
const toStartggLink = (r: StartggLinkDbRow): StartggLinkRow => ({
  userId: r.user_id,
  slug: r.slug,
  gamerTag: r.gamer_tag,
  updatedAt: r.updated_at,
  verification: r.startgg_user_id && r.verified_at && r.verification ? { startggUserId: r.startgg_user_id, verifiedAt: r.verified_at, signature: r.verification } : null,
});
const STARTGG_LINK_SELECT_BASE = 'user_id,slug,gamer_tag,updated_at';
const STARTGG_LINK_SELECT = `${STARTGG_LINK_SELECT_BASE},startgg_user_id,verified_at,verification`;

/*
 * Migration 0005 bringt die Spalten für die Bestätigung. Läuft der Code schon, bevor
 * sie eingespielt ist, antwortet PostgREST auf die Spalten mit 400. Dann liest und
 * schreibt der Server ohne sie weiter, damit die Verknüpfung selbst nicht ausfällt.
 * Nur Bestätigen geht erst nach der Migration.
 */
let verificationColumnsMissing = false;

interface CommunityDbRow {
  user_id: string;
  listed: boolean;
  secondaries: string[] | null;
  /** Die drei folgenden fehlen vor Migration 0007. */
  secondary_skins?: number[] | null;
  show_placements?: boolean;
  allow_dms?: boolean;
}
const toCommunity = (r: CommunityDbRow): CommunityRow => ({
  userId: r.user_id,
  listed: r.listed,
  secondaries: r.secondaries ?? [],
  secondarySkins: r.secondary_skins ?? [],
  showPlacements: r.show_placements ?? COMMUNITY_DEFAULTS.showPlacements,
  allowDms: r.allow_dms ?? COMMUNITY_DEFAULTS.allowDms,
});

/** Merkt pro Instanz, dass Migration 0006 fehlt. Wird beim nächsten Kaltstart neu geprüft. */
let communityTableMissing = false;

/*
 * Migration 0007 (Skins, Nachrichten, Blockieren). Läuft der Code schon, bevor sie
 * eingespielt ist, lesen Profile, Kommentare und Community ohne die neuen Spalten
 * weiter (Skin 1, Standardwerte). Nur die neuen Funktionen melden „nicht verfügbar“.
 */
let socialMissing = false;

function noteSocialMissing(): BackendError {
  if (!socialMissing) {
    socialMissing = true;
    console.error(JSON.stringify({ t: 'supabase', hinweis: 'Migration 0007 fehlt: Skins, Nachrichten, Blockieren. supabase/migrations/0007_social.sql ausführen.' }));
  }
  return new BackendError('unavailable', 'social-missing');
}

const profileSelect = (): string => (socialMissing ? 'id,username,main_fighter,theme' : 'id,username,main_fighter,main_skin,theme');
const commentSelect = (): string =>
  `id,user_id,fighter_slug,body,created_at,author:profiles(${socialMissing ? 'username,main_fighter' : 'username,main_fighter,main_skin'})`;
const communitySelect = (): string => (socialMissing ? 'user_id,listed,secondaries' : 'user_id,listed,secondaries,secondary_skins,show_placements,allow_dms');

/**
 * Eine Anfrage, die neue Spalten liest: Fehlen sie, einmal ohne sie wiederholen.
 * Auch für Schreibzugriffe mit Rückgabe erlaubt: Eine unbekannte Spalte scheitert
 * schon beim Parsen der Abfrage, geschrieben wurde dann nichts.
 */
async function withoutSocialColumns<T>(run: () => Promise<T>): Promise<T> {
  try {
    return await run();
  } catch (err) {
    if (socialMissing || !isMissingColumn(err)) throw err;
    noteSocialMissing();
    return run();
  }
}

/**
 * Tabelle und RPC aus 0008 fehlen (Community-Matchup-Chart). Wie bei 0007:
 * Der Rest der Seite laeuft weiter, nur diese Funktion meldet sich als
 * "wird gerade eingerichtet".
 */
function matchupMissing(err: unknown): unknown {
  return err instanceof BackendError && err.code === 'not-found' ? new BackendError('unavailable', 'matchup-missing') : err;
}

/** RPCs und Tabellen aus 0007 fehlen: PostgREST antwortet mit 404. */
function socialRpcMissing(err: unknown): unknown {
  return err instanceof BackendError && err.code === 'not-found' ? noteSocialMissing() : err;
}

interface MessageDbRow {
  id: number;
  sender_id: string;
  recipient_id: string;
  body: string;
  created_at: string;
  read_at: string | null;
}
const toMessage = (r: MessageDbRow): MessageRow => ({
  id: r.id,
  senderId: r.sender_id,
  recipientId: r.recipient_id,
  body: r.body,
  createdAt: r.created_at,
  readAt: r.read_at,
});

function communityMissing(err: unknown): unknown {
  if (!(err instanceof BackendError && err.code === 'not-found')) return err;
  if (!communityTableMissing) {
    communityTableMissing = true;
    console.error(JSON.stringify({ t: 'supabase', hinweis: 'Migration 0006 fehlt: community_profiles bzw. community_directory. supabase/migrations/0006_community.sql ausführen.' }));
  }
  return new BackendError('unavailable', 'community-missing');
}

interface StartggCacheDbRow {
  user_id: string;
  slug: string;
  payload: unknown;
  signature: string;
}
const toStartggCache = (r: StartggCacheDbRow): StartggCacheRow => ({ userId: r.user_id, slug: r.slug, payload: r.payload, signature: r.signature });
const STARTGG_CACHE_SELECT = 'user_id,slug,payload,signature';

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
  // Der Postgres- bzw. PostgREST-Code als Nachricht, etwa 42703 (Spalte fehlt). Geht nie an den Browser.
  return new BackendError('bad-request', code || 'bad-request');
}

/** Spalte unbekannt: beim Lesen 42703 von Postgres, beim Schreiben PGRST204 aus dem Schema-Cache. */
const isMissingColumn = (err: unknown): boolean => err instanceof BackendError && err.code === 'bad-request' && (err.message === '42703' || err.message === 'PGRST204');

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

  /**
   * Anzahl passender Zeilen, ohne sie zu laden: HEAD mit `Prefer: count=exact`,
   * PostgREST antwortet mit `Content-Range: *\/N`. Lesend, also ein zweiter Versuch
   * bei Netzfehler wie in `call`.
   */
  async function count(path: string, token?: string): Promise<number> {
    const headers: Record<string, string> = { ...authHeaders(token), Prefer: 'count=exact' };
    let res: Response | null = null;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        res = await fetch(`${env.supabaseUrl}${path}`, { method: 'HEAD', headers, signal: AbortSignal.timeout(TIMEOUT_READ) });
        if (![502, 503, 504].includes(res.status) || attempt === 2) break;
      } catch {
        if (attempt === 2) throw new BackendError('unavailable');
      }
      await new Promise((r) => setTimeout(r, 250));
    }
    if (!res) throw new BackendError('unavailable');
    if (!res.ok) throw await fehler(res);
    const total = Number((res.headers.get('content-range') ?? '').split('/').pop());
    if (!Number.isFinite(total) || total < 0) throw new BackendError('unavailable');
    return total;
  }

  /*
   * Community (Migration 0006). Fehlt die Tabelle noch, antwortet PostgREST mit 404.
   * Lesen liefert dann Standardwerte, damit Spielerprofile weiter laden. Schreiben und
   * das Verzeichnis melden „nicht verfügbar“ und nennen im Log die Migration.
   */
  async function readCommunity(userId: string, token: string): Promise<CommunityRow[]> {
    if (communityTableMissing) return [];
    try {
      const rows = await withoutSocialColumns(() =>
        call<CommunityDbRow[]>(restPath('community_profiles', { select: communitySelect(), where: { user_id: eq(userId) }, limit: 1 }), { token }),
      );
      return (rows ?? []).map(toCommunity);
    } catch (err) {
      if (!(err instanceof BackendError && err.code === 'not-found')) throw err;
      communityMissing(err);
      return [];
    }
  }

  // Alle PostgREST-Pfade entstehen über restPath/rpcPath: Eingaben sind dort nur Literale (siehe postgrest.ts).

  /** Profil eines beliebigen Kontos per Name. ilikeExact maskiert % und _, der Unique-Index auf lower(username) garantiert höchstens einen Treffer. */
  async function profileByName(token: string, username: string): Promise<(ProfileRow & { created_at: string }) | null> {
    const rows = await withoutSocialColumns(() =>
      call<Array<ProfileRow & { created_at: string }>>(
        restPath('profiles', {
          select: socialMissing ? 'id,username,main_fighter,created_at' : 'id,username,main_fighter,main_skin,created_at',
          where: { username: ilikeExact(username) },
          limit: 1,
        }),
        { token },
      ),
    );
    return rows[0] ?? null;
  }

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

    async getPlayer(auth, username) {
      const p = await profileByName(auth.token, username);
      if (!p) return null;
      const [commentCount, recent, community] = await Promise.all([
        count(restPath('comments', { select: 'id', where: { user_id: eq(p.id) } }), auth.token),
        call<Array<{ id: number; fighter_slug: string; body: string; created_at: string }>>(
          restPath('comments', { select: 'id,fighter_slug,body,created_at', where: { user_id: eq(p.id) }, order: 'id.desc', limit: 5 }),
          { token: auth.token },
        ),
        readCommunity(p.id, auth.token),
      ]);
      const c = community[0] ?? { ...COMMUNITY_DEFAULTS, userId: p.id };
      return {
        userId: p.id,
        username: p.username,
        mainFighter: p.main_fighter,
        mainSkin: p.main_skin ?? 1,
        createdAt: p.created_at,
        commentCount,
        recentComments: recent.map((r) => ({ id: r.id, fighter: r.fighter_slug, body: r.body, createdAt: r.created_at })),
        secondaries: c.userId === p.id ? c.secondaries : [],
        secondarySkins: c.userId === p.id ? c.secondarySkins : [],
        showPlacements: c.userId === p.id && c.showPlacements,
      };
    },

    async findProfile(auth, username) {
      const p = await profileByName(auth.token, username);
      return p ? { userId: p.id, username: p.username, mainFighter: p.main_fighter, mainSkin: p.main_skin ?? 1 } : null;
    },

    async getSharedStartgg(auth, ownerId) {
      // Ohne Freigabe (oder vor 0007) liefert RLS leere Listen. Die Bestätigungsspalten gibt es seit 0005.
      const [links, cache] = await Promise.all([
        call<StartggLinkDbRow[]>(restPath('startgg_links', { select: STARTGG_LINK_SELECT, where: { user_id: eq(ownerId) }, limit: 1 }), { token: auth.token }),
        call<StartggCacheDbRow[]>(restPath('startgg_cache', { select: STARTGG_CACHE_SELECT, where: { user_id: eq(ownerId) }, limit: 1 }), { token: auth.token }),
      ]);
      return { links: (links ?? []).map(toStartggLink), cache: (cache ?? []).map(toStartggCache) };
    },

    async canMessage(auth, recipientId) {
      try {
        return (await call<boolean>(rpcPath('can_message'), { method: 'POST', token: auth.token, body: JSON.stringify({ p_recipient: recipientId }) })) === true;
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async listMessages(auth, otherId, limit, before) {
      try {
        const rows = await call<MessageDbRow[]>(rpcPath('dm_thread'), {
          method: 'POST',
          token: auth.token,
          body: JSON.stringify({ p_other: otherId, p_before: before ?? null, p_limit: limit }),
        });
        return (rows ?? []).map(toMessage);
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async sendMessage(auth, recipientId, body) {
      try {
        // Kein sender_id im Körper: Den setzt der Trigger aus auth.uid(). RLS prüft Empfänger, Blockierung und Mail.
        const rows = await call<MessageDbRow[]>(restPath('messages', { select: 'id,sender_id,recipient_id,body,created_at,read_at' }), {
          method: 'POST',
          token: auth.token,
          prefer: 'return=representation',
          body: JSON.stringify({ recipient_id: recipientId, body }),
        });
        return (rows ?? []).map(toMessage);
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async markRead(auth, otherId) {
      try {
        await call(rpcPath('dm_mark_read'), { method: 'POST', token: auth.token, body: JSON.stringify({ p_other: otherId }) });
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async listConversations(auth, limit) {
      try {
        const rows = await call<
          Array<{ username: string; main_fighter: string | null; main_skin: number; last_body: string; last_at: string; last_mine: boolean; unread: number }>
        >(rpcPath('dm_conversations'), { method: 'POST', token: auth.token, body: JSON.stringify({ p_limit: limit }) });
        return (rows ?? []).map((r) => ({
          username: r.username,
          mainFighter: r.main_fighter,
          mainSkin: r.main_skin,
          lastBody: r.last_body,
          lastAt: r.last_at,
          lastMine: r.last_mine,
          unread: r.unread,
        }));
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async unreadCount(auth) {
      try {
        const n = await call<number>(rpcPath('dm_unread_count'), { method: 'POST', token: auth.token, body: '{}' });
        return typeof n === 'number' ? n : 0;
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async matchupSummary(auth, low, high) {
      try {
        // numeric kommt bei PostgREST als Zeichenkette, deshalb durch Number().
        const rows = await call<Array<{ schnitt: string | number | null; stimmen: number; meine: number | null }>>(rpcPath('matchup_summary'), {
          method: 'POST',
          token: auth.token,
          body: JSON.stringify({ p_low: low, p_high: high }),
        });
        const r = rows?.[0];
        return {
          average: r?.schnitt === null || r?.schnitt === undefined ? null : Number(r.schnitt),
          votes: r?.stimmen ?? 0,
          mine: r?.meine ?? null,
        };
      } catch (err) {
        throw matchupMissing(err);
      }
    },

    async rateMatchup(auth, low, high, rating) {
      try {
        // user_id kommt aus dem Token (DEFAULT auth.uid()), nie aus dem Koerper.
        await call(restPath('matchup_votes', { onConflict: ['user_id', 'low', 'high'] }), {
          method: 'POST',
          token: auth.token,
          prefer: 'resolution=merge-duplicates',
          body: JSON.stringify({ low, high, rating, updated_at: new Date().toISOString() }),
        });
      } catch (err) {
        throw matchupMissing(err);
      }
      return this.matchupSummary(auth, low, high);
    },

    async unrateMatchup(auth, low, high) {
      try {
        await call(restPath('matchup_votes', { where: { user_id: eq(auth.userId), low: eq(low), high: eq(high) } }), {
          method: 'DELETE',
          token: auth.token,
        });
      } catch (err) {
        throw matchupMissing(err);
      }
      return this.matchupSummary(auth, low, high);
    },

    async listBlocks(auth) {
      try {
        // Zwei Fremdschlüssel auf profiles: Die Einbettung nennt deshalb die Spalte statt der Tabelle.
        const rows = await call<Array<{ blocker_id: string; blocked_id: string; blocked: { username: string } | null }>>(
          restPath('user_blocks', { select: 'blocker_id,blocked_id,blocked:blocked_id(username)', where: { blocker_id: eq(auth.userId) }, order: 'created_at.desc', limit: 200 }),
          { token: auth.token },
        );
        return (rows ?? []).map((r) => ({ blockerId: r.blocker_id, blockedId: r.blocked_id, username: r.blocked?.username ?? '' }));
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async block(auth, blockedId) {
      try {
        const rows = await call<Array<{ blocker_id: string; blocked_id: string }>>(
          restPath('user_blocks', { select: 'blocker_id,blocked_id', onConflict: ['blocker_id', 'blocked_id'] }),
          { method: 'POST', token: auth.token, prefer: 'resolution=ignore-duplicates,return=representation', body: JSON.stringify({ blocked_id: blockedId }) },
        );
        return (rows ?? []).map((r) => ({ blockerId: r.blocker_id, blockedId: r.blocked_id }));
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async unblock(auth, blockedId) {
      try {
        const rows = await call<Array<{ blocker_id: string; blocked_id: string }>>(
          restPath('user_blocks', { select: 'blocker_id,blocked_id', where: { blocker_id: eq(auth.userId), blocked_id: eq(blockedId) } }),
          { method: 'DELETE', token: auth.token, prefer: 'return=representation' },
        );
        return (rows ?? []).map((r) => ({ blockerId: r.blocker_id, blockedId: r.blocked_id }));
      } catch (err) {
        throw socialRpcMissing(err);
      }
    },

    async getCommunity(auth) {
      return readCommunity(auth.userId, auth.token);
    },

    async saveCommunity(auth, patch) {
      const base: Record<string, unknown> = { user_id: auth.userId };
      if (patch.listed !== undefined) base.listed = patch.listed;
      if (patch.secondaries !== undefined) base.secondaries = patch.secondaries;
      const extra: Record<string, unknown> = {};
      if (patch.secondarySkins !== undefined) extra.secondary_skins = patch.secondarySkins;
      if (patch.showPlacements !== undefined) extra.show_placements = patch.showPlacements;
      if (patch.allowDms !== undefined) extra.allow_dms = patch.allowDms;
      const onlyExtra = Object.keys(base).length === 1;

      // Upsert: Nur die übergebenen Spalten ändern sich, beim ersten Mal gelten für den Rest die Standardwerte.
      // Vor 0007 nur speichern, was es schon gibt. Neue Felder allein: ehrlich „nicht verfügbar“.
      const write = async (): Promise<CommunityRow[]> => {
        if (socialMissing && onlyExtra) throw new BackendError('unavailable', 'social-missing');
        const body = socialMissing ? base : { ...base, ...extra };
        const rows = await call<CommunityDbRow[]>(restPath('community_profiles', { select: communitySelect(), onConflict: ['user_id'] }), {
          method: 'POST',
          token: auth.token,
          prefer: 'resolution=merge-duplicates,return=representation',
          body: JSON.stringify(body),
        });
        return (rows ?? []).map(toCommunity);
      };
      try {
        return await withoutSocialColumns(write);
      } catch (err) {
        if (err instanceof BackendError && err.message === 'social-missing') throw err;
        throw communityMissing(err);
      }
    },

    async listDirectory(auth, q) {
      try {
        const rows = await call<
          Array<{ username: string; main_fighter: string | null; main_skin?: number; secondaries: string[] | null; secondary_skins?: number[] | null; member_since: string }>
        >(rpcPath('community_directory'), {
          method: 'POST',
          token: auth.token,
          body: JSON.stringify({ p_query: q.query, p_fighter: q.fighter, p_after: q.after, p_limit: q.limit }),
        });
        // Vor 0007 fehlen die Skin-Spalten im Ergebnis, dann gilt überall Skin 1.
        return (rows ?? []).map((r) => ({
          username: r.username,
          mainFighter: r.main_fighter,
          mainSkin: r.main_skin ?? 1,
          secondaries: r.secondaries ?? [],
          secondarySkins: r.secondary_skins ?? [],
          createdAt: r.member_since,
        }));
      } catch (err) {
        throw communityMissing(err);
      }
    },

    /*
     * Ab hier: Jede Abfrage auf Nutzerdaten filtert ausdrücklich auf auth.userId,
     * zusätzlich zu RLS. Und jede liefert den Besitzer mit zurück, damit die Route
     * ihn prüfen kann (owner.ts), bevor irgendetwas den Server verlässt.
     */
    async getProfile(auth) {
      const rows = await withoutSocialColumns(() =>
        call<ProfileRow[]>(restPath('profiles', { select: profileSelect(), where: { id: eq(auth.userId) }, limit: 1 }), { token: auth.token }),
      );
      return rows[0] ? toProfile(rows[0]) : null;
    },

    async updateProfile(auth, patch) {
      // Vor 0007 gibt es keinen Skin. Ein Main-Wechsel speichert trotzdem, ein reiner Skin-Wechsel meldet „nicht verfügbar“.
      const write = async (): Promise<ProfileRow[]> => {
        const body: Record<string, unknown> = {};
        if (patch.mainFighter !== undefined) body.main_fighter = patch.mainFighter;
        if (patch.theme !== undefined) body.theme = patch.theme;
        if (patch.mainSkin !== undefined && !socialMissing) body.main_skin = patch.mainSkin;
        if (!Object.keys(body).length) throw new BackendError('unavailable', 'social-missing');
        return call<ProfileRow[]>(restPath('profiles', { select: profileSelect(), where: { id: eq(auth.userId) } }), {
          method: 'PATCH',
          token: auth.token,
          prefer: 'return=representation',
          body: JSON.stringify(body),
        });
      };
      const rows = await withoutSocialColumns(write);
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
      const rows = await withoutSocialColumns(() => call<CommentDbRow[]>(restPath('comments', { select: commentSelect(), where, order: 'id.desc', limit })));
      return rows.map(toComment);
    },

    async addComment(auth, fighter, body) {
      const rows = await withoutSocialColumns(() =>
        call<CommentDbRow[]>(restPath('comments', { select: commentSelect() }), {
          method: 'POST',
          token: auth.token,
          prefer: 'return=representation',
          body: JSON.stringify({ fighter_slug: fighter, body }),
        }),
      );
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

    async getStartggLink(auth) {
      const read = (select: string): Promise<StartggLinkDbRow[]> =>
        call<StartggLinkDbRow[]>(restPath('startgg_links', { select, where: { user_id: eq(auth.userId) }, limit: 1 }), { token: auth.token });
      if (!verificationColumnsMissing) {
        try {
          return ((await read(STARTGG_LINK_SELECT)) ?? []).map(toStartggLink);
        } catch (err) {
          if (!isMissingColumn(err)) throw err;
          verificationColumnsMissing = true;
          console.error(JSON.stringify({ t: 'supabase', hinweis: 'Migration 0005 fehlt: startgg_links ohne Bestätigungsspalten. supabase/migrations/0005_startgg_verification.sql ausführen.' }));
        }
      }
      return ((await read(STARTGG_LINK_SELECT_BASE)) ?? []).map(toStartggLink);
    },

    async saveStartggLink(auth, { slug, gamerTag, verification }, clearCache) {
      // Upsert auf den Primärschlüssel. user_id setzt der Trigger ohnehin auf auth.uid(), RLS prüft es zusätzlich.
      // Die Bestätigung geht immer mit, auch als null: Wer das Profil wechselt, verliert sie ausdrücklich.
      const write = (withVerification: boolean): Promise<StartggLinkDbRow[]> =>
        call<StartggLinkDbRow[]>(restPath('startgg_links', { select: withVerification ? STARTGG_LINK_SELECT : STARTGG_LINK_SELECT_BASE, onConflict: ['user_id'] }), {
          method: 'POST',
          token: auth.token,
          prefer: 'resolution=merge-duplicates,return=representation',
          body: JSON.stringify({
            user_id: auth.userId,
            slug,
            gamer_tag: gamerTag,
            ...(withVerification
              ? { startgg_user_id: verification?.startggUserId ?? null, verified_at: verification?.verifiedAt ?? null, verification: verification?.signature ?? null }
              : {}),
          }),
        });

      let rows: StartggLinkDbRow[] | undefined;
      if (!verificationColumnsMissing) {
        try {
          rows = await write(true);
        } catch (err) {
          if (!isMissingColumn(err)) throw err;
          verificationColumnsMissing = true;
        }
      }
      if (!rows) {
        // Ohne Spalten lässt sich eine Bestätigung nicht speichern. Lieber melden als stillschweigend unbestätigt ablegen.
        if (verification) throw new BackendError('unavailable', 'startgg-verification-columns-missing');
        rows = await write(false);
      }
      // Ein neues Profil macht den alten Cache wertlos.
      if (clearCache) await call(restPath('startgg_cache', { where: { user_id: eq(auth.userId) } }), { method: 'DELETE', token: auth.token, prefer: 'return=minimal' });
      return (rows ?? []).map(toStartggLink);
    },

    async deleteStartggLink(auth) {
      const rows = await call<StartggLinkDbRow[]>(restPath('startgg_links', { select: STARTGG_LINK_SELECT_BASE, where: { user_id: eq(auth.userId) } }), {
        method: 'DELETE',
        token: auth.token,
        prefer: 'return=representation',
      });
      await call(restPath('startgg_cache', { where: { user_id: eq(auth.userId) } }), { method: 'DELETE', token: auth.token, prefer: 'return=minimal' });
      return (rows ?? []).map(toStartggLink);
    },

    async getStartggCache(auth) {
      const rows = await call<StartggCacheDbRow[]>(restPath('startgg_cache', { select: STARTGG_CACHE_SELECT, where: { user_id: eq(auth.userId) }, limit: 1 }), {
        token: auth.token,
      });
      return (rows ?? []).map(toStartggCache);
    },

    async saveStartggCache(auth, slug, payload, signature) {
      const rows = await call<StartggCacheDbRow[]>(restPath('startgg_cache', { select: STARTGG_CACHE_SELECT, onConflict: ['user_id'] }), {
        method: 'POST',
        token: auth.token,
        prefer: 'resolution=merge-duplicates,return=representation',
        body: JSON.stringify({ user_id: auth.userId, slug, payload, signature, fetched_at: new Date().toISOString() }),
      });
      return (rows ?? []).map(toStartggCache);
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
