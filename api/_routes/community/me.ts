import { checkSecondaries } from '../../../src/shared/account-rules.js';
import { backend, toHttp } from '../../_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson } from '../../_lib/http.js';
import { ownProfile, ownRows } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET   /api/community/me                              eigene Community-Einstellungen
 * PATCH /api/community/me  { listed?, secondaries? }   ändern
 *
 * Ohne Zeile gelten die Standardwerte: nicht im Verzeichnis, keine Secondaries.
 */

export interface CommunitySettings {
  listed: boolean;
  secondaries: string[];
}

const DEFAULTS: CommunitySettings = { listed: false, secondaries: [] };

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  try {
    const row = ownRows(auth, await be.getCommunity(auth), 'community')[0];
    const settings: CommunitySettings = row ? { listed: row.listed, secondaries: row.secondaries } : DEFAULTS;
    return ok({ settings }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const PATCH = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'community-update-user', key: auth.userId, max: 30, windowSec: 60 });
  const body = await readJson(request, 1024);

  const patch: { listed?: boolean; secondaries?: string[] } = {};
  if ('listed' in body) {
    if (typeof body.listed !== 'boolean') {
      throw new HttpError(400, 'invalid-listed', {
        de: 'Ungültige Angabe für das Verzeichnis.',
        en: 'Invalid directory setting.',
      });
    }
    patch.listed = body.listed;
  }

  try {
    if ('secondaries' in body) {
      // Der Main kommt vom Server, nicht aus dem Körper: Sonst ließe sich die Prüfung mit einem falschen Main umgehen.
      const profile = ownProfile(auth, await be.getProfile(auth));
      const checked = checkSecondaries(body.secondaries, profile?.mainFighter ?? null);
      if (!checked.ok) throw new HttpError(400, 'invalid-secondaries', checked.message);
      patch.secondaries = checked.value;
    }
    if (!Object.keys(patch).length) throw new HttpError(400, 'empty', { de: 'Nichts zu ändern.', en: 'Nothing to change.' });

    const row = ownRows(auth, await be.saveCommunity(auth, patch), 'community-save')[0];
    if (!row) {
      throw new HttpError(403, 'forbidden', {
        de: 'Nicht gespeichert. Ist deine E-Mail-Adresse bestätigt?',
        en: 'Not saved. Is your email address confirmed?',
      });
    }
    return ok({ settings: { listed: row.listed, secondaries: row.secondaries } satisfies CommunitySettings }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
