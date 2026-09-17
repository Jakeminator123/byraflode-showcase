import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">Exempelprojekt</Badge>
        <Badge variant="outline">Ingen live-tjänst</Badge>
      </div>
      <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
        Ett tydligare flöde för byråns underlag.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        Byråflöde är en tänkt SaaS-idé för svenska redovisningsbyråer: landningssida,
        prislayout, login-skal och en AI-assistent som produktmock. Sidan visar hur
        en mörk, corporate marknadssajt kan se ut — inte ett bolag som säljer något.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/demo">Se dashboardmock</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/#priser">Se prislayouten</Link>
        </Button>
      </div>
    </section>
  );
}
