/** One stop on a place itinerary. */
export type ItineraryStop = {
  day: string
  title: string
  when?: string
  note: string
}

/** Value-for-money grade shown as a capsule. */
export type ValueLabel = 'Fair' | 'Good' | 'Great'

/** Value-for-money callout on a listing page. */
export type ListingValue = {
  label: ValueLabel
  note: string
}

/** Halcy extras on an Airbnb-style posting. */
export type ListingDetails = {
  matchPercent: number
  value: ListingValue
  timeAvailable: string
  /** ISO timestamp the offer or trip starts counting down toward. */
  countdownTo: string
  /** Overnight stays. `0` for same-day experiences. */
  nights: number
  /** Calendar days on the trip. */
  days: number
  itinerary: ItineraryStop[]
  imageUrls?: string[]
}
