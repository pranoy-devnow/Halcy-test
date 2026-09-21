import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ListingCountdown } from './ListingCountdown'
import type { ListingDetails, ValueLabel } from './types'

const VALUE_LABELS: readonly ValueLabel[] = ['Fair', 'Good', 'Great']

type ListingScoresProps = {
  details: ListingDetails
}

/**
 * Value capsules and a live “Book before” countdown. Match lives on the title.
 */
export function ListingScores({ details }: ListingScoresProps) {
  return (
    <div className="flex flex-col gap-6 px-5">
      <ValueChips label={details.value.label} />
      <ListingCountdown countdownTo={details.countdownTo} />
    </div>
  )
}

type ValueChipsProps = {
  label: ValueLabel
}

/** Fair / Good / Great capsules; the listing grade is filled. */
function ValueChips({ label: selectedLabel }: ValueChipsProps) {
  return (
    <div>
      <p className="mb-2 text-xs text-muted-foreground">Value</p>
      <div className="flex gap-2">
        {VALUE_LABELS.map((label) => {
          const selected = label === selectedLabel

          return (
            <Badge
              key={label}
              radius="full"
              variant={selected ? 'default' : 'secondary'}
              className={cn(
                'h-8 px-3.5 text-[13px] font-medium tracking-[-0.02em]',
                selected
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-foreground/70'
              )}
            >
              {label}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}
