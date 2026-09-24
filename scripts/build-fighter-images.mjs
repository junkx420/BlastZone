/**
 * Turns the downloaded smashbros.com artwork into the files the site ships.
 *
 *   node scripts/build-fighter-images.mjs <quellordner> <zielordner> <render|thumb>
 *
 * Renders arrive as PNGs of up to 4 MB, which is far more than the page ever displays.
 * They are scaled to display height and written as WebP; the face crops keep their
 * 270×164 size and are only re-encoded. Alpha is preserved – the transparent background
 * is what lets the generated stage show through behind each fighter.
 */
import { mkdir, readdir, stat } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const [, , quelle, ziel, modus = 'render'] = process.argv;

if (!quelle || !ziel) {
  console.error('Aufruf: node scripts/build-fighter-images.mjs <quelle> <ziel> <render|thumb>');
  process.exit(1);
}

/** Renders are displayed at roughly viewport height; 1000 px covers every layout with room to spare. */
const MAX_HOEHE = modus === 'render' ? 1000 : 164;
const QUALITAET = modus === 'render' ? 82 : 86;

const mb = (bytes) => Math.round((bytes / 1024 / 1024) * 100) / 100;

await mkdir(ziel, { recursive: true });

const dateien = (await readdir(quelle)).filter((f) => extname(f).toLowerCase() === '.png');
if (dateien.length === 0) {
  console.error(`Keine PNG-Dateien in ${quelle}`);
  process.exit(1);
}

let vorher = 0;
let nachher = 0;
let groesste = { name: '', bytes: 0 };

for (const datei of dateien) {
  const eingang = join(quelle, datei);
  const ausgang = join(ziel, `${basename(datei, '.png')}.webp`);

  vorher += (await stat(eingang)).size;

  await sharp(eingang)
    .resize({ height: MAX_HOEHE, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITAET, effort: 5, alphaQuality: 90 })
    .toFile(ausgang);

  const groesse = (await stat(ausgang)).size;
  nachher += groesse;
  if (groesse > groesste.bytes) groesste = { name: basename(ausgang), bytes: groesse };
}

console.log(`${modus}: ${dateien.length} Dateien`);
console.log(`  vorher:  ${mb(vorher)} MB`);
console.log(`  nachher: ${mb(nachher)} MB (${Math.round((1 - nachher / vorher) * 100)} % kleiner)`);
console.log(`  groesste: ${groesste.name} mit ${Math.round(groesste.bytes / 1024)} KB`);
