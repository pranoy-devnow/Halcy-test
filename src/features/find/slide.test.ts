import assert from 'node:assert/strict'
import { test } from 'node:test'
import { FIND_SLIDE_MS, findLeaveLocation, findSlideDurationMs } from './slide.ts'

test('uses the slide duration when motion is allowed', () => {
  assert.equal(findSlideDurationMs(false), FIND_SLIDE_MS)
})

test('skips the wait when motion is reduced', () => {
  assert.equal(findSlideDurationMs(true), 0)
})

test('returns to Explore from a normal Find session', () => {
  assert.deepEqual(findLeaveLocation(false), { pathname: '/' })
})

test('reopens the search sheet when Find was opened from Agent', () => {
  assert.deepEqual(findLeaveLocation(true), {
    pathname: '/',
    state: { openSearch: true },
  })
})
