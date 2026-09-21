import { useCountdown } from './useCountdown'

type ListingCountdownProps = {
  countdownTo: string
}

const UNITS = [
  { key: 'days', label: 'days' },
  { key: 'hours', label: 'hrs' },
  { key: 'minutes', label: 'min' },
  { key: 'seconds', label: 'sec' },
] as const

/**
 * Square unit countdown labeled “Book before”. Loops when it hits zero.
 */
export function ListingCountdown({ countdownTo }: ListingCountdownProps) {
  const parts = useCountdown(countdownTo)

  return (
    <div>
      <p className="mb-2 text-xs text-muted-foreground">Book before</p>
      <div className="grid grid-cols-4 gap-2">
        {UNITS.map((unit) => (
          <CountdownUnit
            key={unit.key}
            value={parts[unit.key]}
            label={unit.label}
          />
        ))}
      </div>
    </div>
  )
}

type CountdownUnitProps = {
  value: number
  label: string
}

/** One hairline cell: serif digits and a sans unit label. */
function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="border border-border px-1 py-2 text-center">
      <p className="font-heading text-3xl font-normal tabular-nums">
        {String(value).padStart(2, '0')}
      </p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  )
}
