# Blastzone

Competitive-Hub für Super Smash Bros. Ultimate: durchsuchbares Roster aller 86 Slots, UltRank-Tier-Liste 2026, Fighter-Profile und Combo-Routen mit Input-Notation.

## Starten

```bash
npm install
npm run dev
```

Der Dev-Server lauscht auf allen Interfaces (`server.host`), ist also auch unter `http://<LAN-IP>:5173` von anderen Geräten im Netz erreichbar. `npm run build` prüft die Typen und baut nach `dist/`. Das Routing läuft über den Hash (`#/fighter/luigi`), der Build funktioniert daher auf jedem statischen Host ohne Rewrite-Regeln.

## Stack

- Vite + TypeScript, kein UI-Framework
- GSAP (ScrollTrigger, Flip) für Reveals, Parallax, Roster-Filter und den Combo-Player
- Lenis für Smooth Scroll
- View Transitions API für Seitenwechsel: Tile-Artwork und Name morphen in den Fighter-Header
- Schrift: Archivo (Google Fonts) mit Breitenachse 62–125 %

Bei `prefers-reduced-motion` entfallen Smooth Scroll, Parallax, Replays und Seitenübergänge.

## Struktur

```
src/
  data/         fighters, tiers (UltRank 2026), guides (Combos), notation, search
  lib/          dom (escaping html-Tag), router, motion, color (Kontrast, Heat-Ramp)
  components/   shell, palette (/ oder Strg+K), sigil (generiertes Artwork),
                fighterTile, tierBadge, notation (Keycaps), comboPlayer, icons
  pages/        home, fighter, tiers, system, notFound
  styles/       tokens → base → layout → components → pages (Cascade Layers)
```

## Design-System

Leitmotiv ist die Prozentanzeige aus dem Spiel. Ihre Farbskala (`--dmg-0` bis `--dmg-200`) färbt den Damage-Meter, die Tier-Stufen (S+ rot, E grau) und die Hero-Headline. Jeder Fighter setzt `--accent` und `--accent-2` inline; `accentVars()` hebt die Textvariante automatisch auf mindestens 4,5:1 Kontrast. Die komplette Übersicht steht unter `#/system`.

## Daten pflegen

**Tier-Liste** – `src/data/tiers.ts`. Quelle: UltRank-Tier-Liste #4 vom 6. Mai 2026 (Patch 13.0.4), abgeglichen mit der Tabelle auf SmashWiki. Echo-Paare teilen sich dort einen Rang, deshalb 82 Ränge für 86 Slots.

**Combo-Routen** – `src/data/guides.ts` und `src/data/guides-s-minus.ts`. Profile mit Routen: alle Fighter aus S+ (Steve, Sonic, Snake, Mr. Game & Watch, R.O.B., Min Min, Kazuya) und S− (Diddy Kong, Pyra/Mythra, Luigi, Peach, Daisy, Yoshi, Fox, Joker) sowie Mario, Ryu und Captain Falcon. Daisy übernimmt Peachs Routen über `echoGuide()`, da beide seit Version 3.0.0 spielerisch identisch sind.

Regeln für neue Routen:

- Jede Route braucht eine `source` (SmashWiki, Game8, EventHubs …), die die Route dokumentiert.
- `window: [von, bis]` nur, wenn die Quelle Zahlen nennt; `[160, null]` heißt „ab 160 %“. Sonst `windowLabel` mit der Einordnung der Quelle („niedrige Prozente“).
- `kills: true` nur, wenn die Quelle die Route als Kill- bzw. KO-Confirm beschreibt.
- `ztd: true` nur, wenn die Quelle die Route ausdrücklich als Zero-to-Death führt. Die Route trägt dann statt „Kill-Confirm“ das Badge „0-to-Death“.
- `dmg` = Basisschaden von [Ultimate Frame Data](https://ultimateframedata.com) × 1,2 (1v1), gerundet.

```ts
{ input: 'grab', dmg: 0 },
{ input: 'dthrow', dmg: 11, note: 'Ab 160 % hat Snake +6 Frames.' },
{ input: 'utilt', dmg: 17 },
```

Tokens stehen in `src/data/notation.ts` (`sh`, `fh`, `jump`, `nair`, `utilt`, `dthrow`, `ub`, `sbh` …). Command-Inputs in Numpad-Notation: `623a` = → ↓ ↘ + A.

**Artwork** – Die offiziellen Fighter-Bilder stammen von smashbros.com (© Nintendo) und liegen **verkleinert und selbst gehostet** unter `public/fighters/`: 84 Gesichtsausschnitte (270×164, zusammen 0,9 MB) für Kacheln, Tier-Liste, Suche und HUD, dazu 84 Ganzkörper-Render für Profil-Header, Hero-Replay und Rang 1. Die Render sind auf 1000 px Höhe skaliert und als WebP gespeichert – aus 151 MB Originalen werden 9 MB, die größte Datei misst 203 KB statt 4,12 MB. Erzeugt wurden sie mit `scripts/build-fighter-images.mjs` (sharp); die Pfade baut `src/data/art.ts` zusammen. `sigil.ts` zeichnet dahinter die farbige Bühne; lädt ein Bild nicht, zeigt die Bühne stattdessen die Fighter-Nummer. Abweichende URLs lassen sich pro Fighter in `Fighter.art` hinterlegen.

## Rechtliches

Fanprojekt ohne Verbindung zu Nintendo, Bandai Namco oder Sora Ltd. Fighter- und Seriennamen gehören ihren Rechteinhabern.
