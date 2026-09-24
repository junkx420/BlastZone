import {
  BackendError,
  COMMUNITY_DEFAULTS,
  type AuthSession,
  type AuthUser,
  type Backend,
  type CommentRow,
  type CommunityRow,
  type MessageRow,
  type Profile,
  type StartggCacheRow,
  type StartggLinkRow,
} from './types.js';

/**
 * Speicher-Backend NUR für den lokalen Dev-Server, solange keine Supabase-Keys
 * da sind. Bildet das Verhalten nach, auf das sich die Oberfläche verlässt:
 * Double Opt-In, abgelaufene Tokens, eigene Kommentare löschen, Rate Limit.
 *
 * Aktiv nur, wenn `mockAllowed()` stimmt (siehe env.ts). Auf Vercel nie.
 *
 * Den Bestätigungslink schreibt der Mock ins Terminal des Dev-Servers, statt
 * eine Mail zu schicken.
 */

interface MockUser {
  id: string;
  email: string;
  password: string;
  confirmed: boolean;
  profile: Profile;
  createdAt?: string;
}

interface Store {
  users: Map<string, MockUser>;
  tokens: Map<string, { userId: string; exp: number }>;
  refresh: Map<string, string>;
  confirmations: Map<string, string>;
  comments: CommentRow[];
  bookmarks: Map<string, string[]>;
  startggLinks?: Map<string, StartggLinkRow>;
  startggCache?: Map<string, StartggCacheRow>;
  community?: Map<string, Omit<CommunityRow, 'userId'>>;
  /** Matchup-Bewertungen: Schluessel "low|high", darin Konto → Bewertung. */
  matchups?: Map<string, Map<string, number>>;
  /** blocker → blockierte Konten */
  blocks?: Map<string, Set<string>>;
  messages?: MessageRow[];
  nextComment: number;
  nextMessage?: number;
}

const g = globalThis as typeof globalThis & { __bzMock?: Store };
const store: Store = (g.__bzMock ??= {
  users: new Map(),
  tokens: new Map(),
  refresh: new Map(),
  confirmations: new Map(),
  comments: [],
  bookmarks: new Map(),
  nextComment: 1,
});

const random = (bytes = 24): string =>
  [...crypto.getRandomValues(new Uint8Array(bytes))].map((b) => b.toString(16).padStart(2, '0')).join('');

const b64url = (s: string): string => btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

/** Wie ein JWT aufgebaut, damit session.ts den Ablauf lesen kann. Gültig ist er nur, wenn er im Speicher steht. */
function issue(user: MockUser, lifetime = 3600): AuthSession {
  const exp = Math.floor(Date.now() / 1000) + lifetime;
  const accessToken = `${b64url('{"alg":"none"}')}.${b64url(JSON.stringify({ sub: user.id, exp }))}.${random(8)}`;
  const refreshToken = random();
  store.tokens.set(accessToken, { userId: user.id, exp });
  store.refresh.set(refreshToken, user.id);
  return { accessToken, refreshToken, expiresIn: lifetime, user: toUser(user) };
}

const toUser = (u: MockUser): AuthUser => ({ id: u.id, email: u.email, emailConfirmed: u.confirmed });

type CommunityData = Omit<CommunityRow, 'userId'>;

function communityOf(userId: string): CommunityData {
  const row = store.community?.get(userId);
  return row ? { ...row, secondaries: [...row.secondaries], secondarySkins: [...row.secondarySkins] } : { ...COMMUNITY_DEFAULTS, secondaries: [], secondarySkins: [] };
}

const blocked = (blocker: string, other: string): boolean => store.blocks?.get(blocker)?.has(other) ?? false;
const userById = (id: string): MockUser | undefined => [...store.users.values()].find((u) => u.id === id);

/** Wie can_message aus 0007. */
const mayMessage = (senderId: string, recipientId: string): boolean =>
  recipientId !== senderId && Boolean(userById(recipientId)) && communityOf(recipientId).allowDms && !blocked(recipientId, senderId) && !blocked(senderId, recipientId);

function userFor(token: string): MockUser {
  const t = store.tokens.get(token);
  if (!t || t.exp * 1000 < Date.now()) throw new BackendError('invalid-token');
  const user = [...store.users.values()].find((u) => u.id === t.userId);
  if (!user) throw new BackendError('invalid-token');
  return user;
}

export function mockBackend(): Backend {
  return {
    async signUp(email, password, username) {
      if ([...store.users.values()].some((u) => u.profile.username.toLowerCase() === username.toLowerCase())) throw new BackendError('conflict');
      if (store.users.has(email)) return; // wie Supabase: keine Auskunft, ob die Adresse schon existiert
      const id = crypto.randomUUID();
      store.users.set(email, { id, email, password, confirmed: false, profile: { id, username, mainFighter: null, mainSkin: 1, theme: 'dark' }, createdAt: new Date().toISOString() });
      const tokenHash = random();
      store.confirmations.set(tokenHash, email);
      console.info(`\n[mock] Bestätigungslink für ${email}:\n       http://localhost:5173/#/bestaetigen?token_hash=${tokenHash}\n`);
    },

    async signIn(email, password) {
      const user = store.users.get(email);
      if (!user || user.password !== password) throw new BackendError('invalid-credentials');
      if (!user.confirmed) throw new BackendError('email-not-confirmed');
      return issue(user);
    },

    async refresh(refreshToken) {
      const userId = store.refresh.get(refreshToken);
      store.refresh.delete(refreshToken);
      const user = [...store.users.values()].find((u) => u.id === userId);
      if (!user) throw new BackendError('invalid-token');
      return issue(user);
    },

    async signOut(accessToken) {
      store.tokens.delete(accessToken);
    },

    async getUser(accessToken) {
      return toUser(userFor(accessToken));
    },

    async verifyAccessToken(accessToken) {
      // Gültig ist ein Mock-Token nur, wenn der Speicher es ausgestellt hat. Der Payload allein zählt nicht.
      const t = store.tokens.get(accessToken);
      if (!t || t.exp * 1000 < Date.now()) return null;
      return { userId: t.userId, exp: t.exp };
    },

    async verifyEmail(tokenHash) {
      const email = store.confirmations.get(tokenHash);
      const user = email ? store.users.get(email) : undefined;
      if (!user) throw new BackendError('invalid-token');
      store.confirmations.delete(tokenHash);
      user.confirmed = true;
      return issue(user);
    },

    async resendConfirmation(email) {
      const user = store.users.get(email);
      if (!user || user.confirmed) return;
      const tokenHash = random();
      store.confirmations.set(tokenHash, email);
      console.info(`\n[mock] Neuer Bestätigungslink für ${email}:\n       http://localhost:5173/#/bestaetigen?token_hash=${tokenHash}\n`);
    },

    async usernameTaken(username) {
      return [...store.users.values()].some((u) => u.profile.username.toLowerCase() === username.toLowerCase());
    },

    async getPlayer(auth, username) {
      userFor(auth.token); // wie RLS für authenticated: ohne gültiges Token nichts
      const user = [...store.users.values()].find((u) => u.profile.username.toLowerCase() === username.toLowerCase());
      if (!user) return null;
      const own = store.comments.filter((c) => c.userId === user.id).sort((a, b) => b.id - a.id);
      const c = communityOf(user.id);
      return {
        userId: user.id,
        username: user.profile.username,
        mainFighter: user.profile.mainFighter,
        mainSkin: user.profile.mainSkin,
        createdAt: user.createdAt ?? new Date().toISOString(),
        commentCount: own.length,
        recentComments: own.slice(0, 5).map((r) => ({ id: r.id, fighter: r.fighter, body: r.body, createdAt: r.createdAt })),
        secondaries: c.secondaries,
        secondarySkins: c.secondarySkins,
        showPlacements: c.showPlacements,
      };
    },

    async findProfile(auth, username) {
      userFor(auth.token);
      const user = [...store.users.values()].find((u) => u.profile.username.toLowerCase() === username.toLowerCase());
      return user ? { userId: user.id, username: user.profile.username, mainFighter: user.profile.mainFighter, mainSkin: user.profile.mainSkin } : null;
    },

    async getSharedStartgg(auth, ownerId) {
      userFor(auth.token);
      // Wie die Policies aus 0007: nur mit Freigabe des Besitzers (oder für ihn selbst).
      if (auth.userId !== ownerId && !communityOf(ownerId).showPlacements) return { links: [], cache: [] };
      const link = store.startggLinks?.get(ownerId);
      const cache = store.startggCache?.get(ownerId);
      return {
        links: link ? [JSON.parse(JSON.stringify(link)) as StartggLinkRow] : [],
        cache: cache ? [JSON.parse(JSON.stringify(cache)) as StartggCacheRow] : [],
      };
    },

    async canMessage(auth, recipientId) {
      return mayMessage(userFor(auth.token).id, recipientId);
    },

    async listMessages(auth, otherId, limit, before) {
      const user = userFor(auth.token);
      return (store.messages ?? [])
        .filter((m) => (m.senderId === user.id && m.recipientId === otherId) || (m.senderId === otherId && m.recipientId === user.id))
        .filter((m) => !before || m.id < before)
        .sort((a, b) => b.id - a.id)
        .slice(0, Math.min(Math.max(limit, 1), 100))
        .map((m) => ({ ...m }));
    },

    async sendMessage(auth, recipientId, body) {
      const user = userFor(auth.token);
      // Wie die Insert-Policy: RLS lehnt ab, PostgREST meldet 403.
      if (!user.confirmed || !mayMessage(user.id, recipientId)) throw new BackendError('forbidden');
      const list = (store.messages ??= []);
      const minuteAgo = new Date(Date.now() - 60_000).toISOString();
      if (list.filter((m) => m.senderId === user.id && m.createdAt > minuteAgo).length >= 10) throw new BackendError('rate-limited');
      if (body.length < 1 || body.length > 2000 || !body.trim()) throw new BackendError('bad-request');
      store.nextMessage = (store.nextMessage ?? 0) + 1;
      const row: MessageRow = { id: store.nextMessage, senderId: user.id, recipientId, body, createdAt: new Date().toISOString(), readAt: null };
      list.push(row);
      return [{ ...row }];
    },

    async markRead(auth, otherId) {
      const user = userFor(auth.token);
      const now = new Date().toISOString();
      for (const m of store.messages ?? []) if (m.recipientId === user.id && m.senderId === otherId && !m.readAt) m.readAt = now;
    },

    async listConversations(auth, limit) {
      const user = userFor(auth.token);
      const latest = new Map<string, MessageRow>();
      const unread = new Map<string, number>();
      for (const m of store.messages ?? []) {
        if (m.senderId !== user.id && m.recipientId !== user.id) continue;
        const other = m.senderId === user.id ? m.recipientId : m.senderId;
        if (blocked(user.id, other)) continue;
        if ((latest.get(other)?.id ?? 0) < m.id) latest.set(other, m);
        if (m.recipientId === user.id && !m.readAt) unread.set(other, (unread.get(other) ?? 0) + 1);
      }
      return [...latest.entries()]
        .map(([other, m]) => ({ other: userById(other), m }))
        .filter((x): x is { other: MockUser; m: MessageRow } => Boolean(x.other))
        .sort((a, b) => b.m.id - a.m.id)
        .slice(0, limit)
        .map(({ other, m }) => ({
          username: other.profile.username,
          mainFighter: other.profile.mainFighter,
          mainSkin: other.profile.mainSkin,
          lastBody: m.body.slice(0, 140),
          lastAt: m.createdAt,
          lastMine: m.senderId === user.id,
          unread: unread.get(other.id) ?? 0,
        }));
    },

    async unreadCount(auth) {
      const user = userFor(auth.token);
      return (store.messages ?? []).filter((m) => m.recipientId === user.id && !m.readAt && !blocked(user.id, m.senderId)).length;
    },

    async matchupSummary(auth, low, high) {
      const user = userFor(auth.token);
      const stimmen = store.matchups?.get(`${low}|${high}`);
      const werte = [...(stimmen?.values() ?? [])];
      return {
        // Wie in Migration 0008: unter drei Stimmen kein Durchschnitt.
        average: werte.length >= 3 ? Math.round((werte.reduce((a, b) => a + b, 0) / werte.length) * 100) / 100 : null,
        votes: werte.length,
        mine: stimmen?.get(user.id) ?? null,
      };
    },

    async rateMatchup(auth, low, high, rating) {
      const user = userFor(auth.token);
      const alle = (store.matchups ??= new Map());
      const paar = alle.get(`${low}|${high}`) ?? new Map<string, number>();
      paar.set(user.id, rating);
      alle.set(`${low}|${high}`, paar);
      return this.matchupSummary(auth, low, high);
    },

    async unrateMatchup(auth, low, high) {
      const user = userFor(auth.token);
      store.matchups?.get(`${low}|${high}`)?.delete(user.id);
      return this.matchupSummary(auth, low, high);
    },

    async listBlocks(auth) {
      const user = userFor(auth.token);
      return [...(store.blocks?.get(user.id) ?? [])].map((id) => ({ blockerId: user.id, blockedId: id, username: userById(id)?.profile.username ?? '' }));
    },

    async block(auth, blockedId) {
      const user = userFor(auth.token);
      if (blockedId === user.id) throw new BackendError('bad-request');
      const blocks = (store.blocks ??= new Map());
      const set = blocks.get(user.id) ?? new Set<string>();
      if (set.has(blockedId)) return [];
      set.add(blockedId);
      blocks.set(user.id, set);
      return [{ blockerId: user.id, blockedId }];
    },

    async unblock(auth, blockedId) {
      const user = userFor(auth.token);
      if (!store.blocks?.get(user.id)?.delete(blockedId)) return [];
      return [{ blockerId: user.id, blockedId }];
    },

    async getCommunity(auth) {
      const user = userFor(auth.token);
      return user.id === auth.userId && store.community?.has(user.id) ? [{ userId: user.id, ...communityOf(user.id) }] : [];
    },

    async saveCommunity(auth, patch) {
      const user = userFor(auth.token);
      if (!user.confirmed) throw new BackendError('forbidden');
      const row = communityOf(user.id);
      if (patch.listed !== undefined) row.listed = patch.listed;
      if (patch.showPlacements !== undefined) row.showPlacements = patch.showPlacements;
      if (patch.allowDms !== undefined) row.allowDms = patch.allowDms;
      if (patch.secondaries !== undefined) {
        // Wie der CHECK in 0006
        const s = patch.secondaries;
        if (s.length > 2 || (s.length === 2 && s[0] === s[1]) || s.some((x) => !/^[a-z0-9-]{2,40}$/.test(x))) throw new BackendError('bad-request');
        row.secondaries = [...s];
      }
      if (patch.secondarySkins !== undefined) {
        // Wie der CHECK in 0007
        const k = patch.secondarySkins;
        if (k.length > 2 || k.some((x) => !Number.isInteger(x) || x < 1 || x > 8)) throw new BackendError('bad-request');
        row.secondarySkins = [...k];
      }
      (store.community ??= new Map()).set(user.id, row);
      return [{ userId: user.id, ...communityOf(user.id) }];
    },

    async listDirectory(auth, q) {
      userFor(auth.token);
      const after = q.after?.toLowerCase() ?? null;
      return [...store.users.values()]
        .filter((u) => store.community?.get(u.id)?.listed)
        .map((u) => ({ u, c: store.community!.get(u.id)! }))
        .filter(({ u }) => !q.query || u.profile.username.toLowerCase().startsWith(q.query.toLowerCase()))
        .filter(({ u, c }) => !q.fighter || u.profile.mainFighter === q.fighter || c.secondaries.includes(q.fighter))
        .filter(({ u }) => !after || u.profile.username.toLowerCase() > after)
        .sort((a, b) => (a.u.profile.username.toLowerCase() < b.u.profile.username.toLowerCase() ? -1 : 1))
        .slice(0, Math.min(Math.max(q.limit, 1), 50))
        .map(({ u, c }) => ({
          username: u.profile.username,
          mainFighter: u.profile.mainFighter,
          mainSkin: u.profile.mainSkin,
          secondaries: [...c.secondaries],
          secondarySkins: [...c.secondarySkins],
          createdAt: u.createdAt ?? new Date().toISOString(),
        }));
    },

    /*
     * Wie RLS: Wer das Token hält, bestimmt, wessen Daten berührt werden. Passt
     * auth.userId nicht zum Token, verhält sich der Mock wie eine Datenbank, deren
     * Filter nichts trifft.
     */
    async getProfile(auth) {
      const user = userFor(auth.token);
      return user.id === auth.userId ? { ...user.profile } : null;
    },

    async updateProfile(auth, patch) {
      const user = userFor(auth.token);
      if (user.id !== auth.userId) throw new BackendError('not-found');
      if (patch.mainFighter !== undefined) user.profile.mainFighter = patch.mainFighter;
      if (patch.mainSkin !== undefined) {
        // Wie der CHECK in 0007
        if (!Number.isInteger(patch.mainSkin) || patch.mainSkin < 1 || patch.mainSkin > 8) throw new BackendError('bad-request');
        user.profile.mainSkin = patch.mainSkin;
      }
      if (patch.theme !== undefined) user.profile.theme = patch.theme;
      store.comments.forEach((c) => {
        if (c.userId === user.id) c.author = { ...c.author, mainFighter: user.profile.mainFighter, mainSkin: user.profile.mainSkin };
      });
      return { ...user.profile };
    },

    async deleteAccount(auth) {
      const user = userFor(auth.token);
      store.users.delete(user.email);
      store.comments = store.comments.filter((c) => c.userId !== user.id);
      store.bookmarks.delete(user.id);
      store.startggLinks?.delete(user.id);
      store.startggCache?.delete(user.id);
      store.community?.delete(user.id);
      // Kaskade wie in 0007: Nachrichten und Blockierungen in beide Richtungen.
      store.messages = (store.messages ?? []).filter((m) => m.senderId !== user.id && m.recipientId !== user.id);
      store.blocks?.delete(user.id);
      store.blocks?.forEach((set) => set.delete(user.id));
      for (const [t, v] of store.tokens) if (v.userId === user.id) store.tokens.delete(t);
    },

    async listComments(fighter, limit, before) {
      return store.comments
        .filter((c) => c.fighter === fighter && (!before || c.id < before))
        .sort((a, b) => b.id - a.id)
        .slice(0, limit)
        .map((c) => ({ ...c, author: { ...c.author } }));
    },

    async addComment(auth, fighter, body) {
      const user = userFor(auth.token);
      if (!user.confirmed) throw new BackendError('forbidden');
      const minuteAgo = new Date(Date.now() - 60_000).toISOString();
      if (store.comments.filter((c) => c.userId === user.id && c.createdAt > minuteAgo).length >= 5) throw new BackendError('rate-limited');
      const row: CommentRow = {
        id: store.nextComment++,
        userId: user.id,
        fighter,
        body,
        createdAt: new Date().toISOString(),
        author: { username: user.profile.username, mainFighter: user.profile.mainFighter, mainSkin: user.profile.mainSkin },
      };
      store.comments.push(row);
      return { ...row, author: { ...row.author } };
    },

    async deleteComment(auth, id) {
      const user = userFor(auth.token);
      const i = store.comments.findIndex((c) => c.id === id && c.userId === user.id && c.userId === auth.userId);
      if (i < 0) return [];
      const [removed] = store.comments.splice(i, 1);
      return removed ? [{ id: removed.id, userId: removed.userId }] : [];
    },

    async listBookmarks(auth) {
      const user = userFor(auth.token);
      if (user.id !== auth.userId) return [];
      return (store.bookmarks.get(user.id) ?? []).map((comboId) => ({ userId: user.id, comboId }));
    },

    async addBookmark(auth, comboId) {
      const user = userFor(auth.token);
      const list = store.bookmarks.get(user.id) ?? [];
      if (list.includes(comboId)) return [];
      list.unshift(comboId);
      store.bookmarks.set(user.id, list);
      return [{ userId: user.id, comboId }];
    },

    async getStartggLink(auth) {
      const user = userFor(auth.token);
      const row = user.id === auth.userId ? store.startggLinks?.get(user.id) : undefined;
      return row ? [JSON.parse(JSON.stringify(row)) as StartggLinkRow] : [];
    },

    async saveStartggLink(auth, { slug, gamerTag, verification }, clearCache) {
      const user = userFor(auth.token);
      if (!user.confirmed) throw new BackendError('forbidden');
      const links = (store.startggLinks ??= new Map());
      const row: StartggLinkRow = { userId: user.id, slug, gamerTag, updatedAt: new Date().toISOString(), verification: verification ? { ...verification } : null };
      links.set(user.id, row);
      if (clearCache) store.startggCache?.delete(user.id);
      return [JSON.parse(JSON.stringify(row)) as StartggLinkRow];
    },

    async deleteStartggLink(auth) {
      const user = userFor(auth.token);
      const row = store.startggLinks?.get(user.id);
      if (!row || user.id !== auth.userId) return [];
      store.startggLinks?.delete(user.id);
      store.startggCache?.delete(user.id);
      return [{ ...row }];
    },

    async getStartggCache(auth) {
      const user = userFor(auth.token);
      const row = user.id === auth.userId ? store.startggCache?.get(user.id) : undefined;
      // Tiefe Kopie wie ein echter Datenbank-Rundweg, damit Tests keine Referenzen teilen.
      return row ? [JSON.parse(JSON.stringify(row)) as StartggCacheRow] : [];
    },

    async saveStartggCache(auth, slug, payload, signature) {
      const user = userFor(auth.token);
      const cache = (store.startggCache ??= new Map());
      const row: StartggCacheRow = { userId: user.id, slug, payload: JSON.parse(JSON.stringify(payload)), signature };
      cache.set(user.id, row);
      return [JSON.parse(JSON.stringify(row)) as StartggCacheRow];
    },

    async removeBookmark(auth, comboId) {
      const user = userFor(auth.token);
      if (user.id !== auth.userId) return [];
      const list = store.bookmarks.get(user.id) ?? [];
      store.bookmarks.set(user.id, list.filter((c) => c !== comboId));
      return list.includes(comboId) ? [{ userId: user.id, comboId }] : [];
    },
  };
}
