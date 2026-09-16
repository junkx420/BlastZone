import { t } from '../i18n';
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
    title: `${t('imprint.title')} | Blastzone`,
    markup: html`<div class="page legal">
      <section class="container page-head">
        <h1>${t('imprint.title')}</h1>
        <p>${t('imprint.lead')}</p>
        ${t('imprint.langNote') ? html`<p class="legal__lang">${t('imprint.langNote')}</p>` : ''}
      </section>

      <section class="container legal__body">
        <h2>${t('imprint.provider')}</h2>
        ${operatorAddress()}

        <h2>${t('imprint.contact')}</h2>
        <p>${t('imprint.email')} <a href="mailto:${OPERATOR.email}">${OPERATOR.email}</a></p>

        <h2>${t('imprint.responsible')}</h2>
        <p>${t('imprint.responsibleText', { name: OPERATOR.name })}</p>

        <h2>${t('imprint.about')}</h2>
        <p>${t('imprint.aboutText')}</p>
        <p>${t('imprint.contentText')}</p>

        <p><a class="btn btn--ghost" href="${link('/datenschutz')}">${t('imprint.privacyLink')}</a></p>
      </section>
    </div>`,
  };
}
