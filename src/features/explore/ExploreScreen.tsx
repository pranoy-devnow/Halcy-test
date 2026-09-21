import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { EXPLORE_SECTIONS, listingsForSection } from './catalog'
import { CategoryChips } from './CategoryChips'
import { ExploreHeader } from './ExploreHeader'
import { ExploreListingCard } from './ExploreListingCard'
import { ExploreSearch } from './ExploreSearch'
import { ExploreSection } from './ExploreSection'
import type { SearchDestination } from './destinations'
import type { ExploreCategory } from './types'

/**
 * Explore home: in-page search, category chips, and discovery shelves.
 */
export function ExploreScreen() {
  const [category, setCategory] = useState<ExploreCategory>('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const [destination, setDestination] = useState<SearchDestination | null>(null)
  const overlayRoot = useAppShellRoot()

  const sections = EXPLORE_SECTIONS.map((section) => ({
    section,
    listings: listingsForSection(section, category),
  })).filter(({ listings }) => listings.length > 0)

  const searchOverlay =
    searchOpen && overlayRoot
      ? createPortal(
          <ExploreSearch
            onClose={() => setSearchOpen(false)}
            onSelect={(selected) => {
              setDestination(selected)
              setSearchOpen(false)
            }}
          />,
          overlayRoot
        )
      : null

  return (
    <div className="bg-background pb-8">
      {searchOverlay}
      <ExploreHeader
        label={destination?.title.split(',')[0] ?? 'Search'}
        onSearch={() => setSearchOpen(true)}
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
