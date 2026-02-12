
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from '@/components/ui/use-toast';

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  category: string;
  imageUrl: string;
  gallery: string[];
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // The canonical order of project folders to show (matches folders under public/gallery).
  const galleryFolders = [
    "Blouberg",
    "Capri",
    "Claremont",
    "Hout Bay",
    "Newlands",
    "Somerset West",
    "Wynberg"
  ];

  // Placeholder image (inline SVG) used when no gallery files are available
  const PLACEHOLDER_SVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">' +
      '<rect width="100%" height="100%" fill="#e5e7eb"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
        'font-family="Arial, Helvetica, sans-serif" font-size="36" fill="#6b7280">No images available</text>' +
    '</svg>'
  );

  // Fetch the build-time generated index that enumerates files in public/gallery
  useEffect(() => {
    let mounted = true;
    fetch('/gallery/index.json')
      .then((res) => {
        if (!res.ok) throw new Error('Gallery index not found');
        return res.json();
      })
      .then((index: Record<string, string[]>) => {
        if (!mounted) return;
        const builtProjects: Project[] = galleryFolders.map((folderName, idx) => {
          const files = index[folderName] || [];
          const hasFiles = files.length > 0;
          const imageUrl = hasFiles ? files[0] : PLACEHOLDER_SVG;
          return {
            id: idx + 1,
            title: folderName.replace(/[-_]/g, ' '),
            description: `Project: ${folderName} — portfolio images from our work in ${folderName}.`,
            location: 'Cape Town',
            year: '2024',
            category: 'Residential',
            imageUrl,
            gallery: hasFiles ? files : [],
          } as Project;
        });
        setProjects(builtProjects);
        setActiveIndex(0);
        setActiveProject(builtProjects[0] || null);
      })
      .catch((err) => {
        // fallback: build lightweight projects array with best-effort cover paths
        console.warn('Could not load gallery index.json:', err);
        const fallback = galleryFolders.map((folderName, idx) => ({
          id: idx + 1,
          title: folderName.replace(/[-_]/g, ' '),
          description: `Project: ${folderName} — portfolio images from our work in ${folderName}.`,
          location: 'Cape Town',
          year: '2024/5',
          category: 'Residential',
          imageUrl: PLACEHOLDER_SVG,
          gallery: [],
        } as Project));
        if (mounted) {
          setProjects(fallback);
          setActiveProject(fallback[0] || null);
        }
      });

    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;
    setActiveProject(projects[activeIndex]);
  }, [activeIndex, projects]);

  const handleNextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleInquire = () => {
    const scrollToContact = () => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (location.pathname === '/') {
      scrollToContact();
      return;
    }

    navigate('/');
    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      if (scrollToContact() || attempts > 20) {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-20 relative">
        {/* Back button */}
        <div className="absolute top-24 left-8 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/')}
            className="rounded-full hover:bg-secondary/50"
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        <div className="container mx-auto px-4 mt-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of landscaping and garden design projects across South Africa.
            </p>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
            {/* Project Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold mb-4 font-display">Browse Projects</h3>
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div 
                        key={project.id}
                        onClick={() => setActiveIndex(index)}
                        className={`cursor-pointer transition-all duration-300 border-l-2 pl-4 py-2 ${
                          index === activeIndex 
                            ? 'border-primary text-foreground' 
                            : 'border-border text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-sm">{project.location}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {activeProject && (
                    <>
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <h2 className="text-3xl font-bold font-display">{activeProject.title}</h2>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-muted-foreground">{activeProject.location}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{activeProject.year}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                              {activeProject.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={handlePrevProject}
                            className="rounded-full"
                          >
                            <ChevronLeft size={18} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={handleNextProject}
                            className="rounded-full"
                          >
                            <ChevronRight size={18} />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Image Gallery Carousel */}
                      <div className="relative w-full md:w-4/5 mx-auto" ref={carouselRef}>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {activeProject.gallery.map((image, i) => (
                              <CarouselItem key={i}>
                                <div className="aspect-[5/4] overflow-hidden rounded-xl">
                                  <img 
                                    src={image} 
                                    alt={`${activeProject.title} - Image ${i+1}`} 
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                      
                      {/* Project Description */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-semibold mb-4 font-display">Project Details</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {activeProject.description}
                          </p>
                          
                          <div className="mt-8">
                            <Button 
                              className="bg-primary hover:bg-primary/90 text-primary-foreground"
                              onClick={handleInquire}
                            >
                              Inquire About This Project
                            </Button>
                          </div>
                        </div>
                        
                        <div className="bg-secondary/20 rounded-xl p-6">
                          <h3 className="text-xl font-semibold mb-4 font-display">Project Specs</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm text-muted-foreground">Location</h4>
                              <p className="font-medium">{activeProject.location}</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-muted-foreground">Year Completed</h4>
                              <p className="font-medium">{activeProject.year}</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-muted-foreground">Project Type</h4>
                              <p className="font-medium">{activeProject.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
