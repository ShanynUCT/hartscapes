import { Button } from "@/components/ui/button";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StatItemProps {
  icon: JSX.Element;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const navigate = useNavigate();
  
  const stats = [
    {
      icon: <Award size={24} />,
      value: "25+",
      label: "Years Experience"
    },
    {
      icon: <Users size={24} />,
      value: "300+",
      label: "Happy Clients"
    },
    {
      icon: <Clock size={24} />,
      value: "500+",
      label: "Projects Completed"
    },
    {
      icon: <ThumbsUp size={24} />,
      value: "98%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-fynbos-50/50 to-transparent z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary rounded-lg opacity-10 animate-float"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-accent rounded-lg opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[16/9] rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533467915241-eac02e856653?q=80&w=1470&auto=format&fit=crop" 
                    alt="Garden design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-tl-3xl rounded-br-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1632&auto=format&fit=crop" 
                    alt="Landscaping work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1470&auto=format&fit=crop" 
                    alt="Garden tools" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Landscaping with Drive and Passion Since 2000
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Hartscapes is an owner-run landscaping company based in Cape Town, dedicated to transforming outdoor spaces 
              with over 25 years of landscape and garden design experience. Our team has done it all, bringing passion 
              and expertise to every project.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Specializing in garden design and implementation, tree felling, plot clearing, garden revamps, and cleaning, 
              we create sustainable and beautiful landscapes tailored to the unique South African environment.
            </p>
            
            <div className="mb-8 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold mb-3">What you can expect</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Clear, collaborative planning from concept to completion.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Craft-focused builds that stand up to Cape Town’s climate.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Planting palettes that are water-wise and seasonal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Reliable timelines with tidy, respectful site teams.
                </li>
              </ul>
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                navigate('/about');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
              }}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}