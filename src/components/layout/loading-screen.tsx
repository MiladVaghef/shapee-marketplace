import Image from "next/image";

/** Shared loading screen using the same brand mark as the site header. */
export function LoadingScreen({
  offline = false,
  failed = false,
}: {
  offline?: boolean;
  failed?: boolean;
}) {
  return (
    <div
      className="loading-screen"
      dir="rtl"
      data-state={offline ? "offline" : failed ? "failed" : "loading"}
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
                : "در حال آماده‌سازی شاپی"}
          </h2>
          <p
            className="loading-screen__description"
            id="site-loader-description"
            hidden={!offline && !failed}
          >
            {offline
              ? "در انتظار برقراری اتصال اینترنت…"
              : failed
                ? "برخی از فایل‌های سایت بارگذاری نشده‌اند."
                : "چند لحظه تا دیدن تازه‌ترین‌ها فاصله دارید."}
          </p>
        </div>
      </div>
    </div>
  );
}
