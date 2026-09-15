import { TIER_SOURCE } from '../data/tiers';
import { t } from '../i18n';
import { html, mount, qs, qsa } from '../lib/dom';
import { link, type RouteName } from '../lib/router';
import { ICONS } from './icons';
import { langSwitch, mountLangSwitch } from './langSwitch';

const NAV: Array<{ route: RouteName; path: string; label: string; wide?: boolean }> = [
  { route: 'roster', path: '/roster', label: t('nav.roster') },
  { route: 'tiers', path: '/tiers', label: t('nav.tiers') },
  { route: 'archetypen', path: '/archetypen', label: t('nav.archetypes') },
  // Label bewusst "Inputs": "Notation" sagt in der Szene niemand.
  // Der Pfad bleibt /notation, damit vorhandene Links weiter funktionieren.
  { route: 'notation', path: '/notation', label: t('nav.inputs') },
  // Unter 900 px ausgeblendet (wide): Fünf Links passen auf dem Handy nicht in die Leiste.
  // Dort führen Fußzeile, Profil und jedes Spielerprofil zur Community.
  { route: 'community', path: '/community', label: t('nav.community'), wide: true },
];

export interface Shell {
  main: HTMLElement;
  /** Platz für Anmelden, Theme-Umschalter und Profil-Chip, siehe accountNav.ts. */
  account: HTMLElement;
  setActive(route: RouteName): void;
}

const brand = html`<span class="brand__mark">${ICONS.burst}</span><span class="brand__word">Blastzone</span>`;

export function renderShell(app: HTMLElement, onSearch: (query?: string) => void): Shell {
  mount(
    app,
    html`<div class="sitebg" aria-hidden="true"><div class="sitebg__grid"></div><div class="sitebg__lit"></div></div>
      <header class="nav" data-nav>
        <div class="nav__inner">
          <a class="brand" href="${link('/')}" aria-label="${t('nav.home')}">${brand}</a>
          <nav class="nav__links" aria-label="${t('nav.main')}">
            ${NAV.map(
              (item) =>
                html`<a class="nav__link${item.wide ? ' nav__link--wide' : ''}" href="${link(item.path)}" data-route="${item.route}">${item.label}</a>`,
            )}
          </nav>
          <div class="nav__search" role="search">
            ${ICONS.search}
            <label class="vh" for="nav-search">${t('nav.search')}</label>
            <input id="nav-search" class="nav__search-input" type="search" placeholder="${t('nav.search')}" readonly
              aria-haspopup="dialog" aria-keyshortcuts="/ Control+K" autocomplete="off" data-search />
          </div>
          <div class="nav__lang" data-lang-switch>${langSwitch()}</div>
          <div class="nav__account" data-account></div>
        </div>
      </header>
      <main id="main" class="main" tabindex="-1"></main>
      <footer class="footer">
        <div class="footer__inner">
          <div class="footer__brand">
            <a class="brand" href="${link('/')}" aria-label="${t('nav.home')}">${brand}</a>
            <p>${t('footer.tagline')}</p>
          </div>
          <nav class="footer__nav" aria-label="${t('footer.nav')}">
            ${NAV.map((item) => html`<a href="${link(item.path)}">${item.label}</a>`)}
            <!-- Nur in der Fußzeile, nicht in der Hauptnavigation: Pflichtangabe, kein Inhalt. -->
            <a href="${link('/datenschutz')}">${t('footer.privacy')}</a>
            <a href="${link('/impressum')}">${t('footer.imprint')}</a>
          </nav>
          <div class="footer__data">
            <h2 class="footer__title">${t('footer.dataTitle')}</h2>
            <p>
              ${t('footer.tierData')} <a href="${TIER_SOURCE.url}" target="_blank" rel="noopener">${TIER_SOURCE.name}</a> ${t('footer.tierFrom')}
              ${TIER_SOURCE.published}. ${t('footer.dataRest')}
            </p>
          </div>
        </div>
        <p class="footer__legal">${t('footer.legal')}</p>
      </footer>`,
  );

  const nav = qs<HTMLElement>('[data-nav]', app)!;
  mountLangSwitch(qs<HTMLElement>('[data-lang-switch]', app)!);
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
    account: qs<HTMLElement>('[data-account]', app)!,
    setActive(route) {
      qsa<HTMLAnchorElement>('.nav__me', app).forEach((a) => {
        if (route === 'profil') a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
      links.forEach((a) => {
        if (a.dataset.route === route) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
    },
  };
}
