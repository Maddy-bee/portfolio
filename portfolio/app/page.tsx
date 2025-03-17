import Header from "@/components/header"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import SoftSkills from "@/components/soft-skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ProfessionalProfiles from "@/components/professional-profiles"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBE6]">
      <Header />
      <Hero />
      <TechStack />
      <SoftSkills />
      <Projects />
      <ProfessionalProfiles />
      <Contact />
      <Footer />
    </main>
  )
}

