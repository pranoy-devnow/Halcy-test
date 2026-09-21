import assert from 'node:assert/strict'
import { test } from 'node:test'
import { groupStopsByDay } from './groupStops.ts'
import type { ItineraryStop } from './types.ts'

const stop = (
  day: string,
  title: string
): ItineraryStop => ({ day, title, note: `${title} note` })

test('groups consecutive stops on the same day', () => {
  const days = groupStopsByDay([
    stop('Day 1', 'Tram'),
    stop('Day 1', 'Market'),
    stop('Day 2', 'Walk'),
  ])

  assert.deepEqual(
    days.map((group) => ({
      day: group.day,
      titles: group.stops.map((item) => item.title),
    })),
    [
      { day: 'Day 1', titles: ['Tram', 'Market'] },
      { day: 'Day 2', titles: ['Walk'] },
    ]
  )
})

test('keeps first-seen day order when days are not contiguous', () => {
  const days = groupStopsByDay([
    stop('Friday', 'Arrive'),
    stop('Sunday', 'Leave'),
    stop('Friday', 'Dinner'),
  ])

  assert.deepEqual(
    days.map((group) => group.day),
    ['Friday', 'Sunday']
  )
  assert.deepEqual(
    days[0]?.stops.map((item) => item.title),
    ['Arrive', 'Dinner']
  )
})

test('returns an empty list for no stops', () => {
  assert.deepEqual(groupStopsByDay([]), [])
})
