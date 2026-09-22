import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { EXPLORE_SECTIONS, listingsForSection } from './catalog'
import { CategoryChips } from './CategoryChips'
import { ExploreHeader } from './ExploreHeader'
import { ExploreListingCard } from './ExploreListingCard'
import { ExploreSearch } from './ExploreSearch'
import { ExploreSection } from './ExploreSection'
import type { SearchDestination } from './destinations'
import { relativeSearchBox, type SearchBox } from './searchExpand'
import { isOpenSearch, isSearchPillHidden, searchReturnMode } from './searchSheet'
import type { ExploreCategory } from './types'
import { useSearchSheet } from './useSearchSheet'

/**
 * Explore home: in-page search, category chips, and discovery shelves.
 */
export function ExploreScreen() {
  const location = useLocation()
  const navigate = useNavigate()
  const pillRef = useRef<HTMLButtonElement>(null)
  const [category, setCategory] = useState<ExploreCategory>('all')
  const [destination, setDestination] = useState<SearchDestination | null>(null)
  const [origin, setOrigin] = useState<SearchBox | null>(null)
  const search = useSearchSheet()
  const overlayRoot = useAppShellRoot()

  const openSearch = () => {
    setOrigin(captureSearchOrigin(pillRef.current, overlayRoot))
    search.show()
  }

  useEffect(() => {
    if (!isOpenSearch(location.state)) {
      return
    }

    if (searchReturnMode(search.open) === 'restore') {
      setOrigin(null)
      search.show()
    }

    navigate('/', { replace: true, state: {} })
  }, [location.state, navigate, search.open, search.show])

  useEffect(() => {
    if (!search.open) {
      return
    }

    const onViewportChange = () => {
      setOrigin(null)
      search.hide()
    }

    window.addEventListener('resize', onViewportChange)
    window.visualViewport?.addEventListener('resize', onViewportChange)

    return () => {
      window.removeEventListener('resize', onViewportChange)
      window.visualViewport?.removeEventListener('resize', onViewportChange)
    }
  }, [search.open, search.hide])

  const sections = EXPLORE_SECTIONS.map((section) => ({
    section,
    listings: listingsForSection(section, category),
  })).filter(({ listings }) => listings.length > 0)

  const searchOverlay =
    search.open && overlayRoot
      ? createPortal(
          <ExploreSearch
            origin={origin}
            leaving={search.leaving}
            onClose={search.hide}
            onSelect={(selected) => {
              setDestination(selected)
              search.hide()
            }}
          />,
          overlayRoot
        )
      : null

  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-background pb-8">
      {searchOverlay}
      <ExploreHeader
        searchRef={pillRef}
        hidden={isSearchPillHidden(search.open, search.leaving)}
        label={destination?.title.split(',')[0] ?? 'Search'}
        onSearch={openSearch}
      />
      <CategoryChips value={category} onChange={setCategory} />
      <div className="flex flex-col gap-8 pt-4">
        {sections.map(({ section, listings }) => (
          <ExploreSection key={section.id} title={section.title}>
            {listings.map((listing) => (
              <ExploreListingCard
                key={listing.id}
                listing={listing}
                layout={section.layout}
              />
            ))}
          </ExploreSection>
        ))}
      </div>
    </div>
  )
}

/**
 * Resolves the app shell root so search can cover the feed and tab bar.
 */
function useAppShellRoot() {
  const [root, setRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setRoot(document.querySelector('[data-app-shell]'))
  }, [])

  return root
}

/**
 * Pill box in overlay coordinates, or null when either node is missing.
 */
function captureSearchOrigin(
  pill: HTMLElement | null,
  root: HTMLElement | null
): SearchBox | null {
  if (!pill || !root) {
    return null
  }

  return relativeSearchBox(
    pill.getBoundingClientRect(),
    root.getBoundingClientRect()
  )
}
