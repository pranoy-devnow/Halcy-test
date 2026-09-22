import type { Ref } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

type ExploreHeaderProps = {
  label: string
  hidden?: boolean
  searchRef?: Ref<HTMLButtonElement>
  onSearch: () => void
}

/**
 * Explore top chrome: a capsule search bar that opens in-page search.
 */
export function ExploreHeader({
  label,
  hidden = false,
  searchRef,
  onSearch,
}: ExploreHeaderProps) {
  return (
    <header className="px-5 pt-14 pb-3">
      <h1 className="sr-only">Explore</h1>
      <button
        ref={searchRef}
        type="button"
        onClick={onSearch}
        className={cn(
          'flex h-10 w-full items-center gap-2 rounded-full bg-secondary px-3.5 text-left text-[15px] text-muted-foreground transition-[transform,background-color,opacity] duration-200 ease-out hover:bg-muted active:scale-[0.99]',
          hidden && 'invisible'
        )}
      >
        <Search className="size-4 shrink-0" aria-hidden />
        {label}
      </button>
    </header>
  )
}
