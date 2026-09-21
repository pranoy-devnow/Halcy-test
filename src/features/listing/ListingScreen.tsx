import { Navigate, useParams } from 'react-router-dom'
import { getListingById } from '@/features/explore/catalog'
import { ListingBookBar } from './ListingBookBar'
import { ListingChrome } from './ListingChrome'
import { ListingHero } from './ListingHero'
import { ListingItinerary } from './ListingItinerary'
import { ListingScores } from './ListingScores'
import { getListingDetails } from './details'

/**
 * Airbnb-style posting for a photo listing. Unknown ids return to Explore.
 */
export function ListingScreen() {
  const { listingId } = useParams<{ listingId: string }>()
  const listing = listingId ? getListingById(listingId) : undefined
  const details = listingId ? getListingDetails(listingId) : undefined

  if (!listing || listing.kind === 'flight' || !details) {
    return <Navigate to="/" replace />
  }

  const photos = details.imageUrls?.length ? details.imageUrls : [listing.imageUrl]
  const title = listing.tripName ?? listing.title

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-background">
      <ListingChrome title={title} />
      <div className="min-h-0 flex-1 overflow-y-scroll overscroll-y-contain pb-28 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ListingHero
          listing={listing}
          photos={photos}
          matchPercent={details.matchPercent}
          nights={details.nights}
          days={details.days}
        />
        <div className="flex flex-col gap-8 pt-6">
          <ListingScores details={details} />
          <ListingItinerary stops={details.itinerary} />
        </div>
      </div>
      <ListingBookBar priceEuros={listing.priceEuros} />
    </div>
  )
}
