import { FIGHTERS } from '../data/fighters';
import { t } from '../i18n';
import { showToast } from './toast';

/**
 * „Link zu dieser Combo kopieren“ an jeder Combo-Karte.
 *
 * Ein Klick-Listener fürs ganze Dokument, wie bei den Lesezeichen: Karten entstehen
 * auf mehreren Seiten und teils nachgeladen. Der Link zeigt auf die Fighter-Seite mit
 * `?combo=<id>`, die dort zur Karte springt (pages/fighter.ts).
 *
 * Bewusst ohne `?lang=`: Wer den Link bekommt, sieht die Seite in seiner eigenen
 * Gerätesprache.
 */

/** Fighter zur Combo-ID. IDs beginnen mit dem Slug, auch bei Echos (echoGuide ersetzt ihn). Längster Treffer gewinnt: dark-samus vor samus. */
export function fighterSlugForCombo(id: string): string | undefined {
  let best: string | undefined;
  for (const f of FIGHTERS) {
    if (id.startsWith(`${f.slug}-`) && (!best || f.slug.length > best.length)) best = f.slug;
  }
  return best;
}

export function comboUrl(id: string): string | null {
  const slug = fighterSlugForCombo(id);
  if (!slug) return null;
  return `${location.origin}${location.pathname}#/fighter/${slug}?combo=${encodeURIComponent(id)}`;
}

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Ohne Clipboard-API (ältere Browser, unsicherer Kontext): über ein kurzlebiges Textfeld.
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    field.remove();
    return ok;
  }
}

export function initShareButtons(): void {
  document.addEventListener('click', async (e) => {
    const button = (e.target as Element | null)?.closest<HTMLButtonElement>('[data-share]');
    if (!button) return;
    e.preventDefault();
    const url = comboUrl(button.dataset.share ?? '');
    if (!url) return;
    const ok = await copy(url);
    showToast(ok ? t('combo.linkCopied') : t('combo.copyFailed'));
  });
}
