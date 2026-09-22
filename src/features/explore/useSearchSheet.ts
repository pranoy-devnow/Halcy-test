import { useCallback, useEffect, useState } from 'react'
import { searchSlideDurationMs } from './searchSlide'

/**
 * Opens and closes the Explore search overlay, waiting for the expand animation.
 *
 * @returns Open state, leaving flag, and show/hide controls
 */
export function useSearchSheet() {
  const [open, setOpen] = useState(false)
  const [leaving, setLeaving] = useState(false)

  const show = useCallback(() => {
    setLeaving(false)
    setOpen(true)
  }, [])

  const hide = useCallback(() => {
    setLeaving(true)
  }, [])

  useEffect(() => {
    if (!leaving) {
      return
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const timer = window.setTimeout(() => {
      setOpen(false)
      setLeaving(false)
    }, searchSlideDurationMs(reduceMotion))

    return () => window.clearTimeout(timer)
  }, [leaving])

  return { open, leaving, show, hide }
}
