import { motion } from "motion/react";

// Generate 250 stars distributed randomly from the top of the page to the very bottom
const particles = Array.from({ length: 250 }).map((_, i) => ({
  id: i,
  size: i % 5 === 0 ? 5 : i % 3 === 0 ? 3 : 1.5,
  left: `${(i * 21.3) % 100}%`,
  top: `${(i * 7.7) % 100}%`, // Spans 0% to 100% of the entire scroll height
  duration: 12 + (i % 20),
  delay: (i % 10) * 0.3,
  yOffset: -100 - (i % 100),
  xOffset: (i % 2 === 0 ? 1 : -1) * (10 + (i % 30)),
}));

// Distribute MORE planets and shapes across the ENTIRE vertical scroll height of the website
const planets = [
  // Hero section area
  { type: "sphere", size: 160, top: "2%", left: "8%", duration: 20, yOffset: -80, rotate: 360 },
  { type: "ring", size: 280, top: "8%", right: "-5%", duration: 25, yOffset: 120, rotate: -180 },
  { type: "glass", size: 130, top: "15%", left: "75%", duration: 22, yOffset: -50, rotate: 225 },
  { type: "orb", size: 40, top: "10%", left: "40%", duration: 15, yOffset: 60, rotate: 90 },
  
  // Services section area
  { type: "sphere", size: 90, top: "25%", left: "15%", duration: 18, yOffset: 70, rotate: -360 },
  { type: "ring", size: 160, top: "35%", right: "20%", duration: 24, yOffset: -90, rotate: 180 },
  { type: "glass", size: 80, top: "30%", left: "80%", duration: 19, yOffset: 40, rotate: -45 },
  { type: "orb", size: 60, top: "40%", left: "30%", duration: 20, yOffset: -50, rotate: 180 },
  
  // Team section area
  { type: "glass", size: 110, top: "45%", left: "5%", duration: 21, yOffset: 60, rotate: -90 },
  { type: "sphere", size: 220, top: "55%", right: "8%", duration: 28, yOffset: -100, rotate: 180 },
  { type: "ring", size: 140, top: "50%", left: "60%", duration: 22, yOffset: 80, rotate: 360 },
  
  // About/Contact section area
  { type: "ring", size: 180, top: "65%", left: "25%", duration: 26, yOffset: 80, rotate: -360 },
  { type: "glass", size: 140, top: "75%", right: "35%", duration: 23, yOffset: -60, rotate: 90 },
  { type: "orb", size: 50, top: "70%", right: "15%", duration: 17, yOffset: -40, rotate: -180 },
  
  // Footer section area
  { type: "sphere", size: 120, top: "85%", left: "10%", duration: 19, yOffset: 50, rotate: 360 },
  { type: "ring", size: 240, top: "95%", right: "10%", duration: 27, yOffset: -120, rotate: -180 },
  { type: "glass", size: 100, top: "90%", left: "60%", duration: 21, yOffset: 70, rotate: 135 },
  { type: "orb", size: 70, top: "98%", left: "40%", duration: 25, yOffset: -80, rotate: 90 },
];

const blurs = [
  { top: "5%", right: "-10%", color: "rgba(212,175,55,0.25)" },
  { top: "25%", left: "-10%", color: "rgba(251,225,141,0.15)" },
  { top: "45%", right: "-5%", color: "rgba(212,175,55,0.2)" },
  { top: "65%", left: "-15%", color: "rgba(251,225,141,0.15)" },
  { top: "85%", right: "-10%", color: "rgba(212,175,55,0.25)" },
];

// Add shooting stars that streak across the background
const shootingStars = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  top: `${10 + i * 11}%`,
  delay: i * 3.5,
  duration: 4 + (i % 3),
}));

export function Background3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* Deep Ambient Morphing Background Blurs */}
      {blurs.map((blur, i) => (
        <motion.div
          key={`blur-${i}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${blur.color} 0%, transparent 70%)`,
            top: blur.top,
            right: blur.right,
            left: blur.left,
          }}
        />
      ))}

      {/* Dark Overlay to dim the background blurs slightly */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] z-[1]" />

      {/* Crisp Foreground 3D Elements & Particles (Spanning entire website height) */}
      <div className="absolute inset-0 z-[2]">
        
        {/* Star / Particle Field */}
        {particles.map((p) => (
          <motion.div
            key={`particle-${p.id}`}
            animate={{
              y: [0, p.yOffset],
              x: [0, p.xOffset],
              opacity: [0.1, 1, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-[#FBE18D]"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              boxShadow: "0 0 12px rgba(251, 225, 141, 0.9)",
            }}
          />
        ))}

        {/* Shooting Stars */}
        {shootingStars.map((star) => (
          <motion.div
            key={`shooting-star-${star.id}`}
            animate={{
              x: ["-10vw", "110vw"],
              y: ["-10vh", "30vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute h-[2px] w-[150px]"
            style={{
              top: star.top,
              left: "-10%",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), rgba(255, 229, 92, 1))",
              transform: "rotate(15deg)",
              boxShadow: "0 0 15px rgba(255, 229, 92, 0.8)",
              borderRadius: "50%",
            }}
          />
        ))}

        {/* Dynamic 3D Geometric Planets */}
        {planets.map((shape, i) => {
          if (shape.type === "sphere") {
            return (
              <motion.div
                key={`shape-${i}`}
                animate={{
                  y: [0, shape.yOffset, 0],
                  x: [0, shape.yOffset / 2, 0],
                  rotate: [0, shape.rotate],
                }}
                transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
                className="absolute rounded-full"
                style={{
                  width: shape.size, height: shape.size,
                  top: shape.top, left: shape.left, right: shape.right,
                  background: "radial-gradient(circle at 30% 30%, #FFE55C 0%, #D4AF37 35%, #594409 75%, #0A0800 100%)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.4)",
                }}
              />
            );
          }
          if (shape.type === "ring") {
            return (
              <motion.div
                key={`shape-${i}`}
                animate={{
                  y: [0, shape.yOffset, 0],
                  rotateX: [0, 45, 0],
                  rotateY: [0, shape.rotate, 0],
                  rotateZ: [0, shape.rotate],
                }}
                transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
                className="absolute rounded-full"
                style={{
                  width: shape.size, height: shape.size,
                  top: shape.top, left: shape.left, right: shape.right,
                  border: "2px solid rgba(212,175,55,0.4)",
                  boxShadow: "0 0 25px rgba(212,175,55,0.15), inset 0 0 25px rgba(212,175,55,0.15)",
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              />
            );
          }
          if (shape.type === "glass") {
            return (
              <motion.div
                key={`shape-${i}`}
                animate={{
                  y: [0, shape.yOffset, 0],
                  rotate: [0, shape.rotate],
                }}
                transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
                className="absolute"
                style={{
                  width: shape.size, height: shape.size,
                  top: shape.top, left: shape.left, right: shape.right,
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.01) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.4), inset 0 0 15px rgba(212,175,55,0.1)",
                  borderRadius: "24px",
                }}
              />
            );
          }
          if (shape.type === "orb") {
            return (
              <motion.div
                key={`shape-${i}`}
                animate={{
                  y: [0, shape.yOffset, 0],
                  x: [0, shape.yOffset / 3, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
                className="absolute rounded-full"
                style={{
                  width: shape.size, height: shape.size,
                  top: shape.top, left: shape.left, right: shape.right,
                  background: "radial-gradient(circle at 40% 40%, #FFF 0%, #FBE18D 40%, transparent 80%)",
                  boxShadow: "0 0 30px rgba(251,225,141,0.6)",
                  filter: "blur(2px)",
                }}
              />
            );
          }
          return null;
        })}

        {/* Sweeping Light Rays throughout the entire page */}
        {[10, 30, 50, 70, 90].map((topPercent, i) => (
          <motion.div
            key={`ray-${i}`}
            animate={{ x: ["-20vw", "120vw"], opacity: [0, 0.8, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: i }}
            className="absolute h-[2px] w-[50vw] min-w-[400px]"
            style={{
              top: `${topPercent}%`, left: "-20%",
              background: i % 2 === 0 
                ? "linear-gradient(90deg, transparent, rgba(255,229,92,0.7), transparent)"
                : "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
              transform: "rotate(-20deg)",
              filter: "blur(2px)",
              boxShadow: "0 0 20px rgba(212,175,55,0.5)"
            }}
          />
        ))}
      </div>
    </div>
  );
}
