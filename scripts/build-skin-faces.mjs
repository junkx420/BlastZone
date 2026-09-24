/**
 * Erzeugt die Avatar-Bilder der Alt-Skins 2 bis 8.
 *
 *   node scripts/build-skin-faces.mjs [asset-name …]
 *
 * Quelle: main2.png bis main8.png von smashbros.com, abgelegt unter
 * QUELLE/<asset-name>/ (kurzer Pfad, libvips scheitert unter Windows an langen).
 * Ziel: public/fighters/skins/<asset-name>_<n>.webp, 270×164 wie face/.
 *
 * Nintendo veröffentlicht Gesichtsausschnitte nur für den Standard-Skin. Die Alts
 * haben aber dieselbe Pose und Bildgröße wie der Standard-Render. Das Skript sucht
 * deshalb, wo face/<name>.webp in render/<name>.webp liegt (Maßstab und Versatz,
 * grob auf kleinen Bildern, dann feiner), und schneidet jeden Alt an genau dieser
 * Stelle. So rahmt Skin 3 den Kopf wie Skin 1.
 *
 * Ausnahmen:
 * - Die Miis haben auf smashbros.com keine Alts, sie behalten nur ihr Standardbild.
 * - Corrins Standardbild ist ein Doppelporträt (build-neue-portraits.mjs) und
 *   passt zu keinem einzelnen Render. Seine Alts bekommen einen Kopfausschnitt aus
 *   der Silhouette, wie die Miis dort.
 *
 * Die Ausgabe listet pro Fighter die Abweichung des Treffers (RMSE, 0 bis 255).
 * Werte über SCHWELLE heißen: Ausschnitt nicht gefunden, Bilder ansehen.
 */
import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const QUELLE = 'C:/Users/Apex/AppData/Local/Temp/bz/alts';
const FACE_DIR = join(root, 'public', 'fighters', 'face');
const RENDER_DIR = join(root, 'public', 'fighters', 'render');
const ZIEL = join(root, 'public', 'fighters', 'skins');
const FACE = { w: 270, h: 164 };
const SCHWELLE = 28;
/*
 * Fighter, deren Standard-Ausschnitt keine Stelle im Render ist, sondern ein eigens
 * gebautes Bild (Doppelportraet, andere Pose, starke Vergroesserung). Fuer sie entsteht
 * der Ausschnitt aus der Silhouette jedes einzelnen Alts: kopfAnteil ist die Hoehe des
 * Kopfbereichs, gemessen an der Figurhoehe, mitte verschiebt ihn waagerecht, oben
 * setzt ihn tiefer an. Diese Fighter bekommen auch Skin 1 von hier, damit alle acht
 * gleich gerahmt sind.
 */
/*
 * Rueckfall fuer einzelne Alts, die in einer anderen Pose stehen als das Standardbild.
 * Cloud traegt in jedem zweiten Alt die Advent-Children-Kluft und steht dort aufrecht,
 * der Kopf sitzt weiter rechts. Ohne Eintrag sucht autoHeadCrop den Kopf selbst.
 */
const RUECKFALL = {
  cloud: { kopfAnteil: 0.25, mitte: 0.55 },
};

const KOPF_AUSSCHNITT = {
  corrin: { kopfAnteil: 0.3, mitte: 0.5 },
  // Die Koopalinge haben ganz andere Koerperformen als Bowser Jr., ein gemeinsamer Ausschnitt trifft nicht.
  bowser_jr: { kopfAnteil: 0.33, mitte: 0.5 },
  byleth: { kopfAnteil: 0.22, mitte: 0.42 },
  duck_hunt: { kopfAnteil: 0.78, mitte: 0.5, oben: 0.14 },
  homura: { kopfAnteil: 0.26, mitte: 0.5 },
  ice_climbers: { kopfAnteil: 0.42, mitte: 0.45 },
  palutena: { kopfAnteil: 0.26, mitte: 0.45 },
  // Der Trainer steht vor den Pokemon, sein Kopf liegt auf mittlerer Hoehe.
  pokemon_trainer: { kopfAnteil: 0.22, mitte: 0.47, oben: 0.33 },
  steve: { kopfAnteil: 0.3, mitte: 0.5 },
};

/** RGB mit Alpha vormultipliziert, als Float32. Transparente Stellen zählen damit als Schwarz, egal welche Farbe dort steht. */
async function premul(input, width, height, { padX = 0, padY = 0, flop = false } = {}) {
  let img = sharp(input).resize(width, height, { fit: 'fill' });
  if (flop) img = img.flop();
  const buf = await img.png().toBuffer();
  const { data, info } = await sharp(buf)
    .extend({ top: padY, bottom: padY, left: padX, right: padX, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const out = new Float32Array(info.width * info.height * 3);
  for (let p = 0, q = 0; p < data.length; p += 4, q += 3) {
    const a = data[p + 3] / 255;
    out[q] = data[p] * a;
    out[q + 1] = data[p + 1] * a;
    out[q + 2] = data[p + 2] * a;
  }
  return out;
}

/** Kleinste Summe quadrierter Abstände im Suchfenster, mit Abbruch, sobald eine Zeile den bisherigen Bestwert überschreitet. */
function search(big, bw, bh, small, sw, sh, x0, x1, y0, y1) {
  let best = { score: Infinity, x: 0, y: 0 };
  const rowLen = sw * 3;
  for (let y = Math.max(0, y0); y <= Math.min(bh - sh, y1); y++) {
    for (let x = Math.max(0, x0); x <= Math.min(bw - sw, x1); x++) {
      let s = 0;
      for (let j = 0; j < sh && s < best.score; j++) {
        const bo = ((y + j) * bw + x) * 3;
        const so = j * rowLen;
        for (let i = 0; i < rowLen; i++) {
          const d = big[bo + i] - small[so + i];
          s += d * d;
        }
      }
      if (s < best.score) best = { score: s, x, y };
    }
  }
  return best;
}

const geometric = (from, to, step) => {
  const list = [];
  for (let s = from; s <= to; s *= step) list.push(s);
  return list;
};

/**
 * Maßstab `s` (Face-Pixel je Render-Pixel) und Versatz `x`, `y` in Pixeln des
 * unskalierten Renders. Drei Stufen: 1/8 über alle Maßstäbe, 1/2 und 1/1 nur
 * rund um die besten Kandidaten.
 *
 * Der Render bekommt einen durchsichtigen Rand von einem halben Ausschnitt:
 * Nintendos Ausschnitt ragt bei manchen Fightern über das Bild hinaus (Piranha-
 * Pflanze, K. Rool). Manche Ausschnitte sind gespiegelt, deshalb wird auch der
 * gespiegelte Ausschnitt gesucht (`mirror`).
 */
async function findCrop(bigPath, facePath) {
  const { width: W, height: H } = await sharp(bigPath).metadata();

  const level = async (k, mirror, scales, window) => {
    const sw = Math.round(FACE.w / k);
    const sh = Math.round(FACE.h / k);
    const padX = Math.round(sw / 2);
    const padY = Math.round(sh / 2);
    const small = await premul(facePath, sw, sh, { flop: mirror });
    const found = [];
    for (const s of scales) {
      const bw = Math.round((W * s) / k);
      const bh = Math.round((H * s) / k);
      const big = await premul(bigPath, bw, bh, { padX, padY });
      const pw = bw + 2 * padX;
      const ph = bh + 2 * padY;
      const w = window ? window(s, k, padX, padY) : { x0: 0, x1: pw, y0: 0, y1: ph };
      const best = search(big, pw, ph, small, sw, sh, w.x0, w.x1, w.y0, w.y1);
      if (best.score === Infinity) continue;
      found.push({ s, mirror, x: ((best.x - padX) * k) / s, y: ((best.y - padY) * k) / s, rmse: Math.sqrt(best.score / (sw * sh * 3)) });
    }
    return found.sort((a, b) => a.rmse - b.rmse);
  };

  // Fenster um einen Kandidaten, umgerechnet auf Stufe k, Maßstab s und den Rand.
  const around = (c, pad) => (s, k, padX, padY) => ({
    x0: Math.floor((c.x * s) / k) + padX - pad,
    x1: Math.ceil((c.x * s) / k) + padX + pad,
    y0: Math.floor((c.y * s) / k) + padY - pad,
    y1: Math.ceil((c.y * s) / k) + padY + pad,
  });

  const scales = geometric(0.3, 8, 1.04);
  const coarse = [...(await level(8, false, scales)).slice(0, 3), ...(await level(8, true, scales)).slice(0, 2)];
  let best = null;
  for (const c of coarse) {
    const mid = (await level(2, c.mirror, geometric(c.s / 1.06, c.s * 1.06, 1.008), around(c, 10)))[0];
    if (!mid) continue;
    const fine = (await level(1, c.mirror, geometric(mid.s / 1.01, mid.s * 1.01, 1.002), around(mid, 6)))[0];
    if (fine && (!best || fine.rmse < best.rmse)) best = fine;
  }
  return { ...best, W, H };
}

/** Rechteck der Figur im Bild (durchsichtiger Rand weg), in Pixeln des Originals. */
async function silhouette(input) {
  const { info } = await sharp(input).trim({ threshold: 1 }).raw().toBuffer({ resolveWithObject: true });
  return { left: -(info.trimOffsetLeft ?? 0), top: -(info.trimOffsetTop ?? 0), width: info.width, height: info.height };
}

/** Anteil sichtbarer Pixel. Ein fast leerer Ausschnitt heisst: Die Pose passt nicht. */
async function deckung(buffer) {
  const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let sichtbar = 0;
  for (let i = 3; i < data.length; i += 4) if (data[i] > 10) sichtbar++;
  return sichtbar / (info.width * info.height);
}

/**
 * Kopfausschnitt ohne Handarbeit: Der Kopf ist die erste dichte Stelle der Figur.
 * Zeilen mit wenigen Pixeln (Schwertspitze, Antenne, Haarsträhne) werden übersprungen,
 * danach steht das Fenster dort, wo in diesem Band die meisten Pixel liegen.
 * Damit findet der Ausschnitt den Kopf auch in einer Pose, die es im Standardbild
 * nicht gibt (Cloud in der Advent-Children-Kluft).
 */
async function autoHeadCrop(input, kopfAnteil = 0.3) {
  const puffer = await sharp(input).trim({ threshold: 1 }).png().toBuffer();
  const { data, info } = await sharp(puffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const zeile = new Int32Array(info.height);
  for (let y = 0; y < info.height; y++) {
    let n = 0;
    for (let x = 0; x < info.width; x++) if (data[(y * info.width + x) * 4 + 3] > 40) n++;
    zeile[y] = n;
  }
  const dicht = Math.max(...zeile) * 0.22;
  const start = Math.max(0, zeile.findIndex((n) => n >= dicht));
  const h = Math.min(Math.round(info.height * kopfAnteil), info.height - start);
  const w = Math.min(Math.round(h * (FACE.w / FACE.h)), info.width);
  // Fenster mit den meisten Pixeln im Kopfband, gleitend über die Breite.
  const spalte = new Int32Array(info.width);
  for (let y = start; y < start + h; y++) {
    for (let x = 0; x < info.width; x++) if (data[(y * info.width + x) * 4 + 3] > 40) spalte[x]++;
  }
  let summe = 0;
  for (let x = 0; x < w; x++) summe += spalte[x];
  let best = { x: 0, summe };
  for (let x = w; x < info.width; x++) {
    summe += spalte[x] - spalte[x - w];
    if (summe > best.summe) best = { x: x - w + 1, summe };
  }
  return sharp(puffer).extract({ left: best.x, top: start, width: w, height: h }).resize(FACE.w, FACE.h, { fit: "cover" });
}

/** Kopfausschnitt aus der Silhouette, für Bilder ohne passende Vorlage (siehe build-neue-portraits.mjs). */
async function headCrop(input, { kopfAnteil, mitte, oben = 0 }) {
  const puffer = await sharp(input).trim({ threshold: 1 }).png().toBuffer();
  const { width, height } = await sharp(puffer).metadata();
  const h = Math.round(height * kopfAnteil);
  const w = Math.round(h * (FACE.w / FACE.h));
  const left = Math.max(0, Math.min(width - w, Math.round(width * mitte - w / 2)));
  const top = Math.max(0, Math.min(height - Math.min(h, height), Math.round(height * oben)));
  return sharp(puffer)
    .extract({ left, top, width: Math.min(w, width), height: Math.min(h, height) })
    .resize(FACE.w, FACE.h, { fit: 'cover' });
}

const encode = (pipeline, out) => pipeline.webp({ quality: 86, alphaQuality: 90, effort: 5 }).toFile(out);

await mkdir(ZIEL, { recursive: true });
const wanted = process.argv.slice(2);
const names = (wanted.length ? wanted : await readdir(QUELLE)).filter((n) => existsSync(join(QUELLE, n)));
const auffaellig = [];
const leer = [];

for (const name of names) {
  const alts = (await readdir(join(QUELLE, name))).filter((f) => /^main[2-8]\.png$/.test(f)).sort();
  if (KOPF_AUSSCHNITT[name]) {
    // Auch Skin 1 kommt hier aus dem Render, sonst waere er anders gerahmt als die Alts.
    await encode(await headCrop(join(RENDER_DIR, `${name}.webp`), KOPF_AUSSCHNITT[name]), join(ZIEL, `${name}_1.webp`));
    for (const file of alts) {
      const n = file.match(/\d/)[0];
      await encode(await headCrop(join(QUELLE, name, file), KOPF_AUSSCHNITT[name]), join(ZIEL, `${name}_${n}.webp`));
    }
    console.log(`${name}: ${alts.length + 1} Bilder per Kopfausschnitt`);
    continue;
  }

  // Skin 1 ist Nintendos eigener Ausschnitt, unveraendert uebernommen.
  await copyFile(join(FACE_DIR, `${name}.webp`), join(ZIEL, `${name}_1.webp`));

  const facePath = join(FACE_DIR, `${name}.webp`);
  const crop = await findCrop(join(RENDER_DIR, `${name}.webp`), facePath);
  /*
   * Der gefundene Ausschnitt wird auf die Silhouette bezogen (Anteile statt Pixel).
   * Alts teilen die Pose, aber nicht immer die Bildaufteilung, und einige Fighter
   * stehen in jedem zweiten Alt anders (Cloud in der Advent-Children-Kluft).
   * Relativ zur Figur sitzt der Ausschnitt trotzdem richtig.
   */
  const renderBox = await silhouette(join(RENDER_DIR, `${name}.webp`));
  const anteil = {
    x: (crop.x - renderBox.left) / renderBox.width,
    y: (crop.y - renderBox.top) / renderBox.height,
    w: FACE.w / crop.s / renderBox.width,
    h: FACE.h / crop.s / renderBox.height,
  };
  for (const file of alts) {
    const n = file.match(/\d/)[0];
    const input = join(QUELLE, name, file);
    const box = await silhouette(input);
    const { width: Wo, height: Ho } = await sharp(input).metadata();
    // So skalieren, dass der Ausschnitt am Ende genau 270 x 164 misst.
    const f = FACE.w / (anteil.w * box.width);
    const tw = Math.round(Wo * f);
    const th = Math.round(Ho * f);
    const left = Math.round((box.left + anteil.x * box.width) * f);
    const top = Math.round((box.top + anteil.y * box.height) * f);
    // Rand wie bei der Suche, damit ein Ausschnitt über die Bildkante hinaus möglich ist.
    const scaled = await sharp(input)
      .resize(tw, th, { fit: 'fill' })
      .extend({ top: FACE.h, bottom: FACE.h, left: FACE.w, right: FACE.w, background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    let cut = await sharp(scaled)
      .extract({
        left: Math.max(0, Math.min(tw + FACE.w, left + FACE.w)),
        top: Math.max(0, Math.min(th + FACE.h, top + FACE.h)),
        width: FACE.w,
        height: FACE.h,
      })
      .png()
      .toBuffer();
    if (crop.mirror) cut = await sharp(cut).flop().png().toBuffer();
    // Fast leer heisst: Die Pose dieses Alts passt nicht, das faellt sonst erst im Browser auf.
    const sichtbar = await deckung(cut);
    if (sichtbar < 0.35) {
      /*
       * Der Ausschnitt trifft die Figur nicht: Dieses Alt steht anders (Cloud in der
       * Advent-Children-Kluft). Dann den Kopf in genau diesem Bild aus der Silhouette
       * bestimmen.
       */
      cut = await (await (RUECKFALL[name] ? headCrop(input, RUECKFALL[name]) : autoHeadCrop(input))).png().toBuffer();
      const jetzt = await deckung(cut);
      console.log(`  ${name}_${n}: andere Pose, Kopf selbst gesucht, sichtbar ${Math.round(jetzt * 100)} %`);
      if (jetzt < 0.35) leer.push(`${name}_${n} (${Math.round(jetzt * 100)} % sichtbar)`);
    }
    await encode(sharp(cut), join(ZIEL, `${name}_${n}.webp`));
  }
  const line = `${name}: s=${crop.s.toFixed(3)} x=${crop.x.toFixed(1)} y=${crop.y.toFixed(1)}${crop.mirror ? ' gespiegelt' : ''} rmse=${crop.rmse.toFixed(1)} (${alts.length} Alts)`;
  console.log(line);
  if (!(crop.rmse <= SCHWELLE)) auffaellig.push(line);
}

// Fighter ohne Alts (die drei Miis): Skin 1 ist ihr einziges Bild.
for (const datei of await readdir(FACE_DIR)) {
  const name = datei.replace(/[.]webp$/, "");
  if (!existsSync(join(ZIEL, `${name}_1.webp`))) {
    await copyFile(join(FACE_DIR, datei), join(ZIEL, `${name}_1.webp`));
    console.log(`${name}: keine Alts, nur Skin 1`);
  }
}

if (leer.length) {
  console.log();
  console.log('Fast leer, Pose passt nicht:');
  leer.forEach((l) => console.log(`  ${l}`));
}

if (auffaellig.length) {
  console.log('\nAuffällig, bitte ansehen:');
  auffaellig.forEach((l) => console.log(`  ${l}`));
}
