import { useLayoutEffect, useState } from 'react'
import { phonePreviewScale } from './viewport'

/** Padding around the phone preview (`p-4` on both axes). */
const PREVIEW_PADDING_PX = 32

/**
 * Live scale factor for the phone frame. Updates on viewport resize only (not pan/scroll).
 */
export function usePhonePreviewScale(): number {
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const update = () => {
      setScale(
        phonePreviewScale(
          window.innerWidth,
          window.innerHeight,
          PREVIEW_PADDING_PX
        )
      )
    }

    update()
    window.addEventListener('resize', update)
    window.visualViewport?.addEventListener('resize', update)

    return () => {
      window.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('resize', update)
    }
  }, [])

  return scale
}
