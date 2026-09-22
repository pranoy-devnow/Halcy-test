type TabBadgeProps = {
  label: string
}

/**
 * Red unread count on a tab icon, social-media style.
 */
export function TabBadge({ label }: TabBadgeProps) {
  return (
    <span
      aria-hidden
      className="absolute -top-1.5 -right-2.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-semibold leading-none text-white tabular-nums ring-2 ring-white"
    >
      {label}
    </span>
  )
}
