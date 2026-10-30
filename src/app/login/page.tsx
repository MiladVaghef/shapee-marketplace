// Migrated from pages/login.html; edit this React source directly.
import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = { title: "شاپی | ورود به حساب کاربری" };
export default function Page() {
  return (
    <>
      <PageFrame className="full-page-height full-width">
        <div className="full-width full-height flex row align-items-stretch lg-block">
          <div className="flex column  align-items-center full-height fill bg-background md-pl-5 md-pr-5">
            <div className="flex column full-width max-w-50 my-auto pt-5 pb-5">
              <LoginForm />
            </div>
          </div>

          <div className="flex full-height fill bg-background lg-remove">
            <div id="login-banner" className="full-width"></div>
          </div>
        </div>
      </PageFrame>
    </>
  );
}
