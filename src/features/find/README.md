# Find

Ongoing chat mock at `/find`. Opened from the Find tab. No tab bar.

## How to use

`FindScreen` slides in from the right over the last tab (`FindSlideOver`). Circular back sits in a solid white header with the Agent face and name, and a circular settings button on the right. Settings opens suggestion balance and tone (Warm / Neutral / Direct). Values stay for the session and match the in-thread suggestion slider. They do not persist. Back from Settings returns to the chat. If Find was opened from Explore’s search Agent control, back from the chat reopens that sheet on the Agent toggle. From the Find tab, back returns to Explore.

The transcript is static (`transcript.ts`), oldest first. 18 September is a Vienna follow-up → weekend stays (`weekend-porto`, `weekend-barcelona`, `weekend-vienna`). 20 September is an urgent ping (“too good, sending it”) → experiences (`exp-pasta`, `exp-fado`, `exp-kayak`), then the thread continues on which one might book out. Today the agent asks if it is talking too much (live suggestion slider), then asks for a 5-star quality rating (seeded at 5). You reply 5; the agent thanks you. Each day has an inset hairline and a date chip. Suggestion rows use the same peek-width `TripCard` carousel as Explore. The composer is typeable and does not repeat the last prompt.

## Gotchas

- Do not wrap the page in a card. Agent lines are left-aligned sans text. User lines are right-aligned rounded grey bubbles. No in-thread avatars.
- Opening Find from the tab bar (or Agent) slides the chat from the right over the previous tab, including the search sheet. Back slides it out the same way before Explore returns. The tab bar stays underneath, not on the chat.
- Card carousels are full-bleed like Explore shelves (`px-5`, peek the next tile). They open `/listings/:id`. Listing back returns to this thread.
- Today’s suggestion slider and star rating are live. Suggestion balance is the same control as Settings. Tone and balance do not persist and do not rewrite the transcript.
- You can type in the composer. Nothing is sent or persisted.
