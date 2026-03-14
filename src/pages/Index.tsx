import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
