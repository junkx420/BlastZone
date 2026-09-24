import { api, ApiError, invalidate } from './api';
import { markSignedOut, patchUser, type User } from './auth';

/**
 * Datenzugriffe: Kommentare, Lesezeichen, Profil, Konto.
 *
 * Läuft eine Sitzung unterwegs ab, antwortet der Server mit 401. Dann gilt der
 * Nutzer im Browser sofort als abgemeldet, statt mit einer Oberfläche
 * weiterzumachen, deren Aktionen alle scheitern.
 */

async function guarded<T>(run: () => Promise<T>): Promise<T> {
  try {
    return await run();
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) markSignedOut();
    throw err;
  }
}

/* ── Kommentare ─────────────────────────────────────────────────────────── */

export interface Comment {
  id: number;
  fighter: string;
  body: string;
  createdAt: string;
  /** Vom Server bestimmt. Fremde Nutzer-IDs bekommt der Browser nicht zu sehen. */
  mine: boolean;
  author: { username: string; mainFighter: string | null; mainSkin: number };
}

export interface CommentPage {
  comments: Comment[];
  /** id für die nächste Seite, `null` wenn es keine ältere mehr gibt. */
  nextCursor: number | null;
}

const commentsPath = (fighter: string): string => `comments?fighter=${encodeURIComponent(fighter)}`;

/**
 * Eine Seite Kommentare, neueste zuerst. 30 Sekunden zwischengespeichert: Wer
 * zwischen zwei Fightern hin- und herwechselt, lädt nicht jedes Mal neu. Eigene
 * Änderungen und An-/Abmelden leeren den Cache (`invalidateComments`).
 */
export async function listComments(fighter: string, before?: number): Promise<CommentPage> {
  const data = await api<{ comments: Comment[]; nextCursor?: number | null }>(`${commentsPath(fighter)}${before ? `&before=${before}` : ''}`, { ttl: 30_000 });
  return { comments: data.comments, nextCursor: data.nextCursor ?? null };
}

/** `mine` hängt an der Sitzung, also nach jedem An- oder Abmelden verwerfen. */
export const invalidateComments = (fighter?: string): void => invalidate(fighter ? commentsPath(fighter) : 'comments?');

export const postComment = (fighter: string, body: string): Promise<Comment> =>
  guarded(async () => {
    const { comment } = await api<{ comment: Comment }>('comments', { method: 'POST', body: { fighter, body } });
    invalidateComments(fighter);
    return comment;
  });

export const deleteComment = (id: number, fighter: string): Promise<void> =>
  guarded(async () => {
    await api(`comments?id=${id}`, { method: 'DELETE' });
    invalidateComments(fighter);
  });

/* ── Lesezeichen ────────────────────────────────────────────────────────── */

let bookmarkCache: Set<string> | null = null;
const bookmarkListeners = new Set<(ids: ReadonlySet<string>) => void>();
const emitBookmarks = (): void => bookmarkListeners.forEach((l) => l(bookmarkCache ?? new Set()));

export function onBookmarks(listener: (ids: ReadonlySet<string>) => void): () => void {
  bookmarkListeners.add(listener);
  if (bookmarkCache) listener(bookmarkCache);
  return () => bookmarkListeners.delete(listener);
}

/** Neueste zuerst. Wird pro Sitzung einmal geladen und danach lokal mitgeführt. */
export async function loadBookmarks(force = false): Promise<string[]> {
  if (bookmarkCache && !force) return [...bookmarkCache];
  const { ids } = await guarded(() => api<{ ids: string[] }>('bookmarks'));
  bookmarkCache = new Set(ids);
  emitBookmarks();
  return ids;
}

export function clearBookmarkCache(): void {
  bookmarkCache = null;
  emitBookmarks();
}

export const isBookmarked = (comboId: string): boolean => bookmarkCache?.has(comboId) ?? false;

/** Schaltet um. Die Oberfläche wechselt sofort und springt bei einem Fehler zurück. */
export async function toggleBookmark(comboId: string): Promise<boolean> {
  const cache = (bookmarkCache ??= new Set());
  const was = cache.has(comboId);
  if (was) cache.delete(comboId);
  else cache.add(comboId);
  emitBookmarks();
  try {
    await guarded(() =>
      was ? api(`bookmarks?combo=${encodeURIComponent(comboId)}`, { method: 'DELETE' }) : api('bookmarks', { method: 'POST', body: { comboId } }),
    );
    return !was;
  } catch (err) {
    if (was) cache.add(comboId);
    else cache.delete(comboId);
    emitBookmarks();
    throw err;
  }
}

/* ── Community ──────────────────────────────────────────────────────────── */

export interface FighterPick {
  fighter: string;
  skin: number;
}

/** start.gg-Ergebnisse eines anderen Mitglieds, nur bestätigt und freigegeben. Stand des Besitzers. */
export interface SharedPlacements {
  profile: { slug: string; gamerTag: string | null; profileUrl: string };
  placements: StartggPlacement[];
  fetchedAt: string;
}

export interface Player {
  username: string;
  mainFighter: string | null;
  mainSkin: number;
  secondaries: FighterPick[];
  /** „2026-09“ */
  memberSince: string;
  isSelf: boolean;
  stats: { comments: number };
  recentComments: Array<{ id: number; fighter: string; body: string; createdAt: string }>;
  startgg: SharedPlacements | null;
  /** Ob eine Nachricht möglich ist. Warum nicht, sagt der Server nicht. */
  canMessage: boolean;
  /** Hat der Betrachter dieses Konto blockiert? */
  blocked: boolean;
}

/**
 * Spielerprofil eines Mitglieds. Wirft ApiError: 401 für Gäste, 404 wenn es den Namen
 * nicht gibt. Ohne Cache, weil `isSelf` an der Sitzung hängt.
 */
export const getPlayer = (name: string): Promise<Player> =>
  guarded(async () => (await api<{ player: Player }>(`community/player?name=${encodeURIComponent(name)}`)).player);

export interface CommunitySettings {
  /** Im Verzeichnis sichtbar. Standard: nein. */
  listed: boolean;
  secondaries: string[];
  /** Gleiche Reihenfolge wie `secondaries`. */
  secondarySkins: number[];
  /** Bestätigte start.gg-Ergebnisse für Mitglieder zeigen. Standard: nein. */
  showPlacements: boolean;
  /** Nachrichten von Mitgliedern annehmen. Standard: ja. */
  allowDms: boolean;
}

export const getCommunitySettings = (): Promise<CommunitySettings> =>
  guarded(async () => (await api<{ settings: CommunitySettings }>('community/me')).settings);

export const saveCommunitySettings = (patch: Partial<CommunitySettings>): Promise<CommunitySettings> =>
  guarded(async () => {
    const { settings } = await api<{ settings: CommunitySettings }>('community/me', { method: 'PATCH', body: patch });
    invalidate('community/');
    return settings;
  });

export interface DirectoryEntry {
  username: string;
  mainFighter: string | null;
  mainSkin: number;
  secondaries: FighterPick[];
  memberSince: string;
}

export interface DirectoryPage {
  players: DirectoryEntry[];
  nextCursor: string | null;
}

/** Eine Seite des Verzeichnisses. `q`: Namensanfang, `fighter`: als Main oder Secondary. 30 Sekunden zwischengespeichert. */
export const listDirectory = (opts: { q?: string; fighter?: string; after?: string }): Promise<DirectoryPage> => {
  const params = new URLSearchParams();
  if (opts.q) params.set('q', opts.q);
  if (opts.fighter) params.set('fighter', opts.fighter);
  if (opts.after) params.set('after', opts.after);
  const qs = params.toString();
  return guarded(async () => {
    const res = await api<{ players: DirectoryEntry[]; nextCursor?: string | null }>(`community/directory${qs ? `?${qs}` : ''}`, { ttl: 30_000 });
    return { players: res.players, nextCursor: res.nextCursor ?? null };
  });
};

/* ── Nachrichten und Blockieren ─────────────────────────────────────────── */

export interface DmPartner {
  username: string;
  mainFighter: string | null;
  mainSkin: number;
}

export interface DmMessage {
  id: number;
  mine: boolean;
  body: string;
  createdAt: string;
  /** Nur bei eigenen Nachrichten: hat das Gegenüber sie gelesen? */
  read: boolean;
}

export interface DmThread {
  partner: DmPartner;
  /** Neueste zuerst. */
  messages: DmMessage[];
  nextCursor: number | null;
  canMessage: boolean;
}

export interface DmConversation extends DmPartner {
  lastBody: string;
  lastAt: string;
  lastMine: boolean;
  unread: number;
}

let unread = 0;
const unreadListeners = new Set<(n: number) => void>();

function setUnread(n: number): void {
  if (n === unread) return;
  unread = n;
  unreadListeners.forEach((l) => l(n));
}

/** Zähler ungelesener Nachrichten für die Leiste. Ruft sofort mit dem aktuellen Stand auf. */
export function onUnread(listener: (n: number) => void): () => void {
  unreadListeners.add(listener);
  listener(unread);
  return () => unreadListeners.delete(listener);
}

/** Fragt den Zähler neu ab. Fehler (offline, Migration fehlt) lassen den alten Stand stehen. */
export async function refreshUnread(): Promise<void> {
  try {
    setUnread((await guarded(() => api<{ unread: number }>('community/inbox?count=1'))).unread);
  } catch {
    /* Die Leiste zeigt weiter den letzten Stand. */
  }
}

export const resetUnread = (): void => setUnread(0);

const withName = (name: string): string => encodeURIComponent(name);

/** Verlauf mit einem Mitglied, neueste zuerst. Markiert nichts als gelesen (dafür `markDmRead`). */
export const getThread = (name: string, before?: number): Promise<DmThread> =>
  guarded(() => api<DmThread & Record<string, unknown>>(`community/messages?with=${withName(name)}${before ? `&before=${before}` : ''}`));

export const sendDm = (to: string, body: string): Promise<DmMessage> =>
  guarded(async () => (await api<{ message: DmMessage }>('community/messages', { method: 'POST', body: { to, body } })).message);

export const markDmRead = (name: string): Promise<void> =>
  guarded(async () => {
    await api('community/messages', { method: 'PATCH', body: { with: name } });
    void refreshUnread();
  });

/** Alle Unterhaltungen, neueste zuerst. Setzt nebenbei den Zähler der Leiste. */
export const getInbox = (): Promise<DmConversation[]> =>
  guarded(async () => {
    const res = await api<{ conversations: DmConversation[]; unread: number }>('community/inbox');
    setUnread(res.unread);
    return res.conversations;
  });

/**
 * Matchup-Bewertungen der Community. Alle Werte gelten aus Sicht von `a`:
 * positiv heißt, a steht besser da. Der Durchschnitt bleibt leer, solange
 * weniger als drei Stimmen vorliegen.
 */
export interface MatchupVotes {
  average: number | null;
  votes: number;
  mine: number | null;
}

const matchupPfad = (a: string, b: string): string => `community/matchups?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}`;

/** Ein kommendes Turnier in Deutschland, fertig vom Server. */
export interface Tournament {
  name: string;
  /** Pfad auf start.gg, etwa „tournament/blastzone-local-12“. */
  slug: string;
  startAt: string;
  city: string | null;
  online: boolean;
  attendees: number | null;
  imageUrl: string | null;
}

/** Öffentlich: braucht kein Konto, die Liste ist für alle gleich. */
export const getTournaments = (): Promise<Tournament[]> =>
  api<{ tournaments: Tournament[] }>('startgg/tournaments').then((r) => r.tournaments);

/** Eine Zeile der Fighter-Übersicht: der Gegner plus die Stimmen zu diesem Paar. */
export interface MatchupRow extends MatchupVotes {
  opponent: string;
}

/** Alle bewerteten Gegner eines Fighters. Unbewertete Paare fehlen und werden in der Ansicht ergänzt. */
export const getMatchupChart = (slug: string): Promise<MatchupRow[]> =>
  guarded(async () => (await api<{ chart: MatchupRow[] }>(`community/matchups?fighter=${encodeURIComponent(slug)}`)).chart);

export const getMatchupVotes = (a: string, b: string): Promise<MatchupVotes> =>
  guarded(async () => (await api<{ matchup: MatchupVotes }>(matchupPfad(a, b))).matchup);

export const rateMatchup = (a: string, b: string, rating: number): Promise<MatchupVotes> =>
  guarded(async () => {
    const { matchup } = await api<{ matchup: MatchupVotes }>('community/matchups', { method: 'PUT', body: { a, b, rating } });
    invalidate('community/matchups');
    return matchup;
  });

export const unrateMatchup = (a: string, b: string): Promise<MatchupVotes> =>
  guarded(async () => {
    const { matchup } = await api<{ matchup: MatchupVotes }>(matchupPfad(a, b), { method: 'DELETE' });
    invalidate('community/matchups');
    return matchup;
  });
export const listBlocked = (): Promise<string[]> => guarded(async () => (await api<{ blocked: string[] }>('community/blocks')).blocked);

export const blockPlayer = (name: string): Promise<string[]> =>
  guarded(async () => {
    const { blocked } = await api<{ blocked: string[] }>('community/blocks', { method: 'PUT', body: { name } });
    invalidate('community/');
    void refreshUnread();
    return blocked;
  });

export const unblockPlayer = (name: string): Promise<string[]> =>
  guarded(async () => {
    const { blocked } = await api<{ blocked: string[] }>(`community/blocks?name=${withName(name)}`, { method: 'DELETE' });
    invalidate('community/');
    void refreshUnread();
    return blocked;
  });

/* ── start.gg ───────────────────────────────────────────────────────────── */

export interface StartggLink {
  slug: string;
  gamerTag: string | null;
  profileUrl: string;
  updatedAt: string;
  /** Per start.gg-Login bestätigt. Der Server prüft dafür eine Signatur, der Browser vertraut nur dieser Antwort. */
  verified: boolean;
  verifiedAt: string | null;
  /** Ob „Mit start.gg bestätigen“ gerade angeboten werden kann. */
  canVerify: boolean;
}

/** Eigene Verknüpfung oder `null`, dazu, ob Bestätigen möglich ist. Privat, deshalb ohne Cache. */
export const getStartggLink = (): Promise<{ link: StartggLink | null; canVerify: boolean }> =>
  guarded(async () => {
    const res = await api<{ link: StartggLink | null; canVerify?: boolean }>('startgg/link');
    return { link: res.link, canVerify: Boolean(res.canVerify) };
  });

/** Startet den Login bei start.gg. Ein Seitenaufruf, kein fetch: start.gg zeigt eine eigene Seite. */
export const STARTGG_AUTHORIZE_URL = './api/startgg/authorize';

/** Schließt „Mit start.gg bestätigen“ ab, nachdem start.gg zurückgeleitet hat. */
export const verifyStartgg = (): Promise<{ link: StartggLink; previousSlug: string | null }> =>
  guarded(async () => {
    const res = await api<{ link: StartggLink; previousSlug?: string | null }>('startgg/verify', { method: 'POST', body: {} });
    invalidate('startgg/');
    return { link: res.link, previousSlug: res.previousSlug ?? null };
  });

/** Prüft das Profil bei start.gg und speichert es. Wirft ApiError mit deutscher Meldung, etwa „kein Profil unter dieser Adresse“. */
export const linkStartgg = (profile: string): Promise<StartggLink> =>
  guarded(async () => {
    const { link } = await api<{ link: StartggLink }>('startgg/link', { method: 'PUT', body: { profile } });
    invalidate('startgg/');
    return link;
  });

export interface StartggPlacement {
  tournamentId: string;
  tournament: string;
  eventId: string;
  event: string;
  eventSlug: string;
  startAt: string;
  isOnline: boolean;
  location: string | null;
  placement: number;
  entrants: number;
  imageUrl: string | null;
}

export interface StartggPlacementsResult {
  profile: { slug: string; gamerTag: string | null; profileUrl: string };
  placements: StartggPlacement[];
  fetchedAt: string;
  source: 'cache' | 'startgg';
  nextRefreshAt: string;
  notice: { code: string; message: string } | null;
}

/** Placements aus dem Server-Cache oder frisch von start.gg. `refresh` fragt start.gg, sofern der Server es erlaubt. */
export const getStartggPlacements = (refresh = false): Promise<StartggPlacementsResult> =>
  guarded(() => api<StartggPlacementsResult & Record<string, unknown>>(`startgg/placements${refresh ? '?refresh=1' : ''}`));

export const unlinkStartgg = (): Promise<void> =>
  guarded(async () => {
    await api('startgg/link', { method: 'DELETE' });
    invalidate('startgg/');
  });

/* ── Profil und Konto ───────────────────────────────────────────────────── */

/** Speichert und gleicht den Anmeldestatus an. Ein neuer Main ohne `mainSkin` startet beim Server mit Skin 1. */
export async function updateProfile(patch: {
  mainFighter?: string | null;
  mainSkin?: number;
  theme?: 'dark' | 'light';
}): Promise<Pick<User, 'mainFighter' | 'mainSkin'>> {
  const { profile } = await guarded(() =>
    api<{ profile: { mainFighter: string | null; mainSkin?: number; theme: 'dark' | 'light' } }>('profile', { method: 'PATCH', body: patch }),
  );
  const mainSkin = profile.mainSkin ?? 1;
  patchUser({ mainFighter: profile.mainFighter, mainSkin, theme: profile.theme });
  // Kommentare und Verzeichnis zeigen den Avatar, also neu laden.
  invalidate('comments?');
  invalidate('community/');
  return { mainFighter: profile.mainFighter, mainSkin };
}

export async function deleteAccount(confirm: string): Promise<void> {
  await guarded(() => api('account', { method: 'DELETE', body: { confirm } }));
  clearBookmarkCache();
  markSignedOut();
}
