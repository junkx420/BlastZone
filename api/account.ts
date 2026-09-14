import { backend, toHttp } from './_lib/backend.js';
import { assertSameOrigin, handle, HttpError, ok, readJson, str } from './_lib/http.js';
import { enforce } from './_lib/ratelimit.js';
import { clearCookies, requireAuth } from './_lib/session.js';

/**
 * DELETE /api/account  { confirm: <Benutzername> }
 *
 * Löscht das eigene Konto samt Profil, Kommentaren und Lesezeichen (Kaskade in
 * der Datenbank). Recht auf Löschung nach Art. 17 DSGVO, ohne dass jemand eine
 * Mail schreiben muss. Der Benutzername muss zur Bestätigung mitgeschickt werden.
 */
export const DELETE = handle(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth } = await requireAuth(request, be);
  await enforce({ name: 'account-delete', key: auth.userId, max: 3, windowSec: 3600 });

  const body = await readJson(request);
  try {
    const profile = await be.getProfile(auth.token, auth.userId);
    if (!profile || str(body.confirm) !== profile.username) {
      throw new HttpError(400, 'confirm-mismatch', 'Zum Löschen deinen Benutzernamen genau so eintippen, wie er angezeigt wird.');
    }
    await be.deleteAccount(auth.token);
  } catch (err) {
    toHttp(err);
  }
  return ok({}, clearCookies(request));
});
