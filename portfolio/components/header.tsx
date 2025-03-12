"use client"

import Link from "next/link"
import { Hexagon } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "tech-stack", "soft-skills", "projects", "resume", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
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
        <Link href="/" className="flex items-center space-x-2">
          <Hexagon className="w-8 h-8 text-[#333333]" />
          <span className="text-xl font-bold text-[#333333]">Madeleine Walsh</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {["about", "tech-stack", "soft-skills", "projects", "resume", "contact"].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className={`text-[#333333] hover:text-[#FF5722] ${activeSection === section ? "font-bold" : ""}`}
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

