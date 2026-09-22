/** Length of the Explore search expand, in milliseconds. */
export const SEARCH_SLIDE_MS = 420

/**
 * How long to keep the search sheet mounted after a close is requested.
 *
 * @param reduceMotion - `prefers-reduced-motion: reduce`
 * @returns `0` when motion is reduced, otherwise {@link SEARCH_SLIDE_MS}
 */
export function searchSlideDurationMs(reduceMotion: boolean): number {
  return reduceMotion ? 0 : SEARCH_SLIDE_MS
}
