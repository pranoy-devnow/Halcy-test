# Find

Ongoing ChatGPT-style chat mock at `/find`. Opened from the Find tab. No tab bar.

## How to use

`FindScreen` sits outside `AppShell`, like a listing. Circular back sits in a solid white header band with the date of the day in view. Scroll the thread and that date updates. If Find was opened from Explore’s search Agent control, back reopens that sheet on the Agent toggle. From the Find tab, back returns to Explore.

The transcript is static (`transcript.ts`), oldest first. 18 September is a Vienna follow-up → weekend stays (`weekend-porto`, `weekend-barcelona`, `weekend-vienna`). 20 September is an urgent ping (“too good, sending it”) → experiences (`exp-pasta`, `exp-fado`, `exp-kayak`), then the thread continues on which one might book out. Today the agent asks if it is talking too much (live suggestion slider), then asks for a 5-star quality rating (seeded at 5). You reply 5; the agent thanks you. Each day has an inset hairline and a date chip; the header date follows the day at the top of the scroll. Suggestion rows use the same peek-width `TripCard` carousel as Explore. The composer is typeable and does not repeat the last prompt.

## Gotchas

- Do not wrap the page in a card. Rows are ChatGPT-style (`avatar | sans body`), not iMessage bubbles and not serif Q/A headings.
- Card carousels are full-bleed like Explore shelves (`px-5`, peek the next tile). They open `/listings/:id`.
- Today’s suggestion slider and star rating are live. They do not persist.
- You can type in the composer. Nothing is sent or persisted.
