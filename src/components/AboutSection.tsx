import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import EventsCarousel from "./EventsCarousel";
import { Brain, Users, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Explore cutting-edge artificial intelligence technologies and research"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded students passionate about technology"
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description: "Participate in workshops, hackathons, and educational events"
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Build skills and network for your future tech career"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            About Us
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            What is <span className="gradient-text">ACM SIGAI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ACM SIGAI (Special Interest Group on Artificial Intelligence) is a global community 
            dedicated to advancing the field of AI. At SRMIST, we organize cutting-edge workshops, 
            competitive hackathons, and inspiring guest lectures to spread AI knowledge and 
            foster innovation among students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="domain-card group">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Events Section */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Past Events</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hackathons to workshops, we've been building an amazing community of AI enthusiasts.
          </p>
        </div>

        <EventsCarousel />
      </div>
    </section>
  );
};

export default AboutSection;