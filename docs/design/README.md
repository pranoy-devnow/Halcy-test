# Halcy design template

August is August Round 02 **Reworked** screens are the visual system we build on. Originals and Hotel Search V1 are rejected.

Source deck: `Halcy - August is August - Updated App Screens 20260918.pdf` (not in the repo). Cropped phones and full-page overviews live in [`references/`](references/).

## How to use

1. Read this spec before adding or restyling a screen.
2. Match layout and chrome to the reference for that screen — do not invent a third nav or card language.
3. Use tokens in `src/index.css` (`--radius: 0`, `--font-serif`, near-black on white). Do not hardcode a new palette.
4. Hotel Search follows **V2** only.

## Foundations

**Color**

- Canvas and surfaces: white (`--background`)
- Text and selected fills: near-black (`--foreground`, `--primary`)
- Secondary copy: muted grey (`--muted-foreground`)
- Hairline borders and outline controls: 1px near-black (`--border`)
- Status “Not booked”: small red square, not a banner
- Photography stays in color; maps are always greyscale

**Type**

- Serif (`font-heading` / `font-serif`, Instrument Serif): hero titles, section titles, calendar month, chat prompt
- Sans (`font-sans`, Geist): nav, metadata, prices, dates, buttons, helper text
- Hero titles are large, light, and sit on the photo. Chat prompt is a large serif paragraph, not a bubble.

**Radius and space**

- Default radius is `0`. Cards, outline buttons, calendar cells, map price pins, and images are square.
- Circular chrome only: back and overflow icon buttons (`rounded-full`).
- Let the white page breathe. Generous vertical gaps between hero, deals, and stays. Do not pack sections into grey panels.

## App chrome

The product home uses a **bottom** bar, not the trip segments:

`Explore` · `Find` · `Trips` · `Profile`

- Explore is the home feed (featured places, no map).
- Floating glass pill (blur + flying selected highlight). Others are muted.
- Circular search / filter icon buttons are allowed on Explore (same exception as back / overflow).

## Trip shell

Every trip screen uses the same top chrome:

`back` · `Discover | Overview | Chat` · `overflow`

- Selected segment is a black fill with white label.
- Unselected segments are outline / white.
- Back and overflow are circular icon buttons.
- Hotel Search V2 keeps this shell. Location, dates, and traveler count sit **under** it as a page title, not as a replacement search field.

## Component recipes

**Hero overlay** — Full-width photo. Serif title and muted meta on the image. Optional square ghost buttons (`Where to`, `When`) on the photo. This is the only large “card.”

**Flight deal tile** — Square, hairline border, white fill. Airline route, large price, city, date range. Horizontal carousel; next tile must peek. Edge fade reveals more tiles — it must not swipe the whole screen to Chat.

**Stay photo tile** — Square photo, name and location and price below. Same carousel rules as flights.

**Date strip** — Weekday labels above large day numbers. Leads the itinerary, before the map.

**Calendar** — Serif month title. Square selected days (black fill, white number). Range shown as a filled bar. Square outline `Set dates`.

**Greyscale map** — No color roads or pins. Photo-dot pins on Overview. Square price pins on Hotel Search.

**Outline CTA** — Square, 1px border, white fill, black label (`Book transport`, `Book a stay`, `Update`, `Select`).

**Trip editor (Hotel V2)** — Tap the edit icon in the title row. Top expands with `Which nights`, `Who's staying`, and `Update`. Map dims behind the sheet.

**Composer** — Bottom of Chat: `+` and `Message` on a hairline. No send pill, no bubble thread.

## Screen anatomy

**Discover** — Shell → hero (“New Trip” or destination) → Flight Deals carousel → Stays carousel. Supporting rows sit on white, not inside cards.

**Overview** — Shell → destination hero → Itinerary date strip → greyscale map → two-column Transport | Stay with red “Not booked” markers and outline CTAs. Less repetition than the original (no duplicate browse rows).

**Chat** — Shell → large serif restatement of the user’s request → helper “say it the way you’d say it to a friend” → composer. No chat bubbles.

**Hotel Search V2** — Same shell → `Lisbon, Portugal` title + dates + traveler + edit icon → greyscale map or photo list → square price pins / stay cards. Tap edit to expand the trip editor.

## Gotchas

- White background means **do not wrap everything in cards**. Hero is the card; deals and stays are small square items on the page.
- Carousel side-fade is a peek affordance, not a navigation gesture to Chat.
- Overview order is dates, then map, then Transport | Stay. Do not lead with the map.
- Do not rebuild Original patterns: pill chips, nested grey cards, color maps, a “plan” tab.
- Do not rebuild Hotel Search V1 (trip summary as a top search field that replaces Discover / Overview / Chat).

## References

| File | What it shows |
| --- | --- |
| [references/discover.png](references/discover.png) | Discover hero, deals, stays |
| [references/calendar.png](references/calendar.png) | Square date picker |
| [references/itinerary.png](references/itinerary.png) | Overview: dates, map, Transport / Stay |
| [references/chat.png](references/chat.png) | Serif prompt + composer |
| [references/hotel-list.png](references/hotel-list.png) | V2 photo list |
| [references/hotel-map.png](references/hotel-map.png) | V2 greyscale map + price pins |
| [references/hotel-editor.png](references/hotel-editor.png) | V2 expanded trip editor |
| [references/new-trip-reworked.png](references/new-trip-reworked.png) | Full New Trip flow |
| [references/trip-overview.png](references/trip-overview.png) | Overview vs original |
| [references/hotel-search-v2.png](references/hotel-search-v2.png) | Full Hotel Search V2 flow |
