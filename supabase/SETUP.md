# Supabase einrichten

Einmalige Schritte, bevor Konten live gehen. Reihenfolge einhalten.

## 1. Projekt anlegen

- Neues Projekt auf supabase.com.
- **Region: Frankfurt (eu-central-1).** Die Datenschutzerklärung (`src/pages/privacy.ts`) nennt ausdrücklich ein Rechenzentrum in Frankfurt. Andere Region = Text anpassen.
- Datenbank-Passwort sicher ablegen, es wird im Code nirgends gebraucht.

## 2. Datenbank

Im Dashboard unter **SQL Editor** nacheinander komplett ausführen:

1. `supabase/migrations/0001_blastzone.sql` (Tabellen, Row Level Security, Trigger, Kontolöschung)
2. `supabase/migrations/0002_blocked_email_domains.sql` (gesperrte Wegwerf-Domains)
3. `supabase/migrations/0003_indexes_pagination.sql` (Indizes für Kommentar-Seiten und Lesezeichen, Namensprüfung über den Index). Prüfabfragen dazu in `docs/BETRIEB.md`.
4. `supabase/migrations/0004_startgg.sql` (start.gg-Verknüpfung und Placement-Cache, beide nur für den Besitzer lesbar). Dazu bei Vercel `STARTGG_TOKEN` und `STARTGG_CACHE_KEY` setzen, siehe `.env.example`.
5. `supabase/migrations/0005_startgg_verification.sql` (Spalten für „Mit start.gg bestätigen“: start.gg-ID, Zeitpunkt, Signatur). Dazu bei Vercel `STARTGG_OAUTH_CLIENT_ID` und `STARTGG_OAUTH_CLIENT_SECRET`. Läuft der Code vor der Migration, funktioniert die Verknüpfung weiter, nur Bestätigen meldet „nicht verfügbar“ und das Function-Log nennt 0005.

Danach unter **Table Editor** prüfen: `profiles`, `comments`, `bookmarks`, `blocked_email_domains` zeigen alle das Schloss für aktives RLS.

Wird die Domainliste in `src/shared/disposable-email.ts` erweitert: `node scripts/build-blocked-domains-sql.mjs` und die neue 0002 erneut ausführen (doppelte Einträge werden übersprungen).

## 3. Authentication → Sign In / Providers → Email

- **Enable Email provider:** an
- **Confirm email:** **an** (das ist das Double Opt-In, ohne diese Einstellung kann sich jeder sofort anmelden)
- **Secure email change:** an
- **Minimum password length:** 8
- **Password requirements:** „Lowercase, uppercase letters, digits and symbols“ oder mindestens „digits and symbols“, je nachdem, was das Dashboard anbietet. Formular und Server prüfen selbst: 8 Zeichen, Groß- und Kleinbuchstaben, Zahl, Sonderzeichen. Das deckt jede dieser Supabase-Einstellungen ab. Wird Supabase noch strenger gestellt, `checkPassword` in `src/shared/account-rules.ts` nachziehen, sonst zeigt das Formular grüne Haken und Supabase lehnt trotzdem ab.
- **Leaked password protection** (falls im Tarif verfügbar): an

## 4. Authentication → URL Configuration

- **Site URL:** `https://blast-zone.vercel.app` (bzw. die echte Domain)
- **Redirect URLs:** dieselbe Domain, für lokale Tests zusätzlich `http://localhost:5173`

## 5. Authentication → Emails → Templates → „Confirm signup“

Der Standard-Link würde Tokens im URL-Fragment zurückgeben, und das kollidiert mit dem Hash-Routing. Deshalb den Link im Template ersetzen durch:

```html
<a href="{{ .SiteURL }}/#/bestaetigen?token_hash={{ .TokenHash }}">E-Mail-Adresse bestätigen</a>
```

Die Seite `#/bestaetigen` bestätigt erst nach einem Klick auf den Button. Absicht: Virenscanner und Mail-Programme rufen Links oft vorab auf und würden den Einmal-Token sonst verbrauchen.

Betreff und Text dürfen deutsch sein, etwa: „Bestätige dein Blastzone-Konto“.

## 6. Authentication → Rate Limits

Supabase begrenzt selbst, etwa Mails pro Stunde und Anmeldeversuche. Wichtig: Alle Anfragen kommen von den Vercel-Servern, nicht direkt aus den Browsern. Limits, die Supabase pro IP zählt, sehen also die IPs von Vercel. Deshalb zählt `api/_lib/ratelimit.ts` zusätzlich pro echter Client-IP. Die Supabase-Limits nicht zu niedrig ansetzen, sonst sperren sich alle Nutzer gegenseitig.

- **Mails:** Der eingebaute Mailversand von Supabase ist nur für Tests gedacht und stark gedrosselt. Für den Livebetrieb unter **Authentication → Emails → SMTP Settings** einen eigenen SMTP-Dienst eintragen und diesen in der Datenschutzerklärung nennen.

## 7. API-Keys an Vercel

Unter **Project Settings → API Keys**:

- Projekt-URL → `SUPABASE_URL`
- **Publishable Key** (`sb_publishable_…`) → `SUPABASE_PUBLISHABLE_KEY`. Ältere Projekte haben stattdessen einen `anon`-Key, der geht als `SUPABASE_ANON_KEY`.

Den **Secret Key** (`sb_secret_…`, früher service_role) **nicht** eintragen, weder lokal noch bei Vercel. Er wird nirgends gebraucht, auch nicht auf dem Server, und umgeht Row Level Security. Ist er einmal irgendwo gelandet, wo er nicht hingehört (Chat, Screenshot, Repo), in Supabase widerrufen und neu erzeugen.

Sicherungen im Code, falls doch etwas verrutscht:

- Steht im Feld `SUPABASE_PUBLISHABLE_KEY` ein Secret Key (oder ein ganz anderer Wert, etwa die URL), startet das Backend nicht. `/api/auth/session` meldet `"available":false`, der Grund steht im Function-Log, der Key selbst nie.
- Der Browser bekommt keinen Key. Vite reicht nur Variablen mit dem Präfix `BLASTZONE_PUBLIC_` ans Bundle, auch `VITE_…` nicht.
- Der Build bricht ab, wenn im Bundle ein `sb_secret_…` oder ein service_role-JWT steht.

Bei Vercel unter **Project Settings → Environment Variables** für Production (und Preview, falls gewünscht) setzen, danach **neu deployen**: Geänderte Variablen gelten erst für den nächsten Deploy. Der Server akzeptiert auch die Namen `SUPABASE_ANON_KEY`, `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY`. Fehlen sie, antwortet `/api/auth/session` mit `"available":false`, und im Function-Log steht, welche Variable fehlt. Lokal dieselben Werte in `.env` (Vorlage `.env.example`). Ohne `.env` läuft der Dev-Server mit einem Speicher-Mock, der den Bestätigungslink ins Terminal schreibt.

## 8. Optional: Upstash Redis

Nur nötig, wenn das Rate Limiting über alle Vercel-Instanzen hinweg gelten soll (empfohlen für den Livebetrieb):

- Datenbank bei upstash.com anlegen, Region möglichst EU.
- `UPSTASH_REDIS_REST_URL` und `UPSTASH_REDIS_REST_TOKEN` bei Vercel eintragen.
- In der Datenschutzerklärung steht der Absatz dazu bereits als bedingt formuliert.

## Prüfen nach dem Deploy

1. Registrieren mit `test@mailinator.com` → „Bitte nutze eine echte E-Mail-Adresse.“
2. Registrieren mit echter Adresse → Mail kommt an, Link führt auf `#/bestaetigen`.
3. Vor dem Klick anmelden → „Bestätige zuerst deine E-Mail-Adresse.“
4. Nach dem Klick: angemeldet, Theme-Umschalter in der Leiste sichtbar.
5. Kommentar schreiben, in einem privaten Fenster ohne Anmeldung ansehen: sichtbar, Eingabefeld gesperrt.
6. Im Browser unter Entwicklertools → Application → Cookies: `bz_at` und `bz_rt` mit HttpOnly, Secure, Pfad `/api`.
7. `document.cookie` in der Konsole: leer.
