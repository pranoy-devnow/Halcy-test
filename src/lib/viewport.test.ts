import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  PHONE_PREVIEW_HEIGHT_PX,
  PHONE_PREVIEW_WIDTH_PX,
  phonePreviewScale,
} from './viewport.ts'

test('never scales above 1', () => {
  assert.equal(phonePreviewScale(2000, 2000, 32), 1)
})

test('shrinks when the viewport is narrower than the phone', () => {
  const scale = phonePreviewScale(PHONE_PREVIEW_WIDTH_PX, 900, 32)
  assert.ok(scale < 1)
  assert.ok(scale > 0)
})

test('shrinks when the viewport is shorter than the phone', () => {
  const scale = phonePreviewScale(900, PHONE_PREVIEW_HEIGHT_PX, 32)
  assert.ok(scale < 1)
  assert.ok(scale > 0)
})

test('returns 1 for zero available space edge case', () => {
  assert.equal(phonePreviewScale(10, 10, 32), 1)
})
