import { groupStopsByDay, type ItineraryDay } from './groupStops'
import type { ItineraryStop } from './types'

type ListingItineraryProps = {
  stops: ItineraryStop[]
}

/**
 * Day-grouped itinerary: serif day headers on a vertical spine with square dots.
 */
export function ListingItinerary({ stops }: ListingItineraryProps) {
  const days = groupStopsByDay(stops)

  return (
    <section className="px-5">
      <h2 className="font-heading text-2xl font-normal">Itinerary</h2>
      <div className="mt-4 flex flex-col gap-6">
        {days.map((group) => (
          <DayTimeline key={group.day} group={group} />
        ))}
      </div>
    </section>
  )
}

type DayTimelineProps = {
  group: ItineraryDay
}

/** One day header plus its timed stops on a connecting line. */
function DayTimeline({ group }: DayTimelineProps) {
  return (
    <div>
      <h3 className="font-heading text-xl font-normal">{group.day}</h3>
      <ol className="relative mt-3 ml-1 border-l border-border">
        {group.stops.map((stop) => (
          <StopRow key={`${group.day}-${stop.title}`} stop={stop} />
        ))}
      </ol>
    </div>
  )
}

type StopRowProps = {
  stop: ItineraryStop
}

/** Square-dot stop: time · title, then the note. */
function StopRow({ stop }: StopRowProps) {
  return (
    <li className="relative pb-4 pl-4 last:pb-0">
      <span
        aria-hidden
        className="absolute top-1.5 -left-[3.5px] size-1.5 bg-foreground"
      />
      <p className="text-sm font-medium">
        {stop.when ? (
          <span className="text-muted-foreground">{stop.when} · </span>
        ) : null}
        {stop.title}
      </p>
      <p className="text-sm text-muted-foreground">{stop.note}</p>
    </li>
  )
}
