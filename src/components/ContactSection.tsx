import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend here
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Hartscapes. Dee and the team will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-karoo-100/50 to-background z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Get In Touch</h2>
          <p className="text-muted-foreground">
            Ready to transform your outdoor space? Contact Dee Hart and her dedicated team for a personalized consultation to bring your landscaping vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card className="landscape-card h-full">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 font-display">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Visit Us</h4>
                      <p className="text-muted-foreground mt-1">Cape Town, South Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground mt-1">
                        <a href="tel:+27822923908" className="hover:text-primary transition-colors">
                          +27 82 292 3908
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-muted-foreground mt-1">
                        <a href="mailto:Dee@hartscapes.co.za" className="hover:text-primary transition-colors">
                          Dee@hartscapes.co.za
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Working Hours</h4>
                      <p className="text-muted-foreground mt-1">Mon - Fri: 8am - 5pm</p>
                      <p className="text-muted-foreground">Sat: 9am - 2pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Team</h4>
                      <p className="text-muted-foreground mt-1">
                        Reach out to Dee Hart, our owner and lead designer, and her team for expert landscaping services.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43554989766!2d18.57118568060349!3d-33.96334354793882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1649312935285!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hartscapes Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="landscape-card">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 font-display">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Your phone number" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your project" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}