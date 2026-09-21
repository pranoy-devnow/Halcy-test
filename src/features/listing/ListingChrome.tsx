import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Heart, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { shareListing } from './shareListing'

type ListingChromeProps = {
  title: string
}

const CHROME_BUTTON =
  'pointer-events-auto rounded-full bg-background shadow-sm'

/**
 * Pinned back / share / like bar. Sits over the photo and stays put on scroll.
 */
export function ListingChrome({ title }: ListingChromeProps) {
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 pt-12">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Back to Explore"
        className={CHROME_BUTTON}
        onClick={() => navigate('/')}
      >
        <ChevronLeft />
      </Button>
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={`Share ${title}`}
          className={CHROME_BUTTON}
          onClick={() => {
            void shareListing(title, window.location.href).catch((error) => {
              console.error(error)
            })
          }}
        >
          <Share />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={liked ? 'Remove from saved' : 'Save listing'}
          aria-pressed={liked}
          className={CHROME_BUTTON}
          onClick={() => setLiked((value) => !value)}
        >
          <Heart className={liked ? 'fill-foreground' : undefined} />
        </Button>
      </div>
    </div>
  )
}
