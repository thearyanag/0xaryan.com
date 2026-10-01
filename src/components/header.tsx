import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Smile } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="aryan" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          🇮🇳/🇺🇸
        </div>
        <div className="flex items-center gap-2">
          <Smile className="w-4 h-4" />
          having fun
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        23 y/o. building cool things since 17. i beleive in
        increasing the luck surface area, and helping others do the same.
        i flew drones into the air at 19, sent satellites into space at 20,
        and gave ai agents wallets at 22. now, following my curiosity and seeing where it takes me.
      </p>
    </header>
  )
}
