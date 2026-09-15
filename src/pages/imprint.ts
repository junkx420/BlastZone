import { html } from '../lib/dom';
import { link } from '../lib/router';
import type { PageView } from './types';

/**
 * Impressum. Anbieterkennzeichnung nach § 5 DDG (das Digitale-Dienste-Gesetz hat
 * am 14.05.2024 das TMG abgelöst, die Pflichtangaben sind dieselben).
 *
 * Name, Anschrift und Kontakt stehen genau so an zwei Stellen: hier und im
 * Abschnitt „Verantwortlich“ der Datenschutzerklärung (src/pages/privacy.ts).
 * Ändert sich etwas, beide Stellen anpassen. Die Konstante unten ist die Quelle.
 */
export const OPERATOR = {
  name: 'Cilian J. Hansen',
  lines: ['c/o Block Services', 'Stuttgarter Str. 106', '70736 Fellbach'],
  email: 'support.blastzone@gmail.com',
} as const;

export const operatorAddress = () =>
  html`<address class="legal__address">
    ${OPERATOR.name}<br />
    ${OPERATOR.lines.map((line, i) => html`${line}${i < OPERATOR.lines.length - 1 ? html`<br />` : ''}`)}
  </address>`;

export function imprintPage(): PageView {
  return {
    title: 'Impressum | Blastzone',
    markup: html`<div class="page legal">
      <section class="container page-head">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 DDG</p>
      </section>

      <section class="container legal__body">
        <h2>Anbieter</h2>
        ${operatorAddress()}

        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:${OPERATOR.email}">${OPERATOR.email}</a></p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>${OPERATOR.name}, Anschrift wie oben.</p>

        <h2>Über dieses Projekt</h2>
        <p>
          Blastzone ist ein privates, nicht kommerzielles Fanprojekt für die Competitive-Szene von Super Smash Bros.
          Ultimate. Es steht in keiner Verbindung zu Nintendo, Bandai Namco oder Sora Ltd. Fighter-Artwork stammt von
          smashbros.com, © Nintendo. Fighter- und Seriennamen gehören ihren Rechteinhabern.
        </p>
        <p>
          Combo-Routen verlinken jeweils ihre Quelle. Kommentare geben die Meinung ihrer Verfasser wieder. Fällt dir ein
          Beitrag auf, der gegen Recht verstößt, schreib an die Adresse oben, er wird dann geprüft und entfernt.
        </p>

        <p><a class="btn btn--ghost" href="${link('/datenschutz')}">Zur Datenschutzerklärung</a></p>
      </section>
    </div>`,
  };
}
