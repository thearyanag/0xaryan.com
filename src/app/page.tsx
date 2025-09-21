import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "sendai.fun",
    role: "co-founder",
    period: "dec 2024 - present",
    description: "changing way how people use crypto",
    href: "https://sendai.fun",
  }
]

const projectItems = [
  {
    title: "solana-agent-kit",
    role: "creator",
    description:
      "connect any ai agent to any protocol, on solana",
    href: "kit.sendai.fun",
  },
  {
    title: "solana-mcp",
    role: "creator",
    description:
      "server for interacting with solana, powered by the solana agent kit",
    href: "https://github.com/sendaifun/solana-mcp",
  },
  {
    title: "telegram-solana-starter-kit",
    role: "creator",
    description:
      "mini apps with phantom wallet with 95% ai written code as of august 2024",
    href: "https://x.com/_0xaryan/status/1832442755097698650",
  },
  {
    title: "solana-mobile-blinks-expo-template",
    role: "creator",
    description:
      "integrate blinks with solana mobile",
    href: "https://x.com/_0xaryan/status/1839606598135587093",
  }
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <BlogSection />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
