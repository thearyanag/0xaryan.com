import type { NoteMDXFileData } from "@/lib/notes"
import Link from "next/link"

type NoteItemProps = {
  note: NoteMDXFileData
  isSelected?: boolean
}

export function NoteItem({ note, isSelected }: NoteItemProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 group ${
        isSelected
          ? "bg-gradient-to-r from-accent/10 to-transparent -mx-2 px-2 border-l-2 border-l-accent/50"
          : ""
      }`}
    >
      <Link
        href={`/notes/${note.slug}`}
        prefetch={true}
        className="text-gray-200 hover:text-accent transition-colors duration-200"
      >
        {note.metadata.title.toLowerCase()}
      </Link>
      <div className="flex items-center text-sm text-gray-400 shrink-0">
        <span>
          {new Date(note.metadata.date)
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
            .toLowerCase()}
        </span>
      </div>
    </div>
  )
}


