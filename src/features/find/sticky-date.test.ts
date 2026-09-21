import assert from 'node:assert/strict'
import { test } from 'node:test'
import { pickActiveDate } from './sticky-date.ts'

const SECTIONS = [
  { date: '18 September 2026', top: 0 },
  { date: '20 September 2026', top: 400 },
  { date: '21 September 2026', top: 800 },
]

test('uses the first date at the top of the thread', () => {
  assert.equal(pickActiveDate(SECTIONS, 0), '18 September 2026')
})

test('switches when the next day reaches the header', () => {
  assert.equal(pickActiveDate(SECTIONS, 400), '20 September 2026')
})

test('shows today after scrolling to the end', () => {
  assert.equal(pickActiveDate(SECTIONS, 900), '21 September 2026')
})

test('returns undefined when there are no days', () => {
  assert.equal(pickActiveDate([], 0), undefined)
})
