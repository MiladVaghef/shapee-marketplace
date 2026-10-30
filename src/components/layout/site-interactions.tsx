"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { SearchInput } from "@/components/ui/search-input";

// Progressive enhancement for the original layout's menus. Stateful form widgets
// live in individual React components; this component only coordinates overlays.
export function SiteInteractions() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    let activeSearch: HTMLElement | null = null;
    let opener: HTMLElement | null = null;
    let previousOverflow = "";
    const byId = (id: string) => document.getElementById(id);
    const close = () => {
      activeSearch?.classList.remove("mobile-search-open");
      activeSearch?.classList.add("remove");
      activeSearch?.setAttribute("aria-hidden", "true");
      activeSearch = null;
      byId("products-mobile-overlay")?.classList.add("hidden");
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
      opener = null;
    };
    const click = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const searchTrigger = target.closest<HTMLElement>("#header-search-bar");
      if (searchTrigger && matchMedia("(max-width: 1024px)").matches) {
        const popup =
          [
            ...document.querySelectorAll<HTMLElement>(
              '[id="search-bar-popup"]',
            ),
          ].find((node) => node.classList.contains("fixed")) ||
          byId("mobile-search-fallback");
        if (popup) {
          close();
          previousOverflow = document.body.style.overflow;
          opener = searchTrigger;
          activeSearch = popup;
          popup.classList.remove("remove");
          popup.classList.add("mobile-search-open");
          popup.setAttribute("role", "dialog");
          popup.setAttribute("aria-modal", "true");
          popup.setAttribute("aria-label", "جستجو");
          popup.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
          popup.querySelector<HTMLInputElement>("input")?.focus();
        }
        return;
      }
      if (target.closest("[data-close-search], [data-close-overlay]")) {
        close();
        return;
      }
      const suggestion = target.closest<HTMLElement>(".suggest");
      if (activeSearch && suggestion && activeSearch.contains(suggestion)) {
        event.preventDefault();
        const query = suggestion.textContent?.trim() || "";
        close();
        router.push(`/search-result?q=${encodeURIComponent(query)}`);
        return;
      }
      const headerButton = target.closest("header button");
      if (headerButton && !headerButton.id) {
        if (headerButton.querySelector(".icon-bell"))
          router.push("/account/notifications");
        else if (headerButton.textContent?.includes("حساب کاربری"))
          router.push("/account");
        else if (headerButton.textContent?.includes("ثبت آگهی"))
          router.push("/create-products/add-personal-product");
      }
    };
    const escape = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        (event.key === "Enter" || event.key === " ") &&
        target.matches('#header-search-bar[role="button"]')
      ) {
        event.preventDefault();
        target.click();
        return;
      }
      if (
        event.key === "Enter" &&
        activeSearch?.contains(target) &&
        target.tagName === "INPUT"
      )
        close();
      const dialog = activeSearch;
      if (event.key === "Tab" && dialog) {
        const controls = [
          ...dialog.querySelectorAll<HTMLElement>(
            'button, input, select, textarea, a[href], [tabindex="0"]',
          ),
        ].filter(
          (node) =>
            !node.hasAttribute("disabled") && node.getClientRects().length,
        );
        const first = controls[0],
          last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "Escape") {
        close();
      }
    };
    document.addEventListener("click", click);
    document.addEventListener("keydown", escape);
    return () => {
      close();
      document.removeEventListener("click", click);
      document.removeEventListener("keydown", escape);
      document.body.style.overflow = "";
    };
  }, [pathname, router]);
  return (
    <div
      id="mobile-search-fallback"
      className="fixed inset-0 bg-background full-page-height overflow-y-auto remove font-peyda"
    >
      <div className="flex align-items-center gap-3 p-5">
        <button
          type="button"
          className="overlay-close-button"
          data-close-search
          aria-label="بستن جستجو"
        >
          <i className="icon icon-right-lg" aria-hidden="true" />
        </button>
        <SearchInput
          className="input-primary full-width font-peyda"
          placeholder="جستجو کنید..."
        />
      </div>
      <div className="p-5">
        <h2 className="text-sm">جستجوهای پرطرفدار</h2>
        <div className="flex wrap gap-3">
          {["گوشی", "کفش", "ساعت", "هدفون"].map((query) => (
            <Link
              key={query}
              href={`/search-result?q=${encodeURIComponent(query)}`}
              className="suggest light-border round-lg p-3 text-sm"
            >
              {query}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
