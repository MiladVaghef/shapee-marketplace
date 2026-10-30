"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { createRingMotion } from "@/lib/ring-motion";

// Swiper owns its track DOM; React owns the page markup. Instances are scoped to
// each route and destroyed before navigation to avoid duplicated listeners.
export function Sliders() {
  const pathname = usePathname();
  useEffect(() => {
    let disposed = false;
    const instances: {
      destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
    }[] = [];
    const cleanups: (() => void)[] = [];
    document
      .querySelectorAll<HTMLElement>(".avatar-swiper")
      .forEach((element) => cleanups.push(createRingMotion(element)));
    import("swiper/bundle").then(({ default: Swiper }) => {
      if (disposed) return;
      const main = document.querySelector<HTMLElement>(".product-gallery-main");
      const thumbs = document.querySelector<HTMLElement>(
        ".product-gallery-thumbs",
      );
      let thumbInstance;
      if (thumbs) {
        thumbInstance = new Swiper(thumbs, {
          slidesPerView: 5,
          spaceBetween: 8,
          watchSlidesProgress: true,
        });
        instances.push(thumbInstance);
      }
      if (main)
        instances.push(
          new Swiper(main, {
            spaceBetween: 10,
            navigation: { nextEl: ".gallery-next", prevEl: ".gallery-prev" },
            ...(thumbInstance ? { thumbs: { swiper: thumbInstance } } : {}),
          }),
        );
      document.querySelectorAll<HTMLElement>(".swiper").forEach((element) => {
        if (
          element === main ||
          element === thumbs ||
          (element as HTMLElement & { swiper?: unknown }).swiper
        )
          return;
        if (element.classList.contains("avatar-swiper")) return;
        const has = (name: string) => element.classList.contains(name);
        const avatar = has("avatar-swiper");
        const categories = has("categories-swiper");
        const showcase = has("showcase-swiper");
        const shops = has("shops-swiper");
        const related = has("related-products-swiper");
        const reviews = has("reviews");
        const plan = has("plan-swiper") || has("plans-swiper");
        const auto = avatar || showcase || has("campaign-swiper") || reviews;
        const maximum = avatar
          ? 7
          : categories
            ? 6
            : shops || showcase || plan || reviews
              ? 4
              : related
                ? 3
                : 5;
        const count = element.querySelectorAll(".swiper-slide").length;
        const pagination =
          element.querySelector<HTMLElement>(".swiper-pagination");
        const scope =
          (categories ? element.closest(".categories") : null) ||
          element.closest("section") ||
          element.parentElement;
        const next =
          element.querySelector<HTMLElement>(".swiper-button-next") ||
          scope?.querySelector<HTMLElement>(".swiper-button-next");
        const prev =
          element.querySelector<HTMLElement>(".swiper-button-prev") ||
          scope?.querySelector<HTMLElement>(".swiper-button-prev");
        instances.push(
          new Swiper(element, {
            observer: true,
            observeParents: true,
            slidesPerView: 2,
            spaceBetween: avatar ? 0 : 15,
            loop: auto && count > maximum,
            speed: avatar ? 4500 : 300,
            freeMode: avatar,
            autoplay: auto
              ? {
                  delay: avatar ? 0 : 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false,
            navigation: next && prev ? { nextEl: next, prevEl: prev } : false,
            pagination: pagination
              ? {
                  el: pagination,
                  clickable: true,
                  type:
                    has("minimal-swiper") || has("campaign-swiper")
                      ? "progressbar"
                      : "bullets",
                }
              : false,
            breakpoints: {
              0: {
                slidesPerView: reviews ? 1 : related ? 1.2 : showcase ? 1 : 2,
                spaceBetween: 5,
              },
              551: {
                slidesPerView: reviews ? 2 : related ? 1.2 : showcase ? 1 : 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: reviews ? 2 : avatar ? 5 : related ? 2 : 3,
                spaceBetween: 10,
              },
              1300: {
                slidesPerView: reviews ? 2 : maximum,
                spaceBetween: 15,
              },
            },
          }),
        );
      });
    });
    return () => {
      disposed = true;
      cleanups.forEach((cleanup) => cleanup());
      instances.forEach((instance) => instance.destroy(true, true));
    };
  }, [pathname]);
  return null;
}
