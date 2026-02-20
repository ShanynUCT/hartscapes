import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, ThumbsUp, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StatItemProps {
  icon: JSX.Element;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-2 group">
      <div className="text-primary mb-2 opacity-80 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/70">
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const navigate = useNavigate();
  
  const stats = [
    { icon: <Award size={20} />, value: "25+", label: "Experience" },
    { icon: <Users size={20} />, value: "300+", label: "Happy Clients" },
    { icon: <ThumbsUp size={20} />, value: "98%", label: "Satisfaction" }
  ];

  const expectations = [
    "Clear, collaborative planning from concept to completion.",
    "Craft-focused builds that stand up to Cape Town’s climate.",
    "Planting palettes that are water-wise and seasonal.",
    "Reliable timelines with tidy, respectful site teams."
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Image Stack */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-background">
              <img 
                src="https://images.unsplash.com/photo-1533467915241-eac02e856653?q=80&w=1470&auto=format&fit=crop" 
                alt="Main Garden Design" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -right-8 w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-30 border-8 border-background hidden md:block"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1632&auto=format&fit=crop" 
                alt="Landscape Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block underline underline-offset-8 decoration-primary/30">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display tracking-tight leading-[1.1]">
                Landscaping with Drive and <br />
                <span className="text-primary italic font-serif">Passion Since 2000</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Hartscapes</strong> is an owner-run landscaping company based in Cape Town, 
                  dedicated to transforming outdoor spaces with over 25 years of landscape and garden design experience.
                </p>
                
                <p>
                  Specializing in garden design, tree felling, and plot clearing, we create sustainable landscapes 
                  tailored to the unique South African environment.
                </p>
              </div>

              {/* Expectations Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-primary/10 pt-8">
                {expectations.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <p className="text-xs font-medium text-foreground/80 leading-tight">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA and Stats Row */}
              <div className="mt-12 flex flex-col xl:flex-row items-center gap-10 border-t border-primary/10 pt-10">
                <Button 
                  size="lg"
                  className="rounded-full px-10 py-7 h-auto bg-primary text-white hover:scale-105 transition-all shadow-xl shadow-primary/20 shrink-0"
                  onClick={() => {
                    navigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {/* Triple Stat Bar (Re-balanced to 3 columns) */}
                <div className="grid grid-cols-3 gap-8 flex-1 w-full max-w-sm">
                  {stats.map((stat, i) => (
                    <StatItem key={i} {...stat} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}