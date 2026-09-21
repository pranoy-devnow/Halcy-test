export const TALK_SLIDER_MIN = 0
export const TALK_SLIDER_MAX = 100
export const TALK_SLIDER_DEFAULT = 50

const FEWER_MAX = 33
const MORE_MIN = 67

/**
 * Labels the suggestion-balance slider for the live Find control.
 *
 * @param value - 0 (fewer) to 100 (more)
 * @returns A short status for the current thumb position
 */
export function talkBalanceLabel(value: number): string {
  if (value <= FEWER_MAX) {
    return 'Fewer suggestions'
  }

  if (value >= MORE_MIN) {
    return 'More suggestions'
  }

  return 'Balanced'
}

const STAR_MIN = 1
const STAR_MAX = 5

/**
 * Clamps a quality rating to a 1–5 star.
 *
 * @param value - Raw rating
 * @returns An integer from 1 to 5
 */
export function clampStarRating(value: number): number {
  return Math.min(STAR_MAX, Math.max(STAR_MIN, Math.round(value)))
}
