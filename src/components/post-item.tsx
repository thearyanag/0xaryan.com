import { type MDXFileData } from "@/lib/blog"
import Link from "next/link"

type PostItemProps = {
  post: MDXFileData
  isSelected?: boolean
}

export function PostItem({ post, isSelected }: PostItemProps) {
  const isExternal = Boolean(post.metadata.url)
  const href = isExternal ? (post.metadata.url as string) : `/blog/${post.slug}`
  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 group ${
        isSelected
          ? "bg-gradient-to-r from-accent/10 to-transparent -mx-2 px-2 border-l-2 border-l-accent/50"
          : ""
      }`}
    >
      <Link
        href={href}
        prefetch={true}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-gray-200 hover:text-accent transition-colors duration-200"
      >
        {post.metadata.title.toLowerCase()}
      </Link>
      <div className="flex items-center text-sm text-gray-400 shrink-0">
        <span>
          {new Date(post.metadata.date)
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
