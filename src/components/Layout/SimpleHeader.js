import React, { useState, useEffect } from "react";

// Simple Mobile Menu component
function SimpleMobileMenu({ isOpen, onClose, activeSection }) {
  if (!isOpen) return null;
  
  const menuItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);
  
  return (
    <div className="fixed inset-0 bg-black/95 z-50">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-white/20">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button onClick={onClose} className="p-2">✕</button>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {menuItems.map(item => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={`block p-4 text-xl text-center rounded-lg ${
                    activeSection === item.id ? 'bg-purple-700/30' : ''
                  }`}
                  onClick={() => setTimeout(onClose, 100)}
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
}

// Header component
function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? "bg-black/90 py-3 shadow-lg" : "bg-gradient-to-b from-black/90 to-black/40 py-6"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
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
                    className={`relative ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <button 
          className="md:hidden bg-purple-700 p-3 rounded-full fixed bottom-6 right-6 z-50"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      
      <SimpleMobileMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        activeSection={activeSection} 
      />
    </header>
  );
}

module.exports = Header;
