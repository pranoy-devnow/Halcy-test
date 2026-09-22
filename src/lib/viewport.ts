/** Outer phone preview width (device chrome included). */
export const PHONE_PREVIEW_WIDTH_PX = 390

/** Outer phone preview height. */
export const PHONE_PREVIEW_HEIGHT_PX = 844

/** @deprecated Use {@link PHONE_PREVIEW_WIDTH_PX}. Native shell max width. */
export const PHONE_VIEWPORT_WIDTH_PX = PHONE_PREVIEW_WIDTH_PX

/**
 * Uniform scale so the phone preview fits the browser viewport without reflowing.
 *
 * @param viewportWidth - Available width in px
 * @param viewportHeight - Available height in px
 * @param paddingPx - Horizontal and vertical inset around the frame
 */
export function phonePreviewScale(
  viewportWidth: number,
  viewportHeight: number,
  paddingPx: number
): number {
  const availW = Math.max(0, viewportWidth - paddingPx)
  const availH = Math.max(0, viewportHeight - paddingPx)

  if (availW === 0 || availH === 0) {
    return 1
  }

  return Math.min(
    1,
    availW / PHONE_PREVIEW_WIDTH_PX,
    availH / PHONE_PREVIEW_HEIGHT_PX
  )
}
