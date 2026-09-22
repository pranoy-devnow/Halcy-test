import assert from 'node:assert/strict'
import { test } from 'node:test'
import { fallbackListingDetails } from './fallbackDetails.ts'
import type { PhotoListing } from '../explore/types.ts'

const stay: PhotoListing = {
  id: 'test-stay',
  kind: 'stay',
  title: 'Harbour loft',
  tripName: 'Harbour lights',
  location: 'Copenhagen, Denmark',
  dates: '7–10 Nov',
  priceEuros: 720,
  priceSuffix: 'total',
  rating: { score: 4.9, count: 10 },
  imageUrl: 'https://example.com/stay.jpg',
  imageAlt: 'Harbour',
}

test('experiences are same-day with no overnight stay', () => {
  const details = fallbackListingDetails({
    ...stay,
    id: 'test-exp',
    kind: 'experience',
    priceSuffix: 'person',
    dates: '3 hours',
  })

  assert.equal(details.nights, 0)
  assert.equal(details.days, 1)
})

test('night-priced stays are one night', () => {
  const details = fallbackListingDetails({ ...stay, priceSuffix: 'night' })

  assert.equal(details.nights, 1)
  assert.equal(details.days, 2)
})

test('total-priced stays default to a two-night trip', () => {
  const details = fallbackListingDetails(stay)

  assert.equal(details.nights, 2)
  assert.equal(details.days, 3)
  assert.equal(details.timeAvailable, '7–10 Nov')
})

test('maps a high rating to Great and a mid rating to Fair', () => {
  assert.equal(fallbackListingDetails(stay).value.label, 'Great')
  assert.equal(
    fallbackListingDetails({ ...stay, rating: { score: 4.2, count: 4 } }).value
      .label,
    'Fair'
  )
})

test('uses This week and the stay title when dates and trip name are missing', () => {
  const details = fallbackListingDetails({
    ...stay,
    dates: undefined,
    tripName: undefined,
  })

  assert.equal(details.timeAvailable, 'This week')
  assert.equal(details.itinerary[1]?.title, 'Harbour loft')
})
