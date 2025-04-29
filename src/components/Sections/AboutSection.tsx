import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, HeartHandshake, Clock, PenTool, Users, CircleUser, Code, Database, Cpu, Terminal, Sparkles } from "lucide-react";
// Import the image from src/assets for proper bundling
import profileImage from "../../assets/profile.png";

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
          <h3 className="text-4xl md:text-5xl font-bold text-white">Expertise & Skills</h3>
        </motion.div>
        
        {/* Photo and bio section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-20 landscape:grid-cols-3 landscape:gap-4 landscape:mb-10">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto"
            >
              <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden border-4 border-primary/30 relative mx-auto landscape:w-[120px] landscape:h-[120px]">
                <img 
                  src={profileImage} 
                  alt="Saathvic Sathish" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl landscape:w-10 landscape:h-10"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/20 rounded-full blur-lg landscape:w-8 landscape:h-8"></div>
            </motion.div>
          </div>
          
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4">
                I'm a passionate IT student and developer who believes that technology should be inclusive, 
                intelligent, and impactful. My work revolves around solving real-world problems through 
                accessibility-focused and sustainability-driven solutions using AI, AR, and smart systems.
              </p>
              <p className="text-base sm:text-lg text-white/90">
                From building navigation tools for the blind to optimizing container logistics using 
                advanced AI and AR techniques, I aim to make a real difference through tech. I'm a strong 
                believer in blending technical skills with empathy to design tools that are truly meaningful.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Skills section with new design */}
        <div className="mb-20 landscape:mb-8">
          <h4 className="text-2xl font-bold mb-8 text-white text-center landscape:text-xl landscape:mb-4">Technical Skills</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 landscape:grid-cols-5 landscape:gap-2">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-4 rounded-lg text-center hover-3d group landscape:p-2"
                >
                  <div className="mb-3 flex justify-center landscape:mb-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary landscape:w-8 landscape:h-8">
                      <Icon size={24} className="landscape:w-4 landscape:h-4" />
                    </div>
                  </div>
                  <h5 className="text-md font-medium landscape:text-xs">{skill.name}</h5>
                  {skill.tag && <span className="text-xs text-primary landscape:text-[10px]">{skill.tag}</span>}
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Soft skills section with unique visual style */}
        <div className="mb-10 landscape:mb-4">
          <h4 className="text-2xl font-bold mb-8 text-white text-center landscape:text-xl landscape:mb-4">Soft Skills</h4>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 landscape:grid-cols-6 landscape:gap-2">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-3 sm:p-4 rounded-lg text-center hover-3d group landscape:p-2"
                >
                  <div className="mb-2 sm:mb-3 flex justify-center landscape:mb-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary landscape:w-6 landscape:h-6">
                      <Icon size={20} className="sm:w-5 sm:h-5 w-4 h-4 landscape:w-3 landscape:h-3" />
                    </div>
                  </div>
                  <h5 className="text-sm sm:text-md font-medium landscape:text-xs">{skill.name}</h5>
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
