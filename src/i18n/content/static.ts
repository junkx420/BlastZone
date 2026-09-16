import { TEXT as S_MINUS } from './s-minus';
import { TEXT as S_PLUS } from './s-plus';
import type { GuideTexts } from './types';

/**
 * Englisch für alles, was schon im Startbundle liegt: Taglines und die Guides aus
 * guides.ts (S+ und S−). Wird nur bei englischer Seite nachgeladen (prepareContent).
 */
export { TAGLINES } from './taglines';

export const STATIC_TEXTS: GuideTexts = { ...S_PLUS, ...S_MINUS };
