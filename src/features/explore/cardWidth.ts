/**
 * Card width so two tiles plus a half peek fit the carousel.
 * Uses the section container (`cqi`) so padding is not subtracted twice.
 * Accounts for `px-5` start inset and two `gap-3` gutters.
 */
export const EXPLORE_CARD_WIDTH_CLASS =
  'w-[calc((100cqi-2.75rem)/2.5)] shrink-0'
