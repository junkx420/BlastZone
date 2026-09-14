import { TIER_SOURCE } from '../data/tiers';
import { html, mount, qs, qsa } from '../lib/dom';
import { link, type RouteName } from '../lib/router';
import { ICONS } from './icons';

const NAV: Array<{ route: RouteName; path: string; label: string; wide?: boolean }> = [
  { route: 'roster', path: '/roster', label: 'Roster' },
  { route: 'tiers', path: '/tiers', label: 'Tier-Liste' },
  { route: 'archetypen', path: '/archetypen', label: 'Archetypen' },
  // Label bewusst "Inputs": "Notation" sagt in der Szene niemand.
  // Der Pfad bleibt /notation, damit vorhandene Links weiter funktionieren.
  { route: 'notation', path: '/notation', label: 'Inputs' },
];

export interface Shell {
  main: HTMLElement;
  setActive(route: RouteName): void;
}

const brand = html`<span class="brand__mark">${ICONS.burst}</span><span class="brand__word">Blastzone</span>`;

export function renderShell(app: HTMLElement, onSearch: (query?: string) => void): Shell {
  mount(
    app,
    html`<header class="nav" data-nav>
        <div class="nav__inner">
          <a class="brand" href="${link('/')}" aria-label="Blastzone, Startseite">${brand}</a>
          <nav class="nav__links" aria-label="Hauptnavigation">
            ${NAV.map(
              (item) =>
                html`<a class="nav__link${item.wide ? ' nav__link--wide' : ''}" href="${link(item.path)}" data-route="${item.route}">${item.label}</a>`,
            )}
          </nav>
          <div class="nav__search" role="search">
            ${ICONS.search}
            <label class="vh" for="nav-search">Fighter suchen</label>
            <input id="nav-search" class="nav__search-input" type="search" placeholder="Fighter suchen" readonly
              aria-haspopup="dialog" aria-keyshortcuts="/ Control+K" autocomplete="off" data-search />
          </div>
        </div>
      </header>
      <main id="main" class="main" tabindex="-1"></main>
      <footer class="footer">
        <div class="footer__inner">
          <div class="footer__brand">
            <a class="brand" href="${link('/')}" aria-label="Blastzone, Startseite">${brand}</a>
            <p>Ein Fanprojekt für die Competitive-Szene von Super Smash Bros. Ultimate.</p>
          </div>
          <nav class="footer__nav" aria-label="Fußzeile">
            ${NAV.map((item) => html`<a href="${link(item.path)}">${item.label}</a>`)}
            <!-- Nur in der Fußzeile, nicht in der Hauptnavigation: Pflichtangabe, kein Inhalt. -->
            <a href="${link('/datenschutz')}">Datenschutz</a>
          </nav>
          <div class="footer__data">
            <h2 class="footer__title">Datenstand</h2>
            <p>
              Tier-Daten: <a href="${TIER_SOURCE.url}" target="_blank" rel="noopener">${TIER_SOURCE.name}</a> vom
              ${TIER_SOURCE.published}. Combo-Routen mit Quelle pro Route (SmashWiki, Game8, EventHubs), Schaden aus
              Ultimate Frame Data inklusive 1v1-Faktor und gerundet.
            </p>
          </div>
        </div>
        <p class="footer__legal">
          Blastzone steht in keiner Verbindung zu Nintendo, Bandai Namco oder Sora Ltd. Fighter-Artwork von
          smashbros.com, © Nintendo. Fighter- und Seriennamen gehören ihren Rechteinhabern.
        </p>
      </footer>`,
  );

  const nav = qs<HTMLElement>('[data-nav]', app)!;
  const links = qsa<HTMLAnchorElement>('.nav__link', app);
  /*
   * Das Feld in der Leiste ist der Einstieg, gesucht wird im Overlay. Es steht
   * auf readonly, damit auf dem Handy nicht erst eine Tastatur für ein Feld
   * aufgeht, das sofort vom Overlay abgelöst wird. Ein getippter Buchstabe geht
   * direkt ins Overlay mit.
   *
   * Bewusst kein focus-Listener: Beim Schließen gibt der Dialog den Fokus an
   * genau dieses Feld zurück, und ein focus-Listener öffnete das Overlay dann
   * sofort wieder.
   */
  const search = qs<HTMLInputElement>('[data-search]', app);
  search?.addEventListener('click', () => onSearch());
  search?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === '/') {
      e.preventDefault();
      onSearch();
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      onSearch(e.key);
    }
  });

  let ticking = false;
  const onScroll = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  return {
    main: qs<HTMLElement>('#main', app)!,
    setActive(route) {
      links.forEach((a) => {
        if (a.dataset.route === route) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
    },
  };
}
