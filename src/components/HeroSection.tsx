import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 tech-pattern opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-pulse">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-40 right-32 animate-pulse delay-1000">
        <Zap className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-32 left-32 animate-pulse delay-500">
        <Sparkles className="w-10 h-10 text-secondary" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">ACM SIGAI SRMIST</span>
            <br />
            <span className="text-foreground">Recruitment Drive</span>
            <br />
            <span className="text-primary text-4xl md:text-5xl lg:text-6xl">2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us in shaping the future of <span className="text-primary font-semibold">AI</span>, 
            <span className="text-secondary font-semibold"> Innovation</span>, and 
            <span className="text-accent font-semibold"> Community</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('domains')}
              className="btn-hero group"
            >
              Apply Now
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="btn-hero-outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;