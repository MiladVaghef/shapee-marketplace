// The homepage composition stays here; each content section lives in its own component.
import type { Metadata } from "next";
import { HomeCategoryShortcuts } from "@/components/home/sections/HomeCategoryShortcuts";
import { GlobalSiteHeader } from "@/components/layout/global-site-header";
import { HomeCommunityRings } from "@/components/home/sections/HomeCommunityRings";
import { HomeGoldenCampaign } from "@/components/home/sections/HomeGoldenCampaign";
import { HomePromotionalBanners } from "@/components/home/sections/HomePromotionalBanners";
import { HomeFeaturedStores } from "@/components/home/sections/HomeFeaturedStores";
import { HomeFeaturedBrands } from "@/components/home/sections/HomeFeaturedBrands";
import { HomePromotionalBannersSecondary } from "@/components/home/sections/HomePromotionalBannersSecondary";
import { HomeVehicleShowcase } from "@/components/home/sections/HomeVehicleShowcase";
import { HomePropertyShowcase } from "@/components/home/sections/HomePropertyShowcase";
import { HomeTravelShowcase } from "@/components/home/sections/HomeTravelShowcase";
import { HomeProductDeals } from "@/components/home/sections/HomeProductDeals";
import { HomeJobOpportunities } from "@/components/home/sections/HomeJobOpportunities";
import { HomeJoinCallToAction } from "@/components/home/sections/HomeJoinCallToAction";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = { title: "شاپی | بازار آنلاین" };
export default function Page() {
  return (
    <>
      <PageFrame className="">
        <GlobalSiteHeader />
        <main className="main-container mt-10 flex column gap-10 lg-mb-35 lg-mt-6">
          <HomeCategoryShortcuts />
          <HomeCommunityRings />
          <HomeGoldenCampaign />
          <HomePromotionalBanners />
          <HomeFeaturedStores />
          <HomeFeaturedBrands />
          <HomePromotionalBannersSecondary />
          <HomeVehicleShowcase />
          <HomePropertyShowcase />
          <HomeTravelShowcase />
          <HomeProductDeals />
          <HomeJobOpportunities />
          <HomeJoinCallToAction />
        </main>

        <footer className="mt-10 bg-surface full-width flex justify-content-center pt-4 font-sans lg-remove">
          <div className="main-container full-width flex row justify-content-between align-items-center main-container gap-5">
            <div className="flex column gap-4 full-width pl-4 pr-4">
              <div className="flex row gap-10 justify-content-center align-items-center">
                <div className="flex fill column light-dark-left-border gap-1 font-peyda">
                  <span className="text-inverse size-5">{"معرفی شاپی "}</span>

                  <p className="text-inverse text-xs opacity-7">
                    {
                      " شاپی بستری برای خرید و فروش، معرفی کسب و کارها و فرصت های شغلی در سراسر ایران. "
                    }
                  </p>

                  <div className="gap-5 flex row">
                    <i className="icon icon-whatsapp opacity-3 w-3 h-3 text-inverse"></i>

                    <i className="icon icon-instagram opacity-3 w-3 h-3 text-inverse"></i>

                    <i className="icon icon-telegram opacity-3 w-3 h-3 text-inverse"></i>

                    <i className="icon icon-linkedin-rounded opacity-3 w-3 h-3 text-inverse"></i>
                  </div>
                </div>

                <span className="line-wrapper h-15 bg-surface-alt"></span>

                <div className="flex fill column gap-2 justify-content-center light-dark-left-border align-items-center">
                  <div className="flex column gap-1 w-fit">
                    <span className="text-inverse text-lg">{"خدمات شاپی"}</span>

                    <ul className="flex column text-inverse list-reset font-sans">
                      <li className="text-xs p-1">
                        <a href="#">{"ثبت آگهی"}</a>
                      </li>

                      <li className="text-xs p-1">
                        <a href="#">{"کسب و کار"}</a>
                      </li>

                      <li className="text-xs p-1">
                        <a href="#">{"فروشگاه آنلاین"}</a>
                      </li>

                      <li className="text-xs p-1">
                        <a href="#">{"کاریابی"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <span className="line-wrapper h-15 bg-surface-alt"></span>

                <div className="flex fill column gap-2 justify-content-center light-dark-left-border align-items-center">
                  <div className="flex column gap-1 w-fit">
                    <span className="text-inverse text-lg">{"راهنما"}</span>

                    <ul className="flex column text-inverse list-reset font-sans">
                      <li className="text-xs p-1">
                        <a href="#">{"سوالات متداول"}</a>
                      </li>

                      <li className="text-xs p-1">
                        <a href="#">{"قوانین و مقررات"}</a>
                      </li>

                      <li className="text-xs p-1">
                        <a href="#">{"حریم خصوصی"}</a>
                      </li>

                      <li className="text-xs p-1">
                        <a href="#">{"تماس با ما"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <span className="line-wrapper h-15 bg-surface-alt"></span>

                <div className="flex justify-content-between column full-height gap-2">
                  <span className="text-inverse extra-text-md mb-7 text-lg">
                    {"اعتماد به شاپی"}
                  </span>

                  <div className="flex row gap-5 full-height">
                    <div className="flex fill justify-content-center align-items-center p-1 bg-background round-sm">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/example/e-namad.webp"
                        className="max-w-7"
                        alt=""
                      />
                    </div>

                    <div className="flex fill justify-content-center align-items-center p-1 bg-background round-sm">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/example/samandahi.webp"
                        className="max-w-7"
                        alt=""
                      />
                    </div>

                    <div className="flex fill justify-content-center align-items-center p-1 bg-background round-sm">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/example/zarin-pal.png"
                        className="max-w-7"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-4 flex justify-content-center full-width surface-alt-border-top">
                <p className="text-inverse text-xs opacity-7 font-sans m-0">
                  {" تمامی حقوق برای تیم شاپی محفوظ می باشد. "}
                  <span dir="rtl">{"© ۱۴۰۵"}</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </PageFrame>
    </>
  );
}
