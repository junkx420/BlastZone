import { checkSecondaries, checkSecondarySkins, safeSkin } from '../../../src/shared/account-rules.js';
import { backend, COMMUNITY_DEFAULTS, toHttp, type CommunityPatch, type CommunityRow } from '../../_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson } from '../../_lib/http.js';
import { ownProfile, ownRows } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';

/**
 * GET   /api/community/me     eigene Community-Einstellungen
 * PATCH /api/community/me     ändern, jedes Feld optional:
 *   { listed, secondaries, secondarySkins, showPlacements, allowDms }
 *
 * Ohne Zeile gelten die Standardwerte (COMMUNITY_DEFAULTS in types.ts): nicht im
 * Verzeichnis, keine Secondaries, start.gg nicht geteilt, Nachrichten erlaubt.
 * `secondarySkins` hat dieselbe Reihenfolge wie `secondaries`. Ändern sich nur die
 * Secondaries, behalten bleibende Fighter ihren Skin, neue starten mit 1.
 */

export type CommunitySettings = Omit<CommunityRow, 'userId'>;

const BOOLEAN_FIELDS = ['listed', 'showPlacements', 'allowDms'] as const;

const settingsOf = (row: CommunityRow | undefined): CommunitySettings => {
  const r = row ?? { ...COMMUNITY_DEFAULTS, userId: '' };
  return {
    listed: r.listed,
    secondaries: r.secondaries,
    secondarySkins: r.secondaries.map((s, i) => safeSkin(s, r.secondarySkins[i])),
    showPlacements: r.showPlacements,
    allowDms: r.allowDms,
  };
};

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  try {
    const row = ownRows(auth, await be.getCommunity(auth), 'community')[0];
    return ok({ settings: settingsOf(row) }, cookies);
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

  const patch: CommunityPatch = {};
  for (const field of BOOLEAN_FIELDS) {
    if (!(field in body)) continue;
    const value = body[field];
    if (typeof value !== 'boolean') {
      throw new HttpError(400, 'invalid-setting', {
        de: 'Ungültige Einstellung.',
        en: 'Invalid setting.',
      });
    }
    patch[field] = value;
  }

  try {
    if ('secondaries' in body || 'secondarySkins' in body) {
      const current = settingsOf(ownRows(auth, await be.getCommunity(auth), 'community')[0]);
      let secondaries = current.secondaries;
      if ('secondaries' in body) {
        // Der Main kommt vom Server, nicht aus dem Körper: Sonst ließe sich die Prüfung mit einem falschen Main umgehen.
        const profile = ownProfile(auth, await be.getProfile(auth));
        const checked = checkSecondaries(body.secondaries, profile?.mainFighter ?? null);
        if (!checked.ok) throw new HttpError(400, 'invalid-secondaries', checked.message);
        secondaries = checked.value;
        patch.secondaries = secondaries;
      }
      const skins = checkSecondarySkins(body.secondarySkins, secondaries, { secondaries: current.secondaries, skins: current.secondarySkins });
      if (!skins.ok) throw new HttpError(400, 'invalid-skin', skins.message);
      patch.secondarySkins = skins.value;
    }
    if (!Object.keys(patch).length) throw new HttpError(400, 'empty', { de: 'Nichts zu ändern.', en: 'Nothing to change.' });

    const row = ownRows(auth, await be.saveCommunity(auth, patch), 'community-save')[0];
    if (!row) {
      throw new HttpError(403, 'forbidden', {
        de: 'Nicht gespeichert. Ist deine E-Mail-Adresse bestätigt?',
        en: 'Not saved. Is your email address confirmed?',
      });
    }
    return ok({ settings: settingsOf(row) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
