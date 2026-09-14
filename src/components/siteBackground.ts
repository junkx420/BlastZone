import { motionOK } from '../lib/motion';

/**
 * Bewegung für das Stage-Raster hinter der Seite (`.sitebg`, Styles in layout.css).
 *
 * Mit Maus: Das Raster folgt dem Zeiger leicht (Parallaxe, höchstens 14 px) und
 * leuchtet in einem Kreis um ihn herum auf. Ohne Maus (Touch): Es läuft beim
 * Scrollen mit einem Viertel der Geschwindigkeit mit.
 *
 * Wichtig gegen Flimmern: Jede Verschiebung wird auf ganze Pixel gerundet, und
 * die rAF-Schleife läuft nur, solange sich etwas bewegt. Steht die Maus, steht
 * das Raster. Bei „Bewegung reduzieren“ passiert gar nichts, das Raster bleibt statisch.
 */
export function initSiteBackground(root: HTMLElement): void {
  const bg = root.querySelector<HTMLElement>('.sitebg');
  if (!bg || !motionOK()) return;

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const TILE = 112;
  const RANGE = 14;

  let target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let raf = 0;
  let lastWritten = '';

  const write = (gx: number, gy: number): void => {
    const key = `${gx}|${gy}`;
    if (key === lastWritten) return;
    lastWritten = key;
    bg.style.setProperty('--gx', `${gx}px`);
    bg.style.setProperty('--gy', `${gy}px`);
  };

  const tick = (): void => {
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;
    write(Math.round(current.x), Math.round(current.y));
    if (Math.abs(target.x - current.x) > 0.3 || Math.abs(target.y - current.y) > 0.3) raf = requestAnimationFrame(tick);
    else raf = 0;
  };
  const kick = (): void => {
    if (!raf) raf = requestAnimationFrame(tick);
  };

  /* ── Maus ─────────────────────────────────────────────────────────────── */
  const onMove = (e: PointerEvent): void => {
    if (e.pointerType !== 'mouse') return;
    bg.style.setProperty('--mx', `${Math.round(e.clientX)}px`);
    bg.style.setProperty('--my', `${Math.round(e.clientY)}px`);
    bg.classList.add('is-lit');
    target = {
      x: (e.clientX / window.innerWidth - 0.5) * -RANGE * 2,
      y: (e.clientY / window.innerHeight - 0.5) * -RANGE * 2,
    };
    kick();
  };
  const onLeave = (): void => {
    bg.classList.remove('is-lit');
    target = { x: 0, y: 0 };
    kick();
  };

  /* ── Touch: Scroll-Parallaxe ──────────────────────────────────────────── */
  const onScroll = (): void => {
    // Modulo einer Hauptzelle: Das Raster sieht danach identisch aus, die Zahl bleibt klein.
    write(0, -Math.round((window.scrollY * 0.25) % TILE));
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
