import { Button } from "@/components/ui/button";
import { Phone, Paintbrush, Palette, Home, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function PainterDemo() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-orange-500 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <span>Ihr Meisterbetrieb für Farbe & Gestaltung seit 1980</span>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> Tel: 030 - 987 654 32</span>
            <span className="font-bold">Kostenlose Erstberatung</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl text-slate-800 flex items-center gap-2">
            <Paintbrush className="h-6 w-6 text-orange-500" />
            MÜLLER & SÖHNE
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#" className="hover:text-orange-500">Leistungen</a>
            <a href="#" className="hover:text-orange-500">Referenzen</a>
            <a href="#" className="hover:text-orange-500">Über Uns</a>
            <a href="#" className="hover:text-orange-500">Kontakt</a>
          </div>
          <Button className="bg-slate-800 hover:bg-slate-900 text-white">Angebot anfordern</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 font-bold tracking-wider uppercase mb-2 block">Maler & Lackierer</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
              Wir bringen Farbe <br/> in Ihr Leben.
            </h1>
            <p className="text-xl mb-8 max-w-xl text-slate-600">
              Von der klassischen Wandgestaltung bis zur exklusiven Spachteltechnik. 
              Wir realisieren Ihre Wohnträume mit Präzision und Leidenschaft.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 px-8 text-lg rounded-full">
                Projekt starten
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 h-14 px-8 text-lg rounded-full">
                Unsere Arbeiten
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2131&auto=format&fit=crop" 
              className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
              alt="Malerarbeiten"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Unsere Leistungen</h2>
            <p className="text-slate-600">
              Qualität, die man sieht. Wir bieten Ihnen das volle Spektrum moderner Malerarbeiten.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Innenanstriche", desc: "Hochwertige Farben und Techniken für ein gesundes Wohnklima." },
              { icon: Palette, title: "Kreativtechniken", desc: "Spachteltechnik, Lasur oder Betonoptik für einzigartige Wände." },
              { icon: Paintbrush, title: "Fassadengestaltung", desc: "Schutz und Ästhetik für Ihre Immobilie. Langlebig und wetterfest." }
            ].map((s, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-2xl hover:bg-orange-50 transition-colors duration-300">
                <div className="h-14 w-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
                <p className="text-slate-600 mb-4">{s.desc}</p>
                <a href="#" className="text-orange-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-6 text-yellow-400">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" />)}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
            "Müller & Söhne haben unser komplettes Haus gestrichen. Sauber, pünktlich und super freundlich. 
            Besonders die Beratung zur Farbwahl war Gold wert!"
          </blockquote>
          <cite className="not-italic opacity-70 font-medium">— Familie Weber aus Berlin</cite>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 text-center text-sm">
        <p>Dies ist eine Demo-Website für Handwerk Stark Digital.</p>
      </footer>
    </div>
  );
}
