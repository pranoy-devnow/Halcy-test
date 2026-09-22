/** How much of the visible track See more advances. Leaves a peek of the next tile. */
export const SEE_MORE_VIEWPORT_RATIO = 0.8

/** Treat this many pixels as “already at the end” so float error does not skip wrap. */
const END_EPSILON_PX = 2

/**
 * Next `scrollLeft` after tapping See more.
 *
 * @param scrollLeft - Current horizontal offset
 * @param clientWidth - Visible track width
 * @param scrollWidth - Full content width
 * @returns Advanced offset, or `0` when the next step would reach the end
 */
export function nextSeeMoreScrollLeft(
  scrollLeft: number,
  clientWidth: number,
  scrollWidth: number
): number {
  const maxScroll = Math.max(0, scrollWidth - clientWidth)
  if (maxScroll === 0 || clientWidth <= 0) {
    return 0
  }

  const step = Math.max(1, Math.round(clientWidth * SEE_MORE_VIEWPORT_RATIO))
  const next = scrollLeft + step

  if (next >= maxScroll - END_EPSILON_PX) {
    return 0
  }

  return Math.min(next, maxScroll)
}

/**
 * Smooth-scrolls a shelf to the next See more offset.
 *
 * @param scroller - The horizontal track, or null before mount
 */
export function scrollSeeMore(scroller: HTMLElement | null): void {
  if (!scroller) {
    return
  }

  scroller.scrollTo({
    left: nextSeeMoreScrollLeft(
      scroller.scrollLeft,
      scroller.clientWidth,
      scroller.scrollWidth
    ),
    behavior: 'smooth',
  })
}
