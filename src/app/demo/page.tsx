import type { Metadata } from "next";
import { DemoDashboard } from "@/components/demo-dashboard";

export const metadata: Metadata = {
  title: "Dashboardmock — Byråflöde",
  description: "Intern vy som illustration. Exempeldata, ingen riktig byråkö.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <DemoDashboard />;
}
