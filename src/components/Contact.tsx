
import { useState } from "react";
import { Button } from "../shared/ui/Button";
import { Input } from "../shared/ui/Input";
import { Textarea } from "../shared/ui/Textarea";
import { Github, Linkedin, Mail, Phone, Send, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "../shared/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SlideUp } from "../shared/animations/FadeIn";
import { useInView } from "../shared/hooks/use-in-view";
import { sendContactEmail } from "../lib/email";

const Contact = () => {
  const { toast } = useToast();
  const { ref, inView: isInView } = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name: string) => {
    setFocusedField(name);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state
    setFormState("submitting");
    
    try {
      // Send email using our email service
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      // Set success state
      setFormState("success");
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        type: "success",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form state after a delay
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    } catch (error) {
      setFormState("error");
      
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        type: "error",
      });
      
      // Reset form state after a delay
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }
  };

  return (
    <section className="section py-24 bg-navy/5" id="contact">
      <div className="container">
        <div ref={ref}>
          <SlideUp delay={0.1}>
            <h2 className="heading text-2xl md:text-3xl mb-3 flex items-center justify-center">
              Get In Touch
            </h2>
          </SlideUp>
          
          <FadeIn delay={0.2}>
            <p className="text-center text-navy-light max-w-lg mx-auto mb-12">
              I'm currently seeking opportunities as a Sales Quality Analyst Intern. Feel free to reach out if you'd like to connect or discuss potential collaborations!
            </p>
          </FadeIn>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <motion.label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    focusedField === 'name' ? 'text-highlight' : ''
                  }`}
                >
                  Name
                  {focusedField === 'name' && (
                    <motion.span 
                      className="ml-1 inline-block"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  )}
                </motion.label>
                
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  onFocus={() => handleFocus('name')} 
                  onBlur={handleBlur} 
                  required 
                  className="bg-navy/5 border-navy/10 focus-visible:ring-highlight transition-all duration-300"
                  disabled={formState === "submitting" || formState === "success"}
                />
                
                <AnimatePresence>
                  {focusedField === 'name' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              
              <div className="relative">
                <motion.label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    focusedField === 'email' ? 'text-highlight' : ''
                  }`}
                >
                  Email
                  {focusedField === 'email' && (
                    <motion.span 
                      className="ml-1 inline-block"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  )}
                </motion.label>
                
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  onFocus={() => handleFocus('email')} 
                  onBlur={handleBlur} 
                  required 
                  className="bg-navy/5 border-navy/10 focus-visible:ring-highlight"
                  disabled={formState === "submitting" || formState === "success"}
                />
                
                <AnimatePresence>
                  {focusedField === 'email' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              
              <div className="relative">
                <motion.label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    focusedField === 'message' ? 'text-highlight' : ''
                  }`}
                >
                  Message
                  {focusedField === 'message' && (
                    <motion.span 
                      className="ml-1 inline-block"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  )}
                </motion.label>
                
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  onFocus={() => handleFocus('message')} 
                  onBlur={handleBlur} 
                  required 
                  className="bg-navy/5 border-navy/10 focus-visible:ring-highlight min-h-[120px] transition-all duration-300"
                  disabled={formState === "submitting" || formState === "success"}
                />
                
                <AnimatePresence>
                  {focusedField === 'message' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              
              <Button 
                type="submit" 
                disabled={formState === "submitting" || formState === "success"}
                className="relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {formState === "idle" && (
                    <motion.div 
                      className="flex items-center"
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  )}
                  
                  {formState === "submitting" && (
                    <motion.div 
                      className="flex items-center"
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                      Sending...
                    </motion.div>
                  )}
                  
                  {formState === "success" && (
                    <motion.div 
                      className="flex items-center"
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Sent Successfully
                    </motion.div>
                  )}
                  
                  {formState === "error" && (
                    <motion.div 
                      className="flex items-center"
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Try Again
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Background animation on hover */}
                <motion.div 
                  className="absolute inset-0 bg-highlight/20"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="bg-navy/5 rounded-lg p-8 h-full"
              whileHover={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)', y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-navy">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <Mail className="text-highlight" size={20} />, 
                    title: "Email",
                    value: "arinkarmakar3@gmail.com",
                    href: "mailto:arinkarmakar3@gmail.com" 
                  },
                  { 
                    icon: <Phone className="text-highlight" size={20} />, 
                    title: "Phone",
                    value: "6294979223 | 9476476209",
                    href: "tel:+916294979223" 
                  },
                  { 
                    icon: <Linkedin className="text-highlight" size={20} />, 
                    title: "LinkedIn",
                    value: "linkedin.com/in/arin-karmakar",
                    href: "https://www.linkedin.com/in/arin-karmakar" 
                  },
                  { 
                    icon: <Github className="text-highlight" size={20} />, 
                    title: "GitHub",
                    value: "github.com/GODL0111",
                    href: "https://github.com/GODL0111" 
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-full bg-background mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-navy-light hover:text-highlight transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8 pt-6 border-t border-navy/10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <p className="font-medium mb-5">Connect with me:</p>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/GODL0111" },
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/arin-karmakar" },
                    { icon: <Mail size={20} />, href: "mailto:arinkarmakar3@gmail.com" },
                  ].map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.href}
                      className="p-3 bg-background rounded-full shadow-sm hover:text-highlight transition-all duration-300"
                      whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;