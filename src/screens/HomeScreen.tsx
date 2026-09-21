import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/features/app-shell/AppShell'
import { ExploreScreen } from '@/features/explore/ExploreScreen'
import { FindScreen } from '@/features/find/FindScreen'
import { ListingScreen } from '@/features/listing/ListingScreen'
import { ProfileScreen } from '@/features/profile/ProfileScreen'
import { TripsScreen } from '@/features/trips/TripsScreen'

/**
 * Routed app inside the phone: Explore, Find, Trips, Profile, plus listing pages.
 */
export function HomeScreen() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Routes>
        <Route path="/listings/:listingId" element={<ListingScreen />} />
        <Route element={<AppShell />}>
          <Route path="/" element={<ExploreScreen />} />
          <Route path="/find" element={<FindScreen />} />
          <Route path="/trips" element={<TripsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  )
}
