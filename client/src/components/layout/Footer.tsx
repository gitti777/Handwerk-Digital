import { Hammer, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-heading font-bold text-2xl tracking-tighter text-white">
              <Hammer className="h-8 w-8 text-secondary" />
              <span>HANDWERK<span className="text-secondary">STARK</span>DIGITAL</span>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-xs">
              Wir bringen deutsches Handwerk ins digitale Zeitalter. Ehrlich, direkt und professionell.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Kontakt</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Marktplatz 9, 69250 Schönau</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+4915751709853</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@handwerk-stark-digital.de</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Rechtliches</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="/impressum" className="hover:text-secondary">Impressum</a></li>
              <li><a href="#" className="hover:text-secondary">Datenschutz</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} HANDWERKSTARKDIGITAL. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
