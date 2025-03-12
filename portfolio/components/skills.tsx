import { Code, Database, GitBranch, Globe, Server, Smartphone } from "lucide-react"

const skills = [
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Responsive Design", icon: Smartphone },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#4CAF50]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <skill.icon className="w-12 h-12 text-[#FFC107] mb-4" />
              <span className="text-lg font-semibold text-[#333333]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

