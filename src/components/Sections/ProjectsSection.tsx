import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useMedia } from "@/hooks/use-media";

const projects = [
  {
    title: "GravitycARgo",
    description: "An AI-driven system that boosts container space utilization to 85%, cutting costs, reducing product damage, and lowering CO2 emissions. It revolutionizes logistics with smarter, greener packing strategies.",
    image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    technologies: ["Python", "Neural Networks", "LLMs", "React"],
    url: "#"
  },
  {
    title: "The Light",
    description: "An innovative mobile application designed to empower visually impaired users with seamless navigation and secure online transactions, utilizing SSFD (Multi-Factor Authentication) for a unique touch-based PIN interface.",
    image: "https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["Python", "TensorFlow", "Yolo", "Flutter", "AI & ML"],
    url: "https://github.com/Saathvic/The-Light"
  },
  {
    title: "EcoBot",
    description: "An intelligent waste classification and recycling system that harnesses the power of LLaMA models for precision categorization, utilizing Retrieval-Augmented Generation (RAG) with LangChain, ChromaDB, and Ollama to optimize decision-making in waste management.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["Python", "RAG", "LangChain", "ChromaDB", "GenAI"],
    url: "https://github.com/Saathvic/Eco-Bot"
  },
  {
    title: "EyeQ",
    description: "Intelligent document processing system with OCR and natural language understanding.",
    image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["PyTorch", "NLP", "OCR", "FastAPI", "Document AI"],
    url: "https://github.com/Saathvic/AUTOMATED-DOCUMENT-MANAGEMENT-SYSTEM"
  },
  {
    title: "Accessible E-Commerce",
    description: "Fully accessible e-commerce platform with voice navigation and screen reader optimization.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React", "Next.js", "Accessibility", "Stripe", "Web Development"],
    url: "#"
  },
  {
    title: "Sustainable Agriculture Advisor",
    description: "AI-powered advisor for small farmers providing sustainable farming practices and personalized guidance to improve crop yields and resource management.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["NLP", "PyTorch", "AI", "Sustainability"],
    url: "https://github.com/Saathvic/AI-Agriculture-Adhvisor-for-small-farmers"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const isDesktop = useMedia('(min-width: 768px)', false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply 3D effect on desktop devices and when not expanded
    if (!cardRef.current || !isDesktop || isExpanded) return;
    
    const card = cardRef.current as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate rotation values
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
    const rotateX = ((centerY - y) / centerY) * 10; // Max 10 degrees
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 20, opacity: 0.7 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-xl overflow-hidden group flex flex-col ${isExpanded ? 'h-auto' : 'h-full'}`}
      style={{
        transform: isDesktop && !isExpanded
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
          : 'none',
        transition: "transform 0.1s ease"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => !isDesktop && setIsExpanded(!isExpanded)}
    >
      <div className="h-40 sm:h-44 md:h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
        
        {/* Animated overlay effect */}
        <motion.div 
          className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 relative flex flex-col flex-grow">
        {/* 3D floating badge */}
        <div 
          className="absolute -top-5 right-5 bg-primary text-white text-xs px-2 py-1 rounded-full"
          style={{
            transform: isDesktop ? `translateZ(20px)` : 'none',
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
          }}
        >
          Featured
        </div>
        
        <motion.h3 
          className="text-lg sm:text-xl font-bold mb-2 gradient-text line-clamp-1"
          style={{ transform: isDesktop ? `translateZ(30px)` : 'none' }}
        >
          {project.title}
        </motion.h3>
        
        <motion.div className="mb-4">
          <motion.p 
            className={`text-white/80 text-sm sm:text-base ${isExpanded ? '' : 'min-h-[5rem] line-clamp-4 sm:line-clamp-3 md:line-clamp-4'}`}
            style={{ transform: isDesktop ? `translateZ(20px)` : 'none' }}
          >
            {project.description}
          </motion.p>
          {project.description.length > 100 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="text-primary text-xs mt-1 hover:underline focus:outline-none"
              style={{ transform: isDesktop ? `translateZ(20px)` : 'none' }}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-1 sm:gap-2 mb-4 max-w-full overflow-hidden"
          style={{ transform: isDesktop ? `translateZ(25px)` : 'none' }}
        >
          {(isExpanded ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="bg-primary/10 border-primary/30 text-primary glow text-xs sm:text-sm whitespace-nowrap"
            >
              {tech}
            </Badge>
          ))}
          {!isExpanded && project.technologies.length > 4 && (
            <Badge
              variant="outline"
              className="bg-primary/10 border-primary/30 text-primary glow text-xs sm:text-sm whitespace-nowrap"
            >
              +{project.technologies.length - 4}
            </Badge>
          )}
        </motion.div>
        
        <motion.a 
          href={project.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-3 sm:py-1.5 bg-primary/20 hover:bg-primary/30 rounded-full text-primary font-medium text-sm mt-auto sm:mt-2 transition-colors"
          style={{ transform: isDesktop && !isExpanded ? `translateZ(35px)` : 'none' }}
          onClick={(e) => e.stopPropagation()}
        >
          View Project 
          <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDesktop = useMedia('(min-width: 768px)', false);
  
  return (
    <section id="projects" className="section py-16 sm:py-20 bg-gradient-to-b from-background to-background/80 relative">
      {/* Background elements - reduced complexity on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: isDesktop ? 10 : 5 }).map((_, i) => (
            <div
              key={`horizontal-${i}`}
              className="absolute left-0 right-0 h-px bg-primary/30"
              style={{ top: `${isDesktop ? 10 * i : 20 * i}%`, opacity: 0.3 }}
            />
          ))}
          
          {Array.from({ length: isDesktop ? 10 : 5 }).map((_, i) => (
            <div
              key={`vertical-${i}`}
              className="absolute top-0 bottom-0 w-px bg-primary/30"
              style={{ left: `${isDesktop ? 10 * i : 20 * i}%`, opacity: 0.3 }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Projects</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text glow-text">Featured Work</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
