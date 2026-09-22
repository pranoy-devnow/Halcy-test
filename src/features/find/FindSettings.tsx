import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { FindTalkSlider } from './FindTalkSlider'
import {
  FIND_TONES,
  findToneLabel,
  type FindTone,
} from './tone'

type FindSettingsProps = {
  talkBalance: number
  onTalkBalanceChange: (value: number) => void
  tone: FindTone
  onToneChange: (tone: FindTone) => void
  onClose: () => void
}

/**
 * Find agent settings: suggestion balance and reply tone. Local UI only.
 */
export function FindSettings({
  talkBalance,
  onTalkBalanceChange,
  tone,
  onToneChange,
  onClose,
}: FindSettingsProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-4 pb-8">
      <h2 className="font-heading text-2xl font-normal">Settings</h2>
      <section className="mt-8 space-y-3">
        <h3 className="text-sm font-medium">Suggestion balance</h3>
        <FindTalkSlider value={talkBalance} onChange={onTalkBalanceChange} />
      </section>
      <section className="mt-8 space-y-3">
        <h3 className="text-sm font-medium">Tone</h3>
        <div className="flex gap-2">
          {FIND_TONES.map((option) => (
            <Button
              key={option}
              type="button"
              variant={option === tone ? 'default' : 'outline'}
              aria-pressed={option === tone}
              onClick={() => onToneChange(option)}
            >
              {findToneLabel(option)}
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}
