import { ICONS } from '../components/icons';
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
    title: 'E-Mail bestätigen | Blastzone',
    markup: html`<div class="page">
      <section class="container confirm glass" aria-labelledby="confirm-title" data-confirm>
        <span class="confirm__icon">${ICONS.mail}</span>
        <h1 id="confirm-title" class="confirm__title">E-Mail bestätigen</h1>
        ${tokenHash
          ? html`<p class="confirm__text" data-text>Ein Klick noch, dann ist dein Konto freigeschaltet.</p>
              <button class="btn btn--primary" type="button" data-confirm-btn>${ICONS.check}Konto freischalten</button>`
          : html`<p class="confirm__text" data-text>Der Link ist unvollständig. Öffne ihn direkt aus der Mail oder fordere unten einen neuen an.</p>`}
        <p class="fcomments__error" role="alert" data-error hidden></p>
        <form class="confirm__resend" novalidate data-resend ${tokenHash ? 'hidden' : ''}>
          <label for="resend-email">Neuen Link an diese Adresse schicken</label>
          <div class="confirm__row">
            <input id="resend-email" class="input confirm__input" type="email" autocomplete="email" inputmode="email" required />
            <button class="btn btn--sm" type="submit">Senden</button>
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
        error.hidden = true;
        try {
          const user = await confirmEmail(tokenHash);
          mount(
            box,
            html`<span class="confirm__icon confirm__icon--ok">${ICONS.check}</span>
              <h1 class="confirm__title">Willkommen, ${user.username}</h1>
              <p class="confirm__text">Dein Konto ist freigeschaltet und du bist angemeldet. Leg als Nächstes deinen Main fest.</p>
              <a class="btn btn--primary" href="${link('/profil')}">${ICONS.user}Zum Profil</a>`,
          );
        } catch (err) {
          button.disabled = false;
          error.hidden = false;
          error.textContent = err instanceof ApiError ? err.message : 'Das hat nicht geklappt.';
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
        try {
          status.textContent = await resendConfirmation(qs<HTMLInputElement>('input', resendForm)!.value);
        } catch (err) {
          status.textContent = err instanceof ApiError ? err.message : 'Das hat nicht geklappt.';
        } finally {
          submit.disabled = false;
        }
      });

      return () => {};
    },
  };
}
