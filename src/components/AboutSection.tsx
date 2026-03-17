import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative overflow-hidden">
      <div ref={ref} className="section-container relative z-10">
        <SectionHeading title="About Me" subtitle="Driven by curiosity. Powered by Cloud & AI." />
        <div
          className={`glass-section max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          
          <p className="text-foreground/70 leading-relaxed text-lg mb-4">
            I am a passionate Cloud and AI enthusiast currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. I focus on building intelligent systems, designing scalable cloud architectures, and developing modern, high-performance web applications that deliver real-world value.
          </p>
          <p className="text-foreground/70 leading-relaxed text-lg mb-4">
            My core interests lie in Artificial Intelligence, cloud infrastructure, and solving complex problems through innovative, data-driven solutions. I enjoy architecting systems that are not only efficient and scalable but also adaptive and future-ready.
          </p>
          <p className="text-foreground/70 leading-relaxed text-lg">
           With hands-on experience across various Cloud Providers, AI/ML techniques, and full-stack development, I bring a strong blend of cloud engineering expertise and software craftsmanship to every project I build. From designing intelligent automation to deploying scalable applications, I aim to create solutions that are both technically robust and practically impactful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;