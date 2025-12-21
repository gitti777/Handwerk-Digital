import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Hammer } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#features", label: "Warum Wir" },
    { href: "#services", label: "Leistungen" },
    { href: "#portfolio", label: "Referenzen" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2 font-heading font-bold text-2xl tracking-tighter text-primary">
              <Hammer className="h-8 w-8 text-secondary" />
              <span>HANDWERK<span className="text-secondary">STARKDIGITAL</span></span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-sm uppercase tracking-wide">
                Kostenloses Erstgespräch
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-base font-medium text-foreground hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold">
                Kontakt aufnehmen
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
