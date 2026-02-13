import { motion } from "framer-motion";
import { Heart, Eye, Wrench, Leaf, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { useLocation, useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-muted/10 to-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-6 py-2 rounded-full inline-flex items-center gap-2 border border-primary/20">
                <Leaf size={16} className="animate-leaf-wave" />
                <span className="text-sm font-medium">Since 2000</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hart</span>scapes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A small company with a big heart, turning ordinary spaces into flourishing gardens.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -left-6 -top-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                <img
                  src="/gallery/team.png"
                  alt="Hartscapes team"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Crafting Dreams Into Reality
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Led by Dee Hart, our team of dedicated professionals, including Robert, Simba, Trust, Jones, Tyson, Gibson, and Destiny, 
                are passionate about crafting landscapes that reflect our clients' dreams. 
                Our commitment ensures no job is too big or too small.
              </p>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Each garden is unique, we pride ourselves in breathing life into our client's personal dreams, 
                providing a space that is tailored to their hobbies and interests. You will never see the same garden twice.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Heart size={28} />
                  </div>
                  <h3 className="font-bold text-center text-sm">Passion</h3>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Eye size={28} />
                  </div>
                  <h3 className="font-bold text-center text-sm">Vision</h3>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Wrench size={28} />
                  </div>
                  <h3 className="font-bold text-center text-sm">Expertise</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Our Design Approach</h2>
            <p className="text-muted-foreground text-lg">
              We are visionaries in turning ordinary spaces into flourishing, well-balanced gardens 
              by merging existing features with intricate and complex designs.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeIn}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Natural Balance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that a garden is an integral part of the home. Leaf colour and texture are important 
                  components in our design process, along with balance, line, proportion, negative spaces, 
                  contrast and borrowed views.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Complete Construction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We go beyond just landscaping aesthetics as we do all our own hard landscaping and timber work. 
                  Designing and building decks, pergolas, brickwork, and paving are just a few skills in our repertoire.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Client Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This enables smooth running on sites as we seamlessly move from one aspect of the job to the next, 
                  making for a huge saving in time and in budget. We ensure a totally transparent approach and 
                  understand the value in keeping our clients in the loop the entire time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border rounded-3xl p-10 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border-4 border-primary/20">
                    <Clock className="text-primary" size={64} />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block mb-3">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Proven Track Record</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    25+ Years of Excellence
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Led by Dee Hart, with over 25 years of experience, we are visionaries in turning ordinary spaces 
                    into flourishing, well-balanced gardens by merging existing features with intricate and complex designs.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our extensive experience allows us to anticipate challenges before they arise and deliver 
                    projects that exceed our clients' expectations, on time and within budget.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section removed per request */}
      
      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Transform Your Space?</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Contact us today to discuss your project and discover how we can bring your vision to life.
            </p>
            <button
              type="button"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:opacity-90 transition-all text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default About;