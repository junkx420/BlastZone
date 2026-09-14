// Schadens-Audit: prüft jeden Combo-Schritt gegen Ultimate Frame Data (Basis mal 1,2).
// Ablauf: node extract.mjs && node fetch-ufd.mjs && node audit.mjs, Ergebnis in report.txt.
//
// Streng: Varianten eines Moves (Early/Late, Close/Far, Sweet/Sour ...) gelten nur
// einzeln, Treffer einer Folge (First/Second, Multi/Final, Hit N) auch als Summe.
// Folgetreffer über mehrere UFD-Blöcke nur in ihrer Reihenfolge.
//
// GRENZEN, BEIM LESEN DES BERICHTS IM KOPF BEHALTEN:
// - Gefunden werden nur UNMÖGLICHE Werte. Ein Wert, der existiert, aber zum falschen
//   Treffer gehört (zweiter statt erster Treffer), fällt nicht auf.
// - Eine lockere Fassung, die auch Varianten addiert, ließ Fehler zufällig passieren.
//   Ein kurzer Bericht ist deshalb kein Beleg für richtige Daten.
// - Bekannte Fehlalarme: Moves mit EINEM Wert und mehreren Startframes (sechs Treffer
//   à 1,0 stehen als "1.0"), Zeilen mit "Early"/"Normal", die trotzdem zwei Treffer
//   nacheinander meinen, und UFD-Lücken ("--", "**"), deren Wert aus SmashWiki kommt
//   und in der Notiz des Schritts steht.
// - Jede Meldung vor einer Korrektur am rohen UFD-Block nachrechnen, nie die
//   Skriptausgabe übernehmen.
// - Kommando-Eingaben (623a …) und frei belegbare Specials (Miis) ordnet das Skript
//   nicht zu; die stehen am Ende des Berichts nicht und müssen von Hand geprüft werden.
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

/*
 * Höchstzahl der Wiederholungen eines Mehrfachtreffers. Die erste Fassung ließ
 * jede Zahl bis 16 zu, und damit ging Pikachus Nair mit 12 % durch (4 × 1,7 + 3,5),
 * obwohl UFD nur vier Startframes nennt: drei Multi-Treffer und den Abschluss.
 * Quelle der Zahl ist die Startframe-Spalte ("3/9/15/21"). Steht dort "..." oder
 * nur ein Wert, zählt das Aktivfenster mit Rehit-Rate ("11—25 (rehit: 3)").
 * Ist beides nicht ablesbar, bleibt es bei 16. Weniger Treffer als möglich sind
 * immer erlaubt, in einer Route verbinden oft nicht alle.
 */
function maxWiederholungen({ name, row }) {
  const felder = row.split('|').map((s) => s.trim());
  const labelFinal = /\bFinal\b/i.test(row);
  // Die Startframes stehen direkt hinter dem Namen, nicht irgendwo in der Zeile:
  // Knockback-Spalten wie "6/13" sähen sonst genauso aus.
  const i = felder.indexOf(name);
  const start = i >= 0 && /^\d+(\/\d+)+$/.test(felder[i + 1] ?? '') ? felder[i + 1] : null;
  if (start) {
    const n = start.split('/').length;
    return labelFinal ? Math.max(1, n - 1) : n;
  }
  const rehit = row.match(/(\d+)—(\d+)(?:\/\d+(?:—\d+)?)?\s*\(rehit:\s*(\d+)\)/);
  if (rehit) return Math.floor((Number(rehit[2]) - Number(rehit[1])) / Number(rehit[3])) + 1;
  return 16;
}

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
      const maxK = maxWiederholungen(r);
      for (let k = 1; k <= maxK; k++) {
        if (ns.length >= 3) c.add(ns[0] + k * ns[1] + ns[ns.length - 1]);
        // Dreiteilige Zeilen wie „Multi/Final/Landing“ (Falco Fair) oder „Multi Front/Multi Back/Final“
        // (Zelda Nair): k Multi-Treffer plus einer der beiden anderen Werte als Abschluss.
        if (ns.length === 3) {
          c.add(k * ns[0] + ns[1]);
          c.add(k * ns[0] + ns[2]);
          c.add(k * ns[1] + ns[2]);
        }
        if (ns.length === 2) {
          // Nur Multi-Treffer, ohne Abschluss: Landung mitten im Move.
          c.add(k * ns[0]);
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
