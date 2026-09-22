import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isTrackpadPinchZoom } from './preview-gestures.ts'

test('detects trackpad pinch zoom via ctrlKey on wheel', () => {
  assert.equal(isTrackpadPinchZoom({ ctrlKey: true } as WheelEvent), true)
  assert.equal(isTrackpadPinchZoom({ ctrlKey: false } as WheelEvent), false)
})
