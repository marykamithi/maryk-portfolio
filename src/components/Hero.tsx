import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Availability Badge */}
        <Badge 
          variant="secondary" 
          className="mb-8 text-sm px-4 py-2 bg-secondary/50 border border-primary/20"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
          Available for new opportunities
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="block text-foreground mb-2">Mary Kamithi</span>
          <span className="gradient-text">Data Scientist</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
          & Software Engineer
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          I specialize in{" "}
          <span className="text-primary font-semibold">AI & machine learning</span>{" "}
          solutions, creating intelligent applications that transform data into meaningful insights 
          and drive real-world impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto"
          >
            Explore My Work
          </Button>
          <Button 
            variant="gradient-outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto"
          >
            Let's Connect
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://github.com/marykamithi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/marykamithi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:marykamithi3@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-300" />
    </section>
  );
};

export default Hero;