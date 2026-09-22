import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  isFromSearch,
  isOpenSearch,
  isSearchPillHidden,
  searchReturnMode,
} from './searchSheet.ts'

test('detects Find opened from the search Agent control', () => {
  assert.equal(isFromSearch({ fromSearch: true }), true)
  assert.equal(isFromSearch({}), false)
  assert.equal(isFromSearch(null), false)
})

test('detects Explore should reopen the search sheet', () => {
  assert.equal(isOpenSearch({ openSearch: true }), true)
  assert.equal(isOpenSearch({ fromSearch: true }), false)
})

test('keeps a live search sheet instead of replaying the expand', () => {
  assert.equal(searchReturnMode(true), 'keep')
})

test('restores search after Explore remounted', () => {
  assert.equal(searchReturnMode(false), 'restore')
})

test('hides the header pill while the sheet is open', () => {
  assert.equal(isSearchPillHidden(true, false), true)
})

test('shows the header pill as soon as search starts closing', () => {
  assert.equal(isSearchPillHidden(true, true), false)
  assert.equal(isSearchPillHidden(false, false), false)
})
