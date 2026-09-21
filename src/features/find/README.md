# Find

Ongoing ChatGPT-style chat mock at `/find`. Opened from the Find tab. No tab bar.

## How to use

`FindScreen` sits outside `AppShell`, like a listing. Circular back sits in a reserved frosted header band. The thread scrolls under that band and fades out — there is no title next to back.

The transcript is static (`transcript.ts`), oldest first. 18 September is a Vienna follow-up → weekend stays (`weekend-porto`, `weekend-barcelona`, `weekend-vienna`). 20 September is an urgent ping (“too good, sending it”) → experiences (`exp-pasta`, `exp-fado`, `exp-kayak`), then the thread continues on which one might book out. Today the agent asks if it is talking too much (live suggestion slider), then asks for a 5-star quality rating (seeded at 5). You reply 5; the agent thanks you. An inset hairline sits above the first date (level with the back button) and after each completed day, then the next date chip. Suggestion rows use the same peek-width `TripCard` carousel as Explore. The composer is typeable and does not repeat the last prompt.

## Gotchas

- Do not wrap the page in a card. Rows are ChatGPT-style (`avatar | sans body`), not iMessage bubbles and not serif Q/A headings.
- Card carousels are full-bleed like Explore shelves (`px-5`, peek the next tile). They open `/listings/:id`.
- Today’s suggestion slider and star rating are live. They do not persist.
- You can type in the composer. Nothing is sent or persisted.
