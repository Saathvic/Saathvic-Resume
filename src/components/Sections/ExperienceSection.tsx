import { useRef } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Award } from "lucide-react";

const experiences = [
  {
    title: "Generative AI Intern",
    company: "AICTE 1M1B Flaunch",
    period: "Oct 2024 - Nov 2024",
    description: "Worked on real-world GenAI problems using LLaMA and LangChain. Involved in prompt engineering and model integration for sustainability-focused use cases.",
  },
  {
    title: "Associate AI Intern",
    company: "Nuvera Infotech Pvt. Ltd.",
    period: "Jul 2024 - Oct 2024",
    description: "Developed AI-based backend solutions to optimize client business operations. Contributed to scalable architecture and smart system integration.",
  },
];

const certifications = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "2024",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2023",
  },
  {
    title: "Unity VR Developer Course",
    issuer: "Udemy",
    date: "2023",
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    date: "2023",
  },
];

const educations = [
  {
    title: "Bachelor of Technology in Information Technology",
    company: "Sri Manakula Vinayagar Engineering College",
    period: "2022 - Present",
    description: "GPA: 8.24. Participated in national-level hackathons. Specialized in AI, AR, and accessibility-based technologies.",
  },
  {
    title: "Higher Secondary",
    company: "Achariya Bala Siksha Mandir",
    period: "2021 - 2022",
    description: "Score: 84.4%. Computer Science stream. Developed early tech interest and mini projects.",
  },
  {
    title: "High School",
    company: "Achariya Bala Siksha Mandir",
    period: "2019 - 2020",
    description: "Score: 75%. Active in science fairs and coding events.",
  },
];

const TimelineItem = ({ 
  item, 
  index, 
  isLeft 
}: { 
  item: typeof experiences[0], 
  index: number, 
  isLeft: boolean 
}) => {
  return (
    <div
      className={`mb-12 flex justify-between items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`hidden md:block w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-primary mb-1">{item.company}</p>
        <p className="flex items-center text-white/70 text-sm mb-2 gap-1 justify-end">
          <CalendarDays className="h-4 w-4" />
          {item.period}
        </p>
      </div>
      
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white font-bold">{index + 1}</span>
        </div>
        <div className="absolute top-10 bottom-0 left-1/2 w-1 bg-primary/20 -translate-x-1/2" />
      </div>
      
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="md:hidden mb-2">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-primary mb-1">{item.company}</p>
          <p className="flex items-center text-white/70 text-sm mb-2 gap-1">
            <CalendarDays className="h-4 w-4" />
            {item.period}
          </p>
        </div>
        <p className="text-white/80">{item.description}</p>
      </div>
    </div>
  );
};

const CertificationCard = ({ 
  cert, 
  index
}: { 
  cert: typeof certifications[0], 
  index: number
}) => {
  return (
    <div className="glass-card p-4 rounded-lg hover-3d">
      <div className="flex items-start gap-3">
        <Award className="text-primary mt-1 h-5 w-5" />
        <div>
          <h4 className="font-medium">{cert.title}</h4>
          <div className="flex justify-between text-sm text-white/70">
            <span>{cert.issuer}</span>
            <span>{cert.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  
  return (
    <section id="experience" className="section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16" ref={sectionRef}>
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">My Journey</h3>
        </div>

        {/* Work Experience Timeline */}
        <div className="relative mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Work Experience</h3>
          {/* Center line - visible only on larger screens */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 z-0" />
          
          {/* Timeline items */}
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={exp.title} 
                item={exp} 
                index={index} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
        
        {/* Education Timeline */}
        <div className="relative mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Education</h3>
          {/* Center line - visible only on larger screens */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 z-0" />
          
          {/* Timeline items */}
          <div className="relative z-10">
            {educations.map((edu, index) => (
              <TimelineItem 
                key={edu.title} 
                item={edu} 
                index={index}
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
