import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function CallToAction() {
  return (
    <section className="px-4 py-32 md:py-48 max-w-[1400px] mx-auto text-white relative z-10 overflow-hidden">
      {/* Decorative center glowing line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent via-[#D4AF37]/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[3rem] overflow-hidden p-16 md:p-24 lg:p-32 text-center border border-white/10"
        style={{
          background: "linear-gradient(135deg, rgba(15,15,15,0.7) 0%, rgba(5,5,5,0.9) 100%)",
          backdropFilter: "blur(30px)",
          boxShadow: "0 60px 120px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(212,175,55,0.15)"
        }}
      >
        {/* Cinematic ambient lighting inside the box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        {/* Gradient edge overlays */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-3 mb-10"
          >
            <Sparkles size={20} className="text-[#D4AF37]" />
            <h3 className="text-sm font-bold tracking-[0.4em] uppercase" style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}>
              The Next Chapter
            </h3>
            <Sparkles size={20} className="text-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-10 leading-[1.1]"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              letterSpacing: "-0.04em",
              textShadow: "0 20px 40px rgba(0,0,0,0.8)"
            }}
          >
            Let's Forge Your <br/>
            <span className="relative inline-block mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#FBE18D] to-[#D4AF37]" style={{ backgroundSize: "200% auto", animation: "gradient 8s linear infinite" }}>
                Digital Legacy.
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-[#A3A3A3] mb-16 max-w-2xl text-xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join BYTERS on a transformative journey to elevate your brand. We're ready to engineer your vision with uncompromising precision and cinematic style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full font-bold overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)]"
              style={{
                color: "#000000",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FBE18D] to-[#D4AF37] transition-transform duration-1000 group-hover:scale-110" style={{ backgroundSize: "200% auto", animation: "gradient 4s linear infinite" }} />
              
              <span className="relative z-10 flex items-center gap-3">
                Initiate Contact
                <div className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-500" />
                </div>
              </span>
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
