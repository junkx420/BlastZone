// Exportiert alle Combo-Routen aus den TypeScript-Guides als JSON.
// Übersetzt src/data/guide*.ts mit dem TypeScript des Projekts nach js/*.mjs.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const HERE = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(ROOT, 'package.json'));
const ts = require('typescript');

const OUT = join(HERE, 'js');
mkdirSync(OUT, { recursive: true });

const files = readdirSync(join(ROOT, 'src/data')).filter((f) => /^guide.*\.ts$/.test(f));
for (const f of files) {
  const src = readFileSync(join(ROOT, 'src/data', f), 'utf8');
  let js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  js = js.replace(/from '(\.\/[^']+)'/g, "from '$1.mjs'");
  writeFileSync(join(OUT, f.replace(/\.ts$/, '.mjs')), js);
}

const { GUIDES } = await import(pathToFileURL(join(OUT, 'guides.mjs')).href);
const { LATE_GUIDES } = await import(pathToFileURL(join(OUT, 'guides-late.mjs')).href);
const guides = [...GUIDES, ...LATE_GUIDES];

const out = guides.map((g) => ({
  slug: g.slug,
  ufd: g.sources.filter((s) => s.url.includes('ultimateframedata.com')).map((s) => s.url.split('/').pop()),
  combos: g.combos.map((c) => ({ id: c.id, title: c.title, steps: c.steps })),
}));
writeFileSync(join(HERE, 'combos.json'), JSON.stringify(out, null, 1));
const steps = out.reduce((n, g) => n + g.combos.reduce((m, c) => m + c.steps.length, 0), 0);
console.log(`${out.length} Guides, ${out.reduce((n, g) => n + g.combos.length, 0)} Routen, ${steps} Schritte`);
console.log('UFD-Slugs:', [...new Set(out.flatMap((g) => g.ufd))].length);
