import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { FlyingTabIndicator } from './FlyingTabIndicator'
import { TabBadge } from './TabBadge'
import { formatTabBadgeCount, tabAriaLabel } from './tab-badge'
import { APP_TABS, TAB_PATHS, getTabIdFromPath } from './tabs'

type BottomNavProps = {
  hidden?: boolean
  /** Unread Find messages. Hidden when 0. */
  findUnread?: number
}

/**
 * Floating glass tab bar. The flying pill follows the active route.
 * Slides off-screen while the page is scrolling.
 */
export function BottomNav({ hidden = false, findUnread = 0 }: BottomNavProps) {
  const { pathname } = useLocation()
  const activeTab = getTabIdFromPath(pathname)
  const activeIndex = Math.max(
    0,
    APP_TABS.findIndex((tab) => tab.id === activeTab)
  )

  return (
    <nav
      aria-label="Main"
      aria-hidden={hidden}
      className={cn(
        'pointer-events-none absolute inset-x-0 bottom-0 z-20 px-5 pb-5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
        hidden && 'translate-y-[calc(100%+1.25rem)]'
      )}
    >
      <div
        className={cn(
          'pointer-events-auto relative grid h-14 grid-cols-4 rounded-full bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/10 backdrop-blur-2xl backdrop-saturate-150',
          hidden && 'pointer-events-none'
        )}
      >
        <FlyingTabIndicator
          activeIndex={activeIndex}
          tabCount={APP_TABS.length}
        />
        {APP_TABS.map((tab) => {
          const Icon = tab.icon
          const badgeLabel =
            tab.id === 'find' ? formatTabBadgeCount(findUnread) : null

          return (
            <NavLink
              key={tab.id}
              to={TAB_PATHS[tab.id]}
              end={tab.id === 'explore'}
              aria-label={tabAriaLabel(tab.label, badgeLabel)}
              tabIndex={hidden ? -1 : undefined}
              className={({ isActive }) =>
                cn(
                  'relative z-10 flex flex-col items-center justify-center gap-0.5 text-[10px] leading-none',
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative">
                    <Icon
                      className="size-5"
                      strokeWidth={isActive ? 2.25 : 1.6}
                    />
                    {badgeLabel ? <TabBadge label={badgeLabel} /> : null}
                  </span>
                  {tab.label}
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
