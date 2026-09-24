import { t } from '../i18n';
import { html, qs, type Markup } from '../lib/dom';

/**
 * Fehlerzustand mit Ausweg. Überall dort, wo sonst ein Skelett für immer stehen
 * bliebe: nachgeladene Guide-Daten, Picks auf der Startseite, gespeicherte Combos.
 *
 * Zwei Knöpfe, weil es zwei typische Ursachen gibt: Ein Funkloch löst „Erneut
 * versuchen“. Ein alter Tab nach einem neuen Deploy sucht Dateien, die es nicht
 * mehr gibt; das löst nur „Seite neu laden“.
 */
export function errorState(title: string, text: string): Markup {
  return html`<div class="empty empty--error" role="alert">
    <h3>${title}</h3>
    <p>${text}</p>
    <div class="empty__actions">
      <button class="btn btn--sm" type="button" data-retry>${t('state.retry')}</button>
      <button class="btn btn--sm btn--ghost" type="button" data-reload>${t('state.reload')}</button>
    </div>
  </div>`;
}

export function bindErrorState(host: ParentNode, retry: () => void): void {
  qs<HTMLButtonElement>('[data-retry]', host)?.addEventListener(
    'click',
    (e) => {
      const button = e.currentTarget as HTMLButtonElement;
      button.disabled = true;
      button.textContent = t('state.loading');
      retry();
    },
    { once: true },
  );
  qs<HTMLButtonElement>('[data-reload]', host)?.addEventListener('click', () => window.location.reload());
}

export const LOAD_FAILED_TEXT = t('state.loadFailed');
