import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useRef, useEffect } from "react";
import { useMedia } from "@/hooks/use-media";

export default function HeroSection() {
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
          
          {/* Multiple floating particles with 3D movement - Using your reference style */}
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
          
          {/* Animated horizontal lines - Using your reference style */}
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
}
