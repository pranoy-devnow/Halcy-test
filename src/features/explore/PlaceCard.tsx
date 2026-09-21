import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { listingPath } from '@/features/listing/paths'
import { cn } from '@/lib/utils'
import { EXPLORE_CARD_WIDTH_CLASS } from './cardWidth'

type PlaceCardProps = {
  listingId: string
  name: string
  imageUrl: string
  imageAlt: string
}

/**
 * Photo tile with a short place name only — no hotel copy or price.
 */
export function PlaceCard({
  listingId,
  name,
  imageUrl,
  imageAlt,
}: PlaceCardProps) {
  return (
    <Link to={listingPath(listingId)} className={cn(EXPLORE_CARD_WIDTH_CLASS, 'block')}>
      <Card className="w-full gap-0 py-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="aspect-square w-full object-cover"
        />
        <CardContent className="px-2 py-2">
          <p className="truncate text-sm font-medium">{name}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
