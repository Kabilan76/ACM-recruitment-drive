import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import eventHackathon from "@/assets/event-hackathon.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventTalk from "@/assets/event-talk.jpg";
import eventProjects from "@/assets/event-projects.jpg";

const EventsCarousel = () => {
  const events = [
    {
      image: eventHackathon,
      title: "InnoTech 2025",
      description: "InnoTech 2025 – An ACM SIGAI event highlighting AI innovations.",
      type: "Hackathon"
    },
    {
      image: eventWorkshop,
      title: "Placement Talk",
      description: "Placement Talk – An ACM SIGAI session guiding students on career and placement preparation.",
      type: "Workshop"
    },
    {
      image: eventTalk,
      title: "CogniHack 1.0",
      description: "CogniHack 1.0 – An ACM SIGAI hackathon on AI creativity and problem-solving.",
      type: "Hackathon"
    },
    {
      image: eventProjects,
      title: "Quiz Event",
      description: "Quiz Event – An ACM SIGAI knowledge challenge on AI and technology.",
      type: "Quiz"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="domain-card h-full">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default EventsCarousel;