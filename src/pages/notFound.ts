import { html } from '../lib/dom';
import { link } from '../lib/router';
import type { PageView } from './types';

export function notFoundPage(what = 'Seite'): PageView {
  return {
    title: `${what} nicht gefunden | Blastzone`,
    markup: html`<div class="page">
      <section class="container page-head">
        <h1>Diese ${what} liegt hinter der Blastzone.</h1>
        <p>Der Link führt ins Leere. Such direkt nach einem Fighter oder geh zurück zum Roster.</p>
        <p><a class="btn btn--primary" href="${link('/roster')}">Zum Roster</a></p>
      </section>
    </div>`,
  };
}
