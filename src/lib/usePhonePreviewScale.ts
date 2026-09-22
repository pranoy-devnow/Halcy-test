import { useLayoutEffect, useState } from 'react'
import { phonePreviewScale } from './viewport'

/** Padding around the phone preview (`p-4` on both axes). */
const PREVIEW_PADDING_PX = 32

/**
 * Live scale factor for the phone frame. Updates on window and visual viewport changes.
 */
export function usePhonePreviewScale(): number {
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const update = () => {
      const viewport = window.visualViewport
      const width = viewport?.width ?? window.innerWidth
      const height = viewport?.height ?? window.innerHeight
      setScale(phonePreviewScale(width, height, PREVIEW_PADDING_PX))
    }

    update()
    window.addEventListener('resize', update)
    window.visualViewport?.addEventListener('resize', update)
    window.visualViewport?.addEventListener('scroll', update)

    return () => {
      window.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('scroll', update)
    }
  }, [])

  return scale
}
