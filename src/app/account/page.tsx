import type { Metadata } from "next";
import Dashboard from "./dashboard/page";
import { ProfileHub } from "@/components/account/profile-hub";
export const metadata: Metadata = { title: "شاپی | حساب کاربری" };
export default function AccountPage() {
  return (
    <>
      <ProfileHub />
      <div className="account-home-desktop">
        <Dashboard />
      </div>
    </>
  );
}
