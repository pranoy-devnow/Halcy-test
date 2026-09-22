import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { useHideWhileScrolling } from './useHideWhileScrolling'

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

  return (
    <div
      data-app-shell
      className="relative z-0 flex h-full min-h-0 w-full flex-col bg-background"
    >
      <div
        ref={scrollerRef}
        className="min-h-0 flex-1 overflow-y-auto pb-24"
      >
        <Outlet />
      </div>
      <BottomNav hidden={navHidden} findUnread={findUnread} />
    </div>
  )
}
