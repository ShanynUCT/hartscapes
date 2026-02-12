import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';

export default function Pergolas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Pergolas & Outdoor Structures
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Beautiful, durable pergolas that extend your living space and create shaded outdoor rooms.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Design & Build</h2>
              <p>
                Our pergolas are designed to complement your architecture and garden. We <strong className="font-semibold">tailor materials, finishes and proportions</strong> so the structure feels like a natural extension of your home.
              </p>
              <p>
                We offer <strong className="font-semibold">timber and steel options</strong>, <strong className="font-semibold">louvered roofs</strong>, <strong className="font-semibold">integrated lighting</strong> and planting to create cosy outdoor rooms year-round.
              </p>

              <ServiceFeatures
                features={[
                  { icon: <MapPin size={20} className="text-primary" />, title: 'Site Analysis', text: 'Siting and orientation to create usable, shaded outdoor rooms.' },
                  { icon: <PenTool size={20} className="text-primary" />, title: 'Tailored Design', text: 'Materials and proportions matched to your home and budget.' },
                  { icon: <Hammer size={20} className="text-primary" />, title: 'Quality Build', text: 'Sturdy connections and finishes for longevity.' },
                  { icon: <Leaf size={20} className="text-primary" />, title: 'Integrated Planting', text: 'Vines and planting that complement the structure.' },
                ]}
              />
            </div>

            <div>
              <ServicesGallery folder={'Pergolas'} />
            </div>
          </div>

          <ServiceCTA label="Request a Quote" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
