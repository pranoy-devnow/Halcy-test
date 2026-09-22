import { Cloud } from 'lucide-react'

type FindAvatarProps = {
  role: 'agent' | 'user'
}

/**
 * Circular face for Find chrome: cloud for the agent, PM initials for you.
 */
export function FindAvatar({ role }: FindAvatarProps) {
  if (role === 'user') {
    return (
      <span
        aria-hidden
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-medium"
      >
        PM
      </span>
    )
  }

  return (
    <span
      aria-hidden
      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background"
    >
      <Cloud className="size-3.5" />
    </span>
  )
}
