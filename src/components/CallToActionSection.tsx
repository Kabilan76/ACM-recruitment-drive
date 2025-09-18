import { Button } from "@/components/ui/button";
import { ArrowUp, Rocket, Stars } from "lucide-react";

const CallToActionSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-pattern opacity-10" />
      <div className="absolute top-10 left-10 animate-pulse">
        <Stars className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-20 right-20 animate-pulse delay-1000">
        <Rocket className="w-8 h-8 text-primary" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA Content */}
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Be part of the next
            <br />
            <span className="gradient-text">AI Revolution</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Join <span className="text-primary font-semibold">ACM SIGAI SRMIST</span> and 
            help shape the future of artificial intelligence with passionate peers and industry experts.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            onClick={() => scrollToSection('domains')}
            className="btn-hero group text-lg px-12 py-6"
          >
            <Rocket className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Join Us Now
          </Button>
          
          <Button 
            onClick={() => scrollToSection('about')}
            variant="outline"
            className="btn-hero-outline text-lg px-8 py-6"
          >
            Learn More About Us
          </Button>
        </div>

        {/* Stats or Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">18+</div>
            <div className="text-muted-foreground">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">AI Projects Built</div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center">
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="sm"
          className="group"
        >
          <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
          Back to Top
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;