import { html, mount, qs, type Markup } from '../lib/dom';
import { ApiError } from '../services/api';
import { getStartggLink, linkStartgg, unlinkStartgg, type StartggLink } from '../services/db';
import { normalizeStartggSlug, STARTGG_HINT } from '../shared/startgg';
import { ICONS } from './icons';
import { bindErrorState, errorState } from './states';

/**
 * Profil-Abschnitt „Meine Turniere“, Schritt 1: start.gg-Profil verknüpfen und lösen.
 *
 * Zustände, jeder mit eigenem Markup:
 * - lädt:          Skelett in der Form der Karte, damit nichts springt
 * - Fehler:        errorState mit Erneut versuchen
 * - nicht verknüpft: Formular mit Hinweis, wo die Profil-URL steht
 * - verknüpft:     Karte mit Gamertag, Link zu start.gg, Wechseln und Lösen
 *
 * Die Placements selbst (Schritt 3) hängen sich später unter die Karte in `[data-placements]`.
 */

const dateFmt = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' });

export function startggSection(): Markup {
  return html`<section class="container profile-section glass startgg" aria-labelledby="startgg-title">
    <div class="profile-section__head">
      <h2 id="startgg-title">Meine Turniere</h2>
      <p class="profile-status" role="status" aria-live="polite" data-startgg-status></p>
    </div>
    <p class="profile-section__lead">Verknüpfe dein start.gg-Profil, dann erscheinen hier deine Placements aus Smash-Ultimate-Turnieren. Sehen kannst nur du das.</p>
    <div data-startgg aria-busy="true">${skeleton()}</div>
  </section>`;
}

const skeleton = (): Markup =>
  html`<div class="startgg-card startgg-card--skeleton" aria-hidden="true">
    <span class="skeleton__bar skeleton__bar--title"></span>
    <span class="skeleton__bar"></span>
  </div>
  <span class="vh">Verknüpfung wird geladen.</span>`;

const formMarkup = (value = ''): Markup =>
  html`<form class="startgg-form" novalidate data-startgg-form>
    <label class="startgg-form__label" for="startgg-profile">start.gg-Profil</label>
    <div class="startgg-form__row">
      <input
        id="startgg-profile"
        class="input startgg-form__input"
        type="text"
        inputmode="url"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        maxlength="200"
        placeholder="start.gg/user/1a2b3c4d"
        value="${value}"
        aria-describedby="startgg-hint startgg-error"
        data-startgg-input
      />
      <button class="btn btn--primary btn--sm" type="submit" data-startgg-submit>${ICONS.check}Verknüpfen</button>
    </div>
    <p class="startgg-form__hint" id="startgg-hint">${STARTGG_HINT}</p>
    <p class="fcomments__error" id="startgg-error" role="alert" data-startgg-error hidden></p>
  </form>`;

const cardMarkup = (link: StartggLink): Markup =>
  html`<div class="startgg-card">
      <div class="startgg-card__who">
        <span class="startgg-card__label">Verknüpft mit</span>
        <strong class="startgg-card__tag">${link.gamerTag ?? link.slug}</strong>
        <a class="link startgg-card__url" href="${link.profileUrl}" target="_blank" rel="noopener noreferrer">${link.slug}${ICONS.external}</a>
      </div>
      <p class="startgg-card__since">seit ${dateFmt.format(new Date(link.updatedAt))}</p>
      <div class="startgg-card__actions">
        <button class="btn btn--sm btn--ghost" type="button" data-startgg-change>${ICONS.reset}Anderes Profil</button>
        <button class="btn btn--sm btn--ghost startgg-card__unlink" type="button" data-startgg-unlink>${ICONS.trash}<span data-unlink-label>Verknüpfung lösen</span></button>
      </div>
    </div>
    <div data-placements></div>`;

export function mountStartggSection(root: ParentNode): () => void {
  const host = qs<HTMLElement>('[data-startgg]', root);
  const status = qs<HTMLElement>('[data-startgg-status]', root);
  if (!host || !status) return () => {};
  let alive = true;
  let unlinkTimer = 0;

  const done = (): void => {
    host.removeAttribute('aria-busy');
  };

  const showForm = (value = '', focus = false): void => {
    mount(host, formMarkup(value));
    done();
    const form = qs<HTMLFormElement>('[data-startgg-form]', host)!;
    const input = qs<HTMLInputElement>('[data-startgg-input]', form)!;
    const submit = qs<HTMLButtonElement>('[data-startgg-submit]', form)!;
    const error = qs<HTMLElement>('[data-startgg-error]', form)!;
    const showError = (msg: string | null): void => {
      error.hidden = !msg;
      error.textContent = msg ?? '';
      input.setAttribute('aria-invalid', String(Boolean(msg)));
    };
    if (focus) input.focus();

    // Formfehler sofort im Browser, damit nicht jeder Vertipper eine start.gg-Anfrage kostet.
    input.addEventListener('input', () => showError(null));
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (submit.disabled) return;
      const slug = normalizeStartggSlug(input.value);
      if (!slug) {
        showError('Das sieht nicht nach einem start.gg-Profil aus. Kopier die Adresse aus der Browserleiste, wenn du dein Profil auf start.gg geöffnet hast.');
        input.focus();
        return;
      }
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      mount(submit, html`${ICONS.check}Wird geprüft …`);
      showError(null);
      status.textContent = '';
      try {
        const link = await linkStartgg(slug);
        if (!alive) return;
        showCard(link);
        status.textContent = `Verknüpft mit ${link.gamerTag ?? link.slug}`;
      } catch (err) {
        if (!alive) return;
        showError(err instanceof ApiError ? err.message : 'Das hat nicht geklappt. Versuch es gleich noch einmal.');
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        mount(submit, html`${ICONS.check}Verknüpfen`);
        input.focus();
      }
    });
  };

  const showCard = (link: StartggLink): void => {
    mount(host, cardMarkup(link));
    done();
    qs('[data-startgg-change]', host)?.addEventListener('click', () => {
      status.textContent = '';
      showForm(link.profileUrl, true);
    });

    // Lösen in zwei Schritten, wie beim Löschen eines Kommentars.
    const unlink = qs<HTMLButtonElement>('[data-startgg-unlink]', host)!;
    const label = qs<HTMLElement>('[data-unlink-label]', unlink)!;
    unlink.addEventListener('click', async () => {
      if (!unlink.classList.contains('is-armed')) {
        unlink.classList.add('is-armed');
        label.textContent = 'Wirklich lösen?';
        unlinkTimer = window.setTimeout(() => {
          unlink.classList.remove('is-armed');
          label.textContent = 'Verknüpfung lösen';
        }, 4000);
        return;
      }
      window.clearTimeout(unlinkTimer);
      unlink.disabled = true;
      label.textContent = 'Wird gelöst …';
      try {
        await unlinkStartgg();
        if (!alive) return;
        status.textContent = 'Verknüpfung gelöst';
        showForm('', true);
      } catch (err) {
        if (!alive) return;
        unlink.disabled = false;
        unlink.classList.remove('is-armed');
        label.textContent = err instanceof ApiError ? err.message : 'Lösen fehlgeschlagen';
      }
    });
  };

  const load = (): void => {
    host.setAttribute('aria-busy', 'true');
    mount(host, skeleton());
    getStartggLink().then(
      (link) => {
        if (!alive) return;
        if (link) showCard(link);
        else showForm();
      },
      (err: unknown) => {
        if (!alive) return;
        done();
        mount(host, errorState('Die start.gg-Verknüpfung konnte nicht geladen werden.', err instanceof ApiError ? err.message : 'Prüf deine Verbindung und versuch es noch einmal.'));
        bindErrorState(host, load);
      },
    );
  };
  load();

  return () => {
    alive = false;
    window.clearTimeout(unlinkTimer);
  };
}
