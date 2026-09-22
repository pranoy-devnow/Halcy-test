import { useEffect, useState } from 'react'
import { FIND_UNREAD_SEED, findUnreadAfterVisit } from './find-unread'

/**
 * Session unread count for the Find tab. Starts at the seed and clears when Find opens.
 *
 * @param findOpen - Whether the Find thread is showing
 */
export function useFindUnread(findOpen: boolean): number {
  const [unread, setUnread] = useState(FIND_UNREAD_SEED)

  useEffect(() => {
    setUnread((current) => findUnreadAfterVisit(current, findOpen))
  }, [findOpen])

  return unread
}
