import { useNavigate } from "react-router-dom";
import { ArrowLeft, Linkedin, Github, Instagram, Mail } from "lucide-react";

const CONTACT_EMAIL = "abdullahisi3a@gmail.com";

const DesignContact = () => {
  const navigate = useNavigate();
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=Hello%20from%20your%20design%20portfolio`;

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
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-accent mb-8">
              Contact Me
            </h1>
            
            {/* Line breaker */}
            <div className="mb-8">
              <div className="w-32 h-1 bg-accent rounded-full mx-auto"></div>
            </div>
            
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Have a creative project or collaboration in mind? Reach me by email and we can discuss how to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Email CTA */}
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-black mb-3">Email</h2>
              <p className="text-black/70 mb-6 leading-relaxed">
                The fastest way to reach me is by email. Your client will open a new message addressed to{" "}
                <span className="font-medium text-black">{CONTACT_EMAIL}</span>.
              </p>
              <a
                href={mailtoHref}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-accent/90"
              >
                <Mail className="h-5 w-5" />
                Email {CONTACT_EMAIL}
              </a>
            </div>

            {/* Socials */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 h-fit">
              <h3 className="text-xl font-bold text-black mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/abdullahmoghal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-black group-hover:text-accent transition-colors">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/AbdullahMoghal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-black group-hover:text-accent transition-colors">GitHub</span>
                </a>
                <a
                  href="https://instagram.com/itsmoghal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-black group-hover:text-accent transition-colors">@itsmoghal</span>
                </a>
                <a
                  href={mailtoHref}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-black group-hover:text-accent transition-colors">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesignContact;
