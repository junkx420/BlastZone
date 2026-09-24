/**
 * Farbschema. Dunkel ist der Standard und gilt für alle Gäste. Hell gibt es nur
 * für angemeldete Nutzer, die Wahl steht im Profil in der Datenbank und folgt
 * dem Konto auf jedes Gerät. Nichts davon liegt in localStorage.
 */
export type Theme = 'dark' | 'light';

const META_COLOR: Record<Theme, string> = { dark: '#06070a', light: '#f3f4f7' };

export function applyTheme(theme: Theme, animate = false): void {
  const root = document.documentElement;
  if ((root.dataset.theme ?? 'dark') === theme) return;
  if (animate) {
    root.classList.add('is-theme-switching');
    window.setTimeout(() => root.classList.remove('is-theme-switching'), 320);
  }
  if (theme === 'dark') delete root.dataset.theme;
  else root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOR[theme]);
}

export const currentTheme = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
