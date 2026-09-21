import type { ReactNode } from 'react'
import { Star } from 'lucide-react'
import type { ListingRating } from '@/features/explore/types'

type ListingHighlightsProps = {
  rating: ListingRating
  matchPercent: number
  nights: number
  days: number
}

/**
 * Three-up stats under the title: rating, match, and stay length.
 */
export function ListingHighlights({
  rating,
  matchPercent,
  nights,
  days,
}: ListingHighlightsProps) {
  return (
    <div className="mx-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] border-b border-foreground/10 py-5">
      <Highlight
        value={rating.score.toFixed(2)}
        label={`${rating.count} reviews`}
        icon={<Star className="size-3 fill-foreground" aria-hidden />}
      />
      <span aria-hidden className="my-1 w-px justify-self-center bg-foreground/10" />
      <Highlight value={`${matchPercent}%`} label="match" />
      <span aria-hidden className="my-1 w-px justify-self-center bg-foreground/10" />
      <StayHighlight nights={nights} days={days} />
    </div>
  )
}

type HighlightProps = {
  value: string
  label: string
  icon?: ReactNode
}

/** One centered stat cell. */
function Highlight({ value, label, icon }: HighlightProps) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      <p className="flex items-center gap-1 text-sm font-medium">
        {icon}
        {value}
      </p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

type StayHighlightProps = {
  nights: number
  days: number
}

/** Nights for stays; days only for same-day experiences. */
function StayHighlight({ nights, days }: StayHighlightProps) {
  if (nights <= 0) {
    return (
      <Highlight value={String(days)} label={days === 1 ? 'day' : 'days'} />
    )
  }

  return (
    <Highlight
      value={String(nights)}
      label={nights === 1 ? 'night' : 'nights'}
    />
  )
}
