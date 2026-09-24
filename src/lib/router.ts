export type RouteName =
  | 'home'
  | 'roster'
  | 'notation'
  | 'tiers'
  | 'archetypen'
  | 'matchup'
  | 'profil'
  | 'spieler'
  | 'community'
  | 'nachrichten'
  | 'nachricht'
  | 'bestaetigen'
  | 'fighter'
  | 'datenschutz'
  | 'impressum'
  | 'notfound';

export interface Route {
  name: RouteName;
  params: Record<string, string>;
  query: URLSearchParams;
  path: string;
}

export interface NavContext {
  direction: 'forward' | 'back';
  previous: Route | null;
}

const TABLE: Array<{ name: RouteName; pattern: RegExp; keys: string[] }> = [
  { name: 'home', pattern: /^\/$/, keys: [] },
  { name: 'roster', pattern: /^\/roster$/, keys: [] },
  { name: 'notation', pattern: /^\/notation$/, keys: [] },
  { name: 'tiers', pattern: /^\/tiers$/, keys: [] },
  { name: 'archetypen', pattern: /^\/archetypen$/, keys: [] },
  { name: 'matchup', pattern: /^\/matchup$/, keys: [] },
  { name: 'profil', pattern: /^\/profil$/, keys: [] },
  { name: 'bestaetigen', pattern: /^\/bestaetigen$/, keys: [] },
  { name: 'datenschutz', pattern: /^\/datenschutz$/, keys: [] },
  { name: 'impressum', pattern: /^\/impressum$/, keys: [] },
  { name: 'community', pattern: /^\/community$/, keys: [] },
  // Benutzernamen wie in src/shared/account-rules.ts (USERNAME_PATTERN). Alles andere ist gar keine Spielerseite.
  { name: 'spieler', pattern: /^\/spieler\/([A-Za-z0-9_-]{3,20})$/, keys: ['name'] },
  { name: 'nachrichten', pattern: /^\/nachrichten$/, keys: [] },
  { name: 'nachricht', pattern: /^\/nachrichten\/([A-Za-z0-9_-]{3,20})$/, keys: ['name'] },
  { name: 'fighter', pattern: /^\/fighter\/([a-z0-9-]+)$/, keys: ['slug'] },
];

export function parse(hash: string): Route {
  const body = hash.startsWith('#/') ? hash.slice(1) : '/';
  const [rawPath = '/', search = ''] = body.split('?');
  const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
  for (const { name, pattern, keys } of TABLE) {
    const match = pattern.exec(path);
    if (!match) continue;
    const params: Record<string, string> = {};
    keys.forEach((key, i) => (params[key] = decodeURIComponent(match[i + 1] ?? '')));
    return { name, params, query: new URLSearchParams(search), path };
  }
  return { name: 'notfound', params: {}, query: new URLSearchParams(search), path };
}

export function link(path: string, query?: Record<string, string>): string {
  const qs = query ? new URLSearchParams(query).toString() : '';
  return `#${path}${qs ? `?${qs}` : ''}`;
}

/** Rewrites the current URL's query (filters, tabs) without a navigation or history entry. */
export function replaceQuery(query: URLSearchParams): void {
  const { path } = parse(location.hash);
  const qs = query.toString();
  history.replaceState(history.state, '', `#${path}${qs ? `?${qs}` : ''}`);
}

export function startRouter(onRoute: (route: Route, nav: NavContext) => void): void {
  let previous: Route | null = null;
  let lastStamp = 0;

  // Each history entry gets a monotonic stamp; a lower stamp means the user went back.
  const stamp = (): number => {
    const state = history.state as { stamp?: number } | null;
    if (typeof state?.stamp === 'number') return state.stamp;
    const next = performance.timeOrigin + performance.now();
    history.replaceState({ ...(state ?? {}), stamp: next }, '');
    return next;
  };

  const handle = (initial: boolean): void => {
    // Plain in-page anchors (#main) are not routes.
    if (!initial && location.hash && !location.hash.startsWith('#/')) return;
    const current = stamp();
    const direction = current < lastStamp ? 'back' : 'forward';
    lastStamp = current;
    const route = parse(location.hash);
    onRoute(route, { direction, previous });
    previous = route;
  };

  window.addEventListener('hashchange', () => handle(false));
  handle(true);
}
