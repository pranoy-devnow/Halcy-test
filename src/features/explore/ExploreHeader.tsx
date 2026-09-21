import { Search } from 'lucide-react'

type ExploreHeaderProps = {
  label: string
  onSearch: () => void
}

/**
 * Explore top chrome: a capsule search bar that opens in-page search.
 */
export function ExploreHeader({ label, onSearch }: ExploreHeaderProps) {
  return (
    <header className="px-5 pt-14 pb-3">
      <h1 className="sr-only">Explore</h1>
      <button
        type="button"
        onClick={onSearch}
        className="flex h-10 w-full items-center gap-2 rounded-full bg-secondary px-3.5 text-left text-[15px] text-muted-foreground transition-[transform,background-color] duration-200 ease-out hover:bg-muted active:scale-[0.99]"
      >
        <Search className="size-4 shrink-0" aria-hidden />
        {label}
      </button>
    </header>
  )
}
