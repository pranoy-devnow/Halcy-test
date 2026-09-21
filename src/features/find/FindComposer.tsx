import { useState } from 'react'
import { Mic } from 'lucide-react'

/**
 * Capsule composer. You can type; nothing is sent.
 */
export function FindComposer() {
  const [draft, setDraft] = useState('')

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 bg-background px-5 pt-3 pb-6">
      <label className="flex h-12 items-center gap-2 rounded-full bg-secondary px-4">
        <span className="sr-only">Ask for anything</span>
        <input
          type="text"
          value={draft}
          placeholder="ask for anything"
          autoComplete="off"
          enterKeyHint="send"
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
          onChange={(event) => {
            setDraft(event.target.value)
          }}
        />
        <Mic className="size-4 shrink-0 text-muted-foreground" aria-hidden />
      </label>
    </div>
  )
}
