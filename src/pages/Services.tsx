import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Award, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, useNavigate } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import SocialProof from '@/components/SocialProof';

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
  },
  {
    quote: "When so many suppliers heard my vision and said it couldn’t be done, Dee said, “Let’s make it happen.” When others quoted prices that made me want to give up, Dee’s quote was fair and realistic. When others sent me glossy, fake photos, Dee showed me honest examples of real work. From the first conversation, I knew I could trust Dee and the Hartscapes team. They listened, kept me updated, and treated my garden as if it were their own. The transformation is incredible — we’ve gone from an overgrown, thorn infested, patchy, uneven sloped space to a breathtaking garden we can truly live in. We’ve already had our first family camp-out on our new lawn, with the kids laughing under the stars. Now every summer day feels like a small holiday in our own backyard. Thank you, Dee and team, for bringing our vision to life with such honesty, care, and skill. We couldn’t be happier.",
    author: "Su Little",
    location: "Cape Town"
  },
  {
    quote: "Dee and her team spent two weeks with us doing a splendid job excavating and reshaping our driveway and managing eventualities. They are all knowledgeable, professional and kind. It was a great experience.",
    author: "Prof Johannes",
    location: "Cape Town"
  },
  {
    quote: "Dee is so knowledgeable when is comes to plants and landscaping. As newbies she did not see us as a open chequebook, but instead guided us in spending the money in the right places and ultimately getting the best value four our future investment, good communication, timelines discussed and reached.\n\nMyself and my Wife Love our new Garden and thanks to Dee and her professional and Knowledgable Team they made our vision come alive!!!\n\nWe will highly recommend Dee and her Hartscapes Team!!!",
    author: "Johan",
    location: "Cape Town"
  },
  {
    quote: "Dee and her team were great. Very responsive, on time, flexible to ideas and good work ethic. Would definitely recommend her services",
    author: "Zulfa",
    location: "Cape Town"
  },
  {
    quote: "We’ve just had our lawn garden changed to a gravel garden. We kind of knew what we wanted and then we found Dee of Hartscapes who created such a lovely space. She did the most amazing job which was far beyond our expectations. She has such good ideas and they were perfectly executed by her and her great team. Regarding the quote, we received it very quickly. She is really wonderful to deal with.",
    author: "Veretta",
    location: "Cape Town"
  },
  {
    quote: "We are more than pleased with the work done by Hartscapes! Dee contacted us almost immediately after requesting a quote via bark. com. The planning process was smooth and the ideas recommended by Dee was excellent (ideas that we did not consider). Her workers were real gentlemen. The work was done timeously despite the rainy weather. Her prices are very competitive and you will get value for your money. We are thoroughly enjoying our \"new\" backyard. We are more than happy to recommend Hartscapes for your landscaping needs. Thanks Dee and team.",
    author: "Yazied",
    location: "Cape Town"
  },
  {
    quote: "A job well done. The weather play a part which was a bit unfortunate taking a little longer for both parties. Very professional, the entire team were great always cleaned up after each shift. The guys removed half way down from the top to the middle of all three stumps. They will be back later this year to remove the rest of the palm stumps. Job well done so far",
    author: "Rustim",
    location: "Cape Town"
  },
  {
    quote: "Excellent job, arrived on time, guys very pleasant. Did more than I asked and cleaned up after them. Very pleasant experience can definitely recommend.",
    author: "L Robinson",
    location: "Cape Town"
  },
  {
    quote: "Dee was great and went beyond what she was asked to do! Thanks Dee",
    author: "Crystal",
    location: "Cape Town"
  },
  {
    quote: "Immediate feedback via email. Visited me on a Tuesday and I received the quotation on the Friday. Reasonable fees. Good sense of what I want in and from my new garden.",
    author: "M Engelbrecht",
    location: "Cape Town"
  },
  {
    quote: "The Treefelling team from Hartscape recently, came to remove a 10-12 meter tall Palm tree, they had limited space to work with and the task looked very difficult, but they did a fantastic job by not rushing and planning properly. There was no damage to anything, I am super happy with the work, would not think twice to use them again.",
    author: "Robert",
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

        {/* Social Proof Badges */}
        <SocialProof />

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-3xl mx-auto mb-12" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Our Clients Say</h2>
              <p className="text-muted-foreground">
                Hear from our satisfied customers about their Hartscapes experience
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {testimonials.map((t, i) => (
                    <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                        <CardContent className="p-6 flex flex-col h-full">
                          {/* Star Rating */}
                          <div className="flex gap-0.5 mb-3">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star key={starIndex} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          
                          {/* Quote */}
                          <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-6">
                            "{t.quote}"
                          </p>
                          
                          {/* Author */}
                          <div className="flex items-center gap-3 pt-4 border-t">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-primary text-sm">
                              {t.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className="font-semibold text-sm">{t.author}</p>
                                <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">✓</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{t.location}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Integrated Navigation Arrows */}
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
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
  <WhatsAppButton />
      <BackToTop />
    
        <Footer />
      </div>
    </div>
  );
}