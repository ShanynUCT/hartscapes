import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { 
  Award, 
  Users, 
  ThumbsUp, 
  CheckCircle2, 
  ArrowRight, 
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

interface StatItemProps {
  icon: JSX.Element;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-2 group">
      <div className="text-primary mb-1 opacity-80 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="text-[9px] font-black uppercase tracking-[0.1em] text-muted-foreground/70">
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const stats = [
    { icon: <Award size={18} />, value: "25+ years", label: "Experience" },
    { icon: <Users size={18} />, value: "300+", label: "Clients" },
    { icon: <ThumbsUp size={18} />, value: "98%", label: "Satisfaction" }
  ];

  const expectations = [
    "Clear, collaborative planning from concept to completion.",
    "Craft-focused builds for Cape Town’s climate.",
    "Water-wise and seasonal planting palettes.",
    "Reliable timelines with respectful site teams."
  ];

  const beforeAfterImages = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/BeforeAfter/${i + 1}.png`,
    alt: `Transformation ${i + 1}`
  }));

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: 9:16 Vertical Carousel */}
          <motion.div 
            className="lg:col-span-5 xl:col-span-4 relative mx-auto lg:mx-0 w-full max-w-[400px] lg:max-w-none"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Changed aspect-ratio to 9/16 */}
            <div className="relative aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-background bg-slate-50">
              <Carousel 
                setApi={setApi} 
                opts={{ loop: true, orientation: "vertical" }}
                plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
                className="w-full h-full"
              >
                <CarouselContent className="h-full -mt-1">
                  {beforeAfterImages.map((image) => (
                    <CarouselItem key={image.id} className="pt-1 h-full">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Vertical Navigation Controls */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row lg:flex-col gap-3 z-30">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="h-10 w-10 rounded-full bg-white/95 backdrop-blur shadow-lg hover:bg-primary hover:text-white transition-all"
                  onClick={() => api?.scrollPrev()}
                >
                  <ChevronUp size={20} />
                </Button>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="h-10 w-10 rounded-full bg-white/95 backdrop-blur shadow-lg hover:bg-primary hover:text-white transition-all"
                  onClick={() => api?.scrollNext()}
                >
                  <ChevronDown size={20} />
                </Button>
              </div>

              {/* Floating Counter Badge */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full z-30">
                <span className="text-[11px] font-bold text-white tracking-[0.2em]">
                  {current.toString().padStart(2, '0')} / {beforeAfterImages.length}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content with Integrated Team Image */}
          <div className="lg:col-span-7 xl:col-span-8 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block underline underline-offset-8 decoration-primary/30">
                Our Story
              </span>
              
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.05] flex-1">
                  Landscaping with Drive and <br />
                  <span className="text-primary italic font-serif">Passion Since 2000</span>
                </h2>
                
                <motion.div 
                  className="w-32 h-32 md:w-44 md:h-44 shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3 group hover:rotate-0 transition-transform duration-500 hidden sm:block"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="/gallery/team2.png" 
                    alt="The Hartscapes Team" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-3xl">
                <p>
                  <strong className="text-foreground">Hartscapes</strong> is an owner-run landscaping company based in Cape Town, 
                  dedicated to transforming outdoor spaces with over 25 years of landscape and garden design experience.
                </p>
                <p>
                  We specialize in garden design, tree felling, and plot clearing, creating sustainable landscapes 
                  tailored to the unique South African environment.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 border-t border-primary/10 pt-8 max-w-3xl">
                {expectations.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <p className="text-[14px] font-medium text-foreground/80 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col xl:flex-row items-center gap-12 border-t border-primary/10 pt-10">
                <Button 
                  size="lg"
                  className="rounded-full px-12 py-8 h-auto bg-primary text-white hover:scale-105 transition-all shadow-xl shadow-primary/20 shrink-0 uppercase text-[11px] font-bold tracking-widest"
                  onClick={() => {
                    navigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="grid grid-cols-3 gap-8 flex-1 w-full max-w-sm">
                  {stats.map((stat, i) => (
                    <StatItem key={i} {...stat} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}