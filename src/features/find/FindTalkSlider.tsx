import { useState } from 'react'
import {
  TALK_SLIDER_DEFAULT,
  TALK_SLIDER_MAX,
  TALK_SLIDER_MIN,
  talkBalanceLabel,
} from './talk-balance'

/**
 * Live slider that balances how many suggestions the agent sends.
 */
export function FindTalkSlider() {
  const [value, setValue] = useState(TALK_SLIDER_DEFAULT)
  const label = talkBalanceLabel(value)

  return (
    <div className="mt-3 space-y-2">
      <label className="block">
        <span className="sr-only">Balance suggestions</span>
        <input
          type="range"
          min={TALK_SLIDER_MIN}
          max={TALK_SLIDER_MAX}
          value={value}
          aria-valuetext={label}
          onChange={(event) => {
            setValue(Number(event.target.value))
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
