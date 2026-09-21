import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ExploreCategory } from './types'

const CATEGORIES: { id: ExploreCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'weekend', label: 'Weekend' },
  { id: 'beaches', label: 'beaches' },
  { id: 'bachelorette', label: 'bachelorette' },
  { id: 'picturesque', label: 'picturesque' },
]

type CategoryChipsProps = {
  value: ExploreCategory
  onChange: (category: ExploreCategory) => void
}

/**
 * Capsule filters for the Explore feed. Rounded on purpose — Apple-style chips,
 * not the square card/button language used elsewhere.
 */
export function CategoryChips({ value, onChange }: CategoryChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {CATEGORIES.map((category) => {
        const selected = category.id === value

        return (
          <Badge
            key={category.id}
            asChild
            radius="full"
            variant={selected ? 'default' : 'secondary'}
            className={cn(
              'h-8 cursor-pointer border-transparent px-3.5 text-[13px] font-medium tracking-[-0.02em] transition-[transform,background-color,color] duration-200 ease-out active:scale-[0.97]',
              selected
                ? 'bg-foreground text-background'
                : 'bg-secondary text-foreground/70 hover:bg-muted hover:text-foreground'
            )}
          >
            <button
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(category.id)}
            >
              {category.label}
            </button>
          </Badge>
        )
      })}
    </div>
  )
}
