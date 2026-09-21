import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
}

/**
 * Desktop phone preview. Scales to the viewport so the tab bar stays on screen.
 */
export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex h-svh items-center justify-center overflow-hidden bg-zinc-950 p-4">
      <div className="relative aspect-[390/844] h-[min(844px,calc(100svh-2rem))]">
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
  )
}
