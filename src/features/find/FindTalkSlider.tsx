import {
  TALK_SLIDER_MAX,
  TALK_SLIDER_MIN,
  talkBalanceLabel,
} from './talk-balance'

type FindTalkSliderProps = {
  value: number
  onChange: (value: number) => void
}

/**
 * Live slider that balances how many suggestions the agent sends.
 */
export function FindTalkSlider({ value, onChange }: FindTalkSliderProps) {
  const label = talkBalanceLabel(value)

  return (
    <div className="space-y-2">
      <label className="block">
        <span className="sr-only">Suggestion balance</span>
        <input
          type="range"
          min={TALK_SLIDER_MIN}
          max={TALK_SLIDER_MAX}
          value={value}
          aria-valuetext={label}
          onChange={(event) => {
            onChange(Number(event.target.value))
          }}
          className="h-8 w-full accent-foreground"
        />
      </label>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Quiet</span>
        <span className="text-foreground">{label}</span>
        <span>More</span>
      </div>
    </div>
  )
}
