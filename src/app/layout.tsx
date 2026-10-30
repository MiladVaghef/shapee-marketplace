import { LocationProvider } from "@/components/layout/location-provider";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "../../styles/main.scss";
import "./portfolio.scss";
import "@/components/products/products.scss";
import "@/components/account/profile-hub.scss";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { SiteInteractions } from "@/components/layout/site-interactions";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://shapee-marketplace.miladvaghefdev.workers.dev",
  ),
  title: { default: "شاپی | بازار آنلاین", template: "%s" },
  description:
    "شاپی، بازار آنلاین محصولات، فروشگاه‌ها و آگهی‌ها؛ تجربه‌ای برای خرید و معرفی کسب‌وکارها به سبک شما.",
  applicationName: "Shapee",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "Shapee",
    title: "شاپی | بازار آنلاین",
    description:
      "شاپی، بازار آنلاین محصولات، فروشگاه‌ها و آگهی‌ها؛ تجربه‌ای برای خرید و معرفی کسب‌وکارها به سبک شما.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1672,
        height: 941,
        alt: "شاپی؛ مارکت‌پلیس محصولات، فروشگاه‌ها و پیشنهادهای ویژه",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شاپی | بازار آنلاین",
    description:
      "شاپی، بازار آنلاین محصولات، فروشگاه‌ها و آگهی‌ها؛ تجربه‌ای برای خرید و معرفی کسب‌وکارها به سبک شما.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "شاپی؛ مارکت‌پلیس محصولات، فروشگاه‌ها و پیشنهادهای ویژه",
      },
    ],
  },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Link href="#page-content" className="skip-link">
          رفتن به محتوا
        </Link>
        <span id="page-content" tabIndex={-1} />
        <LocationProvider>
          <SiteInteractions />
          {children}
          <MobileBottomNav />
        </LocationProvider>
      </body>
    </html>
  );
}
