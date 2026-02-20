import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, ArrowUpRight, Plus } from "lucide-react";

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
  
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
            location: folderName + ', CT',
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
          location: folderName + ', CT',
          imageUrl: `/gallery/${folderName}/overview1.jpg`,
          category: 'Landscape Design',
        }));
        if (mounted) setProjects(fallback);
      });
    return () => { mounted = false; };
  }, []);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.5;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - cardWidth 
        : scrollRef.current.scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-16 relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Compact Header Section */}
        <div className="flex flex-row justify-between items-end mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-none">
              Featured <span className="italic font-serif text-primary/80 font-normal">Work</span>
            </h2>
          </motion.div>
          
          {/* Smaller, lighter navigation buttons */}
          <div className="flex items-center gap-2 mb-1">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="rounded-full h-10 w-10 border-slate-200 hover:border-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="rounded-full h-10 w-10 border-slate-200 hover:border-primary transition-colors"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
        
        {/* Projects Scroll Area - Reduced card size for better fit */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="min-w-[280px] md:min-w-[420px] flex-shrink-0 snap-start group cursor-pointer"
              onClick={() => navigate(`/projects`)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform shadow-lg">
                  <Plus size={16} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={10} className="text-primary" />
                    <span className="text-[9px] font-bold tracking-widest uppercase text-white/80">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bar closer to the content */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="relative h-0.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary origin-left w-full"
              style={{ scaleX }}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {projects.length} Cape Town Installations
            </p>
            <Button 
              variant="ghost"
              className="group text-primary font-bold uppercase tracking-widest text-[10px] h-auto p-0 hover:bg-transparent"
              onClick={() => navigate('/projects')}
            >
              View All Projects 
              <ArrowUpRight size={12} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}