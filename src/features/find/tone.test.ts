import assert from 'node:assert/strict'
import { test } from 'node:test'
import { FIND_TONE_DEFAULT, findToneLabel, isFindTone } from './tone.ts'

test('defaults to Neutral', () => {
  assert.equal(FIND_TONE_DEFAULT, 'neutral')
  assert.equal(findToneLabel(FIND_TONE_DEFAULT), 'Neutral')
})

test('labels each tone chip', () => {
  assert.equal(findToneLabel('warm'), 'Warm')
  assert.equal(findToneLabel('direct'), 'Direct')
})

test('rejects an unknown tone string', () => {
  assert.equal(isFindTone('neutral'), true)
  assert.equal(isFindTone('loud'), false)
  assert.equal(isFindTone(''), false)
})
