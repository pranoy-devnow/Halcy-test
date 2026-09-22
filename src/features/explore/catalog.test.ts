import assert from 'node:assert/strict'
import { test } from 'node:test'
import { EXPLORE_SECTIONS, getListingById, listingsForSection } from './catalog.ts'
import { listingMatchesCategory } from './listingThemes.ts'
import type { ExploreTheme } from './types.ts'

const THEMES: readonly ExploreTheme[] = [
  'weekend',
  'beaches',
  'bachelorette',
  'picturesque',
]

const MIN_SHELF_CARDS = 6

test('every Explore shelf has enough cards for See more to move', () => {
  for (const section of EXPLORE_SECTIONS) {
    const listings = listingsForSection(section, 'all')
    assert.ok(
      listings.length >= MIN_SHELF_CARDS,
      `${section.id} has ${listings.length} cards`
    )
  }
})

test('every shelf listing id resolves in the catalog', () => {
  for (const section of EXPLORE_SECTIONS) {
    for (const id of section.listingIds) {
      assert.ok(getListingById(id), `missing listing ${id}`)
    }
  }
})

test('every catalog listing is tagged with at least one theme', () => {
  for (const section of EXPLORE_SECTIONS) {
    for (const listing of listingsForSection(section, 'all')) {
      assert.ok(
        THEMES.some((theme) => listingMatchesCategory(listing.id, theme)),
        `${listing.id} has no theme`
      )
    }
  }
})
