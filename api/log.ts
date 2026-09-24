import { assertSameOrigin, clientIp, ok, readJson, str } from './_lib/http.js';
import { enforce } from './_lib/ratelimit.js';
import { route } from './_lib/route.js';

/**
 * POST /api/log  { kind, message, stack?, path?, release? }
 *
 * Fehler aus dem Browser landen hier und von hier im Vercel-Function-Log, als
 * eine JSON-Zeile mit `t: "client"`. So sieht man Abstürze, die nur bei
 * Besuchern passieren (altes Handy, abgebrochener Chunk nach einem Deploy).
 *
 * Datensparsam: keine IP im Log, keine Nutzer-ID. Pfade ohne Query, damit etwa
 * der Token aus dem Bestätigungslink nie mitgeschrieben wird. Mailadressen und
 * lange Token-artige Zeichenketten werden in Texten geschwärzt.
 * Missbrauch: Same-Origin, 4 KB, 20 Meldungen pro IP in 10 Minuten.
 */

const KINDS = new Set(['error', 'unhandledrejection', 'render', 'chunk', 'api']);

function scrub(text: string, max: number): string {
  return text
    .slice(0, max * 2)
    .replace(/[^@ ]+@[^@ ]+[.][A-Za-z]{2,}/g, '[mail]')
    .replace(/[A-Za-z0-9_-]{32,}/g, '[token]')
    .slice(0, max);
}

/** Nur Pfad und Hash-Route, ohne Query-Teil, egal ob vor oder im Hash. */
function cleanPath(raw: string): string {
  const [beforeHash, hash = ''] = raw.split('#');
  const path = (beforeHash ?? '').split('?')[0] ?? '';
  const route = hash.split('?')[0] ?? '';
  return scrub(`${path}${route ? `#${route}` : ''}`, 200);
}

export const POST = route(async (request) => {
  assertSameOrigin(request);
  await enforce({ name: 'client-log-ip', key: clientIp(request), max: 20, windowSec: 600 });
  const body = await readJson(request, 4096);
  const kind = KINDS.has(str(body.kind)) ? str(body.kind) : 'error';
  console.error(
    JSON.stringify({
      t: 'client',
      kind,
      message: scrub(str(body.message), 500),
      stack: scrub(str(body.stack), 1500) || undefined,
      path: cleanPath(str(body.path)),
      release: scrub(str(body.release), 40) || undefined,
      ua: scrub(request.headers.get('user-agent') ?? '', 160),
    }),
  );
  return ok();
});
