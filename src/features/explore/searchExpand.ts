/** A box in the same coordinate space as the search overlay. */
export type SearchBox = {
  x: number
  y: number
  width: number
  height: number
}

/** FLIP transform that places a rest-sized card over the search pill. */
export type SearchExpandTransform = {
  translateX: number
  translateY: number
  scaleX: number
  scaleY: number
}

/**
 * Maps an element's viewport rect into a root's local space.
 *
 * @param element - `getBoundingClientRect()` of the pill or card
 * @param root - `getBoundingClientRect()` of the overlay root
 * @returns Box relative to the overlay origin
 */
export function relativeSearchBox(
  element: { left: number; top: number; width: number; height: number },
  root: { left: number; top: number }
): SearchBox {
  return {
    x: element.left - root.left,
    y: element.top - root.top,
    width: element.width,
    height: element.height,
  }
}

/**
 * Transform that makes a card at `to` appear to sit on `from`.
 * Uses top-left transform origin.
 *
 * @param from - Pill box
 * @param to - Resting Where-card box
 * @returns Translate and scale from the card onto the pill
 */
export function searchExpandTransform(
  from: SearchBox,
  to: SearchBox
): SearchExpandTransform {
  return {
    translateX: from.x - to.x,
    translateY: from.y - to.y,
    scaleX: to.width === 0 ? 1 : from.width / to.width,
    scaleY: to.height === 0 ? 1 : from.height / to.height,
  }
}

/**
 * CSS `transform` string for a FLIP expand.
 *
 * @param transform - Output of {@link searchExpandTransform}
 * @returns A CSS `transform` value
 */
export function searchExpandCss(transform: SearchExpandTransform): string {
  return `translate(${transform.translateX}px, ${transform.translateY}px) scale(${transform.scaleX}, ${transform.scaleY})`
}
