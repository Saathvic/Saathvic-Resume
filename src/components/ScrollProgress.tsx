
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left transform-gpu ${
        !scrolled ? "opacity-0" : "opacity-100"
      } transition-opacity duration-300`}
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
