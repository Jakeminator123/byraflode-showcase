import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const queue = [
  { client: "Granit & Bruk AB", task: "Momsunderlag", due: "Vecka 12", state: "Saknas 2 filer" },
  { client: "Sjöbodens Handel", task: "Lönekörning", due: "Fredag", state: "Redo att granska" },
  { client: "Tallheden Bygg", task: "Bokslut", due: "April", state: "Utkast" },
];

export function DemoDashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="secondary">Dashboardmock</Badge>
          <h1 className="mt-4 text-4xl text-foreground">Intern yta som illustration</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Allt här är exempelrader för att visa täthet, typografi och statusfärger.
            Inget går att spara, tilldela eller skicka.
          </p>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Tillbaka till landningen</Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base text-muted-foreground">Öppna ärenden</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-4xl text-foreground">12</p>
            <p className="mt-1 text-xs text-muted-foreground">Påhittad siffra för layout</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base text-muted-foreground">Väntar på kund</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-4xl text-foreground">5</p>
            <p className="mt-1 text-xs text-muted-foreground">Inte uppmätt data</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base text-muted-foreground">Klara denna vecka</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-4xl text-foreground">3</p>
            <p className="mt-1 text-xs text-muted-foreground">Bara en visuell pott</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="border-b border-border px-4 py-3 text-sm text-muted-foreground">
          Kö · exempel
        </div>
        <div className="divide-y divide-border">
          {queue.map((row) => (
            <div
              key={row.client}
              className="grid gap-2 px-4 py-4 sm:grid-cols-[1.2fr_1fr_0.7fr_1fr]"
            >
              <p className="text-sm text-foreground">{row.client}</p>
              <p className="text-sm text-muted-foreground">{row.task}</p>
              <p className="text-sm text-muted-foreground">{row.due}</p>
              <p className="text-sm text-primary">{row.state}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
