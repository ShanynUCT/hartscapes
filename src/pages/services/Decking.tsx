import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGallery from '@/components/ServicesGallery';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceFAQ from '@/components/ServiceFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import { MapPin, PenTool, Hammer, Leaf } from 'lucide-react';

export default function Decking() {
  const faqs = [
    {
      question: "What types of timber do you use for decking?",
      answer: "We use locally sourced, durable timbers suited to South African conditions, including treated pine, balau, and other weather-resistant options. We'll recommend the best timber based on your budget, aesthetic preferences, and maintenance requirements."
    },
    {
      question: "How long does a deck installation take?",
      answer: "Most residential deck projects take 1-2 weeks to complete, depending on size and complexity. We'll provide a detailed timeline during your consultation and keep you updated throughout the project."
    },
    {
      question: "Do you handle all permits and approvals?",
      answer: "Yes, we manage all necessary permits and ensure compliance with local building regulations. We take care of the paperwork so you don't have to worry about it."
    },
    {
      question: "How do I maintain my new deck?",
      answer: "We provide comprehensive maintenance guidelines with every project. Typically, decks require annual cleaning and resealing to maintain their appearance and durability. We also offer ongoing maintenance services."
    },
    {
      question: "Can you build decks on sloped terrain?",
      answer: "Absolutely! We specialize in designing and building decks on challenging terrain. Our team will assess your site and create a custom solution that works with your landscape."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Custom Timber Decking' }
          ]} />
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

            <ServiceFAQ faqs={faqs} />
          </div>

          <ServiceCTA label="Schedule a Consultation" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
