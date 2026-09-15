import { mockAllowed, readStartggConfig } from './env.js';
import { HttpError } from './http.js';
import { enforce } from './ratelimit.js';

/**
 * Client für die start.gg GraphQL API. Läuft nur auf dem Server.
 *
 * - Der Token kommt aus STARTGG_TOKEN und geht nur in den Authorization-Header
 *   dieser einen Anfrage. Er landet nie in einer Antwort, nie im Log.
 * - Jede Anfrage zählt gegen einen gemeinsamen Topf (60 pro Minute). start.gg
 *   erlaubt 80 pro Minute pro Token; der Abstand fängt Ausreißer ab.
 *   Ohne Upstash zählt jede Vercel-Instanz für sich, siehe docs/BETRIEB.md.
 * - 5 Sekunden Timeout, keine Wiederholung: Ein zweiter Versuch gegen eine
 *   gedrosselte API macht die Drosselung nur länger.
 */

const ENDPOINT = 'https://api.start.gg/gql/alpha';
const TIMEOUT = 5000;

export interface StartggUser {
  userId: string;
  slug: string;
  gamerTag: string | null;
}

/** Query A aus dem Architektur-Plan: Gibt es das Profil, und wie heißt der Spieler? */
const RESOLVE_USER = `query ResolveStartggUser($slug: String!) {
  user(slug: $slug) {
    id
    slug
    player {
      id
      gamerTag
      prefix
    }
  }
}`;

const unavailable = (): HttpError => new HttpError(503, 'startgg-unavailable', 'start.gg ist gerade nicht erreichbar. Versuch es gleich noch einmal.');

async function graphql<T>(query: string, variables: Record<string, unknown>, token: string): Promise<T> {
  await enforce({ name: 'startgg-global', key: 'alle', max: 60, windowSec: 60 });
  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ query, variables }),
      signal: AbortSignal.timeout(TIMEOUT),
    });
  } catch (err) {
    const timedOut = err instanceof Error && (err.name === 'TimeoutError' || err.name === 'AbortError');
    console.warn(JSON.stringify({ t: 'startgg', error: timedOut ? 'timeout' : 'network' }));
    throw unavailable();
  }

  if (res.status === 429) {
    console.warn(JSON.stringify({ t: 'startgg', status: 429 }));
    throw new HttpError(503, 'startgg-rate-limited', 'start.gg bremst gerade die Anfragen. Versuch es in ein paar Minuten erneut.', { 'Retry-After': '120' });
  }
  if (res.status === 401 || res.status === 403) {
    // Token falsch, abgelaufen oder widerrufen. Das ist ein Einrichtungsfehler, kein Nutzerfehler.
    console.error(JSON.stringify({ t: 'startgg', status: res.status, hinweis: 'STARTGG_TOKEN ungültig oder widerrufen' }));
    throw new HttpError(503, 'startgg-not-configured', 'Die start.gg-Anbindung ist gerade nicht eingerichtet.');
  }
  if (!res.ok) {
    console.warn(JSON.stringify({ t: 'startgg', status: res.status }));
    throw unavailable();
  }

  let body: { data?: T; errors?: Array<{ message?: string }> };
  try {
    body = (await res.json()) as typeof body;
  } catch {
    throw unavailable();
  }
  if (body.errors?.length && !body.data) {
    console.warn(JSON.stringify({ t: 'startgg', graphqlErrors: body.errors.map((e) => String(e.message ?? '').slice(0, 200)) }));
    throw unavailable();
  }
  if (!body.data) throw unavailable();
  return body.data;
}

/**
 * Test-Resolver für den lokalen Speicher-Mock ohne Token. Jeder Slug existiert,
 * außer `user/00000000`, der steht für „Spieler nicht gefunden“.
 */
function mockResolve(slug: string): StartggUser | null {
  if (slug === 'user/00000000') return null;
  const discriminator = slug.slice(5);
  return { userId: String(parseInt(discriminator.slice(0, 6), 36)), slug, gamerTag: `Testspieler ${discriminator.slice(0, 4).toUpperCase()}` };
}

/** Löst einen normalisierten Slug auf. `null` heißt: Dieses Profil gibt es auf start.gg nicht. */
export async function resolveStartggUser(slug: string): Promise<StartggUser | null> {
  const { token } = readStartggConfig();
  if (!token) {
    if (mockAllowed()) return mockResolve(slug);
    throw new HttpError(503, 'startgg-not-configured', 'Die start.gg-Anbindung ist noch nicht eingerichtet.');
  }

  const data = await graphql<{ user: { id: number | string | null; slug: string | null; player: { gamerTag: string | null; prefix: string | null } | null } | null }>(
    RESOLVE_USER,
    { slug },
    token,
  );
  const user = data.user;
  if (!user?.id) return null;
  const tag = user.player?.gamerTag?.trim() ?? '';
  const prefix = user.player?.prefix?.trim() ?? '';
  return {
    userId: String(user.id),
    slug: user.slug ?? slug,
    // Präfix wie auf start.gg: „Team | Tag“. Auf 80 Zeichen begrenzt, wie in der Datenbank.
    gamerTag: tag ? (prefix ? `${prefix} | ${tag}` : tag).slice(0, 80) : null,
  };
}
