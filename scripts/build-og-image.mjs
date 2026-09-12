/**
 * Baut das Social-/OG-Bild `public/og.jpg` (1200x630) aus den Assets, die ohnehin
 * im Repository liegen. Kein KI-Bild, keine fremde Vorlage: Grund, Hitze-Rampe und
 * Wortmarke kommen aus `src/styles/tokens.css`, der Stern ist `ICONS.burst` aus
 * `src/components/icons.ts`, die Fighter sind dieselben WebP-Renders wie auf der Seite.
 *
 *   node scripts/build-og-image.mjs
 *
 * Warum gebaut statt gemalt: Ändern sich Zahlen oder Farben, laufen sie hier durch
 * und das Bild bleibt zur Seite konsistent.
 *
 * Schrift: Archivo ist lokal nicht installiert (die Seite lädt sie vom Google-CDN).
 * librsvg fällt ohne Treffer auf eine Monospace zurück – deshalb steht hier bewusst
 * "Arial Black" als Wortmarken-Schrift, mit Schrägstellung per skewX, weil die
 * Navigation die Marke kursiv und extended setzt.
 */

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const render = (name) => join(root, 'public', 'fighters', 'render', `${name}.webp`);

const W = 1200;
const H = 630;

/* Tokens aus src/styles/tokens.css – bei Änderungen dort hier nachziehen. */
const VOID_950 = '#06070a';
const DMG_0 = '#f5f6f8';
const DMG_40 = '#ffe66b';
const DMG_80 = '#ffb23a';
const DMG_120 = '#ff6a2b';
const DMG_160 = '#ec2a3b';
const DMG_200 = '#b0122f';
const MIST_300 = '#aab0bd';

/**
 * Kennzahlen. Quelle ist der Datencheck (siehe HANDOFF.md), nicht eine Schätzung –
 * vor dem Neubau dort gegenprüfen, sonst behauptet die Karte etwas Veraltetes.
 * Zuletzt geprüft am 13.09.2026: 86 Profile, 694 Routen, 194 Kill-Confirms.
 */
const STATS = [
  { wert: '86', label: 'Profile', farbe: DMG_0 },
  { wert: '694', label: 'Combo-Routen', farbe: DMG_80 },
  { wert: '194', label: 'Kill-Confirms', farbe: DMG_120 },
];

/**
 * Drei Fighter aus der Spitze der UltRank-Liste #4. Steve (Rang 1) liegt vorn und
 * steht vollständig im Bild, Sonic (Rang 2) und R.O.B. (Rang 5) staffeln sich dahinter.
 *
 * Wer hier tauscht, muss zwei Dinge prüfen: Die Breite bei gewählter Höhe
 * (x + Breite darf 1200 nicht überschreiten, sonst wird der Fighter angeschnitten),
 * und ob die Silhouette auf dunklem Grund überhaupt lesbar ist – Mr. Game & Watch
 * (Rang 4) ist eine schwarze Fläche und verschwindet, Snake (Rang 3) liegt zu nah daran.
 * Min Min (Rang 6) fiel raus, weil ihr ARMS-Ring weit nach links oben ragt und in
 * die Textspalte schneidet.
 *
 * Reihenfolge = Zeichenreihenfolge, das letzte Element liegt oben. Alle stehen auf
 * der Unterkante (y = 630 − Höhe).
 */
const FIGHTER = [
  { datei: 'sonic', hoehe: 490, x: 672 }, // Rang 2 – 808x1000, also 396 breit
  { datei: 'steve', hoehe: 540, x: 800 }, // Rang 1 – 733x1000, also 396 breit
];

const BURST = 'M12 1.5 13.9 8.6 21 6 15.8 12 21.8 16.5 14.3 15 12 22.5 9.9 15 2.2 17.3 7.4 12 3 6 9.9 8.6z';

/** Grund: Schwarz, ein warmer Schein hinter den Fightern, sonst nichts. */
const grund = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="schein" cx="0.74" cy="0.8" r="0.6">
      <stop offset="0" stop-color="${DMG_120}" stop-opacity="0.34"/>
      <stop offset="0.55" stop-color="${DMG_200}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${VOID_950}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${VOID_950}"/>
  <rect width="${W}" height="${H}" fill="url(#schein)"/>
</svg>`;

const statX = 72;
const statAbstand = 200;

/**
 * Vordergrund: Erst ein Schleier von links, damit die Typografie auf jedem Render
 * lesbar bleibt, dann Marke, Zeile, Kennzahlen und unten die Hitze-Rampe.
 * Die Rampe ist kein Zierstreifen, sondern dasselbe Weiß→Gelb→Orange→Rot, mit dem
 * die Seite Prozentschaden und Tiers einfärbt.
 */
const vordergrund = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="schleier" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${VOID_950}" stop-opacity="1"/>
      <stop offset="0.40" stop-color="${VOID_950}" stop-opacity="0.98"/>
      <stop offset="0.55" stop-color="${VOID_950}" stop-opacity="0.78"/>
      <stop offset="0.74" stop-color="${VOID_950}" stop-opacity="0.26"/>
      <stop offset="1" stop-color="${VOID_950}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="rampe" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${DMG_0}"/>
      <stop offset="0.28" stop-color="${DMG_40}"/>
      <stop offset="0.52" stop-color="${DMG_80}"/>
      <stop offset="0.76" stop-color="${DMG_120}"/>
      <stop offset="0.92" stop-color="${DMG_160}"/>
      <stop offset="1" stop-color="${DMG_200}"/>
    </linearGradient>
    <filter id="glut" x="-70%" y="-70%" width="240%" height="240%">
      <feGaussianBlur stdDeviation="9" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#schleier)"/>

  <g transform="translate(72 76) scale(2.4)" fill="${DMG_120}" filter="url(#glut)">
    <path d="${BURST}"/>
  </g>

  <g transform="translate(146 76)">
    <g transform="skewX(-9)">
      <text x="0" y="46" font-family="Arial Black, Segoe UI Black, sans-serif"
            font-size="58" letter-spacing="-1" fill="${DMG_0}">Blastzone</text>
    </g>
  </g>

  <text x="72" y="212" font-family="Segoe UI, sans-serif" font-weight="600"
        font-size="28" fill="${MIST_300}">Competitive Hub f&#252;r Super Smash Bros. Ultimate</text>

  <text x="72" y="306" font-family="Arial Black, Segoe UI Black, sans-serif"
        font-size="46" letter-spacing="-1.2" fill="${DMG_0}">Jede Combo-Route</text>
  <text x="72" y="366" font-family="Arial Black, Segoe UI Black, sans-serif"
        font-size="46" letter-spacing="-1.2" fill="${DMG_120}">mit Quelle belegt.</text>

  ${STATS.map((s, i) => {
    const x = statX + i * statAbstand;
    const linie =
      i > 0
        ? `<rect x="${x - 34}" y="468" width="1.5" height="88" fill="rgb(255 255 255 / 0.16)"/>`
        : '';
    return `${linie}
  <text x="${x}" y="512" font-family="Arial Black, Segoe UI Black, sans-serif"
        font-size="52" letter-spacing="-1.5" fill="${s.farbe}">${s.wert}</text>
  <text x="${x}" y="546" font-family="Segoe UI, sans-serif" font-weight="600"
        font-size="20" letter-spacing="0.6" fill="${MIST_300}">${s.label}</text>`;
  }).join('\n')}

  <rect x="0" y="${H - 7}" width="${W}" height="7" fill="url(#rampe)"/>
</svg>`;

const fighterEbenen = await Promise.all(
  FIGHTER.map(async (f) => ({
    input: await sharp(render(f.datei)).resize({ height: f.hoehe }).png().toBuffer(),
    left: f.x,
    top: H - f.hoehe,
  })),
);

const ziel = join(root, 'public', 'og.jpg');

const info = await sharp(Buffer.from(grund))
  .composite([...fighterEbenen, { input: Buffer.from(vordergrund), left: 0, top: 0 }])
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
  .toFile(ziel);

console.log(`public/og.jpg – ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
