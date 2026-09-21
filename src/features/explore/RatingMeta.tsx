import { Star } from 'lucide-react'
import type { ListingRating } from './types'

type RatingMetaProps = {
  rating: ListingRating
}

/**
 * Star score and review count in sans meta type.
 */
export function RatingMeta({ rating }: RatingMetaProps) {
  return (
    <p className="flex items-center gap-1 text-xs text-muted-foreground">
      <Star className="size-3 fill-foreground text-foreground" aria-hidden />
      <span>
        {rating.score.toFixed(2)} ({rating.count})
      </span>
    </p>
  )
}
