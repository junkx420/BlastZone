import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export type FlipApi = typeof import('gsap/Flip').Flip;

let flipPromise: Promise<FlipApi> | null = null;

/** Flip only animates the roster filter, so it stays out of the initial bundle. */
export function loadFlip(): Promise<FlipApi> {
  flipPromise ??= import('gsap/Flip').then(({ Flip }) => {
    gsap.registerPlugin(Flip);
    return Flip;
  });
  return flipPromise;
}

const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const fineQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

export const motionOK = (): boolean => !reducedQuery.matches;

let lenis: Lenis | null = null;

export function initSmoothScroll(): void {
  const start = (): void => {
    if (lenis || !motionOK()) return;
    lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
  };
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  start();
  reducedQuery.addEventListener('change', () => {
    if (motionOK()) start();
    else {
      lenis?.destroy();
      lenis = null;
    }
  });
}

/** Freezes page scrolling while a modal layer is open. */
export function lockScroll(locked: boolean): void {
  if (locked) lenis?.stop();
  else lenis?.start();
  document.documentElement.classList.toggle('is-scroll-locked', locked);
}

const navOffset = (): number => {
  const nav = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
  return -((Number.isFinite(nav) ? nav : 64) + 16);
};

export function scrollToTarget(target: HTMLElement | number, immediate = false): void {
  if (lenis) {
    lenis.scrollTo(target, {
      offset: typeof target === 'number' ? 0 : navOffset(),
      immediate,
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      force: true,
    });
    return;
  }
  const top = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY + navOffset();
  window.scrollTo({ top, behavior: immediate || !motionOK() ? 'instant' : 'smooth' });
}

/**
 * Page-scoped animation context: everything created inside (tweens, ScrollTriggers)
 * is reverted with the returned cleanup when the route changes.
 */
export function scope(root: HTMLElement, setup: () => void): () => void {
  const ctx = gsap.context(setup, root);
  return () => ctx.revert();
}

/*
 * Einblenden beim Hineinscrollen.
 *
 * [data-reveal]        steigt einmal an seinen Platz
 * [data-reveal="wipe"] schräger Wisch wie Ultimates schräge Bildschirmwechsel
 * data-reveal-delay    Verzögerung in Sekunden, für Staffelungen
 *
 * Geschichte, damit das nicht zurückgebaut wird:
 * 1. Jedes Element bekam einen eigenen ScrollTrigger. Der misst beim Anlegen
 *    sofort das Layout, direkt nachdem `fromTo` Startwerte geschrieben hat.
 *    Startseite: 109 ms am Stück, im Frame des Seitenwechsels.
 * 2. IntersectionObserver plus `gsap.set` für die Startwerte: immer noch 59 ms,
 *    weil GSAP beim Setzen den berechneten Transform jedes Elements zurückliest.
 * 3. Jetzt: Den Startzustand setzt CSS (base.css, `:root.has-motion
 *    [data-reveal]`), die Einblendung ist eine CSS-Transition, und ein einziger
 *    globaler IntersectionObserver setzt nur `.is-revealed`. Kein Lesen, kein
 *    Schreiben aus JavaScript im kritischen Frame.
 *
 * Ein MutationObserver meldet neu eingefügte `[data-reveal]`-Elemente an. Das
 * ist wichtig, weil CSS sie sonst dauerhaft unsichtbar ließe, etwa die Combo-
 * Karten, die erst nach `loadLateGuides()` gerendert werden.
 */
let revealIO: IntersectionObserver | null = null;
const PENDING = '[data-reveal]:not(.is-revealed):not([data-reveal-watch])';

function watchReveals(scope: ParentNode): void {
  if (!revealIO) return;
  const found = scope instanceof Element && scope.matches(PENDING) ? [scope, ...scope.querySelectorAll(PENDING)] : [...scope.querySelectorAll(PENDING)];
  for (const el of found as HTMLElement[]) {
    el.setAttribute('data-reveal-watch', '');
    if (el.dataset.revealDelay) el.style.setProperty('--reveal-delay', `${parseFloat(el.dataset.revealDelay)}s`);
    revealIO.observe(el);
  }
}

/** Einmal beim Start aufrufen. Ohne Bewegung (prefers-reduced-motion) bleibt alles sofort sichtbar. */
export function initReveals(container: HTMLElement): void {
  document.documentElement.classList.toggle('has-motion', motionOK());
  if (!motionOK()) return;
  revealIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealIO?.unobserve(entry.target);
        entry.target.classList.add('is-revealed');
      }
    },
    // Entspricht dem alten ScrollTrigger-Start „top 90%“.
    { rootMargin: '0px 0px -10% 0px' },
  );
  watchReveals(document);
  new MutationObserver((records) => {
    for (const r of records) r.addedNodes.forEach((n) => n instanceof Element && watchReveals(n));
  }).observe(container, { childList: true, subtree: true });
}

/**
 * Früher pro Seite aufgerufen. Bleibt als Einstieg bestehen, damit Seiten nach
 * einem eigenen Neu-Rendern sofort anmelden können; der MutationObserver macht
 * das ohnehin. Gibt eine leere Aufräumfunktion zurück.
 */
export function reveals(root: HTMLElement): () => void {
  watchReveals(root);
  return () => {};
}

/** [data-parallax="0.2"] moves a decorative layer against the scroll. Never text. */
export function parallax(root: HTMLElement): void {
  if (!motionOK()) return;
  gsap.utils.toArray<HTMLElement | SVGElement>('[data-parallax]', root).forEach((el) => {
    const speed = parseFloat(el.getAttribute('data-parallax') ?? '0.2');
    const trigger = (el.closest('[data-parallax-scope]') as HTMLElement | null) ?? el;
    const pinnedTop = trigger.hasAttribute('data-parallax-top');
    gsap.fromTo(
      el,
      { yPercent: pinnedTop ? 0 : -speed * 50 },
      {
        yPercent: pinnedTop ? speed * 100 : speed * 50,
        ease: 'none',
        scrollTrigger: { trigger, start: pinnedTop ? 'top top' : 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

/** Layers follow the pointer at different depths. Fine pointers only. */
export function pointerDepth(area: HTMLElement, layers: Array<[Element, number]>): () => void {
  if (!motionOK() || !fineQuery.matches) return () => {};
  const movers = layers.map(([el, depth]) => ({
    depth,
    x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'expo.out' }),
    y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'expo.out' }),
  }));
  // Maße einmal beim Betreten messen statt bei jeder Mausbewegung: getBoundingClientRect erzwingt Layout.
  let rect: DOMRect | null = null;
  const onEnter = (): void => {
    rect = area.getBoundingClientRect();
  };
  const onMove = (e: PointerEvent): void => {
    const r = (rect ??= area.getBoundingClientRect());
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    movers.forEach((m) => {
      m.x(nx * m.depth);
      m.y(ny * m.depth);
    });
  };
  const onLeave = (): void => {
    rect = null;
    movers.forEach((m) => (m.x(0), m.y(0)));
  };
  // Scrollen verschiebt die Box, die gemerkten Maße stimmen dann nicht mehr.
  const invalidate = (): void => {
    rect = null;
  };
  area.addEventListener('pointerenter', onEnter);
  area.addEventListener('pointermove', onMove, { passive: true });
  area.addEventListener('pointerleave', onLeave);
  window.addEventListener('scroll', invalidate, { passive: true });
  window.addEventListener('resize', invalidate);
  return () => {
    area.removeEventListener('pointerenter', onEnter);
    area.removeEventListener('pointermove', onMove);
    area.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('scroll', invalidate);
    window.removeEventListener('resize', invalidate);
  };
}
