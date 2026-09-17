import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const rows = [
  { client: "Nordstrand Handel AB", item: "Kvitton mars", state: "Väntar" },
  { client: "Kvarnen Café", item: "Lönekörning", state: "Utkast" },
  { client: "Havtorn Konsult", item: "Bokslutspärm", state: "Komplett" },
];

export function DashboardPreview() {
  return (
    <section className="border-t border-border/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center sm:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Dashboardmock</p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Så kan en intern yta se ut — som skiss, inte som drift.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Namn och ärenden nedan är exempelrader för layout. De tillhör inga riktiga
            kunder och går inte att arbeta i.
          </p>
          <Button asChild className="mt-6" size="lg">
            <Link href="/demo">Öppna hela mocken</Link>
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-40px_rgb(0_0_0_/_80%)]">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="text-sm text-muted-foreground">Byråflöde · intern vy</span>
            <Badge variant="outline">Exempeldata</Badge>
          </div>
          <div className="divide-y divide-border">
            {rows.map((row) => (
              <div key={row.client} className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 sm:grid-cols-[1.2fr_1fr_auto]">
                <p className="text-sm text-foreground">{row.client}</p>
                <p className="hidden text-sm text-muted-foreground sm:block">{row.item}</p>
                <p className="text-sm text-primary">{row.state}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
