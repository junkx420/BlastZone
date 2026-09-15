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

/* ── Placements (Query B) ─────────────────────────────────────────────── */

/** start.gg-ID von Super Smash Bros. Ultimate. */
const SSBU = 1386;
/** Wie viele Turniere pro Abruf. 15 Turniere mit je bis zu drei SSBU-Events bleiben weit unter start.ggs 1 000 Objekten. */
const TOURNAMENTS_PER_FETCH = 15;
/** Höchstens so viele Einträge zeigen und speichern. */
export const MAX_PLACEMENTS = 30;

/*
 * Live geprüft am 15.09.2026:
 * - Ohne `tournamentView` kommen genau die Turniere, an denen der Spieler teilnahm.
 *   Mit "competitor" oder "admin" kam 0 zurück, deshalb bleibt der Filter weg.
 * - Standardmäßig neueste zuerst; `sortBy: "startAt desc"` steht trotzdem da, damit
 *   eine Änderung bei start.gg die Reihenfolge nicht umdreht.
 * - Ob wirklich eine Teilnahme vorliegt, entscheidet `userEntrant`: Events ohne
 *   eigenen Entrant fallen in `toPlacements` heraus.
 */
const PLACEMENTS = `query StartggUltimatePlacements($slug: String!, $userId: ID!, $perPage: Int!) {
  user(slug: $slug) {
    tournaments(query: { page: 1, perPage: $perPage, sortBy: "startAt desc", filter: { past: true, videogameId: [${SSBU}] } }) {
      nodes {
        id
        name
        slug
        startAt
        isOnline
        city
        countryCode
        images(type: "profile") { url }
        events(filter: { videogameId: [${SSBU}] }) {
          id
          name
          slug
          startAt
          state
          numEntrants
          userEntrant(userId: $userId) {
            id
            standing { placement }
          }
        }
      }
    }
  }
}`;

export interface Placement {
  tournamentId: string;
  tournament: string;
  eventId: string;
  event: string;
  /** start.gg-Pfad des Events, etwa „tournament/x/event/ultimate-singles“. */
  eventSlug: string;
  /** ISO-Datum des Events, sonst des Turniers. */
  startAt: string;
  isOnline: boolean;
  location: string | null;
  placement: number;
  entrants: number;
  /** Nur Bilder von images.start.gg, alles andere wird verworfen (CSP, keine fremden Hosts). */
  imageUrl: string | null;
}

interface RawEvent {
  id: number | string;
  name: string | null;
  slug: string | null;
  startAt: number | null;
  state: string | null;
  numEntrants: number | null;
  userEntrant: { standing: { placement: number | null } | null } | null;
}
interface RawTournament {
  id: number | string;
  name: string | null;
  slug: string | null;
  startAt: number | null;
  isOnline: boolean | null;
  city: string | null;
  countryCode: string | null;
  images: Array<{ url: string | null }> | null;
  events: RawEvent[] | null;
}

const clip = (s: string | null | undefined, max: number): string => (s ?? '').trim().slice(0, max);
const SAFE_SLUG = /^tournament[/][a-z0-9-]+[/]event[/][a-z0-9-]+$/;

function safeImage(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    return u.protocol === 'https:' && u.hostname === 'images.start.gg' ? u.href : null;
  } catch {
    return null;
  }
}

/** Nur abgeschlossene SSBU-Events mit eigenem Placement, neueste zuerst. */
export function toPlacements(tournaments: RawTournament[]): Placement[] {
  const out: Placement[] = [];
  for (const t of tournaments) {
    for (const e of t.events ?? []) {
      const placement = e.userEntrant?.standing?.placement;
      const entrants = e.numEntrants ?? 0;
      if (e.state !== 'COMPLETED' || !placement || placement < 1 || entrants < 1) continue;
      const when = e.startAt ?? t.startAt;
      const eventSlug = clip(e.slug, 200);
      out.push({
        tournamentId: String(t.id),
        tournament: clip(t.name, 120) || 'Unbenanntes Turnier',
        eventId: String(e.id),
        event: clip(e.name, 80) || 'Event',
        eventSlug: SAFE_SLUG.test(eventSlug) ? eventSlug : '',
        startAt: when ? new Date(when * 1000).toISOString() : '',
        isOnline: Boolean(t.isOnline),
        location: t.isOnline ? null : [clip(t.city, 60), clip(t.countryCode, 3)].filter(Boolean).join(', ') || null,
        placement: Math.min(placement, entrants),
        entrants,
        imageUrl: safeImage(t.images?.[0]?.url),
      });
    }
  }
  return out.sort((a, b) => b.startAt.localeCompare(a.startAt)).slice(0, MAX_PLACEMENTS);
}

/** Test-Placements für den Speicher-Mock. `user/00000001` hat keine SSBU-Turniere. */
function mockPlacements(slug: string): Placement[] {
  if (slug === 'user/00000001') return [];
  const day = 86400000;
  const base = Date.UTC(2026, 8, 12);
  const rows: Array<[string, string, number, number, boolean]> = [
    // Erkennbar erfundene Namen: Das sind Testdaten für den lokalen Mock, keine echten Turniere.
    ['Testturnier Nord #3', 'Ultimate Singles', 5, 48, false],
    ['Testturnier Nord #3', 'Ultimate Doubles', 3, 16, false],
    ['Testturnier Online 12', 'Ultimate Singles', 17, 129, true],
    ['Testturnier Groß 2026', 'Ultimate Singles', 33, 256, false],
    ['Testturnier Amateure', 'Amateur Bracket', 1, 12, false],
  ];
  return rows.map(([tournament, event, placement, entrants, online], i) => ({
    tournamentId: String(900 + i),
    tournament,
    eventId: String(9000 + i),
    event,
    eventSlug: '',
    startAt: new Date(base - i * 9 * day).toISOString(),
    isOnline: online,
    location: online ? null : 'Norddeutschland, DE',
    placement,
    entrants,
    imageUrl: null,
  }));
}

export async function fetchStartggPlacements(slug: string, userId: string): Promise<Placement[]> {
  const { token } = readStartggConfig();
  if (!token) {
    if (mockAllowed()) return mockPlacements(slug);
    throw new HttpError(503, 'startgg-not-configured', 'Die start.gg-Anbindung ist noch nicht eingerichtet.');
  }
  const data = await graphql<{ user: { tournaments: { nodes: RawTournament[] | null } | null } | null }>(
    PLACEMENTS,
    { slug, userId, perPage: TOURNAMENTS_PER_FETCH },
    token,
  );
  return toPlacements(data.user?.tournaments?.nodes ?? []);
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
