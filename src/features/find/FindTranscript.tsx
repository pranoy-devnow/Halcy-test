import { buttonVariants } from '@/components/ui/button'
import { getListingById } from '@/features/explore/catalog'
import { cn } from '@/lib/utils'
import { FindAvatar } from './FindAvatar'
import { FindStarRating } from './FindStarRating'
import { FindSuggestionRow } from './FindSuggestionRow'
import { FindTalkSlider } from './FindTalkSlider'
import { getDealListings } from './deal-listing'
import { groupFindDays, type FindDay, type FindTurn } from './transcript'

type FindTranscriptProps = {
  turns: readonly FindTurn[]
}

/**
 * ChatGPT-style thread: dated history, then avatar rows and suggestion tiles.
 */
export function FindTranscript({ turns }: FindTranscriptProps) {
  const days = groupFindDays(turns)

  return (
    <div className="flex flex-col gap-5">
      {days.map((day, index) => (
        <DayBlock
          key={day.id}
          day={day}
          headingDate={index === 0 ? day.date : undefined}
          nextDate={days[index + 1]?.date}
        />
      ))}
    </div>
  )
}

type DayBlockProps = {
  day: FindDay
  headingDate?: string
  nextDate?: string
}

/** One day’s turns, with a hairline and the next date after a completed day. */
function DayBlock({ day, headingDate, nextDate }: DayBlockProps) {
  return (
    <div className="flex flex-col gap-5">
      {headingDate ? (
        <>
          <DayRule />
          <DateChip date={headingDate} />
        </>
      ) : null}
      {day.turns.map((turn) => (
        <MessageBlock key={turn.id} turn={turn} />
      ))}
      {nextDate ? (
        <>
          <DayRule />
          <DateChip date={nextDate} />
        </>
      ) : null}
    </div>
  )
}

/** Inset hairline between days, aligned with the back-button row. */
function DayRule() {
  return (
    <div role="separator" className="mx-5 border-t border-foreground/10" />
  )
}

type DateChipProps = {
  date: string
}

/** Secondary-button date label. */
function DateChip({ date }: DateChipProps) {
  return (
    <p className="flex justify-center">
      <span
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'sm' }),
          'pointer-events-none'
        )}
      >
        {date}
      </span>
    </p>
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
