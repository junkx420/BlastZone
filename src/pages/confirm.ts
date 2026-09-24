import { ICONS } from '../components/icons';
import { t } from '../i18n';
import { html, mount, qs } from '../lib/dom';
import { link, type Route } from '../lib/router';
import { ApiError } from '../services/api';
import { confirmEmail, resendConfirmation } from '../services/auth';
import type { PageView } from './types';

/**
 * #/bestaetigen?token_hash=…  Ziel des Links aus der Bestätigungsmail.
 *
 * Bestätigt wird erst per Klick, nicht beim Aufruf: Mail-Programme und
 * Virenscanner rufen Links oft vorab auf und würden den einmaligen Token sonst
 * verbrauchen, bevor der Mensch überhaupt klickt.
 */
export function confirmPage(route: Route): PageView {
  const tokenHash = route.query.get('token_hash') ?? '';
  return {
    title: `${t('confirm.pageTitle')} | Blastzone`,
    markup: html`<div class="page">
      <section class="container confirm glass" aria-labelledby="confirm-title" data-confirm>
        <span class="confirm__icon">${ICONS.mail}</span>
        <h1 id="confirm-title" class="confirm__title">${t('confirm.title')}</h1>
        ${tokenHash
          ? html`<p class="confirm__text" data-text>${t('confirm.text')}</p>
              <button class="btn btn--primary" type="button" data-confirm-btn>${ICONS.check}${t('confirm.button')}</button>`
          : html`<p class="confirm__text" data-text>${t('confirm.incomplete')}</p>`}
        <p class="fcomments__error" role="alert" data-error hidden></p>
        <form class="confirm__resend" novalidate data-resend ${tokenHash ? 'hidden' : ''}>
          <label for="resend-email">${t('confirm.resendLabel')}</label>
          <div class="confirm__row">
            <input id="resend-email" class="input confirm__input" type="email" autocomplete="email" inputmode="email" required />
            <button class="btn btn--sm" type="submit">${t('confirm.send')}</button>
          </div>
          <p class="profile-status" role="status" data-resend-status></p>
        </form>
      </section>
    </div>`,
    mount(root) {
      const box = qs<HTMLElement>('[data-confirm]', root)!;
      const error = qs<HTMLElement>('[data-error]', box)!;
      const resendForm = qs<HTMLFormElement>('[data-resend]', box)!;
      const button = qs<HTMLButtonElement>('[data-confirm-btn]', box);

      // Den Token nicht in der Adresszeile und im Verlauf stehen lassen.
      history.replaceState(history.state, '', link('/bestaetigen'));

      button?.addEventListener('click', async () => {
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
        error.hidden = true;
        try {
          const user = await confirmEmail(tokenHash);
          mount(
            box,
            html`<span class="confirm__icon confirm__icon--ok">${ICONS.check}</span>
              <h1 class="confirm__title">${t('confirm.welcome', { name: user.username })}</h1>
              <p class="confirm__text">${t('confirm.done')}</p>
              <a class="btn btn--primary" href="${link('/profil')}">${ICONS.user}${t('confirm.toProfile')}</a>`,
          );
        } catch (err) {
          button.disabled = false;
          button.removeAttribute('aria-busy');
          error.hidden = false;
          error.textContent = err instanceof ApiError ? err.message : t('api.failed');
          if (err instanceof ApiError && err.code === 'invalid-link') {
            button.hidden = true;
            resendForm.hidden = false;
          }
        }
      });

      resendForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = qs<HTMLElement>('[data-resend-status]', resendForm)!;
        const submit = qs<HTMLButtonElement>('[type="submit"]', resendForm)!;
        submit.disabled = true;
        submit.setAttribute('aria-busy', 'true');
        try {
          status.textContent = await resendConfirmation(qs<HTMLInputElement>('input', resendForm)!.value);
        } catch (err) {
          status.textContent = err instanceof ApiError ? err.message : t('api.failed');
        } finally {
          submit.disabled = false;
          submit.removeAttribute('aria-busy');
        }
      });

      return () => {};
    },
  };
}
