import { useEffect, useMemo, useState } from 'react'
import {
  countdownCycleMs,
  loopingRemaining,
  remainingParts,
  type RemainingParts,
} from './remainingTime'

/**
 * Live remaining time until `iso`. Loops the original window when it hits zero.
 *
 * @param iso - Target instant as an ISO timestamp
 * @returns Days, hours, minutes, and seconds still left
 */
export function useCountdown(iso: string): RemainingParts {
  const [now, setNow] = useState(() => Date.now())
  const targetMs = Date.parse(iso)
  const cycleMs = useMemo(
    () => countdownCycleMs(targetMs, Date.now()),
    [targetMs]
  )

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return remainingParts(loopingRemaining(targetMs, now, cycleMs))
}
