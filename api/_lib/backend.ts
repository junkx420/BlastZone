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
  throw new HttpError(503, 'backend-not-configured', 'Konten sind gerade nicht verfügbar.');
}

/** Übersetzt Backend-Fehler in HTTP-Antworten mit Texten für die Oberfläche. */
export function toHttp(err: unknown, context: 'default' | 'login' | 'signup' = 'default'): never {
  if (err instanceof HttpError) throw err;
  if (!(err instanceof BackendError)) throw err;
  switch (err.code) {
    case 'invalid-credentials':
      throw new HttpError(401, err.code, 'E-Mail oder Passwort stimmt nicht.');
    case 'email-not-confirmed':
      throw new HttpError(403, err.code, 'Bestätige zuerst deine E-Mail-Adresse. Den Link haben wir dir bei der Registrierung geschickt.');
    case 'weak-password':
      throw new HttpError(400, err.code, 'Das Passwort ist zu schwach. Es braucht mindestens 8 Zeichen, Groß- und Kleinbuchstaben, eine Zahl und ein Sonderzeichen.');
    case 'rate-limited':
      throw new HttpError(429, err.code, 'Zu viele Anfragen in kurzer Zeit. Warte kurz und versuch es dann erneut.');
    case 'invalid-token':
      throw new HttpError(401, 'unauthenticated', 'Deine Sitzung ist abgelaufen. Bitte melde dich neu an.');
    case 'not-found':
      throw new HttpError(404, err.code, 'Nicht gefunden.');
    case 'conflict':
      throw new HttpError(
        409,
        err.code,
        context === 'signup' ? 'Mit diesen Angaben lässt sich kein Konto anlegen. Probier einen anderen Namen.' : 'Das gibt es schon.',
      );
    case 'forbidden':
      throw new HttpError(403, err.code, 'Dafür fehlt dir die Berechtigung.');
    case 'bad-request':
      throw new HttpError(400, err.code, 'Die Eingabe wurde abgelehnt.');
    case 'unavailable':
      // Fehlende Migration (0005, 0006) klar benennen statt als Ausfall: Das Log nennt die Datei, der Nutzer bekommt einen Zeitrahmen.
      if (err.message === 'community-missing' || err.message === 'startgg-verification-columns-missing') {
        throw new HttpError(503, 'not-ready', 'Diese Funktion wird gerade eingerichtet. Versuch es in ein paar Minuten noch einmal.');
      }
      throw new HttpError(503, err.code, 'Der Dienst ist gerade nicht erreichbar. Versuch es gleich noch einmal.');
  }
}
