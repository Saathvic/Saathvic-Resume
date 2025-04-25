import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

const menuItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const MobileMenu = ({ isOpen, onClose, activeSection = 'hero' }: MobileMenuProps) => {
  // Close menu when clicking a link
  const handleLinkClick = () => {
    onClose();
  };

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Restore body scroll when menu is closed
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background glass z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-white/10">
                <h2 className="text-xl font-bold gradient-text">Menu</h2>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Navigation links */}
              <nav className="flex-1 overflow-y-auto p-5">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors border ${
                            isActive
                              ? 'bg-white/10 border-primary/30 text-white'
                              : 'hover:bg-white/5 border-transparent hover:border-white/10 text-white/80'
                          }`}
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
              
              {/* Footer */}
              <div className="p-5 border-t border-white/10">
                <a 
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block py-3 text-center gradient-purple-blue rounded-lg text-white font-medium"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
