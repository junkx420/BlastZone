import { t } from '../i18n';
import { qsa } from '../lib/dom';
import { ApiError } from '../services/api';
import { currentUser } from '../services/auth';
import { onBookmarks, toggleBookmark } from '../services/db';
import { openAuth } from './authDialog';

/**
 * Lesezeichen an jeder Combo-Karte.
 *
 * Die Knöpfe stehen in jeder Karte im Markup (comboCard), sichtbar macht sie
 * erst `html[data-auth="user"]` per CSS. So braucht keine Seite, die Karten
 * rendert, von Konten zu wissen.
 *
 * Ein Klick-Listener für das ganze Dokument, und ein MutationObserver setzt
 * `aria-pressed` auch auf Karten, die später nachgeladen werden (Guides ab A+
 * kommen asynchron).
 */
export function initBookmarkButtons(): void {
  let ids: ReadonlySet<string> = new Set();

  const sync = (root: ParentNode = document): void => {
    qsa<HTMLButtonElement>('[data-bookmark]', root as HTMLElement).forEach((b) => {
      const on = ids.has(b.dataset.bookmark ?? '');
      if (b.getAttribute('aria-pressed') === String(on)) return;
      b.setAttribute('aria-pressed', String(on));
      b.title = on ? t('bookmark.remove') : t('bookmark.save');
      const label = b.querySelector('.vh');
      if (label) label.textContent = on ? t('bookmark.savedVh') : t('bookmark.saveVh');
    });
  };

  onBookmarks((next) => {
    ids = next;
    sync();
  });

  let queued = false;
  new MutationObserver(() => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => {
      queued = false;
      sync();
    });
  }).observe(document.body, { childList: true, subtree: true });

  document.addEventListener('click', async (e) => {
    const button = (e.target as Element | null)?.closest<HTMLButtonElement>('[data-bookmark]');
    if (!button) return;
    e.preventDefault();
    if (!currentUser()) {
      openAuth('login', t('bookmark.loginPrompt'));
      return;
    }
    button.disabled = true;
    try {
      await toggleBookmark(button.dataset.bookmark!);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) openAuth('login', t('bookmark.sessionExpired'));
    } finally {
      button.disabled = false;
    }
  });
}
