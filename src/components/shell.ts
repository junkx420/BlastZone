import { TIER_SOURCE } from '../data/tiers';
import { html, mount, qs, qsa } from '../lib/dom';
import { link, type RouteName } from '../lib/router';
import { ICONS } from './icons';

const NAV: Array<{ route: RouteName; path: string; label: string; wide?: boolean }> = [
  { route: 'roster', path: '/roster', label: 'Roster' },
  { route: 'tiers', path: '/tiers', label: 'Tier-Liste' },
  { route: 'notation', path: '/notation', label: 'Notation' },
];

export interface Shell {
  main: HTMLElement;
  setActive(route: RouteName): void;
}

const brand = html`<span class="brand__mark">${ICONS.burst}</span><span class="brand__word">Blastzone</span>`;

export function renderShell(app: HTMLElement, onSearch: () => void): Shell {
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
          <button class="nav__search" type="button" data-search aria-label="Fighter suchen" aria-keyshortcuts="/ Control+K">
            ${ICONS.search}<span class="nav__search-label" aria-hidden="true">Fighter suchen</span><kbd aria-hidden="true">/</kbd>
          </button>
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
  qs('[data-search]', app)?.addEventListener('click', onSearch);

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
