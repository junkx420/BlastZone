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

/**
 * [data-reveal]        rise into place once
 * [data-reveal="wipe"] slanted wipe, echoing Ultimate's angled screen transitions
 */
export function reveals(root: HTMLElement): void {
  if (!motionOK()) return;
  gsap.utils.toArray<HTMLElement>('[data-reveal]', root).forEach((el) => {
    const wipe = el.dataset.reveal === 'wipe';
    const delay = parseFloat(el.dataset.revealDelay ?? '0');
    if (wipe) {
      gsap.fromTo(
        el,
        { clipPath: 'polygon(0% 0%, 0% 0%, -14% 100%, -14% 100%)' },
        {
          clipPath: 'polygon(0% 0%, 114% 0%, 100% 100%, -14% 100%)',
          duration: 1.05,
          delay,
          ease: 'expo.out',
          clearProps: 'clipPath',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        },
      );
    } else {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.9, delay, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } },
      );
    }
  });
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
  const onMove = (e: PointerEvent): void => {
    const r = area.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    movers.forEach((m) => {
      m.x(nx * m.depth);
      m.y(ny * m.depth);
    });
  };
  const onLeave = (): void => movers.forEach((m) => (m.x(0), m.y(0)));
  area.addEventListener('pointermove', onMove);
  area.addEventListener('pointerleave', onLeave);
  return () => {
    area.removeEventListener('pointermove', onMove);
    area.removeEventListener('pointerleave', onLeave);
  };
}
