import { notFound } from "next/navigation"
import { MDX } from "../../blog/[slug]/mdx"
import { getNoteBySlug } from "@/lib/notes"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function Note({ params }: PageProps) {
  const slug = (await params).slug
  const note = getNoteBySlug(slug)
  if (!note) {
    notFound()
  }

  return (
    <section className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-4 text-white">
        <span className="text-accent mr-2">*</span>
        {note.metadata.title}
      </h1>

      <div className="mb-8 flex items-center justify-between text-sm text-gray-400">
        <span>{formatDate(note.metadata.date)}</span>
      </div>

      <article className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-white hover:prose-a:underline">
        <MDX source={note.content} />
      </article>
    </section>
  )
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}


