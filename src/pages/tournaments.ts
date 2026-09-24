import { ICONS } from '../components/icons';
import { bindErrorState, errorState } from '../components/states';
import { dateFormat, formatNumber, t, tn } from '../i18n';
import { html, mount, qs, type Markup } from '../lib/dom';
import { ApiError } from '../services/api';
import { getTournaments, type Tournament } from '../services/db';
import type { PageView } from './types';

/**
 * #/turniere: Kommende SSBU-Turniere in Deutschland, direkt von start.gg.
 *
 * Die Liste kommt fertig vom Server (api/_routes/startgg/tournaments.ts) und
 * liegt dort 15 Minuten im Zwischenspeicher. Der Browser spricht nie mit
 * start.gg, es gibt hier also auch keinen Token und keine fremden Anfragen.
 */

const tagFormat = dateFormat({ day: '2-digit' });
const monatFormat = dateFormat({ month: 'short' });
const zeitFormat = dateFormat({ hour: '2-digit', minute: '2-digit' });
const vollFormat = dateFormat({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

function zeile(turnier: Tournament): Markup {
  const start = new Date(turnier.startAt);
  const ort = turnier.online ? t('tn.online') : (turnier.city ?? t('tn.noCity'));
  const teile = [ort, turnier.attendees === null ? '' : tn('tn.attendeesOne', 'tn.attendees', turnier.attendees)].filter(Boolean);

  return html`<li class="tn-row" data-reveal>
    <span class="tn-row__date">
      <span class="vh">${vollFormat.format(start)}</span>
      <span class="tn-row__day" aria-hidden="true">${tagFormat.format(start)}</span>
      <span class="tn-row__month" aria-hidden="true">${monatFormat.format(start)}</span>
    </span>
    <a class="tn-row__main" href="https://www.start.gg/${turnier.slug}" target="_blank" rel="noopener noreferrer">
      <span class="tn-row__name">${turnier.name}${ICONS.external}</span>
      <span class="tn-row__meta">${zeitFormat.format(start)} · ${teile.join(' · ')}</span>
    </a>
  </li>`;
}

export function tournamentsPage(): PageView {
  return {
    title: `${t('tn.title')} | Blastzone`,
    markup: html`<div class="page tn-page">
      <header class="container page-head">
        <h1 data-reveal="wipe">${t('tn.title')}</h1>
        <p>${t('tn.lead')}</p>
      </header>
      <div class="container tn-out" data-out aria-live="polite"><p class="mu-note">${t('tn.loading')}</p></div>
    </div>`,

    mount(root) {
      const out = qs<HTMLElement>('[data-out]', root)!;

      const laden = async (): Promise<void> => {
        mount(out, html`<p class="mu-note">${t('tn.loading')}</p>`);
        try {
          const liste = await getTournaments();
          mount(
            out,
            liste.length
              ? html`<ol class="tn-list" role="list">${liste.map(zeile)}</ol>
                  <p class="tn-source">${t('tn.source', { n: formatNumber(liste.length) })}</p>`
              : html`<p class="mu-note">${t('tn.empty')}</p>`,
          );
        } catch (err) {
          mount(out, errorState(err instanceof ApiError ? err.message : t('tn.failed'), t('mu.retry')));
          bindErrorState(out, () => void laden());
        }
      };

      void laden();
      return () => {};
    },
  };
}
