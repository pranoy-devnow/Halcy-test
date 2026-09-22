import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  relativeSearchBox,
  searchExpandCss,
  searchExpandTransform,
} from './searchExpand.ts'

test('maps an element box into the overlay root', () => {
  assert.deepEqual(
    relativeSearchBox(
      { left: 120, top: 80, width: 200, height: 40 },
      { left: 100, top: 20 }
    ),
    { x: 20, y: 60, width: 200, height: 40 }
  )
})

test('returns identity when the pill and card share a box', () => {
  const box = { x: 16, y: 80, width: 300, height: 40 }

  assert.deepEqual(searchExpandTransform(box, box), {
    translateX: 0,
    translateY: 0,
    scaleX: 1,
    scaleY: 1,
  })
})

test('scales and shifts the card onto the pill', () => {
  const from = { x: 20, y: 60, width: 200, height: 40 }
  const to = { x: 16, y: 120, width: 400, height: 200 }

  assert.deepEqual(searchExpandTransform(from, to), {
    translateX: 4,
    translateY: -60,
    scaleX: 0.5,
    scaleY: 0.2,
  })
})

test('avoids infinite scale when the rest box has no size', () => {
  const from = { x: 0, y: 0, width: 10, height: 10 }
  const to = { x: 0, y: 0, width: 0, height: 0 }

  assert.deepEqual(searchExpandTransform(from, to), {
    translateX: 0,
    translateY: 0,
    scaleX: 1,
    scaleY: 1,
  })
})

test('serializes the transform for a style attribute', () => {
  assert.equal(
    searchExpandCss({
      translateX: 4,
      translateY: -60,
      scaleX: 0.5,
      scaleY: 0.2,
    }),
    'translate(4px, -60px) scale(0.5, 0.2)'
  )
})
