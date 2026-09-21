import { useEffect, useState, type RefObject } from 'react'

/** How long after the last scroll the tab bar slides back in. */
export const SCROLL_IDLE_MS = 200

/**
 * Hides UI while `scrollerRef` is scrolling, then shows it after a short idle.
 *
 * @param scrollerRef - The overflow container that owns vertical scroll
 * @returns `true` while the user is scrolling
 */
export function useHideWhileScrolling(
  scrollerRef: RefObject<HTMLElement | null>
): boolean {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return
    }

    let idleId = 0

    const onScroll = () => {
      setHidden(true)
      window.clearTimeout(idleId)
      idleId = window.setTimeout(() => setHidden(false), SCROLL_IDLE_MS)
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      scroller.removeEventListener('scroll', onScroll)
      window.clearTimeout(idleId)
    }
  }, [scrollerRef])

  return hidden
}
