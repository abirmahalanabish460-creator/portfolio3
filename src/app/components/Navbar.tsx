import { useState, useEffect } from "react";
import { Menu, X, Code2, Zap } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/#team" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = ["home", "services", "team", "about"];
        let found = false;
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && window.scrollY >= el.offsetTop - 150) {
            setActiveSection(sections[i]);
            found = true;
            break;
          }
        }
        if (!found) setActiveSection("home");
      } else {
        setActiveSection(location.pathname.replace("/", "")); // e.g. "contact"
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle cross-page hash scrolling
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        navigate(href);
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", href);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans"
      style={{
        background: scrolled
          ? "rgba(0, 0, 0, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212, 175, 55, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D4AF37, #AA8529)" }}
            >
              <Code2 size={18} color="#000000" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span
                className="text-white font-bold tracking-tight"
                style={{ fontSize: "1.1rem", fontFamily: "'Poppins', sans-serif" }}
              >BYTERS</span>
              <span style={{ fontSize: "0.65rem", color: "#D4AF37", letterSpacing: "0.15em", fontWeight: 700 }}>
                TEAM
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const activeId = link.href.replace("/#", "").replace("/", "home");
              const isActive = activeSection === activeId || (activeSection === "contact" && link.href === "/contact");

              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 rounded-lg transition-all duration-200 group"
                  style={{
                    color: isActive ? "#D4AF37" : "#A3A3A3",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  <span className="relative z-10 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {link.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#D4AF37", boxShadow: "0 0 8px #D4AF37" }}
                    />
                  )}
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(212, 175, 55, 0.05)" }}
                  />
                </button>
              );
            })}
          </div>

          {/* Hire Us Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("/contact")}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] active:scale-95 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #AA8529)",
                color: "#000000",
                fontSize: "0.9rem",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              <Zap size={15} strokeWidth={2.5} />
              Hire Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl transition-all duration-200 text-white hover:text-[#D4AF37]"
            style={{
              background: isOpen ? "rgba(212, 175, 55, 0.1)" : "transparent",
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 backdrop-blur-xl"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          background: "rgba(0,0,0,0.95)",
          borderTop: isOpen ? "1px solid rgba(212, 175, 55, 0.1)" : "none",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const activeId = link.href.replace("/#", "").replace("/", "home");
            const isActive = activeSection === activeId || (activeSection === "contact" && link.href === "/contact");

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200"
                style={{
                  color: isActive ? "#D4AF37" : "#A3A3A3",
                  background: isActive ? "rgba(212, 175, 55, 0.05)" : "transparent",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick("/contact")}
            className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #AA8529)",
              color: "#000000",
              fontSize: "0.95rem",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            <Zap size={16} strokeWidth={2.5} />
            Hire Us
          </button>
        </div>
      </div>
    </nav>
  );
}
