import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import ScrollProgress from "@/components/ScrollProgress";
import AboutSection from "@/components/Sections/AboutSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ExperienceSection from "@/components/Sections/ExperienceSection";
import ContactSection from "@/components/Sections/ContactSection";
import { useSectionTransitions } from "@/hooks/use-section-transitions";
import { useMedia } from "@/hooks/use-media";

// Inline HeroSection component to fix import issues
const HeroSection = () => {
  const isDesktop = useMedia('(min-width: 768px)', false);
  
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.21, 0.45, 0.15, 1.00]
    }
  };

  return (
    <section id="hero" className="section relative overflow-hidden flex items-center justify-center min-h-[100svh]">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/90 to-primary/10">
        <div className="absolute inset-0">
          {/* Main central glowing orb */}
          <motion.div 
            className="absolute rounded-full bg-primary/30 blur-3xl"
            style={{
              width: 600,
              height: 600,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Multiple floating particles with 3D movement */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-primary/20" 
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                rotate: [0, Math.random() * 360, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Animated horizontal lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
              style={{
                height: 1,
                width: '100%',
                top: `${10 + i * 8}%`,
                transformOrigin: 'left',
              }}
              animate={{
                scaleX: [0, 1, 0],
                translateX: ['-100%', '0%', '100%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 15 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          initial={animationProps.initial}
          animate={animationProps.animate}
          transition={animationProps.transition}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 gradient-text">Saathvic Sathish</h1>

          <h2 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-5 text-white/90">
            Aspiring Full Stack Developer
          </h2>

          <div className="flex flex-wrap justify-center gap-x-3 mb-8">
            <span className="text-primary/90 px-2">Exploring AI/ML & AR</span>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="text-primary/90 px-2">Generative AI Developer</span>
          </div>

          <div className="mb-12 flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 mb-3 bg-primary/10 rounded-full">
              <svg className="w-4 h-4 text-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15l8.5-8.5-4-4-8.5 8.5L6 17l6-2zm6.5-11.5l2 2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white/90">Finalist @ Aventus 2.0 & 0x.day Hacksday</span>
            </div>

            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full">
              <svg className="w-4 h-4 text-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7l3-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white/90">Top Performer @ Creators of Metaverse</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/Saathvic_S_resume.pdf" 
              download="Saathvic_Sathish_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-6 rounded-full hover:glow transition-all duration-300">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-white rounded-full group transition-all duration-300"
            >
              <a href="#contact" className="flex items-center">
                Contact Me
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      >
        <div className="w-8 h-14 rounded-full border-2 border-primary/50 flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// Inline header component to fix import issues
const Header = ({ activeSection = 'hero' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Mobile menu component
  const MobileMenu = () => {
    if (!mobileMenuOpen) return null;
    
    const menuItems = [
      { name: "Home", href: "#hero", id: "hero" },
      { name: "About", href: "#about", id: "about" },
      { name: "Projects", href: "#projects", id: "projects" },
      { name: "Experience", href: "#experience", id: "experience" },
      { name: "Contact", href: "#contact", id: "contact" },
    ];
    
    useEffect(() => {
      if (mobileMenuOpen) {
        document.body.style.overflow = "hidden";
        document.documentElement.classList.add('mobile-menu-open');
      }
      return () => {
        document.body.style.overflow = "auto";
        document.documentElement.classList.remove('mobile-menu-open');
      };
    }, []);
    
    return (
      <div className="fixed inset-0 w-full h-screen bg-[#0f0f14]/95 backdrop-blur-md z-50">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-white/20 bg-black/40">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-black to-[#161621]">
            <ul className="space-y-5 max-w-md mx-auto py-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block py-5 px-6 text-xl text-center font-medium rounded-lg ${
                      activeSection === item.id ? 'bg-primary/30 text-white' : 'text-white/90'
                    }`}
                    onClick={() => setTimeout(() => setMobileMenuOpen(false), 100)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-gradient-to-b from-black/90 to-black/40 py-6"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold gradient-text glow-text">
          Saathvic Sathish
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["About", "Projects", "Experience", "Contact"].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`relative transition-colors ${
                      isActive 
                        ? "text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary" 
                        : "text-white/70 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-white p-3 rounded-full bg-primary hover:bg-primary/80 shadow-lg transition-colors fixed bottom-6 right-6 z-[60] w-16 h-16 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
      {mobileMenuOpen && <MobileMenu />}
    </header>
  );
};

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
