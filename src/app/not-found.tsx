import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="mt-4 text-4xl text-foreground">Sidan finns inte i exemplet</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Byråflöde har landning, login-skal och en dashboardmock. Inget mer.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/">Till startsidan</Link>
      </Button>
    </div>
  );
}
