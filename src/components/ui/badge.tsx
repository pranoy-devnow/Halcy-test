import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import { Slot } from 'radix-ui'

/** Class variants for {@link Badge}. Square by default; `full` for capsule chips. */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        outline: 'border-border bg-background text-foreground',
      },
      radius: {
        none: 'rounded-none',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius: 'none',
    },
  }
)

/**
 * Compact square badge. Compose with `asChild` to make a badge button.
 */
function Badge({
  className,
  variant = 'default',
  radius = 'none',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'span'

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, radius, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
