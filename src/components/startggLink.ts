import { html, mount, qs, type Markup } from '../lib/dom';
import { parse, replaceQuery } from '../lib/router';
import { ApiError } from '../services/api';
import { getStartggLink, linkStartgg, STARTGG_AUTHORIZE_URL, unlinkStartgg, verifyStartgg, type StartggLink } from '../services/db';
import { normalizeStartggSlug, STARTGG_HINT } from '../shared/startgg';
import { ICONS } from './icons';
import { bindErrorState, errorState } from './states';
import { mountPlacements } from './startggPlacements';

/**
 * Profil-Abschnitt „Meine Turniere“: start.gg-Profil verknüpfen, bestätigen und lösen.
 *
 * Zustände, jeder mit eigenem Markup:
 * - lädt:            Skelett in der Form der Karte, damit nichts springt
 * - Fehler:          errorState mit Erneut versuchen
 * - nicht verknüpft: „Mit start.gg anmelden“ und darunter das Formular für die Profil-URL
 * - verknüpft:       Karte mit Gamertag, Bestätigt-Status, Link zu start.gg, Wechseln und Lösen
 *
 * Nach dem Login bei start.gg leitet der Server zurück auf `#/profil?startgg=<code>`.
 * `confirm` schließt die Bestätigung ab, jeder andere Code steht für einen festen Hinweis.
 * Aus der URL wird nie Text übernommen.
 */

const dateFmt = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' });

/** Synchron halten mit `OauthReturnCode` in api/_lib/startggOauth.ts. */
const OAUTH_MESSAGES: Record<string, string> = {
  login: 'Du warst nicht angemeldet. Melde dich an und starte die Bestätigung dann noch einmal.',
  denied: 'Anmeldung bei start.gg abgebrochen. Es wurde nichts geändert.',
  expired: 'Die Anmeldung bei start.gg hat zu lange gedauert oder wurde schon verwendet. Starte die Bestätigung noch einmal.',
  mismatch: 'Die Rückmeldung von start.gg gehörte nicht zu dieser Anmeldung und wurde verworfen. Starte die Bestätigung hier noch einmal.',
  failed: 'start.gg hat die Anmeldung nicht bestätigt. Versuch es noch einmal.',
  unavailable: 'start.gg ist gerade nicht erreichbar. Versuch es gleich noch einmal.',
  'rate-limited': 'Gerade zu viele Versuche. Warte ein paar Minuten und probier es dann erneut.',
  'not-configured': 'Die Bestätigung über start.gg ist gerade nicht verfügbar.',
};

export function startggSection(): Markup {
  return html`<section class="container profile-section glass startgg" aria-labelledby="startgg-title">
    <div class="profile-section__head">
      <h2 id="startgg-title">Meine Turniere</h2>
      <p class="profile-status" role="status" aria-live="polite" data-startgg-status></p>
    </div>
    <p class="profile-section__lead">Verknüpfe dein start.gg-Profil, dann erscheinen hier deine Placements aus Smash-Ultimate-Turnieren. Sehen kannst nur du das.</p>
    <p class="startgg-notice" role="alert" data-startgg-notice hidden></p>
    <div data-startgg aria-busy="true">${skeleton()}</div>
  </section>`;
}

const skeleton = (label = 'Verknüpfung wird geladen.'): Markup =>
  html`<div class="startgg-card startgg-card--skeleton" aria-hidden="true">
    <span class="skeleton__bar skeleton__bar--title"></span>
    <span class="skeleton__bar"></span>
  </div>
  <span class="vh">${label}</span>`;

const oauthMarkup = (): Markup =>
  html`<div class="startgg-oauth">
      <a class="btn btn--primary btn--sm" href="${STARTGG_AUTHORIZE_URL}" data-startgg-oauth>${ICONS.lock}Mit start.gg anmelden</a>
      <p class="startgg-oauth__hint">Du meldest dich einmal bei start.gg an, wir übernehmen genau dieses Konto. Damit ist klar, dass das Profil dir gehört. Dein start.gg-Passwort sehen wir dabei nie.</p>
    </div>
    <p class="startgg-or"><span>oder Profil-Adresse eintragen</span></p>`;

const formMarkup = (value: string, canVerify: boolean): Markup =>
  html`${canVerify ? oauthMarkup() : ''}
    <form class="startgg-form" novalidate data-startgg-form>
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
        <button class="btn ${canVerify ? 'btn--ghost' : 'btn--primary'} btn--sm" type="submit" data-startgg-submit>${ICONS.check}Verknüpfen</button>
      </div>
      <p class="startgg-form__hint" id="startgg-hint">${STARTGG_HINT}${canVerify ? ' So verknüpft gilt das Profil als nicht bestätigt.' : ''}</p>
      <p class="fcomments__error" id="startgg-error" role="alert" data-startgg-error hidden></p>
    </form>`;

const badge = (link: StartggLink): Markup =>
  link.verified
    ? html`<span class="startgg-badge startgg-badge--verified">${ICONS.check}Bestätigt</span>`
    : html`<span class="startgg-badge">Nicht bestätigt</span>`;

const cardMarkup = (link: StartggLink): Markup =>
  html`<div class="startgg-card">
      <div class="startgg-card__who">
        <span class="startgg-card__label">Verknüpft mit</span>
        <span class="startgg-card__name">
          <strong class="startgg-card__tag">${link.gamerTag ?? link.slug}</strong>
          ${badge(link)}
        </span>
        <a class="link startgg-card__url" href="${link.profileUrl}" target="_blank" rel="noopener noreferrer">${link.slug}${ICONS.external}</a>
      </div>
      <p class="startgg-card__since">
        ${link.verified && link.verifiedAt ? `bestätigt am ${dateFmt.format(new Date(link.verifiedAt))}` : `seit ${dateFmt.format(new Date(link.updatedAt))}`}
      </p>
      ${!link.verified && link.canVerify
        ? html`<div class="startgg-verify">
            <p class="startgg-verify__text">Noch nicht bestätigt. Melde dich einmal bei start.gg an, dann ist klar, dass dieses Profil wirklich dir gehört.</p>
            <a class="btn btn--sm btn--primary" href="${STARTGG_AUTHORIZE_URL}" data-startgg-oauth>${ICONS.lock}Mit start.gg bestätigen</a>
          </div>`
        : ''}
      <div class="startgg-card__actions">
        <button class="btn btn--sm btn--ghost" type="button" data-startgg-change>${ICONS.reset}Anderes Profil</button>
        <button class="btn btn--sm btn--ghost startgg-card__unlink" type="button" data-startgg-unlink>${ICONS.trash}<span data-unlink-label>Verknüpfung lösen</span></button>
      </div>
    </div>
    <div class="placements" data-placements aria-live="polite"></div>`;

/** Liest `?startgg=` einmal aus der Adresse und entfernt es, damit ein Neuladen den Schritt nicht wiederholt. */
function takeOauthCode(): string | null {
  const { query } = parse(location.hash);
  const code = query.get('startgg');
  if (code === null) return null;
  query.delete('startgg');
  replaceQuery(query);
  return code;
}

export function mountStartggSection(root: ParentNode): () => void {
  const host = qs<HTMLElement>('[data-startgg]', root);
  const status = qs<HTMLElement>('[data-startgg-status]', root);
  const notice = qs<HTMLElement>('[data-startgg-notice]', root);
  if (!host || !status || !notice) return () => {};
  let alive = true;
  let unlinkTimer = 0;
  let canVerify = false;
  let placementsCleanup: () => void = () => {};

  const done = (): void => {
    host.removeAttribute('aria-busy');
  };

  const showNotice = (text: string | null, tone: 'error' | 'success' = 'error'): void => {
    notice.hidden = !text;
    notice.textContent = text ?? '';
    notice.classList.toggle('startgg-notice--success', tone === 'success');
  };

  const showForm = (value = '', focus = false): void => {
    placementsCleanup();
    placementsCleanup = () => {};
    mount(host, formMarkup(value, canVerify));
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
      showNotice(null);
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
    canVerify = link.canVerify;
    placementsCleanup();
    mount(host, cardMarkup(link));
    done();
    const placementsHost = qs<HTMLElement>('[data-placements]', host);
    placementsCleanup = placementsHost ? mountPlacements(placementsHost, () => showForm(link.profileUrl, true)) : () => {};
    qs('[data-startgg-change]', host)?.addEventListener('click', () => {
      status.textContent = '';
      showNotice(null);
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
        showNotice(null);
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
      (res) => {
        if (!alive) return;
        canVerify = res.canVerify;
        if (res.link) showCard(res.link);
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

  /** Rückkehr von start.gg: Ergebnis beim Server abholen und speichern. */
  const finishOauth = (): void => {
    host.setAttribute('aria-busy', 'true');
    mount(host, skeleton('Bestätigung wird gespeichert.'));
    status.textContent = 'Bestätigung wird gespeichert …';
    verifyStartgg().then(
      ({ link, previousSlug }) => {
        if (!alive) return;
        showCard(link);
        status.textContent = '';
        showNotice(
          `Bestätigt: Dein Blastzone-Konto ist jetzt mit ${link.gamerTag ?? link.slug} verknüpft.${previousSlug ? ` Das vorher eingetragene Profil ${previousSlug} wurde ersetzt.` : ''}`,
          'success',
        );
      },
      (err: unknown) => {
        if (!alive) return;
        status.textContent = '';
        showNotice(err instanceof ApiError ? err.message : 'Die Bestätigung konnte nicht gespeichert werden. Versuch es noch einmal.');
        load();
      },
    );
  };

  const code = takeOauthCode();
  if (code === 'confirm') {
    finishOauth();
  } else {
    if (code !== null) showNotice(OAUTH_MESSAGES[code] ?? OAUTH_MESSAGES.failed ?? null);
    load();
  }

  return () => {
    alive = false;
    window.clearTimeout(unlinkTimer);
    placementsCleanup();
  };
}
