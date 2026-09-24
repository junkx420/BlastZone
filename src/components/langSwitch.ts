import { lang, LANGUAGES, languageUrl, t } from '../i18n';
import { html, qs, qsa, type Markup } from '../lib/dom';
import { ICONS } from './icons';

/**
 * Sprachwahl in der Leiste: Globus-Knopf mit Menü.
 *
 * - Jede Sprache steht in ihrer eigenen Sprache („English“, „Deutsch“) und trägt
 *   `lang`, damit Screenreader den Namen richtig aussprechen.
 * - Die Einträge sind echte Links auf dieselbe Adresse mit anderem `?lang=`. Das
 *   lädt die Seite neu (siehe i18n/index.ts) und funktioniert auch mit Mittelklick.
 *   Die Ziele werden beim Öffnen neu berechnet, weil sich der Hash beim Navigieren ändert.
 * - Schließt mit Escape, Klick daneben oder Fokus außerhalb; Escape gibt den Fokus zurück.
 */
export function langSwitch(): Markup {
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]!;
  return html`<div class="lang">
    <button class="lang__btn" type="button" aria-expanded="false" aria-controls="lang-menu" title="${t('lang.menu')}" data-lang-btn>
      ${ICONS.globe}<span class="lang__code" aria-hidden="true">${current.code.toUpperCase()}</span>
      <span class="vh">${t('lang.button', { name: current.name })}</span>
    </button>
    <div class="lang__menu" id="lang-menu" role="group" aria-label="${t('lang.menu')}" hidden data-lang-menu>
      ${LANGUAGES.map(
        (l) => html`<a class="lang__opt" href="${languageUrl(l.code)}" lang="${l.code}" hreflang="${l.code}" data-lang-opt="${l.code}" ${l.code === lang ? html`aria-current="true"` : ''}>
          <span class="lang__name">${l.name}</span>${l.code === lang ? ICONS.check : ''}
        </a>`,
      )}
    </div>
  </div>`;
}

export function mountLangSwitch(host: HTMLElement): void {
  const button = qs<HTMLButtonElement>('[data-lang-btn]', host);
  const menu = qs<HTMLElement>('[data-lang-menu]', host);
  if (!button || !menu) return;

  const setOpen = (open: boolean, returnFocus = false): void => {
    if (open) qsa<HTMLAnchorElement>('[data-lang-opt]', menu).forEach((a) => (a.href = languageUrl(a.dataset.langOpt as 'de' | 'en')));
    menu.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    if (!open && returnFocus) button.focus();
  };

  button.addEventListener('click', () => setOpen(menu.hidden));
  host.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      e.preventDefault();
      setOpen(false, true);
    }
  });
  document.addEventListener('click', (e) => {
    if (!menu.hidden && !host.contains(e.target as Node)) setOpen(false);
  });
  host.addEventListener('focusout', (e) => {
    if (!menu.hidden && !host.contains(e.relatedTarget as Node | null)) setOpen(false);
  });
}
