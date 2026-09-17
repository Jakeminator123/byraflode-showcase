import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Är Byråflöde ett riktigt bolag?",
    a: "Nej. Det är ett exempelprojekt som visar hur en SaaS-marknadssajt för redovisningsbyråer kan se ut.",
  },
  {
    q: "Kan jag logga in och använda produkten?",
    a: "Login-sidan är ett skal. Den sparar inget konto och kopplar inte mot någon backend.",
  },
  {
    q: "Vad kostar det?",
    a: "Ingenting, och det finns inget att köpa. Priskorten är bara ett designmönster utan belopp.",
  },
  {
    q: "Är AI-assistenten live?",
    a: "Nej. Den visar färdiga svar om sidans idé så att assistentytan syns i layouten.",
  },
  {
    q: "Varför är sidan noindex?",
    a: "Innehållet är fiktivt. Det ska inte indexeras som en verklig tjänst.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border/80">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
        <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Vanliga frågor om exemplet</h2>
        <Accordion type="single" collapsible className="mt-8">
          {items.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
