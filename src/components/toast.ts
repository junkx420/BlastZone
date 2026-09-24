import { html, mount } from '../lib/dom';
import { ICONS } from './icons';

/**
 * Kurze Bestätigung unten mittig („Angemeldet als …“, „Link kopiert“).
 *
 * Eine einzige Live-Region für die ganze Seite, angelegt beim ersten Aufruf. Neue
 * Meldungen ersetzen die alte, statt sich zu stapeln. Verschwindet nach 4 Sekunden,
 * bleibt aber stehen, solange die Maus darauf liegt oder sie den Fokus hat.
 * Nur für Bestätigungen: Fehler gehören an die Stelle, an der sie passiert sind.
 */

let region: HTMLElement | null = null;
let timer = 0;

export function showToast(message: string): void {
  if (!region) {
    region = document.createElement('div');
    region.className = 'toast';
    region.setAttribute('role', 'status');
    region.setAttribute('aria-live', 'polite');
    document.body.append(region);
    const hold = (): void => window.clearTimeout(timer);
    const release = (): void => schedule();
    region.addEventListener('pointerenter', hold);
    region.addEventListener('pointerleave', release);
    region.addEventListener('focusin', hold);
    region.addEventListener('focusout', release);
  }
  const el = region;
  el.classList.remove('is-visible');
  mount(el, html`<span class="toast__body">${ICONS.check}<span>${message}</span></span>`);
  // Neu auslösen, damit die Einblendung auch bei direkt aufeinanderfolgenden Meldungen läuft.
  void el.offsetWidth;
  el.classList.add('is-visible');
  schedule();
}

function schedule(): void {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => region?.classList.remove('is-visible'), 4000);
}
