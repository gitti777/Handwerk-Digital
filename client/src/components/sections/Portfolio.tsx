import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import heatingThumb from "@assets/heizung1_1766324985366.png";
import placeholder1 from "@assets/generated_images/empty_placeholder_for_future_project_1.png";
import placeholder2 from "@assets/generated_images/empty_placeholder_for_future_project_2.png";
import { useState } from "react";

const projects = [
  {
    id: "heating",
    title: "Sanitär & Heizung Müller",
    category: "Komplett-Website",
    image: heatingThumb,
    description: "Moderne Unternehmenswebsite mit Terminbuchung und Notdienst-Funktion.",
    demoUrl: "/portfolio/heating-demo" // This will be a route we create
  },
  {
    id: "placeholder1",
    title: "Projekt #2",
    category: "In Arbeit",
    image: placeholder1,
    description: "Demnächst verfügbar.",
    demoUrl: "#"
  },
  {
    id: "placeholder2",
    title: "Projekt #3",
    category: "In Arbeit",
    image: placeholder2,
    description: "Demnächst verfügbar.",
    demoUrl: "#"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Referenzen</Badge>
          <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-primary">
            Unsere Arbeit spricht für sich.
          </h2>
          <p className="text-muted-foreground text-lg">
            Werfen Sie einen Blick auf unsere aktuellen Projekte. Echte Handwerksbetriebe, echte Ergebnisse.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 border-border/50">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold flex items-center gap-2">
                        <ExternalLink className="h-5 w-5" />
                        Ansehen
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
              </DialogTrigger>
              
              {project.demoUrl !== "#" ? (
                <DialogContent className="max-w-[90vw] h-[90vh] p-0 overflow-hidden bg-background border-none">
                  <div className="relative w-full h-full flex flex-col">
                    <div className="bg-primary text-primary-foreground p-3 flex justify-between items-center shrink-0">
                      <div className="font-bold text-sm flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-green-500 block animate-pulse"/>
                         Live Vorschau: {project.title}
                      </div>
                      {/* Close button is handled by Dialog primitives usually but we can add custom header controls */}
                    </div>
                    <iframe 
                      src={project.demoUrl} 
                      className="w-full flex-grow border-0 bg-white"
                      title="Website Demo"
                    />
                  </div>
                </DialogContent>
              ) : null}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
