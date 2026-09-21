/** A suggested place in the Explore search sheet. */
export type SearchDestination = {
  id: string
  title: string
  reason: string
  icon: SearchDestinationIcon
}

/** Icon glyph for a suggestion row. */
export type SearchDestinationIcon =
  | 'nearby'
  | 'landmark'
  | 'house'
  | 'castle'
  | 'waves'
  | 'palmtree'

/** Airbnb-style starter suggestions. Nearby first, then catalog cities. */
export const SEARCH_SUGGESTIONS: readonly SearchDestination[] = [
  {
    id: 'nearby',
    title: 'Nearby',
    reason: "Find what's around you",
    icon: 'nearby',
  },
  {
    id: 'rome',
    title: 'Rome, Italy',
    reason: 'Based on your interest in history',
    icon: 'landmark',
  },
  {
    id: 'lisbon',
    title: 'Lisbon, Portugal',
    reason: 'For a trip abroad',
    icon: 'house',
  },
  {
    id: 'copenhagen',
    title: 'Copenhagen, Denmark',
    reason: 'For harbour walks and city lights',
    icon: 'castle',
  },
]

/**
 * Filters suggestions by title. Empty query returns all.
 */
export function filterDestinations(
  destinations: readonly SearchDestination[],
  query: string
): SearchDestination[] {
  const needle = query.trim().toLowerCase()
  if (needle.length === 0) {
    return [...destinations]
  }

  return destinations.filter(
    (destination) =>
      destination.title.toLowerCase().includes(needle) ||
      destination.reason.toLowerCase().includes(needle)
  )
}
