import { useLocation } from 'react-router-dom'
import { ChevronLeft, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { isFromSearch } from '@/features/explore/searchSheet'
import { FindAvatar } from './FindAvatar'

const CHROME_BUTTON = 'rounded-full bg-background shadow-sm'

type FindChromeProps = {
  settingsOpen: boolean
  onSettings: () => void
  onLeave: () => void
}

/**
 * Solid white Find header: back, Agent identity, and settings.
 */
export function FindChrome({ settingsOpen, onSettings, onLeave }: FindChromeProps) {
  const { state } = useLocation()
  const fromSearch = isFromSearch(state)
  const backLabel = settingsOpen
    ? 'Back to chat'
    : fromSearch
      ? 'Back to search'
      : 'Back to Explore'

  return (
    <div className="relative z-30 flex shrink-0 items-center gap-3 bg-background px-4 pt-12 pb-3">
      <h1 className="sr-only">Find</h1>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={backLabel}
        className={CHROME_BUTTON}
        onClick={() => {
          if (settingsOpen) {
            onSettings()
            return
          }

          onLeave()
        }}
      >
        <ChevronLeft />
      </Button>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <FindAvatar role="agent" />
        <p className="truncate text-sm font-medium">Agent</p>
      </div>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={settingsOpen ? 'Close settings' : 'Settings'}
        aria-expanded={settingsOpen}
        className={CHROME_BUTTON}
        onClick={onSettings}
      >
        <Settings />
      </Button>
    </div>
  )
}
