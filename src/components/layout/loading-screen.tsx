import Image from "next/image";
import type { ReactNode } from "react";

/** Shared loading screen using the same brand mark as the site header. */
export function LoadingScreen({
  slow = false,
  offline = false,
  failed = false,
  children,
}: {
  slow?: boolean;
  offline?: boolean;
  failed?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className="loading-screen"
      dir="rtl"
      data-state={
        offline ? "offline" : failed ? "failed" : slow ? "slow" : "loading"
      }
    >
      <div className="loading-screen__content">
        <div className="loading-screen__mark">
          <Image
            src="/assets/logo/shapee-optimized-2.webp"
            alt="لوگوی شاپی"
            width={1050}
            height={369}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="loading-screen__track" aria-hidden="true">
          <span />
        </div>
        <div role="status" aria-live="polite" aria-atomic="true">
          <h2 className="loading-screen__title">
            {offline
              ? "اتصال اینترنت برقرار نیست"
              : failed
                ? "بارگذاری کامل نشد"
                : slow
                  ? "بارگذاری کمی طول کشیده"
                  : "در حال آماده‌سازی شاپی"}
          </h2>
          <p
            className="loading-screen__description"
            id="site-loader-description"
            hidden={!slow && !offline && !failed}
          >
            {offline
              ? "اتصال خود را بررسی کنید و دوباره تلاش کنید."
              : failed
                ? "دوباره تلاش کنید یا با امکانات محدود وارد سایت شوید."
                : slow
                  ? "می‌توانید منتظر بمانید یا صفحه را دوباره بارگذاری کنید."
                  : "چند لحظه تا دیدن تازه‌ترین‌ها فاصله دارید."}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
