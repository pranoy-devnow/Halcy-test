import { useLayoutEffect, useRef, useState } from 'react'
import {
  relativeSearchBox,
  searchExpandCss,
  searchExpandTransform,
  type SearchBox,
} from './searchExpand'

type ExpandPhase = 'measure' | 'from' | 'to'

/**
 * FLIP-expands the Where card from the header pill.
 *
 * @param origin - Pill box in overlay space, or null to skip the morph
 * @returns Overlay/surface refs, phase, and the from-transform CSS
 */
export function useSearchExpand(origin: SearchBox | null) {
  const rootRef = useRef<HTMLDivElement>(null)
  const surfaceRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<ExpandPhase>(origin ? 'measure' : 'to')
  const [fromCss, setFromCss] = useState<string>()

  useLayoutEffect(() => {
    if (!origin) {
      setPhase('to')
      return
    }

    const surface = surfaceRef.current
    const root = rootRef.current
    if (!surface || !root) {
      setPhase('to')
      return
    }

    const rest = relativeSearchBox(
      surface.getBoundingClientRect(),
      root.getBoundingClientRect()
    )
    setFromCss(searchExpandCss(searchExpandTransform(origin, rest)))
    setPhase('from')

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setPhase('to'))
    })

    return () => window.cancelAnimationFrame(frame)
  }, [origin])

  return { rootRef, surfaceRef, phase, fromCss }
}
