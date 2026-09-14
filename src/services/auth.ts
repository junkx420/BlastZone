import { api } from './api';

/**
 * Anmeldestatus im Browser.
 *
 * Kennt nur, was /api/auth/session herausgibt: Name, Main, Theme, E-Mail. Kein
 * Token. Alle Teile der Seite, die sich mit dem Status ändern (Leiste, Lesezeichen,
 * Kommentare, Profil), melden sich per `onAuth` an.
 *
 * Am <html>-Element steht `data-auth="user" | "guest" | "unknown"`. Damit
 * blendet CSS Elemente für angemeldete Nutzer ein, ohne dass jede Stelle selbst
 * zuhört (etwa das Lesezeichen an jeder Combo-Karte).
 */

export interface User {
  id: string;
  email: string;
  username: string;
  mainFighter: string | null;
  theme: 'dark' | 'light';
}

export type AuthState = { status: 'unknown' } | { status: 'guest'; available: boolean } | { status: 'user'; user: User };

type Listener = (state: AuthState) => void;

let state: AuthState = { status: 'unknown' };
const listeners = new Set<Listener>();

function set(next: AuthState): void {
  state = next;
  document.documentElement.dataset.auth = next.status;
  listeners.forEach((l) => l(next));
}

export const authState = (): AuthState => state;
export const currentUser = (): User | null => (state.status === 'user' ? state.user : null);

/** Ruft den Listener sofort mit dem aktuellen Stand auf. Gibt die Abmeldung zurück. */
export function onAuth(listener: Listener): () => void {
  listeners.add(listener);
  listener(state);
  return () => listeners.delete(listener);
}

export async function refreshSession(): Promise<AuthState> {
  try {
    const data = await api<{ user: User | null; available?: boolean }>('auth/session');
    set(data.user ? { status: 'user', user: data.user } : { status: 'guest', available: data.available !== false });
  } catch {
    // Ohne erreichbares Backend verhält sich die Seite wie vor den Konten.
    set({ status: 'guest', available: false });
  }
  return state;
}

export async function login(email: string, password: string): Promise<User> {
  const { user } = await api<{ user: User }>('auth/login', { method: 'POST', body: { email, password } });
  set({ status: 'user', user });
  return user;
}

/** Legt das Konto an. Angemeldet ist danach noch niemand, erst die Bestätigungsmail schaltet frei. */
export async function signup(input: { email: string; password: string; username: string; website: string }): Promise<void> {
  await api('auth/signup', { method: 'POST', body: input });
}

export async function confirmEmail(tokenHash: string): Promise<User> {
  const { user } = await api<{ user: User }>('auth/confirm', { method: 'POST', body: { tokenHash } });
  set({ status: 'user', user });
  return user;
}

export async function resendConfirmation(email: string): Promise<string> {
  const { message } = await api<{ message: string }>('auth/resend', { method: 'POST', body: { email } });
  return message;
}

export async function logout(): Promise<void> {
  try {
    await api('auth/logout', { method: 'POST' });
  } finally {
    set({ status: 'guest', available: true });
  }
}

/** Nach einer Profiländerung den lokalen Stand angleichen, ohne neu zu laden. */
export function patchUser(patch: Partial<User>): void {
  if (state.status !== 'user') return;
  set({ status: 'user', user: { ...state.user, ...patch } });
}

/** Nach Kontolöschung oder abgelaufener Sitzung. */
export const markSignedOut = (): void => set({ status: 'guest', available: true });
