import type { PhotoListing } from '../explore/types.ts'
import { fallbackListingDetails } from './fallbackDetails.ts'
import type { ListingDetails } from './types'

/** Detail records for every photo listing on Explore. */
export const LISTING_DETAILS: Record<string, ListingDetails> = {
  'viewed-lisbon': {
    matchPercent: 91,
    value: { label: 'Good', note: 'In line with Lisbon midweek stays' },
    timeAvailable: '20–25 Oct',
    countdownTo: '2026-10-20T09:00:00.000Z',
    nights: 5,
    days: 6,
    itinerary: [
      { day: 'Day 1', title: 'Tram 28', when: 'Morning', note: 'Ride the hills from Graça to Estrela.' },
      { day: 'Day 1', title: 'Miradouro da Senhora do Monte', when: 'Afternoon', note: 'City views before the light drops.' },
      { day: 'Day 1', title: 'Time Out Market', when: 'Evening', note: 'Pick a stall and stay late.' },
    ],
  },
  'viewed-rome': {
    matchPercent: 94,
    value: { label: 'Great', note: 'Below typical Forum-side weekends' },
    timeAvailable: '14–18 Oct',
    countdownTo: '2026-10-14T08:00:00.000Z',
    nights: 4,
    days: 5,
    itinerary: [
      { day: 'Day 1', title: 'Colosseum', when: 'Morning', note: 'Start early and walk the Forum after.' },
      { day: 'Day 1', title: 'Trastevere lunch', when: 'Afternoon', note: 'Carbonara, then the river path.' },
      { day: 'Day 1', title: 'Piazza Navona', when: 'Evening', note: 'Slow loop for gelato and fountains.' },
    ],
  },
  'viewed-cph': {
    matchPercent: 88,
    value: { label: 'Fair', note: 'Harbour stays run high this week' },
    timeAvailable: '7–10 Nov',
    countdownTo: '2026-11-07T10:00:00.000Z',
    nights: 3,
    days: 4,
    itinerary: [
      { day: 'Day 1', title: 'Nyhavn', when: 'Morning', note: 'Walk the painted harbour front.' },
      { day: 'Day 1', title: 'Designmuseum', when: 'Afternoon', note: 'One tight exhibit, then coffee.' },
      { day: 'Day 1', title: 'Reffen', when: 'Evening', note: 'Street food on the island.' },
    ],
  },
  'weekend-porto': {
    matchPercent: 96,
    value: { label: 'Great', note: 'Below typical Douro weekends' },
    timeAvailable: 'Fri–Sun',
    countdownTo: '2026-09-25T16:00:00.000Z',
    nights: 2,
    days: 3,
    itinerary: [
      { day: 'Friday', title: 'Ribeira', when: 'Evening', note: 'Arrive and walk the river tiles.' },
      { day: 'Saturday', title: 'Dom Luís Bridge', when: 'Afternoon', note: 'Upper deck at golden hour.' },
      { day: 'Saturday', title: 'Vila Nova de Gaia', when: 'Evening', note: 'Port tasting across the water.' },
      { day: 'Sunday', title: 'Livraria Lello', when: 'Morning', note: 'Short visit, then the train home.' },
    ],
  },
  'weekend-barcelona': {
    matchPercent: 90,
    value: { label: 'Great', note: 'Strong for a sun weekend' },
    timeAvailable: 'Fri–Sun',
    countdownTo: '2026-09-25T16:00:00.000Z',
    nights: 2,
    days: 3,
    itinerary: [
      { day: 'Saturday', title: 'Sagrada Família', when: 'Morning', note: 'Book a morning slot.' },
      { day: 'Saturday', title: 'Barceloneta', when: 'Afternoon', note: 'Swim, then a long lunch.' },
      { day: 'Sunday', title: 'Gothic Quarter', when: 'Morning', note: 'Lose an hour in the lanes.' },
    ],
  },
  'weekend-vienna': {
    matchPercent: 87,
    value: { label: 'Good', note: 'Typical for Innere Stadt' },
    timeAvailable: 'Fri–Sun',
    countdownTo: '2026-09-25T16:00:00.000Z',
    nights: 2,
    days: 3,
    itinerary: [
      { day: 'Friday', title: 'Ringstrasse', when: 'Evening', note: 'Tram loop to get your bearings.' },
      { day: 'Saturday', title: 'Belvedere', when: 'Morning', note: 'Klimt, then the gardens.' },
      { day: 'Sunday', title: 'Naschmarkt', when: 'Morning', note: 'Late breakfast before the train.' },
    ],
  },
  'exp-pasta': {
    matchPercent: 98,
    value: { label: 'Great', note: 'Includes dinner and wine' },
    timeAvailable: '3 hours',
    countdownTo: '2026-10-03T17:00:00.000Z',
    nights: 0,
    days: 1,
    itinerary: [
      { day: 'Day 1', title: 'Market shop', when: 'Hour 1', note: 'Pick flour, eggs, and a sauce plan.' },
      { day: 'Day 1', title: 'Make the dough', when: 'Hour 2', note: 'Roll, cut, and cook together.' },
      { day: 'Day 1', title: 'Table dinner', when: 'Hour 3', note: 'Eat what you made, stay for a glass.' },
    ],
  },
  'exp-fado': {
    matchPercent: 93,
    value: { label: 'Great', note: 'House wine included' },
    timeAvailable: '2 hours',
    countdownTo: '2026-10-04T20:00:00.000Z',
    nights: 0,
    days: 1,
    itinerary: [
      { day: 'Day 1', title: 'Alfama walk-in', when: '20:00', note: 'Arrive early for a table by the wall.' },
      { day: 'Day 1', title: 'First set', when: '20:30', note: 'Guitar and voice, no talking.' },
      { day: 'Day 1', title: 'Night streets', when: '22:00', note: 'Walk down to the river after.' },
    ],
  },
  'exp-kayak': {
    matchPercent: 89,
    value: { label: 'Good', note: 'Gear and guide included' },
    timeAvailable: 'Half day',
    countdownTo: '2026-10-05T09:00:00.000Z',
    nights: 0,
    days: 1,
    itinerary: [
      { day: 'Day 1', title: 'Old Town launch', when: 'Morning', note: 'Kit up under the walls.' },
      { day: 'Day 1', title: 'Cave paddle', when: 'Midday', note: 'Clear water along the cliffs.' },
      { day: 'Day 1', title: 'Swim stop', when: 'Afternoon', note: 'Jump in, then paddle back.' },
    ],
  },
  'deal-athens': {
    matchPercent: 85,
    value: { label: 'Great', note: 'Well below typical November nights' },
    timeAvailable: '13–15 Nov',
    countdownTo: '2026-11-13T08:00:00.000Z',
    nights: 2,
    days: 3,
    itinerary: [
      { day: 'Day 1', title: 'Acropolis', when: 'Morning', note: 'Go at opening, then the museum.' },
      { day: 'Day 1', title: 'Plaka', when: 'Evening', note: 'Dinner in the lanes below.' },
      { day: 'Day 2', title: 'Kypseli walk', when: 'Morning', note: 'Cafés and a slow morning.' },
    ],
  },
  'deal-prague': {
    matchPercent: 86,
    value: { label: 'Great', note: 'Old Town for this price is rare' },
    timeAvailable: '2–5 Nov',
    countdownTo: '2026-11-02T07:00:00.000Z',
    nights: 3,
    days: 4,
    itinerary: [
      { day: 'Day 1', title: 'Charles Bridge', when: 'Dawn', note: 'Beat the crowds on the stones.' },
      { day: 'Day 1', title: 'Old Town Square', when: 'Afternoon', note: 'Astronomical clock, then a beer.' },
      { day: 'Day 1', title: 'Castle steps', when: 'Evening', note: 'Walk up for the city lights.' },
    ],
  },
  'last-berlin': {
    matchPercent: 82,
    value: { label: 'Good', note: 'Last-minute Mitte is usually higher' },
    timeAvailable: 'Tonight – Sun',
    countdownTo: '2026-09-21T20:00:00.000Z',
    nights: 2,
    days: 3,
    itinerary: [
      { day: 'Tonight', title: 'Brandenburg Gate', when: 'Evening', note: 'Drop bags and walk the gate.' },
      { day: 'Saturday', title: 'Museum Island', when: 'Morning', note: 'Pick one building, not four.' },
      { day: 'Sunday', title: 'Tempelhofer Feld', when: 'Morning', note: 'Open runway before you leave.' },
    ],
  },
  'last-amsterdam': {
    matchPercent: 84,
    value: { label: 'Fair', note: 'Canal rooms stay pricey last minute' },
    timeAvailable: 'Tomorrow – Mon',
    countdownTo: '2026-09-22T10:00:00.000Z',
    nights: 2,
    days: 3,
    itinerary: [
      { day: 'Day 1', title: 'Canal loop', when: 'Morning', note: 'Walk Jordaan without a cruise.' },
      { day: 'Day 1', title: 'Rijksmuseum', when: 'Afternoon', note: 'One wing is enough.' },
      { day: 'Day 1', title: 'Brown café', when: 'Evening', note: 'A quiet last drink.' },
    ],
  },
  'city-lisbon': {
    matchPercent: 92,
    value: { label: 'Great', note: 'Alfama nights under €100' },
    timeAvailable: 'Any weekend',
    countdownTo: '2026-09-26T10:00:00.000Z',
    nights: 2,
    days: 3,
    itinerary: [
      { day: 'Saturday', title: 'Alfama lanes', when: 'Morning', note: 'Get lost before the miradouro.' },
      { day: 'Saturday', title: 'LX Factory', when: 'Afternoon', note: 'Books, coffee, river wind.' },
      { day: 'Sunday', title: 'Belém', when: 'Morning', note: 'Pastéis and the tower, then home.' },
    ],
  },
  'city-stockholm': {
    matchPercent: 80,
    value: { label: 'Fair', note: 'Södermalm sits at the city average' },
    timeAvailable: 'City break',
    countdownTo: '2026-10-03T09:00:00.000Z',
    nights: 1,
    days: 2,
    itinerary: [
      { day: 'Day 1', title: 'Gamla Stan', when: 'Morning', note: 'Alleys and the water edge.' },
      { day: 'Day 1', title: 'Södermalm cliffs', when: 'Evening', note: 'Sunset over the locks.' },
      { day: 'Day 2', title: 'Fotografiska', when: 'Morning', note: 'One show, then the ferry.' },
    ],
  },
}

/**
 * Returns listing extras, or undefined when the id has no posting.
 */
export function getListingDetails(listingId: string): ListingDetails | undefined {
  return LISTING_DETAILS[listingId]
}

/**
 * Custom extras when they exist, otherwise a card-derived posting.
 *
 * @param listing - Catalog stay or experience
 * @returns Hand-written details, or a fallback built from the card
 */
export function resolveListingDetails(listing: PhotoListing): ListingDetails {
  return getListingDetails(listing.id) ?? fallbackListingDetails(listing)
}
