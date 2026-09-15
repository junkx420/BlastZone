import { html } from '../lib/dom';
import { link } from '../lib/router';
import { OPERATOR, operatorAddress } from './imprint';
import type { PageView } from './types';

/**
 * Datenschutzerklärung.
 *
 * Der Text beschreibt exakt das, was die Seite technisch tut. Stand 14.09.2026,
 * mit Konten: Cookies nur nach dem Anmelden (zwei HttpOnly-Sitzungscookies für
 * /api), kein localStorage, kein Tracking, Schriften lokal, vor dem Klick auf
 * ein Video keine Anfrage an Dritte. Ändert sich daran etwas, muss dieser Text
 * mitgeändert werden. Eine Datenschutzerklärung, die etwas anderes behauptet als
 * der Code tut, ist schlimmer als keine.
 *
 * VOR DEM LIVEGANG ABGLEICHEN (siehe supabase/SETUP.md):
 *   - Supabase-Region muss Frankfurt (eu-central-1) sein, sonst stimmt der
 *     Abschnitt „Konten“ nicht.
 *   - Upstash nur erwähnen, wenn es wirklich eingerichtet ist. Der Absatz steht
 *     unten und ist als bedingt formuliert.
 *   - Eigener SMTP-Dienst für die Bestätigungsmails? Dann hier nennen.
 *
 * Verantwortlicher (Art. 13 Abs. 1 lit. a DSGVO) kommt aus OPERATOR in
 * src/pages/imprint.ts, damit Impressum und Erklärung nie auseinanderlaufen.
 * Neue Funktionen mit Personenbezug (Spielerprofile, Pinnwand, Nachrichten)
 * brauchen hier einen eigenen Absatz, bevor sie live gehen.
 */
export function privacyPage(): PageView {
  return {
    title: 'Datenschutzerklärung | Blastzone',
    markup: html`<div class="page legal">
      <section class="container page-head">
        <h1>Datenschutzerklärung</h1>
        <p>
          Blastzone ist ein privates Fanprojekt ohne Analyse- oder Tracking-Dienste. Wer die Seite nur liest,
          bekommt keine Cookies. Wer ein Konto anlegt, gibt ein paar Daten dafür her. Was genau anfällt, steht hier.
        </p>
      </section>

      <section class="container legal__body">
        <h2>Verantwortlich</h2>
        <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Seite (Art. 4 Nr. 7 DSGVO):</p>
        ${operatorAddress()}
        <p>
          E-Mail: <a href="mailto:${OPERATOR.email}">${OPERATOR.email}</a>. Für Auskunft, Berichtigung oder Löschung
          deiner Daten genügt eine Mail an diese Adresse.
        </p>

        <h2>Hosting und Server-Protokolle</h2>
        <p>
          Die Seite wird bei Vercel Inc. (USA) gehostet. Beim Abruf verarbeitet Vercel technisch notwendige
          Verbindungsdaten in Server-Protokollen: IP-Adresse, Zeitpunkt der Anfrage, aufgerufene Adresse,
          übertragene Datenmenge, Browser- und Betriebssystemkennung sowie die zuvor besuchte Seite. Ohne diese
          Verarbeitung lässt sich eine Website technisch nicht ausliefern.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, also das berechtigte Interesse am sicheren und stabilen
          Betrieb des Angebots. Vercel ist dabei Auftragsverarbeiter nach Art. 28 DSGVO. Für die Übermittlung in
          die USA stützt sich Vercel auf Standardvertragsklauseln. Einzelheiten und Speicherdauer richten sich
          nach den Datenschutzangaben von Vercel.
        </p>
        <p>
          Stürzt im Browser etwas ab, schickt die Seite eine kurze Fehlermeldung an ihren eigenen Server: Fehlertext,
          aufgerufene Seite ohne Parameter, Browserkennung und Version der Seite. Mailadressen und Zeichenketten,
          die wie Zugangsschlüssel aussehen, werden dabei geschwärzt. Die Meldung enthält keine Nutzer-ID und landet
          nur in den Server-Protokollen oben. Zweck ist, Fehler zu finden, die nur auf fremden Geräten auftreten.
          Rechtsgrundlage ist ebenfalls Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2>Kein Tracking, Cookies nur mit Konto</h2>
        <p>
          Es gibt keine Reichweitenmessung, keine Analyse-Werkzeuge und keine Werbenetzwerke. Im lokalen Speicher
          des Browsers legt die Seite nichts ab.
        </p>
        <p>
          Cookies entstehen erst, wenn du dich anmeldest: zwei Sitzungscookies (<code>bz_at</code> und
          <code>bz_rt</code>), die dich angemeldet halten. Sie sind für JavaScript nicht lesbar, gehen nur an die
          Schnittstelle dieser Seite und an keinen Dritten. <code>bz_at</code> läuft nach etwa einer Stunde ab,
          <code>bz_rt</code> nach 30 Tagen. Beim Abmelden werden beide gelöscht. Nur während einer Bestätigung über
          start.gg kommen zwei kurzlebige Cookies dazu, mehr dazu unten bei start.gg. Weil die Anmeldung ohne sie
          technisch nicht funktioniert, braucht es dafür keine Einwilligung (§ 25 Abs. 2 Nr. 2 TDDDG) und kein
          Cookie-Banner.
        </p>

        <h2>Konten, Kommentare und gespeicherte Combos</h2>
        <p>
          Für ein Konto speichern wir deine E-Mail-Adresse, einen Benutzernamen und dein Passwort, dieses nur als
          Hash, nie im Klartext. Dazu kommt, was du selbst anlegst: deinen Main-Fighter, das Farbschema, gespeicherte
          Combos und Kommentare, jeweils mit Zeitpunkt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, die
          Bereitstellung des Kontos, das du anlegst.
        </p>
        <p>
          <strong>Kommentare sind öffentlich.</strong> Jeder Besucher sieht sie zusammen mit deinem Benutzernamen,
          deinem Main-Fighter und dem Zeitpunkt. E-Mail-Adresse und gespeicherte Combos sieht niemand außer dir.
        </p>
        <p>
          <strong>Spielerprofile sehen nur angemeldete Mitglieder.</strong> Wer angemeldet ist, kann auf deinen Namen
          klicken und sieht dann eine Profilseite mit Benutzername, Main-Fighter, deinen Secondaries (falls gewählt),
          dem Monat deiner Registrierung, der Anzahl deiner Kommentare und deinen letzten Kommentaren. E-Mail-Adresse,
          gespeicherte Combos und deine start.gg-Verknüpfung erscheinen dort nicht.
        </p>
        <p>
          <strong>Ins Community-Verzeichnis kommst du nur, wenn du es selbst einschaltest.</strong> Dann erscheinst du
          in der Liste unter <code>#/community</code> mit Benutzername, Main, Secondaries und Monat der Registrierung,
          ebenfalls nur für angemeldete Mitglieder. Abschalten geht jederzeit im Profil, du verschwindest dann sofort
          aus der Liste. Secondaries und die Einstellung für das Verzeichnis liegen bei Supabase und werden mit dem
          Konto gelöscht. Rechtsgrundlage für Spielerprofil und Verzeichnis ist Art. 6 Abs. 1 lit. b DSGVO, die
          Community-Funktionen des Kontos.
        </p>
        <p>
          Die Daten liegen bei Supabase Inc. als Auftragsverarbeiter nach Art. 28 DSGVO, in einem Rechenzentrum in
          der EU (Frankfurt am Main). Supabase verschickt auch die Mail, mit der du deine Adresse bestätigst. Erst
          nach dieser Bestätigung ist das Konto nutzbar (Double Opt-In).
        </p>
        <p>
          Zum Schutz vor Missbrauch prüfen wir bei der Registrierung, ob die Domain deiner Adresse Mail empfangen kann
          und nicht zu einem Wegwerf-Dienst gehört. Dafür wird nur die Domain (etwa <code>gmail.com</code>) per DNS
          abgefragt, nicht die ganze Adresse. Gegen das Durchprobieren von Passwörtern zählen wir Anmeldeversuche
          pro IP-Adresse. Gespeichert wird dafür ein Hashwert statt der Adresse selbst, und nach spätestens
          24 Stunden ist der Zähler weg. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, das berechtigte Interesse an einem
          sicheren Betrieb. Falls dieser Zähler über den Dienst Upstash (Upstash Inc.) läuft, ist Upstash dafür
          Auftragsverarbeiter.
        </p>
        <p>
          Du kannst dein Konto jederzeit im Profil selbst löschen. Konto, Profil, Kommentare und gespeicherte Combos
          werden dabei sofort und vollständig entfernt.
        </p>

        <h2>Verknüpfung mit start.gg</h2>
        <p>
          Im Profil kannst du freiwillig dein Profil auf der Turnierplattform start.gg verknüpfen. Wir speichern dann
          die Adresse dieses Profils (etwa <code>user/1a2b3c4d</code>), den dort angezeigten Spielernamen und den
          Zeitpunkt. Beim Verknüpfen fragt unser Server bei start.gg nach, ob es das Profil gibt. Diese Anfrage
          stellt der Server, nicht dein Browser; start.gg erfährt dabei nur die Profiladresse, weder deine
          IP-Adresse noch dein Blastzone-Konto.
        </p>
        <p>
          Wählst du „Mit start.gg anmelden“ bzw. „Mit start.gg bestätigen“, leitet dich die Seite zu start.gg weiter.
          Dort meldest du dich bei start.gg selbst an; dein start.gg-Passwort sehen wir nie. start.gg schickt dich mit
          einem Einmal-Code zurück, den unser Server gegen einen Zugangsschlüssel tauscht. Mit diesem Schlüssel fragt
          der Server genau einmal ab, welches start.gg-Konto angemeldet ist (Berechtigung <code>user.identity</code>:
          Konto-ID, Profiladresse, Spielername). Den Schlüssel speichern wir nicht, er wird sofort verworfen. Wir
          speichern zusätzlich nur die start.gg-Konto-ID, den Zeitpunkt der Bestätigung und eine Prüfsumme unseres
          Servers. Für die Dauer der Anmeldung setzt die Seite zwei technisch notwendige Cookies
          (<code>bz_sg_state</code> und <code>bz_sg_result</code>), die höchstens zehn Minuten gelten und danach bzw.
          nach Abschluss gelöscht werden. Wie start.gg bei der Anmeldung mit deinen Daten umgeht, regelt dessen eigene
          Datenschutzerklärung.
        </p>
        <p>
          Für die Liste „Meine Turniere“ fragt unser Server bei start.gg deine öffentlichen Ergebnisse in Turnieren
          zu Super Smash Bros. Ultimate ab: Turniername, Event, Datum, Ort oder Online, deine Platzierung und die
          Teilnehmerzahl. Damit start.gg nicht bei jedem Aufruf gefragt wird, speichern wir dieses Ergebnis bis zu
          24 Stunden bei Supabase zwischen. Das Turnierlogo lädt dein Browser beim Anzeigen direkt von start.gg
          (<code>images.start.gg</code>); dabei sieht start.gg wie jede aufgerufene Seite deine IP-Adresse.
        </p>
        <p>
          Die Verknüpfung und die zwischengespeicherten Ergebnisse sieht nur du. Sie sind nicht Teil deines
          öffentlichen Profils und stehen auch nicht neben deinen Kommentaren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO, die Funktion, die du selbst einschaltest. Du kannst die Verknüpfung jederzeit im Profil lösen;
          Verknüpfung und zwischengespeicherte Ergebnisse werden dann sofort gelöscht, ebenso beim Löschen deines
          Kontos.
        </p>

        <h2>Schriften</h2>
        <p>
          Die verwendete Schrift Archivo liegt auf demselben Server wie die Seite und wird von dort geladen. Es
          besteht <strong>keine</strong> Verbindung zu Google Fonts oder einem anderen Schriften-Dienst; beim
          Aufruf der Seite wird keine Anfrage an Dritte gestellt.
        </p>

        <h2>Guide-Videos von YouTube</h2>
        <p>
          Auf den Fighter-Seiten ist jeweils ein Guide-Video eingebettet. Solange nicht darauf geklickt wird,
          steht dort nur eine Vorschau aus eigenen Daten. Es wird <strong>keine</strong> Verbindung zu YouTube
          aufgebaut.
        </p>
        <p>
          Erst mit dem Klick auf das Video lädt der Player von
          <code>youtube-nocookie.com</code> nach. Ab diesem Zeitpunkt verarbeitet Google Ireland Limited die
          IP-Adresse und Angaben zum Gerät; bei angemeldeten Nutzern kann Google den Abruf dem Konto zuordnen.
          Der Klick ist die Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und lässt sich jederzeit
          widerrufen, indem das Video nicht gestartet wird. Worauf sich die Einwilligung bezieht, steht als
          Hinweis direkt am Player.
        </p>

        <h2>Hitbox-Darstellungen</h2>
        <p>
          Zu vielen Moves gibt es eine Hitbox-Darstellung von Ultimate Frame Data. Sie wird
          <strong>nicht</strong> beim Aufruf der Seite geladen: Zunächst steht dort nur ein Hinweis aus eigenen
          Daten.
        </p>
        <p>
          Erst mit dem Klick darauf wird das Bild von <code>ultimateframedata.com</code> abgerufen. Dabei erfährt
          der dortige Server die IP-Adresse und Angaben zum Gerät. Der Klick ist die Einwilligung nach Art. 6
          Abs. 1 lit. a DSGVO; wer nicht klickt, baut keine Verbindung dorthin auf.
        </p>

        <h2>Verweise auf andere Seiten</h2>
        <p>
          Jede Combo verlinkt ihre Quelle (unter anderem SmashWiki, Game8, Ultimate Frame Data, EventHubs).
          Diese Verweise werden erst beim Anklicken aufgerufen. Für die Datenverarbeitung auf den Zielseiten sind
          deren Betreiber verantwortlich.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Dir stehen gegenüber dem Verantwortlichen die Rechte auf Auskunft (Art. 15 DSGVO), Berichtigung
          (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20)
          und Widerspruch (Art. 21) zu. Unabhängig davon besteht ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde, Art. 77 DSGVO.
        </p>
        <p>
          Mit Konto siehst du deine gespeicherten Daten im Profil und kannst sie dort selbst löschen. Ohne Konto
          fallen außer den Server-Protokollen keine Daten an, und die sind einer Person in aller Regel nicht
          zuzuordnen.
        </p>

        <h2>Stand</h2>
        <p>Diese Erklärung gilt seit dem 15. September 2026.</p>

        <p><a href="${link('/impressum')}">Impressum</a></p>

        <p><a class="btn btn--ghost" href="${link('/')}">Zurück zur Startseite</a></p>
      </section>
    </div>`,
  };
}
