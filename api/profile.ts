import { FIGHTER_SLUG_PATTERN } from '../src/shared/account-rules.js';
import { backend, toHttp, type Theme } from './_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson } from './_lib/http.js';
import { route } from './_lib/route.js';
import { ownProfile } from './_lib/owner.js';
import { enforce } from './_lib/ratelimit.js';
import { requireAuth } from './_lib/session.js';

/**
 * GET   /api/profile                       eigenes Profil
 * PATCH /api/profile  { mainFighter?, theme? }
 *
 * Den Benutzernamen kann niemand über die API ändern: Die Datenbank erlaubt
 * UPDATE nur auf main_fighter und theme (Spaltenrechte in der Migration).
 */
export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  try {
    const profile = ownProfile(auth, await be.getProfile(auth));
    if (!profile) throw new HttpError(404, 'not-found', { de: 'Profil nicht gefunden.', en: 'Profile not found.' });
    return ok({ profile }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const PATCH = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'profile-update-user', key: auth.userId, max: 30, windowSec: 60 });
  const body = await readJson(request);

  const patch: { mainFighter?: string | null; theme?: Theme } = {};
  if ('mainFighter' in body) {
    const v = body.mainFighter;
    if (v !== null && (typeof v !== 'string' || !FIGHTER_SLUG_PATTERN.test(v))) {
      throw new HttpError(400, 'invalid-fighter', {
        de: 'Unbekannter Fighter.',
        en: 'Unknown fighter.',
      });
    }
    patch.mainFighter = v;
  }
  if ('theme' in body) {
    if (body.theme !== 'dark' && body.theme !== 'light') {
      throw new HttpError(400, 'invalid-theme', {
        de: 'Unbekanntes Farbschema.',
        en: 'Unknown color scheme.',
      });
    }
    patch.theme = body.theme;
  }
  if (!Object.keys(patch).length) throw new HttpError(400, 'empty', { de: 'Nichts zu ändern.', en: 'Nothing to change.' });

  try {
    return ok({ profile: ownProfile(auth, await be.updateProfile(auth, patch)) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
