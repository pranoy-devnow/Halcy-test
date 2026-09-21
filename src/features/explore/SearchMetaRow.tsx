type SearchMetaRowProps = {
  label: string
  value: string
}

/**
 * Floating When / Who pill under the Where card.
 */
export function SearchMetaRow({ label, value }: SearchMetaRowProps) {
  return (
    <div className="flex items-center justify-between rounded-full bg-background px-5 py-4 shadow-sm">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}
