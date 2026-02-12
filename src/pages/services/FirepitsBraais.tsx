import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';

export default function FirepitsBraais() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Firepits & Braais
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Gather around a beautiful, functional firepit or braai area — built for entertaining and comfort.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Outdoor Entertaining</h2>
              <p>
                We design and build fire features and braai spaces that perform well and look great. From <strong className="font-semibold">fixed masonry firepits</strong> to <strong className="font-semibold">custom steel braai islands</strong>, we ensure <strong className="font-semibold">longevity and safety</strong>.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Site Analysis & Concept', text: 'Positioning and sightlines considered for comfort and safety.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Design Options', text: 'Masonry, steel and integrated seating solutions tailored to your space.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Durable Builds', text: 'Robust construction and finishes for heavy-use outdoor features.' },
                  { icon: <Leaf size={20} className="text-primary" />, title: 'Integrated Lighting', text: 'Lighting and planting to enhance evening use and atmosphere.' },
                ]}
              />
            </div>

            <div>
              <ServicesGallery folder={'Fire Pits'} />
            </div>
          </div>

          <ServiceCTA label="Plan Your Braai Area" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
