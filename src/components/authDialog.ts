import { t, type MessageKey } from '../i18n';
import { html, mount, qs, qsa, type Markup } from '../lib/dom';
import { lockScroll } from '../lib/motion';
import { ApiError } from '../services/api';
import { login, resendConfirmation, signup } from '../services/auth';
import { checkPassword, normalizeEmail, passwordOk, usernameOk, type PasswordCheck } from '../shared/account-rules';
import { isDisposableEmail } from '../shared/disposable-email';
import { ICONS } from './icons';
import { showToast } from './toast';

/**
 * Dialog für Anmelden und Registrieren.
 *
 * Formularzustände:
 * - Fehler stehen am Feld, nicht gesammelt am Ende: rote Kante, Text darunter,
 *   `aria-invalid` und `aria-describedby`. Beim Absenden bekommt das erste falsche
 *   Feld den Fokus. Tippen im Feld nimmt seinen Fehler weg.
 * - Fehler, die keinem Feld gehören (falsche Zugangsdaten, Server nicht erreichbar),
 *   stehen über dem Absenden-Knopf. Bei falschen Zugangsdaten bewusst ohne Hinweis,
 *   welches Feld falsch war.
 * - Beim Warten dreht im Knopf ein Ladekreis (`aria-busy`), der Knopf ist gesperrt.
 * - Erfolg: Anmelden schließt mit einer kurzen Meldung, Registrieren zeigt die
 *   Bestätigungsseite im Dialog.
 *
 * Passwortfelder haben einen Augen-Knopf zum Anzeigen und warnen bei aktiver
 * Feststelltaste. Der Browser prüft beim Tippen, verbindlich prüft der Server.
 * Keine Inline-Handler (die CSP verbietet sie), alles über addEventListener.
 */

type Mode = 'login' | 'signup';

export interface AuthDialog {
  open(mode?: Mode, hint?: string): void;
}

let instance: AuthDialog | null = null;

/** Öffnet den Dialog von überall. Legt ihn beim ersten Aufruf an. */
export const openAuth = (mode: Mode = 'login', hint?: string): void => (instance ??= createAuthDialog()).open(mode, hint);

const RULE_LABEL: Record<PasswordCheck['id'], MessageKey> = {
  length: 'auth.ruleLength',
  case: 'auth.ruleCase',
  digit: 'auth.ruleDigit',
  special: 'auth.ruleSpecial',
  max: 'auth.ruleMax',
};

function passwordRules(password: string): Markup {
  return html`${checkPassword(password)
    .filter((c) => c.id !== 'max' || !c.ok)
    .map(
      (c) => html`<li class="authdlg__rule${c.ok ? ' is-ok' : ''}">
        ${c.ok ? ICONS.check : ICONS.dot}<span>${t(RULE_LABEL[c.id])}</span><span class="vh">${c.ok ? t('auth.ruleOk') : t('auth.ruleMissing')}</span>
      </li>`,
    )}`;
}

/** Passwortfeld mit Augen-Knopf, Feststelltasten-Hinweis und Fehlerzeile. */
function passwordField(id: string, autocomplete: string, extraDescribedBy = ''): Markup {
  return html`<div class="authdlg__pw">
      <input class="authdlg__input" id="${id}" name="password" type="password" autocomplete="${autocomplete}" required
        aria-describedby="${`${id}-error ${id}-caps ${extraDescribedBy}`.trim()}" />
      <button class="authdlg__reveal" type="button" data-reveal-pw aria-controls="${id}" aria-pressed="false">
        <span class="authdlg__eye" data-eye>${ICONS.eye}</span><span class="vh" data-reveal-label>${t('auth.showPassword')}</span>
      </button>
    </div>
    <p class="authdlg__caps" id="${id}-caps" data-caps hidden>${t('auth.capsLock')}</p>
    ${fieldError(id)}`;
}

const fieldError = (id: string): Markup => html`<p class="authdlg__field-error" id="${id}-error" data-field-error hidden></p>`;

function createAuthDialog(): AuthDialog {
  const dialog = document.createElement('dialog');
  dialog.className = 'authdlg';
  dialog.setAttribute('aria-labelledby', 'authdlg-title');
  dialog.setAttribute('data-lenis-prevent', '');
  mount(
    dialog,
    html`<div class="authdlg__panel">
      <div class="authdlg__top">
        <h2 class="authdlg__title" id="authdlg-title">${t('auth.titleLogin')}</h2>
        <button class="authdlg__close btn btn--icon btn--ghost" type="button" data-close aria-label="${t('auth.close')}">${ICONS.close}</button>
      </div>
      <p class="authdlg__hint" data-hint hidden></p>

      <div class="authdlg__tabs" role="tablist" aria-label="${t('auth.tabs')}">
        <button class="authdlg__tab" type="button" role="tab" id="authdlg-tab-login" aria-controls="authdlg-login" data-tab="login">${t('auth.tabLogin')}</button>
        <button class="authdlg__tab" type="button" role="tab" id="authdlg-tab-signup" aria-controls="authdlg-signup" data-tab="signup">${t('auth.tabSignup')}</button>
      </div>

      <form class="authdlg__form" id="authdlg-login" role="tabpanel" aria-labelledby="authdlg-tab-login" novalidate data-form="login">
        <div class="authdlg__field">
          <label for="login-email">${t('auth.email')}</label>
          <input class="authdlg__input" id="login-email" name="email" type="email" autocomplete="email" inputmode="email" required spellcheck="false"
            aria-describedby="login-email-error" />
          ${fieldError('login-email')}
        </div>
        <div class="authdlg__field">
          <label for="login-password">${t('auth.password')}</label>
          ${passwordField('login-password', 'current-password')}
        </div>
        <p class="authdlg__error" role="alert" data-error hidden></p>
        <button class="authdlg__resend" type="button" data-resend hidden>${t('auth.resend')}</button>
        <button class="btn btn--primary authdlg__submit" type="submit">${ICONS.lock}<span data-label>${t('auth.submitLogin')}</span></button>
      </form>

      <form class="authdlg__form" id="authdlg-signup" role="tabpanel" aria-labelledby="authdlg-tab-signup" novalidate data-form="signup">
        <div class="authdlg__field">
          <label for="signup-username">${t('auth.username')}</label>
          <input class="authdlg__input" id="signup-username" name="username" type="text" autocomplete="username" required
            minlength="3" maxlength="20" spellcheck="false" aria-describedby="signup-username-error signup-username-help" />
          ${fieldError('signup-username')}
          <p class="authdlg__help" id="signup-username-help">${t('auth.usernameHelp')}</p>
        </div>
        <div class="authdlg__field">
          <label for="signup-email">${t('auth.email')}</label>
          <input class="authdlg__input" id="signup-email" name="email" type="email" autocomplete="email" inputmode="email" required
            spellcheck="false" aria-describedby="signup-email-error signup-email-help" />
          ${fieldError('signup-email')}
          <p class="authdlg__help" id="signup-email-help">${t('auth.emailHelp')}</p>
        </div>
        <div class="authdlg__field">
          <label for="signup-password">${t('auth.password')}</label>
          ${passwordField('signup-password', 'new-password', 'signup-rules')}
          <ul class="authdlg__rules" id="signup-rules" role="list" aria-live="polite" data-rules>${passwordRules('')}</ul>
        </div>
        <!-- Honeypot gegen Bots. Für Menschen unsichtbar und aus der Tab-Reihenfolge genommen. -->
        <div class="authdlg__trap" aria-hidden="true">
          <label for="signup-website">Website</label>
          <input id="signup-website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <p class="authdlg__error" role="alert" data-error hidden></p>
        <button class="btn btn--primary authdlg__submit" type="submit">${ICONS.user}<span data-label>${t('auth.submitSignup')}</span></button>
        <p class="authdlg__legal">${t('auth.legal')} <a href="#/datenschutz" data-close-link>${t('auth.legalLink')}</a>.</p>
      </form>

      <div class="authdlg__done" data-done hidden tabindex="-1">
        <span class="authdlg__done-icon">${ICONS.mail}</span>
        <h3>${t('auth.doneTitle')}</h3>
        <p>${t('auth.doneBefore')} <strong data-done-mail></strong>${t('auth.doneAfter')}</p>
        <p class="authdlg__help">${t('auth.doneHelp')}</p>
        <p class="authdlg__notice" role="status" data-done-status></p>
        <button class="btn btn--sm authdlg__again" type="button" data-resend-done>${t('auth.doneResend')}</button>
      </div>
    </div>`,
  );
  document.body.append(dialog);

  const hint = qs<HTMLElement>('[data-hint]', dialog)!;
  const title = qs<HTMLElement>('#authdlg-title', dialog)!;
  const tabs = qsa<HTMLButtonElement>('[data-tab]', dialog);
  const forms = qsa<HTMLFormElement>('[data-form]', dialog);
  const done = qs<HTMLElement>('[data-done]', dialog)!;
  let mode: Mode = 'login';
  let lastSignupEmail = '';

  /* ── Zustände ─────────────────────────────────────────────────────────── */

  const setError = (form: HTMLFormElement, message: string | null): void => {
    const el = qs<HTMLElement>('[data-error]', form)!;
    el.hidden = !message;
    el.textContent = message ?? '';
  };

  const setFieldError = (input: HTMLInputElement, message: string | null): void => {
    const el = qs<HTMLElement>(`#${input.id}-error`, dialog);
    input.setAttribute('aria-invalid', String(Boolean(message)));
    if (!el) return;
    el.hidden = !message;
    el.textContent = message ?? '';
  };

  const clearErrors = (form: HTMLFormElement): void => {
    setError(form, null);
    qsa<HTMLInputElement>('.authdlg__input', form).forEach((input) => setFieldError(input, null));
  };

  /** Alle Probleme auf einmal markieren, das erste Feld bekommt den Fokus. */
  const showProblems = (problems: Array<[HTMLInputElement, string]>): boolean => {
    problems.forEach(([input, message]) => setFieldError(input, message));
    problems[0]?.[0].focus();
    return problems.length === 0;
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
    tabs.forEach((tab) => {
      const on = tab.dataset.tab === next;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
    });
    forms.forEach((f) => {
      f.hidden = f.dataset.form !== next;
      clearErrors(f);
    });
    title.textContent = next === 'login' ? t('auth.titleLogin') : t('auth.titleSignup');
    if (focus) qs<HTMLInputElement>(`[data-form="${next}"] input:not([tabindex="-1"])`, dialog)?.focus();
  };

  tabs.forEach((tab) => tab.addEventListener('click', () => select(tab.dataset.tab as Mode)));
  qs('[role="tablist"]', dialog)!.addEventListener('keydown', (e) => {
    const key = (e as KeyboardEvent).key;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;
    e.preventDefault();
    select(mode === 'login' ? 'signup' : 'login');
    qs<HTMLButtonElement>(`[data-tab="${mode}"]`, dialog)!.focus();
  });

  // Tippen nimmt den Fehler des Feldes weg.
  qsa<HTMLInputElement>('.authdlg__input', dialog).forEach((input) =>
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') setFieldError(input, null);
    }),
  );

  /* ── Passwortfelder: anzeigen, Feststelltaste ─────────────────────────── */

  qsa<HTMLButtonElement>('[data-reveal-pw]', dialog).forEach((button) =>
    button.addEventListener('click', () => {
      const input = qs<HTMLInputElement>(`#${button.getAttribute('aria-controls')}`, dialog)!;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      button.setAttribute('aria-pressed', String(show));
      mount(qs<HTMLElement>('[data-eye]', button)!, show ? ICONS.eyeOff : ICONS.eye);
      qs('[data-reveal-label]', button)!.textContent = show ? t('auth.hidePassword') : t('auth.showPassword');
      // Cursor bleibt, wo er war: Wer mitten im Tippen nachsieht, tippt direkt weiter.
      input.focus();
    }),
  );

  qsa<HTMLInputElement>('input[name="password"]', dialog).forEach((input) => {
    const caps = qs<HTMLElement>(`#${input.id}-caps`, dialog)!;
    const check = (e: KeyboardEvent): void => {
      caps.hidden = !e.getModifierState?.('CapsLock');
    };
    input.addEventListener('keydown', check);
    input.addEventListener('keyup', check);
    input.addEventListener('blur', () => (caps.hidden = true));
  });

  const resetPasswordFields = (form: HTMLFormElement): void => {
    qsa<HTMLButtonElement>('[data-reveal-pw]', form).forEach((button) => {
      const input = qs<HTMLInputElement>(`#${button.getAttribute('aria-controls')}`, dialog)!;
      if (input.type === 'text') button.click();
    });
  };

  const close = (): void => dialog.close();
  qs('[data-close]', dialog)!.addEventListener('click', close);
  qs('[data-close-link]', dialog)!.addEventListener('click', close);
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener('close', () => {
    lockScroll(false);
    forms.forEach(resetPasswordFields);
  });

  /* ── Anmelden ─────────────────────────────────────────────────────────── */

  const loginForm = qs<HTMLFormElement>('[data-form="login"]', dialog)!;
  const loginField = (name: string): HTMLInputElement => qs<HTMLInputElement>(`[name="${name}"]`, loginForm)!;
  const resend = qs<HTMLButtonElement>('[data-resend]', loginForm)!;

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginField('email').value;
    const password = loginField('password').value;
    resend.hidden = true;
    clearErrors(loginForm);

    const problems: Array<[HTMLInputElement, string]> = [];
    if (!email.trim()) problems.push([loginField('email'), t('auth.errEmailRequired')]);
    else if (!normalizeEmail(email)) problems.push([loginField('email'), t('auth.errEmail')]);
    if (!password) problems.push([loginField('password'), t('auth.errPasswordRequired')]);
    if (!showProblems(problems)) return;

    setBusy(loginForm, true, t('auth.busyLogin'));
    try {
      const user = await login(email, password);
      close();
      loginForm.reset();
      showToast(t('auth.welcome', { name: user.username }));
    } catch (err) {
      const apiErr = err instanceof ApiError ? err : null;
      setError(loginForm, apiErr?.message ?? t('auth.errGeneric'));
      resend.hidden = apiErr?.code !== 'email-not-confirmed';
      if (apiErr?.code === 'invalid-credentials') loginField('password').select();
    } finally {
      setBusy(loginForm, false, t('auth.submitLogin'));
    }
  });

  resend.addEventListener('click', async () => {
    resend.disabled = true;
    resend.setAttribute('aria-busy', 'true');
    try {
      setError(loginForm, await resendConfirmation(loginField('email').value));
    } catch (err) {
      setError(loginForm, err instanceof ApiError ? err.message : t('auth.errGeneric'));
    } finally {
      resend.disabled = false;
      resend.removeAttribute('aria-busy');
    }
  });

  /* ── Registrieren ─────────────────────────────────────────────────────── */

  const signupForm = qs<HTMLFormElement>('[data-form="signup"]', dialog)!;
  const field = (name: string): HTMLInputElement => qs<HTMLInputElement>(`[name="${name}"]`, signupForm)!;
  const rules = qs<HTMLElement>('[data-rules]', signupForm)!;

  field('password').addEventListener('input', () => mount(rules, passwordRules(field('password').value)));

  const emailProblem = (value: string): string | null => {
    if (!value.trim()) return t('auth.errEmailRequired');
    const email = normalizeEmail(value);
    if (!email) return t('auth.errEmail');
    return isDisposableEmail(email) ? t('auth.errDisposable') : null;
  };
  // Wegwerf-Adressen schon beim Verlassen des Feldes melden, leere Felder erst beim Absenden.
  field('email').addEventListener('blur', () => {
    if (field('email').value.trim()) setFieldError(field('email'), emailProblem(field('email').value));
  });
  field('username').addEventListener('blur', () => {
    const value = field('username').value.trim();
    if (value) setFieldError(field('username'), usernameOk(value) ? null : t('auth.errUsername'));
  });

  /** Serverfehler dem passenden Feld zuordnen, sonst über dem Knopf zeigen. */
  const FIELD_FOR_CODE: Record<string, string> = {
    'invalid-username': 'username',
    'username-taken': 'username',
    conflict: 'username',
    'invalid-email': 'email',
    'disposable-email': 'email',
    'weak-password': 'password',
  };

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = field('username').value.trim();
    const password = field('password').value;
    clearErrors(signupForm);

    const problems: Array<[HTMLInputElement, string]> = [];
    if (!usernameOk(username)) problems.push([field('username'), t('auth.errUsername')]);
    const emailError = emailProblem(field('email').value);
    if (emailError) problems.push([field('email'), emailError]);
    if (!passwordOk(password)) problems.push([field('password'), t('auth.errPassword')]);
    if (!showProblems(problems)) return;
    const email = normalizeEmail(field('email').value)!;

    setBusy(signupForm, true, t('auth.busySignup'));
    try {
      await signup({ email, password, username, website: field('website').value });
      lastSignupEmail = email;
      signupForm.hidden = true;
      qs('[data-done-mail]', done)!.textContent = email;
      qs('[data-done-status]', done)!.textContent = '';
      done.hidden = false;
      title.textContent = t('auth.titleConfirm');
      done.focus();
      signupForm.reset();
      resetPasswordFields(signupForm);
      mount(rules, passwordRules(''));
    } catch (err) {
      const apiErr = err instanceof ApiError ? err : null;
      const target = apiErr ? FIELD_FOR_CODE[apiErr.code] : undefined;
      if (apiErr && target) showProblems([[field(target), apiErr.message]]);
      else setError(signupForm, apiErr?.message ?? t('auth.errGeneric'));
    } finally {
      setBusy(signupForm, false, t('auth.submitSignup'));
    }
  });

  const resendDone = qs<HTMLButtonElement>('[data-resend-done]', done)!;
  resendDone.addEventListener('click', async () => {
    const status = qs<HTMLElement>('[data-done-status]', done)!;
    resendDone.disabled = true;
    resendDone.setAttribute('aria-busy', 'true');
    try {
      status.textContent = await resendConfirmation(lastSignupEmail);
    } catch (err) {
      status.textContent = err instanceof ApiError ? err.message : t('auth.errGeneric');
    } finally {
      resendDone.disabled = false;
      resendDone.removeAttribute('aria-busy');
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
