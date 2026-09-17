import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Start",
    amount: "Illustrativt belopp",
    note: "En kolumn för en liten byrå.",
    points: ["Intake-vy", "Gemensam kö", "Enkel översikt"],
  },
  {
    name: "Byrå",
    amount: "Illustrativt belopp",
    note: "Visar en mittenkolumn i layouten.",
    points: ["Flera medarbetare i vyn", "Påminnelsemönster", "Status per kund"],
    featured: true,
  },
  {
    name: "Kontor",
    amount: "Illustrativt belopp",
    note: "Bredare teamyta som designskiss.",
    points: ["Fler arbetsytor", "Exportidé", "Roller i mocken"],
  },
];

export function Pricing() {
  return (
    <section id="priser" className="scroll-mt-24 border-t border-border/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Prislayout som mönster</p>
        <h2 className="mt-3 max-w-2xl text-3xl text-foreground sm:text-4xl">
          Tre kolumner, inget erbjudande.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
          Beloppen är medvetet inte satta. Originalsajten riskerade att se ut som en
          riktig prislista. Här är det bara strukturen: namn, punkter, en framhävd mittkolumn.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.featured ? "border-primary/40 bg-card" : "bg-card/70"}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  {plan.featured ? <Badge>Layoutfokus</Badge> : null}
                </div>
                <p className="text-sm text-primary">{plan.amount}</p>
                <p className="text-sm text-muted-foreground">{plan.note}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Inte ett köp, inte en checkout, inte schema.org Offer.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
