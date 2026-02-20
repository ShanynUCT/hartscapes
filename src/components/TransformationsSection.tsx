import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious, 
  type CarouselApi 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

export default function TransformationsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  
  // Generate array of before/after images (1.png to 25.png)
  const beforeAfterImages = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/BeforeAfter/${i + 1}.png`,
    alt: `Before and After Transformation ${i + 1}`
  }));

  // Logic to handle dynamic progress bar and index tracking
  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap() + 1);
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const progressPercent = (current / beforeAfterImages.length) * 100;

  return (
    <section id="transformations" className="py-16 relative overflow-hidden">
      {/* Enhanced background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -ml-40 -mb-40 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Centered & Enlarged Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center w-full"
          >
            <div className="relative w-full flex justify-center">
              {/* Glow effect behind carousel */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-2xl -z-10 scale-110" />
              
              {/* Larger Container: max-w-[380px] to md:max-w-[440px] */}
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-2xl overflow-hidden w-full max-w-[380px] md:max-w-[440px]">
                <Carousel 
                  setApi={setApi} 
                  opts={{
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 2000,
                      stopOnInteraction: false, // Keeps playing after user interaction
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {beforeAfterImages.map((image) => (
                      <CarouselItem key={image.id}>
                        {/* 9:16 Aspect Ratio maintained */}
                        <div className="aspect-[9/16] overflow-hidden bg-background">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            loading="lazy"
                            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-primary/90 hover:bg-primary text-white border-0 shadow-lg hover:scale-110 transition-all" />
                  <CarouselNext className="right-4 bg-primary/90 hover:bg-primary text-white border-0 shadow-lg hover:scale-110 transition-all" />
                </Carousel>

                {/* Dynamic Footer with Progress Indicator */}
                <div className="flex flex-col gap-3 p-5 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-primary/10">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      {beforeAfterImages.length} Transformations
                    </span>
                    <span className="text-xs font-bold text-primary">
                      {current} / {beforeAfterImages.length}
                    </span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Work</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 font-display text-foreground">
                Transformations
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            
            <p className="text-muted-foreground text-base leading-relaxed">
              See the incredible before and after transformations we've created for our clients across Cape Town. Each project represents our commitment to turning outdoor spaces into extraordinary destinations where memories are made.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: "Complete Landscape Overhauls", desc: "From bare sites to stunning gardens with strategic design." },
                { title: "Structural & Planting Solutions", desc: "Hardscaping, retaining walls, and palettes that thrive." },
                { title: "Real Results, Real Impact", desc: `${beforeAfterImages.length}+ transformations proven to enhance property value.` }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button 
                onClick={() => {
                  navigate('/projects');
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
                }}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all w-full sm:w-auto text-white px-8"
                size="lg"
              >
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}