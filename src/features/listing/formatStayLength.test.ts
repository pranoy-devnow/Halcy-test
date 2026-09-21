import assert from 'node:assert/strict'
import { test } from 'node:test'
import { formatStayLength } from './formatStayLength.ts'

test('returns nights and days for a multi-night stay', () => {
  assert.equal(formatStayLength(2, 3), '2 nights · 3 days')
})

test('singularizes a one-night stay', () => {
  assert.equal(formatStayLength(1, 2), '1 night · 2 days')
})

test('omits nights for a single-day experience', () => {
  assert.equal(formatStayLength(0, 1), '1 day')
})

test('returns an empty string when both values are empty', () => {
  assert.equal(formatStayLength(0, 0), '')
  assert.equal(formatStayLength(-1, -2), '')
})
