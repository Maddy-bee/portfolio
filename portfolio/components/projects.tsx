"use client"

import { ExternalLink, Github } from "lucide-react";
import {useState} from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
  github: string;
}
const projects: Project[]= [
  {
    title: "Novari",
    description: "We built Novari as our final project at SoC. Our aim was to create a positive and encouraging space for users to go on their own personal growth journey and connect to communities. In two days, we created our problem statement, planned and prototyped our product on Figma. We then spent the rest of the week building our full-stack app in a mixture of mob, paired and individual programming. Finally, we created and gave a professional presentation to a group of industry experts. Key features include daily positive quotations fetched from an open-source API, the user can assert preferences for the tasks they are given and users can use filters to find local communities that suit their specific goals. Guest login details are email: guest@demo.com password: demopassword1234.",
    technologies: ["Next.js", "TypeScript", "Sentry"],
    liveDemo: "https://well-being-app-final-project.vercel.app/auth/signin",
    github: "https://github.com/AJHemmings/Novari",
  },
  {
    title: "Make a Beeline into Tech Blog",
    description: "We were tasked to create educational material on a topic of our choice. I decided to build and deploy this blog targeted at beginners. My first blog post demonstrated knowledge related to TypeScript interfaces. I also built a separate GitHub repo workshop where the user could apply their knowledge. One of the non-technical challenges was trying to come up with all of the bee related metaphors.",
    technologies: ["Next.js", "TypeScript", "CSS(Modular)"],
    liveDemo: "https://make-a-beeline-into-tech.vercel.app/",
    github: "https://github.com/Maddy-bee/beeline-blog",
  },
  {
    title: "My Movie Recommendation Library",
    description: "Users can store new movies by searching for a movie title and clicking the ‘Save my Movies’ button. First, we use the OMDB API to fetch the movie data. This data is then embedded as vectors using OpenAI's API and stored in Pinecone’s database. Later, when the user wants a personalised recommendation, they can search for a movie, genre or even a keyword to retrieve a list of results. When a user enters a query, the app generates an embedding of the input using OpenAI's API and this embedding is used to query Pinecone for the most relevant movie entries. The app then uses the results of this search to generate tailored recommendations.",
    technologies: ["Pinecone Vector Database", "OpenAI", "Tailwind"],
    liveDemo: "https://ai-hackathon-my-movie-recommendation-library.vercel.app/",
    github: "https://github.com/Maddy-bee/ai-hackathon-my-movie-recommendation-library",
  },
  {
    title: "Dungeons and Dragons API",
    description: "A personal project dedicated to a family member. Using JSON data, I have created a RESTful API with full CRUD functionality. Using a platform like Postman, the user can create, retrieve, edit and delete a list of Dungeons and Dragons characters. This was my MVP 1, my next version will be a full stack application connected to a database with a front-end UI. ",
    technologies: ["Node.js", "JavaScript", "Express"],
    github: "https://github.com/Maddy-bee/d-and-d-character-API",
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150;
  const needsReadMore = project.description.length > maxLength;

  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col ${expanded ? "h-auto" : "h-96"}`}
    >
      <div className="bg-gray-50 p-4 flex justify-end space-x-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#5b21b6] hover:text-[#9d174d]"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#172554] hover:text-[#1a1a1a]"
        >
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl text-center font-semibold text-[#172554] mb-4">{project.title}</h3>
        
        <div className="overflow-hidden flex-grow">
          <p className="text-[#172554] text-center px-2">
            {expanded 
              ? project.description 
              : needsReadMore
                ? `${project.description.substring(0, maxLength)}...`
                : project.description
            }
          </p>
          
          {needsReadMore && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-[#5b21b6] hover:text-[#9d174d] font-medium text-center block mx-auto"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
        
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-[#FFC107] text-[#172554] px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#FFFBE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#172554] mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}