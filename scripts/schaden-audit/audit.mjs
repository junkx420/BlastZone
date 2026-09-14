// Strenge Fassung: Varianten eines Moves (Early/Late, Close/Far, Sweet/Sour ...)
// gelten nur einzeln, Treffer einer Folge (First/Second, Multi/Final, Hit N) auch
// als Summe. Folgetreffer über mehrere UFD-Blöcke nur in ihrer Reihenfolge.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const guides = JSON.parse(readFileSync(join(HERE, 'combos.json'), 'utf8'));
const ufd = JSON.parse(readFileSync(join(HERE, 'ufd.json'), 'utf8'));

const TOKEN = {
  jab: /^(Jab|Rapid Jab|Neutral Attack)/i,
  ftilt: /^Forward Tilt/i, lftilt: /^Forward Tilt/i, btilt: /Tilt/i,
  utilt: /^Up Tilt/i, dtilt: /^Down Tilt/i, ldtilt: /^Down Tilt/i,
  da: /^Dash Attack/i,
  fsmash: /^Forward Smash/i, usmash: /^Up Smash/i, dsmash: /^Down Smash/i,
  nair: /^Neutral Air(?! Dodge)/i, fair: /^Forward Air/i, bair: /^Back Air/i, uair: /^Up Air/i, dair: /^Down Air/i,
  zair: /^Z ?Air|Tether/i,
  nb: /^Neutral B/i, sb: /^Side B/i, sbh: /^Side B/i, ub: /^Up B/i, db: /^Down B/i, dbh: /^Down B/i,
  pummel: /^Pummel/i,
  fthrow: /^Forward Throw/i, bthrow: /^Back(ward)? Throw/i, uthrow: /^Up Throw/i, dthrow: /^Down Throw/i,
};
const POKEMON = { Squirtle: 'squirtle', Ivysaur: 'ivysaur', Charizard: 'charizard' };
const VARIANTE = /\b(Early|Late|Latest|Close|Far|Farther|Clean|Sour|Sweet|Sweetspot|Sourspot|Tip|Tipper|Hilt|Middle|Near|Grounded|Aerial|Normal|Crit|Uncharged|Standard|Meteor|Spike|Body|Arm|Sword|Foot|Legs|Weak|Strong)\b/i;
const FOLGE = /\b(First|Second|Third|Multi|Multihit|Final|Hits? \d|Landing)\b/i;

const nums = (s) => (s.match(/\d+(?:\.\d+)?/g) || []).map(Number).filter((n) => n > 0 && n < 100);
const r12 = (x) => Math.round(x * 1.2);

function candidates(rows) {
  const c = new Set();
  let acc = 0;
  for (const r of rows) {
    const ns = nums(r.dmg);
    if (!ns.length) continue;
    ns.forEach((n) => c.add(n));
    const folge = FOLGE.test(r.row) || (!VARIANTE.test(r.row) && ns.length > 1);
    let rowMax = Math.max(...ns);
    if (folge) {
      const sum = ns.reduce((a, b) => a + b, 0);
      c.add(sum);
      rowMax = sum;
      for (let k = 1; k <= 16; k++) {
        if (ns.length >= 3) c.add(ns[0] + k * ns[1] + ns[ns.length - 1]);
        if (ns.length === 2) {
          c.add(k * ns[0] + ns[1]);
          c.add(ns[0] + k * ns[1]);
        }
        if (ns.length === 1) c.add(k * ns[0]);
      }
      let p = 0;
      for (const n of ns) c.add((p += n));
    }
    acc += rowMax;
    c.add(acc);
  }
  return new Set([...c].map(r12));
}

const groups = new Map();
let geprueft = 0;

for (const g of guides) {
  for (const combo of g.combos) {
    const prefix = combo.title.split(':')[0];
    const slug = POKEMON[prefix] ?? (combo.id.startsWith('aegis-mythra') ? 'mythra' : g.ufd[0]);
    const moves = ufd[slug];
    combo.steps.forEach((s, idx) => {
      if (!s.dmg || !moves) return;
      const tok = [...s.input.trim().split(/\s+/)].reverse().find((t) => TOKEN[t]);
      if (!tok) return;
      let rows = moves.filter((m) => TOKEN[tok].test(m.name));
      const kerne = rows.map((m) => (m.name.match(/\(([^)]+)\)/) || [])[1]).filter(Boolean).map((k) => k.replace(/,.*$/, '').trim());
      if (/throw/.test(tok) && /cargo/i.test(s.label ?? '')) kerne.push('Cargo');
      for (const k of new Set(kerne)) for (const m of moves) if (m.name.includes(k) && !rows.includes(m)) rows.push(m);
      if (!rows.length) return;
      geprueft++;
      const cand = candidates(rows);
      if (cand.has(s.dmg)) return;
      const diff = Math.min(...[...cand].map((v) => Math.abs(v - s.dmg)));
      const key = `${g.slug}|${slug}|${tok}|${s.dmg}`;
      const e = groups.get(key) ?? { slug: g.slug, ufd: slug, tok, dmg: s.dmg, diff, where: [], rows };
      e.where.push(`${combo.id}#${idx} "${s.label ?? s.input}"${s.note ? ` [${s.note}]` : ''}`);
      groups.set(key, e);
    });
  }
}

const list = [...groups.values()].sort((a, b) => a.slug.localeCompare(b.slug) || b.diff - a.diff);
const lines = [];
for (const e of list) {
  lines.push(`## ${e.slug} (${e.ufd}) ${e.tok} dmg=${e.dmg} um ${e.diff} daneben, ${e.where.length}x`);
  e.where.forEach((w) => lines.push(`   ${w}`));
  e.rows.forEach((r) => lines.push(`   UFD ${r.name}: ${r.dmg}  || ${r.row.slice(0, 180)}`));
}
writeFileSync(join(HERE, 'report.txt'), lines.join('\n'));
console.log(`Geprüft: ${geprueft}. Auffällige Gruppen: ${list.length} (um mehr als 1: ${list.filter((e) => e.diff > 1).length}), Schritte: ${list.reduce((n, e) => n + e.where.length, 0)}`);
