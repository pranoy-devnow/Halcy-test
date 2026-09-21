import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatEuro } from '@/features/explore/format'

type ListingBookBarProps = {
  priceEuros: number
}

/** Airbnb Reserve red, local to this bar — not a design-token change. */
const BOOK_RED_CLASS =
  'h-10 bg-[#FF385C] px-6 text-white hover:bg-[#FF385C]/80'

/**
 * Sticky listing footer: price per person and a square red Book action.
 */
export function ListingBookBar({ priceEuros }: ListingBookBarProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 border-t border-border bg-background px-5 pt-3 pb-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-1 text-base font-medium">
            <span>{formatEuro(priceEuros)}</span>
            <User className="size-3.5 text-muted-foreground" aria-hidden />
            <span className="sr-only">per person</span>
          </p>
          <p className="text-xs text-muted-foreground">You won’t be charged yet.</p>
        </div>
        <Button type="button" className={BOOK_RED_CLASS}>
          Book
        </Button>
      </div>
    </div>
  )
}
