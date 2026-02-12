import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
  link: string;
}

export default function ServiceCard({ icon, title, description, index, link }: ServiceCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      className="landscape-card group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 
            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>

        <CardTitle className="text-xl font-display">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          variant="ghost"
          className="p-0 hover:bg-transparent hover:text-primary"
          onClick={() => navigate(link)}
        >
          Learn more
        </Button>
      </CardFooter>
    </Card>
  );
}