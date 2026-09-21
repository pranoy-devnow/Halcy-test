/** One day’s date and its offset from the top of the Find scroller. */
export type DaySection = {
  date: string
  top: number
}

/**
 * Picks the date whose section has scrolled up to the header.
 *
 * @param sections - Days in document order, with `top` as offsetTop
 * @param scrollTop - Current scroller offset
 * @param offset - Extra pixels so the header updates as a chip meets the band
 * @returns The active date, or the first date when still above every section
 */
export function pickActiveDate(
  sections: readonly DaySection[],
  scrollTop: number,
  offset = 0
): string | undefined {
  let active: string | undefined

  for (const section of sections) {
    if (section.top <= scrollTop + offset) {
      active = section.date
    }
  }

  return active ?? sections[0]?.date
}
