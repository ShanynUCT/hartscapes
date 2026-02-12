
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
  gallery?: string[];
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // canonical galleries (must match folder names under public/gallery)
  const galleryFolders = [
    "Wynberg",
    "Hout Bay",
    "Somerset West",
    "Newlands",
    "Capri",
    "Claremont"
  ];

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/gallery/index.json')
      .then((res) => {
        if (!res.ok) throw new Error('Gallery index not found');
        return res.json();
      })
      .then((index: Record<string, string[]>) => {
        if (!mounted) return;
        const built = galleryFolders.map((folderName, idx) => {
          const files = index[folderName] || [];
          const cover = files.length > 0 ? files[0] : `/gallery/${folderName}/overview1.jpg`;
          return {
            id: idx + 1,
            title: folderName.replace(/[-_]/g, ' '),
            location: 'Cape Town',
            imageUrl: cover,
            category: 'Residential',
            gallery: files,
          } as Project;
        });
        setProjects(built);
      })
      .catch((err) => {
        console.warn('Could not load gallery index for Featured Projects:', err);
        // fallback: show a small sample to avoid blank UI
        const fallback: Project[] = galleryFolders.map((folderName, idx) => ({
          id: idx + 1,
          title: folderName.replace(/[-_]/g, ' '),
          location: 'Cape Town',
          imageUrl: `/gallery/${folderName}/overview1.jpg`,
          category: 'Residential',
          gallery: [`/gallery/${folderName}/overview1.jpg`],
        }));
        if (mounted) setProjects(fallback);
      });

    return () => { mounted = false; };
  }, []);
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
      
      // Update active index based on scroll position
      const newIndex = direction === 'left' 
        ? Math.max(0, activeIndex - 1) 
        : Math.min(projects.length - 1, activeIndex + 1);
      
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">Transforming South African spaces with natural beauty</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleScroll('left')}
              disabled={activeIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleScroll('right')}
              disabled={activeIndex === projects.length - 1}
              className="rounded-full"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide scroll-snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start perspective"
            >
              <div className="group h-full rounded-xl overflow-hidden shadow-xl transform-gpu transition-all duration-500 hover:scale-[1.02] preserve-3d cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${encodeURI(project.imageUrl)})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="bg-primary/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
