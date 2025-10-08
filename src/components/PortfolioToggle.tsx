import { usePortfolio } from "@/contexts/PortfolioContext";
import { Palette, Briefcase } from "lucide-react";

const PortfolioToggle = () => {
  const { mode, toggleMode } = usePortfolio();

  return (
    <button
      onClick={toggleMode}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 shadow-lg hover:shadow-xl ${
        mode === 'normal' 
          ? 'border-accent text-accent hover:bg-accent hover:text-white shadow-accent/25 hover:shadow-accent/40' 
          : 'border-white text-white hover:bg-white hover:text-black shadow-white/25 hover:shadow-white/40'
      }`}
    >
          {mode === 'normal' ? (
            <>
              <Palette className="w-4 h-4" />
              <span className="text-sm font-medium">Design Portfolio</span>
            </>
          ) : (
            <>
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-medium">Resume Portfolio</span>
            </>
          )}
    </button>
  );
};

export default PortfolioToggle;

