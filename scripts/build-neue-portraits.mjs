/**
 * Erzeugt die Bilder fuer Corrin und die drei Mii Fighter.
 *
 *   node scripts/build-neue-portraits.mjs
 *
 * Warum ein eigenes Skript neben build-fighter-images.mjs: Jenes erwartet fertig
 * zugeschnittene Gesichtsbilder von smashbros.com und codiert sie nur um. Fuer
 * Corrin und die Miis gibt es dort keine passenden Vorlagen, also muss der
 * Ausschnitt hier selbst entstehen.
 *
 * DREI DINGE, DIE BEIM ERSTEN ANLAUF SCHIEFGINGEN:
 *
 * 1. Kopfposition geraten statt gemessen. Ein fester Bruchteil der Bildbreite
 *    trifft bei einem Bild den Kopf und beim naechsten nur den Helm. Jetzt wird
 *    die Silhouette per trim() vermessen und der Kopf daraus abgeleitet.
 * 2. Die Diagonale ueber zwei mittige Renders gelegt. Beide Vorlagen zeigen die
 *    Figur in der Bildmitte, die rechte Haelfte enthaelt also nur Haare und
 *    Leerraum. Fuer eine geteilte Ansicht muessen beide Figuren erst
 *    nebeneinander gesetzt und dann getrennt werden.
 * 3. Lange Quellpfade. libvips scheitert unter Windows jenseits von 260 Zeichen
 *    mit "Input file is missing", obwohl die Datei existiert.
 *
 * Und immer: ALPHA ERHALTEN. Hinter jedem Fighter zeichnet die Seite eine
 * farbige Buehne, die durch den transparenten Hintergrund scheint.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const QUELLE = 'C:/Users/Apex/AppData/Local/Temp/bz';
const renderZiel = join(root, 'public', 'fighters', 'render');
const faceZiel = join(root, 'public', 'fighters', 'face');

const RENDER_HOEHE = 1000;
const FACE = { b: 270, h: 164 };
const durchsichtig = { r: 0, g: 0, b: 0, alpha: 0 };

/** Schneidet den transparenten Rand weg und liefert Puffer samt Massen. */
async function silhouette(pfad) {
  const puffer = await sharp(pfad).trim({ threshold: 1 }).png().toBuffer();
  const m = await sharp(puffer).metadata();
  return { puffer, breite: m.width, hoehe: m.height };
}

/**
 * Gesichtsausschnitt aus der gemessenen Silhouette.
 *
 * `kopfAnteil` ist die Hoehe des Kopfbereichs, gemessen an der Figurhoehe. Bei
 * den kurzbeinigen Miis faellt der Kopf groesser aus als bei Corrin, deshalb ist
 * der Wert je Bild einstellbar. `mitte` verschiebt den Ausschnitt waagerecht,
 * wenn die Figur den Kopf nicht ueber ihrer Mitte traegt.
 */
async function gesicht(name, quelle, kopfAnteil, mitte = 0.5) {
  const s = await silhouette(quelle);
  const hoehe = Math.round(s.hoehe * kopfAnteil);
  const breite = Math.round(hoehe * (FACE.b / FACE.h));
  const links = Math.max(0, Math.min(s.breite - breite, Math.round(s.breite * mitte - breite / 2)));

  const info = await sharp(s.puffer)
    .extract({ left: links, top: 0, width: Math.min(breite, s.breite), height: Math.min(hoehe, s.hoehe) })
    .resize(FACE.b, FACE.h, { fit: 'cover' })
    .webp({ quality: 86, alphaQuality: 90 })
    .toFile(join(faceZiel, `${name}.webp`));
  return info;
}

async function render(name, quelle) {
  const s = await silhouette(quelle);
  return sharp(s.puffer)
    .resize({ height: RENDER_HOEHE, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(join(renderZiel, `${name}.webp`));
}

/**
 * Corrin als geteilte Ansicht: links der maennliche, rechts der weibliche.
 * Beide werden zuerst freigestellt und auf gleiche Hoehe gebracht, dann
 * nebeneinander gesetzt und entlang einer Diagonalen getrennt. So bleibt von
 * jeder Figur eine ganze Haelfte stehen statt eines zufaelligen Ausschnitts.
 */
async function corrinGeteilt() {
  const hoehe = 1800;
  const m = await silhouette(`${QUELLE}/corrin_m.png`);
  const w = await silhouette(`${QUELLE}/corrin_w.png`);

  const skal = async (s) =>
    sharp(s.puffer).resize({ height: hoehe, fit: 'inside' }).png().toBuffer();
  const mBild = await skal(m);
  const wBild = await skal(w);
  const mMeta = await sharp(mBild).metadata();
  const wMeta = await sharp(wBild).metadata();

  // Leinwand breit genug fuer beide nebeneinander, mit leichter Ueberlappung.
  const ueberlappung = Math.round(Math.min(mMeta.width, wMeta.width) * 0.18);
  const breite = mMeta.width + wMeta.width - ueberlappung;
  const naht = mMeta.width - ueberlappung / 2;

  const leinwand = sharp({
    create: { width: breite, height: hoehe, channels: 4, background: durchsichtig },
  });

  // Jede Figur bekommt ihre Haelfte der Diagonalen als Maske.
  const maskeLinks = Buffer.from(
    `<svg width="${breite}" height="${hoehe}"><polygon points="0,0 ${naht + hoehe * 0.12},0 ${naht - hoehe * 0.12},${hoehe} 0,${hoehe}" fill="#fff"/></svg>`,
  );
  const maskeRechts = Buffer.from(
    `<svg width="${breite}" height="${hoehe}"><polygon points="${naht + hoehe * 0.12},0 ${breite},0 ${breite},${hoehe} ${naht - hoehe * 0.12},${hoehe}" fill="#fff"/></svg>`,
  );

  const aufLeinwand = async (bild, links) =>
    sharp({ create: { width: breite, height: hoehe, channels: 4, background: durchsichtig } })
      .composite([{ input: bild, left: links, top: 0 }])
      .png()
      .toBuffer();

  const linkeSeite = await sharp(await aufLeinwand(mBild, 0))
    .composite([{ input: maskeLinks, blend: 'dest-in' }])
    .png()
    .toBuffer();
  const rechteSeite = await sharp(await aufLeinwand(wBild, breite - wMeta.width))
    .composite([{ input: maskeRechts, blend: 'dest-in' }])
    .png()
    .toBuffer();

  return leinwand
    .composite([
      { input: linkeSeite },
      { input: rechteSeite },
    ])
    .png()
    .toBuffer();
}

await mkdir(renderZiel, { recursive: true });
await mkdir(faceZiel, { recursive: true });

const corrin = await corrinGeteilt();
await writeFile(`${QUELLE}/corrin_split.png`, corrin);

const r1 = await render('corrin', `${QUELLE}/corrin_split.png`);
// Corrin traegt den Kopf in der linken Haelfte der geteilten Ansicht.
const f1 = await gesicht('corrin', `${QUELLE}/corrin_split.png`, 0.3, 0.3);
console.log(`  corrin             render ${r1.width}x${r1.height} ${Math.round(r1.size / 1024)} KB   face ${f1.width}x${f1.height} ${Math.round(f1.size / 1024)} KB`);

// Die Miis sind stark verkuerzt gebaut, der Kopf nimmt rund ein Drittel ein.
for (const [name, anteil, mitte] of [
  ['mii_brawler', 0.34, 0.46],
  ['mii_swordfighter', 0.32, 0.5],
  ['mii_gunner', 0.34, 0.48],
]) {
  const r = await render(name, `${QUELLE}/${name}.png`);
  const f = await gesicht(name, `${QUELLE}/${name}.png`, anteil, mitte);
  console.log(`  ${name.padEnd(18)} render ${r.width}x${r.height} ${Math.round(r.size / 1024)} KB   face ${f.width}x${f.height} ${Math.round(f.size / 1024)} KB`);
}

console.log('\nFertig. Die Gesichtsausschnitte MUESSEN angesehen werden, Zahlen sagen darueber nichts.');
