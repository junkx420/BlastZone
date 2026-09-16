import { TEXT as A } from './a';
import { TEXT as A_PLUS } from './a-plus';
import type { GuideTexts } from './types';

/** Englisch für die nachgeladenen Tiers ab A+ (guides-late.ts). Wird zusammen mit ihnen geladen. */
export const LATE_TEXTS: GuideTexts = { ...A_PLUS, ...A };
