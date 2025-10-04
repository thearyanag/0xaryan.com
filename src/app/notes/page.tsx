import { ScrambleText } from "@/components/scramble-text"
import { NotesList } from "@/components/notes-list"
import { getNotes } from "@/lib/notes"
import type { Metadata } from "next"

const notes = getNotes().sort(
  (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
)

export default async function NotesPage() {
  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="notes" />
      </h1>

      <p className="hidden sm:block text-sm text-gray-400 mb-8">
        press{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">/
        </kbd>{" "}
        to search • use{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">ctrl / ⌘ j
        </kbd>{" "}
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">ctrl / ⌘ k
        </kbd>{" "}
        or{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">↑
        </kbd>{" "}
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">↓
        </kbd>{" "}
        to navigate
      </p>

      <NotesList notes={notes} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Notes",
  description: "Short notes, explorations, and ideas.",
  openGraph: {
    images: [
      {
        url: "https://www.0xaryan.com/og/home?title=notes",
      },
    ],
  },
}


