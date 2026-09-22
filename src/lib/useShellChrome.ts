import { useEffect } from 'react'

export type ShellChrome = 'preview' | 'native'

/**
 * Locks document scroll and sets chrome background for preview vs native shell.
 *
 * @param mode - `preview` (dark bezel) or `native` (white app canvas)
 */
export function useShellChrome(mode: ShellChrome) {
  useEffect(() => {
    document.documentElement.dataset.shell = mode
    return () => {
      delete document.documentElement.dataset.shell
    }
  }, [mode])
}
