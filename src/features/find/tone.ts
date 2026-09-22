/** Agent reply tones on the Find settings sheet. */
export const FIND_TONES = ['warm', 'neutral', 'direct'] as const

/** One of the Find tone chips. */
export type FindTone = (typeof FIND_TONES)[number]

/** Default tone when Find opens. */
export const FIND_TONE_DEFAULT: FindTone = 'neutral'

const TONE_LABELS: Record<FindTone, string> = {
  warm: 'Warm',
  neutral: 'Neutral',
  direct: 'Direct',
}

/**
 * Visible label for a tone chip.
 *
 * @param tone - Selected tone
 * @returns Title-case chip copy
 */
export function findToneLabel(tone: FindTone): string {
  return TONE_LABELS[tone]
}

/**
 * Whether a value is a known Find tone.
 *
 * @param value - Raw string from UI or storage
 * @returns True when the value is warm, neutral, or direct
 */
export function isFindTone(value: string): value is FindTone {
  return (FIND_TONES as readonly string[]).includes(value)
}
