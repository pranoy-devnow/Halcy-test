import { getListingById } from '@/features/explore/catalog'
import { FindDateChip } from './FindDateChip'
import { FindStarRating } from './FindStarRating'
import { FindSuggestionRow } from './FindSuggestionRow'
import { FindTalkSlider } from './FindTalkSlider'
import { getDealListings } from './deal-listing'
import { groupFindDays, type FindDay, type FindTurn } from './transcript'

type FindTranscriptProps = {
  turns: readonly FindTurn[]
  talkBalance: number
  onTalkBalanceChange: (value: number) => void
}

/**
 * Dated thread: agent text on the left, user bubbles on the right, no row avatars.
 */
export function FindTranscript({
  turns,
  talkBalance,
  onTalkBalanceChange,
}: FindTranscriptProps) {
  const days = groupFindDays(turns)

  return (
    <div className="flex flex-col gap-5">
      {days.map((day) => (
        <DayBlock
          key={day.id}
          day={day}
          talkBalance={talkBalance}
          onTalkBalanceChange={onTalkBalanceChange}
        />
      ))}
    </div>
  )
}

type DayBlockProps = {
  day: FindDay
  talkBalance: number
  onTalkBalanceChange: (value: number) => void
}

/** One day’s chip and turns. */
function DayBlock({ day, talkBalance, onTalkBalanceChange }: DayBlockProps) {
  const date = day.date ?? day.id

  return (
    <div className="flex flex-col gap-5" data-find-day={date}>
      <DayRule />
      <p className="flex justify-center">
        <FindDateChip date={date} />
      </p>
      {day.turns.map((turn) => (
        <MessageBlock
          key={turn.id}
          turn={turn}
          talkBalance={talkBalance}
          onTalkBalanceChange={onTalkBalanceChange}
        />
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
  talkBalance: number
  onTalkBalanceChange: (value: number) => void
}

/** Agent text left, user bubble right, plus optional controls and cards. */
function MessageBlock({
  turn,
  talkBalance,
  onTalkBalanceChange,
}: MessageBlockProps) {
  const listings = getDealListings(
    (turn.listingIds ?? []).map((id) => getListingById(id))
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 px-5">
        {turn.role === 'user' ? (
          // Theme `--radius` is 0, so `rounded-2xl` stays square. Pixel radius is required.
          <p className="max-w-[85%] self-end rounded-[1.25rem] border border-border bg-secondary px-3 py-2 text-[15px] leading-relaxed">
            {turn.text}
          </p>
        ) : (
          <p className="text-[15px] leading-relaxed">{turn.text}</p>
        )}
        {turn.control === 'talk-slider' ? (
          <FindTalkSlider value={talkBalance} onChange={onTalkBalanceChange} />
        ) : null}
        {turn.control === 'star-rating' ? (
          <FindStarRating initial={turn.rating} />
        ) : null}
      </div>
      {listings.length > 0 ? <FindSuggestionRow listings={listings} /> : null}
    </div>
  )
}
