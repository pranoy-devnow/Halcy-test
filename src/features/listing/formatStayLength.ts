/**
 * Formats a stay as `2 nights · 3 days`. Experiences with no nights are `1 day`.
 *
 * @param nights - Overnight stays; `0` hides the night part
 * @param days - Calendar days on the trip
 * @returns A chip label, or an empty string when both values are empty
 */
export function formatStayLength(nights: number, days: number): string {
  if (nights <= 0 && days <= 0) {
    return ''
  }

  if (nights <= 0) {
    return pluralize(days, 'day')
  }

  return `${pluralize(nights, 'night')} · ${pluralize(days, 'day')}`
}

/**
 * Returns `1 unit` or `n units`.
 */
function pluralize(count: number, unit: string): string {
  return count === 1 ? `1 ${unit}` : `${count} ${unit}s`
}
