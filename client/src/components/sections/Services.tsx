import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import tabletImg from "@assets/generated_images/tablet_on_workbench_showing_website.png";

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-xl transform -rotate-2" />
            <img 
              src={tabletImg} 
              alt="Website Mockup auf Tablet in Werkstatt" 
              className="relative rounded-lg shadow-2xl border-4 border-white dark:border-slate-800"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Alles, was ein moderner Handwerksbetrieb braucht.
            </h2>
            <p className="text-muted-foreground text-lg">
              Keine versteckten Kosten, keine unnötigen Spielereien. Wir liefern ein Komplettpaket, 
              mit dem Sie sofort startklar sind.
            </p>

            <ul className="space-y-4">
              {[
                "Individuelles Webdesign passend zu Ihrem Firmenauftritt",
                "Suchmaschinenoptimierung (SEO) für lokale Sichtbarkeit",
                "Rechtssicheres Impressum & Datenschutzerklärung",
                "Integration von Kontaktformularen",
                "Hosting, Wartung & Pflege",
                "Professionelle E-Mail-Adressen passend zu Ihrer Domain"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-white dark:bg-slate-950 rounded-lg border border-border shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-primary">Transparente Kosten</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Website Erstellung</p>
                  <div className="text-3xl font-bold text-primary">999 €</div>
                  <p className="text-xs text-muted-foreground">Einmalige Kosten</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Full-Service Paket</p>
                  <div className="text-3xl font-bold text-secondary">20 €</div>
                  <p className="text-xs text-muted-foreground">Monatlich</p>
                  <p className="text-xs text-muted-foreground/80 mt-1 leading-tight">Hosting, Wartung, Pflege & Online-Garantie</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-sm">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
