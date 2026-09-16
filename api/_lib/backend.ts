import { mockAllowed, readEnv } from './env.js';
import { HttpError } from './http.js';
import { mockBackend } from './mock.js';
import { supabaseBackend } from './supabase.js';
import { BackendError, type Backend } from './types.js';

export * from './types.js';

/**
 * Schnittstelle zum Backend-as-a-Service. Die Routen kennen nur diese
 * Schnittstelle, nicht Supabase selbst.
 *
 * Zwei Umsetzungen:
 * - `supabase.ts` spricht die REST-APIs von Supabase Auth (GoTrue) und PostgREST
 *   direkt per fetch an. Kein SDK, keine zusätzliche Abhängigkeit im Projekt.
 *   Datenbankzugriffe laufen immer mit dem Token des Nutzers, damit Row Level
 *   Security in Postgres greift. Der Service-Role-Key wird nirgends gebraucht.
 * - `mock.ts` hält alles im Speicher, nur für den lokalen Dev-Server ohne Keys.
 */

export function backend(): Backend {
  const env = readEnv();
  if (env) return supabaseBackend(env);
  if (mockAllowed()) return mockBackend();
  throw new HttpError(503, 'backend-not-configured', { de: 'Konten sind gerade nicht verfügbar.', en: 'Accounts are not available right now.' });
}

/** Übersetzt Backend-Fehler in HTTP-Antworten mit Texten für die Oberfläche. */
export function toHttp(err: unknown, context: 'default' | 'login' | 'signup' = 'default'): never {
  if (err instanceof HttpError) throw err;
  if (!(err instanceof BackendError)) throw err;
  switch (err.code) {
    case 'invalid-credentials':
      throw new HttpError(401, err.code, { de: 'E-Mail oder Passwort stimmt nicht.', en: 'Email or password is incorrect.' });
    case 'email-not-confirmed':
      throw new HttpError(403, err.code, {
        de: 'Bestätige zuerst deine E-Mail-Adresse. Den Link haben wir dir bei der Registrierung geschickt.',
        en: 'Confirm your email address first. We sent you the link when you signed up.',
      });
    case 'weak-password':
      throw new HttpError(400, err.code, {
        de: 'Das Passwort ist zu schwach. Es braucht mindestens 8 Zeichen, Groß- und Kleinbuchstaben, eine Zahl und ein Sonderzeichen.',
        en: 'The password is too weak. It needs at least 8 characters, upper and lower case letters, a number and a special character.',
      });
    case 'rate-limited':
      throw new HttpError(429, err.code, {
        de: 'Zu viele Anfragen in kurzer Zeit. Warte kurz und versuch es dann erneut.',
        en: 'Too many requests in a short time. Wait a moment and try again.',
      });
    case 'invalid-token':
      throw new HttpError(401, 'unauthenticated', {
        de: 'Deine Sitzung ist abgelaufen. Bitte melde dich neu an.',
        en: 'Your session has expired. Please log in again.',
      });
    case 'not-found':
      throw new HttpError(404, err.code, { de: 'Nicht gefunden.', en: 'Not found.' });
    case 'conflict':
      throw new HttpError(
        409,
        err.code,
        context === 'signup'
          ? {
              de: 'Mit diesen Angaben lässt sich kein Konto anlegen. Probier einen anderen Namen.',
              en: 'An account cannot be created with these details. Try a different name.',
            }
          : { de: 'Das gibt es schon.', en: 'That already exists.' },
      );
    case 'forbidden':
      throw new HttpError(403, err.code, { de: 'Dafür fehlt dir die Berechtigung.', en: 'You do not have permission to do that.' });
    case 'bad-request':
      throw new HttpError(400, err.code, { de: 'Die Eingabe wurde abgelehnt.', en: 'The input was rejected.' });
    case 'unavailable':
      // Fehlende Migration (0005, 0006) klar benennen statt als Ausfall: Das Log nennt die Datei, der Nutzer bekommt einen Zeitrahmen.
      if (err.message === 'community-missing' || err.message === 'startgg-verification-columns-missing') {
        throw new HttpError(503, 'not-ready', {
          de: 'Diese Funktion wird gerade eingerichtet. Versuch es in ein paar Minuten noch einmal.',
          en: 'This feature is being set up right now. Try again in a few minutes.',
        });
      }
      throw new HttpError(503, err.code, {
        de: 'Der Dienst ist gerade nicht erreichbar. Versuch es gleich noch einmal.',
        en: 'The service is not reachable right now. Try again in a moment.',
      });
  }
}
