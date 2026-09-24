import { openAuth } from '../components/authDialog';
import { bindComboCards, comboCard } from '../components/comboPlayer';
import { faceThumb } from '../components/fighterTile';
import { ICONS } from '../components/icons';
import { FIGHTER_BY_SLUG, FIGHTERS } from '../data/fighters';
import { bindErrorState, errorState, LOAD_FAILED_TEXT } from '../components/states';
import { mountStartggSection, startggSection } from '../components/startggLink';
import { guideFor, loadLateGuides } from '../data/guide-index';
import type { Combo, Fighter } from '../data/types';
import { formatNumber, locale, t } from '../i18n';
import { accentVars } from '../lib/color';
import { html, mount, normalize, qs, qsa, type Markup } from '../lib/dom';
import { link } from '../lib/router';
import { applyTheme } from '../lib/theme';
import { ApiError } from '../services/api';
import { logout, onAuth, type AuthState, type User } from '../services/auth';
import {
  deleteAccount,
  getCommunitySettings,
  listBlocked,
  loadBookmarks,
  onBookmarks,
  saveCommunitySettings,
  unblockPlayer,
  updateProfile,
  type CommunitySettings,
} from '../services/db';
import { MAX_SECONDARIES, skinCount } from '../shared/account-rules';
import type { PageView } from './types';

/**
 * #/profil: Main mit Skin, Secondaries mit Skins, gespeicherte Combos („Meine Mains“),
 * start.gg, Sichtbarkeit (Verzeichnis, Ergebnisse, Nachrichten), Blockliste,
 * Farbschema, Konto. Die ganze Seite hängt am Anmeldestatus und baut sich neu, wenn
 * die Person wechselt.
 */

const BY_NAME = [...FIGHTERS].sort((a, b) => a.name.localeCompare(b.name, locale));

function guestView(): Markup {
  return html`<header class="container page-head">
      <h1>${t('profile.title')}</h1>
      <p>${t('profile.guestLead')}</p>
    </header>
    <div class="container profile-guest">
      <button class="btn btn--primary" type="button" data-open="login">${ICONS.lock}${t('account.login')}</button>
      <button class="btn" type="button" data-open="signup">${ICONS.user}${t('auth.titleSignup')}</button>
    </div>`;
}

/** Die acht Skins eines Fighters als Radiogruppe. Fighter ohne Alts bekommen nur einen Hinweis. */
function skinPicker(f: Fighter, selected: number, group: string): Markup {
  const count = skinCount(f.slug);
  if (count < 2) return html`<p class="profile-status">${t('skin.none', { name: f.name })}</p>`;
  return html`<fieldset class="skinpick" style="${accentVars(f.colors)}" data-fighter="${f.slug}">
    <legend class="skinpick__legend">${t('skin.legend', { name: f.name })}</legend>
    <div class="skinpick__grid">
      ${Array.from({ length: count }, (_, i) => i + 1).map(
        (n) => html`<label class="skinpick__opt">
          <input type="radio" name="${group}" value="${n}" ${n === selected ? 'checked' : ''} />
          ${faceThumb(f, 'skinpick__face', n)}
          <span class="skinpick__num" aria-hidden="true">${n}</span>
          <span class="vh">${t('skin.option', { n })}</span>
        </label>`,
      )}
    </div>
  </fieldset>`;
}

function mainSkinBlock(main: Fighter | undefined, skin: number): Markup {
  return main ? skinPicker(main, skin, 'main-skin') : html`<p class="profile-status">${t('skin.pickMain')}</p>`;
}

function secondarySkinBlock(secondaries: readonly string[], skins: readonly number[]): Markup {
  const picks = secondaries.flatMap((slug, i) => {
    const f = FIGHTER_BY_SLUG.get(slug);
    return f ? [skinPicker(f, skins[i] ?? 1, `sec-skin-${slug}`)] : [];
  });
  return picks.length ? html`${picks}` : html`<p class="profile-status">${t('skin.pickSecondary')}</p>`;
}

function mainPicker(user: User): Markup {
  return html`<section class="container profile-section glass" aria-labelledby="main-title">
    <div class="profile-section__head">
      <h2 id="main-title">${t('profile.mainTitle')}</h2>
      <p class="profile-status" role="status" data-main-status></p>
    </div>
    <p class="profile-section__lead">${t('profile.mainLead')}</p>
    <div class="field profile-filter">
      ${ICONS.search}
      <label class="vh" for="main-filter">${t('profile.filter')}</label>
      <input id="main-filter" class="input" type="search" placeholder="${t('profile.filter')}" autocomplete="off" spellcheck="false" data-main-filter />
    </div>
    <fieldset class="mainpick" data-main-grid>
      <legend class="vh">${t('profile.mainLegend')}</legend>
      <label class="mainpick__opt mainpick__opt--none">
        <input type="radio" name="main" value="" ${user.mainFighter ? '' : 'checked'} />
        <span class="mainpick__face mainpick__face--none">${ICONS.close}</span>
        <span class="mainpick__name">${t('profile.noMain')}</span>
      </label>
      ${BY_NAME.map(
        (f) => html`<label class="mainpick__opt" style="${accentVars(f.colors)}" data-name="${normalize(`${f.name} ${f.aliases.join(' ')}`)}">
          <input type="radio" name="main" value="${f.slug}" ${user.mainFighter === f.slug ? 'checked' : ''} />
          ${faceThumb(f, 'mainpick__face')}
          <span class="mainpick__name">${f.name}</span>
        </label>`,
      )}
    </fieldset>
    <div class="skin-block">
      <h3 class="skin-block__title">${t('skin.title')}</h3>
      <p class="profile-section__lead">${t('skin.mainLead')}</p>
      <div data-main-skin>${mainSkinBlock(user.mainFighter ? FIGHTER_BY_SLUG.get(user.mainFighter) : undefined, user.mainSkin)}</div>
    </div>
  </section>`;
}

function secondaryPicker(selected: readonly string[], main: string | null): Markup {
  return html`<div class="field profile-filter">
      ${ICONS.search}
      <label class="vh" for="sec-filter">${t('profile.filter')}</label>
      <input id="sec-filter" class="input" type="search" placeholder="${t('profile.filter')}" autocomplete="off" spellcheck="false" data-sec-filter />
    </div>
    <fieldset class="mainpick" data-sec-grid>
      <legend class="vh">${t('profile.secLegend', { max: MAX_SECONDARIES })}</legend>
      ${BY_NAME.map(
        (f) => html`<label class="mainpick__opt" style="${accentVars(f.colors)}" data-name="${normalize(`${f.name} ${f.aliases.join(' ')}`)}">
          <input type="checkbox" name="secondary" value="${f.slug}" ${selected.includes(f.slug) ? 'checked' : ''} ${f.slug === main ? 'disabled' : ''} />
          ${faceThumb(f, 'mainpick__face')}
          <span class="mainpick__name">${f.name}${f.slug === main ? html`<span class="mainpick__tag">${t('profile.mainTag')}</span>` : ''}</span>
        </label>`,
      )}
    </fieldset>`;
}

function userView(user: User): Markup {
  const main = user.mainFighter ? FIGHTER_BY_SLUG.get(user.mainFighter) : undefined;
  return html`<header class="container profile-head" ${main ? html`style="${accentVars(main.colors)}"` : ''}>
      <span class="profile-head__avatar">${main ? faceThumb(main, 'profile-head__face', user.mainSkin) : ICONS.user}</span>
      <div class="profile-head__text">
        <h1 class="profile-head__name">${user.username}</h1>
        <p class="profile-head__meta">${main ? html`${t('profile.mainLabel')} <a class="link" href="${link(`/fighter/${main.slug}`)}">${main.name}</a> · ` : ''}${user.email}</p>
        <p class="profile-head__meta"><a class="link" href="${link(`/spieler/${user.username}`)}">${t('profile.viewPlayer')}</a></p>
      </div>
      <button class="btn btn--sm" type="button" data-logout>${ICONS.logout}${t('profile.logout')}</button>
    </header>

    <section class="container profile-section" aria-labelledby="saved-title">
      <div class="profile-section__head">
        <h2 id="saved-title">${t('profile.savedTitle')}</h2>
      </div>
      <p class="profile-section__lead">${t('profile.savedLead')}</p>
      <div data-saved><p class="profile-status">${t('profile.loading')}</p></div>
    </section>

    ${startggSection()}

    ${mainPicker(user)}

    <section class="container profile-section glass" aria-labelledby="sec-title">
      <div class="profile-section__head">
        <h2 id="sec-title">${t('profile.secTitle')}</h2>
        <p class="profile-status" role="status" data-sec-status></p>
      </div>
      <p class="profile-section__lead">${t('profile.secLead', { max: MAX_SECONDARIES })}</p>
      <div data-sec-host><p class="profile-status">${t('profile.loading')}</p></div>
      <div class="skin-block">
        <h3 class="skin-block__title">${t('skin.title')}</h3>
        <p class="profile-section__lead">${t('skin.secLead')}</p>
        <div data-sec-skins></div>
      </div>
    </section>

    <section class="container profile-section glass" aria-labelledby="community-title">
      <div class="profile-section__head">
        <h2 id="community-title">${t('profile.communityTitle')}</h2>
        <p class="profile-status" role="status" data-community-status></p>
      </div>
      <p class="profile-section__lead">
        ${t('profile.communityLeadBefore')} <a class="link link--inline" href="${link('/community')}">${t('profile.communityLink')}</a>
        ${t('profile.communityLeadAfter')}
      </p>
      <div class="switch-list">
        <label class="switch">
          <input type="checkbox" role="switch" disabled data-setting="listed" />
          <span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>
          <span class="switch__label">${t('profile.listedSwitch')}</span>
        </label>
        <div>
          <label class="switch">
            <input type="checkbox" role="switch" disabled aria-describedby="placements-hint" data-setting="showPlacements" />
            <span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>
            <span class="switch__label">${t('profile.placementsSwitch')}</span>
          </label>
          <p id="placements-hint" class="switch__hint">${t('profile.placementsHint')}</p>
        </div>
        <label class="switch">
          <input type="checkbox" role="switch" disabled data-setting="allowDms" />
          <span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>
          <span class="switch__label">${t('profile.dmsSwitch')}</span>
        </label>
      </div>
      <p class="profile-actions"><a class="btn btn--sm" href="${link('/nachrichten')}">${ICONS.mail}${t('profile.messagesLink')}</a></p>

      <div class="blocked-block">
        <h3 class="skin-block__title">${t('profile.blockedTitle')}</h3>
        <p class="profile-section__lead">${t('profile.blockedLead')}</p>
        <p class="profile-status" role="status" data-blocked-status></p>
        <div data-blocked><p class="profile-status">${t('profile.loading')}</p></div>
      </div>
    </section>

    <section class="container profile-section glass" aria-labelledby="theme-title">
      <div class="profile-section__head">
        <h2 id="theme-title">${t('profile.themeTitle')}</h2>
        <p class="profile-status" role="status" data-theme-status></p>
      </div>
      <fieldset class="themepick">
        <legend class="vh">${t('profile.themeLegend')}</legend>
        <label class="themepick__opt"><input type="radio" name="theme" value="dark" ${user.theme === 'dark' ? 'checked' : ''} />${ICONS.moon}<span>Dark</span></label>
        <label class="themepick__opt"><input type="radio" name="theme" value="light" ${user.theme === 'light' ? 'checked' : ''} />${ICONS.sun}<span>Light</span></label>
      </fieldset>
    </section>

    <section class="container profile-section profile-danger" aria-labelledby="danger-title">
      <h2 id="danger-title">${t('profile.deleteTitle')}</h2>
      <p class="profile-section__lead">${t('profile.deleteLead')}</p>
      <form class="profile-danger__form" novalidate data-delete-form>
        <label for="delete-confirm">${t('profile.deleteConfirmBefore')} <strong>${user.username}</strong> ${t('profile.deleteConfirmAfter')}</label>
        <div class="profile-danger__row">
          <input id="delete-confirm" class="input profile-danger__input" type="text" autocomplete="off" spellcheck="false" data-delete-input />
          <button class="btn btn--sm profile-danger__btn" type="submit" disabled data-delete-btn>${ICONS.trash}${t('profile.deleteButton')}</button>
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
    return html`<p class="profile-empty">${t('profile.savedEmpty')}</p>`;
  }
  return html`${groups.map(
    (g) => html`<div class="saved-group" style="${accentVars(g.fighter.colors)}">
      <a class="saved-group__head" href="${link(`/fighter/${g.fighter.slug}`)}">
        ${faceThumb(g.fighter, 'saved-group__face')}<span>${g.fighter.name}</span><span class="saved-group__count">${g.combos.length}</span>
      </a>
      <div class="saved-group__grid">${g.combos.map(comboCard)}</div>
    </div>`,
  )}
  ${missing ? html`<p class="profile-status">${missing === 1 ? t('profile.savedMissingOne') : t('profile.savedMissing', { n: formatNumber(missing) })}</p>` : ''}`;
}

export function profilePage(): PageView {
  return {
    title: `${t('profile.title')} | Blastzone`,
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
          mount(host, html`<div class="container page-head"><p class="profile-status">${t('profile.loading')}</p></div>`);
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

        /* start.gg */
        cleanups.push(mountStartggSection(host));

        /* Secondaries, Skins und Sichtbarkeit (eine Zeile in community_profiles, erst nach dem Laden bedienbar) */
        const secHost = qs<HTMLElement>('[data-sec-host]', host)!;
        const secSkins = qs<HTMLElement>('[data-sec-skins]', host)!;
        const secStatus = qs<HTMLElement>('[data-sec-status]', host)!;
        const switches = qsa<HTMLInputElement>('[data-setting]', host);
        const communityStatus = qs<HTMLElement>('[data-community-status]', host)!;
        let secondaries: string[] = [];
        let secondarySkins: number[] = [];
        let currentMain = user.mainFighter;
        let currentSkin = user.mainSkin;

        const renderSecSkins = (): void => mount(secSkins, secondarySkinBlock(secondaries, secondarySkins));

        const secSummary = (): string =>
          secondaries.length
            ? t('profile.secChosen', { names: secondaries.map((s) => FIGHTER_BY_SLUG.get(s)?.name ?? s).join(', ') })
            : t('profile.secNone');

        /** Bei zwei gewählten sind die übrigen gesperrt, der Main ist es immer. */
        const syncSecGrid = (): void => {
          qsa<HTMLInputElement>('input[name="secondary"]', secHost).forEach((input) => {
            const isMain = input.value === currentMain;
            input.checked = secondaries.includes(input.value);
            input.disabled = isMain || (!input.checked && secondaries.length >= MAX_SECONDARIES);
            const name = qs<HTMLElement>('.mainpick__name', input.closest('label')!)!;
            const tag = qs('.mainpick__tag', name);
            if (isMain && !tag) {
              const badge = document.createElement('span');
              badge.className = 'mainpick__tag';
              badge.textContent = t('profile.mainTag');
              name.append(badge);
            }
            if (!isMain) tag?.remove();
          });
        };

        const saveSecondaries = async (next: string[], previous: string[]): Promise<void> => {
          secondaries = next;
          syncSecGrid();
          secStatus.textContent = t('profile.saving');
          try {
            const saved = await saveCommunitySettings({ secondaries: next });
            secondaries = saved.secondaries;
            secondarySkins = saved.secondarySkins;
            secStatus.textContent = t('profile.secSaved', { summary: secSummary() });
          } catch (err) {
            secondaries = previous;
            secStatus.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
          }
          syncSecGrid();
          renderSecSkins();
        };

        /** Skin eines Secondaries: Die Liste geht immer vollständig in derselben Reihenfolge mit. */
        secSkins.addEventListener('change', async (e) => {
          const input = e.target as HTMLInputElement;
          const slug = input.closest<HTMLElement>('[data-fighter]')?.dataset.fighter;
          const index = slug ? secondaries.indexOf(slug) : -1;
          if (!slug || index < 0) return;
          const previous = [...secondarySkins];
          const next = secondaries.map((_, i) => (i === index ? Number(input.value) : (previous[i] ?? 1)));
          secStatus.textContent = t('profile.saving');
          try {
            secondarySkins = (await saveCommunitySettings({ secondarySkins: next })).secondarySkins;
            const f = FIGHTER_BY_SLUG.get(slug);
            secStatus.textContent = t('skin.saved', { name: f?.name ?? slug, n: secondarySkins[index] ?? 1 });
          } catch (err) {
            secondarySkins = previous;
            secStatus.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
            renderSecSkins();
          }
        });

        type SwitchField = 'listed' | 'showPlacements' | 'allowDms';
        const switchText: Record<SwitchField, [on: string, off: string]> = {
          listed: [t('profile.listedOn'), t('profile.listedOff')],
          showPlacements: [t('profile.placementsOn'), t('profile.placementsOff')],
          allowDms: [t('profile.dmsOn'), t('profile.dmsOff')],
        };
        const applySettings = (settings: CommunitySettings): void => {
          switches.forEach((input) => {
            input.checked = settings[input.dataset.setting as SwitchField];
            input.disabled = false;
          });
        };

        const loadCommunity = (): void => {
          getCommunitySettings().then(
            (settings) => {
              if (!secHost.isConnected) return;
              secondarySkins = settings.secondarySkins.filter((_, i) => settings.secondaries[i] !== currentMain);
              secondaries = settings.secondaries.filter((s) => s !== currentMain);
              mount(secHost, secondaryPicker(secondaries, currentMain));
              syncSecGrid();
              renderSecSkins();
              secStatus.textContent = secSummary();
              applySettings(settings);

              const secGrid = qs<HTMLElement>('[data-sec-grid]', secHost)!;
              qs<HTMLInputElement>('[data-sec-filter]', secHost)!.addEventListener('input', (e) => {
                const q = normalize((e.target as HTMLInputElement).value);
                qsa<HTMLElement>('[data-name]', secGrid).forEach((opt) => (opt.hidden = Boolean(q) && !opt.dataset.name!.includes(q)));
              });
              secGrid.addEventListener('change', (e) => {
                const input = e.target as HTMLInputElement;
                if (input.name !== 'secondary') return;
                const previous = [...secondaries];
                const next = input.checked ? [...previous, input.value] : previous.filter((s) => s !== input.value);
                if (next.length > MAX_SECONDARIES) {
                  input.checked = false;
                  secStatus.textContent = t('profile.secMax', { max: MAX_SECONDARIES });
                  return;
                }
                void saveSecondaries(next, previous);
              });
            },
            (err: unknown) => {
              if (!secHost.isConnected) return;
              mount(secHost, errorState(t('profile.secError'), err instanceof ApiError ? err.message : LOAD_FAILED_TEXT));
              bindErrorState(secHost, loadCommunity);
              communityStatus.textContent = t('profile.notLoaded');
            },
          );
        };
        loadCommunity();

        switches.forEach((input) =>
          input.addEventListener('change', async () => {
            const field = input.dataset.setting as SwitchField;
            const wanted = input.checked;
            input.disabled = true;
            communityStatus.textContent = t('profile.saving');
            try {
              const saved = await saveCommunitySettings({ [field]: wanted });
              input.checked = saved[field];
              const [on, off] = switchText[field];
              communityStatus.textContent = saved[field] ? on : off;
            } catch (err) {
              input.checked = !wanted;
              communityStatus.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
            } finally {
              input.disabled = false;
            }
          }),
        );

        /* Blockliste */
        const blockedHost = qs<HTMLElement>('[data-blocked]', host)!;
        const blockedStatus = qs<HTMLElement>('[data-blocked-status]', host)!;
        const renderBlocked = (names: string[]): void => {
          if (!names.length) {
            mount(blockedHost, html`<p class="profile-empty">${t('profile.blockedNone')}</p>`);
            return;
          }
          mount(
            blockedHost,
            html`<ul class="blocked-list">
              ${names.map(
                (name) => html`<li class="blocked-list__item">
                  <a class="link link--inline" href="${link(`/spieler/${name}`)}">${name}</a>
                  <button class="btn btn--sm btn--ghost" type="button" data-unblock-name="${name}" aria-label="${t('profile.unblockName', { name })}">${t('profile.unblock')}</button>
                </li>`,
              )}
            </ul>`,
          );
        };
        const loadBlocked = (): void => {
          listBlocked().then(
            (names) => {
              if (blockedHost.isConnected) renderBlocked(names);
            },
            (err: unknown) => {
              if (!blockedHost.isConnected) return;
              mount(blockedHost, errorState(t('profile.blockedError'), err instanceof ApiError ? err.message : LOAD_FAILED_TEXT));
              bindErrorState(blockedHost, loadBlocked);
            },
          );
        };
        loadBlocked();
        blockedHost.addEventListener('click', async (e) => {
          const button = (e.target as Element).closest<HTMLButtonElement>('[data-unblock-name]');
          if (!button) return;
          const name = button.dataset.unblockName!;
          button.disabled = true;
          try {
            renderBlocked(await unblockPlayer(name));
            blockedStatus.textContent = t('player.unblockedDone');
          } catch (err) {
            button.disabled = false;
            blockedStatus.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
          }
        });

        /* Main und sein Skin */
        const grid = qs<HTMLElement>('[data-main-grid]', host)!;
        const mainStatus = qs<HTMLElement>('[data-main-status]', host)!;
        const mainSkinHost = qs<HTMLElement>('[data-main-skin]', host)!;

        const paintHead = (f: Fighter | undefined, skin: number): void => {
          const head = qs<HTMLElement>('.profile-head', host);
          if (!head) return;
          mount(qs<HTMLElement>('.profile-head__avatar', head)!, f ? faceThumb(f, 'profile-head__face', skin) : ICONS.user);
          if (f) head.setAttribute('style', accentVars(f.colors));
          else head.removeAttribute('style');
        };

        mainSkinHost.addEventListener('change', async (e) => {
          const input = e.target as HTMLInputElement;
          if (input.name !== 'main-skin' || !currentMain) return;
          const previous = currentSkin;
          mainStatus.textContent = t('profile.saving');
          try {
            const saved = await updateProfile({ mainSkin: Number(input.value) });
            currentSkin = saved.mainSkin;
            const f = saved.mainFighter ? FIGHTER_BY_SLUG.get(saved.mainFighter) : undefined;
            mainStatus.textContent = t('skin.saved', { name: f?.name ?? '', n: currentSkin });
            paintHead(f, currentSkin);
          } catch (err) {
            currentSkin = previous;
            qsa<HTMLInputElement>('input[name="main-skin"]', mainSkinHost).forEach((i) => (i.checked = Number(i.value) === previous));
            mainStatus.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
          }
        });

        qs<HTMLInputElement>('[data-main-filter]', host)!.addEventListener('input', (e) => {
          const q = normalize((e.target as HTMLInputElement).value);
          qsa<HTMLElement>('[data-name]', grid).forEach((opt) => (opt.hidden = Boolean(q) && !opt.dataset.name!.includes(q)));
        });
        grid.addEventListener('change', async (e) => {
          const input = e.target as HTMLInputElement;
          if (input.name !== 'main') return;
          mainStatus.textContent = t('profile.saving');
          try {
            // Neuer Main startet mit Skin 1, der Server setzt das auch ohne Angabe.
            const saved = await updateProfile({ mainFighter: input.value || null, mainSkin: 1 });
            const f = saved.mainFighter ? FIGHTER_BY_SLUG.get(saved.mainFighter) : undefined;
            mainStatus.textContent = f ? t('profile.mainSaved', { name: f.name }) : t('profile.mainSavedNone');
            currentMain = saved.mainFighter;
            currentSkin = saved.mainSkin;
            mount(mainSkinHost, mainSkinBlock(f, currentSkin));
            // Neuer Main war Secondary: dort herausnehmen, sonst lehnt der Server jede weitere Secondary-Änderung ab.
            const newMain = saved.mainFighter;
            if (newMain && secondaries.includes(newMain)) void saveSecondaries(secondaries.filter((s) => s !== newMain), [...secondaries]);
            else syncSecGrid();
            paintHead(f, currentSkin);
          } catch (err) {
            mainStatus.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
          }
        });

        /* Theme */
        const themeStatus = qs<HTMLElement>('[data-theme-status]', host)!;
        qsa<HTMLInputElement>('input[name="theme"]', host).forEach((input) =>
          input.addEventListener('change', async () => {
            const theme = input.value as 'dark' | 'light';
            applyTheme(theme, true);
            themeStatus.textContent = t('profile.saving');
            try {
              await updateProfile({ theme });
              themeStatus.textContent = t('profile.saved');
            } catch (err) {
              applyTheme(theme === 'light' ? 'dark' : 'light', true);
              themeStatus.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
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
        // null = noch nichts gezeichnet. Mit '' als Startwert ergab eine leere Lesezeichenliste dieselbe Signatur, und „Lädt …“ blieb für jedes neue Konto stehen.
        let lastIds: string | null = null;
        const renderSaved = async (ids: readonly string[]): Promise<void> => {
          const signature = ids.join(',');
          if (signature === lastIds) return;
          lastIds = signature;
          try {
            await loadLateGuides();
          } catch {
            if (!saved.isConnected) return;
            lastIds = null;
            mount(saved, errorState(t('profile.savedError'), LOAD_FAILED_TEXT));
            bindErrorState(saved, () => void renderSaved(ids));
            return;
          }
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
          const groups = [...bySlug.values()].sort((a, b) => a.fighter.name.localeCompare(b.fighter.name, locale));
          comboCleanup();
          mount(saved, savedMarkup(groups, missing));
          comboCleanup = bindComboCards(saved, groups.flatMap((g) => g.combos));
        };

        const fetchBookmarks = (force: boolean): void => {
          loadBookmarks(force).catch((err: unknown) => {
            if (!saved.isConnected) return;
            lastIds = null;
            mount(saved, errorState(t('profile.savedError'), err instanceof ApiError ? err.message : LOAD_FAILED_TEXT));
            bindErrorState(saved, () => fetchBookmarks(true));
          });
        };
        fetchBookmarks(false);
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
            error.textContent = err instanceof ApiError ? err.message : t('api.failed');
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
