const SHELL_PATHS = new Set(['/', '/trips', '/profile'])

/**
 * Path the tab shell should keep showing while Find is open.
 *
 * @param pathname - Current location
 * @param previousPath - Last non-Find path
 * @returns A shell tab path, or the current path when Find is not open
 */
export function findUnderlayPath(pathname: string, previousPath: string): string {
  if (pathname !== '/find') {
    return pathname
  }

  return SHELL_PATHS.has(previousPath) ? previousPath : '/'
}
