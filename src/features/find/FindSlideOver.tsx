import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { isFromSearch } from '@/features/explore/searchSheet'
import { FindScreen } from './FindScreen'
import { findLeaveLocation, findSlideDurationMs } from './slide'
import './find-slide.css'

/**
 * Full-screen Find layer that slides in from the right and out on back.
 */
export function FindSlideOver() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!leaving) {
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = findSlideDurationMs(reduceMotion)
    const target = findLeaveLocation(isFromSearch(state))
    const timer = window.setTimeout(() => {
      navigate(target.pathname, { state: target.state })
    }, delay)

    return () => window.clearTimeout(timer)
  }, [leaving, navigate, state])

  return (
    <div
      className={cn(
        'find-slide-over absolute inset-0 z-50 bg-background',
        leaving && 'find-slide-over-out'
      )}
    >
      <FindScreen onLeave={() => setLeaving(true)} />
    </div>
  )
}
