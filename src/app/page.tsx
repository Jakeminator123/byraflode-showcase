import { Assistant } from "@/components/assistant";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { ShowcaseCta } from "@/components/showcase-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Faq />
      <Assistant />
      <ShowcaseCta />
    </>
  );
}
