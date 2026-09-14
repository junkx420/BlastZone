// Gegenstück zu audit.mjs: findet Schritte, die bei einem Mehrfachtreffer (UFD „Multi/Final“)
// weniger als die volle Summe tragen und keine Notiz haben, die das erklärt.
// Ablauf: node extract.mjs && node unterzaehlt.mjs, Ergebnis in unterzaehlt.txt.
//
// Ein Treffer hier ist KEIN Fehlerbeweis. In manchen Routen verbinden wirklich nicht alle
// Treffer (Fox Up Air nur mit dem ersten Kick, Drag-downs, Landungen mitten im Move).
// Jede Zeile gegen die Quelle der Route und die rohe UFD-Zeile prüfen.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const guides = JSON.parse(readFileSync(join(HERE, 'combos.json'), 'utf8'));
const ufd = JSON.parse(readFileSync(join(HERE, 'ufd.json'), 'utf8'));

const TOKEN = {
  jab: /^Rapid Jab/i, da: /^Dash Attack/i,
  fsmash: /^Forward Smash/i, usmash: /^Up Smash/i, dsmash: /^Down Smash/i,
  nair: /^Neutral Air(?! Dodge)/i, fair: /^Forward Air/i, bair: /^Back Air/i, uair: /^Up Air/i, dair: /^Down Air/i,
  nb: /^Neutral B/i, sb: /^Side B/i, ub: /^Up B/i, db: /^Down B/i,
  fthrow: /^Forward Throw/i, bthrow: /^Back(ward)? Throw/i, uthrow: /^Up Throw/i, dthrow: /^Down Throw/i,
};
const POKEMON = { Squirtle: 'squirtle', Ivysaur: 'ivysaur', Charizard: 'charizard' };
const nums = (s) => (s.match(/\d+(?:\.\d+)?/g) || []).map(Number).filter((n) => n > 0 && n < 100);

/** Volle Summe, wenn die Zeile eindeutig Multi + Final mit ablesbarer Trefferzahl ist. */
function voll({ name, row, dmg }) {
  if (!/\bMulti\b/i.test(row) || !/\bFinal\b/i.test(row)) return null;
  const ns = nums(dmg);
  if (ns.length !== 2) return null;
  const felder = row.split('|').map((s) => s.trim());
  const i = felder.indexOf(name);
  let multi = null;
  if (i >= 0 && /^\d+(\/\d+)+$/.test(felder[i + 1] ?? '')) multi = felder[i + 1].split('/').length - 1;
  // Auch "4—15/23—24 (rehit: 4)": Das Rehit gilt dem ersten Fenster, das zweite ist der Abschluss.
  const rehit = row.match(/(\d+)—(\d+)(?:\/\d+(?:—\d+)?)?\s*\(rehit:\s*(\d+)\)/);
  if (multi === null && rehit) multi = Math.floor((rehit[2] - rehit[1]) / rehit[3]) + 1;
  if (!multi) return null;
  return { multi, basis: multi * ns[0] + ns[1], ns };
}

const out = [];
for (const g of guides) {
  for (const combo of g.combos) {
    const prefix = combo.title.split(':')[0];
    const slug = POKEMON[prefix] ?? g.ufd[0];
    const moves = ufd[slug];
    if (!moves) continue;
    combo.steps.forEach((s, idx) => {
      if (!s.dmg || s.note) return;
      const tok = [...s.input.trim().split(/\s+/)].reverse().find((t) => TOKEN[t]);
      if (!tok) return;
      const rows = moves.filter((m) => TOKEN[tok].test(m.name));
      if (rows.length !== 1) return;
      const v = voll(rows[0]);
      if (!v) return;
      const soll = Math.round(v.basis * 1.2);
      if (s.dmg >= soll) return;
      out.push(`${g.slug.padEnd(18)} ${combo.id}#${idx} "${s.label ?? s.input}" dmg=${s.dmg}, voll=${soll} (${v.multi} × ${v.ns[0]} + ${v.ns[1]})`);
    });
  }
}
writeFileSync(join(HERE, 'unterzaehlt.txt'), out.join('\n'));
console.log(`${out.length} Schritte unter der vollen Summe ohne Notiz.`);
