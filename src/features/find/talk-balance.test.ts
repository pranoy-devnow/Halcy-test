import assert from 'node:assert/strict'
import { test } from 'node:test'
import { clampStarRating, talkBalanceLabel } from './talk-balance.ts'

test('names the quiet end of the slider', () => {
  assert.equal(talkBalanceLabel(0), 'Fewer suggestions')
})

test('names the middle of the slider', () => {
  assert.equal(talkBalanceLabel(50), 'Balanced')
})

test('names the chatty end of the slider', () => {
  assert.equal(talkBalanceLabel(100), 'More suggestions')
})

test('clamps a star rating to 1–5', () => {
  assert.equal(clampStarRating(5), 5)
  assert.equal(clampStarRating(0), 1)
  assert.equal(clampStarRating(9), 5)
})
