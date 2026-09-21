import { useEffect, useRef, useState } from 'react'
import { FindChrome } from './FindChrome'
import { FindComposer } from './FindComposer'
import { FindTranscript } from './FindTranscript'
import { pickActiveDate, type DaySection } from './sticky-date'
import { FIND_THREAD_DATE, FIND_TRANSCRIPT } from './transcript'

const FIND_SCROLL =
  '@container min-h-0 flex-1 overflow-y-scroll overscroll-y-contain pb-28 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'

const HEADER_DATE_OFFSET = 16

/**
 * Full-screen Find chat mock. A solid white header shows the day in view.
 */
export function FindScreen() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeDate, setActiveDate] = useState(FIND_THREAD_DATE)

  useEffect(() => {
    const root = scrollRef.current
    if (!root) {
      return
    }

    const updateDate = () => {
      const next = pickActiveDate(readDaySections(root), root.scrollTop, HEADER_DATE_OFFSET)
      if (next) {
        setActiveDate(next)
      }
    }

    root.scrollTop = root.scrollHeight
    updateDate()
    root.addEventListener('scroll', updateDate, { passive: true })

    return () => {
      root.removeEventListener('scroll', updateDate)
    }
  }, [])

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-background">
      <FindChrome date={activeDate} />
      <div ref={scrollRef} className={FIND_SCROLL}>
        <FindTranscript turns={FIND_TRANSCRIPT} />
      </div>
      <FindComposer />
    </div>
  )
}

/**
 * Reads dated day blocks from the Find scroller.
 *
 * @param root - Overflow container that owns the thread
 */
function readDaySections(root: HTMLElement): DaySection[] {
  return [...root.querySelectorAll('[data-find-day]')].flatMap((node) => {
    if (!(node instanceof HTMLElement) || !node.dataset.findDay) {
      return []
    }

    return [{ date: node.dataset.findDay, top: node.offsetTop }]
  })
}
