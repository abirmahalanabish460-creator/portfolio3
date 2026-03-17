import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { CallToAction } from "../components/CallToAction";
import { Background3D } from "../components/Background3D";

export function Home() {
  return (
    <main className="relative w-full bg-[#050505] text-white overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* 
        The background is now absolutely positioned to span the ENTIRE height of the 
        website, creating a true, continuous parallax scroll of planets and stars.
      */}
      <Background3D />
      
      {/* Cinematic Global Vignette Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[5] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content layers resting above the background */}
      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <Services />
        <Team />
        <About />
        <CallToAction />
      </div>
    </main>
  );
}
