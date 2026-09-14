// Lädt jede benötigte UFD-Seite einmal, nacheinander mit Pause, und legt die
// Move-Zeilen strukturiert ab. Bereits geladene Seiten werden nicht erneut geholt.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const CACHE = join(HERE, 'ufd');
mkdirSync(CACHE, { recursive: true });

const guides = JSON.parse(readFileSync(join(HERE, 'combos.json'), 'utf8'));
const slugs = [...new Set([...guides.flatMap((g) => g.ufd), 'mythra'])];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const clean = (s) => (s ?? '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const moves = {};
let geladen = 0;
for (const slug of slugs) {
  const file = join(CACHE, `${slug}.html`);
  if (!existsSync(file)) {
    const res = await fetch(`https://ultimateframedata.com/${slug}`, { headers: { 'User-Agent': 'blastzone-audit (einmaliger Abgleich)' } });
    if (!res.ok) {
      console.log(`FEHLER ${slug}: HTTP ${res.status}`);
      continue;
    }
    writeFileSync(file, await res.text());
    geladen++;
    await wait(900);
  }
  const html = readFileSync(file, 'utf8');
  moves[slug] = html
    .split('class="movecontainer')
    .slice(1)
    .map((b) => {
      const name = clean((b.match(/class="movename"[^>]*>([\s\S]*?)<\/div>/) || [])[1]);
      const dmg = clean((b.match(/class="basedamage"[^>]*>([\s\S]*?)<\/div>/) || [])[1]);
      const row = clean(b.replace(/<[^>]+>/g, ' | ')).replace(/(\s*\|\s*)+/g, ' | ').slice(0, 420);
      return { name, dmg, row };
    })
    .filter((m) => m.name);
}
writeFileSync(join(HERE, 'ufd.json'), JSON.stringify(moves, null, 1));
console.log(`${slugs.length} Slugs, ${geladen} neu geladen, ${Object.keys(moves).length} ausgewertet`);
