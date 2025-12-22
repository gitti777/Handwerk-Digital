import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/hero_background_hands_on_blueprint.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] flex items-center bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Handwerker bei der Arbeit mit Bauplänen" 
          className="h-full w-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Spezialisiert auf Handwerksbetriebe
            </div>
            
            <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Wir bauen Ihre <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                digitale Visitenkarte.
              </span>
            </h1>
            
            <p className="max-w-[600px] text-lg text-slate-300 md:text-xl leading-relaxed">Sie sind Profi in ihrem Handwerk. Wir sind Profis im Netz. Gewinnen Sie mehr Kunden und qualifizierte Mitarbeiter mit einer Website, die Ihr Unternehmen professionell in Szene setzt.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg h-14 px-8 rounded-sm w-full sm:w-auto">
                  Jetzt anfragen
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium text-lg h-14 px-8 rounded-sm w-full sm:w-auto">
                  Unsere Arbeit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="pt-8 flex items-center gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>100% DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Entwickelt vom Profi Informatiker</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Abstract decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-secondary" />
      <div className="absolute bottom-4 right-0 w-1/4 h-4 bg-white/10" />
    </section>
  );
}
