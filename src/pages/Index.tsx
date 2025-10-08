import { usePortfolio } from "@/contexts/PortfolioContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DesignHero from "@/components/DesignHero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Index = () => {
  const { mode } = usePortfolio();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {mode === 'normal' ? (
          <>
            <Hero />
            <Experience />
            <Projects />
            <Contact />
          </>
        ) : (
          <>
            <DesignHero />
            {/* Design portfolio sections can be added here later */}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
