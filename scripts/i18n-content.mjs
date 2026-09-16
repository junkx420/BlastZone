// Übersetzte Inhalte (Etappe 4) auslesen und prüfen.
//
//   node scripts/i18n-content.mjs extract <tier>   deutsche Texte eines Tiers kompakt ausgeben
//   node scripts/i18n-content.mjs check            fehlende, veraltete und verwaiste Übersetzungen
//   node scripts/i18n-content.mjs accept <tier>    aktuelle deutsche Fassung als übersetzt vermerken
//   node scripts/i18n-content.mjs stats            Zeichen pro Tier
//
// Tiers: s-plus, s-minus, a-plus, a, a-minus, b-plus, b-minus, c-plus, c-minus, d-plus, d-minus, e, taglines
//
// Lädt die TypeScript-Daten über Vites ssrLoadModule, ohne Server und ohne Konfigurationsdatei.
// `lock.json` hält pro Guide und Combo einen Hash der deutschen Texte zum Zeitpunkt der Übersetzung.
// Ändert sich das Deutsche, meldet `check` den Eintrag als veraltet.
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

const ROOT = path.resolve(import.meta.dirname, '..');
const LOCK = path.join(ROOT, 'src/i18n/content/lock.json');

const TIERS = {
  's-plus': null,
  's-minus': ['guides-s-minus', 'S_MINUS_GUIDES'],
  'a-plus': ['guides-a-plus', 'A_PLUS_GUIDES'],
  a: ['guides-a', 'A_GUIDES'],
  'a-minus': ['guides-a-minus', 'A_MINUS_GUIDES'],
  'b-plus': ['guides-b-plus', 'B_PLUS_GUIDES'],
  'b-minus': ['guides-b-minus', 'B_MINUS_GUIDES'],
  'c-plus': ['guides-c-plus', 'C_PLUS_GUIDES'],
  'c-minus': ['guides-c-minus', 'C_MINUS_GUIDES'],
  'd-plus': ['guides-d-plus', 'D_PLUS_GUIDES'],
  'd-minus': ['guides-d-minus', 'D_MINUS_GUIDES'],
  e: ['guides-e', 'E_GUIDES'],
};

/** Wörter, an denen man einen deutschen Titel oder Move-Namen erkennt. Move-Namen selbst sind englisch. */
const GERMAN = new RegExp(
  '[äöüÄÖÜß„]|\\b(mit|und|oder|aus|auf|an|am|im|vom|zum|zur|ohne|bei|gegen|nach|über|unter|Sprung|Wurf|Landung|Kante|Schild|Boden|Luft|Treffer|Griff|gehalten|halten|voll|kurz|lang|Amboss|geladen|aufgeladen|Plattform|Wand|Stufe|ungeladen|Konter|Kiste|Rakete|Bombe|Klinge|Schwert|Pfeil|Feuer|Blitz|Sprint|Kette|Spitze|Schleife|Linker|Rechter|fallend|steigend|nahe|der|die|das|den|dem|des|erster|zweiter|letzter|beide|alle|Rolle|Ecke|hinten|vorne|oben|unten|Ladung|setzen|loslassen|dann|leicht|gefallen|landen|angetippt|nur|wieder|direkt|sofort|fangen|werfen|ziehen|zünden|laden|springen|drücken|Knopf|abbrechen|treffen|schießen|als|bodennahe[rn]?|erneut|Schritt|vor|zurück|weiter|Wechsel|wechseln|Angriff|Ende|Anfang|kleben|Kopf|Fuß|Bein|umgedreht|zwei|drei|vier|fünf|einmal|zweimal|Schuss|Schüsse|Gegner|Lanze|Lanzenspitze|Landende[rn]?|Glocke|Bumerang|aufnehmen|Feuerpfeil|getippt|aufstellen|Enterhaken|Tontaube|umgedrehte[rn]?|Kompletter|Nachlaufen|Nadeln|Vorlaufen)\\b',
  'i',
);
const SEPARATOR = String.fromCharCode(1);

function hash(parts) {
  let h = 0x811c9dc5;
  for (const ch of parts.join(SEPARATOR)) {
    h ^= ch.codePointAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}
const guideHash = (g) => hash([...g.meta, '|', ...g.strengths, '|', ...g.weaknesses]);
const comboHash = (c) => hash([c.title, c.windowLabel ?? '', c.tip, ...c.steps.flatMap((s) => [s.label ?? '', s.note ?? ''])]);

const server = await createServer({
  root: ROOT,
  configFile: false,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, ws: false },
  optimizeDeps: { noDiscovery: true, include: [] },
});
const load = (p) => server.ssrLoadModule(p);

try {
  const { S_MINUS_GUIDES } = await load('/src/data/guides-s-minus.ts');
  const { GUIDES } = await load('/src/data/guides.ts');
  const { FIGHTERS } = await load('/src/data/fighters.ts');
  const sMinus = new Set(S_MINUS_GUIDES.map((g) => g.slug));

  const guidesOf = async (tier) => {
    if (tier === 's-plus') return GUIDES.filter((g) => !sMinus.has(g.slug));
    const [file, name] = TIERS[tier];
    return (await load(`/src/data/${file}.ts`))[name];
  };
  const textsOf = async (tier) => {
    const file = path.join(ROOT, `src/i18n/content/${tier}.ts`);
    if (!fs.existsSync(file)) return {};
    return (await load(`/src/i18n/content/${tier}.ts`)).TEXT;
  };
  const { ECHO_GUIDES } = await load('/src/i18n/content/apply.ts');
  const lock = fs.existsSync(LOCK) ? JSON.parse(fs.readFileSync(LOCK, 'utf8')) : {};

  const [cmd, arg] = process.argv.slice(2);

  if (cmd === 'stats') {
    let total = 0;
    for (const tier of Object.keys(TIERS)) {
      const guides = await guidesOf(tier);
      const chars = guides.reduce(
        (n, g) =>
          n +
          [...g.meta, ...g.strengths, ...g.weaknesses].join('').length +
          g.combos.reduce((m, c) => m + c.tip.length + (c.windowLabel ?? '').length + c.steps.reduce((k, s) => k + (s.note ?? '').length, 0), 0),
        0,
      );
      total += chars;
      console.log(`${tier.padEnd(8)} ${String(guides.length).padStart(3)} Guides ${String(guides.reduce((n, g) => n + g.combos.length, 0)).padStart(4)} Combos ${String(chars).padStart(7)} Zeichen`);
    }
    const taglines = FIGHTERS.reduce((n, f) => n + f.tagline.length, 0);
    console.log(`taglines ${FIGHTERS.length} Fighter ${taglines} Zeichen`);
    console.log(`gesamt   ${total + taglines} Zeichen`);
  } else if (cmd === 'terms') {
    // Titel und Move-Namen, die die Erkennung nicht als deutsch markiert. Zum Durchsehen, ob sie wirklich englisch sind.
    const seen = new Set();
    for (const tier of arg ? [arg] : Object.keys(TIERS)) {
      for (const g of await guidesOf(tier)) {
        for (const c of g.combos) {
          for (const text of [c.title, ...c.steps.map((s) => s.label ?? '')]) {
            if (text && !GERMAN.test(text) && !seen.has(text)) seen.add(text);
          }
        }
      }
    }
    console.log([...seen].sort().join('\n'));
  } else if (cmd === 'extract') {
    if (arg === 'taglines') {
      for (const f of FIGHTERS) console.log(`${f.slug}: ${f.tagline}`);
    } else {
      if (!TIERS[arg] && arg !== 's-plus') throw new Error(`Unbekanntes Tier: ${arg}`);
      for (const g of await guidesOf(arg)) {
        console.log(`\n## ${g.slug}${ECHO_GUIDES[g.slug] ? ` (Echo von ${ECHO_GUIDES[g.slug]})` : ''}`);
        g.meta.forEach((p, i) => console.log(`M${i}: ${p}`));
        console.log(`S: ${g.strengths.join(' | ')}`);
        console.log(`W: ${g.weaknesses.join(' | ')}`);
        for (const c of g.combos) {
          const flag = GERMAN.test(c.title) ? ' [DE]' : '';
          console.log(`- ${c.id}: ${c.title}${flag}`);
          if (c.windowLabel) console.log(`  F: ${c.windowLabel}`);
          console.log(`  T: ${c.tip}`);
          c.steps.forEach((s, i) => {
            const parts = [];
            if (s.label && GERMAN.test(s.label)) parts.push(`L: ${s.label}`);
            if (s.note) parts.push(`N: ${s.note}`);
            if (parts.length) console.log(`  ${i} ${parts.join('  ')}`);
          });
        }
      }
    }
  } else if (cmd === 'check' || cmd === 'accept') {
    const problems = { fehlt: [], veraltet: [], verwaist: [], deutsch: [] };
    const nextLock = { ...lock };
    const tiers = cmd === 'accept' ? [arg] : Object.keys(TIERS);
    // Hashes aller Combos, damit Echos ohne eigenen Eintrag prüfen können, ob das Original gleich lautet.
    const allCombos = new Map();
    for (const tier of Object.keys(TIERS)) for (const g of await guidesOf(tier)) for (const c of g.combos) allCombos.set(c.id, comboHash(c));

    for (const tier of tiers) {
      const guides = await guidesOf(tier);
      const texts = await textsOf(tier);
      const known = new Set(guides.map((g) => g.slug));
      for (const slug of Object.keys(texts)) if (!known.has(slug)) problems.verwaist.push(`${tier}: ${slug}`);

      for (const g of guides) {
        const t = texts[g.slug];
        const base = ECHO_GUIDES[g.slug];
        const gKey = `guide:${g.slug}`;
        const lists = t && t.meta?.length === g.meta.length && (base || (t.strengths?.length === g.strengths.length && t.weaknesses?.length === g.weaknesses.length));
        if (!lists) problems.fehlt.push(`${g.slug}: Meta, Stärken oder Schwächen`);
        else if (cmd === 'accept') nextLock[gKey] = guideHash(g);
        else if (lock[gKey] !== guideHash(g)) problems.veraltet.push(`${g.slug}: Meta, Stärken oder Schwächen`);

        const ids = new Set(g.combos.map((c) => c.id));
        for (const id of Object.keys(t?.combos ?? {})) if (!ids.has(id)) problems.verwaist.push(`${g.slug}: ${id}`);

        for (const c of g.combos) {
          const own = t?.combos?.[c.id];
          const baseId = base ? c.id.replace(g.slug, base) : null;
          if (!own && baseId && allCombos.get(baseId) === comboHash(c)) continue; // Echo nutzt das Original
          const key = `combo:${c.id}`;
          const missing = [];
          if (!own?.tip) missing.push('Tipp');
          if (c.windowLabel && !own?.windowLabel) missing.push('Fenster');
          c.steps.forEach((s, i) => {
            if (s.note && !own?.steps?.[i]?.note) missing.push(`Notiz ${i}`);
            if (s.label && GERMAN.test(s.label) && !own?.steps?.[i]?.label) problems.deutsch.push(`${c.id}: Schritt ${i} „${s.label}“`);
          });
          if (GERMAN.test(c.title) && !own?.title) problems.deutsch.push(`${c.id}: Titel „${c.title}“`);
          for (const i of Object.keys(own?.steps ?? {})) if (!c.steps[Number(i)]) problems.verwaist.push(`${c.id}: Schritt ${i}`);
          if (missing.length) problems.fehlt.push(`${c.id}: ${missing.join(', ')}`);
          else if (cmd === 'accept') nextLock[key] = comboHash(c);
          else if (lock[key] !== comboHash(c)) problems.veraltet.push(c.id);
        }
      }
    }

    if (cmd === 'accept') {
      const sorted = Object.fromEntries(Object.entries(nextLock).sort(([a], [b]) => a.localeCompare(b)));
      fs.writeFileSync(LOCK, `${JSON.stringify(sorted, null, 1)}\n`);
      console.log(`lock.json: ${Object.keys(sorted).length} Einträge.`);
    }
    for (const [kind, list] of Object.entries(problems)) {
      if (!list.length) continue;
      console.log(`\n${kind} (${list.length}):`);
      list.slice(0, 60).forEach((l) => console.log(`  ${l}`));
      if (list.length > 60) console.log(`  … und ${list.length - 60} weitere`);
    }
    // Taglines
    const { TAGLINES } = fs.existsSync(path.join(ROOT, 'src/i18n/content/taglines.ts')) ? await load('/src/i18n/content/taglines.ts') : { TAGLINES: {} };
    const noTagline = FIGHTERS.filter((f) => !TAGLINES[f.slug]).map((f) => f.slug);
    if (cmd === 'check' && noTagline.length) console.log(`\nTaglines fehlen (${noTagline.length}): ${noTagline.slice(0, 20).join(', ')}${noTagline.length > 20 ? ' …' : ''}`);
    if (cmd === 'check') process.exitCode = problems.fehlt.length || problems.veraltet.length || problems.verwaist.length ? 1 : 0;
  } else {
    console.log('Aufruf: node scripts/i18n-content.mjs extract <tier> | check | accept <tier> | stats');
  }
} finally {
  await server.close();
}
