import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "insight",
    title: "InsighT",
    description: "A PM dashboard that consolidates fragmented customer signals from multiple sources into a single intelligence layer. Features real-time geographic heatmaps, Customer Happiness Index tracking, and AI-powered actionable opportunities using Google Gemini 2.0 Flash.",
    image: "/Insight thumbnail.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Leaflet", "Recharts", "Google Gemini AI"],
    featured: true
  },
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

const papers = [
  {
    id: "paper-1",
    title: "CAST AI: AI-Powered Inventory Forecasting and Strategic Decision Support for SMEs",
    course: "INSY 4391: Generative AI in Business",
    description: "CAST AI is a research paper exploring how predictive and generative AI can transform inventory forecasting for small-to-medium enterprises (SMEs). The system integrates predictive analytics with GPT-4o-powered natural-language generation to forecast demand, explain recommendations in plain language, and enable data-driven procurement decisions.",
    topics: ["AI Integration", "Predictive Modeling", "SME Decision Support"]
  },
  {
    id: "paper-2",
    title: "Calmē: Mindful Energy for a Burnt-Out Generation",
    course: "Maverick Marketing Intelligence Competition 2025",
    description: "Calmē is a functional beverage concept designed for Gen Z, addressing the gap between hyperactive energy drinks and genuine wellness needs. Developed for the Maverick Marketing Intelligence Competition 2025, this project positions Calmē as a mindful alternative to traditional energy drinks, offering sustained focus without crashes. The research reveals that 77% of Gen Z consumes energy drinks, but 38% experience crashes and 18% report jitters—exposing a critical market opportunity for calm, sustained energy.",
    topics: ["Marketing Strategy", "Consumer Research", "Brand Innovation"]
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

        {/* Tech Projects Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-black text-accent mb-6">Tech Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden">
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

        {/* Research Papers Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-black text-accent mb-6">Research Papers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleProjectClick(paper.id)}
              >
                {/* Paper Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black group-hover:text-accent transition-colors mb-3">
                    {paper.title}
                  </h3>
                  {paper.course && (
                    <p className="text-base text-accent font-semibold mb-3">
                      {paper.course}
                    </p>
                  )}
                  <p className="text-black/70 text-sm mb-4 leading-relaxed">
                    {paper.description}
                  </p>
                  
                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;