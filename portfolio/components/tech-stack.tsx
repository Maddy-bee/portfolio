import {
  Code,
  Database,
  FileCode,
  Globe,
  Server,
  Braces,
  TestTube,
  Cloud,
  Box,
  Layout,
  Play,
  GitBranch,
} from "lucide-react"

const techStack = [
  { name: "JavaScript", icon: Code },
  { name: "CSS", icon: FileCode },
  { name: "Node.js", icon: Server },
  { name: "React", icon: Globe },
  { name: "SQL", icon: Database },
  { name: "Next.js", icon: Layout },
  { name: "TypeScript", icon: Braces },
  { name: "Vitest", icon: TestTube },
  { name: "Salesforce", icon: Cloud },
  { name: "Pinecone", icon: Box },
  { name: "Supabase", icon: Database },
  { name: "HTML 5", icon: FileCode },
  { name: "Playwright", icon: Play },
  { name: "Git", icon: GitBranch },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-[#3498db]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <tech.icon className="w-12 h-12 text-[#FFC107] mb-4" />
              <span className="text-lg font-semibold text-[#333333]">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

