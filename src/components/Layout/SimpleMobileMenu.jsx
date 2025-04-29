function MobileMenu(props) {
  const { isOpen, onClose, activeSection = 'hero' } = props;
  
  // Menu items
  const menuItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  
  // Close menu when clicking a link
  const handleLinkClick = (e) => {
    setTimeout(() => {
      onClose();
    }, 100);
  };
  
  // Effect for handling escape key and body scroll
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);
  
  // Render nothing if menu is closed
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 w-full h-full bg-[#0f0f14]/95 backdrop-blur-md z-50">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/20 bg-black/40">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-[#0f0f14] to-[#161621]">
          <ul className="space-y-4 max-w-md mx-auto py-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`block py-5 px-6 text-xl text-center font-medium rounded-lg transition-colors border ${
                    activeSection === item.id
                      ? 'bg-primary/30 border-primary/50 text-white'
                      : 'hover:bg-white/10 border-transparent text-white/90'
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-white/20 bg-black/40">
          <div className="max-w-md mx-auto">
            <a 
              href="#contact"
              onClick={handleLinkClick}
              className="block py-4 text-center bg-primary hover:bg-primary/80 rounded-lg text-white text-xl font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
