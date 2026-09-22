import { useEffect, useRef, useState, type RefObject } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import './search-slide.css'
import { DestinationRow } from './DestinationRow'
import { SearchFooter } from './SearchFooter'
import { SearchMetaRow } from './SearchMetaRow'
import { SearchModeBar } from './SearchModeBar'
import { FROM_SEARCH_STATE } from './searchSheet'
import {
  SEARCH_SUGGESTIONS,
  filterDestinations,
  type SearchDestination,
} from './destinations'
import type { SearchBox } from './searchExpand'
import { useSearchExpand } from './useSearchExpand'

type ExploreSearchProps = {
  origin: SearchBox | null
  leaving?: boolean
  onClose: () => void
  onSelect: (destination: SearchDestination) => void
}

/**
 * Airbnb-style search sheet: the header pill expands into the Where card.
 */
export function ExploreSearch({
  origin,
  leaving = false,
  onClose,
  onSelect,
}: ExploreSearchProps) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<SearchDestination | null>(null)
  const matches = filterDestinations(SEARCH_SUGGESTIONS, query)
  const expand = useSearchExpand(origin)
  const surfacePhase = leaving ? 'leaving' : expand.phase
  const surfaceTransform =
    expand.fromCss && surfacePhase !== 'to' && surfacePhase !== 'measure'
      ? expand.fromCss
      : undefined

  useEffect(() => {
    if (expand.phase !== 'to' || leaving) {
      return
    }

    inputRef.current?.focus()
  }, [expand.phase, leaving])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const clearAll = () => {
    setQuery('')
    setSelected(null)
    inputRef.current?.focus()
  }

  const submit = () => {
    const destination = selected ?? matches[0]
    if (destination) {
      onSelect(destination)
      return
    }

    onClose()
  }

  return (
    <div ref={expand.rootRef} className="absolute inset-0 z-50 flex flex-col">
      <div
        className={cn(
          'search-wash absolute inset-0 bg-muted',
          leaving && 'search-wash-out'
        )}
      />
      <div
        className={cn(
          'relative search-chrome',
          leaving && 'search-chrome-out'
        )}
      >
        <SearchModeBar
          mode="search"
          onChange={(next) => {
            if (next === 'agent') {
              navigate('/find', { state: FROM_SEARCH_STATE })
            }
          }}
          onClose={onClose}
        />
      </div>
      <div className="relative min-h-0 flex-1 space-y-3 overflow-y-auto px-4 pt-2 pb-2">
        <div
          ref={expand.surfaceRef}
          className={cn('search-where', `is-${surfacePhase}`)}
          style={surfaceTransform ? { transform: surfaceTransform } : undefined}
        >
          <WhereCard
            inputRef={inputRef}
            query={query}
            matches={matches}
            selected={selected}
            leaving={leaving}
            onQueryChange={setQuery}
            onSelect={setSelected}
          />
        </div>
        <div
          className={cn(
            'space-y-3 search-chrome',
            leaving && 'search-chrome-out'
          )}
        >
          <SearchMetaRow label="When" value="Add dates" />
          <SearchMetaRow label="Who" value="Add guests" />
        </div>
      </div>
      <div
        className={cn('relative search-footer', leaving && 'search-footer-out')}
      >
        <SearchFooter onClear={clearAll} onSearch={submit} />
      </div>
    </div>
  )
}

type WhereCardProps = {
  inputRef: RefObject<HTMLInputElement | null>
  query: string
  matches: SearchDestination[]
  selected: SearchDestination | null
  leaving: boolean
  onQueryChange: (query: string) => void
  onSelect: (destination: SearchDestination) => void
}

/** White Where card with destination field and suggestions. */
function WhereCard({
  inputRef,
  query,
  matches,
  selected,
  leaving,
  onQueryChange,
  onSelect,
}: WhereCardProps) {
  return (
    <div
      className={cn(
        'bg-background px-5 py-5 shadow-sm search-where-body',
        leaving && 'search-where-body-out'
      )}
    >
      <h2 className="font-heading text-3xl font-normal">Where?</h2>
      <label className="mt-4 flex h-12 items-center gap-2 rounded-full border border-border px-4">
        <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search destinations"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </label>
      <p className="mt-5 text-xs text-muted-foreground">Suggested destinations</p>
      <div className="mt-1">
        {matches.length === 0 ? (
          <p className="py-4 text-sm text-muted-foreground">
            No places match “{query}”.
          </p>
        ) : (
          matches.map((destination) => (
            <DestinationRow
              key={destination.id}
              destination={destination}
              selected={selected?.id === destination.id}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </div>
  )
}
