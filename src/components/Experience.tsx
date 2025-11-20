import { Building2, Briefcase, Monitor, HardDrive, Film, Image, GraduationCap, Code, Database, Brain, Globe } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python, Java, JavaScript", "TypeScript, SQL, HTML, CSS, JSON"]
  },
  {
    category: "Development & Methodologies", 
    items: ["Web Development, API Integration", "Agile, CI/CD, Cloud Deployment"]
  },
  {
    category: "Data & Analytics",
    items: ["Data Analysis, Prompt Engineering", "Tableau, Power BI"]
  },
  {
    category: "Development Tools",
    items: ["IntelliJ, VS Code, Git, SourceTree", "React, Angular, Flask API, FastAPI"]
  },
  {
    category: "Databases & Cloud",
    items: ["Oracle, MySQL, Azure", "Microsoft 365"]
  },
  {
    category: "Project Management",
    items: ["Jira, Miro, Visio, Mermaid"]
  }
];

const experiences = [
  {
    icon: Database,
    date: "Nov 2025 - Present",
    title: "Data Analytics & Insights Intern",
    company: "FaZe Clan",
    description: "Leading analytics for creator and esports initiatives by consolidating fan engagement, social sentiment, and campaign performance data into actionable dashboards that guide marketing and partnership strategy."
  },
  {
    icon: Building2,
    date: "Sep 2025 - Present",
    title: "Student Assistant - College of Business Ambassador",
    company: "The University of Texas at Arlington",
    description: "Representing the College of Business and assisting with student engagement initiatives and campus events."
  },
  {
    icon: Code,
    date: "Jan 2025 - Present",
    title: "Muslim Student Association - Web Developer",
    company: "The University of Texas at Arlington",
    description: "Developed and deployed a user-friendly platform featuring event scheduling, donation systems, and membership registration that increased accessibility and engagement for 200+ students and community members.",
    noIcon: true
  },
  {
    icon: Briefcase,
    date: "Jun 2025 - Aug 2025",
    title: "IT Business Systems Intern",
    company: "Medline Industries, LP",
    description: "Developed scalable systems and business intelligence solutions, working on data integration and system optimization projects."
  },
  {
    icon: Monitor,
    date: "Feb 2025 - Apr 2025",
    title: "Data Research Intern",
    company: "TLT - Tomorrow's Leaders Today, Inc",
    description: "Analyzed complex datasets to drive business insights and improve operational efficiency through data-driven decision making."
  },
  {
    icon: Film,
    date: "May 2024 - Aug 2024",
    title: "Research Intern",
    company: "Al-Pin",
    description: "Conducted cutting-edge AI research and development, focusing on machine learning applications and model evaluation."
  },
  {
    icon: Building2,
    date: "Jun 2022 - Aug 2022",
    title: "AV Tech Intern",
    company: "Valley Ranch Islamic Center (VRIC)",
    description: "Managed audiovisual systems and technical support for community events and religious services."
  }
];

const Experience = () => {
  return (
        <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* About Abdullah Section */}
        <div className="mb-20">
          <h3 className="text-5xl md:text-6xl font-black text-accent mb-8">About Abdullah</h3>
          {/* Line breaker */}
          <div className="mb-8">
            <div className="w-32 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-lg text-black leading-relaxed mb-12 max-w-4xl">
            Hi! My name is Abdullah Moghal, a Senior Information Systems student at UT Arlington with experience in software engineering, AI, business/data analysis, and design. From developing scalable systems at Medline to applying AI research and building digital platforms, my work has centered on creating solutions that drive business growth, efficiency, and user engagement. I'm passionate about using front-end development and AI innovation to deliver technology that transforms organizations and elevates experiences.
          </p>
          
          {/* Skills Section - Organized Categories */}
          <div className="mb-16">
                <h3 className="text-5xl md:text-6xl font-black text-accent mb-8">Skills</h3>
                {/* Line breaker */}
                <div className="mb-8">
                  <div className="w-32 h-1 bg-accent rounded-full"></div>
                </div>
            
            {/* Technical Skills */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-accent mb-6">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.slice(0, 3).map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <h5 className="text-lg font-semibold text-accent">{skill.category}</h5>
                    <ul className="space-y-1">
                      {skill.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-black text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-accent mb-6">Tools & Platforms</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.slice(3, 6).map((skill, index) => (
                  <div key={index + 3} className="space-y-3">
                    <h5 className="text-lg font-semibold text-accent">{skill.category}</h5>
                    <ul className="space-y-1">
                      {skill.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-black text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Experience Section */}
        <div className="relative">
              <h3 className="text-5xl md:text-6xl font-black text-accent mb-8">Experience Timeline</h3>
              {/* Line breaker */}
              <div className="mb-12">
                <div className="w-32 h-1 bg-accent rounded-full"></div>
              </div>
          
          {/* Two Column Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-accent/20"></div>
              
              <div className="space-y-8">
                {experiences.slice(0, 3).map((exp, index) => {
                  const IconComponent = exp.icon;
                  return (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline dot - hidden if noIcon flag is set */}
                      {exp.noIcon ? (
                        <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center"></div>
                      ) : (
                        <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-accent rounded-full border-2 border-white shadow-md flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="ml-6 flex-1">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="mb-2">
                            <h4 className="text-lg font-bold text-black">{exp.title}</h4>
                            <span className="text-sm font-bold text-accent">{exp.date}</span>
                          </div>
                          <p className="text-sm font-semibold text-accent mb-2">{exp.company}</p>
                          <p className="text-sm text-black leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-accent/20"></div>
              
              <div className="space-y-8">
                {experiences.slice(3, 6).map((exp, index) => {
                  const IconComponent = exp.icon;
                  return (
                    <div key={index + 3} className="relative flex items-start">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-accent rounded-full border-2 border-white shadow-md flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="ml-6 flex-1">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="mb-2">
                            <h4 className="text-lg font-bold text-black">{exp.title}</h4>
                            <span className="text-sm font-bold text-accent">{exp.date}</span>
                          </div>
                          <p className="text-sm font-semibold text-accent mb-2">{exp.company}</p>
                          <p className="text-sm text-black leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
