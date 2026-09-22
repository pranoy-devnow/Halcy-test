/** Seeded unread messages on Find when the app opens. */
export const FIND_UNREAD_SEED = 2

/**
 * Unread Find count after a visit to messages.
 * Opening Find clears the badge for the rest of the session.
 *
 * @param unread - Current unread count
 * @param findOpen - Whether the Find thread is showing
 */
export function findUnreadAfterVisit(unread: number, findOpen: boolean): number {
  if (findOpen) {
    return 0
  }

  return unread
}
