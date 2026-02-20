import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
  gallery?: string[];
}

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  
  const galleryFolders = ["Wynberg", "Hout Bay", "Somerset West", "Newlands", "Capri", "Claremont"];

  useEffect(() => {
    let mounted = true;
    fetch('/gallery/index.json')
      .then((res) => res.json())
      .then((index: Record<string, string[]>) => {
        if (!mounted) return;
        const built = galleryFolders.map((folderName, idx) => {
          const files = index[folderName] || [];
          const cover = files.length > 0 ? files[0] : `/gallery/${folderName}/overview1.jpg`;
          return {
            id: idx + 1,
            title: folderName.replace(/[-_]/g, ' '),
            location: 'Cape Town, SA',
            imageUrl: cover,
            category: 'Landscape Design',
            gallery: files,
          } as Project;
        });
        setProjects(built);
      })
      .catch(() => {
        const fallback = galleryFolders.map((folderName, idx) => ({
          id: idx + 1,
          title: folderName.replace(/[-_]/g, ' '),
          location: 'Cape Town, SA',
          imageUrl: `/gallery/${folderName}/overview1.jpg`,
          category: 'Landscape Design',
        }));
        if (mounted) setProjects(fallback);
      });
    return () => { mounted = false; };
  }, []);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 440; // Card width + gap
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - cardWidth 
        : scrollRef.current.scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-background overflow-hidden">
      {/* Structural Accent Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight italic">Featured Projects</h2>
            <p className="text-muted-foreground mt-2 max-w-md">Precision landscaping that harmonizes South African nature with architectural design.</p>
          </motion.div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 h-12 w-12"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 h-12 w-12"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center group"
            >
              <div 
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-muted cursor-pointer"
                onClick={() => navigate(`/projects`)}
              >
                {/* Clean Image Handling */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                
                {/* Elegant Hover Action */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-primary-foreground/80 mb-3">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">{project.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="h-0.5 w-0 group-hover:w-16 bg-primary transition-all duration-700 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Simplified Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <Button 
            variant="ghost"
            className="group text-muted-foreground hover:text-primary transition-colors text-xs font-bold tracking-[0.2em] uppercase py-8"
            onClick={() => navigate('/projects')}
          >
            Explore Full Portfolio 
            <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}