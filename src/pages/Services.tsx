import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, useNavigate } from 'react-router-dom';

const testimonials = [
  {
    quote: "Very happy with the refurbishment of a sad and thirsty timber fence and some serious pruning. Dee and her team are professional, friendly and focused. Highly recommended.",
    author: "Bridget L.",
    location: "Cape Town"
  },
  {
    quote: "Dee and her team completely renovated my garden. Excellent service and lovely ideas. I can't wait to see my plants flowering!",
    author: "Marianne E.",
    location: "Cape Town"
  },
  {
    quote: "I’d like to give a huge shout out to Dee and her fantastic team from Hartscapes for everything they did in our garden after our home renovation. No job was too much trouble. And everything done efficiently and with a smile. Honestly they are the best thing ever!",
    author: "Vanessa W.",
    location: "Cape Town"
  }
];

export default function Services() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultationClick = () => {
    const scrollToContact = () => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (location.pathname === '/') {
      scrollToContact();
      return;
    }

    navigate('/');
    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      if (scrollToContact() || attempts > 20) {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background via-background/90 to-secondary/20" />
      <div className="fixed inset-0 bg-background/30 backdrop-blur-sm z-0" />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
                Exceptional Landscaping Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your outdoor space with Hartscapes’ expert solutions, led by Dee Hart
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleConsultationClick}>
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/projects')}>
                  View Our Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Stats */}
        <section className="py-12 bg-secondary/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">25+ Years</h3>
              <p className="text-muted-foreground">Of landscaping excellence</p>
            </motion.div>
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">300+</h3>
              <p className="text-muted-foreground">Satisfied customers</p>
            </motion.div>
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">On-time project completion</p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesSection />

        {/* Testimonials */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Our Clients Say</h2>
              <p className="text-muted-foreground">
                Hear from our satisfied customers about their Hartscapes experience
              </p>
            </motion.div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-4">
                      <Card className="bg-card/80 backdrop-blur-sm border-primary/10 h-full">
                        <CardContent className="pt-6">
                          <div className="text-4xl text-primary font-serif mb-4">"</div>
                          <p className="mb-6 italic text-lg">{t.quote}</p>
                          <div className="flex items-center mt-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
                            <div>
                              <p className="font-bold">{t.author}</p>
                              <p className="text-sm text-muted-foreground">{t.location}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Transform Your Outdoor Space?</h2>
              <p className="text-xl mb-8">Schedule a consultation with Dee Hart and our expert team today</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleConsultationClick}>
                Contact Us Now
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}