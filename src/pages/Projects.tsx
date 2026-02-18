
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
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
    "Kalk Bay",
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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <div className="pt-20 pb-20 relative">
        {/* Back button */}
        <div className="container mx-auto px-4 mt-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-secondary/50 -ml-2"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Projects
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Explore our portfolio of landscaping and garden design projects across Cape Town
              </p>
            </motion.div>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            {/* Project Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl border p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-6 font-display flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Browse Projects
                  </h3>
                  <ScrollArea className="h-[60vh] pr-2">
                    <div className="space-y-2">
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => setActiveIndex(index)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                              index === activeIndex 
                                ? 'bg-primary text-primary-foreground shadow-md' 
                                : 'hover:bg-secondary/50 text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            <h4 className="font-medium text-sm">{project.title}</h4>
                            <p className="text-xs opacity-80 mt-1">{project.location}</p>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {activeProject && (
                    <>
                      {/* Project Header */}
                      <div className="bg-card/50 backdrop-blur-sm rounded-xl border p-6 shadow-lg">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{activeProject.title}</h2>
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <span className="flex items-center gap-1.5 text-muted-foreground">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {activeProject.location}
                              </span>
                              <span className="text-muted-foreground">•</span>
                              <span className="flex items-center gap-1.5 text-muted-foreground">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {activeProject.year}
                              </span>
                              <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-3 py-1 rounded-full text-xs font-semibold border border-primary/20">
                                {activeProject.category}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={handlePrevProject}
                              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <ChevronLeft size={18} />
                            </Button>
                            <div className="text-sm text-muted-foreground px-2">
                              {activeIndex + 1} / {projects.length}
                            </div>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={handleNextProject}
                              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <ChevronRight size={18} />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Gallery Carousel */}
                      <div className="relative w-full" ref={carouselRef}>
                        <div className="bg-card/30 backdrop-blur-sm rounded-2xl border shadow-2xl overflow-hidden">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {activeProject.gallery.map((image, i) => (
                                <CarouselItem key={i}>
                                  <div className="aspect-[16/10] overflow-hidden">
                                    <img 
                                      src={image} 
                                      alt={`${activeProject.title} - Image ${i+1}`} 
                                      loading="lazy"
                                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground" />
                            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground" />
                          </Carousel>
                          
                          {/* Image counter */}
                          <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
                            {activeProject.gallery.length} Photos
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Description */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-card/50 backdrop-blur-sm rounded-xl border p-6 shadow-lg">
                          <h3 className="text-xl font-semibold mb-4 font-display flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full"></span>
                            Project Details
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {activeProject.description}
                          </p>
                          
                          <Button 
                            size="lg"
                            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg"
                            onClick={handleInquire}
                          >
                            Inquire About This Project
                          </Button>
                        </div>
                        
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10 p-6 shadow-lg">
                          <h3 className="text-xl font-semibold mb-6 font-display flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full"></span>
                            Project Specs
                          </h3>
                          <div className="space-y-5">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Location</h4>
                                <p className="font-semibold">{activeProject.location}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Completed</h4>
                                <p className="font-semibold">{activeProject.year}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Type</h4>
                                <p className="font-semibold">{activeProject.category}</p>
                              </div>
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
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
