import { useState } from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CinematicLoader } from "../components/CinematicLoader";

export function Root() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden", background: "#050505" }}
    >
      {!loaded && <CinematicLoader onComplete={() => setLoaded(true)} />}

      <div
        className="flex-grow flex flex-col"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
          pointerEvents: loaded ? "auto" : "none",
        }}
      >
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
