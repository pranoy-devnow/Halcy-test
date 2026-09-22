import type { ReactNode } from 'react'
import { usePhonePreviewScale } from '@/lib/usePhonePreviewScale'
import {
  PHONE_PREVIEW_HEIGHT_PX,
  PHONE_PREVIEW_WIDTH_PX,
} from '@/lib/viewport'

type PhoneFrameProps = {
  children: ReactNode
}

/**
 * Desktop phone preview. Fixed 390×844 layout, uniformly scaled to fit the viewport.
 */
export function PhoneFrame({ children }: PhoneFrameProps) {
  const scale = usePhonePreviewScale()
  const layoutWidth = PHONE_PREVIEW_WIDTH_PX * scale
  const layoutHeight = PHONE_PREVIEW_HEIGHT_PX * scale

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-zinc-950 p-4">
      <div
        className="relative shrink-0"
        style={{ width: layoutWidth, height: layoutHeight }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: PHONE_PREVIEW_WIDTH_PX,
            height: PHONE_PREVIEW_HEIGHT_PX,
            transform: `scale(${scale})`,
          }}
        >
          <div className="absolute inset-0 rounded-[48px] bg-black p-3 shadow-2xl ring-1 ring-white/15">
            <div
              aria-hidden
              className="absolute top-4 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black"
            />
            <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[36px] bg-background">
              {children}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-5 left-1/2 z-30 h-1.5 w-32 -translate-x-1/2 rounded-full bg-white/40"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
