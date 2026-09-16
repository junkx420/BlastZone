import { DISPOSABLE_MESSAGE, normalizeEmail, passwordOk, usernameOk } from '../../../src/shared/account-rules.js';
import { domainOf, isDisposableDomain } from '../../../src/shared/disposable-email.js';
import { backend, toHttp } from '../../_lib/backend.js';
import { assertSameOrigin, clientIp, HttpError, ok, readJson, str } from '../../_lib/http.js';
import { route } from '../../_lib/route.js';
import { checkMx } from '../../_lib/mx.js';
import { enforce } from '../../_lib/ratelimit.js';

/**
 * POST /api/auth/signup  { email, password, username, website }
 *
 * Reihenfolge ist Absicht: erst die billigen Prüfungen, dann DNS, dann Supabase.
 * Die Antwort verrät nie, ob eine Adresse schon registriert ist (keine
 * Konto-Enumeration). Supabase verschickt die Bestätigungsmail, ein Konto kann
 * sich erst nach dem Klick darauf anmelden (Double Opt-In).
 */
export const POST = route(async (request) => {
  assertSameOrigin(request);
  const ip = clientIp(request);
  await enforce({ name: 'signup-ip', key: ip, max: 5, windowSec: 3600 });

  const body = await readJson(request);

  // Honeypot: Das Feld ist für Menschen unsichtbar. Bots füllen es aus und bekommen dieselbe Antwort wie echte Nutzer.
  if (str(body.website)) return ok({ pending: true }, [], 201);

  const email = normalizeEmail(str(body.email));
  const password = str(body.password);
  const username = str(body.username).trim();

  if (!email) throw new HttpError(400, 'invalid-email', { de: 'Diese E-Mail-Adresse sieht nicht gültig aus.', en: 'This email address does not look valid.' });
  if (!usernameOk(username)) {
    throw new HttpError(400, 'invalid-username', {
      de: 'Der Name braucht 3 bis 20 Zeichen: Buchstaben, Ziffern, Unterstrich oder Bindestrich.',
      en: 'The name needs 3 to 20 characters: letters, digits, underscore or hyphen.',
    });
  }
  if (!passwordOk(password)) {
    throw new HttpError(400, 'weak-password', {
      de: 'Das Passwort braucht mindestens 8 Zeichen, Groß- und Kleinbuchstaben, eine Zahl und ein Sonderzeichen.',
      en: 'The password needs at least 8 characters, upper and lower case letters, a number and a special character.',
    });
  }

  const domain = domainOf(email);
  if (isDisposableDomain(domain)) throw new HttpError(400, 'disposable-email', DISPOSABLE_MESSAGE);
  const mx = await checkMx(domain);
  if (mx === 'disposable' || mx === 'no-mail') throw new HttpError(400, 'disposable-email', DISPOSABLE_MESSAGE);

  const be = backend();
  try {
    if (await be.usernameTaken(username)) {
      throw new HttpError(409, 'username-taken', {
        de: 'Dieser Name ist schon vergeben.',
        en: 'This name is already taken.',
      });
    }
    await be.signUp(email, password, username);
  } catch (err) {
    toHttp(err, 'signup');
  }
  return ok({ pending: true }, [], 201);
});
