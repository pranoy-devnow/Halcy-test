import { listingMatchesCategory } from './listingThemes'
import type { ExploreCategory, ExploreSection, Listing } from './types'

/** Static Explore listings used until a live catalog exists. */
export const LISTINGS: readonly Listing[] = [
  {
    id: 'viewed-lisbon',
    kind: 'stay',
    title: 'The Vintage Hotel',
    tripName: 'Lisbon hills',
    location: 'Lisbon, Portugal',
    dates: '20–25 Oct',
    priceEuros: 1593,
    priceSuffix: 'total',
    rating: { score: 4.86, count: 312 },
    imageUrl:
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Lisbon street with a yellow tram',
  },
  {
    id: 'viewed-rome',
    kind: 'stay',
    title: 'Palazzo near the Forum',
    tripName: 'Forum days',
    location: 'Rome, Italy',
    dates: '14–18 Oct',
    priceEuros: 980,
    priceSuffix: 'total',
    rating: { score: 4.92, count: 188 },
    imageUrl:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'The Colosseum in Rome',
  },
  {
    id: 'viewed-cph',
    kind: 'stay',
    title: 'Harbour loft',
    tripName: 'Harbour lights',
    location: 'Copenhagen, Denmark',
    dates: '7–10 Nov',
    priceEuros: 720,
    priceSuffix: 'total',
    rating: { score: 4.7, count: 94 },
    imageUrl:
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Colorful harbour houses in Copenhagen',
  },
  {
    id: 'weekend-porto',
    kind: 'stay',
    title: 'Ribeira townhouse',
    tripName: 'Douro nights',
    location: 'Porto, Portugal',
    dates: 'Fri–Sun',
    priceEuros: 410,
    priceSuffix: 'total',
    rating: { score: 4.81, count: 156 },
    imageUrl:
      'https://images.unsplash.com/photo-1642197288459-a038450c6217?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Porto hillside houses along the Douro',
  },
  {
    id: 'weekend-barcelona',
    kind: 'stay',
    title: 'Eixample flat',
    tripName: 'Catalan sun',
    location: 'Barcelona, Spain',
    dates: 'Fri–Sun',
    priceEuros: 380,
    priceSuffix: 'total',
    rating: { score: 4.64, count: 221 },
    imageUrl:
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Sagrada Família in Barcelona',
  },
  {
    id: 'weekend-vienna',
    kind: 'stay',
    title: 'Innere Stadt suite',
    tripName: 'Waltz city',
    location: 'Vienna, Austria',
    dates: 'Fri–Sun',
    priceEuros: 445,
    priceSuffix: 'total',
    rating: { score: 4.88, count: 77 },
    imageUrl:
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Historic street in Vienna',
  },
  {
    id: 'exp-pasta',
    kind: 'experience',
    title: 'Pasta class with a Roman chef',
    tripName: 'Roman kitchen',
    location: 'Rome, Italy',
    dates: '3 hours',
    priceEuros: 89,
    priceSuffix: 'person',
    rating: { score: 4.97, count: 640 },
    imageUrl:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hands making fresh pasta',
  },
  {
    id: 'exp-fado',
    kind: 'experience',
    title: 'Night of fado in Alfama',
    tripName: 'Fado night',
    location: 'Lisbon, Portugal',
    dates: '2 hours',
    priceEuros: 42,
    priceSuffix: 'person',
    rating: { score: 4.9, count: 210 },
    imageUrl:
      'https://images.unsplash.com/photo-1531259267539-a45cfb4fe070?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Lisbon waterfront and 25 de Abril Bridge at night',
  },
  {
    id: 'exp-kayak',
    kind: 'experience',
    title: 'Kayak the Dubrovnik coast',
    tripName: 'Adriatic paddle',
    location: 'Dubrovnik, Croatia',
    dates: 'Half day',
    priceEuros: 65,
    priceSuffix: 'person',
    rating: { score: 4.85, count: 134 },
    imageUrl:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kayaks on clear coastal water',
  },
  {
    id: 'deal-athens',
    kind: 'stay',
    title: 'Apartment in Kypseli',
    tripName: 'Athenian deal',
    location: 'Athens, Greece',
    dates: '13–15 Nov',
    priceEuros: 198,
    priceSuffix: 'total',
    rating: { score: 5, count: 48 },
    imageUrl:
      'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'The Acropolis above Athens',
  },
  {
    id: 'deal-prague',
    kind: 'stay',
    title: 'Old Town studio',
    tripName: 'Bohemian deal',
    location: 'Prague, Czechia',
    dates: '2–5 Nov',
    priceEuros: 240,
    priceSuffix: 'total',
    rating: { score: 4.73, count: 301 },
    imageUrl:
      'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Charles Bridge and Prague skyline',
  },
  {
    id: 'flight-par',
    kind: 'flight',
    title: 'Paris',
    route: 'ARN – PAR',
    city: 'Paris',
    dates: 'Wed 7 – Wed 14 Oct',
    priceEuros: 56,
    rating: { score: 4.4, count: 1200 },
  },
  {
    id: 'flight-lon',
    kind: 'flight',
    title: 'London',
    route: 'ARN – LHR',
    city: 'London',
    dates: 'Wed 14 – Wed 21 Oct',
    priceEuros: 72,
    rating: { score: 4.3, count: 980 },
  },
  {
    id: 'flight-waw',
    kind: 'flight',
    title: 'Warsaw',
    route: 'ARN – WAW',
    city: 'Warsaw',
    dates: 'Sat 10 – Mon 19 Oct',
    priceEuros: 49,
    rating: { score: 4.1, count: 640 },
  },
  {
    id: 'last-berlin',
    kind: 'stay',
    title: 'Mitte loft tonight',
    tripName: 'Berlin tonight',
    location: 'Berlin, Germany',
    dates: 'Tonight – Sun',
    priceEuros: 129,
    priceSuffix: 'night',
    rating: { score: 4.55, count: 88 },
    imageUrl:
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Brandenburg Gate in Berlin',
  },
  {
    id: 'last-amsterdam',
    kind: 'stay',
    title: 'Canal house room',
    tripName: 'Canal last call',
    location: 'Amsterdam, Netherlands',
    dates: 'Tomorrow – Mon',
    priceEuros: 155,
    priceSuffix: 'night',
    rating: { score: 4.69, count: 172 },
    imageUrl:
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Canal houses in Amsterdam',
  },
  {
    id: 'city-lisbon',
    kind: 'stay',
    title: 'Alfama terrace',
    tripName: 'Alfama days',
    location: 'Lisbon, Portugal',
    dates: 'Any weekend',
    priceEuros: 95,
    priceSuffix: 'night',
    rating: { score: 4.78, count: 260 },
    imageUrl:
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Alfama rooftops in Lisbon',
  },
  {
    id: 'city-stockholm',
    kind: 'stay',
    title: 'Södermalm hotel',
    tripName: 'Södermalm stroll',
    location: 'Stockholm, Sweden',
    dates: 'City break',
    priceEuros: 140,
    priceSuffix: 'night',
    rating: { score: 4.6, count: 410 },
    imageUrl:
      'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Gamla Stan waterfront in Stockholm',
  },
]

/** Ordered Explore shelves. */
export const EXPLORE_SECTIONS: readonly ExploreSection[] = [
  {
    id: 'viewed',
    title: 'Recently viewed',
    layout: 'place',
    listingIds: ['viewed-lisbon', 'viewed-rome', 'viewed-cph'],
  },
  {
    id: 'weekend',
    title: 'Weekend trips',
    layout: 'trip',
    listingIds: ['weekend-porto', 'weekend-barcelona', 'weekend-vienna'],
  },
  {
    id: 'experiences',
    title: 'Unique experiences',
    layout: 'trip',
    listingIds: ['exp-pasta', 'exp-fado', 'exp-kayak'],
  },
  {
    id: 'deals',
    title: 'Best deals',
    layout: 'trip',
    listingIds: ['deal-athens', 'deal-prague', 'flight-waw'],
  },
  {
    id: 'flights',
    title: 'Flight deals',
    listingIds: ['flight-par', 'flight-lon', 'flight-waw'],
  },
  {
    id: 'last-minute',
    title: 'Last-minute getaways',
    layout: 'trip',
    listingIds: ['last-berlin', 'last-amsterdam', 'viewed-cph'],
  },
  {
    id: 'cities',
    title: 'City breaks',
    layout: 'trip',
    listingIds: ['city-lisbon', 'city-stockholm', 'weekend-barcelona'],
  },
]

const listingById = new Map(LISTINGS.map((listing) => [listing.id, listing]))

/**
 * Looks up a catalog listing by id.
 */
export function getListingById(id: string): Listing | undefined {
  return listingById.get(id)
}

/**
 * Resolves listings for a shelf, optionally filtered by category.
 */
export function listingsForSection(
  section: ExploreSection,
  category: ExploreCategory
): Listing[] {
  const items = section.listingIds
    .map((id) => listingById.get(id))
    .filter((listing): listing is Listing => listing !== undefined)

  return items.filter((listing) =>
    listingMatchesCategory(listing.id, category)
  )
}
