import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { listingPath } from '@/features/listing/paths'
import { cn } from '@/lib/utils'
import { EXPLORE_CARD_WIDTH_CLASS } from './cardWidth'
import { formatEuro, placeNameFromLocation } from './format'
import { RatingMeta } from './RatingMeta'
import type { PhotoListing } from './types'

type TripCardProps = {
  listing: PhotoListing
  /** Width override. Defaults to the Explore carousel peek width. */
  className?: string
}

/**
 * Trip tile: photo, unique trip name, place, price, and rating. No dates or stay name.
 */
export function TripCard({ listing, className }: TripCardProps) {
  const tripName = listing.tripName ?? listing.title

  return (
    <Link
      to={listingPath(listing.id)}
      className={cn(className ?? EXPLORE_CARD_WIDTH_CLASS, 'block')}
    >
      <Card className="w-full gap-0 py-0">
        <img
          src={listing.imageUrl}
          alt={listing.imageAlt}
          className="aspect-square w-full object-cover"
        />
        <CardContent className="space-y-0.5 px-2 py-2">
          <p className="truncate text-sm font-medium">{tripName}</p>
          <p className="text-xs text-muted-foreground">
            {placeNameFromLocation(listing.location)}
          </p>
          <p className="flex items-center gap-1 text-sm">
            <span>{formatEuro(listing.priceEuros)}</span>
            <User className="size-3.5 text-muted-foreground" aria-hidden />
            <span className="sr-only">per person</span>
          </p>
          <RatingMeta rating={listing.rating} />
        </CardContent>
      </Card>
    </Link>
  )
}
