import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { clampStarRating } from './talk-balance'

const STAR_COUNT = 5

type FindStarRatingProps = {
  initial?: number
}

/**
 * Live 5-star quality rating shown in the Find thread.
 */
export function FindStarRating({ initial = STAR_COUNT }: FindStarRatingProps) {
  const [rating, setRating] = useState(() => clampStarRating(initial))

  return (
    <div className="mt-3 flex gap-1" role="group" aria-label="Rate quality">
      {Array.from({ length: STAR_COUNT }, (_, index) => {
        const value = index + 1
        const selected = value <= rating

        return (
          <button
            key={value}
            type="button"
            aria-label={`${value} of ${STAR_COUNT} stars`}
            aria-pressed={value === rating}
            onClick={() => {
              setRating(value)
            }}
            className="size-8 text-foreground"
          >
            <Star
              className={cn('size-6', selected ? 'fill-foreground' : undefined)}
              aria-hidden
            />
          </button>
        )
      })}
    </div>
  )
}
