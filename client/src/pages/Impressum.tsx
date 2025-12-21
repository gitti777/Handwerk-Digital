import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-heading font-bold mb-8 text-primary">Impressum</h1>
        
        <div className="space-y-6 max-w-2xl">
          <section>
            <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="mb-1 font-bold">FlowSystems LLC</p>
            <p>Vertreten durch den Firmeninhaber:</p>
            <p>Piere Popovits</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Kontakt</h2>
            <p>Marktplatz 9</p>
            <p>69250 Schönau</p>
            <p className="mt-2">Telefon: +4915751709853</p>
            <p>E-Mail: info@handwerk-stark-digital.de</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Piere Popovits</p>
            <p>Marktplatz 9</p>
            <p>69250 Schönau</p>
          </section>

          <section className="text-sm text-muted-foreground mt-8 border-t pt-8">
            <h3 className="font-bold mb-2 text-foreground">Haftungsausschluss</h3>
            <p className="mb-4">
              <strong>Haftung für Inhalte</strong><br/>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              <strong>Haftung für Links</strong><br/>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
