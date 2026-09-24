import { TEXT as A } from './a';
import { TEXT as A_MINUS } from './a-minus';
import { TEXT as A_PLUS } from './a-plus';
import { TEXT as B_MINUS } from './b-minus';
import { TEXT as B_PLUS } from './b-plus';
import { TEXT as C_MINUS } from './c-minus';
import { TEXT as C_PLUS } from './c-plus';
import { TEXT as D_MINUS } from './d-minus';
import { TEXT as D_PLUS } from './d-plus';
import { TEXT as E } from './e';
import type { GuideTexts } from './types';

export { TAGS } from './tags';

/** Englisch für die nachgeladenen Tiers ab A+ (guides-late.ts). Wird zusammen mit ihnen geladen. */
export const LATE_TEXTS: GuideTexts = { ...A_PLUS, ...A, ...A_MINUS, ...B_PLUS, ...B_MINUS, ...C_PLUS, ...C_MINUS, ...D_PLUS, ...D_MINUS, ...E };
