import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  SEE_MORE_VIEWPORT_RATIO,
  nextSeeMoreScrollLeft,
  scrollSeeMore,
} from './seeMoreScroll.ts'

test('advances by most of the visible track', () => {
  assert.equal(nextSeeMoreScrollLeft(0, 300, 900), Math.round(300 * SEE_MORE_VIEWPORT_RATIO))
})

test('wraps to the start when the next step would reach the end', () => {
  assert.equal(nextSeeMoreScrollLeft(500, 300, 800), 0)
})

test('stays at 0 when the shelf already fits', () => {
  assert.equal(nextSeeMoreScrollLeft(0, 300, 280), 0)
})

test('returns 0 for a zero-width track instead of NaN', () => {
  assert.equal(nextSeeMoreScrollLeft(0, 0, 0), 0)
})

test('does nothing when the scroller is missing', () => {
  assert.doesNotThrow(() => scrollSeeMore(null))
})
