import { motion } from "framer-motion";
import { Heart, Eye, Wrench, Leaf, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fynbos-50/30 to-background z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-10"
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              About <span className="text-primary">Hart</span>scapes
            </h1>
            <p className="text-xl text-muted-foreground">
              A small company with a big heart, turning ordinary spaces into flourishing gardens.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary rounded-lg opacity-10 animate-float"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-accent rounded-lg opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
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
            >
              <h2 className="text-3xl font-bold mb-6 font-display text-gradient">Our Philosophy</h2>
              <p className="text-muted-foreground mb-6">
                Led by Dee Hart, our team of dedicated professionals, including Robert, Simba, Trust, Jones, Tyson, Gibson, and Destiny, 
                are passionate about crafting landscapes that reflect our clients' dreams. 
                Our commitment ensures no job is too big or too small.
              </p>
              <p className="text-muted-foreground mb-6">
                Each garden is unique, we pride ourselves in breathing life into our client's personal dreams, 
                providing a space that is tailored to their hobbies and interests. You will never see the same garden twice.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-semibold">Passion</h3>
                </div>
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                    <Eye size={24} />
                  </div>
                  <h3 className="font-semibold">Vision</h3>
                </div>
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                    <Wrench size={24} />
                  </div>
                  <h3 className="font-semibold">Expertise</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 font-display">Our Design Approach</h2>
            <p className="text-muted-foreground">
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
              className="landscape-card p-6"
            >
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-display">Natural Balance</h3>
              <p className="text-muted-foreground">
                We believe that a garden is an integral part of the home. Leaf colour and texture are important 
                components in our design process, along with balance, line, proportion, negative spaces, 
                contrast and borrowed views.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="landscape-card p-6"
            >
              <Wrench className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-display">Complete Construction</h3>
              <p className="text-muted-foreground">
                We go beyond just landscaping aesthetics as we do all our own hard landscaping and timber work. 
                Designing and building decks, pergolas, brickwork, and paving are just a few skills in our repertoire.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="landscape-card p-6"
            >
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 font-display">Client Partnership</h3>
              <p className="text-muted-foreground">
                This enables smooth running on sites as we seamlessly move from one aspect of the job to the next, 
                making for a huge saving in time and in budget. We ensure a totally transparent approach and 
                understand the value in keeping our clients in the loop the entire time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto p-8 landscape-card"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mx-auto md:mx-0">
                <Clock size={48} />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4 font-display text-center md:text-left">25+ Years of Experience</h2>
                <p className="text-muted-foreground mb-6">
                  Led by Dee Hart, with over 25 years of experience, we are visionaries in turning ordinary spaces 
                  into flourishing, well-balanced gardens by merging existing features with intricate and complex designs.
                </p>
                <p className="text-muted-foreground">
                  Our extensive experience allows us to anticipate challenges before they arise and deliver 
                  projects that exceed our clients' expectations, on time and within budget.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section removed per request */}
      
      {/* Call to Action */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 font-display">Ready to Transform Your Space?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss your project and discover how we can bring your vision to life.
            </p>
            <button
              type="button"
              onClick={handleContactClick}
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;