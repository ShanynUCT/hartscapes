import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Feature = {
  icon: ReactNode;
  title: string;
  text: string;
};

export default function ServiceFeatures({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
      {features.map((f, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 p-3 bg-card/30 backdrop-blur-sm border border-primary/5 rounded-xl hover:border-primary/20 hover:bg-card/50 transition-all duration-300 group"
        >
          {/* Smaller, more refined icon container */}
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/5 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
            {/* Clones the icon to force a smaller size if it's an SVG */}
            {React.isValidElement(f.icon) 
              ? React.cloneElement(f.icon as React.ReactElement<any>, { size: 18, strokeWidth: 2 }) 
              : f.icon
            }
          </div>
          
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
              {f.title}
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground/80 line-clamp-2">
              {f.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}