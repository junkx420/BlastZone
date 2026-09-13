/**
 * Ersetzt Gedankenstriche in den sichtbaren Texten der Datendateien.
 *
 *   node scripts/strich-kur.mjs           # Trockenlauf, schreibt nichts
 *   node scripts/strich-kur.mjs --anwenden
 *
 * Warum ein Skript und keine Handarbeit: Es sind rund 370 Stellen in
 * `guides*.ts` und `fighters.ts`. Warum trotzdem mit Regeln und nicht mit einem
 * platten Suchen-und-Ersetzen: Ein Gedankenstrich steht mal für einen
 * Satzbruch, mal für einen Zahlenbereich. Stumpf durch Punkt ersetzt entstünde
 * Murks wie "20. 90 %".
 *
 * `videos.ts` bleibt ausgenommen: Dort stehen echte YouTube-Titel. Die zu
 * ändern hiesse, die Daten zu verfälschen.
 *
 * Kommentarzeilen bleiben ebenfalls unberührt. Die liest kein Besucher, und
 * jede Änderung dort wäre nur Rauschen in der Historie.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const anwenden = process.argv.includes('--anwenden');
const ordner = join(process.cwd(), 'src', 'data');

const dateien = [
  ...readdirSync(ordner)
    .filter((f) => f.startsWith('guides') && f.endsWith('.ts'))
    .map((f) => join(ordner, f)),
  join(ordner, 'fighters.ts'),
];

/** Zeile ist ein Kommentar und damit tabu. */
const istKommentar = (zeile) => /^\s*(\*|\/\/|\/\*)/.test(zeile);

const STRICH = /[–—]/;

function kur(zeile) {
  let neu = zeile;

  // 1. Zahlenbereiche: "20–90 %", "80–89", "ranks 30–34" -> Bindestrich.
  neu = neu.replace(/(\d)\s*[–—]\s*(\d)/g, '$1-$2');

  // 2. Strichpaar als Einheit: "Die Monado-Arts – Buster, Smash, Jump – stellen ..."
  //    Das ist eine Apposition, kein Satzende. Diese Regel muss ZUERST laufen:
  //    Sonst sieht Regel 4 nur den oeffnenden Strich, findet dahinter ein grosses
  //    Wort und setzt einen Punkt. Ergebnis waere "Die Monado-Arts. Buster, ...,
  //    stellen ...", also ein zerrissener Satz. Genau daran ist Byleths Tagline
  //    im Trockenlauf aufgefallen.
  //    Begrenzt auf kurze Einschuebe ohne Satzzeichen, damit die Regel nicht
  //    versehentlich ueber zwei unabhaengige Striche hinweggreift.
  //    Das Muster frisst auch ein vorhandenes Komma und die Leerzeichen dahinter
  //    und setzt beides selbst wieder. Ohne das entsteht "Jump,stellen": Der
  //    Zwischenraum vor dem schliessenden Strich gehoert zum Treffer und waere
  //    sonst verloren.
  neu = neu.replace(/\s+[–—]\s+([^–—.!?;:]{1,70}?)\s+[–—]\s*,?\s*/gu, ', $1, ');

  // 3. Einzelner schliessender Strich, dem ein Komma folgt:
  //    "... Frame Data – die meisten Moves treffen vor Frame 10 –, ein starkes ..."
  //    Das Komma steht schon da, der Strich muss nur weg. Diese Regel muss vor
  //    Regel 4 laufen: Die verlangt einen Buchstaben hinter dem Strich und
  //    liesse diese Stellen sonst unberuehrt stehen.
  neu = neu.replace(/\s*[–—]\s*,/g, ',');

  // 4. Satzbruch: " – " wird zu ", " wenn es klein weitergeht, sonst ". ".
  //    Deutsche Nebensätze hängen meist klein an; ein Punkt davor waere falsch.
  neu = neu.replace(/\s+[–—]\s+(\p{Ll})/gu, ', $1');
  neu = neu.replace(/\s+[–—]\s+(\p{Lu})/gu, '. $1');

  return neu;
}

let dateienGeaendert = 0;
let zeilenGeaendert = 0;
const proben = [];
const uebrig = [];

for (const pfad of dateien) {
  const zeilen = readFileSync(pfad, 'utf8').split('\n');
  let geaendert = false;

  const neue = zeilen.map((zeile, i) => {
    if (!STRICH.test(zeile) || istKommentar(zeile)) return zeile;
    const neu = kur(zeile);
    if (neu === zeile) return zeile;
    geaendert = true;
    zeilenGeaendert++;
    if (proben.length < 8) {
      proben.push(`  ${pfad.split(/[\\/]/).pop()}:${i + 1}\n    vorher:  ${zeile.trim().slice(0, 100)}\n    nachher: ${neu.trim().slice(0, 100)}`);
    }
    if (STRICH.test(neu)) uebrig.push(`${pfad.split(/[\\/]/).pop()}:${i + 1}  ${neu.trim().slice(0, 90)}`);
    return neu;
  });

  if (geaendert) {
    dateienGeaendert++;
    if (anwenden) writeFileSync(pfad, neue.join('\n'), 'utf8');
  }
}

console.log(anwenden ? '== ANGEWENDET ==' : '== TROCKENLAUF, nichts geschrieben ==');
console.log(`${zeilenGeaendert} Zeilen in ${dateienGeaendert} Dateien`);
console.log('\nProben:');
proben.forEach((p) => console.log(p));
if (uebrig.length) {
  console.log(`\nNoch Striche uebrig in ${uebrig.length} Zeilen (Regel greift nicht):`);
  uebrig.slice(0, 10).forEach((u) => console.log('  ' + u));
}
