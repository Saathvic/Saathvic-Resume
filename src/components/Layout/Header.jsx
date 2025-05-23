import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  activeSection?: string;
}

function Header({ activeSection = 'hero' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-gradient-to-b from-black/90 via-black/80 to-black/40 py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
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
          onClick={toggleMobileMenu}
          aria-label="Open menu"
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
      
      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activeSection={activeSection} />
    </motion.header>
  );
}

export default Header;
