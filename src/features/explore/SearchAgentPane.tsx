/**
 * Agent mode on the search sheet. Local prompt only — no live agent yet.
 */
export function SearchAgentPane() {
  return (
    <div className="px-5 pt-6">
      <p className="font-heading text-3xl font-normal">Where should we go?</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Say it the way you’d say it to a friend.
      </p>
    </div>
  )
}
