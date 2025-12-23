import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import heatingThumb from "@assets/heizung1_1766324985366.png";
import painterThumb from "@assets/maler_v3_1.png";
import rooferThumb from "@assets/dach_v1_1.png";

const projects = [
  {
    id: "heating",
    title: "Sanitär & Heizung Müller",
    category: "Komplett-Website",
    image: heatingThumb,
    description: "Moderne Unternehmenswebsite mit Terminbuchung und Notdienst-Funktion.",
    demoUrl: "?demo=heating"
  },
  {
    id: "painter",
    title: "Maler Meisterbetrieb Arnold",
    category: "Komplett-Website",
    image: painterThumb,
    description: "Farbenfrohes Design mit Portfolio-Galerie und Angebotsrechner.",
    demoUrl: "?demo=painter"
  },
  {
    id: "roofer",
    title: "Dachwerk Meister",
    category: "Komplett-Website",
    image: rooferThumb,
    description: "Professioneller Auftritt für Dachdecker mit Leistungsübersicht.",
    demoUrl: "?demo=roofer"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Beispielprojekte</Badge>
          <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-primary">
            Unsere Arbeit spricht für sich.
          </h2>
          <p className="text-muted-foreground text-lg">
            Werfen Sie einen Blick auf ein paar beispielhafte Websites verschiedener Handwerksbranchen. Es handelt sich hier um Beispiele – Texte, Bilder und Designs können nach Belieben angepasst werden.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 border-border/50 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold flex items-center gap-2">
                      <ExternalLink className="h-5 w-5" />
                      In neuem Tab öffnen
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
