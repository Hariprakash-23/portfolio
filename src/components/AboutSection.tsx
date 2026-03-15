import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative overflow-hidden">
      <div ref={ref} className="section-container relative z-10">
        <div
          className={`glass-section max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <SectionHeading title="About Me" subtitle="Driven by curiosity, powered by cloud & AI" />
          <p className="text-foreground/90 leading-relaxed text-lg mb-4">
            I am a passionate Cloud and AI enthusiast currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. I specialize in building intelligent systems, scalable cloud architectures, and modern web applications.
          </p>
          <p className="text-foreground/90 leading-relaxed text-lg mb-4">
            My interests include Artificial Intelligence, cloud infrastructure, and developing innovative solutions that solve real-world problems. I enjoy designing systems that are efficient, scalable, and impactful.
          </p>
          <p className="text-foreground/90 leading-relaxed text-lg">
            With hands-on experience across AWS services, AI/ML frameworks, and full-stack development, I bring a unique blend of cloud engineering expertise and software craftsmanship to every project I undertake. I'm constantly exploring emerging technologies to stay ahead in this rapidly evolving landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;