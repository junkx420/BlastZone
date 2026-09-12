import { html } from '../lib/dom';
import { link } from '../lib/router';
import type { PageView } from './types';

/**
 * Datenschutzerklärung.
 *
 * Der Text beschreibt exakt das, was die Seite technisch tut – nachgeprüft am
 * 13.09.2026: kein localStorage, keine Cookies, kein fetch, kein Tracking, die
 * Schriften liegen lokal, und vor dem Klick auf ein Video geht keine einzige
 * Anfrage an Dritte. Ändert sich daran etwas, muss dieser Text mitgeändert
 * werden – eine Datenschutzerklärung, die etwas anderes behauptet als der Code
 * tut, ist schlimmer als keine.
 *
 * ACHTUNG, zwei Dinge fehlen noch und müssen vom Betreiber ergänzt werden:
 *   1. VERANTWORTLICH – Klarname und ladungsfähige Anschrift.
 *   2. Ein Impressum nach § 5 DDG als eigene Seite.
 * Beides kann ich nicht erfinden. Solange die Platzhalter hier stehen, ist die
 * Seite nicht vollständig.
 */
const VERANTWORTLICH = {
  name: '[BITTE ERGÄNZEN: Vor- und Nachname]',
  anschrift: '[BITTE ERGÄNZEN: Straße, PLZ, Ort]',
  email: '[BITTE ERGÄNZEN: Kontakt-E-Mail]',
};

export function privacyPage(): PageView {
  return {
    title: 'Datenschutzerklärung – Blastzone',
    markup: html`<div class="page legal">
      <section class="container page-head">
        <h1>Datenschutzerklärung</h1>
        <p>
          Blastzone ist ein privates Fanprojekt. Die Seite setzt keine Cookies, bindet keine Analyse- oder
          Tracking-Dienste ein und speichert nichts im Browser. Was trotzdem an Daten anfällt, steht hier.
        </p>
      </section>

      <section class="container legal__body">
        <h2>Verantwortlich</h2>
        <p>
          ${VERANTWORTLICH.name}<br />
          ${VERANTWORTLICH.anschrift}<br />
          ${VERANTWORTLICH.email}
        </p>

        <h2>Hosting und Server-Protokolle</h2>
        <p>
          Die Seite wird bei Vercel Inc. (USA) gehostet. Beim Abruf verarbeitet Vercel technisch notwendige
          Verbindungsdaten in Server-Protokollen: IP-Adresse, Zeitpunkt der Anfrage, aufgerufene Adresse,
          übertragene Datenmenge, Browser- und Betriebssystemkennung sowie die zuvor besuchte Seite. Ohne diese
          Verarbeitung lässt sich eine Website technisch nicht ausliefern.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO – das berechtigte Interesse am sicheren und stabilen
          Betrieb des Angebots. Vercel ist dabei Auftragsverarbeiter nach Art. 28 DSGVO; für die Übermittlung in
          die USA stützt sich Vercel auf Standardvertragsklauseln. Einzelheiten und Speicherdauer richten sich
          nach den Datenschutzangaben von Vercel.
        </p>

        <h2>Keine Cookies, kein Tracking</h2>
        <p>
          Die Seite speichert keine Cookies und legt nichts im lokalen Speicher des Browsers ab. Es gibt keine
          Reichweitenmessung, keine Analyse-Werkzeuge und keine Einbindung von Werbenetzwerken. Ein
          Cookie-Banner ist deshalb nicht nötig – es gäbe nichts, worin eingewilligt werden könnte.
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
          steht dort nur eine Vorschau aus eigenen Daten – es wird <strong>keine</strong> Verbindung zu YouTube
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

        <h2>Verweise auf andere Seiten</h2>
        <p>
          Jede Combo-Route verlinkt ihre Quelle (unter anderem SmashWiki, Game8, Ultimate Frame Data, EventHubs).
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
          Da die Seite außer den Server-Protokollen nichts erhebt und keine Nutzerkonten führt, lassen sich
          Anfragen praktisch nur über die Protokolldaten beantworten – und die sind einer Person in aller Regel
          nicht zuzuordnen.
        </p>

        <h2>Stand</h2>
        <p>Diese Erklärung gilt seit dem 13. September 2026.</p>

        <p><a class="btn btn--ghost" href="${link('/')}">Zurück zur Startseite</a></p>
      </section>
    </div>`,
  };
}
