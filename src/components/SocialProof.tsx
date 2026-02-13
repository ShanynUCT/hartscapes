import { Award, Shield, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SocialProof() {
  const badges = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "25+ Years",
      description: "Industry Experience"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "5.0 Rating",
      description: "Customer Reviews"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fully Insured",
      description: "Licensed & Bonded"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Free Consultation",
      description: "No Obligation Quote"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center text-primary mb-3">
                {badge.icon}
              </div>
              <div className="font-bold mb-1">{badge.title}</div>
              <div className="text-sm text-muted-foreground">{badge.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
