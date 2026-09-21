import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

type SearchFooterProps = {
  onClear: () => void
  onSearch: () => void
}

/**
 * Clear all text action and a capsule Search submit.
 */
export function SearchFooter({ onClear, onSearch }: SearchFooterProps) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <button
        type="button"
        onClick={onClear}
        className="text-sm font-medium underline underline-offset-2"
      >
        Clear all
      </button>
      <Button
        type="button"
        className="h-11 rounded-full px-5"
        onClick={onSearch}
      >
        <Search />
        Search
      </Button>
    </div>
  )
}
