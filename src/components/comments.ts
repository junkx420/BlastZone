import { FIGHTER_BY_SLUG } from '../data/fighters';
import type { Fighter } from '../data/types';
import { accentVars } from '../lib/color';
import { html, mount, qs, type Markup } from '../lib/dom';
import { link } from '../lib/router';
import { ApiError } from '../services/api';
import { onAuth, type AuthState } from '../services/auth';
import { deleteComment, listComments, postComment, type Comment } from '../services/db';
import { cleanComment, COMMENT_MAX } from '../shared/account-rules';
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

const rtf = new Intl.RelativeTimeFormat('de', { numeric: 'auto' });
const dateFmt = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short' });

function relative(iso: string): string {
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
  return 'gerade eben';
}

/** Main-Fighter-Flair neben dem Namen. */
function flair(slug: string | null): Markup {
  const main = slug ? FIGHTER_BY_SLUG.get(slug) : undefined;
  if (!main) return html``;
  return html`<a class="comment__flair" href="${link(`/fighter/${main.slug}`)}" style="${accentVars(main.colors)}" title="Main: ${main.name}">
    ${faceThumb(main, 'comment__flair-face')}<span>${main.name}</span>
  </a>`;
}

function commentItem(c: Comment, mine: boolean): Markup {
  return html`<li class="comment${mine ? ' is-mine' : ''}" data-comment="${c.id}">
    <header class="comment__head">
      <span class="comment__author">${c.author.username}</span>
      ${flair(c.author.mainFighter)}
      <time class="comment__time" datetime="${c.createdAt}" title="${dateFmt.format(new Date(c.createdAt))}">${relative(c.createdAt)}</time>
      ${mine ? html`<button class="comment__delete" type="button" data-delete="${c.id}">${ICONS.trash}<span data-delete-label>Löschen</span></button>` : ''}
    </header>
    <p class="comment__body">${c.body}</p>
  </li>`;
}

/** Statisches Gerüst. Gefüllt wird es in mountComments, sobald Status und Liste da sind. */
export function commentsSection(f: Fighter): Markup {
  return html`<section class="container fcomments" aria-labelledby="comments-title" data-comments="${f.slug}">
    <div class="section-head">
      <h2 id="comments-title">Diskussion</h2>
      <p>Matchups, Setups und eigene Routen zu ${f.name}.</p>
    </div>
    <div class="fcomments__box">
      <div data-composer></div>
      <p class="fcomments__status" role="status" data-list-status>Kommentare werden geladen …</p>
      <ol class="fcomments__list" role="list" data-list></ol>
    </div>
  </section>`;
}

export function mountComments(root: HTMLElement, f: Fighter): () => void {
  const section = qs<HTMLElement>(`[data-comments="${f.slug}"]`, root);
  if (!section) return () => {};
  const composerHost = qs<HTMLElement>('[data-composer]', section)!;
  const list = qs<HTMLOListElement>('[data-list]', section)!;
  const status = qs<HTMLElement>('[data-list-status]', section)!;

  let comments: Comment[] = [];
  let auth: AuthState = { status: 'unknown' };
  let alive = true;

  const myId = (): string | null => (auth.status === 'user' ? auth.user.id : null);

  const renderList = (): void => {
    // `mine` gilt nur, solange noch jemand angemeldet ist. Der Server prüft beim Löschen ohnehin selbst.
    mount(list, html`${comments.map((c) => commentItem(c, c.mine && myId() !== null))}`);
    if (comments.length) status.textContent = '';
    else if (!status.dataset.error) status.textContent = 'Noch keine Kommentare. Fang an.';
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
          <label class="vh" for="comment-text">Kommentar schreiben</label>
          <textarea id="comment-text" class="fcomments__input" rows="3" disabled aria-describedby="comments-lock"></textarea>
          <div class="fcomments__lock">
            ${ICONS.lock}
            <p id="comments-lock">${auth.available ? 'Logge dich ein, um mitzudiskutieren' : 'Kommentieren ist gerade nicht möglich.'}</p>
            ${auth.available ? html`<button class="btn btn--primary btn--sm" type="button" data-login>Einloggen</button>` : ''}
          </div>
        </div>`,
      );
      qs('[data-login]', composerHost)?.addEventListener('click', () => openAuth('login', 'Logge dich ein, um mitzudiskutieren.'));
      return;
    }

    const { user } = auth;
    mount(
      composerHost,
      html`<form class="fcomments__composer" novalidate data-form>
        <div class="fcomments__as">Du schreibst als <strong>${user.username}</strong> ${flair(user.mainFighter)}</div>
        <label class="vh" for="comment-text">Kommentar schreiben</label>
        <textarea id="comment-text" class="fcomments__input" rows="3" maxlength="${COMMENT_MAX + 200}" placeholder="Was funktioniert bei dir mit ${f.name}?" required
          aria-describedby="comment-count"></textarea>
        <div class="fcomments__row">
          <p class="fcomments__hint" id="comment-count" data-count>0 / ${COMMENT_MAX}</p>
          <button class="btn btn--primary btn--sm" type="submit" data-submit>Posten</button>
        </div>
        <p class="fcomments__error" role="alert" data-error hidden></p>
      </form>`,
    );

    const form = qs<HTMLFormElement>('[data-form]', composerHost)!;
    const input = qs<HTMLTextAreaElement>('textarea', form)!;
    const count = qs<HTMLElement>('[data-count]', form)!;
    const submit = qs<HTMLButtonElement>('[data-submit]', form)!;
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
      submit.textContent = 'Wird gepostet …';
      showError(null);
      try {
        const created = await postComment(f.slug, text);
        comments = [created, ...comments];
        input.value = '';
        delete status.dataset.error;
        renderList();
      } catch (err) {
        showError(err instanceof ApiError ? err.message : 'Das hat nicht geklappt.');
      } finally {
        submit.textContent = 'Posten';
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
      label.textContent = 'Wirklich löschen?';
      button.classList.add('is-armed');
      armed.set(
        id,
        window.setTimeout(() => {
          armed.delete(id);
          label.textContent = 'Löschen';
          button.classList.remove('is-armed');
        }, 4000),
      );
      return;
    }
    window.clearTimeout(armed.get(id));
    armed.delete(id);
    button.disabled = true;
    try {
      await deleteComment(id);
      comments = comments.filter((c) => c.id !== id);
      renderList();
    } catch (err) {
      button.disabled = false;
      label.textContent = err instanceof ApiError ? err.message : 'Löschen fehlgeschlagen';
    }
  });

  const load = async (): Promise<void> => {
    try {
      comments = await listComments(f.slug);
      delete status.dataset.error;
    } catch (err) {
      comments = [];
      status.dataset.error = '1';
      status.textContent = err instanceof ApiError && err.code !== 'offline' ? 'Kommentare sind gerade nicht verfügbar.' : 'Kommentare konnten nicht geladen werden.';
    }
    if (alive) renderList();
  };

  const stop = onAuth((next) => {
    const changedUser = (next.status === 'user' ? next.user.id : null) !== myId() || next.status !== auth.status;
    const mainChanged = next.status === 'user' && auth.status === 'user' && next.user.mainFighter !== auth.user.mainFighter;
    const wasKnown = auth.status !== 'unknown';
    auth = next;
    if (mainChanged && next.status === 'user') {
      // Eigene Kommentare zeigen sofort den neuen Main, wie es nach dem nächsten Laden ohnehin wäre.
      const { mainFighter } = next.user;
      comments = comments.map((c) => (c.mine ? { ...c, author: { ...c.author, mainFighter } } : c));
    }
    if (changedUser || mainChanged) renderComposer();
    renderList();
    // Welche Kommentare die eigenen sind, weiß nur der Server. Nach An- oder Abmelden neu fragen.
    if (changedUser && wasKnown) void load();
  });
  void load();

  return () => {
    alive = false;
    stop();
    armed.forEach((t) => window.clearTimeout(t));
  };
}
