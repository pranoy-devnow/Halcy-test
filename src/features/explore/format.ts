/**
 * Formats a euro amount without cents, e.g. €1,593.
 */
export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Short place label from "City, Country" — city only.
 */
export function placeNameFromLocation(location: string): string {
  const city = location.split(',')[0]?.trim()
  return city.length > 0 ? city : location
}

const PRICE_SUFFIX = {
  total: ' total',
  night: ' / night',
  person: ' / person',
} as const

/**
 * Euro amount plus listing suffix, e.g. €410 total.
 */
export function formatListingPrice(
  amount: number,
  suffix: keyof typeof PRICE_SUFFIX
): string {
  return `${formatEuro(amount)}${PRICE_SUFFIX[suffix]}`
}
