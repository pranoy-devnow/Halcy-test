# App shell

Layout for Explore, Find, Trips, and Profile. Routes live in `HomeScreen`; this module owns the glass tab bar and path map.

## How to use

Wrap tab screens in `AppShell` as the parent route. `BottomNav` uses `TAB_PATHS` (`/`, `/find`, `/trips`, `/profile`). Unknown URLs redirect to `/`.

## Gotchas

- This bar is **app** navigation. Inside a trip, keep Discover / Overview / Chat.
- The selected pill follows the route, not local state.
- The bar uses a near-white glass fill so it stays readable over photos.
- It slides away while the shell scrolls and returns after a short idle.
