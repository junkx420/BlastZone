/**
 * Liest die Frame-Daten von ultimateframedata.com und schreibt sie als
 * TypeScript-Module nach `src/data/frames/<slug>.ts`.
 *
 *   node scripts/build-frame-data.mjs              # alle 86 Fighter
 *   node scripts/build-frame-data.mjs --only=mario # nur einer, zum Prüfen
 *
 * **Warum Node und nicht der Browser:** 86 Seiten mit je rund 42 Moves und 19
 * Feldern ergeben zu viele Daten, um sie durch eine Browser-Sitzung zu schleusen.
 * Node hat zudem keine CORS-Schranke – die Einschränkung in `.claude/skills/
 * blastzone-qa` gilt nur für `fetch` aus einer fremden Origin heraus.
 *
 * **Warum ein Regex-Parser reicht:** Das Markup von UFD ist flach und
 * gleichförmig – `<div class="movecontainer">` mit direkten Kind-Divs pro Feld,
 * keine Verschachtelung außer im Hitbox-Block, den wir nicht auslesen. Eine
 * zusätzliche Abhängigkeit (jsdom, cheerio) wäre hier Ballast.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const zielOrdner = join(root, 'src', 'data', 'frames');

/**
 * Slug bei uns → Slug bei UFD. Die Regel ist Bindestrich zu Unterstrich; hier
 * stehen nur die Abweichungen. Alle 89 daraus entstehenden Adressen wurden am
 * 13.09.2026 mit HTTP 200 bestätigt.
 *
 * Zwei Fighter führt UFD getrennt, weil sie im Spiel getrennte Movesets haben:
 * Pokémon-Trainer als drei Seiten, Pyra/Mythra als zwei.
 */
const AUSNAHMEN = {
  rosalina: 'rosalina_and_luma',
  'mii-brawler': 'mii_brawler',
  'mii-swordfighter': 'mii_swordfighter',
  'mii-gunner': 'mii_gunner',
};

const GETEILT = {
  'pokemon-trainer': [
    ['Squirtle', 'squirtle'],
    ['Ivysaur', 'ivysaur'],
    ['Glurak', 'charizard'],
  ],
  'pyra-mythra': [
    ['Pyra', 'pyra'],
    ['Mythra', 'mythra'],
  ],
};

const ufdSlug = (slug) => AUSNAHMEN[slug] ?? slug.replace(/-/g, '_');

/** Reihenfolge wie auf der UFD-Seite; die Überschrift bestimmt den Abschnitt. */
const ABSCHNITTE = [
  [/ground attacks/i, 'ground'],
  [/aerial attacks/i, 'aerial'],
  [/special attacks/i, 'special'],
  [/grabs?\s*\/?\s*throws?/i, 'throw'],
  [/dodges?\s*\/?\s*rolls?/i, 'dodge'],
  [/misc/i, 'misc'],
];

const abschnittVon = (ueberschrift) => {
  for (const [muster, name] of ABSCHNITTE) if (muster.test(ueberschrift)) return name;
  return 'misc';
};

/**
 * `--` heißt bei UFD „trifft hier nicht zu" (etwa Landing Lag bei einem Bodenangriff),
 * `**` heißt „kein Wert erfasst". Beides wird weggelassen statt als Text gespeichert –
 * sonst stünde in der Anzeige später ein sinnloses „--".
 */
const saubern = (roh) => {
  if (roh == null) return undefined;
  const t = roh
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
  if (!t || t === '--' || t === '**' || t === '-') return undefined;
  return t;
};

const feld = (block, klasse) => {
  const treffer = new RegExp(`<div class="${klasse}">([\\s\\S]*?)</div>`).exec(block);
  return saubern(treffer?.[1]);
};

/** Zerlegt eine UFD-Seite in Moves samt Abschnitt. */
function seiteAuswerten(html) {
  const moves = [];
  // Nach Überschriften aufteilen: Der Text vor dem ersten <h2> enthält keine Moves.
  const teile = html.split(/<h2[^>]*>/i).slice(1);
  for (const teil of teile) {
    const ueberschrift = saubern(teil.slice(0, teil.indexOf('</h2>'))) ?? '';
    const section = abschnittVon(ueberschrift);
    const bloecke = teil.split('<div class="movecontainer">').slice(1);
    for (const block of bloecke) {
      const name = feld(block, 'movename');
      if (!name) continue;
      const move = {
        name,
        section,
        startup: feld(block, 'startup'),
        active: feld(block, 'activeframes'),
        total: feld(block, 'totalframes'),
        endlag: feld(block, 'endlag'),
        landingLag: feld(block, 'landinglag'),
        damage: feld(block, 'basedamage'),
        advantage: feld(block, 'advantage'),
        shieldLag: feld(block, 'shieldlag'),
        shieldStun: feld(block, 'shieldstun'),
        hitboxes: feld(block, 'whichhitbox'),
        notes: feld(block, 'notes'),
      };
      for (const [k, v] of Object.entries(move)) if (v === undefined) delete move[k];
      moves.push(move);
    }
  }
  return moves;
}

async function holen(ufd) {
  const url = `https://ultimateframedata.com/${ufd}`;
  const antwort = await fetch(url, { headers: { 'User-Agent': 'blastzone-framedata/1.0' } });
  if (!antwort.ok) throw new Error(`${url} -> HTTP ${antwort.status}`);
  return { url, html: await antwort.text() };
}

const alsModul = (daten) => `// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = ${JSON.stringify(daten, null, 2)};

export default FRAMES;
`;

async function einenFighter(slug, heute) {
  const geteilt = GETEILT[slug];
  const sets = [];
  let quelle = '';

  if (geteilt) {
    for (const [label, ufd] of geteilt) {
      const { url, html } = await holen(ufd);
      quelle ||= url;
      sets.push({ label, moves: seiteAuswerten(html) });
      await new Promise((r) => setTimeout(r, 150));
    }
  } else {
    const { url, html } = await holen(ufdSlug(slug));
    quelle = url;
    sets.push({ moves: seiteAuswerten(html) });
  }

  const daten = { slug, sets, source: { url: quelle, fetched: heute } };
  await writeFile(join(zielOrdner, `${slug}.ts`), alsModul(daten), 'utf8');
  return sets.reduce((s, x) => s + x.moves.length, 0);
}

const SLUGS = process.argv
  .find((a) => a.startsWith('--only='))
  ?.slice(7)
  .split(',') ?? [
  'mario', 'donkey-kong', 'link', 'samus', 'dark-samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi',
  'ness', 'captain-falcon', 'jigglypuff', 'peach', 'daisy', 'bowser', 'ice-climbers', 'sheik', 'zelda',
  'dr-mario', 'pichu', 'falco', 'marth', 'lucina', 'young-link', 'ganondorf', 'mewtwo', 'roy', 'chrom',
  'mr-game-and-watch', 'meta-knight', 'pit', 'dark-pit', 'zero-suit-samus', 'wario', 'snake', 'ike',
  'pokemon-trainer', 'diddy-kong', 'lucas', 'sonic', 'king-dedede', 'olimar', 'lucario', 'rob',
  'toon-link', 'wolf', 'villager', 'mega-man', 'wii-fit-trainer', 'rosalina', 'little-mac', 'greninja',
  'mii-brawler', 'mii-swordfighter', 'mii-gunner', 'palutena', 'pac-man', 'robin', 'shulk', 'bowser-jr',
  'duck-hunt', 'ryu', 'ken', 'cloud', 'corrin', 'bayonetta', 'inkling', 'ridley', 'simon', 'richter',
  'king-k-rool', 'isabelle', 'incineroar', 'piranha-plant', 'joker', 'hero', 'banjo-and-kazooie',
  'terry', 'byleth', 'min-min', 'steve', 'sephiroth', 'pyra-mythra', 'kazuya', 'sora',
];

await mkdir(zielOrdner, { recursive: true });
const heute = new Date().toISOString().slice(0, 10);
let gesamt = 0;
const duenn = [];

for (const slug of SLUGS) {
  try {
    const anzahl = await einenFighter(slug, heute);
    gesamt += anzahl;
    // Unter 20 Moves ist verdächtig – dann hat der Parser vermutlich etwas verpasst.
    if (anzahl < 20) duenn.push(`${slug} (${anzahl})`);
    process.stdout.write(`${slug} ${anzahl}  `);
  } catch (fehler) {
    duenn.push(`${slug} FEHLER: ${fehler.message}`);
  }
  await new Promise((r) => setTimeout(r, 150));
}

console.log(`\n\n${SLUGS.length} Fighter, ${gesamt} Moves.`);
if (duenn.length) console.log(`Prüfen: ${duenn.join(', ')}`);
else console.log('Keine Auffälligkeiten.');
