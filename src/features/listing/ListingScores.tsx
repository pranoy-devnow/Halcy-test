import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ValueLabel } from './types'

const VALUE_LABELS: readonly ValueLabel[] = ['Fair', 'Good', 'Great']

type ListingScoresProps = {
  label: ValueLabel
}

/**
 * Fair / Good / Great capsules; the listing grade is filled.
 */
export function ListingScores({ label: selectedLabel }: ListingScoresProps) {
  return (
    <div className="py-5">
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
