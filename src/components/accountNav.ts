import { FIGHTER_BY_SLUG } from '../data/fighters';
import { html, mount, qs, qsa } from '../lib/dom';
import { link } from '../lib/router';
import { t, tn } from '../i18n';
import { applyTheme, currentTheme } from '../lib/theme';
import { onAuth, type AuthState } from '../services/auth';
import { onUnread, refreshUnread, resetUnread, updateProfile } from '../services/db';
import { openAuth } from './authDialog';
import { faceThumb } from './fighterTile';
import { ICONS } from './icons';

/**
 * Konto-Bereich rechts in der Leiste.
 *
 * Gast:        „Anmelden“
 * Angemeldet:  Theme-Umschalter, Nachrichten mit Zähler, Profil-Chip mit Main und Skin
 * Kein Backend: nichts, die Seite sieht aus wie vor den Konten
 *
 * Der Zähler fragt jede Minute nach, aber nur bei sichtbarem Tab. Kein Push, weil der
 * Browser keinen Supabase-Key hat (Realtime bräuchte einen).
 */

const UNREAD_POLL_MS = 60_000;
let unreadTimer = 0;
let pollingFor: string | null = null;

function pollUnread(userId: string | null): void {
  if (userId === pollingFor) return;
  pollingFor = userId;
  window.clearInterval(unreadTimer);
  unreadTimer = 0;
  if (!userId) {
    resetUnread();
    return;
  }
  void refreshUnread();
  unreadTimer = window.setInterval(() => {
    if (document.visibilityState === 'visible') void refreshUnread();
  }, UNREAD_POLL_MS);
}

document.addEventListener('visibilitychange', () => {
  if (pollingFor && document.visibilityState === 'visible') void refreshUnread();
});

const onMessagesRoute = (): boolean => /^#\/nachrichten(\/|$|\?)/.test(location.hash);

export function mountAccountNav(host: HTMLElement, menuExtra?: HTMLElement): void {
  let stopBadge: () => void = () => {};

  /** Zähler an beiden Stellen (Leiste und Menü). Für Screenreader steht die Zahl als Text im Link, die Plakette ist nur Optik. */
  const bindBadges = (): void => {
    stopBadge();
    const scopes = [host, ...(menuExtra ? [menuExtra] : [])];
    stopBadge = onUnread((n) => {
      const count = n ? `, ${tn('dm.navUnreadOne', 'dm.navUnread', n)}` : '';
      for (const scope of scopes) {
        qsa<HTMLElement>('[data-msgs-badge]', scope).forEach((badge) => {
          badge.hidden = n === 0;
          badge.textContent = n > 99 ? '99+' : String(n);
        });
        qsa<HTMLElement>('[data-msgs-count]', scope).forEach((el) => (el.textContent = count));
      }
    });
  };

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
    stopBadge();
    if (state.status !== 'unknown') pollUnread(state.status === 'user' ? state.user.id : null);
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
        <a class="nav__msgs btn btn--icon btn--ghost" href="${link('/nachrichten')}" title="${t('dm.nav')}" data-msgs ${onMessagesRoute() ? html`aria-current="page"` : ''}>
          ${ICONS.mail}<span class="nav__msgs-badge" aria-hidden="true" data-msgs-badge hidden></span><span class="vh">${t('dm.nav')}</span><span class="vh" data-msgs-count></span>
        </a>
        <a class="nav__me" href="${link('/profil')}" data-route="profil">
          ${main ? faceThumb(main, 'nav__me-face', user.mainSkin) : html`<span class="nav__me-face nav__me-face--empty">${ICONS.user}</span>`}
          <span class="nav__me-name">${user.username}</span>
        </a>`,
    );

    const toggle = qs<HTMLButtonElement>('[data-theme-toggle]', host)!;
    toggle.addEventListener('click', () => void toggleTheme(toggle));

    // Auf kleinen Handys steht der Umschalter im Menü statt in der Leiste (CSS blendet je nach Breite um).
    if (menuExtra) {
      mount(
        menuExtra,
        html`<a class="nav__link nav__menu-theme" href="${link('/nachrichten')}" data-msgs>
            ${ICONS.mail}<span>${t('dm.nav')}</span><span class="vh" data-msgs-count></span><span class="nav__msgs-badge nav__msgs-badge--inline" aria-hidden="true" data-msgs-badge hidden></span>
          </a>
          <button class="nav__link nav__menu-theme" type="button" data-theme-toggle-menu>
            ${light ? ICONS.moon : ICONS.sun}<span>${light ? t('account.toDark') : t('account.toLight')}</span>
          </button>`,
      );
      const menuToggle = qs<HTMLButtonElement>('[data-theme-toggle-menu]', menuExtra)!;
      menuToggle.addEventListener('click', () => void toggleTheme(menuToggle));
    }
    bindBadges();
  };

  onAuth(render);
}
