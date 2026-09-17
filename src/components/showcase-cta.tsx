import { SAJTMASKIN_BUILDER_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function ShowcaseCta() {
  return (
    <section className="border-t border-border/80">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-3xl text-foreground sm:text-4xl">
          Behöver du en marknadssajt för din egen tjänst?
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Originalidén kom från Sajtmaskin; den här versionen är en återskapad
          showcase. Beskriv företaget och bygg en egen första version där.
        </p>
        <Button asChild size="lg" className="mt-7">
          <a href={SAJTMASKIN_BUILDER_URL}>Öppna Sajtmaskin-byggaren</a>
        </Button>
      </div>
    </section>
  );
}
