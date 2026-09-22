import assert from 'node:assert/strict'
import { test } from 'node:test'
import { findUnderlayPath } from './underlay.ts'

test('leaves a tab path unchanged when Find is closed', () => {
  assert.equal(findUnderlayPath('/trips', '/'), '/trips')
})

test('keeps Explore under Find when opened from Explore', () => {
  assert.equal(findUnderlayPath('/find', '/'), '/')
})

test('keeps Trips under Find when opened from Trips', () => {
  assert.equal(findUnderlayPath('/find', '/trips'), '/trips')
})

test('falls back to Explore when Find is opened cold or from a listing', () => {
  assert.equal(findUnderlayPath('/find', '/find'), '/')
  assert.equal(findUnderlayPath('/find', '/listings/viewed-lisbon'), '/')
})
