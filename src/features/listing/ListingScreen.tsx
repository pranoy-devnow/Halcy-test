import { Navigate, useParams } from 'react-router-dom'
import { getListingById } from '@/features/explore/catalog'
import { ListingBookBar } from './ListingBookBar'
import { ListingChrome } from './ListingChrome'
import { ListingHero } from './ListingHero'
import { ListingCountdown } from './ListingCountdown'
import { ListingItinerary } from './ListingItinerary'
import { ListingScores } from './ListingScores'
import { resolveListingDetails } from './details'

/**
 * Airbnb-style posting for a photo listing. Unknown ids return to Explore.
 */
export function ListingScreen() {
  const { listingId } = useParams<{ listingId: string }>()
  const listing = listingId ? getListingById(listingId) : undefined

  if (!listing || listing.kind === 'flight') {
    return <Navigate to="/" replace />
  }

  const details = resolveListingDetails(listing)

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
        <div className="mx-5 divide-y divide-foreground/10">
          <ListingScores label={details.value.label} />
          <ListingCountdown countdownTo={details.countdownTo} />
          <ListingItinerary stops={details.itinerary} />
        </div>
      </div>
      <ListingBookBar priceEuros={listing.priceEuros} />
    </div>
  )
}
