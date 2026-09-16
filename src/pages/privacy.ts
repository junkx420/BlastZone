import { lang, languageUrl } from '../i18n';
import { html, type Markup } from '../lib/dom';
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
 *
 * Zwei Fassungen: Deutsch ist maßgeblich, Englisch eine Übersetzung mit Hinweis
 * und Link auf die deutsche. Jede inhaltliche Änderung in beiden Fassungen
 * vornehmen, sonst behauptet eine Sprache etwas anderes als der Code tut.
 */
export function privacyPage(): PageView {
  return lang === 'en'
    ? { title: 'Privacy Policy | Blastzone', markup: englishMarkup() }
    : { title: 'Datenschutzerklärung | Blastzone', markup: germanMarkup() };
}

function germanMarkup(): Markup {
  return html`<div class="page legal">
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
    </div>`;
}

/** Englische Übersetzung. Maßgeblich ist die deutsche Fassung (germanMarkup). */
function englishMarkup(): Markup {
  return html`<div class="page legal">
      <section class="container page-head">
        <h1>Privacy Policy</h1>
        <p>
          Blastzone is a private fan project without any analytics or tracking services. If you only read the site,
          you get no cookies. If you create an account, you share a few details for it. This page explains exactly what
          is processed.
        </p>
        <p class="legal__lang">
          This is a translation. The <a href="${languageUrl('de')}" hreflang="de">German version</a> is legally
          binding.
        </p>
      </section>

      <section class="container legal__body">
        <h2>Controller</h2>
        <p>Responsible for processing personal data on this site (Art. 4(7) GDPR):</p>
        ${operatorAddress()}
        <p>
          Email: <a href="mailto:${OPERATOR.email}">${OPERATOR.email}</a>. An email to this address is all it takes to
          request access to, correction of or deletion of your data.
        </p>

        <h2>Hosting and server logs</h2>
        <p>
          The site is hosted by Vercel Inc. (USA). When the site is accessed, Vercel processes technically necessary
          connection data in server logs: IP address, time of the request, requested address, amount of data
          transferred, browser and operating system identifiers and the previously visited page. A website cannot be
          delivered without this processing.
        </p>
        <p>
          The legal basis is Art. 6(1)(f) GDPR, the legitimate interest in operating the service securely and reliably.
          Vercel acts as a processor under Art. 28 GDPR. For transfers to the USA, Vercel relies on standard
          contractual clauses. Details and retention periods follow Vercel’s own privacy information.
        </p>
        <p>
          If something crashes in the browser, the site sends a short error report to its own server: the error
          message, the visited page without parameters, the browser identifier and the version of the site. Email
          addresses and strings that look like access keys are redacted. The report contains no user ID and only ends
          up in the server logs mentioned above. The purpose is to find errors that only occur on other people’s
          devices. The legal basis is also Art. 6(1)(f) GDPR.
        </p>

        <h2>No tracking, cookies only with an account</h2>
        <p>
          There is no audience measurement, no analytics tooling and no advertising network. The site stores nothing in
          the browser’s local storage.
        </p>
        <p>
          Cookies are only set once you log in: two session cookies (<code>bz_at</code> and <code>bz_rt</code>) that
          keep you logged in. They cannot be read by JavaScript, are only sent to this site’s own API and never to third
          parties. <code>bz_at</code> expires after about one hour, <code>bz_rt</code> after 30 days. Both are deleted
          when you log out. Only during a verification through start.gg are two short-lived cookies added; see the
          start.gg section below. Because logging in cannot work without them, no consent is required for them
          (Section 25(2) no. 2 TDDDG, the German Telecommunications Digital Services Data Protection Act) and there is
          no cookie banner.
        </p>

        <h2>Accounts, comments and saved combos</h2>
        <p>
          For an account we store your email address, a username and your password, the latter only as a hash and
          never in plain text. On top of that comes what you create yourself: your main fighter, your color scheme,
          saved combos and comments, each with a timestamp. The legal basis is Art. 6(1)(b) GDPR, providing the
          account you create.
        </p>
        <p>
          <strong>Comments are public.</strong> Every visitor sees them together with your username, your main fighter
          and the time. Nobody but you sees your email address and saved combos.
        </p>
        <p>
          <strong>Player profiles are only visible to logged-in members.</strong> Logged-in members can click your name
          and see a profile page with your username, main fighter, your secondaries (if chosen), the month you signed
          up, the number of your comments and your latest comments. Your email address, saved combos and your start.gg
          link do not appear there.
        </p>
        <p>
          <strong>You only appear in the community directory if you turn it on yourself.</strong> You are then listed
          under <code>#/community</code> with your username, main, secondaries and the month you signed up, again only
          for logged-in members. You can turn it off in your profile at any time and disappear from the list
          immediately. Secondaries and the directory setting are stored at Supabase and deleted together with the
          account. The legal basis for the player profile and the directory is Art. 6(1)(b) GDPR, the community
          features of the account.
        </p>
        <p>
          The data is stored by Supabase Inc. as a processor under Art. 28 GDPR in a data center in the EU (Frankfurt am
          Main). Supabase also sends the email you use to confirm your address. The account can only be used after this
          confirmation (double opt-in).
        </p>
        <p>
          To prevent abuse, we check at sign-up whether your address’s domain can receive email and does not belong to a
          disposable email service. Only the domain (for example <code>gmail.com</code>) is looked up via DNS, not the
          full address. To prevent password guessing, we count login attempts per IP address. A hash is stored for this
          instead of the address itself, and the counter is gone after 24 hours at the latest. The legal basis is
          Art. 6(1)(f) GDPR, the legitimate interest in secure operation. If this counter runs on the Upstash service
          (Upstash Inc.), Upstash acts as a processor for it.
        </p>
        <p>
          You can delete your account yourself in your profile at any time. Account, profile, comments and saved combos
          are removed immediately and completely.
        </p>

        <h2>Linking start.gg</h2>
        <p>
          In your profile you can optionally link your profile on the tournament platform start.gg. We then store the
          address of that profile (for example <code>user/1a2b3c4d</code>), the player name shown there and the time.
          When linking, our server asks start.gg whether the profile exists. This request is made by the server, not by
          your browser; start.gg only learns the profile address, neither your IP address nor your Blastzone account.
        </p>
        <p>
          If you choose “Log in with start.gg” or “Verify with start.gg”, the site redirects you to start.gg. There you
          log in to start.gg yourself; we never see your start.gg password. start.gg sends you back with a one-time code,
          which our server exchanges for an access token. With this token the server asks exactly once which start.gg
          account is logged in (scope <code>user.identity</code>: account ID, profile address, player name). We do not
          store the token; it is discarded immediately. In addition, we only store the start.gg account ID, the time of
          verification and a checksum created by our server. For the duration of the login, the site sets two
          technically necessary cookies (<code>bz_sg_state</code> and <code>bz_sg_result</code>), which are valid for
          at most ten minutes and are deleted afterward or once the process completes. How start.gg handles your data
          during the login is governed by its own privacy policy.
        </p>
        <p>
          For the “My tournaments” list, our server asks start.gg for your public results in Super Smash Bros. Ultimate
          tournaments: tournament name, event, date, location or online, your placement and the number of entrants. So
          that start.gg is not asked on every visit, we cache this result at Supabase for up to 24 hours. Your browser
          loads the tournament logo directly from start.gg (<code>images.start.gg</code>) when displaying it; like any
          visited site, start.gg sees your IP address in the process.
        </p>
        <p>
          Only you can see the link and the cached results. They are not part of your public profile and do not appear
          next to your comments. The legal basis is Art. 6(1)(b) GDPR, a feature you turn on yourself. You can remove
          the link in your profile at any time; the link and the cached results are then deleted immediately, as they
          are when you delete your account.
        </p>

        <h2>Fonts</h2>
        <p>
          The Archivo typeface used here is hosted on the same server as the site and loaded from there. There is
          <strong>no</strong> connection to Google Fonts or any other font service; opening the site sends no request
          to third parties.
        </p>

        <h2>Guide videos from YouTube</h2>
        <p>
          Each fighter page embeds a guide video. Until you click it, only a preview from our own data is shown, and
          <strong>no</strong> connection to YouTube is made.
        </p>
        <p>
          Only when you click the video does the player load from <code>youtube-nocookie.com</code>. From that moment
          on, Google Ireland Limited processes your IP address and device information; for logged-in users, Google may
          link the request to their account. The click is your consent within the meaning of Art. 6(1)(a) GDPR, and you
          can withdraw it at any time by not starting the video. A notice right at the player explains what the consent
          covers.
        </p>

        <h2>Hitbox visualizations</h2>
        <p>
          Many moves have a hitbox visualization from Ultimate Frame Data. It is <strong>not</strong> loaded when the
          page opens: at first only a notice from our own data is shown.
        </p>
        <p>
          Only when you click it is the image requested from <code>ultimateframedata.com</code>. The server there
          learns your IP address and device information. The click is your consent under Art. 6(1)(a) GDPR; if you do
          not click, no connection is made.
        </p>

        <h2>Links to other sites</h2>
        <p>
          Every combo links its source (including SmashWiki, Game8, Ultimate Frame Data and EventHubs). These links are
          only opened when you click them. The operators of the target sites are responsible for any data processing
          there.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of
          processing (Art. 18), data portability (Art. 20) and objection (Art. 21) toward the controller. Regardless of
          this, you have the right to lodge a complaint with a data protection supervisory authority, Art. 77 GDPR.
        </p>
        <p>
          With an account, you can see your stored data in your profile and delete it yourself there. Without an
          account, no data is processed apart from the server logs, which as a rule cannot be attributed to a person.
        </p>

        <h2>Effective date</h2>
        <p>This policy applies as of September 15, 2026.</p>

        <p><a href="${link('/impressum')}">Legal notice</a></p>

        <p><a class="btn btn--ghost" href="${link('/')}">Back to home</a></p>
      </section>
    </div>`;
}
