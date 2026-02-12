
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Flower2 } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroRef.current;
        
        const xPos = (clientX / offsetWidth - 0.5) * 20;
        const yPos = (clientY / offsetHeight - 0.5) * 20;
        
        heroRef.current.style.setProperty('--x-pos', `${xPos}px`);
        heroRef.current.style.setProperty('--y-pos', `${yPos}px`);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ 
        '--x-pos': '0px', 
        '--y-pos': '0px',
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 z-0">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-fynbos-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-savanna-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float mb-4 inline-block">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Leaf size={16} className="animate-leaf-wave" />
              <span>Premier Landscaping in South Africa</span>
            </div>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient"
            style={{ 
              transform: `translate(calc(var(--x-pos) * -0.05), calc(var(--y-pos) * -0.05))`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            Transform Your Outdoor Space Into A Natural Paradise
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{ 
              transform: `translate(calc(var(--x-pos) * -0.02), calc(var(--y-pos) * -0.02))`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            Bringing the beauty of South African landscapes to your home with sustainable design, 
            native plant expertise, and artful garden creation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-xl text-primary-foreground px-8 py-6 h-auto"
              style={{ 
                transform: `translate(calc(var(--x-pos) * 0.1), calc(var(--y-pos) * 0.1))`,
                transition: 'transform 0.1s ease-out'
              }}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Get a Free Consultation <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              variant="outline" 
              className="bg-background/50 backdrop-blur-sm border-primary/20 text-foreground hover:bg-primary/10 text-xl px-8 py-6 h-auto"
              style={{ 
                transform: `translate(calc(var(--x-pos) * 0.05), calc(var(--y-pos) * 0.05))`,
                transition: 'transform 0.1s ease-out'
              }}
              onClick={() => navigate('/projects')}
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div 
        className="absolute bottom-10 left-10 w-20 h-20 opacity-80"
        style={{ 
          transform: `translate(calc(var(--x-pos) * 0.2), calc(var(--y-pos) * 0.2))`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Flower2 
          className="text-accent animate-sway" 
          strokeWidth={1} 
          size={80} 
        />
      </div>
      
      <div 
        className="absolute top-40 right-20 w-16 h-16 opacity-80"
        style={{ 
          transform: `translate(calc(var(--x-pos) * 0.3), calc(var(--y-pos) * 0.3))`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Leaf 
          className="text-fynbos-500 animate-sway" 
          strokeWidth={1} 
          size={64} 
        />
      </div>
    </section>
  );
}
