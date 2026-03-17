import { Github, Linkedin, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Link } from "react-router";

const footerLinks = {
  Services: [
    "Web Development",
    "UI/UX Design",
    "Backend & Cloud"
  ],
  Company: ["Our Team", "Careers", "Blog"],
  Resources: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Sitemap",
  ],
};

const socials = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505]/80 backdrop-blur-xl mt-24">
      <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block text-2xl font-black tracking-tighter text-white mb-6">
              BYTERS<span className="text-[#D4AF37]">.</span>
            </Link>
            <p className="text-[#A3A3A3] text-sm leading-relaxed max-w-sm mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              A modern digital collective focused exclusively on creating premium web experiences, seamless UI/UX designs, and robust backend architectures.
            </p>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-6 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm text-[#888888] hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-[#888888]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>© {new Date().getFullYear()} BYTERS. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
