//import { FileText } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ProfessionalProfiles() {
  return (
    <section id="professional-profiles" className="py-20 bg-[#FFC107]">
      <div className="container mx-auto px-4 text-center">
        {/* <h2 className="text-3xl font-bold text-[#172554] mb-8">Resume / CV</h2>
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
        </a> */}
        <div className="mt-12">
          <h3 className="text-4xl font-semibold text-[#172554] mb-10">Professional Profiles</h3>
          <div className="flex flex-col items-center justify-center ">
            <a
              href="https://www.linkedin.com/in/madeleine-walsh"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex flex-col items-center text-2xl mb-5 text-[#172554] hover:text-[#0077b5]"
            >
              <FaLinkedin className="w-8 h-8 mb-2"/> 
              LinkedIn 
            </a>
            <a
              href="https://github.com/madeleine-walsh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-2xl text-[#172554] hover:text-[#0077b5]"
            >
              <FaGithub className="w-8 h-8 mb-2" />
              GitHub 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

