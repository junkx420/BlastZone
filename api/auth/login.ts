import { normalizeEmail } from '../../src/shared/account-rules.js';
import { backend, BackendError, toHttp } from '../_lib/backend.js';
import { assertSameOrigin, clientIp, handle, HttpError, ok, readJson, str } from '../_lib/http.js';
import { enforce } from '../_lib/ratelimit.js';
import { publicUser, sessionCookies } from '../_lib/session.js';

/**
 * POST /api/auth/login  { email, password }
 *
 * Brute-Force-Schutz in zwei Töpfen: pro IP (breit, gegen das Durchprobieren
 * vieler Konten) und pro IP plus Adresse (eng, gegen das Raten eines Passworts).
 * Gezählt wird VOR der Prüfung, also auch erfolgreiche Versuche. Das hält die
 * Logik einfach und verrät über die Antwortzeit nichts.
 */
export const POST = handle(async (request) => {
  assertSameOrigin(request);
  const body = await readJson(request);
  const email = normalizeEmail(str(body.email));
  const password = str(body.password);
  const ip = clientIp(request);

  await enforce(
    { name: 'login-ip', key: ip, max: 30, windowSec: 15 * 60 },
    { name: 'login-account', key: `${ip}|${email ?? str(body.email)}`, max: 5, windowSec: 15 * 60 },
  );

  if (!email || !password || password.length > 256) throw new HttpError(401, 'invalid-credentials', 'E-Mail oder Passwort stimmt nicht.');

  const be = backend();
  try {
    const session = await be.signIn(email, password);
    if (!session.user.emailConfirmed) throw new BackendError('email-not-confirmed');
    const profile = await be.getProfile(session.accessToken, session.user.id);
    if (!profile) throw new BackendError('not-found');
    return ok({ user: publicUser(session.user.email, profile) }, sessionCookies(request, session));
  } catch (err) {
    toHttp(err, 'login');
  }
});
