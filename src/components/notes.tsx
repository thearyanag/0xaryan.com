"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import type { NoteMDXFileData } from "@/lib/notes"
import { NoteItem } from "./note-item"

type NotesProps = {
  notes: NoteMDXFileData[]
}

export function Notes({ notes }: NotesProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const selectedItemRef = useRef<HTMLDivElement>(null)

  const filteredNotes = notes.filter((item) =>
    item.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  const scrollSelectedIntoView = () => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearching) {
        e.preventDefault()
        setIsSearching(true)
      } else if (e.key === "Escape" && isSearching) {
        setIsSearching(false)
        setSearchQuery("")
        document.activeElement instanceof HTMLElement &&
          document.activeElement.blur()
      } else if (
        isSearching &&
        (((e.ctrlKey || e.metaKey) && (e.key === "j" || e.key === "k")) ||
          e.key === "ArrowDown" ||
          e.key === "ArrowUp")
      ) {
        e.preventDefault()
        setSelectedIndex((prev) => {
          const isDownward =
            e.key === "ArrowDown" || ((e.ctrlKey || e.metaKey) && e.key === "j")

          const newIndex = isDownward
            ? prev < filteredNotes.length - 1
              ? prev + 1
              : prev
            : prev > 0
              ? prev - 1
              : prev

          scrollSelectedIntoView()
          return newIndex
        })
      } else if (isSearching && e.key === "Enter" && filteredNotes.length > 0) {
        router.push(`/notes/${filteredNotes[selectedIndex].slug}`)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearching, filteredNotes, selectedIndex, router])

  return (
    <>
      {isSearching && (
        <div className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto bg-black/50 backdrop-blur-sm border border-gray-800 p-2">
          <div className="flex items-center text-gray-400">
            <span className="text-accent mr-2">/</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              autoFocus
              placeholder="search notes..."
              aria-label="Search notes"
              role="searchbox"
              aria-expanded={filteredNotes.length > 0}
              aria-controls="search-results"
              aria-activedescendant={
                isSearching && filteredNotes.length > 0
                  ? `note-${filteredNotes[selectedIndex].slug}`
                  : undefined
              }
            />
          </div>
        </div>
      )}

      <div className="space-y-8 sm:space-y-4">
        {filteredNotes.map((item, index) => (
          <div
            key={item.slug}
            ref={isSearching && index === selectedIndex ? selectedItemRef : null}
          >
            <NoteItem note={item} isSelected={isSearching && index === selectedIndex} />
          </div>
        ))}
      </div>
    </>
  )
}


