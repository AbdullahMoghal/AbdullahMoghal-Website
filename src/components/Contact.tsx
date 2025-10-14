import { useState } from "react";
import { Linkedin, Github, Mail, Send, FileText, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "amm0640@mavs.uta.edu";

// Read the Formspree endpoint from env; fallback to your provided endpoint
const FORMSPREE_ENDPOINT =
  (import.meta as any)?.env?.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mldpwarw";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

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
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-black text-accent mb-4">Contact</h2>
        <div className="mb-8">
          <div className="w-32 h-1 bg-accent rounded-full"></div>
        </div>
        <p className="text-lg text-black/70 mb-10">
          Have a project or opportunity? Send me a message and I’ll get back to you soon.
        </p>

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
                <Input name="subject" placeholder="What’s this about?" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Message</label>
                <Textarea name="message" placeholder="Write your message here..." rows={6} required />
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
                  <span className="text-green-600 text-sm font-medium">Message sent. I’ll reply soon!</span>
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
                href="https://www.linkedin.com/in/abdullahmoghal/"
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
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-black group-hover:text-accent transition-colors">Email</span>
              </a>
            </div>

            {/* PDF Documents */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-black mb-4">Documents</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="/pdf-redirects/Resume-10-14-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-black group-hover:text-accent transition-colors">Resume</span>
                </a>
                <a
                  href="/pdf-redirects/Professional Refrence List.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-black group-hover:text-accent transition-colors">Professional Reference List</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
