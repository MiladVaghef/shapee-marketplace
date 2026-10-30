"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileBottomNav() {
  const pathname = usePathname();
  if (["/login", "/explore", "/components"].includes(pathname)) return null;
  const create =
    pathname.startsWith("/create-products/") ||
    pathname.startsWith("/create-shop/");
  const chats =
    pathname === "/account/chat" || pathname.startsWith("/account/chat/");
  const profile =
    !chats &&
    (pathname === "/account" ||
      pathname.startsWith("/account/") ||
      pathname.startsWith("/profile/"));
  const categories =
    pathname.startsWith("/inner-category/") ||
    pathname.startsWith("/products/") ||
    pathname.startsWith("/inner-ads/") ||
    pathname === "/search-result";
  const tabs = [
    {
      href: "/",
      label: "خانه",
      icon: "home-3",
      filled: "home-alt-3",
      active: pathname === "/" || pathname === "/preview",
    },
    {
      href: "/account/chat",
      label: "گفتگوها",
      icon: "chat-sms",
      filled: "chat-sms-filled",
      active: chats,
    },
    {
      href: "/create-products/add-personal-product",
      label: "ثبت آگهی",
      icon: "plus-alt",
      filled: "plus-alt",
      active: create,
      create: true,
    },
    {
      href: "/inner-category/products-category",
      label: "دسته بندی",
      icon: "grid",
      filled: "grid-filled",
      active: categories,
    },
    {
      href: "/account",
      label: "پروفایل",
      icon: "profile",
      filled: "profile-filled",
      active: profile,
    },
  ];
  return (
    <nav className="mobile-bottom-nav font-peyda" aria-label="ناوبری اصلی">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          aria-current={tab.active ? "page" : undefined}
          className={`mobile-tab ${tab.active ? "active text-primary" : "text-surface-alt"} ${tab.create ? "mobile-tab-create" : ""}`}
        >
          <span className="mobile-tab-icon">
            <i
              aria-hidden="true"
              className={`icon icon-${tab.active ? tab.filled : tab.icon}`}
            />
          </span>
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}
