import { useRef, type ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { scrollSeeMore } from './seeMoreScroll'

type ExploreSectionProps = {
  title: string
  children: ReactNode
}

/**
 * Serif shelf title, capsule arrow, and a peeking horizontal carousel.
 */
export function ExploreSection({ title, children }: ExploreSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="space-y-3">
      <div className="flex items-end justify-between gap-3 px-5">
        <h2 className="font-heading text-2xl font-normal">{title}</h2>
        <Badge
          asChild
          radius="full"
          variant="secondary"
          className="size-7 cursor-pointer border-transparent p-0 text-foreground/70 transition-[transform,background-color,color] duration-200 ease-out hover:bg-muted hover:text-foreground active:scale-[0.97]"
        >
          <button
            type="button"
            aria-label={`See more ${title}`}
            onClick={() => scrollSeeMore(scrollerRef.current)}
          >
            <ChevronRight />
          </button>
        </Badge>
      </div>
      <div className="relative @container">
        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent"
          aria-hidden
        />
      </div>
    </section>
  )
}
