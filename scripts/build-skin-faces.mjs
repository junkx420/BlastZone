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
import { mkdir, readdir } from 'node:fs/promises';
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
const KOPF_AUSSCHNITT = { corrin: { kopfAnteil: 0.3, mitte: 0.5 } };

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
async function findCrop(name) {
  const renderPath = join(RENDER_DIR, `${name}.webp`);
  const facePath = join(FACE_DIR, `${name}.webp`);
  const { width: W, height: H } = await sharp(renderPath).metadata();

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
      const big = await premul(renderPath, bw, bh, { padX, padY });
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

/** Kopfausschnitt aus der Silhouette, für Bilder ohne passende Vorlage (siehe build-neue-portraits.mjs). */
async function headCrop(input, { kopfAnteil, mitte }) {
  const puffer = await sharp(input).trim({ threshold: 1 }).png().toBuffer();
  const { width, height } = await sharp(puffer).metadata();
  const h = Math.round(height * kopfAnteil);
  const w = Math.round(h * (FACE.w / FACE.h));
  const left = Math.max(0, Math.min(width - w, Math.round(width * mitte - w / 2)));
  return sharp(puffer)
    .extract({ left, top: 0, width: Math.min(w, width), height: Math.min(h, height) })
    .resize(FACE.w, FACE.h, { fit: 'cover' });
}

const encode = (pipeline, out) => pipeline.webp({ quality: 86, alphaQuality: 90, effort: 5 }).toFile(out);

await mkdir(ZIEL, { recursive: true });
const wanted = process.argv.slice(2);
const names = (wanted.length ? wanted : await readdir(QUELLE)).filter((n) => existsSync(join(QUELLE, n)));
const auffaellig = [];

for (const name of names) {
  const alts = (await readdir(join(QUELLE, name))).filter((f) => /^main[2-8]\.png$/.test(f)).sort();
  if (KOPF_AUSSCHNITT[name]) {
    for (const file of alts) {
      const n = file.match(/\d/)[0];
      await encode(await headCrop(join(QUELLE, name, file), KOPF_AUSSCHNITT[name]), join(ZIEL, `${name}_${n}.webp`));
    }
    console.log(`${name}: ${alts.length} Alts per Kopfausschnitt`);
    continue;
  }

  const crop = await findCrop(name);
  for (const file of alts) {
    const n = file.match(/\d/)[0];
    const input = join(QUELLE, name, file);
    const { width: Wo, height: Ho } = await sharp(input).metadata();
    // Vom Original direkt auf den Zielmaßstab, statt den verkleinerten Render noch einmal zu vergrößern.
    const f = (crop.s * crop.W) / Wo;
    const tw = Math.round(Wo * f);
    const th = Math.round(Ho * f);
    const left = Math.round(crop.x * crop.s);
    const top = Math.round(crop.y * crop.s);
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
    const pipeline = sharp(cut);
    await encode(pipeline, join(ZIEL, `${name}_${n}.webp`));
  }
  const line = `${name}: s=${crop.s.toFixed(3)} x=${crop.x.toFixed(1)} y=${crop.y.toFixed(1)}${crop.mirror ? ' gespiegelt' : ''} rmse=${crop.rmse.toFixed(1)} (${alts.length} Alts)`;
  console.log(line);
  if (!(crop.rmse <= SCHWELLE)) auffaellig.push(line);
}

if (auffaellig.length) {
  console.log('\nAuffällig, bitte ansehen:');
  auffaellig.forEach((l) => console.log(`  ${l}`));
}
