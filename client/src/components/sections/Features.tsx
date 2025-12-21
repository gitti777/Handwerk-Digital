import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MonitorSmartphone, Users, Trophy, Clock } from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Modern & Mobil",
    description: "Perfekte Darstellung auf Smartphone, Tablet und PC. Damit Ihre Kunden Sie auch von unterwegs finden.",
  },
  {
    icon: Users,
    title: "Mitarbeitergewinnung",
    description: "Strukturiere Karriereseiten und Bewerbungsformulare, die es Fachkräften leicht machen, sich bei Ihnen zu bewerben.",
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description: "Wir wissen, dass Sie keine Zeit zu verlieren haben. Ihre neue Website steht in der Regel innerhalb von 14 Tagen.",
  },
  {
    icon: Trophy,
    title: "Branchen-Expertise",
    description: "Wir sprechen Ihre Sprache. Kein Fachchinesisch, sondern klare Kommunikation und Verständnis für Ihr Gewerk.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Warum Wir</Badge>
          <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-primary">
            Verstehen. Planen. Bauen.
          </h2>
          <p className="text-muted-foreground text-lg">
            Genau wie Sie arbeiten wir mit Struktur und Präzision. 
            Eine Website von uns ist kein Spielzeug, sondern ein Werkzeug für Ihren Erfolg.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
