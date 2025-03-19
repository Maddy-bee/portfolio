import { Hexagon, } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Hexagon className="w-8 h-8 text-[#FFC107] mr-2" />
            <span className="text-xl font-bold">Madeleine Walsh</span>
          </div>
          {/* <div className="flex space-x-4">
            <a
              href="https://github.com/madeleine-walsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFC107]"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/madeleine-walsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFC107]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div> */}
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Madeleine Walsh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

