import { t } from '../i18n';
import { html } from '../lib/dom';
import { link } from '../lib/router';
import type { PageView } from './types';

export function notFoundPage(kind: 'page' | 'fighter' = 'page'): PageView {
  return {
    title: `${t(kind === 'fighter' ? 'notFound.fighter' : 'notFound.page')} | Blastzone`,
    markup: html`<div class="page">
      <section class="container page-head">
        <h1>${t(kind === 'fighter' ? 'notFound.fighterHeading' : 'notFound.pageHeading')}</h1>
        <p>${t('notFound.text')}</p>
        <p><a class="btn btn--primary" href="${link('/roster')}">${t('notFound.cta')}</a></p>
      </section>
    </div>`,
  };
}
