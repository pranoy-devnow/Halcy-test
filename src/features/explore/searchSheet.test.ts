import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isFromSearch, isOpenSearch } from './searchSheet.ts'

test('detects Find opened from the search Agent control', () => {
  assert.equal(isFromSearch({ fromSearch: true }), true)
  assert.equal(isFromSearch({}), false)
  assert.equal(isFromSearch(null), false)
})

test('detects Explore should reopen the search sheet', () => {
  assert.equal(isOpenSearch({ openSearch: true }), true)
  assert.equal(isOpenSearch({ fromSearch: true }), false)
})
