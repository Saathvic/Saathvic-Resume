import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

const MobileMenu = ({ isOpen, onClose, activeSection = 'hero' }: MobileMenuProps) => {
  const menuItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setTimeout(() => onClose(), 100);
  };

  // Handle escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Set viewport height for mobile browsers
    const setViewportHeight = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add('mobile-menu-open');
      setViewportHeight();
      window.addEventListener('resize', setViewportHeight);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
      document.documentElement.classList.remove('mobile-menu-open');
      window.removeEventListener('resize', setViewportHeight);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 w-screen h-screen bg-[#0f0f14]/95 backdrop-blur-md shadow-lg z-50"
          style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
        >
          <div className="flex flex-col h-full w-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/20 bg-black/40">
              <h2 className="text-3xl font-bold">Menu</h2>
              <button 
                onClick={onClose}
                className="p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-gradient-to-b from-[#0f0f14] to-[#161621]">
              <ul className="space-y-4 sm:space-y-6 max-w-md mx-auto py-6">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className={`block py-6 px-8 text-2xl text-center font-medium rounded-lg transition-colors border ${
                        activeSection === item.id
                          ? 'bg-primary/30 border-primary/50 text-white shadow-lg'
                          : 'bg-black/20 hover:bg-black/30 border-transparent hover:border-white/20 text-white/95'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            {/* Footer */}
            <div className="p-4 sm:p-6 md:p-8 border-t border-white/20 bg-black/40">
              <div className="max-w-md mx-auto">
                <a 
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block py-5 text-center bg-primary hover:bg-primary/80 rounded-lg text-white text-xl font-medium transition-colors shadow-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
