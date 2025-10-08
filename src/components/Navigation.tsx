import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import PortfolioToggle from "./PortfolioToggle";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleMode } = usePortfolio();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleDesignNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  // Close mobile menu when mode changes
  useEffect(() => {
    setIsOpen(false);
  }, [mode]);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
      mode === 'design' 
        ? 'bg-black/30 text-white' 
        : 'bg-white/90 text-accent'
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-colors cursor-pointer ${
              mode === 'design' 
                ? 'text-white hover:text-gray-300' 
                : 'text-accent hover:text-black'
            }`}>
              Abdullah
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {mode === 'design' ? (
              <>
                <button 
                  onClick={() => handleDesignNavigation("/")} 
                  className="font-medium transition-colors text-white hover:text-gray-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleDesignNavigation("/design-about")} 
                  className="font-medium transition-colors text-white hover:text-gray-300"
                >
                  About
                </button>
                <button 
                  onClick={() => handleDesignNavigation("/design-contact")} 
                  className="font-medium transition-colors text-white hover:text-gray-300"
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="font-medium transition-colors text-accent hover:text-black"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("experience")} 
                  className="font-medium transition-colors text-accent hover:text-black"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("projects")} 
                  className="font-medium transition-colors text-accent hover:text-black"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="font-medium transition-colors text-accent hover:text-black"
                >
                  Contact
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              mode === 'design' 
                ? 'text-white hover:text-gray-300' 
                : 'text-accent hover:text-black'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {mode === 'design' ? (
              <>
                <button 
                  onClick={() => handleDesignNavigation("/")} 
                  className="block w-full text-left font-medium transition-colors text-white hover:text-gray-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleDesignNavigation("/design-about")} 
                  className="block w-full text-left font-medium transition-colors text-white hover:text-gray-300"
                >
                  About
                </button>
                <button 
                  onClick={() => handleDesignNavigation("/design-contact")} 
                  className="block w-full text-left font-medium transition-colors text-white hover:text-gray-300"
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="block w-full text-left font-medium transition-colors text-accent hover:text-black"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("experience")} 
                  className="block w-full text-left font-medium transition-colors text-accent hover:text-black"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("projects")} 
                  className="block w-full text-left font-medium transition-colors text-accent hover:text-black"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="block w-full text-left font-medium transition-colors text-accent hover:text-black"
                >
                  Contact
                </button>
              </>
            )}
            <div className="pt-4">
              <PortfolioToggle key="mobile-toggle" />
            </div>
          </div>
        )}
      </div>
    </nav>

    {/* Desktop Toggle Button - Only show on desktop, positioned outside nav */}
    <div className="hidden lg:block fixed bottom-6 right-6 z-[60]">
      <PortfolioToggle key={`desktop-toggle-${mode}`} />
    </div>
    </>
  );
};

export default Navigation;
