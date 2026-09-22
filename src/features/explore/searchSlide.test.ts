import assert from 'node:assert/strict'
import { test } from 'node:test'
import { SEARCH_SLIDE_MS, searchSlideDurationMs } from './searchSlide.ts'

test('uses the expand duration when motion is allowed', () => {
  assert.equal(searchSlideDurationMs(false), SEARCH_SLIDE_MS)
})

test('skips the wait when motion is reduced', () => {
  assert.equal(searchSlideDurationMs(true), 0)
})
