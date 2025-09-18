import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Megaphone, Share2, Palette, ExternalLink } from "lucide-react";

const DomainsSection = () => {
  const domains = [
    {
      icon: Code2,
      title: "Technical Team",
      description: "Dive deep into AI/ML development, build cutting-edge projects, and participate in competitive hackathons. Perfect for coding enthusiasts!",
      skills: ["Python", "Machine Learning", "AI Development", "etc"],
      color: "primary",
      formUrl: "https://forms.gle/tqeCtzgBcPuNyfsX8" // Will be replaced with actual Google Form link
    },
    {
      icon: Megaphone,
      title: "Corporate & Publicity",
      description: "Handle sponsorships, build industry partnerships, and manage outreach programs. Great for networking and business development.",
      skills: ["Partnership Management", "Communication", "Event Planning", "Networking"],
      color: "secondary",
      formUrl: "https://forms.gle/GMpm8iZQKRUnwTBeA" // Will be replaced with actual Google Form link
    },
    {
      icon: Share2,
      title: "Social Media Team",
      description: "Manage our Instagram, LinkedIn presence, create engaging content, and boost community engagement across platforms.",
      skills: ["Content Creation", "Social Media", "Community Management", "Analytics"],
      color: "accent",
      formUrl: "https://forms.gle/55D5Vx6EBdsDVFi37" // Will be replaced with actual Google Form link
    },
    {
      icon: Palette,
      title: "Creatives Team",
      description: "Design stunning posters, create promotional videos, work on UI/UX projects, and bring creative visions to life.",
      skills: ["Graphic Design", "Video Editing", "UI/UX Design", "Creative Content"],
      color: "primary",
      formUrl: "https://forms.gle/SLuDr3CYViqYjJUi9" // Will be replaced with actual Google Form link
    }
  ];

  const getCardClasses = (color: string) => {
    const baseClasses = "domain-card group cursor-pointer h-full";
    switch (color) {
      case "primary":
        return `${baseClasses} hover:border-primary/50`;
      case "secondary":
        return `${baseClasses} hover:border-secondary/50`;
      case "accent":
        return `${baseClasses} hover:border-accent/50`;
      default:
        return baseClasses;
    }
  };

  const getIconClasses = (color: string) => {
    const baseClasses = "w-12 h-12 mb-4 group-hover:scale-110 transition-transform";
    switch (color) {
      case "primary":
        return `${baseClasses} text-primary`;
      case "secondary":
        return `${baseClasses} text-secondary`;
      case "accent":
        return `${baseClasses} text-accent`;
      default:
        return baseClasses;
    }
  };

  return (
    <section id="domains" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Join Our Team
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="gradient-text">Domain</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the perfect role that matches your skills and interests. Each domain offers unique 
            opportunities to grow, learn, and contribute to our AI community.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {domains.map((domain, index) => (
            <Card key={index} className={getCardClasses(domain.color)}>
              <CardHeader className="text-center pb-4">
                <domain.icon className={getIconClasses(domain.color)} />
                <CardTitle className="text-2xl font-bold mb-2">{domain.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {domain.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Skills */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {domain.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Button 
                  className="w-full group"
                  onClick={() => window.open(domain.formUrl, '_blank')}
                >
                  Apply Now
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Application deadline: <span className="text-primary font-semibold">Sep-26,2025</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Selected candidates will be contacted within 1 week of application submission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;