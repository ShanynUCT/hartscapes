import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/servicesData";
import { Leaf, Shovel, Droplets, Sprout, Flame, BrickWall, Hammer, Palette } from "lucide-react";

const iconsMap: Record<string, JSX.Element> = {
  Leaf: <Leaf size={24} />,
  Shovel: <Shovel size={24} />,
  Droplets: <Droplets size={24} />,
  Sprout: <Sprout size={24} />,
  Flame: <Flame size={24} />,
  BrickWall: <BrickWall size={24} />,
  Hammer: <Hammer size={24} />,
  Palette: <Palette size={24} />,
};

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Our Landscaping Services</h2>
          <p className="text-muted-foreground">
            Comprehensive landscaping solutions tailored to South Africa's unique climate and native flora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.slug}
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {iconsMap[service.icon]}
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="p-0 hover:bg-transparent hover:text-primary"
                  onClick={() => navigate(`/services/${service.slug}`)}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}