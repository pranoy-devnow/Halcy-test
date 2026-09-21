const SECOND_MS = 1000
const MINUTE_MS = 60 * SECOND_MS
const HOUR_MS = 60 * MINUTE_MS
const DAY_MS = 24 * HOUR_MS

/** Cycle used when the target is already in the past at mount. */
export const DEFAULT_COUNTDOWN_CYCLE_MS = 3 * DAY_MS

/** One ticking countdown, broken into calendar units. */
export type RemainingParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/**
 * Remaining time that loops instead of ending. After the target, it counts
 * down `cycleMs` again from the top.
 *
 * @param targetMs - Epoch ms of the original deadline
 * @param now - Current epoch ms
 * @param cycleMs - Length of each loop after the deadline
 * @returns Milliseconds left in the current loop
 */
export function loopingRemaining(
  targetMs: number,
  now: number,
  cycleMs: number
): number {
  if (!Number.isFinite(targetMs) || !Number.isFinite(now) || cycleMs <= 0) {
    return 0
  }

  const remaining = targetMs - now
  if (remaining > 0) {
    return remaining
  }

  const overdue = (now - targetMs) % cycleMs
  return overdue === 0 ? cycleMs : cycleMs - overdue
}

/**
 * Splits a millisecond delta into days, hours, minutes, and seconds.
 *
 * @param ms - Milliseconds remaining
 * @returns Zeroed parts when the delta is empty or invalid
 */
export function remainingParts(ms: number): RemainingParts {
  if (!Number.isFinite(ms) || ms <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const totalSeconds = Math.floor(ms / SECOND_MS)
  const days = Math.floor(totalSeconds / (DAY_MS / SECOND_MS))
  const hours = Math.floor((totalSeconds % (DAY_MS / SECOND_MS)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

/**
 * Period to loop after the first deadline. Future targets use the time left
 * at mount; past targets use {@link DEFAULT_COUNTDOWN_CYCLE_MS}.
 *
 * @param targetMs - Epoch ms of the original deadline
 * @param now - Current epoch ms
 */
export function countdownCycleMs(targetMs: number, now: number): number {
  if (!Number.isFinite(targetMs) || !Number.isFinite(now)) {
    return DEFAULT_COUNTDOWN_CYCLE_MS
  }

  const remaining = targetMs - now
  return remaining > 0 ? remaining : DEFAULT_COUNTDOWN_CYCLE_MS
}
