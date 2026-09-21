import { TripCard } from '@/features/explore/TripCard'
import type { PhotoListing } from '@/features/explore/types'

const CAROUSEL =
  'flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'

type FindSuggestionRowProps = {
  listings: readonly PhotoListing[]
}

/**
 * Explore-style peek carousel of trip tiles under an agent turn.
 */
export function FindSuggestionRow({ listings }: FindSuggestionRowProps) {
  return (
    <div className="relative">
      <div className={CAROUSEL}>
        {listings.map((listing) => (
          <TripCard key={listing.id} listing={listing} />
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent"
        aria-hidden
      />
    </div>
  )
}
