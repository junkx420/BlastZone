import { BackendError, type AuthSession, type AuthUser, type Backend, type CommentRow, type Profile, type StartggLinkRow } from './types.js';

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
}

interface Store {
  users: Map<string, MockUser>;
  tokens: Map<string, { userId: string; exp: number }>;
  refresh: Map<string, string>;
  confirmations: Map<string, string>;
  comments: CommentRow[];
  bookmarks: Map<string, string[]>;
  startggLinks?: Map<string, StartggLinkRow>;
  nextComment: number;
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
      store.users.set(email, { id, email, password, confirmed: false, profile: { id, username, mainFighter: null, theme: 'dark' } });
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
      if (patch.theme !== undefined) user.profile.theme = patch.theme;
      store.comments.forEach((c) => {
        if (c.userId === user.id) c.author.mainFighter = user.profile.mainFighter;
      });
      return { ...user.profile };
    },

    async deleteAccount(auth) {
      const user = userFor(auth.token);
      store.users.delete(user.email);
      store.comments = store.comments.filter((c) => c.userId !== user.id);
      store.bookmarks.delete(user.id);
      store.startggLinks?.delete(user.id);
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
        author: { username: user.profile.username, mainFighter: user.profile.mainFighter },
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
      return row ? [{ ...row }] : [];
    },

    async saveStartggLink(auth, slug, gamerTag) {
      const user = userFor(auth.token);
      if (!user.confirmed) throw new BackendError('forbidden');
      const links = (store.startggLinks ??= new Map());
      const row: StartggLinkRow = { userId: user.id, slug, gamerTag, updatedAt: new Date().toISOString() };
      links.set(user.id, row);
      return [{ ...row }];
    },

    async deleteStartggLink(auth) {
      const user = userFor(auth.token);
      const row = store.startggLinks?.get(user.id);
      if (!row || user.id !== auth.userId) return [];
      store.startggLinks?.delete(user.id);
      return [{ ...row }];
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
