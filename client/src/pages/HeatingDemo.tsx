// This is a minimal mockup of the "Heating Technician" website as a demo page
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ThermometerSun, Wrench, Droplets, ArrowRight } from "lucide-react";
import heroImg from "@assets/generated_images/heating_technician_installing_modern_system.png";

export default function HeatingDemo() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <span>Ihr Fachbetrieb für Sanitär & Heizung in der Region</span>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> Notdienst: 0123 - 456 789</span>
            <span className="font-bold text-yellow-400">24/7 Erreichbar</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl text-blue-900 flex items-center gap-2">
            <Droplets className="h-6 w-6 text-blue-600" />
            MÜLLER <span className="text-blue-600">SANITÄR</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#" className="hover:text-blue-600">Leistungen</a>
            <a href="#" className="hover:text-blue-600">Über Uns</a>
            <a href="#" className="hover:text-blue-600">Karriere</a>
            <a href="#" className="hover:text-blue-600">Kontakt</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Termin vereinbaren</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center text-white">
        <div className="absolute inset-0">
          <img src={heroImg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Wärme & Wasser <br/> sind unser Handwerk.
          </h1>
          <p className="text-xl mb-8 max-w-xl text-slate-200">
            Wir modernisieren Ihre Heizung, sanieren Ihr Bad und sind im Notfall sofort zur Stelle. Meisterqualität seit 1995.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold h-14 px-8 text-lg">
              Angebot anfordern
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 h-14 px-8 text-lg">
              Unsere Leistungen
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ThermometerSun, title: "Heizung & Wärme", desc: "Wärmepumpen, Gasheizungen und moderne Hybrid-Systeme." },
              { icon: Droplets, title: "Bad & Sanitär", desc: "Vom Gäste-WC bis zur Wellness-Oase. Komplettsanierung aus einer Hand." },
              { icon: Wrench, title: "Wartung & Service", desc: "Regelmäßige Wartung für lange Lebensdauer und 24h Notdienst." }
            ].map((s, i) => (
              <div key={i} className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
                <s.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 mb-4">{s.desc}</p>
                <a href="#" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
                  Mehr erfahren <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Elements */}
      <section className="py-16 bg-slate-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">Warum Kunden uns vertrauen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="font-bold text-4xl text-blue-600 block">25+ <span className="text-sm text-slate-500 block font-normal mt-2">Jahre Erfahrung</span></div>
            <div className="font-bold text-4xl text-blue-600 block">1.500+ <span className="text-sm text-slate-500 block font-normal mt-2">Projekte realisiert</span></div>
            <div className="font-bold text-4xl text-blue-600 block">12 <span className="text-sm text-slate-500 block font-normal mt-2">Mitarbeiter</span></div>
            <div className="font-bold text-4xl text-blue-600 block">4.9 <span className="text-sm text-slate-500 block font-normal mt-2">Google Bewertung</span></div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <p>Dies ist eine Demo-Website für Handwerk Stark Digital.</p>
      </footer>
    </div>
  );
}
