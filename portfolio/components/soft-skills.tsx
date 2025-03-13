import { Users, MessageSquare, Lightbulb, ClipboardList } from "lucide-react"

const softSkills = [
  { name: "Collaboration", icon: Users, description: "Working effectively with teams to achieve common goals" },
  { name: "Communication", icon: MessageSquare, description: "Clearly conveying ideas and information to others" },
  { name: "Problem Solving", icon: Lightbulb, description: "Finding effective solutions to complex challenges" },
  { name: "Organisation", icon: ClipboardList, description: "Managing tasks and resources efficiently" },
]

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20 bg-[#FFFBE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#172554] mb-12">Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {softSkills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <skill.icon className="w-12 h-12 text-[#FFC107] mb-4" />
              <h3 className="text-xl font-semibold text-[#172554] mb-2">{skill.name}</h3>
              <p className="text-[#172554]">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

