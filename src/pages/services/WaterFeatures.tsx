import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';

export default function WaterFeatures() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Water Features & Ponds
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Tranquil fountains, ornamental ponds and bespoke water installations to bring movement and calm to your garden.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Custom Water Designs</h2>
              <p>
                From simple bubblers to elaborate pond ecosystems, we design water features that consider <strong className="font-semibold">maintenance</strong>, <strong className="font-semibold">safety</strong> and the surrounding planting.
              </p>
              <p>
                We can include <strong className="font-semibold">filtration</strong>, <strong className="font-semibold">recirculation</strong> and planting schemes to make water features feel natural and sustainable.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Context & Siting', text: 'Siting and safety considerations for water in gardens.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Technical Design', text: 'Filtration, recirculation and safe edges that suit your use.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Durable Install', text: 'Constructed to perform with low maintenance.' },
                  { icon: <Leaf size={20} className="text-primary" />, title: 'Planting Integration', text: 'Plants and planting edges that make water features feel natural.' },
                ]}
              />
            </div>

            <div>
              <ServicesGallery folder={'Water Features'} />
            </div>
          </div>

          <ServiceCTA label="Discuss a Water Feature" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
