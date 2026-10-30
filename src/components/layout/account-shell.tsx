"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { AccountHeader, AccountFooters } from "./account-chrome";
import { Sliders } from "@/components/ui/sliders";
import { accountNavigation } from "@/data/account-navigation";

export function AccountShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.className =
      "flex column justify-content-between full-page-height";
    return () => {
      document.body.className = "";
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("keydown", escape);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <Sliders />
      <div
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("#account-menu-button"))
            setOpen((v) => !v);
        }}
      >
        <AccountHeader />
      </div>
      <main className="flex row justify-content-center align-items-center full-width full-height overflow-hidden">
        {open && (
          <button
            type="button"
            aria-label="بستن فهرست"
            id="account-menu-overlay"
            className="background-overlay"
            onClick={() => setOpen(false)}
          />
        )}
        <aside
          id="account-menu"
          aria-label="فهرست حساب کاربری"
          className={`flex column pt-5 pb-5 gap-4 font-peyda w-45 border-left full-height overflow-y-auto primary-scrollbar xl-fixed right-0 top-0 bg-background index-2000 xl-drawer ${open ? "is-open" : "xl-is-closed"}`}
        >
          <div className="flex align-items-center justify-content-between pr-5 pl-5">
            <Link
              href="/profile/user-profile"
              className="flex align-items-center gap-3"
            >
              <img
                decoding="async"
                loading="lazy"
                src="/assets/images/example/profile-picture.jpg"
                alt="تصویر حساب کاربری"
                className="w-6 h-6 round-full"
              />
              <span className="text-sm">
                علی محمدی
                <br />
                <small>حساب کاربری</small>
              </span>
            </Link>
            <button
              type="button"
              aria-label="بستن فهرست"
              className="remove xl-block"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <nav>
            {accountNavigation.map(({ slug, label, icon }) => {
              const active =
                pathname === `/account/${slug}` ||
                (pathname === "/account" && slug === "dashboard");
              return (
                <Link
                  key={slug}
                  href={`/account/${slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`flex align-items-center justify-content-between hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 text-sm ${active ? "bg-primary-light text-primary" : ""}`}
                >
                  <span className="flex align-items-center gap-4">
                    <i className={`icon icon-${icon} w-3 h-3`} />
                    {label}
                  </span>
                  <i className="icon icon-left-2 opacity-7 w-3 h-3" />
                </Link>
              );
            })}
          </nav>
          <div className="flex gap-3 align-items-center pr-5 pl-5">
            <Link href="/explore" className="font-peyda text-sm text-primary">
              همه صفحات
            </Link>
          </div>
          <Link
            href="/login"
            className="flex justify-content-center light-border p-3 round-sm font-peyda text-red m-5"
          >
            خروج از حساب کاربری
          </Link>
        </aside>
        {children}
      </main>
      <AccountFooters />
    </>
  );
}
