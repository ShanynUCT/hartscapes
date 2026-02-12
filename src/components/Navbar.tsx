
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    // Explicit special-case for services to ensure mobile dropdown navigates
    // to the services page instead of unexpected behavior.
    if (path === '/services') {
      navigate('/services');
      return;
    }
    if (path.startsWith('/#')) {
      if (location.pathname === '/') {
        // If already on home page, just scroll to the section
        const element = document.querySelector(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        navigate(path);
      }
    } else {
      // Normal navigation
      navigate(path);
    }
  };

  const handleQuoteClick = () => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Hartscapes Logo" 
            className="h-24 w-auto" 
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`transition-colors duration-300 ${
                (location.pathname === item.path || 
                 (location.pathname === '/' && item.path.startsWith('/#')))
                ? 'text-primary font-medium' 
                : 'text-foreground hover:text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleQuoteClick}
          >
            Get a Quote
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`px-4 py-2 transition-colors duration-300 ${
                  (location.pathname === item.path || 
                   (location.pathname === '/' && item.path.startsWith('/#')))
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuoteClick();
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
