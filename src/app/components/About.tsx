import { motion } from "motion/react";
import { Code, Layout, Server, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="px-4 py-32 md:py-48 max-w-[1400px] mx-auto text-white relative z-10">
      {/* Decorative cinematic lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 p-8 md:p-16 lg:p-24" 
        style={{ 
          background: "linear-gradient(135deg, rgba(15,15,15,0.4) 0%, rgba(0,0,0,0.8) 100%)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(212,175,55,0.15)"
        }}
      >
        
        {/* Ambient gold glow */}
        <div className="absolute -top-1/2 -right-1/4 w-[80%] h-[80%] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[60%] h-[60%] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Text Side - larger span for cinematic reading */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#D4AF37]" />
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}>
                  The Byters Genesis
                </h3>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}>
                Redefining the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FBE18D] to-[#D4AF37]" style={{ backgroundSize: "200% auto", animation: "gradient 8s linear infinite" }}>
                  Digital Horizon.
                </span>
              </h2>
              
              <div className="space-y-8 text-[#A3A3A3] text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  We are BYTERS, a passionate collective of digital craftsmen dedicated to elevating the web. Born from a shared vision to push the boundaries of modern design and technology, our focus is singular: creating high-performance, visually striking digital experiences.
                </p>
                <p>
                  By weaving cutting-edge engineering with exquisite aesthetics, we build platforms that captivate and function flawlessly. We strip away the noise to master every layer of the stack, ensuring your digital presence is not just modern, but transformative.
                </p>
              </div>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Web Development", icon: Code },
                { label: "UI/UX Design", icon: Layout },
                { label: "Backend & Cloud", icon: Server },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 + (idx * 0.15), ease: "easeOut" }}
                  className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md transition-all duration-500 hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 hover:-translate-y-2"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-500">
                    <item.icon size={24} className="text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-gray-200">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side - Cinematic frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-3xl rounded-full" />
            
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group" style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.8)" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20 z-10 pointer-events-none" />
              
              {/* Slow pan effect for cinematic feel */}
              <motion.div
                animate={{ scale: [1.05, 1.15, 1.05] }}
                transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
                className="w-full h-full origin-center"
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1771747131849-41056d3d9be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdvbGQlMjBnZW9tZXRyeSUyMDNkfGVufDF8fHx8MTc3MzUwNjQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Abstract Golden Geometry"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Overlay decorative element */}
              <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between border-t border-white/20 pt-6">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Sparkles size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Vision 01</span>
                </div>
                <div className="text-xs tracking-widest text-gray-400 font-mono">BYTERS.DEV</div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
