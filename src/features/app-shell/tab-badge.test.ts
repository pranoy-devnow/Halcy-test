import assert from 'node:assert/strict'
import { test } from 'node:test'
import { formatTabBadgeCount, tabAriaLabel } from './tab-badge.ts'

test('returns the unread count as a digit', () => {
  assert.equal(formatTabBadgeCount(2), '2')
})

test('hides the badge when there is nothing unread', () => {
  assert.equal(formatTabBadgeCount(0), null)
  assert.equal(formatTabBadgeCount(-3), null)
})

test('caps large counts at 99+', () => {
  assert.equal(formatTabBadgeCount(99), '99')
  assert.equal(formatTabBadgeCount(100), '99+')
})

test('rejects non-finite counts', () => {
  assert.equal(formatTabBadgeCount(Number.NaN), null)
  assert.equal(formatTabBadgeCount(Number.POSITIVE_INFINITY), null)
})

test('names the tab with its unread count', () => {
  assert.equal(tabAriaLabel('Find', '2'), 'Find, 2 new')
  assert.equal(tabAriaLabel('Find', null), 'Find')
})
