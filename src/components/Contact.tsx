import { Linkedin, Github, Mail, FileText, Users } from "lucide-react";

const CONTACT_EMAIL = "abdullahisi3a@gmail.com";

const Contact = () => {
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=Hello%20from%20your%20portfolio`;

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-black text-accent mb-4">Contact</h2>
        <div className="mb-8">
          <div className="w-32 h-1 bg-accent rounded-full"></div>
        </div>
        <p className="text-lg text-black/70 mb-10">
          Have a project or opportunity? Send me an email and I’ll get back to you soon.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Email CTA */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-black mb-3">Email</h3>
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
                href={mailtoHref}
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
                  href="/pdf-redirects/_Abdullah-Resume-5-09-2026.pdf"
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
                  href="/pdf-redirects/professional-reference-list.pdf"
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
