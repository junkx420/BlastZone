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
  theme: Theme;
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
  author: { username: string; mainFighter: string | null };
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
  /** Leer, solange Migration 0006 fehlt oder nichts gewählt ist. */
  secondaries: string[];
}

/** Eigene Community-Einstellungen. Fehlt die Zeile, gelten die Standardwerte (nicht gelistet, keine Secondaries). */
export interface CommunityRow {
  userId: string;
  listed: boolean;
  secondaries: string[];
}

/** Ein Eintrag im Verzeichnis. Ohne Nutzer-ID, das Verzeichnis braucht keine. */
export interface DirectoryRow {
  username: string;
  mainFighter: string | null;
  secondaries: string[];
  createdAt: string;
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
  saveCommunity(auth: Auth, patch: { listed?: boolean; secondaries?: string[] }): Promise<CommunityRow[]>;
  /** Eingetragene Mitglieder, nach Name sortiert. */
  listDirectory(auth: Auth, q: DirectoryQuery): Promise<DirectoryRow[]>;

  /*
   * Alles, was einem Nutzer gehört, bekommt `auth` statt nur des Tokens: Die
   * Umsetzung filtert zusätzlich zu RLS ausdrücklich auf `auth.userId`, und die
   * Routen prüfen jede zurückgegebene Zeile noch einmal (owner.ts).
   */
  getProfile(auth: Auth): Promise<Profile | null>;
  updateProfile(auth: Auth, patch: { mainFighter?: string | null; theme?: Theme }): Promise<Profile>;
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
