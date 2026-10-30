import type { Metadata } from "next";
import { VerificationWizard } from "@/components/account/verification-wizard";
import "./verify.scss";

export const metadata: Metadata = { title: "شاپی | احراز هویت" };
export default function Page() {
  return <VerificationWizard />;
}
