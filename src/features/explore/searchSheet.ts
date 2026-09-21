/** Location state when Agent opens Find from the Explore search sheet. */
export const FROM_SEARCH_STATE = { fromSearch: true } as const

/** Location state that reopens the Explore search sheet. */
export const OPEN_SEARCH_STATE = { openSearch: true } as const

type FlagState = {
  fromSearch?: boolean
  openSearch?: boolean
}

/**
 * Whether Find was opened from the Explore search Agent control.
 *
 * @param state - React Router location state
 */
export function isFromSearch(state: unknown): boolean {
  return isFlag(state, 'fromSearch')
}

/**
 * Whether Explore should reopen the search sheet.
 *
 * @param state - React Router location state
 */
export function isOpenSearch(state: unknown): boolean {
  return isFlag(state, 'openSearch')
}

function isFlag(state: unknown, key: keyof FlagState): boolean {
  if (typeof state !== 'object' || state === null) {
    return false
  }

  return (state as FlagState)[key] === true
}
