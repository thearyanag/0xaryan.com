"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export function OpenExternal({
  url,
  fallbackPath = "/blog",
}: {
  url: string
  fallbackPath?: string
}) {
  const router = useRouter()
  const hasOpenedRef = useRef(false)

  useEffect(() => {
    if (hasOpenedRef.current) return
    hasOpenedRef.current = true
    window.open(url, "_blank", "noopener,noreferrer")
    router.replace(fallbackPath)
  }, [url, fallbackPath, router])

  return (
    <div className="text-gray-300">
      Opening external post in a new tab...
      <br />
      If nothing happens,{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-accent"
      >
        click here
      </a>
      .
    </div>
  )
}


