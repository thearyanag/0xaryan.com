import { Notes } from "./notes"
import { type NoteMDXFileData } from "@/lib/notes"

export function NotesList({ notes }: { notes: NoteMDXFileData[] }) {
  return <Notes notes={notes} />
}


