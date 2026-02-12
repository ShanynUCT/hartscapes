import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';

export default function Decking() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Custom Timber Decking
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Create inviting outdoor living spaces with expertly built timber decks, tailored to your garden and lifestyle.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Why Choose Hartscapes for Decking</h2>
              <p>
                We design and build timber decks using <strong>durable, locally appropriate timbers</strong> and finishes. Our team handles everything from structural framing to the final finish, ensuring a <strong>long-lasting, low-maintenance</strong> outdoor space.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Site Analysis & Concept', text: 'We study site conditions and views to create a deck that suits your space.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Custom Design', text: 'Tailored plans for structure, finishes and integration with planting.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Built to Last', text: 'Structural framing, fixings and treatments for durable decks.' },
                  { icon: <Leaf size={20} className="text-primary" />, title: 'Finishes & Care', text: 'Advice on finishes and maintenance for long-term performance.' },
                ]}
              />

            </div>

            <div>
              <ServicesGallery folder="Decking" />
            </div>
          </div>

          <ServiceCTA label="Schedule a Consultation" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
