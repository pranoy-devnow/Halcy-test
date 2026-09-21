/** Location state when a listing is opened from the Find thread. */
export const FROM_FIND_STATE = { fromFind: true } as const

type ListingState = {
  fromFind?: boolean
  fromSearch?: boolean
}

/**
 * Whether this listing was opened from a Find chat card.
 *
 * @param state - React Router location state
 */
export function isFromFind(state: unknown): boolean {
  return hasFlag(state, 'fromFind')
}

/**
 * Where listing back should go.
 *
 * @param state - React Router location state
 * @returns `/find` when opened from chat, otherwise Explore
 */
export function listingBackLocation(state: unknown): {
  pathname: string
  state?: { fromSearch: true }
} {
  if (!isFromFind(state)) {
    return { pathname: '/' }
  }

  return {
    pathname: '/find',
    state: hasFlag(state, 'fromSearch') ? { fromSearch: true } : undefined,
  }
}

function hasFlag(state: unknown, key: keyof ListingState): boolean {
  if (typeof state !== 'object' || state === null) {
    return false
  }

  return (state as ListingState)[key] === true
}
