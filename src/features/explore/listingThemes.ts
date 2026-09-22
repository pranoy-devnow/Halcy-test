import type { ExploreCategory, ExploreTheme } from './types.ts'

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
  'viewed-madrid': ['bachelorette', 'picturesque'],
  'viewed-paris': ['bachelorette', 'picturesque'],
  'viewed-florence': ['picturesque', 'weekend'],
  'weekend-milan': ['weekend', 'bachelorette'],
  'weekend-seville': ['weekend', 'beaches'],
  'weekend-edinburgh': ['weekend', 'picturesque'],
  'exp-market-paris': ['bachelorette'],
  'exp-canal-ams': ['bachelorette', 'picturesque'],
  'exp-wine-tuscany': ['picturesque', 'weekend'],
  'deal-budapest': ['weekend', 'picturesque'],
  'deal-krakow': ['weekend'],
  'deal-valencia': ['weekend', 'beaches'],
  'flight-ber': ['weekend', 'bachelorette'],
  'flight-ams': ['bachelorette', 'picturesque'],
  'flight-bcn': ['beaches', 'weekend'],
  'last-madrid': ['weekend', 'bachelorette'],
  'last-paris': ['weekend', 'bachelorette', 'picturesque'],
  'last-prague': ['weekend', 'picturesque'],
  'city-paris': ['bachelorette', 'picturesque'],
  'city-london': ['bachelorette'],
  'city-milan': ['weekend', 'picturesque'],
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
