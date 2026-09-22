/** Highest unread count shown before collapsing to a plus suffix. */
export const TAB_BADGE_MAX = 99

/**
 * Formats a tab unread count for the red badge.
 *
 * @param count - Unread items
 * @returns A digit label, `99+` when over the cap, or null when the badge is hidden
 */
export function formatTabBadgeCount(count: number): string | null {
  if (!Number.isFinite(count) || count <= 0) {
    return null
  }

  const whole = Math.floor(count)
  if (whole > TAB_BADGE_MAX) {
    return `${TAB_BADGE_MAX}+`
  }

  return String(whole)
}

/**
 * Accessible tab name, including unread count when a badge is shown.
 *
 * @param label - Tab name
 * @param badgeLabel - Formatted count, or null when hidden
 */
export function tabAriaLabel(label: string, badgeLabel: string | null): string {
  if (badgeLabel === null) {
    return label
  }

  return `${label}, ${badgeLabel} new`
}
