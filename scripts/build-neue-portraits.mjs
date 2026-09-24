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
 *    trifft bei einem Bild den Kopf und beim naechsten nur den Helm. Die Figur
 *    wird deshalb per trim() freigestellt und der Kopf im obersten Band ihrer
 *    Alphamaske gesucht, als dichtester Streifen. Dass es der dichteste sein
 *    muss und nicht der Schwerpunkt, hat zwei Fehlversuche gekostet; sie stehen
 *    bei `kopfAusschnitt`.
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

/**
 * Misst, wo der Kopf einer freigestellten Figur waagerecht sitzt.
 *
 * Ein Wert von Hand je Bild trifft mal das Gesicht und mal den Helm, deshalb
 * liest diese Fassung die Alphamaske: In den obersten Zeilen der Figur steht
 * praktisch nur der Kopf.
 *
 * Die Falle ist das Haar. Corrins weibliche Variante traegt es weit nach rechts
 * geweht, und die blosse Mitte aus linkem und rechtem Rand schoebe den
 * Ausschnitt damit vom Gesicht weg. Deshalb zaehlt hier der Schwerpunkt der
 * Deckung statt der Mitte: Der Schaedel ist massiv, wehendes Haar ist duenn und
 * zieht kaum. Beide Werte werden zurueckgegeben, damit ein Fehlgriff im Log zu
 * sehen ist, statt nur im fertigen Bild.
 */
async function kopfMitte(puffer, kopfAnteil) {
  const m = await sharp(puffer).metadata();
  const { data, info } = await sharp(puffer)
    .extract({ left: 0, top: 0, width: m.width, height: Math.round(m.height * kopfAnteil) })
    .resize({ width: 300 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const spalten = new Float64Array(info.width);
  let masse = 0;
  let summe = 0;
  let links = -1;
  let rechts = -1;
  for (let x = 0; x < info.width; x++) {
    let spalte = 0;
    for (let y = 0; y < info.height; y++) spalte += data[(y * info.width + x) * info.channels + 3];
    spalten[x] = spalte;
    if (spalte > 0) {
      if (links < 0) links = x;
      rechts = x;
    }
    masse += spalte;
    summe += spalte * x;
  }

  /*
   * Der dichteste Streifen von Kopfbreite. Seine Breite muss nicht geraten
   * werden: Ein Kopf ist ungefaehr so breit wie hoch, und das Band ist eine
   * Kopfhoehe hoch, also ist die eigene Hoehe des Bandes das Mass.
   */
  const fenster = Math.max(4, Math.min(info.width, info.height));
  let bestesX = 0;
  let bestes = -1;
  let laufend = 0;
  for (let x = 0; x < info.width; x++) {
    laufend += spalten[x];
    if (x >= fenster) laufend -= spalten[x - fenster];
    if (x >= fenster - 1 && laufend > bestes) {
      bestes = laufend;
      bestesX = x - fenster + 1;
    }
  }

  return {
    kern: (bestesX + fenster / 2) / info.width,
    schwerpunkt: masse ? summe / masse / info.width : 0.5,
    randMitte: links < 0 ? 0.5 : (links + rechts) / 2 / info.width,
  };
}

/**
 * Kopfausschnitt einer Variante als Puffer, Alpha bleibt erhalten.
 *
 * `analyse` ist bewusst viel flacher als `kopfAnteil`: Gemessen wird nur das
 * oberste Band der Figur, geschnitten wird deutlich mehr.
 *
 * Zwei Anlaeufe lagen hier daneben. Zuerst war das Messband so hoch wie der
 * Ausschnitt, dann steckte alles darin, was auf Kopfhoehe sonst noch herumsteht.
 * Danach war das Band flach genug, aber der Schwerpunkt der Deckung landete beim
 * weiblichen Corrin fast genau in der Bildmitte: Ihr Umhang bauscht sich nach
 * links, das Haar weht nach rechts, und die beiden wiegen sich auf. Ihr Gesicht
 * klebte dadurch am rechten Rand. Deshalb entscheidet jetzt der dichteste
 * Streifen und nicht der Schwerpunkt.
 */
async function kopfAusschnitt(s, kopfAnteil, breite, hoehe, versatz = 0, analyse = 0.12) {
  const gemessen = await kopfMitte(s.puffer, analyse);
  const mitte = Math.min(1, Math.max(0, gemessen.kern + versatz));
  const hAus = Math.min(Math.round(s.hoehe * kopfAnteil), s.hoehe);
  const bAus = Math.min(Math.round(hAus * (breite / hoehe)), s.breite);
  const roh = Math.round(s.breite * mitte - bAus / 2);
  const links = Math.max(0, Math.min(s.breite - bAus, roh));
  console.log(
    `    Silhouette ${s.breite}x${s.hoehe}, Fenster ${bAus}x${hAus} bei x=${links}` +
      `${roh !== links ? ` (auf ${roh} gerechnet, dann an den Rand geklemmt)` : ''}` +
      `, Kern ${(gemessen.kern * s.breite).toFixed(0)} px, Schwerpunkt ${(gemessen.schwerpunkt * s.breite).toFixed(0)} px`,
  );
  return {
    ...gemessen,
    mitte,
    puffer: await sharp(s.puffer)
      .extract({ left: links, top: 0, width: bAus, height: hAus })
      .resize(breite, hoehe, { fit: 'cover' })
      .png()
      .toBuffer(),
  };
}

/**
 * Geteilter Gesichtsausschnitt: links der maennliche Corrin, rechts der
 * weibliche, getrennt von derselben Diagonalen wie im grossen Render.
 *
 * Beide Haelften werden absichtlich breiter geschnitten als ihre halbe
 * Zielbreite und ueberlappen sich in der Mitte. Ohne diese Ueberlappung bliebe
 * oben rechts der linken Haelfte ein durchsichtiges Dreieck stehen, weil die
 * Diagonale dort ueber den Rand des Ausschnitts hinausreicht.
 */
async function corrinGesicht() {
  const neigung = 12;
  const naht = FACE.b / 2;
  const halb = Math.round(naht) + neigung;

  const m = await silhouette(`${QUELLE}/corrin_m.png`);
  const w = await silhouette(`${QUELLE}/corrin_w.png`);
  const li = await kopfAusschnitt(m, 0.3, halb, FACE.h);
  const re = await kopfAusschnitt(w, 0.3, halb, FACE.h);

  const auf = async (bild, x) =>
    sharp({ create: { width: FACE.b, height: FACE.h, channels: 4, background: durchsichtig } })
      .composite([{ input: bild, left: x, top: 0 }])
      .png()
      .toBuffer();

  const maske = (punkte) =>
    Buffer.from(`<svg width="${FACE.b}" height="${FACE.h}"><polygon points="${punkte}" fill="#fff"/></svg>`);

  const liSeite = await sharp(await auf(li.puffer, 0))
    .composite([{ input: maske(`0,0 ${naht + neigung},0 ${naht - neigung},${FACE.h} 0,${FACE.h}`), blend: 'dest-in' }])
    .png()
    .toBuffer();
  const reSeite = await sharp(await auf(re.puffer, FACE.b - halb))
    .composite([
      { input: maske(`${naht + neigung},0 ${FACE.b},0 ${FACE.b},${FACE.h} ${naht - neigung},${FACE.h}`), blend: 'dest-in' },
    ])
    .png()
    .toBuffer();

  const fertig = await sharp({ create: { width: FACE.b, height: FACE.h, channels: 4, background: durchsichtig } })
    .composite([{ input: liSeite }, { input: reSeite }])
    .png()
    .toBuffer();

  // Vorschau in dreifacher Groesse: Zahlen sagen ueber ein Gesicht nichts.
  await sharp(fertig).resize(FACE.b * 3, FACE.h * 3, { kernel: 'nearest' }).png().toFile(`${QUELLE}/vorschau_corrin.png`);

  const info = await sharp(fertig).webp({ quality: 86, alphaQuality: 90 }).toFile(join(faceZiel, 'corrin.webp'));
  return { info, li, re };
}

await mkdir(renderZiel, { recursive: true });
await mkdir(faceZiel, { recursive: true });

const corrin = await corrinGeteilt();
await writeFile(`${QUELLE}/corrin_split.png`, corrin);

const r1 = await render('corrin', `${QUELLE}/corrin_split.png`);
const g = await corrinGesicht();
console.log(`  corrin             render ${r1.width}x${r1.height} ${Math.round(r1.size / 1024)} KB   face ${g.info.width}x${g.info.height} ${Math.round(g.info.size / 1024)} KB`);
console.log(
  `                     Kopfmitte maennlich Schwerpunkt ${g.li.schwerpunkt.toFixed(3)} / Rand ${g.li.randMitte.toFixed(3)}, weiblich Schwerpunkt ${g.re.schwerpunkt.toFixed(3)} / Rand ${g.re.randMitte.toFixed(3)}`,
);

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
