import { Globe, Palette, Database, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Globe,
    title: "Web Engineering",
    description:
      "Architecting scalable, lightning-fast web experiences engineered for uncompromising performance and precision.",
    features: ["React Architecture", "Modern State Systems", "Edge Computing"],
  },
  {
    icon: Palette,
    title: "Cinematic UI/UX",
    description:
      "Crafting immersive visual narratives through profound minimalism, rich motion, and intuitive digital interfaces.",
    features: ["Glassmorphism", "Motion Integration", "Dark Mode Excellence"],
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    description:
      "Building the unseen power behind flawless experiences. Secure APIs, distributed systems, and seamless backend integration.",
    features: ["Serverless Architectures", "Secure API Layers", "Data Modeling"],
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="services"
      className="py-32 md:py-48 relative overflow-hidden bg-transparent"
    >
      {/* Decorative vertical cinematic lines */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-3/4 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute -top-1/4 -right-1/4 w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]" />
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}>
                Disciplines
              </h3>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0 10px 30px rgba(0,0,0,0.8)"
              }}
            >
              The Pillars of<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FBE18D]">Innovation.</span>
            </motion.h2>
          </div>
          
          <motion.p
            variants={itemVariants}
            className="md:max-w-md"
            style={{
              color: "#A3A3A3",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            We focus strictly on the core digital disciplines, distilling complexity into powerful, focused solutions without the bloat. 
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group flex flex-col p-10 relative overflow-hidden rounded-[2rem]"
              style={{
                background: "linear-gradient(135deg, rgba(15,15,15,0.7) 0%, rgba(5,5,5,0.9) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(212,175,55,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8)";
              }}
            >
              {/* Giant abstract number background */}
              <div 
                className="absolute -top-10 -right-4 text-[12rem] font-black italic opacity-[0.03] text-white select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700" 
                style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.05em" }}
              >
                0{i + 1}
              </div>

              {/* Glassmorphic hover highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon Container */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 relative z-10 group-hover:scale-110 group-hover:rotate-3"
                style={{ 
                  background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0,0,0,0.4) 100%)", 
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
                }}
              >
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <service.icon size={28} style={{ color: "#D4AF37" }} strokeWidth={1.5} className="relative z-10" />
              </div>

              {/* Title */}
              <h3
                className="relative z-10"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "-0.02em"
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="relative z-10 flex-grow"
                style={{
                  color: "#888888",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <ul className="flex flex-col gap-4 mb-10 relative z-10">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-4 group/item">
                    <div className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-white" style={{ background: "#D4AF37", boxShadow: "0 0 10px #D4AF37" }} />
                    <span className="transition-colors duration-300 group-hover/item:text-white" style={{ color: "#A3A3A3", fontSize: "0.95rem", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Footer action */}
              <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                <div
                  className="inline-flex items-center gap-3 transition-colors duration-300 text-gray-400 group-hover:text-[#D4AF37] uppercase tracking-[0.1em]"
                  style={{ fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}
                >
                  <span>Explore Discipline</span>
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
