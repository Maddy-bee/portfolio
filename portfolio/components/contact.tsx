import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#FFFBE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">Contact Information</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-[#FFC107] mr-2" />
              <span className="text-[#333333]">madeleine.walsh@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-[#FFC107] mr-2" />
              <span className="text-[#333333]">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-[#FFC107] mr-2" />
              <span className="text-[#333333]">City, State, Country</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

