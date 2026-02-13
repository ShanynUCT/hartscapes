import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from '@/components/ServiceCTA';
import ServicesGallery from '@/components/ServicesGallery';

export default function Paving() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Paving
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-lg text-muted-foreground mb-8">
            High-quality paving for driveways, patios, and pathways built to last.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="prose max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold mb-4">Durable Paving Surfaces</h2>
              <p>
                We deliver <strong className="font-semibold">durable, well-drained paving</strong> designed for longevity and everyday use.
              </p>
              <p>
                Our team advises on <strong className="font-semibold">paver types, layouts, and edging</strong> that suit local conditions and your style.
              </p>
            </div>

            <div>
              <ServicesGallery folder={'Paving'} />
            </div>
          </div>

          <ServiceCTA label="Request Paving Quote" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
