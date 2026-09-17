"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const answers: Record<string, string> = {
  "Vad är Byråflöde?":
    "Ett exempel på hur en SaaS-marknadssajt för redovisningsbyråer kan se ut. Det är inte en produkt i drift.",
  "Finns det riktiga priser?":
    "Nej. Priskorten visar bara kolumner och hierarki. Inga belopp, inget köp.",
  "Kan jag skapa konto?":
    "Login-skalet tar inte emot konton. Knappen öppnar bara demovyn.",
};

const questions = Object.keys(answers);

export function Assistant() {
  const [active, setActive] = useState(questions[0]);

  return (
    <section id="assistent" className="scroll-mt-24 border-t border-border/80">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr] sm:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">AI-assistent som produktidé</p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Frågor om sidan, med färdiga svar.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Det här är ett visuell skal. Inget chatt-API, ingen modell, ingen lagring
            av det du klickar på.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-foreground">Byråflöde-assistenten</p>
            <Badge variant="outline">Inte live</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {questions.map((question) => (
              <Button
                key={question}
                type="button"
                size="sm"
                variant={active === question ? "default" : "outline"}
                onClick={() => setActive(question)}
              >
                {question}
              </Button>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">{answers[active]}</p>
        </div>
      </div>
    </section>
  );
}
