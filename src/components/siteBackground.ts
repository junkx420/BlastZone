import { motionOK } from '../lib/motion';

/**
 * Bewegung für das Stage-Raster hinter der Seite (`.sitebg`, Styles in layout.css).
 *
 * Mit Maus: Das Raster folgt dem Zeiger leicht (Parallaxe, höchstens 14 px), und
 * ein Lichtkegel um den Zeiger lässt die Linien dort aufleuchten. Ohne Maus
 * (Touch): Das Raster läuft beim Scrollen mit einem Viertel der Geschwindigkeit mit.
 *
 * Performance:
 * - Alles läuft in einer einzigen rAF-Schleife, die nur aktiv ist, solange sich
 *   etwas bewegt. Mausereignisse (bis 1000 pro Sekunde bei Gaming-Mäusen)
 *   schreiben nur Zahlen, gezeichnet wird höchstens einmal pro Frame.
 * - Das Raster bewegt sich per `transform`, auf ganze Pixel gerundet, damit die
 *   1-px-Linien nicht zwischen zwei Pixeln flimmern.
 * - Der Lichtkegel ist ein kleines Element (640 px), das per `transform` wandert.
 *   Neu gemalt wird nur seine eigene Fläche, nicht der ganze Bildschirm.
 * Bei „Bewegung reduzieren“ bleibt das Raster statisch.
 */
export function initSiteBackground(root: HTMLElement): void {
  const bg = root.querySelector<HTMLElement>('.sitebg');
  const grid = bg?.querySelector<HTMLElement>('.sitebg__grid');
  const lit = bg?.querySelector<HTMLElement>('.sitebg__lit');
  if (!bg || !grid || !lit || !motionOK()) return;

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const TILE = 112;
  const RANGE = 14;
  const SPOT = 320;

  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const mouse = { x: -9999, y: -9999, dirty: false };
  let raf = 0;
  let written = { gx: NaN, gy: NaN, mx: NaN, my: NaN };

  const paint = (gx: number, gy: number): void => {
    if (gx !== written.gx || gy !== written.gy) {
      grid.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    }
    const mx = Math.round(mouse.x);
    const my = Math.round(mouse.y);
    if (mx !== written.mx || my !== written.my || gx !== written.gx || gy !== written.gy) {
      lit.style.transform = `translate3d(${mx - SPOT}px, ${my - SPOT}px, 0)`;
      // Das Licht-Raster bleibt deckungsgleich mit dem Grundraster, egal wo der Kegel steht.
      lit.style.backgroundPosition = `${SPOT - mx + gx}px ${SPOT - my + gy}px`;
    }
    written = { gx, gy, mx, my };
  };

  const tick = (): void => {
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;
    paint(Math.round(current.x), Math.round(current.y));
    mouse.dirty = false;
    const moving = Math.abs(target.x - current.x) > 0.3 || Math.abs(target.y - current.y) > 0.3;
    raf = moving ? requestAnimationFrame(tick) : 0;
  };
  const kick = (): void => {
    if (!raf) raf = requestAnimationFrame(tick);
  };

  /* ── Maus ─────────────────────────────────────────────────────────────── */
  const onMove = (e: PointerEvent): void => {
    if (e.pointerType !== 'mouse') return;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.dirty = true;
    if (!bg.classList.contains('is-lit')) bg.classList.add('is-lit');
    target.x = (e.clientX / window.innerWidth - 0.5) * -RANGE * 2;
    target.y = (e.clientY / window.innerHeight - 0.5) * -RANGE * 2;
    kick();
  };
  const onLeave = (): void => {
    bg.classList.remove('is-lit');
    target.x = 0;
    target.y = 0;
    kick();
  };

  /* ── Touch: Scroll-Parallaxe ──────────────────────────────────────────── */
  let scrollQueued = false;
  const onScroll = (): void => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      scrollQueued = false;
      // Modulo einer Hauptzelle: Das Raster sieht danach identisch aus, die Zahl bleibt klein.
      grid.style.transform = `translate3d(0, ${-Math.round((window.scrollY * 0.25) % TILE)}px, 0)`;
    });
  };

  const apply = (): void => {
    window.removeEventListener('pointermove', onMove);
    document.documentElement.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('scroll', onScroll);
    if (fine.matches) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
    } else {
      bg.classList.remove('is-lit');
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  };

  fine.addEventListener('change', apply);
  apply();
}
