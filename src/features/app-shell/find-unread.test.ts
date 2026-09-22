import assert from 'node:assert/strict'
import { test } from 'node:test'
import { FIND_UNREAD_SEED, findUnreadAfterVisit } from './find-unread.ts'

test('seeds two unread messages', () => {
  assert.equal(FIND_UNREAD_SEED, 2)
})

test('clears unread when Find is open', () => {
  assert.equal(findUnreadAfterVisit(2, true), 0)
})

test('keeps unread when Find is closed', () => {
  assert.equal(findUnreadAfterVisit(2, false), 2)
})

test('stays at zero after messages have been opened', () => {
  assert.equal(findUnreadAfterVisit(0, false), 0)
})
