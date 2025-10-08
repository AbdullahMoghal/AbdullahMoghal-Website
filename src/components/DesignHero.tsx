import { Linkedin, Github, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePortfolio } from "@/contexts/PortfolioContext";
import PortfolioToggle from "./PortfolioToggle";

const DesignHero = () => {
  const navigate = useNavigate();

  const handleButtonClick = (category: string) => {
    navigate(`/design/${category}`);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-32 pb-12 px-6 text-white"
      style={{
        backgroundImage: 'url(/design-bg.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side emptied per request */}
          <div className="space-y-8 animate-fade-in -mt-16">
          </div>

          {/* Right side - Buttons with content beneath */}
          <div className="relative animate-fade-in flex flex-col items-center justify-center h-full -ml-0 mt-32 lg:-ml-[44rem] lg:mt-56">
            {/* 1) Three buttons */}
                <div className="flex flex-col md:flex-row md:flex-nowrap items-center md:justify-center gap-3 md:gap-6 mt-4 mb-8 w-full px-4">
                  <button 
                    onClick={() => handleButtonClick('graphic-design')}
                    className="w-full max-w-[22rem] md:max-w-none md:w-auto mx-auto md:mx-0 px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer text-center"
                  >
                    Graphic Design
                  </button>
                  <button 
                    onClick={() => handleButtonClick('ui-ux-design')}
                    className="w-full max-w-[22rem] md:max-w-none md:w-auto mx-auto md:mx-0 px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer text-center"
                  >
                    UI/UX Design
                  </button>
                  <button 
                    onClick={() => handleButtonClick('photography')}
                    className="w-full max-w-[22rem] md:max-w-none md:w-auto mx-auto md:mx-0 px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer text-center"
                  >
                    Photography
                  </button>
                </div>

                {/* 2) Breakpoint line, 3) Design mode label, 4) Icons */}
                <div className="mt-0 flex flex-col items-center text-center">
                  {/* Line breaker */}
                  <div className="mt-0 mb-4">
                    <div className="w-32 h-1 bg-white rounded-full mx-auto"></div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <a href="https://linkedin.com/in/abdullahmoghal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white font-bold text-sm hover:bg-white hover:text-black transition-all cursor-pointer">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/AbdullahMoghal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white font-bold text-sm hover:bg-white hover:text-black transition-all cursor-pointer">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/itsmoghal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white font-bold text-sm hover:bg-white hover:text-black transition-all cursor-pointer">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <PortfolioToggle />
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignHero;

