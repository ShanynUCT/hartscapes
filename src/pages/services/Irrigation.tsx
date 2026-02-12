import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import ServicesGallery from '@/components/ServicesGallery';

export default function Irrigation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Irrigation Systems
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            Smart, water-wise irrigation solutions to keep your garden healthy and reduce water use.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Efficient Watering</h2>
              <p>
                We design and install <strong className="font-semibold">drip and pop-up irrigation systems</strong> tuned to South African climates and plant palettes. Systems include <strong className="font-semibold">timers, rain sensors</strong> and zoning for optimal results.
              </p>
              <ul>
                <li>Driplines for shrub beds and planters</li>
                <li>Pop-up sprinklers for lawns</li>
                <li>Smart controllers and rain sensors</li>
              </ul>
            </div>

            <div>
              <ServicesGallery folder={'Gardens'} />
            </div>
          </div>

          <ServiceCTA label="Get an Irrigation Plan" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
