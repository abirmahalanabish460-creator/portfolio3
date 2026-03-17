import { Contact } from "../components/Contact";
import { useEffect } from "react";

export function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ paddingTop: "120px", paddingBottom: "80px", background: "#000000" }}>
      <Contact />
    </main>
  );
}
