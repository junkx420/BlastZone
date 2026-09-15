import { FIGHTER_BY_SLUG } from '../data/fighters';
import { html, mount, qs } from '../lib/dom';
import { link } from '../lib/router';
import { t } from '../i18n';
import { applyTheme, currentTheme } from '../lib/theme';
import { onAuth, type AuthState } from '../services/auth';
import { updateProfile } from '../services/db';
import { openAuth } from './authDialog';
import { faceThumb } from './fighterTile';
import { ICONS } from './icons';

/**
 * Konto-Bereich rechts in der Leiste.
 *
 * Gast:        „Anmelden“
 * Angemeldet:  Theme-Umschalter (nur hier sichtbar) und Profil-Chip mit dem Main
 * Kein Backend: nichts, die Seite sieht aus wie vor den Konten
 */
export function mountAccountNav(host: HTMLElement, menuExtra?: HTMLElement): void {
  /** Theme wechseln und speichern. Klappt das Speichern nicht, zurück, damit Anzeige und Profil übereinstimmen. */
  const toggleTheme = async (button: HTMLButtonElement): Promise<void> => {
    const next = currentTheme() === 'light' ? 'dark' : 'light';
    applyTheme(next, true);
    button.disabled = true;
    try {
      await updateProfile({ theme: next });
    } catch {
      applyTheme(next === 'light' ? 'dark' : 'light', true);
    } finally {
      button.disabled = false;
    }
  };

  const render = (state: AuthState): void => {
    host.dataset.state = state.status;
    if (menuExtra) mount(menuExtra, html``);
    if (state.status === 'unknown' || (state.status === 'guest' && !state.available)) {
      mount(host, html``);
      return;
    }
    if (state.status === 'guest') {
      mount(host, html`<button class="nav__login btn btn--sm" type="button" data-login>${ICONS.user}<span class="nav__login-label">${t('account.login')}</span></button>`);
      qs('[data-login]', host)!.addEventListener('click', () => openAuth('login'));
      return;
    }

    const { user } = state;
    const main = user.mainFighter ? FIGHTER_BY_SLUG.get(user.mainFighter) : undefined;
    const light = user.theme === 'light';
    mount(
      host,
      html`<button class="nav__theme btn btn--icon btn--ghost" type="button" data-theme-toggle aria-pressed="${light ? 'true' : 'false'}"
          title="${light ? t('account.toDark') : t('account.toLight')}">
          ${light ? ICONS.moon : ICONS.sun}<span class="vh">${t('account.lightMode')}</span>
        </button>
        <a class="nav__me" href="${link('/profil')}" data-route="profil">
          ${main ? faceThumb(main, 'nav__me-face') : html`<span class="nav__me-face nav__me-face--empty">${ICONS.user}</span>`}
          <span class="nav__me-name">${user.username}</span>
        </a>`,
    );

    const toggle = qs<HTMLButtonElement>('[data-theme-toggle]', host)!;
    toggle.addEventListener('click', () => void toggleTheme(toggle));

    // Auf kleinen Handys steht der Umschalter im Menü statt in der Leiste (CSS blendet je nach Breite um).
    if (menuExtra) {
      mount(
        menuExtra,
        html`<button class="nav__link nav__menu-theme" type="button" data-theme-toggle-menu>
          ${light ? ICONS.moon : ICONS.sun}<span>${light ? t('account.toDark') : t('account.toLight')}</span>
        </button>`,
      );
      const menuToggle = qs<HTMLButtonElement>('[data-theme-toggle-menu]', menuExtra)!;
      menuToggle.addEventListener('click', () => void toggleTheme(menuToggle));
    }
  };

  onAuth(render);
}
