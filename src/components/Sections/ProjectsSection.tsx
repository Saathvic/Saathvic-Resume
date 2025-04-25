import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
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
      className="glass-card rounded-xl overflow-hidden group"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
      
      <div className="p-6 relative">
        {/* 3D floating badge */}
        <div 
          className="absolute -top-5 right-5 bg-primary text-white text-xs px-2 py-1 rounded-full"
          style={{
            transform: `translateZ(20px)`,
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
          }}
        >
          Featured
        </div>
        
        <motion.h3 
          className="text-xl font-bold mb-2 gradient-text"
          style={{ transform: `translateZ(30px)` }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-white/80 mb-4 h-20 overflow-hidden"
          style={{ transform: `translateZ(20px)` }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          style={{ transform: `translateZ(25px)` }}
        >
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="bg-primary/10 border-primary/30 text-primary glow"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
        
        <motion.a 
          href={project.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          style={{ transform: `translateZ(35px)` }}
        >
          View More 
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="projects" className="section bg-gradient-to-b from-background to-background/80 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`horizontal-${i}`}
              className="absolute left-0 right-0 h-px bg-primary/30"
              style={{ top: `${10 * i}%`, opacity: 0.3 }}
            />
          ))}
          
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`vertical-${i}`}
              className="absolute top-0 bottom-0 w-px bg-primary/30"
              style={{ left: `${10 * i}%`, opacity: 0.3 }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text glow-text">Featured Work</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
