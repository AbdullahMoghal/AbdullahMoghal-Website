import { useNavigate } from "react-router-dom";
import { ArrowLeft, Palette, Camera, Monitor, Linkedin, Github, Instagram } from "lucide-react";

const DesignAbout = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
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
              <span className="font-medium">Back to Design Portfolio</span>
            </button>
            <span className="text-2xl font-bold text-accent">
              Abdullah
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-accent mb-8">
              About Me
            </h1>
            
            {/* Line breaker */}
            <div className="mb-8">
              <div className="w-32 h-1 bg-accent rounded-full mx-auto"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black mb-4">Creative Designer & Developer</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                I'm Abdullah Moghal, a Senior Information Systems student at UT Arlington with a passion for 
                creative design and innovative technology. My work spans across graphic design, photography, 
                and digital development, creating visual narratives that resonate with audiences.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                From capturing the energy of urban landscapes through neon photography to crafting compelling 
                poster designs and building digital platforms, I approach each project with attention to detail 
                and a commitment to visual storytelling.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                My experience includes hands-on work at Medline, TLT, and AI-PIN, where I've developed skills 
                in front-end development, AI research, data analysis, and creative design. I'm passionate about 
                using technology and design to create solutions that drive business growth and elevate user experiences.
              </p>
            </div>

            {/* Visual Elements */}
            <div className="space-y-8">
              <div className="bg-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Design Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Palette className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Visual Storytelling</h4>
                      <p className="text-sm text-black/70">Creating compelling narratives through design and imagery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Camera className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Authentic Moments</h4>
                      <p className="text-sm text-black/70">Capturing genuine emotions and experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Monitor className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Innovation</h4>
                      <p className="text-sm text-black/70">Bridging traditional and digital design methodologies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Core Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Palette className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-black">Graphic Design</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Camera className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-black">Photography</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Monitor className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-black">UI/UX Design</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg font-bold text-accent">AI</span>
                    </div>
                    <span className="text-sm font-medium text-black">AI Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-accent/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">Let's Work Together</h3>
            <p className="text-black/70 mb-6">
              Interested in collaborating on a creative project? I'm always excited to work on new challenges 
              and bring fresh perspectives to design and development projects.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/abdullahmoghal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/AbdullahMoghal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/itsmoghal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesignAbout;
