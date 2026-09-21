import { useEffect, useRef } from 'react'
import { FindChrome } from './FindChrome'
import { FindComposer } from './FindComposer'
import { FindTranscript } from './FindTranscript'
import { FIND_TRANSCRIPT } from './transcript'

const FIND_SCROLL =
  '@container min-h-0 flex-1 overflow-y-scroll overscroll-y-contain pt-24 pb-28 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'

/**
 * Full-screen Find chat mock. No tab bar. Back returns to Explore.
 */
export function FindScreen() {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [])

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-background">
      <FindChrome />
      <div className={FIND_SCROLL}>
        <FindTranscript turns={FIND_TRANSCRIPT} />
        <div ref={endRef} />
      </div>
      <FindComposer />
    </div>
  )
}
