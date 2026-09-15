// Lasttest: viele gleichzeitige Nutzer gegen die echten API-Routen.
//
//   node scripts/lasttest.mjs            50 Nutzer
//   node scripts/lasttest.mjs 200        200 Nutzer
//
// Startet einen eigenen Dev-Server auf Port 5199 mit dem Speicher-Mock
// (BLASTZONE_FORCE_MOCK=1). Das echte Supabase-Projekt wird nie angefasst: keine
// Testkonten, keine Bestätigungsmails, keine verbrauchten Limits.
//
// Geprüft wird nicht nur, ob es schnell ist, sondern ob unter Gleichzeitigkeit
// nichts durcheinandergerät:
// - Jeder Nutzer sieht am Ende genau seine Lesezeichen, nicht die eines anderen.
// - Fünf gleichzeitige gleiche Lesezeichen ergeben genau eines (keine Dubletten).
// - Drei gleichzeitige Löschungen desselben Kommentars: genau eine gelingt.
// - Sieben gleichzeitige Kommentare eines Nutzers: höchstens fünf kommen durch (Limit 5/min).
// - Kein einziger 5xx.
//
// Jeder virtuelle Nutzer hat eine eigene IP (x-forwarded-for), wie echte Besucher.
// Lokal ist dieser Header frei setzbar; auf Vercel überschreibt Vercel ihn.

import { createServer } from 'vite';

process.env.BLASTZONE_FORCE_MOCK = '1';
const USERS = Number(process.argv[2] ?? 50);
const PORT = 5199;
const BASE = `http://localhost:${PORT}`;

const originalInfo = console.info;
console.info = () => {}; // Der Mock schreibt Bestätigungslinks, hier unnötig.
const originalLog = console.log;
console.log = (...args) => {
  if (typeof args[0] === 'string' && args[0].startsWith('{"t":"api"')) return; // Anfrage-Logs nicht in die Ausgabe
  originalLog(...args);
};

const server = await createServer({ server: { port: PORT, strictPort: true, hmr: false }, logLevel: 'error' });
await server.listen();

const timings = [];
const statuses = new Map();
const problems = [];

/*
 * Höchstens 64 offene Verbindungen gleichzeitig. Windows lehnt bei ein paar Hundert
 * Verbindungsaufbauten in derselben Millisekunde mit ECONNREFUSED ab. Das ist eine
 * Grenze des lokalen Rechners, nicht der App; auf Vercel steht davor ein Proxy,
 * der genauso bündelt. Gemessen wird ab dem Absenden, Wartezeit in der Schlange zählt mit.
 */
const MAX_OPEN = 64;
let open = 0;
const queue = [];
const acquire = () => (open < MAX_OPEN ? (open++, Promise.resolve()) : new Promise((r) => queue.push(r)));
const release = () => {
  const next = queue.shift();
  if (next) next();
  else open--;
};

async function request(ip, method, path, { body, cookie } = {}) {
  const started = performance.now();
  await acquire();
  let res;
  try {
    res = await fetch(`${BASE}/api/${path}`, {
      method,
      headers: {
        'content-type': 'application/json',
        origin: BASE,
        'x-forwarded-for': ip,
        ...(cookie ? { cookie } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch (err) {
    release();
    statuses.set('netz', (statuses.get('netz') ?? 0) + 1);
    problems.push(`${method} ${path} -> Netzfehler ${err.cause?.code ?? err.message}`);
    return { status: 0, json: {}, cookies: [] };
  }
  const json = await res.json().catch(() => ({}));
  release();
  const ms = performance.now() - started;
  timings.push(ms);
  statuses.set(res.status, (statuses.get(res.status) ?? 0) + 1);
  if (res.status >= 500) problems.push(`${method} ${path} -> ${res.status}`);
  const cookies = res.headers.getSetCookie().map((c) => c.split(';')[0]).filter((c) => !c.endsWith('='));
  return { status: res.status, json, cookies };
}

const store = () => globalThis.__bzMock;

async function virtualUser(n) {
  const ip = `10.${Math.floor(n / 250)}.${n % 250}.7`;
  const name = `last${n}`;
  const email = `${name}@blastzone-lasttest.de`;
  await request(ip, 'GET', 'auth/session');
  await request(ip, 'GET', 'comments?fighter=fox');

  const signup = await request(ip, 'POST', 'auth/signup', { body: { email, password: 'Lasttest1!', username: name, website: '' } });
  if (signup.status !== 201) return problems.push(`signup ${name}: ${signup.status} ${JSON.stringify(signup.json)}`);
  const tokenHash = [...store().confirmations].find(([, e]) => e === email)?.[0];
  if (!tokenHash) return problems.push(`kein Bestätigungstoken für ${name}`);
  const confirm = await request(ip, 'POST', 'auth/confirm', { body: { tokenHash } });
  if (confirm.status !== 200) return problems.push(`confirm ${name}: ${confirm.status}`);
  const cookie = confirm.cookies.join('; ');

  const mine = [`fox-a${n}`, `mario-b${n}`, `ness-c${n}`];
  await Promise.all(mine.map((comboId) => request(ip, 'POST', 'bookmarks', { cookie, body: { comboId } })));
  await request(ip, 'POST', 'comments', { cookie, body: { fighter: 'fox', body: `Lasttest von ${name}` } });
  await request(ip, 'PATCH', 'profile', { cookie, body: { mainFighter: 'fox' } });
  await request(ip, 'DELETE', `bookmarks?combo=${mine[2]}`, { cookie });

  const list = await request(ip, 'GET', 'bookmarks', { cookie });
  const got = [...(list.json.ids ?? [])].sort().join(',');
  const want = mine.slice(0, 2).sort().join(',');
  if (got !== want) problems.push(`Lesezeichen von ${name}: erwartet ${want}, bekommen ${got}`);
  return cookie;
}

async function raceChecks(cookie) {
  const ip = '10.99.99.1';
  // Fünfmal dasselbe Lesezeichen gleichzeitig
  await Promise.all(Array.from({ length: 5 }, () => request(ip, 'POST', 'bookmarks', { cookie, body: { comboId: 'fox-dupe-test' } })));
  const list = await request(ip, 'GET', 'bookmarks', { cookie });
  const count = (list.json.ids ?? []).filter((id) => id === 'fox-dupe-test').length;
  if (count !== 1) problems.push(`Dubletten-Test: ${count} gleiche Lesezeichen statt 1`);

  // Dreimal denselben Kommentar gleichzeitig löschen
  const created = await request('10.99.99.2', 'POST', 'comments', { cookie, body: { fighter: 'ness', body: 'wird gelöscht' } });
  const id = created.json.comment?.id;
  const deletes = await Promise.all(Array.from({ length: 3 }, (_, i) => request(`10.99.99.${3 + i}`, 'DELETE', `comments?id=${id}`, { cookie })));
  const okDeletes = deletes.filter((d) => d.status === 200).length;
  if (okDeletes !== 1) problems.push(`Lösch-Test: ${okDeletes} erfolgreiche Löschungen statt 1`);

  // Sieben Kommentare gleichzeitig, das Limit liegt bei 5 pro Minute (der von oben zählt schon mit)
  const burst = await Promise.all(Array.from({ length: 7 }, (_, i) => request(`10.99.98.${i}`, 'POST', 'comments', { cookie, body: { fighter: 'mario', body: `Burst ${i}` } })));
  const accepted = burst.filter((b) => b.status === 201).length;
  if (accepted > 4) problems.push(`Rate-Limit-Test: ${accepted} Kommentare im Burst angenommen, erlaubt wären höchstens 4`);
  return { count, okDeletes, accepted };
}

const pct = (arr, p) => {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length))] ?? 0;
};

const started = performance.now();
const cookies = await Promise.all(Array.from({ length: USERS }, (_, i) => virtualUser(i)));
const phase1 = performance.now() - started;

const readers = performance.now();
await Promise.all(Array.from({ length: USERS * 4 }, (_, i) => request(`10.200.${Math.floor(i / 250)}.${i % 250}`, 'GET', 'comments?fighter=fox')));
const phase2 = performance.now() - readers;

const firstCookie = cookies.find((c) => typeof c === 'string');
const race = firstCookie ? await raceChecks(firstCookie) : null;

const foxComments = store().comments.filter((c) => c.fighter === 'fox').length;
if (foxComments !== USERS) problems.push(`Kommentare zu Fox: ${foxComments} statt ${USERS}`);

console.log = originalLog;
console.info = originalInfo;
console.log(`\nLasttest mit ${USERS} gleichzeitigen Nutzern (Speicher-Mock, Port ${PORT})`);
console.log(`  Phase 1, Anmelden bis Lesezeichen: ${(phase1 / 1000).toFixed(1)} s`);
console.log(`  Phase 2, ${USERS * 4} gleichzeitige Leser: ${(phase2 / 1000).toFixed(1)} s`);
console.log(`  Anfragen: ${timings.length}, p50 ${pct(timings, 50).toFixed(0)} ms, p95 ${pct(timings, 95).toFixed(0)} ms, p99 ${pct(timings, 99).toFixed(0)} ms`);
console.log(`  Statuscodes: ${[...statuses].sort().map(([s, n]) => `${s}×${n}`).join(', ')}`);
if (race) console.log(`  Gleichzeitigkeit: Dubletten ${race.count}/1, Löschungen ${race.okDeletes}/1, Burst angenommen ${race.accepted}/≤4`);
console.log(problems.length ? `\n${problems.length} PROBLEME:\n  ${problems.slice(0, 20).join('\n  ')}` : '\nKeine Probleme.');

await server.close();
process.exit(problems.length ? 1 : 0);
