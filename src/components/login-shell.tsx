"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginShell() {
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Inget konto skapas. Det här är ett login-skal i exempelsajten. Öppna demovyn om du vill se dashboardmocken.",
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-16 sm:px-6">
      <Badge variant="secondary">Login-skal</Badge>
      <h1 className="mt-4 text-4xl text-foreground">Logga in — som skiss.</h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Fälten tar emot text lokalt i webbläsaren men skickas ingenstans. Ingen
        session, ingen databas, ingen e-post.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-5">
        <div className="space-y-2">
          <Label htmlFor="email">E-post (exempel)</Label>
          <Input id="email" name="email" type="email" autoComplete="off" placeholder="namn@exempel.se" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Lösenord (exempel)</Label>
          <Input id="password" name="password" type="password" autoComplete="off" placeholder="••••••••" />
        </div>
        <Button type="submit" className="w-full" size="lg">
          Försök logga in
        </Button>
        {notice ? <p className="text-sm text-primary">{notice}</p> : null}
      </form>
      <Button asChild variant="outline" className="mt-4 w-full" size="lg">
        <Link href="/demo">Gå till dashboardmocken i stället</Link>
      </Button>
    </div>
  );
}
