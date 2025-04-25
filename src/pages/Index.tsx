import { useEffect } from "react";
import Header from "@/components/Layout/Header";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ExperienceSection from "@/components/Sections/ExperienceSection";
import ContactSection from "@/components/Sections/ContactSection";
import { useSectionTransitions } from "@/hooks/use-section-transitions";

const Index = () => {
  const { activeSectionId } = useSectionTransitions();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Header activeSection={activeSectionId} />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <footer className="bg-background/90 py-6 text-center text-white/60">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Saathvic Sathish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
