import { useState } from "react";
import { CheckCircle2, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    agreed: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request Sent!");
    setForm({ name: "", email: "", message: "", agreed: false });
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="px-4 py-16 md:py-24 max-w-[1200px] mx-auto text-gray-200 font-sans relative bg-transparent">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="text-center mb-16 relative z-10"
      >
        <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#D4AF37", fontFamily: "'Inter', sans-serif" }}>
          Contact Us
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: "#FFFFFF", letterSpacing: "-0.02em", fontFamily: "'Poppins', sans-serif" }}>
          Get in touch with us
        </h1>
        <p className="text-[#A3A3A3] max-w-xl mx-auto text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
          Fill out the form below or schedule a meeting with us at your convenience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 md:gap-24 relative z-10">
        {/* Left Column - Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-5 mb-12 p-6 md:p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(15,15,15,0.7) 0%, rgba(5,5,5,0.4) 100%)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
            }}
          >
            <div className="relative z-10">
              <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#888888", fontFamily: "'Inter', sans-serif" }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg border border-white/5 bg-[#0A0A0A]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-sm placeholder:text-gray-600 hover:border-white/10"
                style={{ fontFamily: "'Inter', sans-serif", color: "#FFFFFF" }}
              />
            </div>
            
            <div className="relative z-10">
              <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#888888", fontFamily: "'Inter', sans-serif" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-white/5 bg-[#0A0A0A]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-sm placeholder:text-gray-600 hover:border-white/10"
                style={{ fontFamily: "'Inter', sans-serif", color: "#FFFFFF" }}
              />
            </div>

            <div className="relative z-10">
              <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#888888", fontFamily: "'Inter', sans-serif" }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-white/5 bg-[#0A0A0A]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all resize-none text-sm placeholder:text-gray-600 hover:border-white/10"
                style={{ fontFamily: "'Inter', sans-serif", color: "#FFFFFF" }}
              />
            </div>

            <div className="flex items-center gap-2 mt-1 relative z-10">
              <input
                type="checkbox"
                id="terms"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
                required
                className="w-4 h-4 rounded border-white/10 bg-[#0A0A0A] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-gray-400 font-medium cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                I agree with <a href="#" className="underline text-gray-300 hover:text-[#D4AF37] transition-colors">Terms and Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="group relative w-full py-4 mt-4 rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                color: "#000000",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                boxShadow: "0 0 20px rgba(212,175,55,0.15)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#AA8529] transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBE18D] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Send Your Request</span>
            </button>
          </form>

          <div>
            <h4 className="font-bold text-sm mb-5 tracking-wide" style={{ color: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
              YOU CAN ALSO CONTACT US VIA
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/5">
                  <Mail size={18} className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                </div>
                <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  hello@byters.dev
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center bg-black/50 backdrop-blur-md transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/5">
                  <Phone size={18} className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                </div>
                <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  +1 555-012-3456
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
          }}
          className="md:pl-4 md:pt-8"
        >
          <h4 className="font-bold text-lg mb-8" style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.01em" }}>
            With our services you can
          </h4>
          
          <ul className="flex flex-col gap-6 mb-16">
            {[
              "Build scalable Web Development solutions tailored to your business needs",
              "Create intuitive UI/UX Design experiences to engage users effectively",
              "Develop robust Backend & Cloud architectures for high performance",
              "Balance user needs with your overarching business goals"
            ].map((text, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 rounded-full bg-[#D4AF37]/10 p-1 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0" strokeWidth={2.5} />
                </div>
                <span className="text-[0.95rem] text-[#A3A3A3] font-medium leading-relaxed group-hover:text-gray-200 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {text}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-[#D4AF37]" strokeWidth={2} />
                <h5 className="font-bold text-base" style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>USA</h5>
              </div>
              <p className="text-sm text-[#888888] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                280 W, 17th street<br />
                4th floor, Flat no: 407<br />
                New York NY, 10018
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-[#D4AF37]" strokeWidth={2} />
                <h5 className="font-bold text-base" style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>India</h5>
              </div>
              <p className="text-sm text-[#888888] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Plot No 8-2-601/p/15ms<br />
                Banjara Hills, Road No 10<br />
                Hyderabad, 500034
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
