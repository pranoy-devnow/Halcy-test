import type { LucideIcon } from 'lucide-react'
import { Cloud, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/** Modes on the Explore search sheet. */
export type SearchMode = 'search' | 'agent'

const MODES: { id: SearchMode; label: string; icon: LucideIcon }[] = [
  { id: 'search', label: 'Search', icon: Search },
  { id: 'agent', label: 'Agent', icon: Cloud },
]

type SearchModeBarProps = {
  mode: SearchMode
  onChange: (mode: SearchMode) => void
  onClose: () => void
}

/**
 * Top of the search sheet: Search / Agent toggle, Search selected by default.
 */
export function SearchModeBar({ mode, onChange, onClose }: SearchModeBarProps) {
  return (
    <div className="relative flex items-center justify-center px-4 pt-14 pb-1">
      <div className="flex gap-2">
        {MODES.map((item) => {
          const selected = item.id === mode
          const Icon = item.icon

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(item.id)}
              className={cn(
                'inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-medium tracking-[-0.02em] transition-[transform,background-color,color] duration-200 ease-out active:scale-[0.97]',
                selected
                  ? 'bg-background text-foreground shadow-sm ring-1 ring-black/5'
                  : 'text-foreground/45 hover:text-foreground/70'
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {item.label}
            </button>
          )
        })}
      </div>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        aria-label="Close search"
        className="absolute top-14 right-4 rounded-full bg-background"
        onClick={onClose}
      >
        <X />
      </Button>
    </div>
  )
}
