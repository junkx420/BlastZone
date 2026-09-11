import type { Markup } from '../lib/dom';

export interface PageView {
  title: string;
  markup: Markup;
  /** Element to scroll to on forward navigation, e.g. "#roster". */
  anchor?: string;
  /** Wires behavior after the markup is in the DOM; returns cleanup for route changes. */
  mount?(root: HTMLElement): () => void;
}
