import { backend, BackendError } from '../_lib/backend.js';
import { handle, ok } from '../_lib/http.js';
import { authenticate, clearCookies, publicUser } from '../_lib/session.js';

/**
 * GET /api/auth/session
 *
 * Der Browser kann die HttpOnly-Cookies nicht lesen und fragt deshalb hier, wer
 * angemeldet ist. Antwortet mit `user: null`, wenn niemand angemeldet ist oder
 * keine Keys konfiguriert sind. Die Seite funktioniert dann wie bisher.
 */
export const GET = handle(async (request) => {
  let be;
  try {
    be = backend();
  } catch {
    return ok({ user: null, available: false });
  }

  const { auth, cookies } = await authenticate(request, be);
  if (!auth) return ok({ user: null, available: true }, cookies);

  try {
    const user = await be.getUser(auth.token);
    const profile = user.emailConfirmed ? await be.getProfile(auth.token, auth.userId) : null;
    if (!profile) return ok({ user: null, available: true }, clearCookies(request));
    return ok({ user: publicUser(user.email, profile), available: true }, cookies);
  } catch (err) {
    if (err instanceof BackendError && err.code === 'invalid-token') return ok({ user: null, available: true }, clearCookies(request));
    throw err;
  }
});
