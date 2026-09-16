import { backend, toHttp } from './_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson, str } from './_lib/http.js';
import { route } from './_lib/route.js';
import { ownProfile } from './_lib/owner.js';
import { enforce } from './_lib/ratelimit.js';
import { clearCookies, requireAuth } from './_lib/session.js';

/**
 * DELETE /api/account  { confirm: <Benutzername> }
 *
 * Löscht das eigene Konto samt Profil, Kommentaren und Lesezeichen (Kaskade in
 * der Datenbank). Recht auf Löschung nach Art. 17 DSGVO, ohne dass jemand eine
 * Mail schreiben muss. Der Benutzername muss zur Bestätigung mitgeschickt werden.
 */
export const DELETE = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth } = await requireAuth(request, be);
  await enforce({ name: 'account-delete', key: auth.userId, max: 3, windowSec: 3600 });

  const body = await readJson(request);
  try {
    // Bestätigt wird gegen das eigene Profil, geprüft über owner.ts. Gelöscht wird serverseitig nur auth.uid().
    const profile = ownProfile(auth, await be.getProfile(auth));
    if (!profile || str(body.confirm) !== profile.username) {
      throw new HttpError(400, 'confirm-mismatch', {
        de: 'Zum Löschen deinen Benutzernamen genau so eintippen, wie er angezeigt wird.',
        en: 'To delete, type your username exactly as shown.',
      });
    }
    await be.deleteAccount(auth);
  } catch (err) {
    toHttp(err);
  }
  return ok({}, clearCookies(request));
});
