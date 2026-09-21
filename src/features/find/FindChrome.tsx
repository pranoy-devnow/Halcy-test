import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { isFromSearch, OPEN_SEARCH_STATE } from '@/features/explore/searchSheet'
import { FindDateChip } from './FindDateChip'

type FindChromeProps = {
  date: string
}

/**
 * Solid white Find header: back, and the date of the day in view.
 */
export function FindChrome({ date }: FindChromeProps) {
  const navigate = useNavigate()
  const { state } = useLocation()
  const fromSearch = isFromSearch(state)

  return (
    <div className="relative z-30 shrink-0 bg-background px-4 pt-12 pb-3">
      <h1 className="sr-only">Find</h1>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={fromSearch ? 'Back to search' : 'Back to Explore'}
        className="rounded-full bg-background shadow-sm"
        onClick={() => {
          if (fromSearch) {
            navigate('/', { state: OPEN_SEARCH_STATE })
            return
          }

          navigate('/')
        }}
      >
        <ChevronLeft />
      </Button>
      <p className="pointer-events-none absolute inset-x-0 top-14 flex justify-center">
        <FindDateChip date={date} />
      </p>
    </div>
  )
}
