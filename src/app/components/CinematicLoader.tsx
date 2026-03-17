import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = "hidden";
    
    // Fast but deliberate loading simulation
    const duration = 2400; 
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    // Custom easing function for progress (e.g. fast then slow)
    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const timer = setInterval(() => {
      currentStep++;
      const progressRatio = currentStep / steps;
      const easedProgress = easeOutExpo(progressRatio);
      const newProgress = Math.min(Math.round(easedProgress * 100), 100);
      
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLoaded(true);
        setTimeout(() => {
          onComplete();
          document.body.style.overflow = "auto";
        }, 1800); // Wait for the 1.4s split animation + some buffer
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Vault Door / Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isLoaded ? "-100%" : 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.3, 1], delay: 0.2 }}
        className="absolute top-0 left-0 w-full h-[50.5vh] bg-[#050505] border-b border-[#D4AF37]/30 z-10"
        style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.8)" }}
      />
      
      {/* Bottom Vault Door / Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isLoaded ? "100%" : 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.3, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-[50.5vh] bg-[#050505] border-t border-[#D4AF37]/30 z-10"
        style={{ boxShadow: "0 -20px 50px rgba(0,0,0,0.8)" }}
      />

      {/* Loader Content inside the doors */}
      <motion.div
        initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        animate={{ 
          opacity: isLoaded ? 0 : 1, 
          scale: isLoaded ? 1.05 : 1,
          filter: isLoaded ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center"
      >
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent" />
          <h2 className="text-xs md:text-sm font-bold tracking-[0.6em] text-[#D4AF37] uppercase font-sans">
            Byters
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </div>

        <div className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontVariantNumeric: "tabular-nums" }}>
          {progress.toString().padStart(3, '0')}
          <span className="text-3xl md:text-5xl text-[#D4AF37]">%</span>
        </div>

        <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] via-[#FBE18D] to-[#D4AF37]"
            style={{ width: `${progress}%`, backgroundSize: "200% auto", animation: "gradient 2s linear infinite" }}
          />
        </div>

        <div className="mt-8 text-[10px] md:text-xs tracking-[0.4em] text-[#888] uppercase font-mono">
          Engineering Masterpiece
        </div>
      </motion.div>
    </motion.div>
  );
}
