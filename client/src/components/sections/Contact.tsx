import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import meetingImg from "@assets/generated_images/digital_handshake_or_construction_site_meeting.png";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
  company: z.string().min(2, "Firmenname ist erforderlich."),
  email: z.string().email("Ungültige E-Mail-Adresse."),
  phone: z.string().min(6, "Telefonnummer ist erforderlich."),
  message: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
                Projekt besprechen?
              </h2>
              <p className="text-muted-foreground text-lg">
                Lassen Sie uns unverbindlich über Ihre Ziele sprechen. Wir analysieren Ihren aktuellen Auftritt 
                und zeigen Ihnen Potenziale auf.
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-lg hidden lg:block">
              <img 
                src={meetingImg} 
                alt="Beratungsgespräch" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            
            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-lg border-l-4 border-secondary">
              <p className="font-medium text-primary italic">
                "Endlich eine Agentur, die versteht, wie wir Handwerker ticken. Schnell, unkompliziert und das Ergebnis kann sich sehen lassen."
              </p>
              <div className="mt-4 text-sm text-muted-foreground font-bold">
                — Michael Bauer, Malermeister Bauer GmbH
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border/50 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ihr Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Max Mustermann" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firma</FormLabel>
                        <FormControl>
                          <Input placeholder="Mustermann Bau GmbH" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input placeholder="info@firma.de" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="030 12345678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachricht (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ich interessiere mich für eine neue Website..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 text-lg">
                  Kostenloses Angebot anfordern
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Ihre Daten werden vertraulich behandelt und nur zur Kontaktaufnahme genutzt.
                </p>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
