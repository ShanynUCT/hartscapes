import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface ServiceGalleryProps {
  galleries: Record<
    string,
    {
      title: string;
      description: string;
      images: string[];
    }
  >;
}

export default function ServiceGallery({ galleries }: ServiceGalleryProps) {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !galleries[slug]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Service not found.</p>
      </div>
    );
  }

  const service = galleries[slug];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 text-center bg-primary/5">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">{service.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {service.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img src={img} alt={`${service.title} ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}