import type { PhotoListing } from '../explore/types.ts'
import type { ListingDetails, ValueLabel } from './types'

const DEFAULT_COUNTDOWN_TO = '2026-10-10T09:00:00.000Z'
const DEFAULT_STAY_NIGHTS = 2

/**
 * Listing extras when a photo card has no hand-written posting.
 *
 * @param listing - Catalog stay or experience
 * @returns Match, value, countdown, and a short itinerary derived from the card
 */
export function fallbackListingDetails(listing: PhotoListing): ListingDetails {
  const city = listing.location.split(',')[0]?.trim() || listing.location
  const nights = listing.kind === 'experience' ? 0 : nightsForStay(listing)
  const days = listing.kind === 'experience' ? 1 : nights + 1

  return {
    matchPercent: matchFromRating(listing.rating.score),
    value: {
      label: valueLabelFromRating(listing.rating.score),
      note: `In line with ${city} this week`,
    },
    timeAvailable: listing.dates?.trim() || 'This week',
    countdownTo: DEFAULT_COUNTDOWN_TO,
    nights,
    days,
    itinerary: [
      {
        day: 'Day 1',
        title: `Arrive in ${city}`,
        when: 'Morning',
        note: 'Drop bags and walk the first street.',
      },
      {
        day: 'Day 1',
        title: listing.tripName ?? listing.title,
        when: 'Afternoon',
        note: 'Give the place the afternoon.',
      },
      {
        day: days > 1 ? `Day ${days}` : 'Day 1',
        title: 'Head back',
        when: 'Morning',
        note: 'One last coffee, then the train.',
      },
    ],
  }
}

function nightsForStay(listing: PhotoListing): number {
  return listing.priceSuffix === 'night' ? 1 : DEFAULT_STAY_NIGHTS
}

function matchFromRating(score: number): number {
  return Math.min(99, Math.max(70, Math.round(score * 20)))
}

function valueLabelFromRating(score: number): ValueLabel {
  if (score >= 4.8) {
    return 'Great'
  }

  if (score >= 4.5) {
    return 'Good'
  }

  return 'Fair'
}
