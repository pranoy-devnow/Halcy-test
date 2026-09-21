import type { ItineraryStop } from './types'

/** A day header plus its stops, in first-seen order. */
export type ItineraryDay = {
  day: string
  stops: ItineraryStop[]
}

/**
 * Groups itinerary stops by `day`, preserving catalog order.
 */
export function groupStopsByDay(stops: readonly ItineraryStop[]): ItineraryDay[] {
  const order: string[] = []
  const byDay = new Map<string, ItineraryStop[]>()

  for (const stop of stops) {
    const existing = byDay.get(stop.day)
    if (existing) {
      existing.push(stop)
      continue
    }

    order.push(stop.day)
    byDay.set(stop.day, [stop])
  }

  return order.map((day) => ({ day, stops: byDay.get(day) ?? [] }))
}
