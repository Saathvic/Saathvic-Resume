import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, HeartHandshake, Clock, PenTool, Users, CircleUser, Code, Database, Cpu, Terminal, Sparkles } from "lucide-react";
// Import the image directly to let bundler handle the path
import profileImage from "/image.png";

// Separate technical and soft skills
const technicalSkills = [
  { name: "LangChain & LLaMA", icon: Cpu },
  { name: "YOLO & OpenCV", icon: Terminal },
  { name: "Generative AI", icon: Sparkles, tag: "basic" },
  { name: "AR Development", icon: Brain },
  { name: "Database Management", icon: Database },
];

// Soft skills with icons
const softSkills = [
  { name: "Problem Solving", icon: Brain },
  { name: "Team Leadership", icon: Users },
  { name: "Communication", icon: HeartHandshake },
  { name: "Project Management", icon: PenTool },
  { name: "Time Management", icon: Clock },
  { name: "Adaptability", icon: CircleUser },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section id="about" className="section bg-background relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(50px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">Expertise & Skills</h3>
        </motion.div>
        
        {/* Photo and bio section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-20">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto"
            >
              <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-primary/30 relative mx-auto">
                <img 
                  src="public\image.png" 
                  alt="Saathvic Sathish" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
            </motion.div>
          </div>
          
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <p className="text-lg text-white/90 mb-4">
                I'm a passionate IT student and developer who believes that technology should be inclusive, 
                intelligent, and impactful. My work revolves around solving real-world problems through 
                accessibility-focused and sustainability-driven solutions using AI, AR, and smart systems.
              </p>
              <p className="text-lg text-white/90">
                From building navigation tools for the blind to optimizing container logistics using 
                advanced AI and AR techniques, I aim to make a real difference through tech. I'm a strong 
                believer in blending technical skills with empathy to design tools that are truly meaningful.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Skills section with new design */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold mb-8 gradient-text text-center">Technical Skills</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-4 rounded-lg text-center hover-3d group"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h5 className="text-md font-medium">{skill.name}</h5>
                  {skill.tag && <span className="text-xs text-primary">{skill.tag}</span>}
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Soft skills section with unique visual style */}
        <div className="mb-10">
          <h4 className="text-2xl font-bold mb-8 gradient-text text-center">Soft Skills</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-4 rounded-lg text-center hover-3d group"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h5 className="text-md font-medium">{skill.name}</h5>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
