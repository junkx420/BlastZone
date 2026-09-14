import { FIGHTERS } from '../data/fighters';
import { html, raw, type Markup } from '../lib/dom';

/**
 * Kleine Franchise-Symbole, eins pro Serie im Roster (40 Stück).
 *
 * Eigene, vereinfachte Zeichen in einer Farbe, keine nachgezeichneten Logos.
 * Sie sollen auf 14 bis 18 px sofort erkennbar sein, deshalb jeweils das eine
 * Motiv, das jeder aus der Serie kennt: Triforce, Pokéball, Pilz, Ring.
 *
 * Alle Zeichen stehen auf einem 24er-Raster und füllen mit `currentColor`, die
 * Farbe kommt also immer vom Einsatzort. Löcher entstehen über
 * `fill-rule="evenodd"` innerhalb eines Pfades.
 *
 * Eine Serie ohne Eintrag liefert leeres Markup statt eines Platzhalters. Wer
 * einen neuen Fighter mit neuer Serie ergänzt, sieht das an der fehlenden
 * Kachelecke, und im Dev-Modus steht eine Warnung in der Konsole.
 */

const eo = (d: string): string => `<path fill-rule="evenodd" d="${d}"/>`;
const p = (d: string): string => `<path d="${d}"/>`;
const kreis = (cx: number, cy: number, r: number): string => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0z`;

const GLYPHEN: Record<string, string> = {
  'Super Mario': eo(
    `M12 3C7 3 3.5 6.5 3.5 11c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2 0-4.5-3.5-8-8.5-8z${kreis(12, 7, 2)}${kreis(7.2, 10, 1.4)}${kreis(16.8, 10, 1.4)}`,
  ) + p('M8.5 14h7v4.5a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5z'),
  'Donkey Kong': eo(
    'M6 3h12c1.5 2.5 2 5.5 2 9s-.5 6.5-2 9H6c-1.5-2.5-2-5.5-2-9s.5-6.5 2-9zM5.2 8h13.6v1.6H5.2zM5.2 14.4h13.6V16H5.2z',
  ),
  'The Legend of Zelda': p('M12 3l4.5 8h-9zM7.5 11 12 19H3zM16.5 11 21 19h-9z'),
  Metroid:
    eo(
      `M12 3C7 3 3.5 6.5 3.5 11.5 3.5 12.9 4.6 14 6 14h12c1.4 0 2.5-1.1 2.5-2.5C20.5 6.5 17 3 12 3z${kreis(8.5, 9.4, 1.6)}${kreis(12, 7.2, 1.6)}${kreis(15.5, 9.4, 1.6)}`,
    ) + p('M7 14.5 8.5 21l1.5-6.5zM14 14.5l1.5 6.5 1.5-6.5z'),
  Yoshi: eo(`M12 2.5c-4 0-7 6.5-7 11.2a7 7 0 0 0 14 0C19 9 16 2.5 12 2.5z${kreis(9, 10.5, 1.8)}${kreis(14.6, 8.4, 1.4)}${kreis(14, 15.4, 2)}`),
  Kirby: p('M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z'),
  'Star Fox': p('M12 2l2.2 9 7.8 5.5-.8 1.5-7.5-2.3L12 21l-1.7-5.3L2.8 18 2 16.5 9.8 11z'),
  Pokémon:
    p('M3.05 11A9 9 0 0 1 20.95 11h-5.2a3.9 3.9 0 0 0-7.5 0zM3.05 13h5.2a3.9 3.9 0 0 0 7.5 0h5.2A9 9 0 0 1 3.05 13z') +
    p(kreis(12, 12, 2.2)),
  EarthBound: p('M4 14.5C4 9.3 7.6 5.5 12.3 5.5S20.5 9.3 20.5 14.5z') + p('M2 15.5h14c1.4 0 1.4 2.5 0 2.5H3.2C1.9 18 1.3 16.6 2 15.5z'),
  'Ice Climber': eo('M2 20 9 7l3.2 5.2L15 8l7 12zM9 7.4l2.1 3.8-1.1-.6-1 1.2-1-1.2-1.1.6z'),
  'Fire Emblem': p('M11 2h2l.6 12h-3.2zM7 14h10v2H7zM11 16h2v3.4h-2z') + p(kreis(12, 20.6, 1.4)),
  'Game & Watch': eo(
    `M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM7.5 8h9v8h-9zM3.8 11.2h1v-1h1v1h1v1.6h-1v1h-1v-1h-1z${kreis(19, 10.8, 0.9)}${kreis(19, 13.4, 0.9)}`,
  ),
  'Kid Icarus': p(
    'M3 6c4 0 7 1.5 9 4.5V20c-2-3-5-4.5-9-4.5 1.5-1 2.3-2 2.5-3.3C4 12 3 11 3 9.6 4.3 9.4 5 9 5.4 8.3 4 8 3.2 7.2 3 6zM21 6c-4 0-7 1.5-9 4.5V20c2-3 5-4.5 9-4.5-1.5-1-2.3-2-2.5-3.3 1.5-.2 2.5-1.2 2.5-2.6-1.3-.2-2-.6-2.4-1.3C20 8 20.8 7.2 21 6z',
  ),
  Wario: p('M2.5 4h3.6l2.2 10 2.4-8h2.6l2.4 8 2.2-10h3.6l-4 16h-3.3L12 12.5 9.8 20H6.5z'),
  'Metal Gear': p('M10.2 3h3.6l-.7 12h-2.2z') + p(kreis(12, 19, 2)),
  'Sonic the Hedgehog': eo(`${kreis(12, 12, 9)}${kreis(12, 12, 5.8)}`),
  Pikmin:
    p('M11.4 6h1.2v6h-1.2zM12 6.2C11 3.5 12.5 1.8 15.5 2c.6 2.8-1 4.4-3.5 4.2z') +
    eo(`M12 11.5c2.5 0 4.5 2.2 4.5 5s-2 5-4.5 5-4.5-2.2-4.5-5 2-5 4.5-5z${kreis(10.3, 16, 0.9)}${kreis(13.7, 16, 0.9)}`),
  'R.O.B.': eo('M5 5h14v9H5zM7 8h10v3.2H7z') + p('M10.5 14h3v3h-3zM6 17h12v3H6z'),
  'Animal Crossing': eo(
    'M20 3.5C11.5 3.5 5 8 5 14.5c0 1.6.4 3 1.2 4.1l-2.5 2.5 1.2 1.2 2.5-2.5c1.1.8 2.5 1.2 4.1 1.2 6.5 0 11-6 11-14.5 0-1.1-.2-2.3-.5-3zM7.6 16.8l8.6-8.6.7.7-8.6 8.6z',
  ),
  'Mega Man': eo(
    'M12 3c-4.7 0-8 3.6-8 8.5V18c0 1.1.9 2 2 2h2.5v-5c0-1.7 1.6-3 3.5-3s3.5 1.3 3.5 3v5H18c1.1 0 2-.9 2-2v-6.5C20 6.6 16.7 3 12 3zM11 4.2h2V9h-2z',
  ),
  'Wii Fit': p(kreis(12, 4.5, 2)) + p('M6 3.5l5 5.5h2l5-5.5 1.1 1-5.6 6.5-.1 10.5h-2.8L10.5 11 4.9 4.5z'),
  'Punch-Out!!':
    eo(
      'M12 2c4.4 0 8 3.1 8 7.5 0 3.6-2.4 6.5-5.8 7.5H8.5C6 17 4 15 4 12.5c0-1.9 1.2-3.5 3-4.2C7.5 4.6 9.5 2 12 2zM6.8 12.3c1.6.3 3.2-.2 4.3-1.4l.9.8c-1.4 1.5-3.4 2.1-5.4 1.7z',
    ) + eo('M7 17.8h10V22H7zM9 19.4h6v1H9z'),
  Mii: p(kreis(12, 7, 4)) + p('M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z'),
  'Pac-Man': eo(`M12 12l8.2-4.75A9.5 9.5 0 1 0 20.2 16.75z${kreis(11.5, 7, 1.3)}`),
  'Xenoblade Chronicles':
    eo('M10 2h4l1 8.5h-6zM11.6 3.6h.8l.3 5.4h-1.4z') + eo(`${kreis(12, 14, 4)}${kreis(12, 14, 2.1)}`) + p('M11 18h2v4h-2z'),
  'Duck Hunt':
    eo(`${kreis(12, 12, 8)}${kreis(12, 12, 6)}`) +
    p(`M11.2 1.5h1.6v6h-1.6zM11.2 16.5h1.6v6h-1.6zM1.5 11.2h6v1.6h-6zM16.5 11.2h6v1.6h-6z${kreis(12, 12, 1)}`),
  'Street Fighter': p(kreis(15, 12, 5)) + p('M2 12c3-3 5-4 8-4.5l-1.5 2.2L11 12l-2.5 2.3L10 16.5c-3-.5-5-1.5-8-4.5z'),
  'Final Fantasy': eo('M12 2l5 8-5 12-5-12zM11.2 6.5 9 10h2.2z'),
  Bayonetta: p(
    'M12 8c1.7-3 4.8-5 8-5 .8 3.3-.3 7-3.3 8.8 2.4.6 3.6 2.8 3 5-1.5 2-5.2 1.9-7.7-2.5L12 20l-.1-5.7c-2.5 4.4-6.2 4.5-7.7 2.5-.6-2.2.6-4.4 3-5C4.3 10 3.2 6.3 4 3c3.2 0 6.3 2 8 5z',
  ),
  Splatoon:
    p(
      'M12 4c1.3 0 2 1.2 2.2 2.5.9-1 2.4-1.2 3.2-.3.9.9.5 2.3-.4 3.1 1.4.1 2.5 1 2.5 2.3 0 1.4-1.2 2.2-2.6 2.2 1 .9 1.2 2.4.3 3.3-.9.9-2.4.6-3.2-.4-.1 1.4-1 2.8-2 2.8s-1.9-1.4-2-2.8c-.8 1-2.3 1.3-3.2.4-.9-.9-.7-2.4.3-3.3-1.4 0-2.6-.8-2.6-2.2 0-1.3 1.1-2.2 2.5-2.3-.9-.8-1.3-2.2-.4-3.1.8-.9 2.3-.7 3.2.3C10 5.2 10.7 4 12 4z',
    ) + p(`${kreis(3.8, 19.5, 1.2)}${kreis(20.3, 4.3, 1)}`),
  Castlevania: p(
    'M12 9.5l1.6-2.7.6 2.4C16 7.7 18.8 7.2 22 8.2c-1.7 1-2.1 2.4-1.9 4-1.2-1-3-1-4.3.2-.3 1.9-1.6 3.5-3.8 4.6-2.2-1.1-3.5-2.7-3.8-4.6-1.3-1.2-3.1-1.2-4.3-.2.2-1.6-.2-3-1.9-4 3.2-1 6-.5 7.8 1l.6-2.4z',
  ),
  Persona: eo(
    'M2 9c3-2 6.5-2 10-.5 3.5-1.5 7-1.5 10 .5-.3 4-3 7-6.5 7-1.6 0-2.6-.8-3.5-2-.9 1.2-1.9 2-3.5 2C5 16 2.3 13 2 9zM5.5 10.5c1 1.4 2.4 2 4 1.6-.4-1.6-2.1-2.3-4-1.6zM18.5 10.5c-1 1.4-2.4 2-4 1.6.4-1.6 2.1-2.3 4-1.6z',
  ),
  'Dragon Quest': eo(
    `M12 2.5c.4 2.3 2.1 3.6 4.1 5.2C19.2 10.1 21 12.4 21 15.3c0 3.5-3.6 5.7-9 5.7s-9-2.2-9-5.7c0-2.9 1.8-5.2 4.9-7.6 2-1.6 3.7-2.9 4.1-5.2z${kreis(9.3, 14, 1.1)}${kreis(14.7, 14, 1.1)}M9.5 16.8c1.5 1.3 3.5 1.3 5 0l.4.7c-1.8 1.6-4 1.6-5.8 0z`,
  ),
  'Banjo-Kazooie': p(
    'M5 7h4c-.6-.8-1-1.6-1-2.5C8 3.1 9.3 2 11 2s3 1.1 3 2.5c0 .9-.4 1.7-1 2.5h4v4c.8-.6 1.6-1 2.5-1 1.4 0 2.5 1.3 2.5 3s-1.1 3-2.5 3c-.9 0-1.7-.4-2.5-1v4H5z',
  ),
  'Fatal Fury': p('M3 19.5h18V21H3zM12 3l1.6 5.3 3.2-2.6-.9 5.1 4.1-.9-3.2 4.1 2.2 3.9H5l2.2-3.9L4 12.9l4.1.9-.9-5.1 3.2 2.6z'),
  ARMS:
    '<path d="M2 12l2.5-3.5 2.5 7 2.5-7 2.5 7 2-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
    p(kreis(18.5, 12, 3.8)),
  Minecraft: eo('M12 2l9 5v10l-9 5-9-5V7zM12 4.2 18.7 8 12 11.8 5.3 8zM11.4 12.3h1.2v8.1l-.6.3-.6-.3z'),
  Tekken: p('M14 2 5 13h6l-2 9 10-12h-6l2-8z'),
  'Kingdom Hearts': p(
    'M12 20.5l-1.3-1.2C5.6 14.8 2.5 12 2.5 8.5 2.5 5.7 4.7 3.5 7.5 3.5c1.7 0 3.3.8 4.5 2.1 1.2-1.3 2.8-2.1 4.5-2.1 2.8 0 5 2.2 5 5 0 3.5-3.1 6.3-8.2 10.8z',
  ),
  'F-Zero': p('M2 9c3.5-.2 6.3.8 8.6 3l1.4 1 1.4-1c2.3-2.2 5.1-3.2 8.6-3-2.8 1.2-5 3.1-6.5 5.7L12 21l-3.5-6.3C7 12.1 4.8 10.2 2 9z') + p(kreis(12, 6, 2.4)),
};

/** Das Symbol einer Serie, rein dekorativ. Die Beschriftung liefert der Einsatzort. */
export function franchiseGlyph(series: string): Markup {
  const body = GLYPHEN[series];
  if (!body) return html``;
  return raw(`<svg class="icon franchise-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${body}</svg>`);
}

if (import.meta.env.DEV) {
  const fehlend = [...new Set(FIGHTERS.map((f) => f.series))].filter((s) => !(s in GLYPHEN));
  if (fehlend.length) console.warn('Franchise-Symbole fehlen für:', fehlend);
}
