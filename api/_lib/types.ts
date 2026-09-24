/** Typen und Fehlerklasse des Backends, eigene Datei gegen zirkuläre Importe zwischen backend.ts und den Umsetzungen. */

export type Theme = 'dark' | 'light';

export interface AuthUser {
  id: string;
  email: string;
  emailConfirmed: boolean;
}

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  /** Sekunden bis zum Ablauf des Access-Tokens. */
  expiresIn: number;
  user: AuthUser;
}

/** Angemeldeter Nutzer, nachdem session.ts die Signatur des Tokens geprüft hat. */
export interface Auth {
  token: string;
  userId: string;
}

/** Ergebnis einer Tokenprüfung. Nur mit geprüfter Signatur bzw. von Supabase Auth bestätigt. */
export interface VerifiedToken {
  userId: string;
  exp: number;
}

/** `id` ist zugleich der Besitzer. */
export interface Profile {
  id: string;
  username: string;
  mainFighter: string | null;
  /** 1 bis 8, 1 ist der Standard-Skin. Vor Migration 0007 immer 1. */
  mainSkin: number;
  theme: Theme;
}

/** Ein fremdes Konto, nur zum Auflösen eines Namens. Die ID bleibt auf dem Server. */
export interface ProfileRef {
  userId: string;
  username: string;
  mainFighter: string | null;
  mainSkin: number;
}

/**
 * Kommentar, wie ihn das Backend liefert: mit `userId` als Besitzer. Diese Form
 * verlässt den Server nie. Die Routen machen daraus `PublicComment` (owner.ts).
 */
export interface CommentRow {
  id: number;
  userId: string;
  fighter: string;
  body: string;
  createdAt: string;
  author: { username: string; mainFighter: string | null; mainSkin: number };
}

export interface BookmarkRow {
  userId: string;
  comboId: string;
}

/** Verknüpfung mit einem start.gg-Profil. Privat, nur der Besitzer liest sie. */
export interface StartggLinkRow {
  userId: string;
  slug: string;
  gamerTag: string | null;
  updatedAt: string;
  /** Ungeprüft, bis startggOauth.ts `isVerified` die Signatur bestätigt. Die Zeile ist vom Nutzer beschreibbar. */
  verification: StartggVerification | null;
}

/** Nachweis aus dem OAuth-Login: start.gg hat bestätigt, dass dieses Konto das Profil besitzt. */
export interface StartggVerification {
  /** start.gg-Nutzer-ID aus `currentUser`. */
  startggUserId: string;
  verifiedAt: string;
  /** HMAC über Besitzer, Slug, start.gg-ID und Zeitpunkt. */
  signature: string;
}

export interface StartggLinkInput {
  slug: string;
  gamerTag: string | null;
  verification: StartggVerification | null;
}

/**
 * Ein fremdes Konto, wie es andere Mitglieder sehen. `userId` bleibt auf dem Server
 * (nur für `isSelf`), die Route gibt ausschließlich `publicPlayer` aus owner.ts zurück.
 */
export interface PlayerRow {
  userId: string;
  username: string;
  mainFighter: string | null;
  createdAt: string;
  commentCount: number;
  recentComments: Array<{ id: number; fighter: string; body: string; createdAt: string }>;
  mainSkin: number;
  /** Leer, solange Migration 0006 fehlt oder nichts gewählt ist. */
  secondaries: string[];
  secondarySkins: number[];
  /** Hat der Besitzer seine start.gg-Ergebnisse für Mitglieder freigegeben? */
  showPlacements: boolean;
}

/** Eigene Community-Einstellungen. Fehlt die Zeile, gelten die Standardwerte (COMMUNITY_DEFAULTS). */
export interface CommunityRow {
  userId: string;
  listed: boolean;
  secondaries: string[];
  /** Gleiche Reihenfolge wie `secondaries`, fehlende Einträge sind Skin 1. */
  secondarySkins: number[];
  showPlacements: boolean;
  allowDms: boolean;
}

export type CommunityPatch = Partial<Omit<CommunityRow, 'userId'>>;

export const COMMUNITY_DEFAULTS: Omit<CommunityRow, 'userId'> = {
  listed: false,
  secondaries: [],
  secondarySkins: [],
  showPlacements: false,
  allowDms: true,
};

/** Ein Eintrag im Verzeichnis. Ohne Nutzer-ID, das Verzeichnis braucht keine. */
export interface DirectoryRow {
  username: string;
  mainFighter: string | null;
  mainSkin: number;
  secondaries: string[];
  secondarySkins: number[];
  createdAt: string;
}

/** Eine Direktnachricht mit Absender und Empfänger. Die IDs verlassen den Server nie (owner.ts). */
export interface MessageRow {
  id: number;
  senderId: string;
  recipientId: string;
  body: string;
  createdAt: string;
  readAt: string | null;
}

/** Eine Unterhaltung in der Übersicht, schon ohne IDs (dm_conversations). */
export interface ConversationRow {
  username: string;
  mainFighter: string | null;
  mainSkin: number;
  lastBody: string;
  lastAt: string;
  lastMine: boolean;
  unread: number;
}

export interface BlockRow {
  blockerId: string;
  blockedId: string;
  username: string;
}

export interface DirectoryQuery {
  /** Anfang des Benutzernamens, Groß- und Kleinschreibung egal. */
  query: string | null;
  /** Fighter als Main oder Secondary. */
  fighter: string | null;
  /** Benutzername des letzten Eintrags der vorigen Seite. */
  after: string | null;
  limit: number;
}

/** Zeile im Placement-Cache. `payload` ist ungeprüft, bis startggCache.ts die Signatur bestätigt. */
export interface StartggCacheRow {
  userId: string;
  slug: string;
  payload: unknown;
  signature: string;
}

export type BackendErrorCode =
  | 'invalid-credentials'
  | 'email-not-confirmed'
  | 'weak-password'
  | 'rate-limited'
  | 'invalid-token'
  | 'not-found'
  | 'conflict'
  | 'forbidden'
  | 'bad-request'
  | 'unavailable';

export class BackendError extends Error {
  constructor(
    readonly code: BackendErrorCode,
    message: string = code,
  ) {
    super(message);
  }
}

export interface MatchupSummary {
  /** Durchschnitt aus Sicht von `low`. Null unter drei Stimmen: Sonst wäre die einzelne Stimme zuordenbar. */
  average: number | null;
  votes: number;
  /** Eigene Stimme, null wenn noch nicht bewertet. */
  mine: number | null;
}

export interface Backend {
  signUp(email: string, password: string, username: string): Promise<void>;
  signIn(email: string, password: string): Promise<AuthSession>;
  refresh(refreshToken: string): Promise<AuthSession>;
  signOut(accessToken: string): Promise<void>;
  getUser(accessToken: string): Promise<AuthUser>;
  /** Prüft Signatur und Ablauf. `null` heißt ungültig. Wirft nur, wenn die Prüfung selbst nicht erreichbar ist. */
  verifyAccessToken(accessToken: string): Promise<VerifiedToken | null>;
  verifyEmail(tokenHash: string): Promise<AuthSession>;
  resendConfirmation(email: string): Promise<void>;

  usernameTaken(username: string): Promise<boolean>;

  /**
   * Spielerprofil eines beliebigen Kontos per Benutzername (Groß- und Kleinschreibung egal).
   * Nur für angemeldete Nutzer, deshalb mit `auth`: Die Abfrage läuft mit deren Token, damit
   * spätere Policies „nur authenticated“ greifen. `null`, wenn es den Namen nicht gibt.
   */
  getPlayer(auth: Auth, username: string): Promise<PlayerRow | null>;

  /** Eigene Community-Zeile, höchstens eine. */
  getCommunity(auth: Auth): Promise<CommunityRow[]>;
  /** Legt an oder ändert nur die übergebenen Felder. Liefert die gespeicherte Zeile. */
  saveCommunity(auth: Auth, patch: CommunityPatch): Promise<CommunityRow[]>;
  /** Eingetragene Mitglieder, nach Name sortiert. */
  listDirectory(auth: Auth, q: DirectoryQuery): Promise<DirectoryRow[]>;

  /** Ein Konto per Name (Groß- und Kleinschreibung egal), `null`, wenn es ihn nicht gibt. */
  findProfile(auth: Auth, username: string): Promise<ProfileRef | null>;

  /**
   * start.gg-Verknüpfung und Cache eines anderen Kontos. Leer, solange der Besitzer nichts
   * freigegeben hat (RLS aus 0007). Die Route prüft Besitzer und Signaturen selbst.
   */
  getSharedStartgg(auth: Auth, ownerId: string): Promise<{ links: StartggLinkRow[]; cache: StartggCacheRow[] }>;

  /** Darf `auth` diesem Konto schreiben? Sagt nicht, warum nicht. */
  canMessage(auth: Auth, recipientId: string): Promise<boolean>;
  /** Neueste zuerst, höchstens `limit`. `before`: nur ältere als diese id. */
  listMessages(auth: Auth, otherId: string, limit: number, before?: number): Promise<MessageRow[]>;
  sendMessage(auth: Auth, recipientId: string, body: string): Promise<MessageRow[]>;
  /** Alles von `otherId` als gelesen markieren. */
  markRead(auth: Auth, otherId: string): Promise<void>;
  listConversations(auth: Auth, limit: number): Promise<ConversationRow[]>;
  unreadCount(auth: Auth): Promise<number>;

  /**
   * Matchup-Bewertungen der Community. Das Paar kommt immer kanonisch
   * (low < high), die Bewertung gilt aus Sicht von `low`.
   */
  matchupSummary(auth: Auth, low: string, high: string): Promise<MatchupSummary>;
  rateMatchup(auth: Auth, low: string, high: string, rating: number): Promise<MatchupSummary>;
  unrateMatchup(auth: Auth, low: string, high: string): Promise<MatchupSummary>;

  /** Eigene Blockierungen, nach Name. */
  listBlocks(auth: Auth): Promise<BlockRow[]>;
  /** Liefert die angelegte Zeile, leer, wenn sie schon bestand. */
  block(auth: Auth, blockedId: string): Promise<Array<{ blockerId: string; blockedId: string }>>;
  unblock(auth: Auth, blockedId: string): Promise<Array<{ blockerId: string; blockedId: string }>>;

  /*
   * Alles, was einem Nutzer gehört, bekommt `auth` statt nur des Tokens: Die
   * Umsetzung filtert zusätzlich zu RLS ausdrücklich auf `auth.userId`, und die
   * Routen prüfen jede zurückgegebene Zeile noch einmal (owner.ts).
   */
  getProfile(auth: Auth): Promise<Profile | null>;
  updateProfile(auth: Auth, patch: { mainFighter?: string | null; mainSkin?: number; theme?: Theme }): Promise<Profile>;
  deleteAccount(auth: Auth): Promise<void>;

  /** Neueste zuerst. `before`: nur Kommentare mit kleinerer id (nächste Seite). */
  listComments(fighter: string, limit: number, before?: number): Promise<CommentRow[]>;
  addComment(auth: Auth, fighter: string, body: string): Promise<CommentRow>;
  /** Liefert die tatsächlich gelöschten Zeilen, leer, wenn nichts Eigenes passte. */
  deleteComment(auth: Auth, id: number): Promise<Array<{ id: number; userId: string }>>;

  listBookmarks(auth: Auth): Promise<BookmarkRow[]>;
  addBookmark(auth: Auth, comboId: string): Promise<BookmarkRow[]>;
  removeBookmark(auth: Auth, comboId: string): Promise<BookmarkRow[]>;

  /** Leer, wenn nicht verknüpft. Liefert höchstens eine Zeile. */
  getStartggLink(auth: Auth): Promise<StartggLinkRow[]>;
  /**
   * Legt an oder ersetzt. Liefert die gespeicherte Zeile. `clearCache`: Placement-Cache
   * leeren, weil das Profil gewechselt hat. Beim Bestätigen desselben Profils bleibt er.
   */
  saveStartggLink(auth: Auth, link: StartggLinkInput, clearCache: boolean): Promise<StartggLinkRow[]>;
  /** Löst die Verknüpfung und leert den Placement-Cache. Liefert die gelöschte Zeile. */
  deleteStartggLink(auth: Auth): Promise<StartggLinkRow[]>;
  /** Eigene Cache-Zeile, höchstens eine. */
  getStartggCache(auth: Auth): Promise<StartggCacheRow[]>;
  /** Legt an oder ersetzt die eigene Cache-Zeile. */
  saveStartggCache(auth: Auth, slug: string, payload: unknown, signature: string): Promise<StartggCacheRow[]>;
}
