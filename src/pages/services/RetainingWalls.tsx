import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';

export default function RetainingWalls() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Retaining Walls
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Durable retaining walls to stabilise slopes and create usable garden terraces.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Structural & Aesthetic</h2>
              <p>
                We build robust retaining solutions using <strong className="font-semibold">reinforced concrete, masonry or brickwork</strong> depending on site conditions and desired aesthetic.
              </p>
              <p>
                Attention to <strong className="font-semibold">drainage and planting</strong> helps walls last longer and integrate the structure into the garden.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Site & Soil Analysis', text: 'Understanding soil and site to design safe, durable walls.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Engineering Details', text: 'Designs that balance structure, drainage and planting.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Skilled Build', text: 'Experienced crews and proven construction techniques.' },
                  { icon: <Leaf size={20} className="text-primary" />, title: 'Integrated Planting', text: 'Planting and finishes that soften and stabilise walls.' },
                ]}
              />
            </div>

            <div>
              <ServicesGallery folder={'Retaining Walls'} />
            </div>
          </div>

          <ServiceCTA label="Talk to Our Team" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
