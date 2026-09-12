import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages/home.css';
import './styles/pages/fighter.css';
import './styles/pages/tiers.css';
import './styles/art.css';

import { initPalette } from './components/palette';
import { renderShell } from './components/shell';
import { mount, qs, qsa } from './lib/dom';
import { initSmoothScroll, motionOK, scrollToTarget, ScrollTrigger } from './lib/motion';
import { startRouter, type NavContext, type Route } from './lib/router';
import { fighterPage } from './pages/fighter';
import { homePage } from './pages/home';
import { notFoundPage } from './pages/notFound';
import { tiersPage } from './pages/tiers';
import type { PageView } from './pages/types';

const app = document.getElementById('app');
if (!app) throw new Error('#app fehlt in index.html');

const palette = initPalette();
const shell = renderShell(app, palette.open);
initSmoothScroll();

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
    case 'fighter':
      return fighterPage(route);
    default:
      return notFoundPage();
  }
}

/** Home, roster and notation are one page with different scroll targets. */
const pageKey = (route: Route): string =>
  route.name === 'fighter' ? `fighter/${route.params.slug}` : HOME_ROUTES.has(route.name) ? 'home' : route.name;

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
  const tile = qs<HTMLElement>(`.tile[data-slug="${CSS.escape(nav.previous.params.slug ?? '')}"]:not(.is-out)`, shell.main);
  if (!tile) return;
  const rect = tile.getBoundingClientRect();
  if (rect.bottom > 0 && rect.top < window.innerHeight) nameShared(tile);
}

function render(route: Route, nav: NavContext): void {
  cleanup?.();
  cleanup = null;
  ScrollTrigger.getAll().forEach((t) => t.kill());

  const page = view(route);
  document.title = page.title;
  mount(shell.main, page.markup);
  shell.setActive(route.name);
  cleanup = page.mount?.(shell.main) ?? null;

  const key = pageKey(route);
  const saved = nav.direction === 'back' ? scrollMemory.get(key) : undefined;
  const anchor = page.anchor ? qs<HTMLElement>(page.anchor, shell.main) : null;
  if (saved !== undefined) scrollToTarget(saved, true);
  else if (anchor) scrollToTarget(anchor, true);
  else scrollToTarget(0, true);

  currentKey = key;
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

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
      shell.main.focus({ preventScroll: true });
    });
});

qs<HTMLAnchorElement>('.skip-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  shell.main.focus();
  scrollToTarget(shell.main, true);
});

void document.fonts?.ready.then(() => ScrollTrigger.refresh());
