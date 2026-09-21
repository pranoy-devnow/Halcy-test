import type { PhotoListing } from '@/features/explore/types'
import { ListingHighlights } from './ListingHighlights'
import { listingPlacement } from './formatStayLength'

type ListingHeroProps = {
  listing: PhotoListing
  photos: string[]
  matchPercent: number
  nights: number
  days: number
}

/**
 * Full-bleed photos, then a centered name, details, and three-up stats.
 */
export function ListingHero({
  listing,
  photos,
  matchPercent,
  nights,
  days,
}: ListingHeroProps) {
  const title = listing.tripName ?? listing.title

  return (
    <div>
      <div className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {photos.map((src) => (
          <img
            key={src}
            src={src}
            alt={listing.imageAlt}
            className="aspect-[4/3] w-full shrink-0 snap-center object-cover"
          />
        ))}
      </div>
      <div className="px-5 pt-6 pb-2 text-center">
        <h1 className="font-heading text-3xl font-normal">{title}</h1>
        <p className="mt-2 text-sm">{listingPlacement(listing.kind, listing.location)}</p>
      </div>
      <ListingHighlights
        rating={listing.rating}
        matchPercent={matchPercent}
        nights={nights}
        days={days}
      />
    </div>
  )
}
