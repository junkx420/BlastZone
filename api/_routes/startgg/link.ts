import { normalizeStartggSlug, STARTGG_HINT, startggProfileUrl } from '../../../src/shared/startgg.js';
import { backend, toHttp, type StartggLinkRow } from '../../_lib/backend.js';
import { assertSameOrigin, HttpError, ok, readJson, str } from '../../_lib/http.js';
import { ownRows } from '../../_lib/owner.js';
import { enforce } from '../../_lib/ratelimit.js';
import { route } from '../../_lib/route.js';
import { requireAuth } from '../../_lib/session.js';
import { resolveStartggUser } from '../../_lib/startgg.js';
import { isVerified, oauthMode } from '../../_lib/startggOauth.js';

/**
 * GET    /api/startgg/link                      eigene Verknüpfung oder null
 * PUT    /api/startgg/link  { profile }         verknüpfen (URL, Slug oder Discriminator)
 * DELETE /api/startgg/link                      Verknüpfung lösen, Cache leeren
 *
 * Beim Verknüpfen fragt der Server start.gg, ob es das Profil gibt (Query A).
 * Ein Nachweis, dass das Profil der Person gehört, ist das nicht. Den liefert
 * erst „Mit start.gg bestätigen“ (authorize, callback, verify). `verified` in der
 * Antwort ist nur wahr, wenn die signierte Bestätigung zu Konto und Slug passt.
 * Öffentlich angezeigt werden darf eine Verknüpfung nur mit `verified: true`.
 */

export interface PublicStartggLink {
  slug: string;
  gamerTag: string | null;
  profileUrl: string;
  updatedAt: string;
  verified: boolean;
  verifiedAt: string | null;
  /** Ob der Server „Mit start.gg bestätigen“ gerade anbieten kann. */
  canVerify: boolean;
}

export async function publicLink(ownerId: string, row: StartggLinkRow | undefined): Promise<PublicStartggLink | null> {
  if (!row) return null;
  const verified = await isVerified(ownerId, row).catch(() => false);
  return {
    slug: row.slug,
    gamerTag: row.gamerTag,
    profileUrl: startggProfileUrl(row.slug),
    updatedAt: row.updatedAt,
    verified,
    verifiedAt: verified ? row.verification!.verifiedAt : null,
    canVerify: oauthMode() !== null,
  };
}

export const GET = route(async (request) => {
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  try {
    const rows = ownRows(auth, await be.getStartggLink(auth), 'startgg-link');
    return ok({ link: await publicLink(auth.userId, rows[0]), canVerify: oauthMode() !== null }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const PUT = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  // Jede Verknüpfung kostet eine start.gg-Anfrage. Zehn pro Stunde reichen für Vertipper.
  await enforce({ name: 'startgg-link-user', key: auth.userId, max: 10, windowSec: 3600 });

  const body = await readJson(request, 1024);
  const slug = normalizeStartggSlug(str(body.profile));
  if (!slug) throw new HttpError(400, 'startgg-invalid-profile', `Das sieht nicht nach einem start.gg-Profil aus. ${STARTGG_HINT}`);

  const player = await resolveStartggUser(slug);
  if (!player) throw new HttpError(404, 'startgg-player-not-found', 'Auf start.gg gibt es unter dieser Adresse kein Profil. Prüf die URL auf Tippfehler.');

  try {
    // Dasselbe Profil noch einmal eingetragen: Eine gültige Bestätigung bleibt. Jedes andere Profil beginnt unbestätigt.
    const current = ownRows(auth, await be.getStartggLink(auth), 'startgg-link')[0];
    const keep = current && current.slug === slug && (await isVerified(auth.userId, current).catch(() => false)) ? current.verification : null;
    const rows = ownRows(auth, await be.saveStartggLink(auth, { slug, gamerTag: player.gamerTag, verification: keep }, current?.slug !== slug), 'startgg-link-save');
    if (!rows[0]) throw new HttpError(403, 'forbidden', 'Die Verknüpfung konnte nicht gespeichert werden. Ist deine E-Mail-Adresse bestätigt?');
    return ok({ link: await publicLink(auth.userId, rows[0]) }, cookies);
  } catch (err) {
    toHttp(err);
  }
});

export const DELETE = route(async (request) => {
  assertSameOrigin(request);
  const be = backend();
  const { auth, cookies } = await requireAuth(request, be);
  await enforce({ name: 'startgg-unlink-user', key: auth.userId, max: 20, windowSec: 3600 });
  try {
    ownRows(auth, await be.deleteStartggLink(auth), 'startgg-link-delete');
    return ok({ link: null }, cookies);
  } catch (err) {
    toHttp(err);
  }
});
