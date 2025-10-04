import fs from "fs"
import path from "path"

export type NoteMetadata = {
  title: string
  description: string
  date: string
}

export type NoteFrontmatterParseResult = {
  metadata: NoteMetadata
  content: string
}

export type NoteMDXFileData = NoteFrontmatterParseResult & {
  slug: string
}

export function getNotes(): NoteMDXFileData[] {
  return getMDXData(path.join(process.cwd(), "notes"))
}

export function getNoteBySlug(slug: string): NoteMDXFileData | null {
  return getNotes().find((note) => note.slug === slug) ?? null
}

function tryParseFrontmatter(fileContent: string): NoteFrontmatterParseResult | null {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)

  if (!match) {
    return null
  }

  const frontmatter = match[1]

  if (!frontmatter) {
    return null
  }

  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontmatterLines = frontmatter.trim().split("\n")
  const metadata: Partial<NoteMetadata> = {}

  frontmatterLines.forEach((line) => {
    const [key, ...values] = line.split(": ")
    let value = values.join(": ").trim()
    value = value.replace(/^[\"'](.*)[\"']$/, "$1")
    if (key && value) {
      metadata[key.trim() as keyof NoteMetadata] = value
    }
  })

  return { metadata: metadata as NoteMetadata, content }
}

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string): NoteFrontmatterParseResult {
  const rawContent = fs.readFileSync(filePath, "utf-8")

  const parsed = tryParseFrontmatter(rawContent)
  if (parsed) return parsed

  // Fallbacks when there is no frontmatter
  const content = rawContent.trim()
  const titleFromHeadingMatch = /^\s*#\s+(.+)$/m.exec(content)
  const title = titleFromHeadingMatch?.[1]?.trim() ?? path.basename(filePath, path.extname(filePath))
  const description = content
    .replace(/^\s*#\s+.*$/m, "")
    .replace(/\n+/g, " ")
    .trim()
    .slice(0, 160)

  return {
    metadata: {
      title,
      description,
      // Use file mtime as a reasonable default date
      date: new Date(fs.statSync(filePath).mtime).toISOString(),
    },
    content,
  }
}

function getMDXData(dir: string): NoteMDXFileData[] {
  const mdxFiles = getMDXFiles(dir)

  return mdxFiles.map((file) => {
    const fullPath = path.join(dir, file)
    const { metadata, content } = readMDXFile(fullPath)
    const slug = path.basename(file, path.extname(file))

    // Ensure required fields exist with sensible fallbacks
    const safeMetadata: NoteMetadata = {
      title: metadata.title || slug,
      description: metadata.description || "",
      date: metadata.date || new Date(fs.statSync(fullPath).mtime).toISOString(),
    }

    return {
      metadata: safeMetadata,
      slug,
      content,
    }
  })
}


