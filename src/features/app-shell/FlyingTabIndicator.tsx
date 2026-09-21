type FlyingTabIndicatorProps = {
  activeIndex: number
  tabCount: number
}

/**
 * Sliding glass pill that flies under the selected tab.
 */
export function FlyingTabIndicator({
  activeIndex,
  tabCount,
}: FlyingTabIndicatorProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-1 left-1 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
      style={{
        width: `calc((100% - 0.5rem) / ${tabCount})`,
        transform: `translateX(${activeIndex * 100}%)`,
      }}
    />
  )
}
