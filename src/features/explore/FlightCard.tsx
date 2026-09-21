import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { EXPLORE_CARD_WIDTH_CLASS } from './cardWidth'
import { formatEuro } from './format'
import { RatingMeta } from './RatingMeta'
import type { FlightListing } from './types'

type FlightCardProps = {
  listing: FlightListing
}

/**
 * Square hairline flight deal: route, large price, city, dates, rating.
 */
export function FlightCard({ listing }: FlightCardProps) {
  return (
    <Card size="sm" className={cn(EXPLORE_CARD_WIDTH_CLASS)}>
      <CardHeader className="gap-1">
        <p className="text-xs text-muted-foreground">{listing.route}</p>
        <p className="text-xl font-medium">{formatEuro(listing.priceEuros)}</p>
      </CardHeader>
      <CardContent className="space-y-0.5">
        <p className="text-sm">{listing.city}</p>
        <p className="text-xs text-muted-foreground">{listing.dates}</p>
      </CardContent>
      <CardFooter>
        <RatingMeta rating={listing.rating} />
      </CardFooter>
    </Card>
  )
}
