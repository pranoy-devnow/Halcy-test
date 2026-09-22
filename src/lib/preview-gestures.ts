/**
 * Trackpad pinch-to-zoom in Chrome sends wheel events with `ctrlKey` set.
 */
export function isTrackpadPinchZoom(event: WheelEvent): boolean {
  return event.ctrlKey
}
