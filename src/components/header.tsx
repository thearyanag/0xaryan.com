import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

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
          <Building2 className="w-4 h-4" />
          co-founder <a href="https://sendai.fun" target="_blank" rel="noopener noreferrer">@sendai.fun</a>
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        currently 22 y/o. being building cool things since 17. i beleive in 
        increasing the luck surface area, and helping others do the same.
        i've flown drones into air at 19, and satellites into space at 20.
        now, building at intersection of the two most justifiably hyped fields in tech, crypto x ai.
      </p>
    </header>
  )
}
