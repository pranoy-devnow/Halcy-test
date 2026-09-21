import type { ExploreCategory, ExploreTheme } from './types'

/** Theme tags for each catalog listing id. */
export const LISTING_THEMES: Record<string, readonly ExploreTheme[]> = {
  'viewed-lisbon': ['bachelorette', 'picturesque'],
  'viewed-rome': ['bachelorette', 'picturesque'],
  'viewed-cph': ['weekend', 'picturesque'],
  'weekend-porto': ['weekend', 'beaches'],
  'weekend-barcelona': ['weekend', 'beaches'],
  'weekend-vienna': ['weekend', 'picturesque'],
  'exp-pasta': ['bachelorette'],
  'exp-fado': ['bachelorette'],
  'exp-kayak': ['beaches', 'picturesque'],
  'deal-athens': ['weekend', 'beaches'],
  'deal-prague': ['picturesque'],
  'flight-par': ['bachelorette', 'picturesque'],
  'flight-lon': ['bachelorette'],
  'flight-waw': ['weekend'],
  'last-berlin': ['weekend', 'bachelorette'],
  'last-amsterdam': ['weekend', 'bachelorette', 'picturesque'],
  'city-lisbon': ['weekend', 'beaches', 'picturesque'],
  'city-stockholm': ['picturesque'],
}

/**
 * Whether a listing belongs on the selected Explore badge.
 */
export function listingMatchesCategory(
  listingId: string,
  category: ExploreCategory
): boolean {
  if (category === 'all') {
    return true
  }

  return LISTING_THEMES[listingId]?.includes(category) ?? false
}
