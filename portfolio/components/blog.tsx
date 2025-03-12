import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "How to Build a Responsive Website with Tailwind CSS",
    excerpt: "Learn how to create a beautiful and responsive website using Tailwind CSS...",
    date: "2023-05-15",
    link: "/blog/responsive-website-tailwind",
  },
  {
    title: "Introduction to React Hooks",
    excerpt: "Discover the power of React Hooks and how they can simplify your code...",
    date: "2023-04-22",
    link: "/blog/react-hooks-intro",
  },
  {
    title: "Optimizing Your Website for Performance",
    excerpt: "Explore techniques to improve your website's loading speed and overall performance...",
    date: "2023-03-10",
    link: "/blog/website-optimization",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-[#FFFBE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#333333] mb-2">{post.title}</h3>
                <p className="text-[#666666] mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#999999]">{post.date}</span>
                  <a href={post.link} className="flex items-center text-[#4CAF50] hover:text-[#45a049]">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

