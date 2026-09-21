import {
  Castle,
  House,
  Landmark,
  Navigation,
  Palmtree,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchDestination, SearchDestinationIcon } from './destinations'

const ICONS: Record<SearchDestinationIcon, LucideIcon> = {
  nearby: Navigation,
  landmark: Landmark,
  house: House,
  castle: Castle,
  waves: Waves,
  palmtree: Palmtree,
}

type DestinationRowProps = {
  destination: SearchDestination
  selected: boolean
  onSelect: (destination: SearchDestination) => void
}

/**
 * Suggestion row: circular icon well, place title, and a short reason.
 */
export function DestinationRow({
  destination,
  selected,
  onSelect,
}: DestinationRowProps) {
  const Icon = ICONS[destination.icon]

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(destination)}
      className={cn(
        'flex w-full items-center gap-3 rounded-xl py-2.5 text-left',
        selected && 'bg-secondary'
      )}
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-medium">
          {destination.title}
        </span>
        <span className="block truncate text-xs text-muted-foreground">
          {destination.reason}
        </span>
      </span>
    </button>
  )
}
