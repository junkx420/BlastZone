import type { Fighter } from '../data/types';
import { html, type Markup } from '../lib/dom';
import { hash, random } from './sigil';

/**
 * Ganzseitiger Hintergrund einer Fighter-Seite.
 *
 * Individuell pro Fighter, ohne ein einziges zusätzliches Bild. Die Alternative
 * wären 86 Hintergrundbilder gewesen, bei 30 bis 200 KB pro Stück.
 *
 * Drei Zutaten, alle aus vorhandenen Daten:
 *
 * 1. Die beiden Fighter-Farben. Sie liegen als `--accent` und `--accent-2`
 *    ohnehin am Seitenwurzelelement, gesetzt von `accentVars()`.
 * 2. Die Anordnung aus dem slug-gesäten Zufall. Es ist dieselbe Folge wie beim
 *    Sigil, damit ein Fighter auf jeder erzeugten Fläche dieselbe Handschrift
 *    hat, und sie ist deterministisch: Beim Seitenwechsel springt nichts um.
 * 3. Das Muster nach Archetyp, acht Sorten. Die Auswahl steckt im
 *    `data-muster`-Attribut, die Muster selbst in `fighter.css`.
 *
 * Die Werte gehen als Custom Properties raus statt als fertige Farben, damit
 * die CSS entscheidet, wie stark daraus aufgetragen wird. Wie stark insgesamt,
 * steht an einer einzigen Stelle: `--fbg-kraft`.
 */
export function fighterBackdrop(f: Fighter): Markup {
  const rnd = random(hash(f.slug));

  // Zwei Farbkerne, einer im oberen Drittel, einer weiter unten. Sonst sammelt
  // sich bei manchen Fightern alles an derselben Stelle und der Rest bleibt leer.
  const x1 = Math.round(8 + rnd() * 38);
  const y1 = Math.round(16 + rnd() * 24);
  const x2 = Math.round(54 + rnd() * 38);
  const y2 = Math.round(54 + rnd() * 30);

  const werte = [
    `--fbg-x1:${x1}%`,
    `--fbg-y1:${y1}%`,
    `--fbg-x2:${x2}%`,
    `--fbg-y2:${y2}%`,
    `--fbg-winkel:${Math.round(-38 + rnd() * 76)}deg`,
    `--fbg-takt:${Math.round(24 + rnd() * 26)}px`,
    `--fbg-drift:${Math.round(rnd() * 60)}px`,
  ].join(';');

  return html`<div class="fbg" data-muster="${f.archetype}" style="${werte}" aria-hidden="true"></div>`;
}
