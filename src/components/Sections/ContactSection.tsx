import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactCard = ({ title, icon, value, link }: { 
  title: string, 
  icon: "email" | "linkedin" | "github", 
  value: string, 
  link: string 
}) => {
  return (
    <a
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glass p-4 rounded-lg text-center hover-3d group"
    >
      <div className="h-14 w-14 mx-auto mb-2 flex items-center justify-center text-primary">
        {icon === "email" && <Mail size={28} />}
        {icon === "linkedin" && <Linkedin size={28} />}
        {icon === "github" && <Github size={28} />}
      </div>
      
      <div className="mt-3">
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <p className="text-white/70 group-hover:text-primary transition-colors text-sm break-words overflow-hidden">{value}</p>
      </div>
    </a>
  );
};

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      const response = await fetch("https://formspree.io/f/manererb", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass p-6 rounded-lg w-full"
    >
      <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input 
              id="name"
              name="name"
              required 
              placeholder="Your name" 
              className="bg-white/5 border-white/10 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input 
              id="email"
              name="email" 
              type="email"
              required
              placeholder="Your email" 
              className="bg-white/5 border-white/10 focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <Input 
            id="subject"
            name="subject"
            required
            placeholder="Subject" 
            className="bg-white/5 border-white/10 focus:border-primary focus:ring-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <Textarea 
            id="message"
            name="message"
            required
            placeholder="Your message" 
            className="bg-white/5 border-white/10 focus:border-primary focus:ring-primary h-32"
          />
        </div>
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white">
          Send Message
        </Button>
      </div>
    </form>
  );
};

const ContactSection = () => {
  const sectionRef = useRef(null);
  
  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-t from-background/90 to-background flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={sectionRef}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">Get In Touch</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            
            <p className="text-white/80 mb-8">
              I'm open to internships, collaborations, hackathons, and projects that use technology 
              to solve meaningful problems. Whether it's accessibility, AI, or sustainability—let's 
              connect and build something impactful.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ContactCard 
                title="Email" 
                icon="email" 
                value="saathvicsathish@gmail.com" 
                link="mailto:saathvicsathish@gmail.com" 
              />
              <ContactCard 
                title="LinkedIn" 
                icon="linkedin" 
                value="Saathvic Sathish" 
                link="https://linkedin.com/in/saathvic-sathish-1194b5264" 
              />
              <ContactCard 
                title="GitHub" 
                icon="github" 
                value="Saathvic" 
                link="https://github.com/Saathvic" 
              />
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
