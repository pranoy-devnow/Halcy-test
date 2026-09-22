import { useRef } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AppShell } from '@/features/app-shell/AppShell'
import { ExploreScreen } from '@/features/explore/ExploreScreen'
import { FindSlideOver } from '@/features/find/FindSlideOver'
import { findUnderlayPath } from '@/features/find/underlay'
import { ListingScreen } from '@/features/listing/ListingScreen'
import { ProfileScreen } from '@/features/profile/ProfileScreen'
import { TripsScreen } from '@/features/trips/TripsScreen'

/**
 * Routed app inside the phone. Find slides over the last tab; listings are full-screen.
 */
export function HomeScreen() {
  const location = useLocation()
  const findOpen = location.pathname === '/find'
  const previousPathRef = useRef(location.pathname)

  if (location.pathname !== '/find') {
    previousPathRef.current = location.pathname
  }

  const shellLocation = {
    ...location,
    pathname: findUnderlayPath(location.pathname, previousPathRef.current),
  }

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <Routes location={shellLocation}>
        <Route path="/listings/:listingId" element={<ListingScreen />} />
        <Route element={<AppShell />}>
          <Route path="/" element={<ExploreScreen />} />
          <Route path="/trips" element={<TripsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {findOpen ? <FindSlideOver /> : null}
    </div>
  )
}
