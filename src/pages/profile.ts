import { openAuth } from '../components/authDialog';
import { bindComboCards, comboCard } from '../components/comboPlayer';
import { faceThumb } from '../components/fighterTile';
import { ICONS } from '../components/icons';
import { FIGHTER_BY_SLUG, FIGHTERS } from '../data/fighters';
import { guideFor, loadLateGuides } from '../data/guide-index';
import type { Combo, Fighter } from '../data/types';
import { accentVars } from '../lib/color';
import { html, mount, normalize, qs, qsa, type Markup } from '../lib/dom';
import { link } from '../lib/router';
import { applyTheme } from '../lib/theme';
import { ApiError } from '../services/api';
import { logout, onAuth, type AuthState, type User } from '../services/auth';
import { deleteAccount, loadBookmarks, onBookmarks, updateProfile } from '../services/db';
import type { PageView } from './types';

/**
 * #/profil: Main-Fighter, gespeicherte Combos („Meine Mains“), Farbschema, Konto.
 * Die ganze Seite hängt am Anmeldestatus und baut sich neu, wenn er wechselt.
 */

const BY_NAME = [...FIGHTERS].sort((a, b) => a.name.localeCompare(b.name, 'de'));

function guestView(): Markup {
  return html`<header class="container page-head">
      <h1>Profil</h1>
      <p>Mit einem Konto speicherst du Combos, legst deinen Main fest und diskutierst unter jedem Fighter mit.</p>
    </header>
    <div class="container profile-guest">
      <button class="btn btn--primary" type="button" data-open="login">${ICONS.lock}Anmelden</button>
      <button class="btn" type="button" data-open="signup">${ICONS.user}Konto anlegen</button>
    </div>`;
}

function mainPicker(user: User): Markup {
  return html`<section class="container profile-section glass" aria-labelledby="main-title">
    <div class="profile-section__head">
      <h2 id="main-title">Mein Main</h2>
      <p class="profile-status" role="status" data-main-status></p>
    </div>
    <p class="profile-section__lead">Erscheint neben deinem Namen bei jedem Kommentar.</p>
    <div class="field profile-filter">
      ${ICONS.search}
      <label class="vh" for="main-filter">Fighter filtern</label>
      <input id="main-filter" class="input" type="search" placeholder="Fighter filtern" autocomplete="off" spellcheck="false" data-main-filter />
    </div>
    <fieldset class="mainpick" data-main-grid>
      <legend class="vh">Main-Fighter auswählen</legend>
      <label class="mainpick__opt mainpick__opt--none">
        <input type="radio" name="main" value="" ${user.mainFighter ? '' : 'checked'} />
        <span class="mainpick__face mainpick__face--none">${ICONS.close}</span>
        <span class="mainpick__name">Kein Main</span>
      </label>
      ${BY_NAME.map(
        (f) => html`<label class="mainpick__opt" style="${accentVars(f.colors)}" data-name="${normalize(`${f.name} ${f.aliases.join(' ')}`)}">
          <input type="radio" name="main" value="${f.slug}" ${user.mainFighter === f.slug ? 'checked' : ''} />
          ${faceThumb(f, 'mainpick__face')}
          <span class="mainpick__name">${f.name}</span>
        </label>`,
      )}
    </fieldset>
  </section>`;
}

function userView(user: User): Markup {
  const main = user.mainFighter ? FIGHTER_BY_SLUG.get(user.mainFighter) : undefined;
  return html`<header class="container profile-head" ${main ? html`style="${accentVars(main.colors)}"` : ''}>
      <span class="profile-head__avatar">${main ? faceThumb(main, 'profile-head__face') : ICONS.user}</span>
      <div class="profile-head__text">
        <h1 class="profile-head__name">${user.username}</h1>
        <p class="profile-head__meta">${main ? html`Main: <a class="link" href="${link(`/fighter/${main.slug}`)}">${main.name}</a> · ` : ''}${user.email}</p>
      </div>
      <button class="btn btn--sm" type="button" data-logout>${ICONS.logout}Abmelden</button>
    </header>

    <section class="container profile-section" aria-labelledby="saved-title">
      <div class="profile-section__head">
        <h2 id="saved-title">Meine Mains</h2>
      </div>
      <p class="profile-section__lead">Deine gespeicherten Combos. Speichern geht mit dem Lesezeichen oben rechts an jeder Combo.</p>
      <div data-saved><p class="profile-status">Lädt …</p></div>
    </section>

    ${mainPicker(user)}

    <section class="container profile-section glass" aria-labelledby="theme-title">
      <div class="profile-section__head">
        <h2 id="theme-title">Darstellung</h2>
        <p class="profile-status" role="status" data-theme-status></p>
      </div>
      <fieldset class="themepick">
        <legend class="vh">Farbschema</legend>
        <label class="themepick__opt"><input type="radio" name="theme" value="dark" ${user.theme === 'dark' ? 'checked' : ''} />${ICONS.moon}<span>Dark</span></label>
        <label class="themepick__opt"><input type="radio" name="theme" value="light" ${user.theme === 'light' ? 'checked' : ''} />${ICONS.sun}<span>Light</span></label>
      </fieldset>
    </section>

    <section class="container profile-section profile-danger" aria-labelledby="danger-title">
      <h2 id="danger-title">Konto löschen</h2>
      <p class="profile-section__lead">Löscht Konto, Kommentare und gespeicherte Combos sofort und endgültig.</p>
      <form class="profile-danger__form" novalidate data-delete-form>
        <label for="delete-confirm">Zum Bestätigen <strong>${user.username}</strong> eintippen</label>
        <div class="profile-danger__row">
          <input id="delete-confirm" class="input profile-danger__input" type="text" autocomplete="off" spellcheck="false" data-delete-input />
          <button class="btn btn--sm profile-danger__btn" type="submit" disabled data-delete-btn>${ICONS.trash}Konto löschen</button>
        </div>
        <p class="fcomments__error" role="alert" data-delete-error hidden></p>
      </form>
    </section>`;
}

interface SavedGroup {
  fighter: Fighter;
  combos: Combo[];
}

function savedMarkup(groups: SavedGroup[], missing: number): Markup {
  if (!groups.length) {
    return html`<p class="profile-empty">Noch nichts gespeichert. Auf jeder Fighter-Seite hat jede Combo oben rechts ein Lesezeichen.</p>`;
  }
  return html`${groups.map(
    (g) => html`<div class="saved-group" style="${accentVars(g.fighter.colors)}">
      <a class="saved-group__head" href="${link(`/fighter/${g.fighter.slug}`)}">
        ${faceThumb(g.fighter, 'saved-group__face')}<span>${g.fighter.name}</span><span class="saved-group__count">${g.combos.length}</span>
      </a>
      <div class="saved-group__grid">${g.combos.map(comboCard)}</div>
    </div>`,
  )}
  ${missing ? html`<p class="profile-status">${missing === 1 ? 'Eine gespeicherte Combo gibt es' : `${missing} gespeicherte Combos gibt es`} nicht mehr.</p>` : ''}`;
}

export function profilePage(): PageView {
  return {
    title: 'Profil | Blastzone',
    markup: html`<div class="page profile-page" data-profile></div>`,
    mount(root) {
      const host = qs<HTMLElement>('[data-profile]', root)!;
      let cleanups: Array<() => void> = [];
      let shownFor = '';
      const reset = (): void => {
        cleanups.forEach((fn) => fn());
        cleanups = [];
      };

      const render = (state: AuthState): void => {
        const key = state.status === 'user' ? `user:${state.user.id}` : state.status;
        // Nur neu aufbauen, wenn sich die Person ändert. Main- oder Theme-Wechsel erledigen die Abschnitte selbst.
        if (key === shownFor) return;
        shownFor = key;
        reset();

        if (state.status === 'unknown') {
          mount(host, html`<div class="container page-head"><p class="profile-status">Lädt …</p></div>`);
          return;
        }
        if (state.status === 'guest') {
          mount(host, guestView());
          qsa<HTMLButtonElement>('[data-open]', host).forEach((b) => b.addEventListener('click', () => openAuth(b.dataset.open as 'login' | 'signup')));
          return;
        }

        mount(host, userView(state.user));
        wireUser(state.user);
      };

      const wireUser = (user: User): void => {
        qs('[data-logout]', host)!.addEventListener('click', () => {
          void logout().then(() => {
            location.hash = link('/');
          });
        });

        /* Main */
        const grid = qs<HTMLElement>('[data-main-grid]', host)!;
        const mainStatus = qs<HTMLElement>('[data-main-status]', host)!;
        qs<HTMLInputElement>('[data-main-filter]', host)!.addEventListener('input', (e) => {
          const q = normalize((e.target as HTMLInputElement).value);
          qsa<HTMLElement>('[data-name]', grid).forEach((opt) => (opt.hidden = Boolean(q) && !opt.dataset.name!.includes(q)));
        });
        grid.addEventListener('change', async (e) => {
          const input = e.target as HTMLInputElement;
          if (input.name !== 'main') return;
          mainStatus.textContent = 'Wird gespeichert …';
          try {
            const saved = await updateProfile({ mainFighter: input.value || null });
            const f = saved ? FIGHTER_BY_SLUG.get(saved) : undefined;
            mainStatus.textContent = f ? `Gespeichert: ${f.name}` : 'Gespeichert: kein Main';
            const head = qs<HTMLElement>('.profile-head', host);
            if (head) {
              const avatar = qs<HTMLElement>('.profile-head__avatar', head)!;
              mount(avatar, f ? faceThumb(f, 'profile-head__face') : ICONS.user);
              if (f) head.setAttribute('style', accentVars(f.colors));
              else head.removeAttribute('style');
            }
          } catch (err) {
            mainStatus.textContent = err instanceof ApiError ? err.message : 'Nicht gespeichert.';
          }
        });

        /* Theme */
        const themeStatus = qs<HTMLElement>('[data-theme-status]', host)!;
        qsa<HTMLInputElement>('input[name="theme"]', host).forEach((input) =>
          input.addEventListener('change', async () => {
            const theme = input.value as 'dark' | 'light';
            applyTheme(theme, true);
            themeStatus.textContent = 'Wird gespeichert …';
            try {
              await updateProfile({ theme });
              themeStatus.textContent = 'Gespeichert';
            } catch (err) {
              applyTheme(theme === 'light' ? 'dark' : 'light', true);
              themeStatus.textContent = err instanceof ApiError ? err.message : 'Nicht gespeichert.';
            }
          }),
        );
        cleanups.push(
          onAuth((s) => {
            if (s.status !== 'user') return;
            qsa<HTMLInputElement>('input[name="theme"]', host).forEach((i) => (i.checked = i.value === s.user.theme));
          }),
        );

        /* Gespeicherte Combos */
        const saved = qs<HTMLElement>('[data-saved]', host)!;
        let comboCleanup: () => void = () => {};
        let lastIds = '';
        const renderSaved = async (ids: readonly string[]): Promise<void> => {
          const signature = ids.join(',');
          if (signature === lastIds) return;
          lastIds = signature;
          await loadLateGuides();
          if (!saved.isConnected) return;
          const bySlug = new Map<string, SavedGroup>();
          let missing = 0;
          for (const id of ids) {
            const fighter = FIGHTERS.find((f) => id.startsWith(`${f.slug}-`) && guideFor(f.slug)?.combos.some((c) => c.id === id))
              ?? FIGHTERS.find((f) => guideFor(f.slug)?.combos.some((c) => c.id === id));
            const combo = fighter ? guideFor(fighter.slug)?.combos.find((c) => c.id === id) : undefined;
            if (!fighter || !combo) {
              missing++;
              continue;
            }
            const group = bySlug.get(fighter.slug) ?? { fighter, combos: [] };
            group.combos.push(combo);
            bySlug.set(fighter.slug, group);
          }
          const groups = [...bySlug.values()].sort((a, b) => a.fighter.name.localeCompare(b.fighter.name, 'de'));
          comboCleanup();
          mount(saved, savedMarkup(groups, missing));
          comboCleanup = bindComboCards(saved, groups.flatMap((g) => g.combos));
        };

        void loadBookmarks().catch((err: unknown) => {
          mount(saved, html`<p class="profile-status">${err instanceof ApiError ? err.message : 'Gespeicherte Combos konnten nicht geladen werden.'}</p>`);
        });
        cleanups.push(onBookmarks((ids) => void renderSaved([...ids])));
        cleanups.push(() => comboCleanup());

        /* Konto löschen */
        const form = qs<HTMLFormElement>('[data-delete-form]', host)!;
        const input = qs<HTMLInputElement>('[data-delete-input]', form)!;
        const button = qs<HTMLButtonElement>('[data-delete-btn]', form)!;
        const error = qs<HTMLElement>('[data-delete-error]', form)!;
        input.addEventListener('input', () => (button.disabled = input.value !== user.username));
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          if (input.value !== user.username) return;
          button.disabled = true;
          error.hidden = true;
          try {
            await deleteAccount(input.value);
            location.hash = link('/');
          } catch (err) {
            error.hidden = false;
            error.textContent = err instanceof ApiError ? err.message : 'Das hat nicht geklappt.';
            button.disabled = false;
          }
        });
      };

      const stop = onAuth(render);
      return () => {
        stop();
        reset();
      };
    },
  };
}
