import { useEffect, useRef, useState } from 'react'
import { FindChrome } from './FindChrome'
import { FindComposer } from './FindComposer'
import { FindSettings } from './FindSettings'
import { FindTranscript } from './FindTranscript'
import { TALK_SLIDER_DEFAULT } from './talk-balance'
import { FIND_TONE_DEFAULT, type FindTone } from './tone'
import { FIND_TRANSCRIPT } from './transcript'

const FIND_SCROLL =
  '@container min-h-0 flex-1 overflow-y-scroll overscroll-y-contain pb-28 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'

type FindScreenProps = {
  onLeave: () => void
}

/**
 * Full-screen Find chat mock. Header is back, Agent, and settings.
 */
export function FindScreen({ onLeave }: FindScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [talkBalance, setTalkBalance] = useState(TALK_SLIDER_DEFAULT)
  const [tone, setTone] = useState<FindTone>(FIND_TONE_DEFAULT)

  useEffect(() => {
    const root = scrollRef.current
    if (!root) {
      return
    }

    root.scrollTop = root.scrollHeight
  }, [settingsOpen])

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-background">
      <FindChrome
        settingsOpen={settingsOpen}
        onSettings={() => setSettingsOpen((open) => !open)}
        onLeave={onLeave}
      />
      {settingsOpen ? (
        <FindSettings
          talkBalance={talkBalance}
          onTalkBalanceChange={setTalkBalance}
          tone={tone}
          onToneChange={setTone}
          onClose={() => setSettingsOpen(false)}
        />
      ) : (
        <>
          <div ref={scrollRef} className={FIND_SCROLL}>
            <FindTranscript
              turns={FIND_TRANSCRIPT}
              talkBalance={talkBalance}
              onTalkBalanceChange={setTalkBalance}
            />
          </div>
          <FindComposer />
        </>
      )}
    </div>
  )
}
