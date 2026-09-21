import { useEffect, useState } from 'react'
import { Capacitor } from '@capacitor/core'

const MOBILE_VIEWPORT = '(max-width: 480px)'

export function isNativePlatform() {
  return Capacitor.isNativePlatform()
}

export function useShowPhoneFrame() {
  const [showFrame, setShowFrame] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    return !isNativePlatform() && !window.matchMedia(MOBILE_VIEWPORT).matches
  })

  useEffect(() => {
    if (isNativePlatform()) {
      setShowFrame(false)
      return
    }

    const mediaQuery = window.matchMedia(MOBILE_VIEWPORT)
    const update = () => setShowFrame(!mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return showFrame
}
