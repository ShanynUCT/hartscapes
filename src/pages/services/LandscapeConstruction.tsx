import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';

export default function LandscapeConstruction() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Landscape Design & Construction
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            From concept to completion — we craft functional, beautiful outdoor spaces tuned to Cape Town's climate and ecology.
            Our team combines clear site analysis, thoughtful planting design and robust construction to deliver gardens that thrive.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Comprehensive Service</h2>
                <p className="mb-6">
                  We provide <strong className="font-semibold">end-to-end landscape services</strong> — from site analysis and concept design, through planting plans and hardscape construction, to planting installation and handover. Everything is tailored to the Cape Town climate and local ecology for low-maintenance, long-lasting results.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start gap-4 p-4 bg-card/40 rounded-lg shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Site Analysis & Concept</h4>
                      <p className="text-sm text-muted-foreground">Thorough site study yields practical, beautiful concepts that respect microclimates and views.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card/40 rounded-lg shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <PenTool size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom Design & Planting Plans</h4>
                      <p className="text-sm text-muted-foreground">Plant palettes and drawings focused on biodiversity, water-wise selections and seasonal interest.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card/40 rounded-lg shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <Hammer size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Project Management & Construction</h4>
                      <p className="text-sm text-muted-foreground">Experienced site teams, reliable timelines and clear communication through every build stage.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card/40 rounded-lg shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <Leaf size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sustainable Planting & Water-wise Care</h4>
                      <p className="text-sm text-muted-foreground">Low-maintenance, climate-appropriate species and water-wise practices for long-term health.</p>
                    </div>
                  </div>
                </div>
            </div>

            <div>
              <ServicesGallery folder={'Gardens'} />
            </div>
          </div>

          <ServiceCTA label="Start Your Project" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
