import { useEffect, type RefObject } from 'react'

/**
 * Clears accidental horizontal scroll on the main feed scroller.
 *
 * @param scrollerRef - App shell scroll container
 */
export function useLockHorizontalScroll(
  scrollerRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return
    }

    const resetHorizontal = () => {
      if (scroller.scrollLeft !== 0) {
        scroller.scrollLeft = 0
      }
    }

    resetHorizontal()
    scroller.addEventListener('scroll', resetHorizontal, { passive: true })

    return () => scroller.removeEventListener('scroll', resetHorizontal)
  }, [scrollerRef])
}
