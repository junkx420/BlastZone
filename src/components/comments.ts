import { FIGHTER_BY_SLUG } from '../data/fighters';
import type { Fighter } from '../data/types';
import { dateFormat, locale, t } from '../i18n';
import { accentVars } from '../lib/color';
import { html, mount, qs, type Markup } from '../lib/dom';
import { link } from '../lib/router';
import { ApiError } from '../services/api';
import { onAuth, type AuthState } from '../services/auth';
import { deleteComment, invalidateComments, listComments, postComment, type Comment } from '../services/db';
import { cleanComment, COMMENT_MAX, usernameOk } from '../shared/account-rules';
import { openAuth } from './authDialog';
import { faceThumb } from './fighterTile';
import { ICONS } from './icons';

/**
 * Kommentare unter jedem Fighter.
 *
 * Lesen darf jeder. Schreiben nur angemeldete Nutzer mit bestätigter Adresse,
 * das prüfen Server und Datenbank. Kommentartext wird ausschließlich über
 * `html` gerendert, das escaped. Zeilenumbrüche erhält CSS (white-space: pre-line),
 * es wird nie HTML aus Nutzereingaben zusammengesetzt.
 */

const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
const dateFmt = dateFormat({ dateStyle: 'medium', timeStyle: 'short' });

/** Der Server setzt diesen Namen, wenn das Konto des Autors gelöscht ist (api/_lib/supabase.ts). */
const DELETED_AUTHOR = 'Gelöschtes Konto';

export function relative(iso: string): string {
  const seconds = (new Date(iso).getTime() - Date.now()) / 1000;
  const steps: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ];
  for (const [unit, size] of steps) if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
  return t('comments.justNow');
}

/** Main-Fighter-Flair neben dem Namen, mit dem gewählten Skin. */
function flair(slug: string | null, skin: number): Markup {
  const main = slug ? FIGHTER_BY_SLUG.get(slug) : undefined;
  if (!main) return html``;
  return html`<a class="comment__flair" href="${link(`/fighter/${main.slug}`)}" style="${accentVars(main.colors)}" title="${t('comments.mainTitle', { fighter: main.name })}">
    ${faceThumb(main, 'comment__flair-face', skin)}<span>${main.name}</span>
  </a>`;
}

function authorName(name: string): Markup {
  if (usernameOk(name)) return html`<a class="comment__author" href="${link(`/spieler/${name}`)}">${name}</a>`;
  return html`<span class="comment__author">${name === DELETED_AUTHOR ? t('comments.deletedAccount') : name}</span>`;
}

function commentItem(c: Comment, mine: boolean): Markup {
  return html`<li class="comment${mine ? ' is-mine' : ''}" data-comment="${c.id}">
    <header class="comment__head">
      ${authorName(c.author.username)}
      ${flair(c.author.mainFighter, c.author.mainSkin ?? 1)}
      <time class="comment__time" datetime="${c.createdAt}" title="${dateFmt.format(new Date(c.createdAt))}">${relative(c.createdAt)}</time>
      ${mine ? html`<button class="comment__delete" type="button" data-delete="${c.id}">${ICONS.trash}<span data-delete-label>${t('comments.delete')}</span></button>` : ''}
    </header>
    <p class="comment__body">${c.body}</p>
  </li>`;
}

/** Statisches Gerüst. Gefüllt wird es in mountComments, sobald Status und Liste da sind. */
export function commentsSection(f: Fighter): Markup {
  return html`<section class="container fcomments" aria-labelledby="comments-title" data-comments="${f.slug}">
    <div class="section-head">
      <h2 id="comments-title">${t('comments.title')}</h2>
      <p>${t('comments.lead', { fighter: f.name })}</p>
    </div>
    <div class="fcomments__box">
      <div data-composer></div>
      <p class="fcomments__status" role="status" data-list-status>${t('comments.loading')}</p>
      <ol class="fcomments__list" role="list" data-list></ol>
      <div class="fcomments__more" data-more hidden>
        <button class="btn btn--ghost btn--sm" type="button" data-more-btn>${t('comments.loadOlder')}</button>
      </div>
    </div>
  </section>`;
}

export function mountComments(root: HTMLElement, f: Fighter): () => void {
  const section = qs<HTMLElement>(`[data-comments="${f.slug}"]`, root);
  if (!section) return () => {};
  const composerHost = qs<HTMLElement>('[data-composer]', section)!;
  const list = qs<HTMLOListElement>('[data-list]', section)!;
  const status = qs<HTMLElement>('[data-list-status]', section)!;
  const more = qs<HTMLElement>('[data-more]', section)!;
  const moreBtn = qs<HTMLButtonElement>('[data-more-btn]', section)!;

  let comments: Comment[] = [];
  let nextCursor: number | null = null;
  let loadingMore = false;
  let auth: AuthState = { status: 'unknown' };
  let alive = true;

  const myId = (): string | null => (auth.status === 'user' ? auth.user.id : null);

  const renderList = (): void => {
    // `mine` gilt nur, solange noch jemand angemeldet ist. Der Server prüft beim Löschen ohnehin selbst.
    mount(list, html`${comments.map((c) => commentItem(c, c.mine && myId() !== null))}`);
    if (comments.length) status.textContent = '';
    else if (!status.dataset.error) status.textContent = t('comments.empty');
    more.hidden = nextCursor === null || Boolean(status.dataset.error);
  };

  const renderComposer = (): void => {
    if (auth.status === 'unknown') {
      mount(composerHost, html``);
      return;
    }
    if (auth.status === 'guest') {
      mount(
        composerHost,
        html`<div class="fcomments__locked">
          <label class="vh" for="comment-text">${t('comments.write')}</label>
          <textarea id="comment-text" class="fcomments__input" rows="3" disabled aria-describedby="comments-lock"></textarea>
          <div class="fcomments__lock">
            ${ICONS.lock}
            <p id="comments-lock">${auth.available ? t('comments.lockText') : t('comments.unavailable')}</p>
            ${auth.available ? html`<button class="btn btn--primary btn--sm" type="button" data-login>${t('account.login')}</button>` : ''}
          </div>
        </div>`,
      );
      qs('[data-login]', composerHost)?.addEventListener('click', () => openAuth('login', t('comments.lockText')));
      return;
    }

    const { user } = auth;
    mount(
      composerHost,
      html`<form class="fcomments__composer" novalidate data-form>
        <div class="fcomments__as">${t('comments.writingAs')} <strong>${user.username}</strong> ${flair(user.mainFighter, user.mainSkin)}</div>
        <label class="vh" for="comment-text">${t('comments.write')}</label>
        <textarea id="comment-text" class="fcomments__input" rows="3" maxlength="${COMMENT_MAX + 200}" placeholder="${t('comments.placeholder', { fighter: f.name })}" required
          aria-describedby="comment-count"></textarea>
        <div class="fcomments__row">
          <p class="fcomments__hint" id="comment-count" data-count>0 / ${COMMENT_MAX}</p>
          <button class="btn btn--primary btn--sm" type="submit" data-submit><span data-submit-label>${t('comments.post')}</span></button>
        </div>
        <p class="fcomments__error" role="alert" data-error hidden></p>
      </form>`,
    );

    const form = qs<HTMLFormElement>('[data-form]', composerHost)!;
    const input = qs<HTMLTextAreaElement>('textarea', form)!;
    const count = qs<HTMLElement>('[data-count]', form)!;
    const submit = qs<HTMLButtonElement>('[data-submit]', form)!;
    const submitLabel = qs<HTMLElement>('[data-submit-label]', submit)!;
    const error = qs<HTMLElement>('[data-error]', form)!;
    const showError = (msg: string | null): void => {
      error.hidden = !msg;
      error.textContent = msg ?? '';
    };

    const updateCount = (): void => {
      const n = [...cleanComment(input.value)].length;
      count.textContent = `${n} / ${COMMENT_MAX}`;
      count.classList.toggle('is-over', n > COMMENT_MAX);
      submit.disabled = n === 0 || n > COMMENT_MAX;
    };
    input.addEventListener('input', updateCount);
    updateCount();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = cleanComment(input.value);
      if (!text || [...text].length > COMMENT_MAX) return;
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      submitLabel.textContent = t('comments.posting');
      showError(null);
      try {
        const created = await postComment(f.slug, text);
        comments = [created, ...comments];
        input.value = '';
        delete status.dataset.error;
        renderList();
      } catch (err) {
        showError(err instanceof ApiError ? err.message : t('api.failed'));
      } finally {
        submit.removeAttribute('aria-busy');
        submitLabel.textContent = t('comments.post');
        updateCount();
      }
    });
  };

  // Löschen in zwei Schritten: Der erste Klick fragt nach, der zweite löscht.
  const armed = new Map<number, number>();
  list.addEventListener('click', async (e) => {
    const button = (e.target as Element | null)?.closest<HTMLButtonElement>('[data-delete]');
    if (!button) return;
    const id = Number(button.dataset.delete);
    const label = qs<HTMLElement>('[data-delete-label]', button)!;
    if (!armed.has(id)) {
      label.textContent = t('comments.confirmDelete');
      button.classList.add('is-armed');
      armed.set(
        id,
        window.setTimeout(() => {
          armed.delete(id);
          label.textContent = t('comments.delete');
          button.classList.remove('is-armed');
        }, 4000),
      );
      return;
    }
    window.clearTimeout(armed.get(id));
    armed.delete(id);
    button.disabled = true;
    try {
      await deleteComment(id, f.slug);
      comments = comments.filter((c) => c.id !== id);
      renderList();
    } catch (err) {
      button.disabled = false;
      label.textContent = err instanceof ApiError ? err.message : t('comments.deleteFailed');
    }
  });

  const failText = (err: unknown): string =>
    err instanceof ApiError && (err.code === 'offline' || err.code === 'timeout')
      ? err.message
      : err instanceof ApiError && err.status === 429
        ? err.message
        : t('comments.listUnavailable');

  const load = async (): Promise<void> => {
    status.textContent = t('comments.loading');
    try {
      const page = await listComments(f.slug);
      comments = page.comments;
      nextCursor = page.nextCursor;
      delete status.dataset.error;
    } catch (err) {
      comments = [];
      nextCursor = null;
      status.dataset.error = '1';
      if (!alive) return;
      // Fehlerzustand mit Ausweg statt stummer Leere.
      mount(status, html`${failText(err)} <button class="link-btn" type="button" data-retry>${t('state.retry')}</button>`);
      qs('[data-retry]', status)?.addEventListener('click', () => void load(), { once: true });
    }
    if (alive) renderList();
  };

  moreBtn.addEventListener('click', async () => {
    if (loadingMore || nextCursor === null) return;
    loadingMore = true;
    moreBtn.disabled = true;
    moreBtn.setAttribute('aria-busy', 'true');
    moreBtn.textContent = t('state.loading');
    try {
      const page = await listComments(f.slug, nextCursor);
      // Doppelte ausschließen, falls sich Seiten durch neue Kommentare überschneiden.
      const known = new Set(comments.map((c) => c.id));
      comments = [...comments, ...page.comments.filter((c) => !known.has(c.id))];
      nextCursor = page.nextCursor;
      moreBtn.textContent = t('comments.loadOlder');
    } catch (err) {
      moreBtn.textContent = `${failText(err)} ${t('comments.tryAgain')}`;
    } finally {
      loadingMore = false;
      moreBtn.disabled = false;
      moreBtn.removeAttribute('aria-busy');
    }
    if (alive) renderList();
  });

  const stop = onAuth((next) => {
    const changedUser = (next.status === 'user' ? next.user.id : null) !== myId() || next.status !== auth.status;
    const mainChanged =
      next.status === 'user' && auth.status === 'user' && (next.user.mainFighter !== auth.user.mainFighter || next.user.mainSkin !== auth.user.mainSkin);
    const wasKnown = auth.status !== 'unknown';
    auth = next;
    if (mainChanged && next.status === 'user') {
      // Eigene Kommentare zeigen sofort den neuen Main und Skin, wie es nach dem nächsten Laden ohnehin wäre.
      const { mainFighter, mainSkin } = next.user;
      comments = comments.map((c) => (c.mine ? { ...c, author: { ...c.author, mainFighter, mainSkin } } : c));
    }
    if (changedUser || mainChanged) renderComposer();
    renderList();
    // Welche Kommentare die eigenen sind, weiß nur der Server. Nach An- oder Abmelden neu fragen.
    if (changedUser && wasKnown) {
      invalidateComments();
      void load();
    }
  });
  void load();

  return () => {
    alive = false;
    stop();
    armed.forEach((timer) => window.clearTimeout(timer));
  };
}
