# Listing

Airbnb-style posting at `/listings/:listingId`. Opened from Explore photo cards. No tab bar.

## How to use

`ListingScreen` loads the catalog listing plus `details.ts` extras (match, value, countdown, itinerary).

1. Pinned chrome — circular back, share (`navigator.share` with copy fallback), and like. Always visible over the photo.
2. Hero — experience name (`tripName ?? title`) with a filled `{n}% match` capsule and a quiet `2 nights · 3 days` capsule beside it.
3. Value — Fair / Good / Great capsules; the listing grade is filled.
4. Book before — square serif unit countdown (days · hrs · min · sec) toward `countdownTo`. Loops when it hits zero.
5. Itinerary — stops grouped by `day` on a vertical spine with square dots.
6. Book bar — price per person and a square Airbnb-red Book. Local UI only; no payment.

## Gotchas

- Flight ids have no posting; unknown ids redirect to `/`.
- Do not wrap the page in a card. The hero photo is the only large surface.
- The sticky Book bar replaces the glass tabs on this route.
- Book red (`#FF385C`) is a local class on this bar, not a global token.
- Share and like are local — no real targets, no persisted saves.
