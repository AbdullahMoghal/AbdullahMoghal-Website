import { ArrowLeft, Calendar, Users, Code, Award, Lightbulb, Target, ExternalLink, Github } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const projectData = {
  "opportune-ai": {
    title: "OpportuneAI",
    subtitle: "AI-powered scholarship matching platform",
    description: "OpportuneAI helps college students find scholarships that actually fit them through a simple, personalized, and inclusive search experience. The platform uses Google Gemini AI to match students with relevant scholarship opportunities based on their academic background, demographics, and personal circumstances.",
    longDescription: `Scholarships are meant to create opportunities, yet millions of dollars go unclaimed every year. The barrier is not student potential, but the time-consuming and discouraging process of finding reliable results.

With OpportuneAI, we make scholarship searching simple, accessible, and personal for every student. Through a short questionnaire on academics and personal background, the platform instantly delivers scholarships that match each student's profile.

The platform also offers Omnia, an AI assistant that guides students through FAQs, navigation, and scholarship resources, plus a calendar feature to save deadlines directly to personal calendars with one click.`,
    images: [
      "/opportuneai-screenshots/screenshot-1.png",
      "/opportuneai-screenshots/screenshot-2.png",
      "/opportuneai-screenshots/screenshot-3.png",
      "/opportuneai-screenshots/screenshot-4.png",
      "/opportuneai-screenshots/screenshot-5.png",
      "/opportuneai-screenshots/screenshot-6.png",
      "/opportuneai-screenshots/screenshot-7.png",
      "/opportuneai-screenshots/screenshot-8.png"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Google Gemini AI", "Node.js", "CSS"],
    hackathon: "HackUTA 7: Enter the Hacker-Verse",
    team: ["Ayman Fuad", "Zubair Rashaad", "Yousuf Riaz", "Abdullah Moghal"],
    features: [
      "AI-powered scholarship matching using Google Gemini",
      "Personalized questionnaire for accurate matching",
      "Omnia AI assistant for guidance and support",
      "Calendar integration for deadline management",
      "Spanish translation support",
      "Responsive design for all devices"
    ],
    challenges: [
      "Creating a matching system that felt both accurate and personal",
      "Balancing inclusivity with technical precision",
      "Integrating generative AI into a practical solution",
      "Building under tight hackathon deadlines"
    ],
    accomplishments: [
      "Working platform that genuinely makes scholarship searching simpler",
      "Blended empathy with technical design",
      "Delivered a tool students can trust",
      "Successfully integrated Google Gemini AI for intelligent matching"
    ],
    problem: "Millions of dollars in scholarships go unclaimed every year due to the time-consuming and discouraging process of finding reliable results.",
    solution: "A personalized scholarship search platform that connects students with opportunities through AI-powered matching.",
    impact: "Makes scholarship searching simple, accessible, and personal for every student, helping them find opportunities that actually fit their unique backgrounds."
  },
  "msa-website": {
    title: "MSA Website",
    subtitle: "UT Arlington Muslim Student Association Platform",
    description: "Developed and deployed a comprehensive platform for UT Arlington's MSA (Muslim Student Association) featuring event scheduling, donation systems, and membership registration that increased accessibility and engagement for 200+ students and community members.",
    longDescription: `The MSA Website project was designed to streamline communication and enhance the organization's online presence for UT Arlington's Muslim Student Association. The platform serves as a central hub for students and community members to stay connected with MSA activities, events, and initiatives.

Key features include event scheduling and management, donation systems for fundraising efforts, membership registration for new students, and comprehensive information about MSA programs and resources. The website has significantly improved accessibility and engagement, making it easier for students to participate in MSA activities and stay informed about upcoming events.

The project streamlined communication channels, boosted MSA's online visibility, and enhanced the organization's ability to manage outreach efficiently across the campus community.`,
    images: [
      "/msa-website-screenshots/screenshot-1.png",
      "/msa-website-screenshots/screenshot-2.png",
      "/msa-website-screenshots/screenshot-3.png",
      "/msa-website-screenshots/screenshot-4.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Responsive Design"],
    duration: "Jul 2025 - Aug 2025",
    team: ["Abdullah Moghal"],
    features: [
      "Event scheduling and management system",
      "Donation and fundraising platform",
      "Membership registration portal",
      "Community engagement tools",
      "Responsive design for all devices",
      "User-friendly navigation and interface"
    ],
    challenges: [
      "Creating an intuitive user experience for diverse student demographics",
      "Implementing secure donation processing",
      "Designing responsive layouts for various devices",
      "Ensuring accessibility compliance"
    ],
    accomplishments: [
      "Successfully deployed platform serving 200+ students and community members",
      "Streamlined MSA communication and event management",
      "Enhanced organization's online visibility and outreach",
      "Improved accessibility and engagement for campus community"
    ],
    problem: "UT Arlington's MSA lacked a centralized digital platform for communication, event management, and community engagement.",
    solution: "A comprehensive web platform featuring event scheduling, donation systems, and membership registration to centralize MSA operations and improve community engagement.",
    impact: "Increased accessibility and engagement for 200+ students and community members while streamlining communication and boosting MSA's online visibility."
  },
  "nocturne": {
    title: "Nocturne",
    subtitle: "Chrome Extension for Custom Website Themes",
    description: "Nocturne is a Chrome extension that lets you apply custom themes to all websites — not just dark mode. You can choose dark, light, sepia, or your own background and text colors to personalize your browsing experience and reduce eye strain.",
    longDescription: `Nocturne is a Chrome extension that lets you apply custom themes to all websites — not just dark mode. You can choose dark, light, sepia, or your own background and text colors to personalize your browsing experience and reduce eye strain.

The extension follows a simple Chrome Extension architecture with a popup UI for theme selection, content scripts that inject CSS filters and theme rules into websites, and the Chrome Storage API to save user preferences across sessions. It works on all websites and provides a lightweight, fast solution for consistent browsing comfort.

Perfect for students, developers, and night readers who want to reduce eye strain and create a personalized browsing experience across all websites they visit.`,
    images: [
      "/nocturne-screenshots/screenshot-1.png",
      "/nocturne-screenshots/screenshot-2.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Chrome Extension", "Chrome Storage API", "Content Scripts"],
    duration: "Sep 2025 - Sep 2025",
    team: ["Abdullah Moghal"],
    features: [
      "Force dark mode on any website",
      "Customize background and text colors to your preference",
      "One-click toggle from the toolbar",
      "Saves your settings automatically across sessions",
      "Lightweight, fast, and works everywhere",
      "Multiple theme options (dark, light, sepia, custom)"
    ],
    challenges: [
      "Creating CSS filters that work across diverse website layouts",
      "Implementing Chrome Storage API for persistent user preferences",
      "Ensuring compatibility with various website structures",
      "Building an intuitive popup interface for theme selection"
    ],
    accomplishments: [
      "Successfully published on Chrome Web Store with 4.7/5 rating",
      "Lightweight extension (38.39KiB) that works on all websites",
      "Automatic preference saving across browser sessions",
      "One-click theme switching with instant visual feedback"
    ],
    problem: "Many websites don't offer dark mode or customizable themes, causing eye strain during extended browsing sessions, especially at night.",
    solution: "A Chrome extension that applies custom themes to any website, allowing users to personalize their browsing experience with dark mode, custom colors, and other visual preferences.",
    impact: "Reduces eye strain and provides a consistent, personalized browsing experience across all websites, improving comfort for students, developers, and night readers."
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectData[projectId as keyof typeof projectData];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-black text-accent mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-black/70 mb-6">
                {project.subtitle}
              </p>
              <p className="text-lg text-black leading-relaxed mb-8">
                {project.description}
              </p>
              
                  {/* Project Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-center gap-4 mb-3">
                        {projectId === "opportune-ai" ? (
                          <>
                            <a 
                              href="https://devpost.com/software/opportuneai-b8fqov" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on Devpost"
                            >
                              <ExternalLink className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://github.com/AbdullahMoghal/opportune-ai-scholarships" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                          </>
                        ) : projectId === "msa-website" ? (
                          <>
                            <a 
                              href="https://msaatuta.org/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View Website"
                            >
                              <ExternalLink className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://github.com/utamsa/uta-website" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                          </>
                        ) : (
                          <>
                            <a 
                              href="https://chromewebstore.google.com/detail/nocturne/nhpckgdgnbdmmpbdkajggbalhokligfh" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on Chrome Web Store"
                            >
                              <ExternalLink className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://github.com/AbdullahMoghal/Nocturne-chrome-extension" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                          </>
                        )}
                      </div>
                      <p className="text-lg font-bold text-accent mb-1">Project Links</p>
                      <p className="text-sm text-black/70">
                        {projectId === "opportune-ai" ? "Devpost & GitHub" : 
                         projectId === "msa-website" ? "Website & GitHub" : 
                         "Chrome Store & GitHub"}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <Code className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-accent">{project.technologies.length}</p>
                      <p className="text-sm text-black/70">Technologies</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-accent">{project.team.length}</p>
                      <p className="text-sm text-black/70">Team Members</p>
                    </div>
                  </div>
            </div>
            
            {/* Project Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src={projectId === "opportune-ai" ? "/opportuneai-thumbnail.png" : 
                       projectId === "msa-website" ? "/msa-website-thumbnail.png" : 
                       "/nocturne-thumbnail.png"}
                  alt={`${project.title} Project Thumbnail`}
                  className="w-full h-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem & Solution */}
            <section>
              <h2 className="text-3xl font-bold text-accent mb-6">The Challenge</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">The Problem</h3>
                    <p className="text-red-700">{project.problem}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Our Solution</h3>
                    <p className="text-green-700">{project.solution}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Project Screenshots */}
            <section>
              <h2 className="text-3xl font-bold text-accent mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={image} 
                      alt={`OpportuneAI Screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-accent mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Implementation */}
            <section>
              <h2 className="text-3xl font-bold text-accent mb-6">Technical Implementation</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-accent mb-4">How We Built It</h3>
                <p className="text-black leading-relaxed mb-4">
                  {projectId === "opportune-ai" 
                    ? "We developed OpportuneAI with React and TypeScript for the frontend, and FastAPI with Python for the backend. To power intelligent matches and conversational support, we integrated the Google Gemini API, which drives both scholarship recommendations and Omnia's AI-powered responses."
                    : projectId === "msa-website"
                    ? "We developed the MSA Website using HTML, CSS, and JavaScript to create a responsive and user-friendly platform. The website features clean, semantic HTML structure for accessibility, modern CSS for responsive design across all devices, and JavaScript for interactive functionality including event scheduling, donation processing, and membership registration systems."
                    : "We developed Nocturne as a Chrome extension using HTML, CSS, and JavaScript with Chrome Extension APIs. The extension uses content scripts to inject CSS filters and theme rules into websites, a popup UI for theme selection, and the Chrome Storage API to persist user preferences across sessions. The architecture ensures lightweight performance while providing comprehensive theme customization across all websites."
                  }
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="text-center p-3 bg-white rounded-lg">
                      <p className="text-sm font-medium text-accent">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-3xl font-bold text-accent mb-6">Impact & Results</h2>
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-accent mb-4">Project Impact</h3>
                <p className="text-black leading-relaxed mb-4">{project.impact}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.accomplishments.map((accomplishment, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-black text-sm">{accomplishment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <section>
              <h3 className="text-xl font-bold text-accent mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Info */}
            <section>
              <h3 className="text-xl font-bold text-accent mb-4">Project Details</h3>
              <div className="space-y-4">
                {project.hackathon && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-black/70">Hackathon</p>
                      <p className="text-black font-medium">{project.hackathon}</p>
                    </div>
                  </div>
                )}
                
                {project.duration && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-black/70">Duration</p>
                      <p className="text-black font-medium">{project.duration}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-black/70">Team Members</p>
                    <div className="text-black font-medium">
                      {project.team.map((member, index) => (
                        <span key={index}>
                          {member}
                          {index < project.team.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Accomplishments */}
            <section>
              <h3 className="text-xl font-bold text-accent mb-4">Accomplishments</h3>
              <div className="space-y-3">
                {project.accomplishments.map((accomplishment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-black">{accomplishment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
