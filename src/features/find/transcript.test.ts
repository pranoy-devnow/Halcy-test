import assert from 'node:assert/strict'
import { test } from 'node:test'
import { groupFindDays, type FindTurn } from './transcript.ts'

const monday: FindTurn = {
  id: 'mon-ask',
  role: 'user',
  date: '18 September 2026',
  text: 'A weekend away?',
}

const mondayReply: FindTurn = {
  id: 'mon-reply',
  role: 'agent',
  text: 'These are still open.',
}

const today: FindTurn = {
  id: 'today-ask',
  role: 'user',
  date: '21 September 2026',
  text: 'Weekend near water',
}

test('starts a new day when a turn has a date', () => {
  const days = groupFindDays([monday, mondayReply, today])
  assert.equal(days.length, 2)
  assert.deepEqual(
    days[0]?.turns.map((turn) => turn.id),
    ['mon-ask', 'mon-reply']
  )
  assert.equal(days[1]?.date, '21 September 2026')
})

test('opens a day when the first turn has no date', () => {
  const days = groupFindDays([mondayReply, monday])
  assert.equal(days[0]?.id, 'mon-reply')
  assert.equal(days[1]?.date, '18 September 2026')
})

test('returns an empty list when there are no turns', () => {
  assert.deepEqual(groupFindDays([]), [])
})
