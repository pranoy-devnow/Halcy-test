import { getListingById } from '@/features/explore/catalog'
import { FindAvatar } from './FindAvatar'
import { FindDateChip } from './FindDateChip'
import { FindStarRating } from './FindStarRating'
import { FindSuggestionRow } from './FindSuggestionRow'
import { FindTalkSlider } from './FindTalkSlider'
import { getDealListings } from './deal-listing'
import { groupFindDays, type FindDay, type FindTurn } from './transcript'

type FindTranscriptProps = {
  turns: readonly FindTurn[]
}

/**
 * ChatGPT-style thread: one dated block per day for the sticky header.
 */
export function FindTranscript({ turns }: FindTranscriptProps) {
  const days = groupFindDays(turns)

  return (
    <div className="flex flex-col gap-5">
      {days.map((day) => (
        <DayBlock key={day.id} day={day} />
      ))}
    </div>
  )
}

type DayBlockProps = {
  day: FindDay
}

/** One day’s chip and turns. `data-find-day` is read by the sticky header. */
function DayBlock({ day }: DayBlockProps) {
  const date = day.date ?? day.id

  return (
    <div className="flex flex-col gap-5" data-find-day={date}>
      <DayRule />
      <p className="flex justify-center">
        <FindDateChip date={date} />
      </p>
      {day.turns.map((turn) => (
        <MessageBlock key={turn.id} turn={turn} />
      ))}
    </div>
  )
}

/** Inset hairline above a day’s date chip. */
function DayRule() {
  return (
    <div role="separator" className="mx-5 border-t border-foreground/10" />
  )
}

type MessageBlockProps = {
  turn: FindTurn
}

/** Avatar row, live controls, and an optional Explore-width card carousel. */
function MessageBlock({ turn }: MessageBlockProps) {
  const listings = getDealListings(
    (turn.listingIds ?? []).map((id) => getListingById(id))
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 px-5">
        <FindAvatar role={turn.role} />
        <div className="min-w-0 flex-1 pt-1">
          <p className="text-[15px] leading-relaxed">{turn.text}</p>
          {turn.control === 'talk-slider' ? <FindTalkSlider /> : null}
          {turn.control === 'star-rating' ? (
            <FindStarRating initial={turn.rating} />
          ) : null}
        </div>
      </div>
      {listings.length > 0 ? <FindSuggestionRow listings={listings} /> : null}
    </div>
  )
}
