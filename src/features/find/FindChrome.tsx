import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Reserved find header: a frosted band so the thread scrolls under it
 * and disappears.
 */
export function FindChrome() {
  const navigate = useNavigate()

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 bg-background/30 px-4 pt-12 pb-3">
      <h1 className="sr-only">Find</h1>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Back to Explore"
        className="pointer-events-auto rounded-full bg-background shadow-sm"
        onClick={() => navigate('/')}
      >
        <ChevronLeft />
      </Button>
      <div
        className="absolute inset-x-0 top-full h-6 bg-gradient-to-b from-background/30 to-transparent"
        aria-hidden
      />
    </div>
  )
}
