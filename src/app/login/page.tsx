import type { Metadata } from "next";
import { LoginShell } from "@/components/login-shell";

export const metadata: Metadata = {
  title: "Login-skal — Byråflöde",
  description: "Visuellt inloggningsskal i exempelsajten Byråflöde. Ingen autentisering sker.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginShell />;
}
