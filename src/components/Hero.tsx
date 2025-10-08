import profileImage from "@/assets/profile.png";
import { Linkedin, Github } from "lucide-react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import PortfolioToggle from "./PortfolioToggle";

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-12 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-accent leading-none mb-4 tracking-tight">
                Abdullah
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-accent leading-none tracking-tight">
                Moghal
              </h1>
              
              {/* Line breaker */}
              <div className="mt-6 mb-2">
                <div className="w-32 h-1 bg-accent rounded-full"></div>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-accent font-semibold leading-tight">
              Bachelor of Science in Information Systems @ UT Arlington<br />
              <span className="font-bold">August 2023 – May 2026</span>
            </p>
            
            <p className="text-base md:text-lg text-black max-w-lg leading-relaxed">
              Experience in front-end, back-end, data analytics, and AI from internships at Medline, TLT, and AI-PIN. Passionate about delivering technology that transforms organizations.
            </p>

            {/* Social media icons - Only LinkedIn and GitHub */}
            <div className="flex gap-4 items-center">
              <a href="https://linkedin.com/in/abdullah-moghal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black flex items-center justify-center text-black font-bold text-sm hover:bg-black hover:text-white transition-all cursor-pointer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/abdullah-moghal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black flex items-center justify-center text-black font-bold text-sm hover:bg-black hover:text-white transition-all cursor-pointer">
                <Github className="w-6 h-6" />
              </a>
              <PortfolioToggle />
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-5xl font-black text-accent">3+</p>
                <p className="text-sm text-black">Years Experience</p>
              </div>
              <div>
                <p className="text-5xl font-black text-accent">3+</p>
                <p className="text-sm text-black">Internships</p>
              </div>
            </div>
          </div>

          {/* Right side - Clean profile image with glow and geometric elements */}
          <div className="relative animate-fade-in flex justify-center">
            {/* Background glow and geometric elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Dark maroon glow behind image */}
              <div className="w-full max-w-md h-[600px] bg-accent/25 rounded-2xl blur-lg scale-100"></div>
              
              {/* Geometric lines and breakpoints */}
              <div className="absolute top-12 right-8 w-16 h-16 border-2 border-accent/30 rotate-45"></div>
              <div className="absolute bottom-16 left-8 w-12 h-12 border-2 border-accent/20 rotate-12"></div>
              <div className="absolute top-1/2 left-4 w-8 h-8 border-2 border-accent/25 rotate-45"></div>
              <div className="absolute top-1/3 right-4 w-6 h-6 border-2 border-accent/20 rotate-12"></div>
              
              {/* Horizontal lines */}
              <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
              <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
              
              {/* Vertical accent lines */}
              <div className="absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-8 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
            </div>
            
            {/* Large profile image - taking 1/4 to 1/3 of page width */}
            <div className="relative w-full max-w-md z-10">
              <img 
                src={profileImage} 
                alt="Abdullah Moghal" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
