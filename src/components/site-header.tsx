import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/#produkt", label: "Produkten" },
  { href: "/#priser", label: "Prislayout" },
  { href: "/#faq", label: "Frågor" },
  { href: "/login", label: "Login-skal" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-baseline gap-2">
          <span className="font-heading text-lg tracking-tight text-foreground">
            Byråflöde
          </span>
          <span className="hidden truncate text-xs text-muted-foreground sm:inline">
            exempelprojekt
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="lg">
          <Link href="/demo">Öppna demovyn</Link>
        </Button>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-border/60 px-4 py-2 text-xs text-muted-foreground md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-foreground">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
