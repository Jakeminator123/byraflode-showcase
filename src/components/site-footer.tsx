import Link from "next/link";
import { SAJTMASKIN_BUILDER_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          Byråflöde är ett exempelprojekt. Ingen riktig tjänst, ingen försäljning.
        </p>
        <p className="text-sm">
          <a
            href={SAJTMASKIN_BUILDER_URL}
            className="text-primary underline-offset-4 hover:underline"
          >
            Exempelsajt skapad med Sajtmaskin · Skapa din egen
          </a>
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-x-5 gap-y-2 px-4 pb-8 text-xs text-muted-foreground sm:px-6">
        <Link href="/" className="hover:text-foreground">
          Hem
        </Link>
        <Link href="/login" className="hover:text-foreground">
          Login-skal
        </Link>
        <Link href="/demo" className="hover:text-foreground">
          Dashboardmock
        </Link>
      </div>
    </footer>
  );
}
