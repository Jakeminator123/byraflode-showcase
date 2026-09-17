const features = [
  {
    title: "Intake i stället för mejltrådar",
    body: "En tänkt yta där kunder lämnar underlag på ett ställe. Här visas bara mönstret — ingen riktig inlämning.",
  },
  {
    title: "Överblick för byråteamet",
    body: "Status, saknade filer och nästa steg som en intern tavla. Exemplen i demovyn är påhittade rader.",
  },
  {
    title: "Påminnelser som produktidé",
    body: "Automatiska påminnelser nämns som riktning, inte som en verifierad funktion som redan körs mot kunder.",
  },
  {
    title: "AI-assistent i skalet",
    body: "Assistenten på sidan svarar med färdiga texter om produkten. Den är inte kopplad till en modell i drift.",
  },
];

export function Features() {
  return (
    <section id="produkt" className="scroll-mt-24 border-t border-border/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Produktsektioner</p>
        <h2 className="mt-3 max-w-xl text-3xl text-foreground sm:text-4xl">
          Byggt som en marknadssajt, inte som ett påhittat livebolag.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <h3 className="text-xl text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
