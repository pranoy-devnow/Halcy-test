# Explore

Home tab at `/`. Airbnb-style discovery IA (chips + shelves) with Halcy’s white canvas, square tiles, and serif section titles.

## How to use

`ExploreScreen` renders:

1. `ExploreHeader` — capsule search bar. Tap opens an Airbnb-style sheet on this page: a Where card with suggested destinations, When / Who pills, and Clear all + Search. Does not navigate to `/find`.
2. `CategoryChips` — Apple-style capsule badges: All · Weekend · beaches · bachelorette · picturesque. Local filter; empty shelves hide.
3. Horizontal sections from `catalog.ts`: Recently viewed, Weekend trips, Unique experiences, Best deals, Flight deals, Last-minute getaways, City breaks.

Stay tiles still exist for any `listing` shelf. Weekend trips, Unique experiences, Best deals, Last-minute getaways, and City breaks use `TripCard`. Flights use `FlightCard` and do not open a posting. Recently viewed uses `PlaceCard`. Photo tiles open `/listings/:id`. Save/heart is local UI state only.

## Gotchas

- Do not wrap the page in a card. Keep the white canvas.
- Category chips are rounded capsules. Shelf actions are a small gray arrow circle. Cards stay square.
- Carousels show about two and a half tiles. The right-edge fade is not a swipe target.
