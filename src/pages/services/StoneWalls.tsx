import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';

export default function Brickwork() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Brickwork & Masonry
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Expertly crafted brickwork and masonry to add structure, texture and permanence to your landscape.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Brickwork & Masonry</h2>
              <p>
                We work with a <strong className="font-semibold">range of brick and masonry types</strong> and building techniques to craft walls, planters and landscape features that stand the test of time.
              </p>
              <p>
                Our detailing ensures <strong className="font-semibold">mortar and brickwork age gracefully</strong> while providing structural strength.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Material Selection', text: 'Choose finishes and brick and masonry types to match style and budget.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Detailed Design', text: 'Proven detailing for long-lasting mortar and brickwork.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Skilled Craft', text: 'Experienced masons delivering quality finishes.' },
                  { icon: <Leaf size={20} className="text-primary" />, title: 'Planting & Finish', text: 'Integration with planting and hardscape for a cohesive look.' },
                ]}
              />
            </div>

            <div>
              <ServicesGallery folder={'Brickwork'} />
            </div>
          </div>

          <ServiceCTA label="Request a Brickwork Quote" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
