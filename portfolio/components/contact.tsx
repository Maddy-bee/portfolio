import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#FFFBE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#172554] mb-12">Contact Information</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-[#FFC107] mr-2" />
              <span className=" text-xl text-[#172554]">madeleine.walsh@hotmail.co.uk</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-[#FFC107] mr-2" />
              <span className="text-xl text-[#172554]">London, UK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

