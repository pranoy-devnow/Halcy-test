import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { useHideWhileScrolling } from './useHideWhileScrolling'
import { useLockHorizontalScroll } from './useLockHorizontalScroll'

type AppShellProps = {
  /** Unread Find messages shown on the tab. */
  findUnread?: number
}

/**
 * App layout: routed page in the scroll area, glass tab bar over the bottom.
 */
export function AppShell({ findUnread = 0 }: AppShellProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const navHidden = useHideWhileScrolling(scrollerRef)
  useLockHorizontalScroll(scrollerRef)

  return (
    <div
      data-app-shell
      className="relative z-0 flex h-full min-h-0 w-full min-w-0 flex-col overflow-x-hidden bg-background"
    >
      <div
        ref={scrollerRef}
        className="min-h-0 min-w-0 flex-1 touch-pan-y overflow-x-hidden overflow-y-auto overscroll-y-contain pb-24"
      >
        <Outlet />
      </div>
      <BottomNav hidden={navHidden} findUnread={findUnread} />
    </div>
  )
}
