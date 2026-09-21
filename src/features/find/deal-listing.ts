import type { Listing, PhotoListing } from '../explore/types'

/**
 * Returns a photo listing for a Find gift card.
 *
 * @param listing - Catalog listing from an agent turn, if any
 * @returns The stay or experience, or undefined when the listing is a flight or missing
 */
export function getDealListing(
  listing: Listing | undefined
): PhotoListing | undefined {
  if (!listing || listing.kind === 'flight') {
    return undefined
  }

  return listing
}

/**
 * Filters a turn’s catalog hits down to photo listings for gift cards.
 *
 * @param listings - Catalog listings in display order
 * @returns Stay or experience listings; flights and missing ids are omitted
 */
export function getDealListings(
  listings: readonly (Listing | undefined)[]
): PhotoListing[] {
  return listings.flatMap((listing) => {
    const deal = getDealListing(listing)
    return deal ? [deal] : []
  })
}
