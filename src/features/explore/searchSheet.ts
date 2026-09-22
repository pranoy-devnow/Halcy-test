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

/**
 * How to apply a return-from-Find search reopen.
 *
 * @param alreadyOpen - Whether the search sheet is still mounted
 * @returns `keep` so the expand does not replay, or `restore` after a remount
 */
export function searchReturnMode(alreadyOpen: boolean): 'keep' | 'restore' {
  return alreadyOpen ? 'keep' : 'restore'
}

/**
 * Hide the header pill only while the expanded sheet is covering it.
 *
 * @param open - Search overlay is mounted
 * @param leaving - Close animation is running
 * @returns True only while the expanded sheet should cover the pill
 */
export function isSearchPillHidden(open: boolean, leaving: boolean): boolean {
  return open && !leaving
}

function isFlag(state: unknown, key: keyof FlagState): boolean {
  if (typeof state !== 'object' || state === null) {
    return false
  }

  return (state as FlagState)[key] === true
}
