import { useState, useRef } from "react";
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import emailjs from "@emailjs/browser";

const contacts = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "hariofficial965@gmail.com",
    href: "mailto:hariofficial965@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    label: "Mobile",
    value: "+91 9843111357",
    href: "tel:+919843111357",
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "hariprakashka",
    href: "https://www.linkedin.com/in/hariprakashka",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "Hariprakash-23",
    href: "https://github.com/Hariprakash-23",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("idle");

    try {
      const serviceId = "service_enc2yvd";
      const templateId = "template_33u6kjf";
      const publicKey = "eL_WOxI0hV0iDpYds";

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      if (result.text === "OK") {
        setSendStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSendStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendStatus("error");
      setTimeout(() => setSendStatus("idle"), 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <div ref={ref} className="section-container">
        <SectionHeading title="Get in Touch" subtitle="Let's connect and build something amazing together" />

        {/* Glass card container */}
        <div className="rounded-3xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column – Contact info */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Contact Information
              </h3>
              {contacts.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-5 flex items-center gap-4 group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                    isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      {c.label}
                    </p>
                    <p className="text-foreground font-semibold text-sm break-all">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Right column – Contact form */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Send a Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-muted/30 border border-white/10 text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-muted/30 border border-white/10 text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-muted/30 border border-white/10 text-foreground focus:border-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Status messages */}
                {sendStatus === "success" && (
                  <div className="text-green-500 text-sm text-center">
                    Message sent successfully!
                  </div>
                )}
                {sendStatus === "error" && (
                  <div className="text-red-500 text-sm text-center">
                    Failed to send. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full gradient-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;