/** One line in the Find mock chat. */
export type FindTurn = {
  id: string
  role: 'agent' | 'user'
  text: string
  /** Optional Explore listings shown under an agent turn. */
  listingIds?: readonly string[]
  /** When set, this turn starts a new day in the thread. */
  date?: string
  /** Optional live control under an agent turn. */
  control?: 'talk-slider' | 'star-rating'
  /** Seeded star rating when `control` is `star-rating`. */
  rating?: number
}

/** One calendar day of Find turns. */
export type FindDay = {
  id: string
  date?: string
  turns: FindTurn[]
}

/**
 * Groups turns into days. A turn with `date` starts a new day.
 *
 * @param turns - Oldest-first transcript
 * @returns Days in the same order; an undated first turn still opens a day
 */
export function groupFindDays(turns: readonly FindTurn[]): FindDay[] {
  const days: FindDay[] = []

  for (const turn of turns) {
    const last = days[days.length - 1]
    if (turn.date || last === undefined) {
      days.push({
        id: turn.date ?? turn.id,
        date: turn.date,
        turns: [turn],
      })
      continue
    }

    last.turns.push(turn)
  }

  return days
}

/** Centered chrome date for the seeded thread (today in the app calendar). */
export const FIND_THREAD_DATE = '21 September 2026'

/**
 * Seeded ongoing chat. Oldest first so earlier days scroll above today.
 * Earlier days vary: a follow-up, a too-good-to-wait ping, then today’s feedback.
 */
export const FIND_TRANSCRIPT: readonly FindTurn[] = [
  {
    id: 'ask-vienna',
    role: 'agent',
    date: '18 September 2026',
    text: 'You were checking Vienna yesterday — did you find a stay?',
  },
  {
    id: 'no-vienna',
    role: 'user',
    text: 'No',
  },
  {
    id: 'suggest-weekends',
    role: 'agent',
    text: 'I’ve found some really good deals for your dates. Here they are.',
    listingIds: ['weekend-porto', 'weekend-barcelona', 'weekend-vienna'],
  },
  {
    id: 'send-amazing',
    role: 'agent',
    date: '20 September 2026',
    text: 'Found something amazing. This might book out because it’s just too good — so I’m sending it to you.',
    listingIds: ['exp-pasta', 'exp-fado', 'exp-kayak'],
  },
  {
    id: 'ask-which',
    role: 'user',
    text: 'Which one is about to go?',
  },
  {
    id: 'reply-pasta',
    role: 'agent',
    text: 'The pasta class. It’s almost full. Fado and the kayak are safer if you want time to think.',
  },
  {
    id: 'keep-pasta',
    role: 'user',
    text: 'Keep the pasta one.',
  },
  {
    id: 'watch-pasta',
    role: 'agent',
    text: 'Watching it. If the last seats go I’ll say so.',
  },
  {
    id: 'ask-talk',
    role: 'agent',
    date: FIND_THREAD_DATE,
    text: 'Am I talking too much? Drag this to balance how many suggestions I send.',
    control: 'talk-slider',
  },
  {
    id: 'ask-quality',
    role: 'agent',
    text: 'And how’s the quality of what I’m sending?',
    control: 'star-rating',
    rating: 5,
  },
  {
    id: 'rate-five',
    role: 'user',
    text: '5',
  },
  {
    id: 'thanks',
    role: 'agent',
    text: 'Thank you 😊',
  },
]
