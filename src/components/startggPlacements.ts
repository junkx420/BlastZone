import { dateFormat, formatNumber, locale, t } from '../i18n';
import { html, mount, qs, qsa, type Markup } from '../lib/dom';
import { ApiError } from '../services/api';
import { getStartggPlacements, type StartggPlacement, type StartggPlacementsResult } from '../services/db';
import { ICONS } from './icons';
import { bindErrorState, errorState } from './states';

/**
 * Placements unter der start.gg-Karte im Profil (Schritt 3).
 *
 * Gestaltung: Jede Zeile ist ein Ergebnisschild. Links das Turnierlogo, in der
 * Mitte Turnier, Event, Datum und Ort, rechts das Placement groß und kursiv wie
 * die Schadensanzeige. Darunter ein schmaler Balken für „Top X %“. Die Farbe des
 * Balkens folgt der Schadensrampe der Seite: je weiter vorn, desto heißer.
 *
 * Zustände:
 * - lädt:       drei Skelett-Zeilen in exakt der Zeilenhöhe, damit nichts springt
 * - Liste:      Kennzahlen oben, Zeilen darunter, Stand und Aktualisieren
 * - leer:       „Keine SSBU-Turniere gefunden“ mit Erklärung, was zählt
 * - nicht gefunden: Hinweis und Knopf zum Neuverknüpfen
 * - Fehler:     errorState mit Erneut versuchen
 * - Hinweise:   Cooldown, alter Stand bei Ausfall, als Statuszeile über der Liste
 */

const dateFmt = dateFormat({ day: '2-digit', month: 'short', year: 'numeric' });
const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

function relative(iso: string): string {
  const diff = (Date.parse(iso) - Date.now()) / 1000;
  const abs = Math.abs(diff);
  if (abs < 60) return t('comments.justNow');
  if (abs < 3600) return rtf.format(Math.round(diff / 60), 'minute');
  if (abs < 86400) return rtf.format(Math.round(diff / 3600), 'hour');
  return rtf.format(Math.round(diff / 86400), 'day');
}

/** Top-Anteil in Prozent, aufgerundet: Platz 17 von 29 ist „Top 59 %“. Platz 1 bleibt immer über 0. */
const topPercent = (p: StartggPlacement): number => Math.max(1, Math.ceil((p.placement / p.entrants) * 100));

/** Stufe für Farbe und Medaille. Die Schwellen folgen der üblichen Einteilung von Brackets. */
function tier(p: StartggPlacement): 'gold' | 'silver' | 'bronze' | 'hot' | 'warm' | 'mid' | 'cold' {
  if (p.placement === 1) return 'gold';
  if (p.placement === 2) return 'silver';
  if (p.placement === 3) return 'bronze';
  const top = topPercent(p);
  if (top <= 10) return 'hot';
  if (top <= 25) return 'warm';
  if (top <= 50) return 'mid';
  return 'cold';
}

const initials = (name: string): string =>
  name
    .replace(/[^A-Za-zÄÖÜäöü0-9 ]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('') || 'SG';

const eventUrl = (p: StartggPlacement): string | null => (p.eventSlug ? `https://www.start.gg/${p.eventSlug}` : null);

function row(p: StartggPlacement): Markup {
  const url = eventUrl(p);
  const top = topPercent(p);
  const place = html`<span class="placement__rank"><span class="placement__num">${p.placement}.</span><span class="placement__of">${t('placements.of', { n: formatNumber(p.entrants) })}</span></span>`;
  // Balken: Anteil des Feldes, vor dem man lag, plus man selbst. Platz 1 füllt immer ganz.
  const fill = Math.max(3, Math.round(((p.entrants - p.placement + 1) / p.entrants) * 100));
  return html`<li class="placement" data-tier="${tier(p)}" style="--fill:${fill}%">
    <span class="placement__logo" aria-hidden="true">
      ${p.imageUrl
        ? html`<img src="${p.imageUrl}" alt="" width="48" height="48" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-startgg-logo />`
        : ''}
      <span class="placement__initials">${initials(p.tournament)}</span>
    </span>
    <div class="placement__body">
      <h3 class="placement__title">${url ? html`<a href="${url}" target="_blank" rel="noopener noreferrer">${p.tournament}</a>` : p.tournament}</h3>
      <p class="placement__event">${p.event}</p>
      <p class="placement__meta">
        <time datetime="${p.startAt}">${p.startAt ? dateFmt.format(new Date(p.startAt)) : t('placements.dateUnknown')}</time>
        <span class="placement__where">${p.isOnline ? t('placements.online') : (p.location ?? t('placements.offline'))}</span>
      </p>
    </div>
    <div class="placement__result">
      <span class="vh">${t('placements.placeVh', { place: p.placement, n: formatNumber(p.entrants) })}</span>
      <span aria-hidden="true">${place}</span>
      <span class="placement__top" aria-hidden="true">${t('placements.top', { n: top })}</span>
    </div>
    <span class="placement__bar" aria-hidden="true"><span></span></span>
  </li>`;
}

function skeletonRows(): Markup {
  return html`<ol class="placements__list placements__list--skeleton" role="list" aria-hidden="true">
      ${[0, 1, 2].map(
        () => html`<li class="placement placement--skeleton">
          <span class="placement__logo"></span>
          <div class="placement__body"><span class="skeleton__bar skeleton__bar--title"></span><span class="skeleton__bar"></span></div>
          <div class="placement__result"><span class="skeleton__bar"></span></div>
        </li>`,
      )}
    </ol>
    <span class="vh">${t('placements.loadingVh')}</span>`;
}

function summary(list: StartggPlacement[]): Markup {
  const best = list.reduce((a, b) => (b.placement < a.placement || (b.placement === a.placement && b.entrants > a.entrants) ? b : a));
  const bestTop = list.reduce((a, b) => (topPercent(b) < topPercent(a) ? b : a));
  const tournaments = new Set(list.map((p) => p.tournamentId)).size;
  return html`<dl class="placements__stats">
    <div><dt>${t('placements.tournaments')}</dt><dd>${formatNumber(tournaments)}</dd></div>
    <div><dt>${t('placements.best')}</dt><dd>${best.placement}.<small> ${t('placements.of', { n: formatNumber(best.entrants) })}</small></dd></div>
    <div><dt>${t('placements.bestShare')}</dt><dd>${t('placements.top', { n: topPercent(bestTop) })}</dd></div>
  </dl>`;
}

function listMarkup(result: StartggPlacementsResult): Markup {
  const { placements } = result;
  return html`<div class="placements__head">
      <h3 class="placements__title">${t('placements.latest')}</h3>
      <div class="placements__tools">
        <p class="placements__stand">${t('placements.asOf', { time: relative(result.fetchedAt) })}</p>
        <button class="btn btn--sm btn--ghost" type="button" data-placements-refresh>${ICONS.reset}${t('placements.refresh')}</button>
      </div>
    </div>
    ${result.notice ? html`<p class="placements__notice" role="status">${result.notice.message}</p>` : ''}
    ${placements.length
      ? html`${summary(placements)}<ol class="placements__list" role="list">${placements.map(row)}</ol>
          <p class="placements__foot">${t('placements.foot')}</p>`
      : html`<div class="empty placements__empty">
          <h3>${t('placements.emptyTitle')}</h3>
          <p>${t('placements.emptyText')}</p>
        </div>`}`;
}

export function mountPlacements(host: HTMLElement, onRelink: () => void): () => void {
  let alive = true;

  const bindLogos = (): void => {
    // Logo nicht ladbar: Das Bild verschwindet, die Initialen darunter bleiben.
    qsa<HTMLImageElement>('[data-startgg-logo]', host).forEach((img) =>
      img.addEventListener('error', () => img.remove(), { once: true }),
    );
  };

  const render = (result: StartggPlacementsResult): void => {
    mount(host, listMarkup(result));
    host.removeAttribute('aria-busy');
    bindLogos();
    const refresh = qs<HTMLButtonElement>('[data-placements-refresh]', host)!;
    const wait = Date.parse(result.nextRefreshAt) - Date.now();
    if (wait > 0) refresh.title = t('placements.refreshAgain', { time: relative(result.nextRefreshAt) });
    refresh.addEventListener('click', () => load(true));
  };

  const load = (refresh = false): void => {
    host.setAttribute('aria-busy', 'true');
    const refreshBtn = qs<HTMLButtonElement>('[data-placements-refresh]', host);
    if (refresh && refreshBtn) {
      // Beim Aktualisieren bleibt die Liste stehen, nur der Knopf zeigt, dass etwas passiert.
      refreshBtn.disabled = true;
      refreshBtn.setAttribute('aria-busy', 'true');
      mount(refreshBtn, html`${ICONS.reset}${t('state.loading')}`);
    } else {
      mount(host, skeletonRows());
    }

    getStartggPlacements(refresh).then(
      (result) => {
        if (alive && host.isConnected) render(result);
      },
      (err: unknown) => {
        if (!alive || !host.isConnected) return;
        host.removeAttribute('aria-busy');
        if (err instanceof ApiError && err.code === 'startgg-player-not-found') {
          mount(
            host,
            html`<div class="empty empty--error placements__empty" role="alert">
              <h3>${t('placements.notFoundTitle')}</h3>
              <p>${err.message}</p>
              <div class="empty__actions"><button class="btn btn--sm" type="button" data-placements-relink>${ICONS.reset}${t('placements.relink')}</button></div>
            </div>`,
          );
          qs('[data-placements-relink]', host)?.addEventListener('click', onRelink);
          return;
        }
        if (err instanceof ApiError && err.code === 'startgg-not-linked') {
          onRelink();
          return;
        }
        const text = err instanceof ApiError ? err.message : t('startgg.checkConnection');
        mount(host, errorState(t('placements.loadError'), text));
        bindErrorState(host, () => load());
      },
    );
  };

  load();
  return () => {
    alive = false;
  };
}
