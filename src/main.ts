import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages/home.css';
import './styles/pages/fighter.css';
import './styles/pages/tiers.css';
import './styles/pages/archetypes.css';
import './styles/pages/matchup.css';
import './styles/art.css';
import './styles/pages/account.css';
import './styles/theme-light.css';

import { mountAccountNav } from './components/accountNav';
import { initBookmarkButtons } from './components/bookmarkButtons';
import { initShareButtons } from './components/shareButtons';
import { initPalette } from './components/palette';
import { renderShell } from './components/shell';
import { initSiteBackground } from './components/siteBackground';
import { prepareContent } from './data/guide-index';
import { lang, t } from './i18n';
import { initErrorHandling, reportError } from './lib/errors';
import { applyTheme } from './lib/theme';
import { onAuth, refreshSession } from './services/auth';
import { clearBookmarkCache, loadBookmarks } from './services/db';
import { html, mount, qs, qsa } from './lib/dom';
import { initReveals, initSmoothScroll, motionOK, scrollToTarget, ScrollTrigger } from './lib/motion';
import { startRouter, type NavContext, type Route } from './lib/router';
import { archetypesPage } from './pages/archetypes';
import { matchupChartPage, matchupPage } from './pages/matchup';
import { communityPage } from './pages/community';
import { inboxPage, threadPage } from './pages/messages';
import { confirmPage } from './pages/confirm';
import { fighterPage } from './pages/fighter';
import { homePage } from './pages/home';
import { notFoundPage } from './pages/notFound';
import { imprintPage } from './pages/imprint';
import { playerPage } from './pages/player';
import { privacyPage } from './pages/privacy';
import { profilePage } from './pages/profile';
import { tiersPage } from './pages/tiers';
import type { PageView } from './pages/types';

const app = document.getElementById('app');
if (!app) throw new Error('#app fehlt in index.html');

// Sprache der Seite (i18n/lang.ts). index.html steht fest auf Deutsch, das hier zieht nach.
document.documentElement.lang = lang;
const skipLink = document.querySelector<HTMLAnchorElement>('.skip-link');
if (skipLink) skipLink.textContent = t('skip');
const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
if (description) description.content = t('meta.description');

initErrorHandling();
const palette = initPalette();
const shell = renderShell(app, palette.open);
initSiteBackground(app);
initSmoothScroll();
initReveals(shell.main);

/*
 * Konten. Die Seite rendert sofort als Gast und schaltet um, sobald
 * /api/auth/session antwortet. Antwortet nichts (kein Backend), bleibt alles
 * wie vor den Konten.
 */
mountAccountNav(shell.account, shell.menuExtra);
initBookmarkButtons();
initShareButtons();
let lastUserId: string | null = null;
onAuth((state) => {
  const user = state.status === 'user' ? state.user : null;
  applyTheme(user?.theme ?? 'dark');
  if (user?.id === lastUserId) return;
  lastUserId = user?.id ?? null;
  if (user) void loadBookmarks(true).catch(() => {});
  else clearBookmarkCache();
});
void refreshSession();

// Renders load from smashbros.com. If one fails, its stage falls back to the fighter number.
document.addEventListener(
  'error',
  (e) => {
    const img = e.target;
    if (img instanceof HTMLImageElement && img.hasAttribute('data-art')) {
      img.closest('[data-art-wrap]')?.classList.add('is-art-missing');
    }
  },
  true,
);

const HOME_ROUTES = new Set(['home', 'roster', 'notation']);
const scrollMemory = new Map<string, number>();
let currentKey = '';
let cleanup: (() => void) | null = null;

function view(route: Route): PageView {
  switch (route.name) {
    case 'home':
    case 'roster':
    case 'notation':
      return homePage(route);
    case 'tiers':
      return tiersPage();
    case 'archetypen':
      return archetypesPage(route);
    case 'matchup':
      return matchupPage(route);
    case 'matchupFighter':
      return matchupChartPage(route);
    case 'profil':
      return profilePage();
    case 'bestaetigen':
      return confirmPage(route);
    case 'datenschutz':
      return privacyPage();
    case 'impressum':
      return imprintPage();
    case 'spieler':
      return playerPage(route);
    case 'community':
      return communityPage(route);
    case 'nachrichten':
      return inboxPage();
    case 'nachricht':
      return threadPage(route);
    case 'fighter':
      return fighterPage(route);
    default:
      return notFoundPage();
  }
}

/** Home, roster and notation are one page with different scroll targets. */
const pageKey = (route: Route): string =>
  route.name === 'fighter'
    ? `fighter/${route.params.slug}`
    : route.name === 'spieler' || route.name === 'nachricht'
      ? `${route.name}/${(route.params.name ?? '').toLowerCase()}`
      : HOME_ROUTES.has(route.name)
        ? 'home'
        : route.name;

/* Shared-element transitions: tile art and name morph into the fighter header. */
const VT_ATTR = '[data-vt]';
const nameShared = (scopeEl: ParentNode): void =>
  qsa<HTMLElement>(VT_ATTR, scopeEl).forEach((el) => el.style.setProperty('view-transition-name', `fighter-${el.dataset.vt}`));
const clearShared = (): void => qsa<HTMLElement>(VT_ATTR).forEach((el) => el.style.removeProperty('view-transition-name'));

document.addEventListener(
  'click',
  (e) => {
    const anchor = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#/fighter/"]');
    if (!anchor) return;
    clearShared();
    nameShared(anchor);
  },
  true,
);

function linkReturningTile(nav: NavContext): void {
  if (nav.previous?.name !== 'fighter') return;
  const onScreen = (el: Element): boolean => {
    const rect = el.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };
  // Erst das Raster messen: Es steht auf `content-visibility: auto`, die Box einer Kachel darin
  // zu erfragen würde alle 86 Kacheln im Frame des Seitenwechsels layouten (70 ms).
  const grid = qs<HTMLElement>('[data-grid]', shell.main);
  if (!grid || !onScreen(grid)) return;
  const tile = qs<HTMLElement>(`.tile[data-slug="${CSS.escape(nav.previous.params.slug ?? '')}"]:not(.is-out)`, grid);
  if (tile && onScreen(tile)) nameShared(tile);
}

/** Ersatzseite, wenn eine Seite beim Aufbau abstürzt. Besser als eine leere Fläche unter der Leiste. */
const crashPage = (): PageView => ({
  title: `${t('crash.pageTitle')} | Blastzone`,
  markup: html`<div class="page container page-crash">
    <div class="empty empty--error" role="alert">
      <h1>${t('crash.heading')}</h1>
      <p>${t('crash.text')}</p>
      <div class="empty__actions">
        <button class="btn btn--sm" type="button" data-crash-reload>${t('state.reload')}</button>
        <a class="btn btn--sm btn--ghost" href="#/">${t('crash.home')}</a>
      </div>
    </div>
  </div>`,
});

function render(route: Route, nav: NavContext): void {
  cleanup?.();
  cleanup = null;
  ScrollTrigger.getAll().forEach((t) => t.kill());

  let page: PageView;
  try {
    page = view(route);
    document.title = page.title;
    mount(shell.main, page.markup);
    shell.setActive(route.name);
    cleanup = page.mount?.(shell.main) ?? null;
  } catch (err) {
    reportError('render', err);
    cleanup?.();
    cleanup = null;
    page = crashPage();
    document.title = page.title;
    mount(shell.main, page.markup);
    // Kein onclick im Markup: Die CSP erlaubt keine Inline-Handler.
    qs('[data-crash-reload]', shell.main)?.addEventListener('click', () => window.location.reload());
  }

  const key = pageKey(route);
  const saved = nav.direction === 'back' ? scrollMemory.get(key) : undefined;
  const anchor = page.anchor ? qs<HTMLElement>(page.anchor, shell.main) : null;
  if (saved !== undefined) scrollToTarget(saved, true);
  else if (anchor) scrollToTarget(anchor, true);
  else scrollToTarget(0, true);

  currentKey = key;
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

// Englische Inhalte vor der ersten Seite einsetzen (wartet höchstens 4 s, bei Deutsch gar nicht).
await prepareContent();

startRouter((route, nav) => {
  const key = pageKey(route);

  // Moving within the home page (hero → roster → notation) only scrolls.
  if (nav.previous && key === currentKey && key === 'home') {
    shell.setActive(route.name);
    const target = route.name === 'home' ? 0 : qs<HTMLElement>(`#${route.name}`, shell.main);
    if (target !== null) scrollToTarget(target);
    return;
  }

  if (currentKey) scrollMemory.set(currentKey, window.scrollY);
  document.documentElement.dataset.navDir = nav.direction;

  const canTransition = Boolean(nav.previous) && motionOK() && typeof document.startViewTransition === 'function';
  if (!canTransition) {
    render(route, nav);
    if (nav.previous) shell.main.focus({ preventScroll: true });
    return;
  }

  /*
   * Die Leiste bekommt ihren Transition-Namen nur fuer die Dauer des Wechsels.
   * Dauerhaft in der CSS gesetzt macht `view-transition-name` sie zur eigenen
   * backdrop root, dann findet ihr `backdrop-filter` nichts mehr hinter sich und
   * sie deckt nur noch ab. Ganz ohne Namen wiederum liegt sie im Root-Snapshot
   * und skaliert bei jedem Seitenwechsel mit.
   */
  const navBar = qs<HTMLElement>('[data-nav]');
  navBar?.style.setProperty('view-transition-name', 'site-nav');

  const transition = document.startViewTransition(() => {
    render(route, nav);
    linkReturningTile(nav);
  });
  // A second navigation aborts the running transition, and *both* promises reject.
  // Each needs its own handler, otherwise the browser reports an unhandled rejection.
  void transition.ready.catch(() => {});
  void transition.finished
    .catch(() => {})
    .finally(() => {
      clearShared();
      navBar?.style.removeProperty('view-transition-name');
      shell.main.focus({ preventScroll: true });
    });
});

qs<HTMLAnchorElement>('.skip-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  shell.main.focus();
  scrollToTarget(shell.main, true);
});

void document.fonts?.ready.then(() => ScrollTrigger.refresh());
