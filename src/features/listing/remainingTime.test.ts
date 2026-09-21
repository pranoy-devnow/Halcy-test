import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  DEFAULT_COUNTDOWN_CYCLE_MS,
  countdownCycleMs,
  loopingRemaining,
  remainingParts,
} from './remainingTime.ts'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

test('splits a full delta into days hours minutes seconds', () => {
  assert.deepEqual(
    remainingParts(3 * DAY + 12 * HOUR + 5 * MINUTE + 7 * SECOND),
    { days: 3, hours: 12, minutes: 5, seconds: 7 }
  )
})

test('returns zeros when the instant has passed or is invalid', () => {
  assert.deepEqual(remainingParts(0), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  assert.deepEqual(remainingParts(-MINUTE), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  assert.deepEqual(remainingParts(Number.NaN), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
})

test('returns time left while the deadline is in the future', () => {
  const now = 1_000_000
  assert.equal(loopingRemaining(now + 4 * HOUR, now, 3 * DAY), 4 * HOUR)
})

test('resets to a full cycle when the deadline is reached', () => {
  const now = 1_000_000
  const cycle = 3 * DAY + 21 * HOUR
  assert.equal(loopingRemaining(now, now, cycle), cycle)
})

test('wraps overdue time back through the cycle', () => {
  const target = 1_000_000
  const cycle = 2 * HOUR
  assert.equal(loopingRemaining(target, target + 30 * MINUTE, cycle), 90 * MINUTE)
})

test('uses leftover time as the cycle when the target is still ahead', () => {
  const now = 5_000
  assert.equal(countdownCycleMs(now + 2 * DAY, now), 2 * DAY)
})

test('falls back to the default cycle when the target is already gone', () => {
  assert.equal(countdownCycleMs(1_000, 2_000), DEFAULT_COUNTDOWN_CYCLE_MS)
  assert.equal(countdownCycleMs(Number.NaN, 2_000), DEFAULT_COUNTDOWN_CYCLE_MS)
})
