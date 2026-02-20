
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
// Import ThreeScene but we'll temporarily disable it
// import ThreeScene from '@/components/ThreeScene';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TransformationsSection from '@/components/TransformationsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import SocialProof from '@/components/SocialProof';

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollY = window.scrollY;
        // Apply subtle parallax effect to content
        contentRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Temporarily disable 3D Background Scene that's causing errors */}
      {/* <div className="fixed inset-0 z-0">
        <ThreeScene />
      </div> */}
      
      {/* Replace with a simple gradient background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-secondary/20"></div>
      
      {/* Overlay gradient for better text visibility */}
      <div className="fixed inset-0 bg-background/30 backdrop-blur-sm z-0"></div>
      
      {/* Content */}
      <div ref={contentRef} className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <SocialProof />
        <ProjectsSection />
        <TransformationsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
      
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;
