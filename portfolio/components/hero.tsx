import { Flower } from "lucide-react"

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-[#FFFBE6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">Hi, I'm Madeleine Walsh</h1>
            <p className="text-xl text-[#333333] mb-6">
              A passionate web developer with a love for creating beautiful and functional websites. Just like bees
              pollinate flowers, I bring ideas to life through code.
            </p>
            <div className="flex items-center space-x-4 text-[#333333]">
              <Flower className="w-6 h-6" />
              <span>Cultivating digital gardens, one project at a time</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Madeleine Walsh"
              className="rounded-full border-4 border-[#FFC107] shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

