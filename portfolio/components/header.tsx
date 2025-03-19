"use client"

import Link from "next/link"
import { Hexagon } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("")
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "tech-stack", "soft-skills", "projects", "professional-profiles", "contact"]
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight


      const isAtBottom = scrollPosition + windowHeight >= documentHeight 

      
      if (isAtBottom) {
        setActiveSection("contact")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          
          
          const sectionTop = offsetTop
          const sectionBottom = offsetTop + offsetHeight

          if (scrollPosition + windowHeight / 4 >= sectionTop && scrollPosition + windowHeight / 4 < sectionBottom) {
            setActiveSection(section)
          }
          
          else if (scrollPosition + windowHeight / 4 >= sectionBottom) {
            
            if (activeSection === section) {
              setActiveSection("")
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 
  return (
    <header className="bg-[#FFC107] p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <Hexagon className="w-8 h-8 text-[#333333]" />
          <span className="text-2xl text-[#172554] font-bold text-[#333333]">Madeleine Walsh</span>
          </div>
        <nav>
          <ul className="text-xl flex space-x-4">
            {["about", "tech-stack", "soft-skills", "projects", "professional-profiles", "contact"].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className={`text-[#172554] hover:font-bold ${activeSection === section ? "font-bold" : ""}`}
                >
                  {section
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

