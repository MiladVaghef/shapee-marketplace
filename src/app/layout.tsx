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

const criticalSwiperFallback = `
.swiper:not(.swiper-initialized):not(.avatar-swiper[data-ring-ready="true"]) {
  display: block;
  width: 100%;
  overflow-x: auto !important;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.swiper:not(.swiper-initialized):not(.avatar-swiper[data-ring-ready="true"])::-webkit-scrollbar { display: none; }
.swiper.avatar-swiper[data-ring-ready="true"] {
  overflow-x: hidden;
  touch-action: pan-y;
}
.swiper:not(.avatar-swiper):not(.swiper-initialized) > .swiper-wrapper {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  min-width: 100%;
  height: auto;
  transform: none !important;
  transition: none !important;
}
.swiper:not(.swiper-initialized) .swiper-slide {
  flex: 0 0 calc((100% - 5px) / 2);
  width: calc((100% - 5px) / 2) !important;
  height: auto;
  scroll-snap-align: start;
}
.swiper.categories-swiper:not(.swiper-initialized) .swiper-slide {
  flex-basis: auto;
  width: auto !important;
}
.swiper.avatar-swiper:not(.swiper-initialized) .swiper-slide {
  flex-basis: 104px;
  width: 104px !important;
}
.swiper.showcase-swiper:not(.swiper-initialized) .swiper-slide,
.swiper.reviews:not(.swiper-initialized) .swiper-slide,
.swiper.product-gallery-main:not(.swiper-initialized) .swiper-slide {
  flex-basis: 100%;
  width: 100% !important;
}
.swiper.related-products-swiper:not(.swiper-initialized) .swiper-slide {
  flex-basis: 83.333%;
  width: 83.333% !important;
}
.swiper.product-gallery-thumbs:not(.swiper-initialized) .swiper-slide {
  flex-basis: 20%;
  width: 20% !important;
}
@media (min-width: 768px) {
  .swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: calc((100% - 20px) / 3);
    width: calc((100% - 20px) / 3) !important;
  }
  .swiper.avatar-swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: 144px;
    width: 144px !important;
  }
  .swiper.showcase-swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: calc((100% - 20px) / 3);
    width: calc((100% - 20px) / 3) !important;
  }
  .swiper.reviews:not(.swiper-initialized) .swiper-slide,
  .swiper.related-products-swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: calc((100% - 10px) / 2);
    width: calc((100% - 10px) / 2) !important;
  }
}
@media (min-width: 1300px) {
  .swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: calc((100% - 60px) / 5);
    width: calc((100% - 60px) / 5) !important;
  }
  .swiper.shops-swiper:not(.swiper-initialized) .swiper-slide,
  .swiper.plan-swiper:not(.swiper-initialized) .swiper-slide,
  .swiper.plans-swiper:not(.swiper-initialized) .swiper-slide,
  .swiper.showcase-swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: calc((100% - 45px) / 4);
    width: calc((100% - 45px) / 4) !important;
  }
  .swiper.reviews:not(.swiper-initialized) .swiper-slide {
    flex-basis: calc((100% - 15px) / 2);
    width: calc((100% - 15px) / 2) !important;
  }
  .swiper.related-products-swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: calc((100% - 30px) / 3);
    width: calc((100% - 30px) / 3) !important;
  }
  .swiper.avatar-swiper:not(.swiper-initialized) .swiper-slide {
    flex-basis: 176px;
    width: 176px !important;
  }
}
`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://shapee-marketplace.miladvaghefdev.workers.dev",
  ),
  title: { default: "شاپی | مارکت پلیس آنلاین", template: "%s" },
  description:
    "شاپی، یک مارکت پلیس کامل و حرفه ای برای پیدا کردن هر نیازی که شما دارید، انواع محصولات آنلاین و فروشگاه های درون شهر و استخدام شما برای بهترین کار های ممکن.",
  applicationName: "Shapee",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    locale: "fa_IR",
    siteName: "Shapee",
    title: "شاپی | مارکت پلیس آنلاین",
    description:
      "شاپی، یک مارکت پلیس کامل و حرفه ای برای پیدا کردن هر نیازی که شما دارید، انواع محصولات آنلاین و فروشگاه های درون شهر و استخدام شما برای بهترین کار های ممکن.",
    images: [
      {
        url: "/assets/images/example/shapee-social-preview-v2.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "شاپی؛ مارکت‌پلیس محصولات، فروشگاه‌ها و پیشنهادهای ویژه",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شاپی | مارکت پلیس آنلاین",
    description:
      "شاپی، یک مارکت پلیس کامل و حرفه ای برای پیدا کردن هر نیازی که شما دارید، انواع محصولات آنلاین و فروشگاه های درون شهر و استخدام شما برای بهترین کار های ممکن.",
    images: [
      {
        url: "/assets/images/example/shapee-social-preview-v2.jpg",
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
        <style>{criticalSwiperFallback}</style>
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
