/**
 * Shares a listing via the Web Share API, or copies the URL when share is
 * unavailable or fails (user cancel is ignored).
 *
 * @param title - Experience name used as the share subject
 * @param url - Absolute listing URL
 * @throws When the clipboard fallback cannot write the URL
 */
export async function shareListing(title: string, url: string): Promise<void> {
  if (typeof navigator.share === 'function') {
    try {
      await navigator.share({ title, url })
      return
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }
    }
  }

  try {
    await navigator.clipboard.writeText(url)
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'unknown error'
    throw new Error(`Failed to copy listing link for "${title}": ${reason}`)
  }
}
