import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { useHideWhileScrolling } from './useHideWhileScrolling'

/**
 * App layout: routed page in the scroll area, glass tab bar over the bottom.
 */
export function AppShell() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const navHidden = useHideWhileScrolling(scrollerRef)

  return (
    <div
      data-app-shell
      className="relative flex h-full min-h-0 w-full flex-col bg-background"
    >
      <div
        ref={scrollerRef}
        className="min-h-0 flex-1 overflow-y-auto pb-24"
      >
        <Outlet />
      </div>
      <BottomNav hidden={navHidden} />
    </div>
  )
}
