import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { listingPath } from '@/features/listing/paths'
import { cn } from '@/lib/utils'
import { EXPLORE_CARD_WIDTH_CLASS } from './cardWidth'
import { formatListingPrice } from './format'
import { RatingMeta } from './RatingMeta'
import type { PhotoListing } from './types'

type StayCardProps = {
  listing: PhotoListing
}

/**
 * Square stay or experience tile: photo, save, location, dates, price, rating.
 */
export function StayCard({ listing }: StayCardProps) {
  const [saved, setSaved] = useState(false)

  return (
    <Link to={listingPath(listing.id)} className={cn(EXPLORE_CARD_WIDTH_CLASS, 'block')}>
      <Card className="w-full gap-0 py-0">
        <div className="relative">
          <img
            src={listing.imageUrl}
            alt={listing.imageAlt}
            className="aspect-square w-full object-cover"
          />
          <Button
            type="button"
            variant="outline"
            size="icon-xs"
            aria-label={saved ? 'Remove from saved' : 'Save listing'}
            aria-pressed={saved}
            className="absolute top-1.5 right-1.5 bg-background"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              setSaved((value) => !value)
            }}
          >
            <Heart className={saved ? 'fill-foreground' : undefined} />
          </Button>
        </div>
        <CardContent className="space-y-0.5 px-2 py-2">
          <p className="line-clamp-2 text-sm font-medium">{listing.title}</p>
          <p className="text-xs text-muted-foreground">{listing.location}</p>
          {listing.dates ? (
            <p className="text-xs text-muted-foreground">{listing.dates}</p>
          ) : null}
          <p className="text-sm">
            {formatListingPrice(listing.priceEuros, listing.priceSuffix)}
          </p>
          <RatingMeta rating={listing.rating} />
        </CardContent>
      </Card>
    </Link>
  )
}
