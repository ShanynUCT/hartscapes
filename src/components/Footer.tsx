import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function BarkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#0ea5a4" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Inter, Arial, sans-serif">b</text>
    </svg>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLink = (path: string) => {
    const scrollToContact = () => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (path === '/#contact') {
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
      return;
    }

    navigate(path);
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/#contact' },
  ];

  return (
    <footer className="bg-karoo-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Hartscapes Logo" 
                className="h-16 w-auto" 
              />
            </div>
            
            <p className="text-gray-400 mb-6">
              Transforming South African outdoor spaces with sustainable landscape design and expert garden care.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HartscapesLandscaping"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hartscapes on Facebook"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/hartscapes_landscaping/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hartscapes on Instagram"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.bark.com/en/za/b/hartscapes/JjEvZ/"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hartscapes on Bark"
                title="Bark"
              >
                <BarkIcon size={18} />
                <span className="sr-only">Bark</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuickLink(item.path);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Garden Design', 
                'Landscape Construction', 
                'Garden Maintenance', 
                'Outdoor Living', 
                'Indigenous Planting'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Cape Town, South Africa</p>
              <p>
                <a href="tel:+27822923908" className="hover:text-white transition-colors duration-300">
                  +27 82 292 3908
                </a>
              </p>
              <p>
                <a href="mailto:dee.hartscapes@gmail.com" className="hover:text-white transition-colors duration-300">
                  dee.hartscapes@gmail.com
                </a>
              </p>
              <p>Mon - Fri: 8am - 5pm</p>
              <p>Sat: 9am - 2pm</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hartscapes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}