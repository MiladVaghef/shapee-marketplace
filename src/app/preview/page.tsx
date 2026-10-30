import { SiteFooter } from "@/components/layout/site-footer";
import { GlobalSiteHeader } from "@/components/layout/global-site-header";
import { LocationButton } from "@/components/layout/location-provider";
// Migrated from main.html; edit this React source directly.
import type { Metadata } from "next";
import { SearchInput } from "@/components/ui/search-input";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = { title: "شاپی | پیش‌نمایش چیدمان" };
export default function Page() {
  return (
    <>
      <PageFrame className="">
        <GlobalSiteHeader desktopOnly />

        <header className="remove pt-2 pb-2 lg-flex gap-3 fixed top-0 full-width index-2000 bg-background">
          <div
            id="header-search-bar"
            className="h-fit light-border p-3 round-sm full-width bg-background-alt mr-5"
            role="button"
            tabIndex={0}
            aria-label="باز کردن جستجو"
            aria-haspopup="dialog"
          >
            <div className="flex row align-items-center">
              <i className="icon icon-search text-muted w-3 h-3"></i>

              <div className="flex row align-items-center gap-2 full-width indent-1 pointer">
                <span className="font-peyda text-muted text-sm">
                  {"جستجو در"}
                </span>

                <img
                  src="/assets/logo/shapee.png"
                  alt="لوگو شاپی"
                  className="w-8 mb-1"
                />
              </div>
            </div>
          </div>

          <LocationButton />
        </header>

        <div
          id="search-bar-popup"
          className="fixed inset-0 bg-background overflow-y-auto index-2000 top-0 full-width full-page-height remove"
        >
          <div className="flex row align-items-center gap-3 p-5">
            <button
              type="button"
              className="overlay-close-button"
              data-close-search
              aria-label="بستن جستجو"
            >
              <i className="icon icon-right-lg" aria-hidden="true" />
            </button>
            <i className="icon icon-search text-muted w-3 h-3"></i>

            <SearchInput
              type="text"
              className="input font-peyda full-width"
              placeholder="جستجو کنید..."
            />
          </div>

          <div className="flex column gap-5 p-5">
            <span className="font-peyda text-sm semi-bold">
              {" جستجو های پر طرفدار "}
            </span>

            <div className="flex row wrap gap-2">
              <div className="h-fit flex row align-items-center text-xs suggest w-fit pt-1 pb-1 pl-4 pr-4 gap-1 font-sans light-border round-lg">
                <i className="icon icon-trending-up-1 w-2 h-2 text-primary"></i>

                <span>{"گوشی سامسونگ S24"}</span>
              </div>

              <div className="h-fit flex row align-items-center text-xs suggest w-fit pt-1 pb-1 pl-4 pr-4 gap-1 font-sans light-border round-lg">
                <i className="icon icon-trending-up-1 w-2 h-2 text-primary"></i>

                <span>{"مزدا 3"}</span>
              </div>

              <div className="h-fit flex row align-items-center text-xs suggest w-fit pt-1 pb-1 pl-4 pr-4 gap-1 font-sans light-border round-lg">
                <i className="icon icon-trending-up-1 w-2 h-2 text-primary"></i>

                <span>{"قهوه ساز"}</span>
              </div>

              <div className="h-fit flex row align-items-center text-xs suggest w-fit pt-1 pb-1 pl-4 pr-4 gap-1 font-sans light-border round-lg">
                <i className="icon icon-trending-up-1 w-2 h-2 text-primary"></i>

                <span>{"کارت گرافیک"}</span>
              </div>

              <div className="h-fit flex row align-items-center text-xs suggest w-fit pt-1 pb-1 pl-4 pr-4 gap-1 font-sans light-border round-lg">
                <i className="icon icon-trending-up-1 w-2 h-2 text-primary"></i>

                <span>{"گوشی آیفون"}</span>
              </div>
            </div>

            <span className="font-peyda text-sm semi-bold mt-5">
              {" نتایج جستجو "}
            </span>

            <div id="search-results" className="flex column gap-5 round-md">
              <div className="search-results-product flex row gap-5 justify-content-between align-items-stretch full-width overflow-hidden">
                <div className="flex">
                  <img
                    className="w-15 round-md"
                    src="/assets/images/example/Jaguar-F-Type.jpg"
                    alt="محصول"
                  />
                </div>

                <div className="font-sans full-width flex column justify-content-center min-w-0">
                  <span className="semi-bold text-ellipsis">
                    {"جگوار مارک ۲ اتومات"}
                  </span>

                  <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-5">
                    <span>{"2025"}</span>

                    <span>{"|"}</span>

                    <span>{"3400 کارکرد"}</span>
                  </div>

                  <div className="flex row gap-2 font-sans text-primary semi-bold text-xs">
                    <span>{"12,000,000,000"}</span>

                    <span>{"تومان"}</span>
                  </div>
                </div>

                <button className="btn-primary w-10 size-5" type="button">
                  {">"}
                </button>
              </div>

              <div className="search-results-product flex row gap-5 justify-content-between align-items-stretch full-width overflow-hidden">
                <div className="flex">
                  <img
                    className="w-15 round-md"
                    src="/assets/images/example/Jaguar-F-Type.jpg"
                    alt="محصول"
                  />
                </div>

                <div className="font-sans full-width flex column justify-content-center">
                  <span className="semi-bold">{" جگوار مارک ۲ اتومات "}</span>

                  <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-5">
                    <span>{"2025"}</span>

                    <span>{"|"}</span>

                    <span>{"3400 کارکرد"}</span>
                  </div>

                  <div className="flex row gap-2 font-sans text-primary semi-bold text-xs">
                    <span>{"12,000,000,000"}</span>

                    <span>{"تومان"}</span>
                  </div>
                </div>

                <button className="btn-primary w-10 size-5" type="button">
                  {">"}
                </button>
              </div>

              <div className="search-results-product flex row gap-5 justify-content-between align-items-stretch full-width overflow-hidden">
                <div className="flex">
                  <img
                    className="w-15 round-md"
                    src="/assets/images/example/Jaguar-F-Type.jpg"
                    alt="محصول"
                  />
                </div>

                <div className="font-sans full-width flex column justify-content-center">
                  <span className="semi-bold">{" جگوار مارک ۲ اتومات "}</span>

                  <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-5">
                    <span>{"2025"}</span>

                    <span>{"|"}</span>

                    <span>{"3400 کارکرد"}</span>
                  </div>

                  <div className="flex row gap-2 font-sans text-primary semi-bold text-xs">
                    <span>{"12,000,000,000"}</span>

                    <span>{"تومان"}</span>
                  </div>
                </div>

                <button className="btn-primary w-10 size-5" type="button">
                  {">"}
                </button>
              </div>

              <div className="search-results-product flex row gap-5 justify-content-between align-items-stretch full-width overflow-hidden">
                <div className="flex">
                  <img
                    className="w-15 round-md"
                    src="/assets/images/example/Jaguar-F-Type.jpg"
                    alt="محصول"
                  />
                </div>

                <div className="font-sans full-width flex column justify-content-center">
                  <span className="semi-bold">{" جگوار مارک ۲ اتومات "}</span>

                  <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-5">
                    <span>{"2025"}</span>

                    <span>{"|"}</span>

                    <span>{"3400 کارکرد"}</span>
                  </div>

                  <div className="flex row gap-2 font-sans text-primary semi-bold text-xs">
                    <span>{"12,000,000,000"}</span>

                    <span>{"تومان"}</span>
                  </div>
                </div>

                <button className="btn-primary w-10 size-5" type="button">
                  {">"}
                </button>
              </div>

              <div className="search-results-product flex row gap-5 justify-content-between align-items-stretch full-width overflow-hidden">
                <div className="flex">
                  <img
                    className="w-15 round-md"
                    src="/assets/images/example/Jaguar-F-Type.jpg"
                    alt="محصول"
                  />
                </div>

                <div className="font-sans full-width flex column justify-content-center">
                  <span className="semi-bold">{" جگوار مارک ۲ اتومات "}</span>

                  <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-5">
                    <span>{"2025"}</span>

                    <span>{"|"}</span>

                    <span>{"3400 کارکرد"}</span>
                  </div>

                  <div className="flex row gap-2 font-sans text-primary semi-bold text-xs">
                    <span>{"12,000,000,000"}</span>

                    <span>{"تومان"}</span>
                  </div>
                </div>

                <button className="btn-primary w-10 size-5" type="button">
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="main-container mt-10 flex column gap-10 lg-mb-35 lg-mt-20"></main>

        <SiteFooter />
      </PageFrame>
    </>
  );
}
