import type { LucideIcon } from 'lucide-react'
import { Globe, Route, Search, User } from 'lucide-react'

/** Ids for the app-level bottom tabs. */
export const APP_TAB_IDS = ['explore', 'find', 'trips', 'profile'] as const

/** One of {@link APP_TAB_IDS}. */
export type AppTabId = (typeof APP_TAB_IDS)[number]

/** Bottom-nav item: id, label, and Lucide icon. */
export type AppTab = {
  id: AppTabId
  label: string
  icon: LucideIcon
}

/** Bottom tabs from the product chrome (Explore / Find / Trips / Profile). */
export const APP_TABS: readonly AppTab[] = [
  { id: 'explore', label: 'Explore', icon: Globe },
  { id: 'find', label: 'Find', icon: Search },
  { id: 'trips', label: 'Trips', icon: Route },
  { id: 'profile', label: 'Profile', icon: User },
]

/** Route for each app tab. */
export const TAB_PATHS: Record<AppTabId, string> = {
  explore: '/',
  find: '/find',
  trips: '/trips',
  profile: '/profile',
}

/**
 * Maps the current pathname to a tab. Listing pages are not a tab.
 * Unknown tab paths fall back to Explore.
 */
export function getTabIdFromPath(pathname: string): AppTabId {
  if (pathname.startsWith('/listings')) {
    return 'explore'
  }

  const match = APP_TABS.find((tab) => TAB_PATHS[tab.id] === pathname)
  return match?.id ?? 'explore'
}
