import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "solana-agent-kit",
    description:
      "connect any ai agent to any protocol, on solana",
    role: "creator",
    period: "dec 2024 - present",
    achievements: [
      "120K+ npm downloads, 1.5K+ stars, 800+ forks, 79+ contributors",
    ],
    technologies: [
      "typescript", "solana", "ai", "agentic", "mcp",
    ],
    href: "kit.sendai.fun",
  },
  {
    title: "solana-mcp",  
    description: "server for interacting with solana, powered by the solana agent kit",
    role: "creator",
    period: "mar 2025",
    achievements: [
      "125+ stars, 40+ forks",
      "can create a solana mcp server for any protocol",
    ],
    technologies: ["mcp", "typescript"],
    href: "https://github.com/sendaifun/solana-mcp",
  },
  {
    title: "telegram-solana-starter-kit",
    description: "mini apps with phantom wallet with 95% ai written code as of august 2024",
    role: "creator",
    period: "sept 2024",
    achievements: [
      "45+ stars, 17 forks",
      "122K+ views, 600+ likes"
    ],
    technologies: ["telegram", "phantom", "ai"],
    href: "https://x.com/_0xaryan/status/1832442755097698650",
  },
  {
    title: "solana-mobile-blinks-expo-template",
    description: "integrate blinks with solana mobile",
    role: "creator",
    period: "sept 2024",
    achievements: [
      "integrated blinks with solana mobile",
      "37K+ views, 110+ likes"
    ],
    technologies: ["blinks", "solana mobile"],
    href: "https://x.com/_0xaryan/status/1839606598135587093",
  }
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i love building tools
        that make developers&apos; lives easier and exploring new technologies
        along the way.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.nexxel.dev/og/home?title=projects",
      },
    ],
  },
}
