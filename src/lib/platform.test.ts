import assert from 'node:assert/strict'
import { test } from 'node:test'
import { shouldShowPhoneFrame } from './platform.ts'

test('shows the phone frame on web regardless of viewport width', () => {
  assert.equal(shouldShowPhoneFrame(false, 320), true)
  assert.equal(shouldShowPhoneFrame(false, 480), true)
  assert.equal(shouldShowPhoneFrame(false, 1280), true)
})

test('hides the phone frame only on native platforms', () => {
  assert.equal(shouldShowPhoneFrame(true, 390), false)
})
