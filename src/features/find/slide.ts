/** Length of the Find slide-over, in milliseconds. */
export const FIND_SLIDE_MS = 320

/**
 * How long to keep Find mounted after a leave is requested.
 *
 * @param reduceMotion - `prefers-reduced-motion: reduce`
 * @returns `0` when motion is reduced, otherwise {@link FIND_SLIDE_MS}
 */
export function findSlideDurationMs(reduceMotion: boolean): number {
  return reduceMotion ? 0 : FIND_SLIDE_MS
}

/**
 * Where Find back should land after the slide-out.
 *
 * @param fromSearch - Whether Find was opened from the Explore search Agent
 * @returns Explore, reopening search when that session is still active
 */
export function findLeaveLocation(fromSearch: boolean): {
  pathname: '/'
  state?: { openSearch: true }
} {
  if (fromSearch) {
    return { pathname: '/', state: { openSearch: true } }
  }

  return { pathname: '/' }
}
