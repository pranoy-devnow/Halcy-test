import assert from 'node:assert/strict'
import { test } from 'node:test'
import type { Listing, PhotoListing } from '../explore/types.ts'
import { getDealListing, getDealListings } from './deal-listing.ts'

const stay: PhotoListing = {
  id: 'deal-athens',
  kind: 'stay',
  title: 'Apartment in Kypseli',
  tripName: 'Athenian deal',
  location: 'Athens, Greece',
  dates: '13–15 Nov',
  priceEuros: 198,
  priceSuffix: 'total',
  rating: { score: 5, count: 48 },
  imageUrl: 'https://example.com/athens.jpg',
  imageAlt: 'The Acropolis above Athens',
}

const flight: Listing = {
  id: 'flight-par',
  kind: 'flight',
  title: 'Paris',
  route: 'ARN – PAR',
  city: 'Paris',
  dates: 'Wed 7 – Wed 14 Oct',
  priceEuros: 56,
  rating: { score: 4.4, count: 1200 },
}

test('returns a stay listing for the gift card', () => {
  assert.equal(getDealListing(stay), stay)
})

test('returns undefined when the listing is missing', () => {
  assert.equal(getDealListing(undefined), undefined)
})

test('returns undefined when the listing is a flight', () => {
  assert.equal(getDealListing(flight), undefined)
})

test('keeps photo listings in order and drops flights', () => {
  const prague: PhotoListing = { ...stay, id: 'deal-prague' }
  assert.deepEqual(getDealListings([stay, undefined, flight, prague]), [
    stay,
    prague,
  ])
})

test('returns an empty list when there are no photo listings', () => {
  assert.deepEqual(getDealListings([]), [])
})
