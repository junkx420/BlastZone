import { dateFormat, t, type MessageKey } from '../i18n';
import { html, mount, qs, type Markup } from '../lib/dom';
import { parse, replaceQuery } from '../lib/router';
import { ApiError } from '../services/api';
import { getStartggLink, linkStartgg, STARTGG_AUTHORIZE_URL, unlinkStartgg, verifyStartgg, type StartggLink } from '../services/db';
import { normalizeStartggSlug } from '../shared/startgg';
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

const dateFmt = dateFormat({ dateStyle: 'medium' });

/** Synchron halten mit `OauthReturnCode` in api/_lib/startggOauth.ts. */
const OAUTH_MESSAGES: Record<string, MessageKey> = {
  login: 'startgg.oauth.login',
  denied: 'startgg.oauth.denied',
  expired: 'startgg.oauth.expired',
  mismatch: 'startgg.oauth.mismatch',
  failed: 'startgg.oauth.failed',
  unavailable: 'startgg.oauth.unavailable',
  'rate-limited': 'startgg.oauth.rateLimited',
  'not-configured': 'startgg.oauth.notConfigured',
};

export function startggSection(): Markup {
  return html`<section class="container profile-section glass startgg" aria-labelledby="startgg-title">
    <div class="profile-section__head">
      <h2 id="startgg-title">${t('startgg.title')}</h2>
      <p class="profile-status" role="status" aria-live="polite" data-startgg-status></p>
    </div>
    <p class="profile-section__lead">${t('startgg.lead')}</p>
    <p class="startgg-notice" role="alert" data-startgg-notice hidden></p>
    <div data-startgg aria-busy="true">${skeleton()}</div>
  </section>`;
}

const skeleton = (label = t('startgg.loadingLink')): Markup =>
  html`<div class="startgg-card startgg-card--skeleton" aria-hidden="true">
    <span class="skeleton__bar skeleton__bar--title"></span>
    <span class="skeleton__bar"></span>
  </div>
  <span class="vh">${label}</span>`;

const oauthMarkup = (): Markup =>
  html`<div class="startgg-oauth">
      <a class="btn btn--primary btn--sm" href="${STARTGG_AUTHORIZE_URL}" data-startgg-oauth>${ICONS.lock}${t('startgg.oauthLogin')}</a>
      <p class="startgg-oauth__hint">${t('startgg.oauthHint')}</p>
    </div>
    <p class="startgg-or"><span>${t('startgg.or')}</span></p>`;

const formMarkup = (value: string, canVerify: boolean): Markup =>
  html`${canVerify ? oauthMarkup() : ''}
    <form class="startgg-form" novalidate data-startgg-form>
      <label class="startgg-form__label" for="startgg-profile">${t('startgg.profileLabel')}</label>
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
        <button class="btn ${canVerify ? 'btn--ghost' : 'btn--primary'} btn--sm" type="submit" data-startgg-submit>${ICONS.check}${t('startgg.link')}</button>
      </div>
      <p class="startgg-form__hint" id="startgg-hint">${t('startgg.hint')}${canVerify ? ` ${t('startgg.hintUnverified')}` : ''}</p>
      <p class="fcomments__error" id="startgg-error" role="alert" data-startgg-error hidden></p>
    </form>`;

const badge = (link: StartggLink): Markup =>
  link.verified
    ? html`<span class="startgg-badge startgg-badge--verified">${ICONS.check}${t('startgg.verified')}</span>`
    : html`<span class="startgg-badge">${t('startgg.unverified')}</span>`;

const cardMarkup = (link: StartggLink): Markup =>
  html`<div class="startgg-card">
      <div class="startgg-card__who">
        <span class="startgg-card__label">${t('startgg.linkedWith')}</span>
        <span class="startgg-card__name">
          <strong class="startgg-card__tag">${link.gamerTag ?? link.slug}</strong>
          ${badge(link)}
        </span>
        <a class="link startgg-card__url" href="${link.profileUrl}" target="_blank" rel="noopener noreferrer">${link.slug}${ICONS.external}</a>
      </div>
      <p class="startgg-card__since">
        ${link.verified && link.verifiedAt
          ? t('startgg.verifiedOn', { date: dateFmt.format(new Date(link.verifiedAt)) })
          : t('startgg.since', { date: dateFmt.format(new Date(link.updatedAt)) })}
      </p>
      ${!link.verified && link.canVerify
        ? html`<div class="startgg-verify">
            <p class="startgg-verify__text">${t('startgg.verifyText')}</p>
            <a class="btn btn--sm btn--primary" href="${STARTGG_AUTHORIZE_URL}" data-startgg-oauth>${ICONS.lock}${t('startgg.verifyButton')}</a>
          </div>`
        : ''}
      <div class="startgg-card__actions">
        <button class="btn btn--sm btn--ghost" type="button" data-startgg-change>${ICONS.reset}${t('startgg.change')}</button>
        <button class="btn btn--sm btn--ghost startgg-card__unlink" type="button" data-startgg-unlink>${ICONS.trash}<span data-unlink-label>${t('startgg.unlink')}</span></button>
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
        showError(t('startgg.invalid'));
        input.focus();
        return;
      }
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      mount(submit, html`${ICONS.check}${t('startgg.checking')}`);
      showError(null);
      showNotice(null);
      status.textContent = '';
      try {
        const link = await linkStartgg(slug);
        if (!alive) return;
        showCard(link);
        status.textContent = t('startgg.linkedStatus', { name: link.gamerTag ?? link.slug });
      } catch (err) {
        if (!alive) return;
        showError(err instanceof ApiError ? err.message : t('startgg.failedRetry'));
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        mount(submit, html`${ICONS.check}${t('startgg.link')}`);
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
        label.textContent = t('startgg.unlinkConfirm');
        unlinkTimer = window.setTimeout(() => {
          unlink.classList.remove('is-armed');
          label.textContent = t('startgg.unlink');
        }, 4000);
        return;
      }
      window.clearTimeout(unlinkTimer);
      unlink.disabled = true;
      label.textContent = t('startgg.unlinking');
      try {
        await unlinkStartgg();
        if (!alive) return;
        status.textContent = t('startgg.unlinked');
        showNotice(null);
        showForm('', true);
      } catch (err) {
        if (!alive) return;
        unlink.disabled = false;
        unlink.classList.remove('is-armed');
        label.textContent = err instanceof ApiError ? err.message : t('startgg.unlinkFailed');
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
        mount(host, errorState(t('startgg.loadError'), err instanceof ApiError ? err.message : t('startgg.checkConnection')));
        bindErrorState(host, load);
      },
    );
  };

  /** Rückkehr von start.gg: Ergebnis beim Server abholen und speichern. */
  const finishOauth = (): void => {
    host.setAttribute('aria-busy', 'true');
    mount(host, skeleton(t('startgg.savingVerify')));
    status.textContent = t('startgg.savingVerifyStatus');
    verifyStartgg().then(
      ({ link, previousSlug }) => {
        if (!alive) return;
        showCard(link);
        status.textContent = '';
        const verified = t('startgg.verifiedNotice', { name: link.gamerTag ?? link.slug });
        showNotice(previousSlug ? `${verified} ${t('startgg.replacedNotice', { slug: previousSlug })}` : verified, 'success');
      },
      (err: unknown) => {
        if (!alive) return;
        status.textContent = '';
        showNotice(err instanceof ApiError ? err.message : t('startgg.verifyFailed'));
        load();
      },
    );
  };

  const code = takeOauthCode();
  if (code === 'confirm') {
    finishOauth();
  } else {
    if (code !== null) showNotice(t(OAUTH_MESSAGES[code] ?? 'startgg.oauth.failed'));
    load();
  }

  return () => {
    alive = false;
    window.clearTimeout(unlinkTimer);
    placementsCleanup();
  };
}
