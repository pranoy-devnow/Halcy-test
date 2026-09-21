import { FlightCard } from './FlightCard'
import { PlaceCard } from './PlaceCard'
import { StayCard } from './StayCard'
import { TripCard } from './TripCard'
import { placeNameFromLocation } from './format'
import type { ExploreSectionLayout, Listing } from './types'

type ExploreListingCardProps = {
  listing: Listing
  layout?: ExploreSectionLayout
}

/**
 * Renders the flight, stay, or place-only tile for a catalog listing.
 */
export function ExploreListingCard({
  listing,
  layout = 'listing',
}: ExploreListingCardProps) {
  if (layout === 'place' && listing.kind !== 'flight') {
    return (
      <PlaceCard
        listingId={listing.id}
        name={placeNameFromLocation(listing.location)}
        imageUrl={listing.imageUrl}
        imageAlt={listing.imageAlt}
      />
    )
  }

  if (layout === 'trip' && listing.kind !== 'flight') {
    return <TripCard listing={listing} />
  }

  if (listing.kind === 'flight') {
    return <FlightCard listing={listing} />
  }

  return <StayCard listing={listing} />
}
