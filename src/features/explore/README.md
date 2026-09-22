# Explore

Home tab at `/`. Airbnb-style discovery IA (chips + shelves) with Halcy’s white canvas, square tiles, and serif section titles.

## How to use

`ExploreScreen` renders:

1. `ExploreHeader` — capsule search bar. Tap expands the pill into the Where card over a fading wash (Search / Agent). When / Who and the footer fade in after. Close collapses back into the pill. Agent opens `/find`. Back from that Find session reveals the same sheet; it does not expand from the pill again.
2. `CategoryChips` — Apple-style capsule badges: All · Weekend · beaches · bachelorette · picturesque. Local filter; empty shelves hide.
3. Horizontal sections from `catalog.ts`: Recently viewed, Weekend trips, Unique experiences, Best deals, Flight deals, Last-minute getaways, City breaks. Each shelf has six tiles so See more can advance the carousel.

Stay tiles still exist for any `listing` shelf. Weekend trips, Unique experiences, Best deals, Last-minute getaways, and City breaks use `TripCard`. Flights use `FlightCard` and do not open a posting. Recently viewed uses `PlaceCard`. Photo tiles open `/listings/:id`. Save/heart is local UI state only.

## Gotchas

- Do not wrap the page in a card. Keep the white canvas. Search is a pill that expands into the Where card, not a full-page drop.
- Category chips are rounded capsules. Shelf actions are a small gray arrow circle. Cards stay square.
- Carousels show about two and a half tiles. The capsule arrow scrolls the track; at the end it wraps to the start. The right-edge fade is not a swipe target.
