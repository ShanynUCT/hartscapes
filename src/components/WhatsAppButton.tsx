import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/27822923908?text=Hi%20Hartscapes!%20I'd%20like%20to%20discuss%20a%20landscaping%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <Button 
        size="lg" 
        className="rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white h-14 w-14 sm:w-auto sm:px-6"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline ml-2">WhatsApp Us</span>
      </Button>
    </a>
  );
}
