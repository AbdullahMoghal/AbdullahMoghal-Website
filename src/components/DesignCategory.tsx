import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Palette, Monitor, Camera, ChevronDown, ChevronUp } from "lucide-react";

const DesignCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Convert category from URL format to display format
  const getCategoryTitle = (cat: string | undefined) => {
    if (!cat) return "Design Category";
    return cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getCategoryDescription = (cat: string | undefined) => {
    switch (cat) {
      case 'graphic-design':
        return "Exploring visual communication through typography, imagery, and layout. From neon photography to poster design, each piece tells a unique story.";
      case 'ui-ux-design':
        return "Discover my user interface and user experience design projects, wireframes, and prototypes.";
      case 'photography':
        return "Capturing moments and stories through the lens. From urban landscapes to intimate portraits, each photograph tells a unique narrative.";
      default:
        return "Explore my creative design work and visual projects.";
    }
  };

  const getCategoryIcon = (cat: string | undefined) => {
    switch (cat) {
      case 'graphic-design':
        return Palette;
      case 'ui-ux-design':
        return Monitor;
      case 'photography':
        return Camera;
      default:
        return Palette;
    }
  };

  const getGraphicDesignProjects = () => {
    return [
      { 
        id: "gd-1", 
        title: "HOME AWAY FROM HOME", 
        image: "/graphic-design-assets/2updatedHomeAwayFromHome Poster Design InstaStory (3).png", 
        tags: ["Poster", "Home", "Design"] 
      },
      { 
        id: "gd-2", 
        title: "FORD MUSTANG MACH 1", 
        image: "/graphic-design-assets/poster 3.png", 
        tags: ["Automotive", "Design", "Poster"] 
      },
      { 
        id: "gd-3", 
        title: "NIKE AF1 POSTER DESIGN CONCEPT", 
        image: "/graphic-design-assets/IMG_9339.jpg", 
        tags: ["Poster", "Design", "Concept"] 
      },
    ];
  };

  const getPhotographyProjects = () => {
    return [
      { 
        id: "ph-1", 
        title: "Urban Street Photography", 
        subtitle: "CITYSCAPE SERIES",
        image: "/photography-assets/File_000 (1).png", 
        tags: ["Urban", "Street", "Architecture"] 
      },
      { 
        id: "ph-2", 
        title: "Portrait Collection", 
        subtitle: "HUMAN STORIES",
        image: "/photography-assets/File_001.png", 
        tags: ["Portrait", "People", "Emotion"] 
      },
      { 
        id: "ph-3", 
        title: "Abstract Photography", 
        subtitle: "CREATIVE VISIONS",
        image: "/photography-assets/File_002.png", 
        tags: ["Abstract", "Art", "Experimental"] 
      },
      { 
        id: "ph-4", 
        title: "Creative Composition", 
        subtitle: "ARTISTIC EXPRESSION",
        image: "/photography-assets/File_005.png", 
        tags: ["Creative", "Composition", "Art"] 
      },
      { 
        id: "ph-5", 
        title: "Visual Storytelling", 
        subtitle: "NARRATIVE PHOTOGRAPHY",
        image: "/photography-assets/File_006.png", 
        tags: ["Storytelling", "Narrative", "Visual"] 
      },
      { 
        id: "ph-6", 
        title: "Experimental Photography", 
        subtitle: "INNOVATIVE TECHNIQUES",
        image: "/photography-assets/File_007.png", 
        tags: ["Experimental", "Innovation", "Technique"] 
      },
      { 
        id: "ph-7", 
        title: "Contemporary Art", 
        subtitle: "MODERN PERSPECTIVES",
        image: "/photography-assets/File_010.png", 
        tags: ["Contemporary", "Modern", "Art"] 
      },
      { 
        id: "ph-8", 
        title: "Digital Artistry", 
        subtitle: "CREATIVE PROCESS",
        image: "/photography-assets/File_011.png", 
        tags: ["Digital", "Artistry", "Process"] 
      },
    ];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackClick}
              className="flex items-center gap-2 text-accent hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            <span className="text-2xl font-bold text-accent">
              Abdullah
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              {(() => {
                const IconComponent = getCategoryIcon(category);
                return <IconComponent className="w-12 h-12 text-accent" />;
              })()}
              <h1 className="text-5xl md:text-6xl font-black text-accent">
                {getCategoryTitle(category)}
              </h1>
            </div>
            
            {/* Line breaker */}
            <div className="mb-8">
              <div className="w-32 h-1 bg-accent rounded-full"></div>
            </div>
            
            <div className="flex items-end justify-between">
              <p className="text-lg text-black/70 max-w-2xl">
                {getCategoryDescription(category)}
              </p>
              
              {/* Read More Button - Top */}
              {(category === 'graphic-design' || category === 'photography' || category === 'ui-ux-design') && (
                <button
                  onClick={scrollToBottom}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium ml-8"
                >
                  <span>Read More!</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Graphic Design Special Layout */}
          {category === 'graphic-design' ? (
            <>
              {/* Featured Project - Virgin Hotels Only */}
              <div className="mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src="/graphic-design-assets/image.jpg" 
                      alt="Virgin Hotels Neon Sign" 
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h2 className="text-3xl font-bold text-white mb-2">Virgin Hotels Neon Sign</h2>
                      <p className="text-gray-200 mb-4">Capturing the vibrant energy of urban nightlife through dramatic neon photography</p>
                      <div className="flex gap-2">
                        {["Photography", "Neon", "Urban", "Night"].map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Grid - Three Standing Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {getGraphicDesignProjects().map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group h-full"
                  >
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between h-32">
                      <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Urban Photography - Below Three Columns */}
              <div className="mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src="/graphic-design-assets/IMG_9340.jpg" 
                      alt="Urban Photography" 
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h2 className="text-3xl font-bold text-white mb-2">Urban Photography</h2>
                      <p className="text-gray-200 mb-4">Street art series capturing the essence of urban landscapes</p>
                      <div className="flex gap-2">
                        {["Photography", "Urban", "Street", "Art"].map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Software Proficiency */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-accent mb-6">Design Software Proficiency</h3>
                <p className="text-black/70 leading-relaxed mb-8">
                  Proficient in industry-standard design and photo editing software, enabling me to bring creative visions to life 
                  with precision and professional quality. From raw photo processing to polished graphic design, I leverage these 
                  tools to create compelling visual narratives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">PS</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">Adobe Photoshop</h4>
                    <p className="text-sm text-black/70">Advanced photo editing, compositing, and digital art creation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">LR</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">Adobe Lightroom</h4>
                    <p className="text-sm text-black/70">Professional photo processing and color grading</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">CV</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">Canva</h4>
                    <p className="text-sm text-black/70">Quick design solutions and social media graphics</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">AI</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">AI Tools</h4>
                    <p className="text-sm text-black/70">Midjourney, DALL-E, and other creative AI platforms</p>
                  </div>
                </div>
              </div>

              {/* Additional Content */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-accent mb-4">Design Philosophy</h3>
                <p className="text-black/70 leading-relaxed mb-6">
                  My graphic design work focuses on creating visual narratives that resonate with audiences. 
                  Whether it's capturing the energy of urban landscapes through neon photography or crafting 
                  compelling poster designs for events, each project is approached with attention to detail 
                  and a commitment to visual storytelling.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Palette className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Visual Identity</h4>
                    <p className="text-sm text-black/70">Creating cohesive brand experiences through thoughtful design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Photography</h4>
                    <p className="text-sm text-black/70">Capturing moments that tell compelling visual stories</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Monitor className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Digital Design</h4>
                    <p className="text-sm text-black/70">Bridging traditional and digital design methodologies</p>
                  </div>
                </div>
              </div>

              {/* Back to Top Button - Bottom */}
              <div className="text-center">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium"
                >
                  <ChevronUp className="w-5 h-5" />
                  <span>Back to Top</span>
                </button>
              </div>
            </>
          ) : category === 'ui-ux-design' ? (
            <>
              {/* Featured Project - OpportuneAI */}
              <div className="mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src="/opportuneai-screenshots/screenshot-2.png" 
                      alt="OpportuneAI Scholarship Matches" 
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-8">
                      <h2 className="text-xl md:text-3xl font-bold text-white mb-2">OpportuneAI Landing Page</h2>
                      <p className="text-sm md:text-base text-gray-200 mb-4">AI-powered scholarship matching platform with clean, modern interface design</p>
                      <div className="flex flex-wrap gap-2">
                        {["UI/UX", "Landing Page", "AI", "Scholarships"].map((tag) => (
                          <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-white/20 text-white text-xs md:text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* OpportuneAI Screenshots Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src="/opportuneai-screenshots/screenshot-3.png" 
                    alt="OpportuneAI Interface" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src="/opportuneai-screenshots/screenshot-4.png" 
                    alt="OpportuneAI Features" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src="/opportuneai-screenshots/screenshot-5.png" 
                    alt="OpportuneAI Mobile" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
              </div>

              {/* Featured Project - MSA Website */}
              <div className="mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src="/msa-website-screenshots/screenshot-1.png" 
                      alt="MSA Website Homepage" 
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-8">
                      <h2 className="text-xl md:text-3xl font-bold text-white mb-2">MSA Website Homepage</h2>
                      <p className="text-sm md:text-base text-gray-200 mb-4">Muslim Student Association website with responsive design and community features</p>
                      <div className="flex flex-wrap gap-2">
                        {["UI/UX", "Website", "Community", "Responsive"].map((tag) => (
                          <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-white/20 text-white text-xs md:text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MSA Website Screenshots Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src="/msa-website-screenshots/screenshot-2.png" 
                    alt="MSA Website Features" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src="/msa-website-screenshots/screenshot-3.png" 
                    alt="MSA Website Interface" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src="/msa-website-screenshots/screenshot-4.png" 
                    alt="MSA Website Additional" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
              </div>

              {/* UI/UX Tools & Technologies */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-accent mb-6">UI/UX Design Tools & Technologies</h3>
                <p className="text-black/70 leading-relaxed mb-8">
                  Leveraging modern design tools and frameworks to create intuitive, responsive, and user-friendly interfaces. 
                  From wireframing to prototyping, I focus on creating seamless user experiences that drive engagement and functionality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">Figma</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">Figma</h4>
                    <p className="text-sm text-black/70">Wireframing, prototyping, and collaborative design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">React</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">React</h4>
                    <p className="text-sm text-black/70">Component-based UI development</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">CSS</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">CSS/Tailwind</h4>
                    <p className="text-sm text-black/70">Responsive styling and design systems</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">UX</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">User Research</h4>
                    <p className="text-sm text-black/70">User testing and experience optimization</p>
                  </div>
                </div>
              </div>

              {/* UI/UX Philosophy */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-accent mb-4">UI/UX Design Philosophy</h3>
                <p className="text-black/70 leading-relaxed mb-6">
                  My approach to UI/UX design centers on creating interfaces that are not only visually appealing but also 
                  functionally intuitive. I believe in user-centered design principles, focusing on accessibility, usability, 
                  and seamless user journeys that enhance the overall experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">User-Centered Design</h4>
                    <p className="text-sm text-black/70">Prioritizing user needs and behaviors in every design decision</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Responsive Design</h4>
                    <p className="text-sm text-black/70">Ensuring optimal experience across all devices and screen sizes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Accessibility</h4>
                    <p className="text-sm text-black/70">Creating inclusive designs that work for all users</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Performance</h4>
                    <p className="text-sm text-black/70">Optimizing for speed and efficiency in user interactions</p>
                  </div>
                </div>
              </div>

              {/* Back to Top Button */}
              <div className="text-center">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium"
                >
                  <ChevronUp className="w-5 h-5" />
                  <span>Back to Top</span>
                </button>
              </div>
            </>
          ) : category === 'photography' ? (
            <>
              {/* Featured Project - First Photography */}
              <div className="mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src="/photography-assets/File_003.png" 
                      alt="Featured Photography" 
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h2 className="text-3xl font-bold text-white mb-2">Featured Photography</h2>
                      <p className="text-gray-200 mb-4">Capturing the essence of moments through creative composition and lighting</p>
                      <div className="flex gap-2">
                        {["Photography", "Creative", "Composition"].map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photography Grid - Images Only */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {getPhotographyProjects().map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Photography Software Proficiency */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-accent mb-6">Photography & Editing Tools</h3>
                <p className="text-black/70 leading-relaxed mb-8">
                  Proficient in professional photography equipment and post-processing software, enabling me to capture 
                  and enhance images with precision and artistic vision. From camera settings to final edits, I leverage 
                  these tools to create compelling visual narratives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">DSLR Photography</h4>
                    <p className="text-sm text-black/70">Professional camera operation and composition</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">LR</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">Adobe Lightroom</h4>
                    <p className="text-sm text-black/70">Professional photo processing and color grading</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">PS</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">Adobe Photoshop</h4>
                    <p className="text-sm text-black/70">Advanced photo editing and retouching</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">AI</span>
                    </div>
                    <h4 className="font-semibold text-black mb-2">AI Enhancement</h4>
                    <p className="text-sm text-black/70">Modern AI tools for creative photo enhancement</p>
                  </div>
                </div>
              </div>

              {/* Photography Philosophy */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-accent mb-4">Photography Philosophy</h3>
                <p className="text-black/70 leading-relaxed mb-6">
                  My photography work focuses on capturing authentic moments and emotions. Whether it's the energy of urban 
                  landscapes, the intimacy of portraits, or the abstract beauty in everyday scenes, each photograph is 
                  approached with attention to composition, lighting, and storytelling.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Street Photography</h4>
                    <p className="text-sm text-black/70">Capturing candid moments in urban environments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Palette className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Portrait Work</h4>
                    <p className="text-sm text-black/70">Intimate and expressive human photography</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Monitor className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Abstract Art</h4>
                    <p className="text-sm text-black/70">Creative and experimental visual compositions</p>
                  </div>
                </div>
              </div>

              {/* Back to Top Button - Bottom */}
              <div className="text-center">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium"
                >
                  <ChevronUp className="w-5 h-5" />
                  <span>Back to Top</span>
                </button>
              </div>
            </>
          ) : (
            /* Default Layout for other categories */
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">
                        {getCategoryTitle(category)} Work {item}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-3">
                        Sample Project {item}
                      </h3>
                      <p className="text-black/70 text-sm leading-relaxed">
                        This is a placeholder for {getCategoryTitle(category).toLowerCase()} work. 
                        More content will be added here.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coming Soon Message */}
              <div className="mt-16 text-center">
                <div className="bg-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-accent mb-4">
                    More Coming Soon!
                  </h3>
                  <p className="text-black/70">
                    I'm currently working on adding more {getCategoryTitle(category).toLowerCase()} projects to this section. 
                    Check back soon for updates!
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default DesignCategory;
