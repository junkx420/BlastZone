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

export interface Profile {
  id: string;
  username: string;
  mainFighter: string | null;
  theme: Theme;
}

export interface CommentRow {
  id: number;
  fighter: string;
  body: string;
  createdAt: string;
  author: { id: string; username: string; mainFighter: string | null };
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
    message = code,
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
  verifyEmail(tokenHash: string): Promise<AuthSession>;
  resendConfirmation(email: string): Promise<void>;

  usernameTaken(username: string): Promise<boolean>;
  getProfile(accessToken: string, userId: string): Promise<Profile | null>;
  updateProfile(accessToken: string, userId: string, patch: { mainFighter?: string | null; theme?: Theme }): Promise<Profile>;
  deleteAccount(accessToken: string): Promise<void>;

  listComments(fighter: string, limit: number): Promise<CommentRow[]>;
  addComment(accessToken: string, fighter: string, body: string): Promise<CommentRow>;
  deleteComment(accessToken: string, id: number): Promise<void>;

  listBookmarks(accessToken: string): Promise<string[]>;
  addBookmark(accessToken: string, comboId: string): Promise<void>;
  removeBookmark(accessToken: string, comboId: string): Promise<void>;
}
