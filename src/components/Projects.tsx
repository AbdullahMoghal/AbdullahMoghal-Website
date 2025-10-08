import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "opportune-ai",
    title: "OpportuneAI",
    description: "AI-powered scholarship matching platform using Google Gemini AI to help college students find scholarships that actually fit them.",
    image: "/opportuneai-thumbnail.png",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Google Gemini AI"],
    featured: true
  },
  {
    id: "msa-website",
    title: "MSA Website",
    description: "Developed and deployed a user-friendly platform for UT Arlington's MSA (Muslim Student Association) using HTML, CSS, and JS featuring event scheduling, donation systems, and membership registration that increased accessibility and engagement for 200+ students and community members.",
    image: "/msa-website-thumbnail.png",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    featured: true
  },
  {
    id: "nocturne",
    title: "Nocturne",
    description: "Chrome extension that lets you customize each website with your own background shades and text colors to match your style, improving accessibility and reducing eye strain. Built with HTML, CSS, and JavaScript using content scripts and Chrome Storage API.",
    image: "/nocturne-thumbnail.png",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome Extension", "Chrome Storage API"],
    featured: true
  }
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
    // Scroll to top after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
        <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-accent mb-4">Projects</h2>
          {/* Line breaker */}
          <div className="mb-8">
            <div className="w-32 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-lg text-black/70 max-w-2xl">
            Featured work showcasing technical skills and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-black/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;