import { Github, Linkedin, Twitter, Maximize } from "lucide-react";
import { motion } from "motion/react";

const members = [
  {
    name: "Alex Morrison",
    role: "Full-Stack Developer",
    image:
      "https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXZlbG9wZXIlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzNjM3MTJ8MA&ixlib=rb-4.1.0&q=80&w=600",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzM0NDczNnww&ixlib=rb-4.1.0&q=80&w=600",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
];

export function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      id="team" 
      className="py-32 md:py-48 relative overflow-hidden bg-transparent"
    >
      {/* Background shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Cinematic typography split */}
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
                The Collective
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
              Architects of<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FBE18D]">the Future.</span>
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
            A tight-knit unit of highly specialized experts working intensely to execute every detail with uncompromising precision.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto"
        >
          {members.map((member, i) => (
            <motion.div key={i} variants={itemVariants} className="group relative">
              {/* Image Frame with Cinematic Ken Burns & Golden accents */}
              <div 
                className="overflow-hidden mb-8 relative transition-all duration-1000 group" 
                style={{ 
                  borderRadius: "2rem", 
                  aspectRatio: "3/4",
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(10,10,10,0.8)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.8)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                  e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(212,175,55,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.8)";
                }}
              >
                {/* Internal shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10 pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity duration-1000" />
                
                {/* Slow breathing / Ken burns effect container */}
                <motion.div
                  animate={{ scale: [1.02, 1.08, 1.02] }}
                  transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, delay: i * 2 }}
                  className="w-full h-full origin-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                </motion.div>

                {/* Decorative overlay text & icon */}
                <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <Maximize size={16} />
                </div>
                <div className="absolute bottom-6 left-6 z-20 border-l-2 border-[#D4AF37] pl-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                  <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold block mb-1">Status</span>
                  <span className="text-xs text-white uppercase tracking-widest font-mono">Active</span>
                </div>
              </div>

              {/* Info & Typography */}
              <div className="text-center relative z-10 flex flex-col items-center">
                <h3
                  className="transition-colors duration-500 group-hover:text-[#D4AF37]"
                  style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.75rem", marginBottom: "8px", fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {member.name}
                </h3>
                <p
                  className="uppercase tracking-[0.2em]"
                  style={{ color: "#888888", fontSize: "0.85rem", marginBottom: "24px", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  {member.role}
                </p>

                {/* Social links - floating pill */}
                <div 
                  className="flex justify-center gap-2 p-2 rounded-full border border-white/5 transition-all duration-500 group-hover:border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/5"
                  style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(10px)", boxShadow: "0 10px 20px rgba(0,0,0,0.5)" }}
                >
                  {[
                    { icon: Github, href: member.social.github },
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Twitter, href: member.social.twitter },
                  ].map((s, j) => (
                    <a
                      key={j}
                      href={s.href}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[#D4AF37]/20 scale-0 hover:scale-100 transition-transform duration-300 rounded-full" />
                      <s.icon size={16} className="relative z-10" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
