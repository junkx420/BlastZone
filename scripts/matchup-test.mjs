/**
 * Prüft die Matchup-Kennzahlen: erst das Lesen der UFD-Schreibweisen an
 * ausgedachten Werten, dann Mario als bekannter Fall, dann alle 86 Fighter
 * darauf, dass jede Zeile des Vergleichs überhaupt eine Zahl bekommt.
 *
 * Start: node scripts/matchup-test.mjs
 */
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// fileURLToPath statt .pathname: Der Projektordner hat ein Leerzeichen, das sonst als %20 stehen bleibt.
const WURZEL = fileURLToPath(new URL('..', import.meta.url));
const { frueheste, beste, setProfil, vorteil, SPRUNGANSATZ } = await import(pathToFileURL(join(WURZEL, 'src/data/matchup.ts')).href);

let fehler = 0;
const pruefe = (name, ist, soll) => {
  const gleich = JSON.stringify(ist) === JSON.stringify(soll);
  if (!gleich) {
    fehler += 1;
    console.log('FEHLER', name, '-> ist', JSON.stringify(ist), 'soll', JSON.stringify(soll));
  }
};

async function laden(slug) {
  const modul = await import(pathToFileURL(join(WURZEL, 'src/data/frames', `${slug}.ts`)).href);
  return modul.FRAMES;
}

/* 1. UFD-Schreibweisen */
pruefe('einzelner Wert', frueheste('4'), 4);
pruefe('mehrere Hitboxen', frueheste('16/17—20/21'), 16);
pruefe('Bereich', frueheste('16-76'), 16);
pruefe('Anmerkung dahinter', frueheste('2 (+19)'), 2);
pruefe('abgeschnitten', frueheste('3...'), 3);
pruefe('fehlender Wert', frueheste(undefined), null);
pruefe('ohne Zahl', frueheste('Start of Reflect'), null);
pruefe('Summe bleibt draussen', frueheste('5+15'), null);
pruefe('Summe mit Bereich', frueheste('16-30 + 4'), null);
pruefe('Plus in Klammern zaehlt nicht als Summe', frueheste('2 (+19)'), 2);

pruefe('Schild einzeln', beste('-14'), -14);
pruefe('Schild mehrere', beste('-12/-12/-13'), -12);
pruefe('Schild positiv', beste('+2'), 2);
pruefe('Schild fehlt', beste(undefined), null);

/* 2. Mario und Pit, nachgerechnet an der Quelle */
const mario = setProfil((await laden('mario')).sets[0]);
pruefe('Mario schnellster Boden', mario.boden, { wert: 2, move: 'Jab 1' });
pruefe('Mario schnellster Aerial', mario.aerial, { wert: 3, move: 'Neutral Air' });
pruefe('Mario Out of Shield', mario.oos, { wert: 3, move: 'Up B (Super Jump Punch)' });
pruefe('Mario Landing Lag des Nair', mario.landing, { wert: 6, move: 'Neutral Air' });

/* Pit hat bei UFD keinen Startup am Up B: Dann muss der Grab auf 6 gewinnen, nicht der Nair auf 4 plus 3. */
const pit = setProfil((await laden('pit')).sets[0]);
pruefe('Pit Out of Shield', pit.oos, { wert: 6, move: 'Grab' });
/* Pits Jab 3 startet in 3 Frames, ist aber nur nach Jab 1 und 2 zu haben. Aus dem Stand zaehlt der Jab 1 auf 4. */
pruefe('Pit schnellster Boden ohne Folgeschlaege', pit.boden, { wert: 4, move: 'Jab 1' });
pruefe('Sprungansatz', SPRUNGANSATZ, 3);

/* Kazuyas Bodenkit steht bei UFD unter misc. Der Dragon Uppercut (`5+15`) darf den Jab nicht verdraengen. */
const kazuya = setProfil((await laden('kazuya')).sets[0]);
pruefe('Kazuya schnellster Boden', kazuya.boden, { wert: 6, move: 'Jab 1' });
pruefe('Kazuya am Schild', kazuya.schild?.wert, -9);

/* 3. Vorteil */
pruefe('kleiner ist besser', vorteil({ wert: 3, move: 'a' }, { wert: 6, move: 'b' }, false), 'a');
pruefe('groesser ist besser', vorteil({ wert: -8, move: 'a' }, { wert: -14, move: 'b' }, true), 'a');
pruefe('gleichauf', vorteil({ wert: 5, move: 'a' }, { wert: 5, move: 'b' }, false), null);
pruefe('eine Seite fehlt', vorteil(null, { wert: 5, move: 'b' }, false), null);

/* 4. Alle Fighter: keine Zeile darf leer bleiben */
const dateien = readdirSync(join(WURZEL, 'src/data/frames')).filter((n) => n.endsWith('.ts'));
const luecken = [];
for (const datei of dateien) {
  const daten = await laden(datei.replace('.ts', ''));
  daten.sets.forEach((satz, i) => {
    const profil = setProfil(satz);
    const leer = ['boden', 'aerial', 'oos', 'schild'].filter((k) => profil[k] === null);
    if (leer.length) luecken.push(`${daten.slug}${satz.label ? ' / ' + satz.label : ''} (Satz ${i + 1}): ${leer.join(', ')}`);
  });
}

console.log(`Fighter geprueft: ${dateien.length}`);
if (luecken.length) {
  fehler += luecken.length;
  console.log('Luecken:');
  luecken.forEach((l) => console.log('  ' + l));
} else {
  console.log('Keine Luecken: jede Zeile hat fuer jeden Fighter eine Zahl.');
}

console.log(fehler ? `${fehler} Fehler` : 'Alles gruen');
process.exit(fehler ? 1 : 0);
