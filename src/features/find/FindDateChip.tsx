import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type FindDateChipProps = {
  date: string
}

/**
 * Secondary-button date label used in chrome and in the thread.
 */
export function FindDateChip({ date }: FindDateChipProps) {
  return (
    <span
      className={cn(
        buttonVariants({ variant: 'secondary', size: 'sm' }),
        'pointer-events-none'
      )}
    >
      {date}
    </span>
  )
}
