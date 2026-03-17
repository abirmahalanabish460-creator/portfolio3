import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function Hero() {
  const navigate = useNavigate();

  const handleScroll = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden bg-transparent pt-20"
    >
      {/* Ambient cinematic lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto flex flex-col items-center text-center">
        <motion.div
          className="max-w-5xl flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-12">
            <div
              className="flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-xl"
              style={{
                background: "linear-gradient(90deg, rgba(212, 175, 55, 0.1), rgba(0,0,0,0.4))",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            >
              <span className="w-2 h-2 rounded-full relative">
                <span className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-75" />
                <span className="relative block w-2 h-2 rounded-full bg-[#D4AF37]" style={{ boxShadow: "0 0 12px #D4AF37" }} />
              </span>
              <span style={{ color: "#D4AF37", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", fontFamily: "'Inter', sans-serif" }}>
                AVAILABLE FOR NEW VISIONS
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-8 relative"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontFamily: "'Poppins', sans-serif",
              textShadow: "0 20px 40px rgba(0,0,0,0.8)"
            }}
          >
            Forging Digital <br />
            <span 
              className="relative inline-block mt-2"
            >
              <span style={{ 
                background: "linear-gradient(to right, #FFF, #FBE18D, #D4AF37, #AA8529)", 
                WebkitBackgroundClip: "text", 
                color: "transparent",
                backgroundSize: "200% auto",
                animation: "gradient 8s linear infinite"
              }}>
                Masterpieces.
              </span>
              <motion.span 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "120%", opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-16 mt-6"
            style={{
              color: "#A3A3A3",
              fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
              lineHeight: 1.8,
              maxWidth: "700px",
              fontFamily: "'Inter', sans-serif",
              textShadow: "0 4px 10px rgba(0,0,0,0.8)"
            }}
          >
            A focused collective of artisans engineering elegant, 
            high-performance web solutions that redefine the modern landscape.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => handleScroll("/contact")}
              className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)]"
              style={{
                color: "#000000",
                fontSize: "1rem",
                letterSpacing: "0.05em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FBE18D] to-[#D4AF37] transition-transform duration-700 group-hover:scale-105" style={{ backgroundSize: "200% auto", animation: "gradient 4s linear infinite" }} />
              <span className="relative z-10 flex items-center gap-2 uppercase">
                Initiate Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border border-white/20 flex justify-center pt-2 bg-black/20 backdrop-blur-md"
        >
          <motion.div 
            animate={{ height: ["0%", "40%", "0%"], opacity: [0, 1, 0], y: [0, 15, 30] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-[#D4AF37] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
