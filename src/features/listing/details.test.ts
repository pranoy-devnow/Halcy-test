import assert from 'node:assert/strict'
import { test } from 'node:test'
import { resolveListingDetails } from './details.ts'
import type { PhotoListing } from '../explore/types.ts'

const extraStay: PhotoListing = {
  id: 'viewed-madrid',
  kind: 'stay',
  title: 'Malasaña walk-up',
  location: 'Madrid, Spain',
  dates: '3–6 Nov',
  priceEuros: 1120,
  priceSuffix: 'total',
  rating: { score: 4.77, count: 204 },
  imageUrl: 'https://example.com/madrid.jpg',
  imageAlt: 'Madrid',
}

test('keeps the hand-written posting when one exists', () => {
  const details = resolveListingDetails({
    ...extraStay,
    id: 'viewed-lisbon',
    location: 'Lisbon, Portugal',
  })

  assert.equal(details.matchPercent, 91)
  assert.equal(details.nights, 5)
})

test('builds extras for a new photo card without a posting', () => {
  const details = resolveListingDetails(extraStay)

  assert.equal(details.nights, 2)
  assert.equal(details.timeAvailable, '3–6 Nov')
  assert.match(details.value.note, /Madrid/)
})
