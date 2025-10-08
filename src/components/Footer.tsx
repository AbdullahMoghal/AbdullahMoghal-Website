import { Github, Linkedin, Mail, FileText, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-gray-300">Open to new opportunities and collaborations</p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/AbdullahMoghal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdullahmoghal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:amm0640@mavs.uta.edu"
                className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* PDF Documents */}
            <div className="flex gap-4">
              <a 
                href="/pdf-redirects/Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all hover:scale-110"
                title="View Resume"
              >
                <FileText size={24} />
              </a>
              <a 
                href="/pdf-redirects/Professional Refrence List.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all hover:scale-110"
                title="View Professional Reference List"
              >
                <Users size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-300">
          <p>© 2025 Portfolio. All rights reserved. | Designed by Moghal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
