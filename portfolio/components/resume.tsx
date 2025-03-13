import { FileText } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-[#FFC107]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#172554] mb-8">Resume / CV</h2>
        <p className="text-[#172554] mb-8">
          Download my resume to learn more about my education, work experience, and skills.
        </p>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="inline-flex items-center bg-[#172554] text-white px-6 py-3 rounded-md hover:bg-[#2980b9] transition duration-300"
        >
          <FileText className=" w-5 h-5 mr-2" />
          Download Resume (PDF)
        </a>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#172554] mb-4">Professional Profiles</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/madeleine-walsh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#172554] hover:text-[#0077b5]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/madeleine-walsh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#172554] hover:text-[#333]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

