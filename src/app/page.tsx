import { Apple } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container space-y-4 py-8">
      <h1 className="text-2xl font-bold">
        Next.js 15 Tailwind v4 Shadcn Template
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="lg">Large</Button>
        <Button size="lg" variant="outline">
          Large Icon <Apple />
        </Button>
        <Button size="default">Default</Button>
        <Button size="default" variant="outline">
          Default Icon <Apple />
        </Button>
        <Button size="sm">Small</Button>
        <Button size="sm" variant="outline">
          Small Icon <Apple />
        </Button>
        <Button size="xs">Extra Small</Button>
        <Button size="xs" variant="outline">
          Extra Small Icon <Apple />
        </Button>
        <Button size="icon">
          <Apple />
        </Button>
        <Button size="iconSm">
          <Apple />
        </Button>
        <Button size="iconXs">
          <Apple />
        </Button>
      </div>
    </main>
  )
}
