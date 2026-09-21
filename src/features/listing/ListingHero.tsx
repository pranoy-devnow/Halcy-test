import { Badge } from '@/components/ui/badge'
import { RatingMeta } from '@/features/explore/RatingMeta'
import { placeNameFromLocation } from '@/features/explore/format'
import type { PhotoListing } from '@/features/explore/types'
import { cn } from '@/lib/utils'
import { formatStayLength } from './formatStayLength'

type ListingHeroProps = {
  listing: PhotoListing
  photos: string[]
  matchPercent: number
  nights: number
  days: number
}

const CHIP_CLASS = 'h-7 px-3 text-[13px] font-medium tracking-[-0.02em]'

/**
 * Full-bleed listing photos. Title, match, stay length, and rating sit under them.
 */
export function ListingHero({
  listing,
  photos,
  matchPercent,
  nights,
  days,
}: ListingHeroProps) {
  const title = listing.tripName ?? listing.title
  const stayLength = formatStayLength(nights, days)

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
      <div className="space-y-1 px-5 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="font-heading text-3xl font-normal">{title}</h1>
          <Badge radius="full" className={CHIP_CLASS}>
            {matchPercent}% match
          </Badge>
          {stayLength ? (
            <Badge
              radius="full"
              variant="secondary"
              className={cn(CHIP_CLASS, 'bg-secondary text-foreground/70')}
            >
              {stayLength}
            </Badge>
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground">
          {placeNameFromLocation(listing.location)}
        </p>
        <RatingMeta rating={listing.rating} />
      </div>
    </div>
  )
}
