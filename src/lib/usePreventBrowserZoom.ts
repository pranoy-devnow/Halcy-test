import { useEffect } from 'react'
import { isTrackpadPinchZoom } from './preview-gestures'

/**
 * Stops browser page zoom during phone preview (trackpad pinch, Safari gestures).
 */
export function usePreventBrowserZoom(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const onWheel = (event: WheelEvent) => {
      if (isTrackpadPinchZoom(event)) {
        event.preventDefault()
      }
    }

    const onGesture = (event: Event) => {
      event.preventDefault()
    }

    document.addEventListener('wheel', onWheel, { passive: false, capture: true })
    document.addEventListener('gesturestart', onGesture, { capture: true })
    document.addEventListener('gesturechange', onGesture, { capture: true })
    document.addEventListener('gestureend', onGesture, { capture: true })

    return () => {
      document.removeEventListener('wheel', onWheel, { capture: true })
      document.removeEventListener('gesturestart', onGesture, { capture: true })
      document.removeEventListener('gesturechange', onGesture, { capture: true })
      document.removeEventListener('gestureend', onGesture, { capture: true })
    }
  }, [enabled])
}
