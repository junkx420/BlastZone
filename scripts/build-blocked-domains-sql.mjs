// Erzeugt supabase/migrations/0002_blocked_email_domains.sql aus der Liste in
// src/shared/disposable-email.ts, damit Server-Check und Datenbank-Sperre
// dieselben Domains kennen. Nach jeder Änderung an der Liste neu ausführen:
//   node scripts/build-blocked-domains-sql.mjs
// Node 22.6+ liest die .ts-Datei direkt.
import { writeFileSync } from 'node:fs';
import { DISPOSABLE_DOMAINS } from '../src/shared/disposable-email.ts';

const values = [...DISPOSABLE_DOMAINS]
  .sort()
  .map((d) => `  ('${d.replace(/'/g, "''")}')`)
  .join(',\n');

const sql = `-- Automatisch erzeugt von scripts/build-blocked-domains-sql.mjs. Nicht von Hand ändern.
-- Quelle: src/shared/disposable-email.ts (${DISPOSABLE_DOMAINS.size} Domains)

insert into public.blocked_email_domains (domain) values
${values}
on conflict (domain) do nothing;
`;

writeFileSync(new URL('../supabase/migrations/0002_blocked_email_domains.sql', import.meta.url), sql);
console.log(`${DISPOSABLE_DOMAINS.size} Domains geschrieben.`);
