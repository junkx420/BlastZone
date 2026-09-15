# Betrieb

Alles, was Blastzone im Livebetrieb stabil hält: Grenzen, Überwachung, Fehlersuche, Backups, Lasttest. Code-Details stehen jeweils in den genannten Dateien.

## Stand der 20 Punkte (15.09.2026)

| Punkt | Stand | Wo |
|---|---|---|
| Rate Limiting | Grundlimit pro IP auf jeder Route, dazu enge Limits für Login, Registrierung, Bestätigung, Kommentare, Lesezeichen, Profil, Konto, Health, Fehlerberichte | `api/_lib/route.ts`, `api/_lib/ratelimit.ts`, Routen |
| API-Limits | Body 4 KB (Kommentar 8 KB), Kommentar 1000 Zeichen, 20 Kommentare pro Seite, 500 Lesezeichen pro Konto, 9 s Deadline | Tabelle unten |
| Kostenbremsen | Im Dashboard, siehe unten. Code verursacht keine laufenden Kosten | Supabase, Vercel, Upstash |
| Fehlerbehandlung | Jede Route liefert JSON mit Fehler-ID; Frontend zeigt Fehler mit Ausweg; Absturzseite beim Rendern | `route.ts`, `src/components/states.ts`, `src/main.ts` |
| Ladezustände | Skelette für Combos und Picks, Status bei Kommentaren, Knöpfe mit „Wird …“ | Seiten, `authDialog.ts`, `comments.ts` |
| Leere Zustände | Roster-Filter, Suche, Kommentare, gespeicherte Combos, Fighter ohne Combos | Seiten |
| Fehlgeschlagene Anfragen | GET automatisch bis zu zweimal wiederholt, Schreiben nie; Guide-Daten dreimal; veraltete Chunks laden die Seite einmal neu; Offline-Hinweis | `src/services/api.ts`, `guide-index.ts`, `src/lib/errors.ts` |
| API-Timeouts | Browser 12 s lesen, 15 s schreiben; Server gegenüber Supabase 4 s lesen, 7 s schreiben; MX 2,5 s; Route 9 s | `api.ts`, `supabase.ts`, `mx.ts`, `route.ts` |
| Doppelte Abos, Zahlungen | Entfällt, kostenloses Projekt. Doppelte Einträge verhindern Primärschlüssel und gesperrte Knöpfe | `bookmarks` PK, Formulare |
| DB-Abfragen | Nur benötigte Spalten, Filter auf den Besitzer, Seiten per id-Cursor, Namensprüfung über den Index | `api/_lib/supabase.ts` |
| DB-Indizes | `comments (fighter_slug, id desc)`, `bookmarks (user_id, created_at desc)`, `profiles lower(username)` | `supabase/migrations/0003_indexes_pagination.sql` |
| Große Ergebnisse paginieren | Kommentare 20 pro Seite mit „Ältere laden“ | `api/comments.ts`, `comments.ts` |
| Dateien komprimieren | Vercel liefert HTML, JS, CSS und API-Antworten mit Brotli (live geprüft); Bilder sind WebP | `vercel.json` |
| Upload-Größe | Keine Uploads. Jede Anfrage auf 4 KB begrenzt, Vercel-Obergrenze 4,5 MB | `readJson` in `http.ts` |
| Wiederholte Anfragen cachen | Gehashte Assets 1 Jahr immutable, Bilder 30 Tage, Kommentare 30 s im Browser, gleichzeitige gleiche GETs gebündelt, JWKS 10 min | `vercel.json`, `api.ts`, `jwt.ts` |
| Uptime-Monitoring | `/api/health` bereit, Monitor im Dashboard anlegen | unten |
| Fehler-Logging | JSON-Logzeile pro Anfrage, Browserfehler über `/api/log` | unten |
| Gleichzeitige Nutzer | `node scripts/lasttest.mjs 200`: keine Probleme | unten |
| Backup-Restore | Ablauf beschrieben, noch nicht ausgeführt (braucht DB-Passwort und `pg_dump`) | unten |

## Grenzen

| Was | Grenze |
|---|---|
| Jede API-Anfrage | 240 pro Minute pro IP |
| Schreibende Anfragen | 60 pro Minute pro IP |
| Login | 30 pro 15 min pro IP, 5 pro 15 min pro IP und Adresse |
| Registrierung | 5 pro Stunde pro IP |
| Bestätigungslink | 10 pro 10 min pro IP |
| Mail erneut senden | 5 pro Stunde pro IP, 1 pro 5 min pro Adresse |
| Kommentare | 5 pro Minute und 100 pro Tag pro Konto, 10 pro Minute pro IP, lesen 120 pro Minute pro IP |
| Lesezeichen | 60 Änderungen pro Minute pro Konto, 500 insgesamt |
| Profil ändern | 30 pro Minute pro Konto |
| Konto löschen | 3 pro Stunde |
| Health | 30 pro Minute pro IP |
| Fehlerberichte | 20 pro 10 min pro IP, 5 verschiedene pro Seitenaufruf |

Ohne Upstash zählt jede Vercel-Instanz für sich. Für echte Obergrenzen über alle Instanzen `UPSTASH_REDIS_REST_URL` und `UPSTASH_REDIS_REST_TOKEN` bei Vercel eintragen.

## Kostenbremsen (einmal im Dashboard prüfen)

Der Code startet keine bezahlten Dienste. Trotzdem gehört an jeden Anbieter eine Obergrenze, falls jemand die Seite mit Anfragen flutet:

- **Supabase:** Organization → Billing. Im Free-Plan kann nichts berechnet werden, das Projekt wird bei Überschreitung gedrosselt. Falls je auf Pro gewechselt wird: **Spend Cap eingeschaltet lassen.**
- **Vercel:** Settings → Billing. Hobby ist kostenlos und pausiert bei Überschreitung. Auf Pro unter **Spend Management** eine Obergrenze mit Pausieren setzen.
- **Upstash** (falls genutzt): Free-Tier oder beim Datenbanktyp ein Budget setzen.
- **Supabase Auth → Rate Limits:** Mails pro Stunde niedrig halten. Das schützt auch das Gmail-Konto, über das die Bestätigungsmails laufen.

## Uptime-Monitoring

`GET https://blast-zone.vercel.app/api/health`

- 200 mit `"status":"ok"`, wenn Supabase Auth und Datenbank antworten, sonst 503.
- Antwort enthält Laufzeiten und die Commit-Kennung, keine Konfiguration.

Einrichten, etwa bei UptimeRobot oder Better Stack (beide kostenlos):

1. Neuer HTTP-Monitor auf die Adresse oben, Intervall 5 Minuten.
2. Alarm, wenn der Status nicht 200 ist, zwei Fehlschläge hintereinander.
3. Benachrichtigung an die eigene Mail.

Ein zweiter Monitor auf `https://blast-zone.vercel.app/` prüft, ob die Seite selbst ausgeliefert wird, auch wenn Supabase hängt.

## Fehler finden

Vercel → Projekt → **Logs**. Jede API-Anfrage schreibt eine JSON-Zeile:

```
{"t":"api","id":"b874b-1789…","path":"/api/comments","method":"GET","status":200,"ms":84}
```

- **Meldet jemand eine Fehler-ID** (steht bei 5xx in der Meldung): in den Logs nach der ID suchen.
- **Nur Serverfehler:** nach `"status":5` filtern.
- **Abstürze im Browser:** nach `"t":"client"` filtern. Enthält Fehlertext, Stack, Seite ohne Parameter und Build-Kennung.
- **Supabase langsam oder weg:** nach `"t":"supabase"` filtern (Timeouts, Wiederholungen).

## Migration 0003

Einmal im Supabase-Dashboard → SQL Editor den Inhalt von `supabase/migrations/0003_indexes_pagination.sql` ausführen. Der Code funktioniert auch vorher, er fällt bei der Namensprüfung auf die langsamere Abfrage zurück und schreibt dann `username_taken fehlt` ins Log.

Prüfen, ob die Indizes greifen:

```sql
explain select id from public.comments where fighter_slug = 'fox' order by id desc limit 21;
-- erwartet: Index Scan using comments_fighter_id_idx

select public.username_taken('Fox');
```

## Backup und Wiederherstellung

Im Free-Plan gibt es im Dashboard keine Sicherung, die sich herunterladen und zurückspielen lässt. Deshalb eine eigene, einmal im Monat und vor jeder riskanten Migration.

**Voraussetzungen:** [Supabase CLI](https://supabase.com/docs/guides/cli) und PostgreSQL-Client (`psql`). Das Datenbank-Passwort steht unter Project Settings → Database. Es ist ein Geheimnis: nur als Umgebungsvariable im eigenen Terminal, nie in eine Datei im Repository, nie an Claude.

**Sichern** (Verbindungszeichenkette unter Connect → Session pooler):

```bash
supabase db dump --db-url "$SUPABASE_DB_URL" -f backup/rollen.sql --role-only
supabase db dump --db-url "$SUPABASE_DB_URL" -f backup/schema.sql
supabase db dump --db-url "$SUPABASE_DB_URL" -f backup/daten.sql --use-copy --data-only
```

`backup/` steht nicht im Repository. Die Dateien enthalten Mailadressen und Passwort-Hashes der Nutzer: verschlüsselt ablegen.

**Wiederherstellung testen** (ohne das Live-Projekt anzufassen):

1. Neues, leeres Supabase-Projekt anlegen, etwa „blastzone-restore-test“, Region Frankfurt.
2. Dort nacheinander `rollen.sql`, `schema.sql`, `daten.sql` einspielen:
   `psql "$TEST_DB_URL" -f backup/rollen.sql -f backup/schema.sql -c "SET session_replication_role = replica" -f backup/daten.sql`
3. In beiden Projekten dieselben Zählungen ausführen und vergleichen:
   ```sql
   select (select count(*) from auth.users) as nutzer,
          (select count(*) from public.profiles) as profile,
          (select count(*) from public.comments) as kommentare,
          (select count(*) from public.bookmarks) as lesezeichen;
   ```
4. Stichprobe: Mit einem Testkonto im Testprojekt anmelden (URL und Publishable Key des Testprojekts in einer lokalen `.env`), Kommentar lesen, Lesezeichen sehen.
5. Testprojekt löschen. Ergebnis mit Datum hier unten eintragen.

| Datum | Nutzer | Kommentare | Lesezeichen | Ergebnis |
|---|---|---|---|---|
| noch nicht getestet | | | | |

## Lasttest

```bash
node scripts/lasttest.mjs 200
```

Startet einen eigenen Dev-Server auf Port 5199 mit dem Speicher-Mock. Das echte Supabase-Projekt bleibt unberührt. Simuliert Registrierung, Bestätigung, Lesezeichen, Kommentar, Profil und 800 gleichzeitige Leser, dazu drei Wettlauf-Prüfungen.

Letzter Lauf, 15.09.2026, 200 Nutzer: 3017 Anfragen, kein 5xx, jeder Nutzer sah genau seine Lesezeichen, fünf gleichzeitige gleiche Lesezeichen ergaben eines, drei gleichzeitige Löschungen genau eine, Kommentar-Burst an der Grenze abgeschnitten. Die hohen p95-Zeiten lokal stammen vom MX-Check: Der lokale DNS antwortet nicht, jede Registrierung wartet 2,5 s. Auf Vercel antwortet DNS normal.

Gegen die Live-Seite nicht mit vielen Nutzern testen: Das würde echte Mails auslösen und die Limits von Supabase verbrauchen.
