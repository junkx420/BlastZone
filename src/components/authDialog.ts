import { ApiError } from '../services/api';
import { login, resendConfirmation, signup } from '../services/auth';
import { checkPassword, DISPOSABLE_MESSAGE, normalizeEmail, passwordOk, usernameOk } from '../shared/account-rules';
import { isDisposableEmail } from '../shared/disposable-email';
import { html, mount, qs, qsa } from '../lib/dom';
import { lockScroll } from '../lib/motion';
import { ICONS } from './icons';

/**
 * Dialog für Anmelden und Registrieren.
 *
 * Der Browser prüft Passwort, Name und Wegwerf-Adressen schon beim Tippen, damit
 * niemand erst nach dem Absenden erfährt, was fehlt. Verbindlich prüft der Server.
 * Keine Inline-Handler (die CSP verbietet sie), alles über addEventListener.
 */

type Mode = 'login' | 'signup';

export interface AuthDialog {
  open(mode?: Mode, hint?: string): void;
}

let instance: AuthDialog | null = null;

/** Öffnet den Dialog von überall. Legt ihn beim ersten Aufruf an. */
export const openAuth = (mode: Mode = 'login', hint?: string): void => (instance ??= createAuthDialog()).open(mode, hint);

function passwordRules(password: string): ReturnType<typeof html> {
  return html`${checkPassword(password)
    .filter((c) => c.id !== 'max' || !c.ok)
    .map(
      (c) => html`<li class="authdlg__rule${c.ok ? ' is-ok' : ''}">
        ${c.ok ? ICONS.check : ICONS.dot}<span>${c.label}</span><span class="vh">${c.ok ? ', erfüllt' : ', fehlt noch'}</span>
      </li>`,
    )}`;
}

function createAuthDialog(): AuthDialog {
  const dialog = document.createElement('dialog');
  dialog.className = 'authdlg';
  dialog.setAttribute('aria-labelledby', 'authdlg-title');
  dialog.setAttribute('data-lenis-prevent', '');
  mount(
    dialog,
    html`<div class="authdlg__panel">
      <div class="authdlg__top">
        <h2 class="authdlg__title" id="authdlg-title">Konto</h2>
        <button class="authdlg__close btn btn--icon btn--ghost" type="button" data-close aria-label="Schließen">${ICONS.close}</button>
      </div>
      <p class="authdlg__hint" data-hint hidden></p>

      <div class="authdlg__tabs" role="tablist" aria-label="Anmelden oder registrieren">
        <button class="authdlg__tab" type="button" role="tab" id="authdlg-tab-login" aria-controls="authdlg-login" data-tab="login">Anmelden</button>
        <button class="authdlg__tab" type="button" role="tab" id="authdlg-tab-signup" aria-controls="authdlg-signup" data-tab="signup">Registrieren</button>
      </div>

      <form class="authdlg__form" id="authdlg-login" role="tabpanel" aria-labelledby="authdlg-tab-login" novalidate data-form="login">
        <div class="authdlg__field">
          <label for="login-email">E-Mail</label>
          <input class="authdlg__input" id="login-email" name="email" type="email" autocomplete="email" inputmode="email" required spellcheck="false" />
        </div>
        <div class="authdlg__field">
          <label for="login-password">Passwort</label>
          <div class="authdlg__pw">
            <input class="authdlg__input" id="login-password" name="password" type="password" autocomplete="current-password" required />
            <button class="authdlg__reveal" type="button" data-reveal-pw aria-controls="login-password" aria-pressed="false">Zeigen</button>
          </div>
        </div>
        <p class="authdlg__error" role="alert" data-error hidden></p>
        <button class="authdlg__resend" type="button" data-resend hidden>Bestätigungsmail erneut senden</button>
        <button class="btn btn--primary authdlg__submit" type="submit">${ICONS.lock}<span data-label>Anmelden</span></button>
      </form>

      <form class="authdlg__form" id="authdlg-signup" role="tabpanel" aria-labelledby="authdlg-tab-signup" novalidate data-form="signup">
        <div class="authdlg__field">
          <label for="signup-username">Benutzername</label>
          <input class="authdlg__input" id="signup-username" name="username" type="text" autocomplete="username" required
            minlength="3" maxlength="20" spellcheck="false" aria-describedby="signup-username-help" />
          <p class="authdlg__help" id="signup-username-help">3 bis 20 Zeichen, sichtbar bei deinen Kommentaren.</p>
        </div>
        <div class="authdlg__field">
          <label for="signup-email">E-Mail</label>
          <input class="authdlg__input" id="signup-email" name="email" type="email" autocomplete="email" inputmode="email" required
            spellcheck="false" aria-describedby="signup-email-help" />
          <p class="authdlg__help" id="signup-email-help" data-email-help>Wir schicken dir einen Bestätigungslink.</p>
        </div>
        <div class="authdlg__field">
          <label for="signup-password">Passwort</label>
          <div class="authdlg__pw">
            <input class="authdlg__input" id="signup-password" name="password" type="password" autocomplete="new-password" required
              aria-describedby="signup-rules" />
            <button class="authdlg__reveal" type="button" data-reveal-pw aria-controls="signup-password" aria-pressed="false">Zeigen</button>
          </div>
          <ul class="authdlg__rules" id="signup-rules" role="list" aria-live="polite" data-rules>${passwordRules('')}</ul>
        </div>
        <!-- Honeypot gegen Bots. Für Menschen unsichtbar und aus der Tab-Reihenfolge genommen. -->
        <div class="authdlg__trap" aria-hidden="true">
          <label for="signup-website">Website</label>
          <input id="signup-website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <p class="authdlg__error" role="alert" data-error hidden></p>
        <button class="btn btn--primary authdlg__submit" type="submit">${ICONS.user}<span data-label>Konto anlegen</span></button>
        <p class="authdlg__legal">Mit dem Konto speichern wir E-Mail, Benutzername und was du selbst anlegst. Details in der <a href="#/datenschutz" data-close-link>Datenschutzerklärung</a>.</p>
      </form>

      <div class="authdlg__done" data-done hidden tabindex="-1">
        <span class="authdlg__done-icon">${ICONS.mail}</span>
        <h3>Fast geschafft</h3>
        <p>Wir haben dir einen Link an <strong data-done-mail></strong> geschickt. Erst nach dem Klick darauf kannst du dich anmelden und kommentieren.</p>
        <p class="authdlg__help">Nichts angekommen? Schau im Spam-Ordner nach oder fordere den Link neu an.</p>
        <p class="authdlg__notice" role="status" data-done-status></p>
        <button class="btn btn--sm authdlg__again" type="button" data-resend-done>Link erneut senden</button>
      </div>
    </div>`,
  );
  document.body.append(dialog);

  const hint = qs<HTMLElement>('[data-hint]', dialog)!;
  const tabs = qsa<HTMLButtonElement>('[data-tab]', dialog);
  const forms = qsa<HTMLFormElement>('[data-form]', dialog);
  const done = qs<HTMLElement>('[data-done]', dialog)!;
  let mode: Mode = 'login';
  let lastSignupEmail = '';

  const setError = (form: HTMLFormElement, message: string | null): void => {
    const el = qs<HTMLElement>('[data-error]', form)!;
    el.hidden = !message;
    el.textContent = message ?? '';
  };

  const setBusy = (form: HTMLFormElement, busy: boolean, label: string): void => {
    const button = qs<HTMLButtonElement>('[type="submit"]', form)!;
    button.disabled = busy;
    button.setAttribute('aria-busy', String(busy));
    qs('[data-label]', button)!.textContent = label;
  };

  const select = (next: Mode, focus = true): void => {
    mode = next;
    done.hidden = true;
    tabs.forEach((t) => {
      const on = t.dataset.tab === next;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    forms.forEach((f) => {
      f.hidden = f.dataset.form !== next;
      setError(f, null);
    });
    qs<HTMLElement>('#authdlg-title', dialog)!.textContent = next === 'login' ? 'Anmelden' : 'Konto anlegen';
    if (focus) qs<HTMLInputElement>(`[data-form="${next}"] input:not([tabindex="-1"])`, dialog)?.focus();
  };

  tabs.forEach((t) => t.addEventListener('click', () => select(t.dataset.tab as Mode)));
  qs('[role="tablist"]', dialog)!.addEventListener('keydown', (e) => {
    const key = (e as KeyboardEvent).key;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;
    e.preventDefault();
    select(mode === 'login' ? 'signup' : 'login');
    qs<HTMLButtonElement>(`[data-tab="${mode}"]`, dialog)!.focus();
  });

  qsa<HTMLButtonElement>('[data-reveal-pw]', dialog).forEach((b) =>
    b.addEventListener('click', () => {
      const input = qs<HTMLInputElement>(`#${b.getAttribute('aria-controls')}`, dialog)!;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      b.setAttribute('aria-pressed', String(show));
      b.textContent = show ? 'Verbergen' : 'Zeigen';
    }),
  );

  const close = (): void => dialog.close();
  qs('[data-close]', dialog)!.addEventListener('click', close);
  qs('[data-close-link]', dialog)!.addEventListener('click', close);
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener('close', () => lockScroll(false));

  /* ── Anmelden ─────────────────────────────────────────────────────────── */

  const loginForm = qs<HTMLFormElement>('[data-form="login"]', dialog)!;
  const resend = qs<HTMLButtonElement>('[data-resend]', loginForm)!;

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = qs<HTMLInputElement>('[name="email"]', loginForm)!.value;
    const password = qs<HTMLInputElement>('[name="password"]', loginForm)!.value;
    resend.hidden = true;
    if (!normalizeEmail(email) || !password) return setError(loginForm, 'Bitte E-Mail und Passwort eingeben.');
    setError(loginForm, null);
    setBusy(loginForm, true, 'Wird geprüft …');
    try {
      await login(email, password);
      close();
    } catch (err) {
      const apiErr = err instanceof ApiError ? err : null;
      setError(loginForm, apiErr?.message ?? 'Das hat nicht geklappt.');
      resend.hidden = apiErr?.code !== 'email-not-confirmed';
      if (apiErr?.code === 'invalid-credentials') qs<HTMLInputElement>('[name="password"]', loginForm)!.select();
    } finally {
      setBusy(loginForm, false, 'Anmelden');
    }
  });

  resend.addEventListener('click', async () => {
    resend.disabled = true;
    try {
      setError(loginForm, await resendConfirmation(qs<HTMLInputElement>('[name="email"]', loginForm)!.value));
    } catch (err) {
      setError(loginForm, err instanceof ApiError ? err.message : 'Das hat nicht geklappt.');
    } finally {
      resend.disabled = false;
    }
  });

  /* ── Registrieren ─────────────────────────────────────────────────────── */

  const signupForm = qs<HTMLFormElement>('[data-form="signup"]', dialog)!;
  const field = (name: string): HTMLInputElement => qs<HTMLInputElement>(`[name="${name}"]`, signupForm)!;
  const rules = qs<HTMLElement>('[data-rules]', signupForm)!;
  const emailHelp = qs<HTMLElement>('[data-email-help]', signupForm)!;

  field('password').addEventListener('input', () => mount(rules, passwordRules(field('password').value)));

  const checkEmailField = (): boolean => {
    const value = field('email').value;
    const bad = Boolean(normalizeEmail(value)) && isDisposableEmail(normalizeEmail(value)!);
    emailHelp.textContent = bad ? DISPOSABLE_MESSAGE : 'Wir schicken dir einen Bestätigungslink.';
    emailHelp.classList.toggle('is-error', bad);
    field('email').setAttribute('aria-invalid', String(bad));
    return !bad;
  };
  field('email').addEventListener('blur', checkEmailField);
  field('email').addEventListener('input', () => {
    if (emailHelp.classList.contains('is-error')) checkEmailField();
  });

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = field('username').value.trim();
    const email = normalizeEmail(field('email').value);
    const password = field('password').value;

    let problem: string | null = null;
    if (!usernameOk(username)) problem = 'Der Name braucht 3 bis 20 Zeichen: Buchstaben, Ziffern, Unterstrich oder Bindestrich.';
    else if (!email) problem = 'Diese E-Mail-Adresse sieht nicht gültig aus.';
    else if (!checkEmailField()) problem = DISPOSABLE_MESSAGE;
    else if (!passwordOk(password)) problem = 'Das Passwort erfüllt noch nicht alle Regeln.';
    if (problem || !email) {
      setError(signupForm, problem);
      return;
    }

    setError(signupForm, null);
    setBusy(signupForm, true, 'Konto wird angelegt …');
    try {
      await signup({ email, password, username, website: field('website').value });
      lastSignupEmail = email;
      signupForm.hidden = true;
      qs('[data-done-mail]', done)!.textContent = email;
      qs('[data-done-status]', done)!.textContent = '';
      done.hidden = false;
      qs<HTMLElement>('#authdlg-title', dialog)!.textContent = 'Bestätige deine E-Mail';
      done.focus();
      signupForm.reset();
      mount(rules, passwordRules(''));
    } catch (err) {
      setError(signupForm, err instanceof ApiError ? err.message : 'Das hat nicht geklappt.');
    } finally {
      setBusy(signupForm, false, 'Konto anlegen');
    }
  });

  const resendDone = qs<HTMLButtonElement>('[data-resend-done]', done)!;
  resendDone.addEventListener('click', async () => {
    const status = qs<HTMLElement>('[data-done-status]', done)!;
    resendDone.disabled = true;
    try {
      status.textContent = await resendConfirmation(lastSignupEmail);
    } catch (err) {
      status.textContent = err instanceof ApiError ? err.message : 'Das hat nicht geklappt.';
    } finally {
      resendDone.disabled = false;
    }
  });

  return {
    open(next = 'login', message) {
      hint.hidden = !message;
      hint.textContent = message ?? '';
      if (!dialog.open) {
        dialog.showModal();
        lockScroll(true);
      }
      select(next);
    },
  };
}
