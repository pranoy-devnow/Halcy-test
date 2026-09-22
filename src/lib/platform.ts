import { useEffect, useState } from 'react'
import { Capacitor } from '@capacitor/core'

export function isNativePlatform() {
  return Capacitor.isNativePlatform()
}

/**
 * Whether the decorative phone chrome wraps the app.
 * Web always uses the frame so mobile DevTools matches desktop preview.
 * Native Capacitor builds run edge-to-edge.
 *
 * @param native - From {@link isNativePlatform}
 * @param _viewportWidthPx - Unused; kept for tests and future tuning
 */
export function shouldShowPhoneFrame(
  native: boolean,
  _viewportWidthPx: number
): boolean {
  return !native
}

export function useShowPhoneFrame() {
  const [showFrame, setShowFrame] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    return shouldShowPhoneFrame(isNativePlatform(), window.innerWidth)
  })

  useEffect(() => {
    setShowFrame(shouldShowPhoneFrame(isNativePlatform(), window.innerWidth))
  }, [])

  return showFrame
}
