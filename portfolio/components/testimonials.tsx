import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at TechCorp",
    content:
      "Your Name is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are impressive.",
  },
  {
    name: "Jane Smith",
    role: "CEO of WebSolutions",
    content:
      "Working with Your Name was a pleasure. They brought innovative ideas to the table and executed them flawlessly. I highly recommend their services.",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer at StartupX",
    content:
      "Your Name's expertise in modern web technologies is outstanding. They consistently delivered clean, efficient code and were always willing to go the extra mile.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#4CAF50]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <Quote className="w-8 h-8 text-[#FFC107] mb-4" />
              <p className="text-[#333333] mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-[#333333]">{testimonial.name}</p>
                <p className="text-sm text-[#666666]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

