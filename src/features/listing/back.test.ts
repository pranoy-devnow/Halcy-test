import assert from 'node:assert/strict'
import { test } from 'node:test'
import { listingBackLocation } from './back.ts'

test('returns to Explore when the listing was not opened from Find', () => {
  assert.deepEqual(listingBackLocation(undefined), { pathname: '/' })
})

test('returns to Find when the listing was opened from chat', () => {
  assert.deepEqual(listingBackLocation({ fromFind: true }), {
    pathname: '/find',
    state: undefined,
  })
})

test('keeps the search-sheet session when Find was opened from Agent', () => {
  assert.deepEqual(
    listingBackLocation({ fromFind: true, fromSearch: true }),
    { pathname: '/find', state: { fromSearch: true } }
  )
})
