import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its purpose.",
    technologies: ["React", "Node.js", "MongoDB"],
    liveDemo: "https://project1.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2 and its purpose.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    liveDemo: "https://project2.com",
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3 and its purpose.",
    technologies: ["Angular", "Django", "MySQL"],
    liveDemo: "https://project3.com",
    github: "https://github.com/yourusername/project3",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#FFFBE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#172554] mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold text-[#172554]] mb-2">{project.title}</h3>
              <p className="text-[#172554] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#FFC107] text-[#172554] px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#3498db] hover:text-[#2980b9]"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#172554] hover:text-[#1a1a1a]"
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

