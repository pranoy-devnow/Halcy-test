/** Listing kinds shown on Explore. */
export type ListingKind = 'stay' | 'flight' | 'experience'

/** Discovery themes used by the Explore badge row. */
export type ExploreTheme =
  | 'weekend'
  | 'beaches'
  | 'bachelorette'
  | 'picturesque'

/** Category chip values, including All. */
export type ExploreCategory = 'all' | ExploreTheme

/** Guest rating on a listing card. */
export type ListingRating = {
  score: number
  count: number
}

type ListingBase = {
  id: string
  title: string
  priceEuros: number
  rating: ListingRating
}

/** Stay or experience card: photo, location, optional dates. */
export type PhotoListing = ListingBase & {
  kind: 'stay' | 'experience'
  location: string
  dates?: string
  /** Unique trip name when a shelf uses the `trip` layout. */
  tripName?: string
  priceSuffix: 'total' | 'night' | 'person'
  imageUrl: string
  imageAlt: string
}

/** Flight deal card: route, city, dates. */
export type FlightListing = ListingBase & {
  kind: 'flight'
  route: string
  city: string
  dates: string
}

/** Any Explore listing. */
export type Listing = PhotoListing | FlightListing

/** How tiles render on a shelf. `place` is photo + city; `trip` is name + place + price. */
export type ExploreSectionLayout = 'listing' | 'place' | 'trip'

/** A horizontal shelf on the Explore feed. */
export type ExploreSection = {
  id: string
  title: string
  listingIds: string[]
  layout?: ExploreSectionLayout
}
