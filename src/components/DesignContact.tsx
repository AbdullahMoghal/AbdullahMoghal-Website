import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Linkedin, Github, Instagram, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "amm0640@mavs.uta.edu";

// Read the Formspree endpoint from env; fallback to your provided endpoint
const FORMSPREE_ENDPOINT =
  (import.meta as any)?.env?.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mldpwarw";

const DesignContact = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setError(j?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
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
              Have a creative project or collaboration in mind? Let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Name</label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email</label>
                    <Input type="email" name="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">Subject</label>
                  <Input name="subject" placeholder="What's this about?" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">Message</label>
                  <Textarea name="message" placeholder="Tell me about your project..." rows={6} required />
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    className="bg-accent text-white hover:bg-accent/90"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                      </span>
                    )}
                  </Button>
                  {status === "success" && (
                    <span className="text-green-600 text-sm font-medium">Message sent. I'll reply soon!</span>
                  )}
                  {status === "error" && (
                    <span className="text-red-600 text-sm font-medium">{error}</span>
                  )}
                </div>

                {/* Fallback: mailto */}
                <div className="pt-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-black/60 underline underline-offset-4"
                  >
                    Or email me directly at {CONTACT_EMAIL}
                  </a>
                </div>
              </form>
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
                  href={`mailto:${CONTACT_EMAIL}`}
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
