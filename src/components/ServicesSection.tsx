import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/servicesData";
import { 
  Trees, Axis3d, Droplets, Waves, Flame, 
  Mountain, Home, Grid3x3, BoxSelect, ArrowUpRight 
} from "lucide-react";

// Icons sized up slightly for the larger cards
const iconsMap: Record<string, JSX.Element> = {
  Trees: <Trees size={22} />,
  Axis3d: <Axis3d size={22} />,
  Droplets: <Droplets size={22} />,
  Waves: <Waves size={22} />,
  Flame: <Flame size={22} />,
  Mountain: <Mountain size={22} />,
  Home: <Home size={22} />,
  Grid3x3: <Grid3x3 size={22} />,
  BoxSelect: <BoxSelect size={22} />,
};

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Landscaping Solutions</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Compact but Sized-Up Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card 
                onClick={() => navigate(`/services/${service.slug}`)}
                className="group relative flex items-center gap-5 p-5 cursor-pointer bg-card/30 backdrop-blur-md border-primary/10 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 rounded-2xl shadow-sm hover:shadow-md"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Sized-up Icon Container (12x12 instead of 10x10) */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  {iconsMap[service.icon]}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-base font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors duration-300">
                      Explore
                    </span>
                    <ArrowUpRight 
                      size={12} 
                      className="text-primary opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" 
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}