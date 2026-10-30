import { LocationButton } from "@/components/layout/location-provider";
// Migrated from components.html; edit this React source directly.
import type { Metadata } from "next";
import Link from "next/link";
import { SearchInput } from "@/components/ui/search-input";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = { title: "شاپی | کتابخانه رابط کاربری" };
export default function Page() {
  return (
    <>
      <PageFrame className="">
        <header className="full-width flex pt-4 pb-4 h-6">
          <div className="full-width flex row justify-content-between main-container gap-5">
            <div id="header-shoppie-logo" className="flex align-items-center">
              <Link href="/">
                <img
                  className="w-13"
                  src="/assets/logo/shoppie.png"
                  alt="لوگوی شاپی"
                />
              </Link>
            </div>

            <div className="flex row justify-content-center gap-3 index-1000 full-width">
              <div className="flex row gap-3">
                <button
                  id="categories-button"
                  className="font-peyda medium text-sm btn-primary flex justify-content-center align-items-center gap-3 w-18"
                  type="button"
                >
                  <span>{"دسته بندی ها"}</span>

                  <i className="icon icon-down-2 text-inverse"></i>
                </button>
              </div>

              <div id="mega-menu" className="flex row index-2000">
                <a href="#" className="xl-remove">
                  <div id="mega-menu-banner" className="flex">
                    <img
                      src="/assets/images/example/mega-menu-banner.png"
                      alt="بنر مگا منو"
                    />
                  </div>
                </a>

                <div className="flex row gap-1 pl-3 pr-3 pt-6 pb-6 full-width">
                  <div className="flex column fill pl-5 pr-5 font-peyda light-gray-left-border">
                    <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
                      <div className="bg-subtle round-md flex p-4">
                        <i className="icon icon-grid text-text w-3 h-3"></i>
                      </div>

                      <span className="semi-bold">{"آگهی تکی"}</span>
                    </div>

                    <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
                      <div className="flex column gap-6 mr-1">
                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="mt-10">
                        <button
                          className="btn-subtle full-width font-peyda text-secondary semi-bold"
                          type="button"
                        >
                          {" مشاهده همه "}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex column fill pl-5 pr-5 font-peyda light-gray-left-border">
                    <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
                      <div className="bg-subtle round-md flex p-4">
                        <i className="icon icon-grid text-text w-3 h-3"></i>
                      </div>

                      <span className="semi-bold">{"آگهی تکی"}</span>
                    </div>

                    <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
                      <div className="flex column gap-6 mr-1">
                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="mt-10">
                        <button
                          className="btn-subtle full-width font-peyda text-secondary semi-bold"
                          type="button"
                        >
                          {" مشاهده همه "}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex column fill pl-5 pr-5 font-peyda light-gray-left-border">
                    <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
                      <div className="bg-subtle round-md flex p-4">
                        <i className="icon icon-grid text-text w-3 h-3"></i>
                      </div>

                      <span className="semi-bold">{"آگهی تکی"}</span>
                    </div>

                    <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
                      <div className="flex column gap-6 mr-1">
                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="mt-10">
                        <button
                          className="btn-subtle full-width font-peyda text-secondary semi-bold"
                          type="button"
                        >
                          {" مشاهده همه "}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex column fill pl-5 pr-5 font-peyda">
                    <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
                      <div className="bg-subtle round-md flex p-4">
                        <i className="icon icon-grid text-text w-3 h-3"></i>
                      </div>

                      <span className="semi-bold">{"آگهی تکی"}</span>
                    </div>

                    <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
                      <div className="flex column gap-6 mr-1">
                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-car text-secondary w-3 h-3"></i>
                            {" وسایل نقلیه "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                            {" موتورسیکلت "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>

                        <div className="flex align-items-center justify-content-between">
                          <span className="flex align-items-center gap-4">
                            <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                            {" املاک "}
                          </span>

                          <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="mt-10">
                        <button
                          className="btn-subtle full-width font-peyda text-secondary semi-bold"
                          type="button"
                        >
                          {" مشاهده همه "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="header-search-bar"
                className="h-fit light-border p-3 round-md full-width max-w-55 bg-background-alt"
              >
                <div className="flex row index-1000">
                  <i className="icon icon-search text-muted w-3 h-3"></i>

                  <SearchInput
                    type="text"
                    className="input font-peyda full-width indent-1"
                    placeholder="جستجو در آگهی ها، کسب و کار ها، فروشگاها و کاریابی"
                  />
                </div>

                <div
                  id="search-bar-popup"
                  className="column gap-6 bg-background p-5 round-md light-border mt-5 remove"
                >
                  <span className="font-peyda text-sm semi-bold">
                    {"جستجو های پر طرفدار"}
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

                      <span>{"گوشی آیفن"}</span>
                    </div>
                  </div>

                  <span className="font-peyda text-sm semi-bold">
                    {"جستجو های پر طرفدار"}
                  </span>

                  <div
                    id="search-results"
                    className="flex row wrap gap-5 round-md"
                  >
                    <div className="search-results-product flex row gap-5 justify-content-between align-items-center full-width overflow-hidden">
                      <div className="flex">
                        <img
                          className="w-15 round-md"
                          src="/assets/images/example/Jaguar-F-Type.jpg"
                          alt="محصول"
                        />
                      </div>

                      <div className="font-sans full-width">
                        <span className="semi-bold mb-5">
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

                      <button
                        className="btn-primary full-height w-10 size-5"
                        type="button"
                      >
                        {">"}
                      </button>
                    </div>

                    <div className="search-results-product flex row gap-5 justify-content-between align-items-center full-width overflow-hidden">
                      <div className="flex">
                        <img
                          className="w-15 round-md"
                          src="/assets/images/example/Audi-TT-RS.jpg"
                          alt="محصول"
                        />
                      </div>

                      <div className="font-sans full-width">
                        <span className="semi-bold mb-5">
                          {"نیسان جی تی ار"}
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

                      <button
                        className="btn-primary full-height w-10 size-5"
                        type="button"
                      >
                        {">"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <LocationButton />
            </div>

            <div id="header-submit-ad ">
              <button
                className="font-peyda btn-primary text-sm flex row justify-content-center align-items-center gap-1 full-height w-15"
                type="button"
              >
                <i className="icon icon-plus-alt text-inverse w-2 h-2"></i>
                {" ثبت آگهی "}
              </button>
            </div>
          </div>
        </header>

        <main className="main-container mt-10 flex column gap-10">
          <div className="categories flex row full-width mb-5 align-items-center gap-3">
            <div className="swiper-button-prev light-border pd-3 round-full bg-background"></div>

            <span className="font-peyda semi-bold ml-5">{"همه دسته ها"}</span>

            <div className="categories-viewport full-width light-border p-5 round-md w-55 bg-background-alt">
              <div className="swiper categories-swiper">
                <div className="swiper-wrapper gap-3">
                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a
                      href="#"
                      className="flex row align-items-center gap-2 w-fit"
                    >
                      <i className="icon icon-home-smile w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"اجاره ویلا"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-3">
                      <i className="icon icon-pool w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"استخر دار"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-2">
                      <i className="icon icon-motorcycle-bike w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"موتورسیکلت"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-2">
                      <i className="icon icon-car-suv w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"ماشین"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a
                      href="#"
                      className="flex row align-items-center gap-2 w-fit"
                    >
                      <i className="icon icon-home-smile w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"اجاره ویلا"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-3">
                      <i className="icon icon-pool w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"استخر دار"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-2">
                      <i className="icon icon-motorcycle-bike w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"موتورسیکلت"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-2">
                      <i className="icon icon-car-suv w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"ماشین"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a
                      href="#"
                      className="flex row align-items-center gap-2 w-fit"
                    >
                      <i className="icon icon-home-smile w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"اجاره ویلا"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-3">
                      <i className="icon icon-pool w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"استخر دار"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-2">
                      <i className="icon icon-motorcycle-bike w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"موتورسیکلت"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide flex justify-content-center align-items-center">
                    <a href="#" className="flex row align-items-center gap-2">
                      <i className="icon icon-car-suv w-3 h-3"></i>

                      <span className="font-peyda text-md mt-1 text-text">
                        {"ماشین"}
                      </span>
                    </a>
                  </div>

                  <div className="swiper-slide"></div>
                </div>
              </div>
            </div>

            <div className="swiper-button-next light-border pd-3 round-full bg-background"></div>
          </div>

          <div className="flex column full-width mt-2">
            <div className="row flex justify-content-between">
              <div className="flex align-items-center gap-3 font-peyda size-6 semi-bold">
                <span>{"خودرو های لوکس ایرانی"}</span>
              </div>

              <a href="#" className="row flex align-items-center gap-2">
                <span className="text-primary font-peyda text-sm semi-bold">
                  {"مشاهده همه"}
                </span>

                <i className="icon icon-left-arrow text-primary"></i>
              </a>
            </div>

            <div className="flex row mt-10">
              <div className="swiper minimal-swiper full-width">
                <div className="swiper-wrapper font-sans">
                  <div className="swiper-slide">
                    <a href="#" className="flex column gap-4 overflow-hidden">
                      <div>
                        <div className="absolute top-3 left-3 p-2 bg-background-transparent round-full flex round-md">
                          <i className="icon icon-heart-angle text-primary w-3 h-3 pointer"></i>
                        </div>

                        <img
                          src="/assets/images/example/bmw-car.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width round-md"
                        />
                      </div>

                      <div className="flex column gap-2">
                        <div className="flex justify-content-between align-items-center gap-2">
                          <span className="semi-bold font-sans extra-text-md">
                            {"ماشین بنز S500 "}
                          </span>

                          <span className="bg-primary text-inverse pl-3 pr-3 round-lg text-xs">
                            {"40% تخفیف"}
                          </span>
                        </div>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"2025"}</span>

                          <span>{"|"}</span>

                          <span>{"3400 کارکرد"}</span>
                        </div>

                        <div className="flex column gap-2 mt-2 mb-2">
                          <div className="flex justify-content-between align-items-center">
                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" دنده اتومات"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" شتاب بالا"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" گرمکن صندلی"}
                            </span>
                          </div>
                        </div>

                        <div className="flex row justify-content-between align-items-center mt-3 pr-3 pl-3">
                          <span className="font-peyda text text-align-center">
                            {"قیمت ساعتی:"}
                          </span>

                          <div className="flex column">
                            <div className="flex align-items-center gap-2 font-sans text-primary semi-bold justify-content-end">
                              <span className="discount font-sans">
                                {"22,500,00"}
                              </span>
                            </div>

                            <div className="flex row gap-2 align-items-center">
                              <span className="semi-bold extra-text-md text-primary">
                                {"12,500,000"}
                              </span>

                              <span className="semi-bold text-primary">
                                {"تومان"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center flex align-items-center">
                        <button
                          className="btn-primary font-peyda full-width"
                          type="button"
                        >
                          {" مشاده آگهی "}
                        </button>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" className="flex column gap-4 overflow-hidden">
                      <div>
                        <div className="absolute top-3 left-3 p-2 bg-background-transparent round-full flex round-md">
                          <i className="icon icon-heart-angle text-primary w-3 h-3 pointer"></i>
                        </div>

                        <img
                          src="/assets/images/example/bmw-car.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width round-md"
                        />
                      </div>

                      <div className="flex column gap-2">
                        <div className="flex justify-content-between align-items-center gap-2">
                          <span className="semi-bold font-sans extra-text-md">
                            {"ماشین بنز S500 "}
                          </span>

                          <span className="bg-primary text-inverse pl-3 pr-3 round-lg text-xs">
                            {"40% تخفیف"}
                          </span>
                        </div>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"2025"}</span>

                          <span>{"|"}</span>

                          <span>{"3400 کارکرد"}</span>
                        </div>

                        <div className="flex column gap-2 mt-2 mb-2">
                          <div className="flex justify-content-between align-items-center">
                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" دنده اتومات"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" شتاب بالا"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" گرمکن صندلی"}
                            </span>
                          </div>
                        </div>

                        <div className="flex row justify-content-between align-items-center mt-3 pr-3 pl-3">
                          <span className="font-peyda text text-align-center">
                            {"قیمت ساعتی:"}
                          </span>

                          <div className="flex column">
                            <div className="flex align-items-center gap-2 font-sans text-primary semi-bold justify-content-end">
                              <span className="discount font-sans">
                                {"22,500,00"}
                              </span>
                            </div>

                            <div className="flex row gap-2 align-items-center">
                              <span className="semi-bold extra-text-md text-primary">
                                {"12,500,000"}
                              </span>

                              <span className="semi-bold text-primary">
                                {"تومان"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center flex align-items-center">
                        <button
                          className="btn-primary font-peyda full-width"
                          type="button"
                        >
                          {" مشاده آگهی "}
                        </button>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" className="flex column gap-4 overflow-hidden">
                      <div>
                        <div className="absolute top-3 left-3 p-2 bg-background-transparent round-full flex round-md">
                          <i className="icon icon-heart-angle text-primary w-3 h-3 pointer"></i>
                        </div>

                        <img
                          src="/assets/images/example/bmw-car.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width round-md"
                        />
                      </div>

                      <div className="flex column gap-2">
                        <div className="flex justify-content-between align-items-center gap-2">
                          <span className="semi-bold font-sans extra-text-md">
                            {"ماشین بنز S500 "}
                          </span>

                          <span className="bg-primary text-inverse pl-3 pr-3 round-lg text-xs">
                            {"40% تخفیف"}
                          </span>
                        </div>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"2025"}</span>

                          <span>{"|"}</span>

                          <span>{"3400 کارکرد"}</span>
                        </div>

                        <div className="flex column gap-2 mt-2 mb-2">
                          <div className="flex justify-content-between align-items-center">
                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" دنده اتومات"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" شتاب بالا"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" گرمکن صندلی"}
                            </span>
                          </div>
                        </div>

                        <div className="flex row justify-content-between align-items-center mt-3 pr-3 pl-3">
                          <span className="font-peyda text text-align-center">
                            {"قیمت ساعتی:"}
                          </span>

                          <div className="flex column">
                            <div className="flex align-items-center gap-2 font-sans text-primary semi-bold justify-content-end">
                              <span className="discount font-sans">
                                {"22,500,00"}
                              </span>
                            </div>

                            <div className="flex row gap-2 align-items-center">
                              <span className="semi-bold extra-text-md text-primary">
                                {"12,500,000"}
                              </span>

                              <span className="semi-bold text-primary">
                                {"تومان"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center flex align-items-center">
                        <button
                          className="btn-primary font-peyda full-width"
                          type="button"
                        >
                          {" مشاده آگهی "}
                        </button>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" className="flex column gap-4 overflow-hidden">
                      <div>
                        <div className="absolute top-3 left-3 p-2 bg-background-transparent round-full flex round-md">
                          <i className="icon icon-heart-angle text-primary w-3 h-3 pointer"></i>
                        </div>

                        <img
                          src="/assets/images/example/bmw-car.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width round-md"
                        />
                      </div>

                      <div className="flex column gap-2">
                        <div className="flex justify-content-between align-items-center gap-2">
                          <span className="semi-bold font-sans extra-text-md">
                            {"ماشین بنز S500 "}
                          </span>

                          <span className="bg-primary text-inverse pl-3 pr-3 round-lg text-xs">
                            {"40% تخفیف"}
                          </span>
                        </div>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"2025"}</span>

                          <span>{"|"}</span>

                          <span>{"3400 کارکرد"}</span>
                        </div>

                        <div className="flex column gap-2 mt-2 mb-2">
                          <div className="flex justify-content-between align-items-center">
                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" دنده اتومات"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" شتاب بالا"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" گرمکن صندلی"}
                            </span>
                          </div>
                        </div>

                        <div className="flex row justify-content-between align-items-center mt-3 pr-3 pl-3">
                          <span className="font-peyda text text-align-center">
                            {"قیمت ساعتی:"}
                          </span>

                          <div className="flex column">
                            <div className="flex align-items-center gap-2 font-sans text-primary semi-bold justify-content-end">
                              <span className="discount font-sans">
                                {"22,500,00"}
                              </span>
                            </div>

                            <div className="flex row gap-2 align-items-center">
                              <span className="semi-bold extra-text-md text-primary">
                                {"12,500,000"}
                              </span>

                              <span className="semi-bold text-primary">
                                {"تومان"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center flex align-items-center">
                        <button
                          className="btn-primary font-peyda full-width"
                          type="button"
                        >
                          {" مشاده آگهی "}
                        </button>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" className="flex column gap-4 overflow-hidden">
                      <div>
                        <div className="absolute top-3 left-3 p-2 bg-background-transparent round-full flex round-md">
                          <i className="icon icon-heart-angle text-primary w-3 h-3 pointer"></i>
                        </div>

                        <img
                          src="/assets/images/example/bmw-car.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width round-md"
                        />
                      </div>

                      <div className="flex column gap-2">
                        <div className="flex justify-content-between align-items-center gap-2">
                          <span className="semi-bold font-sans extra-text-md">
                            {"ماشین بنز S500 "}
                          </span>

                          <span className="bg-primary text-inverse pl-3 pr-3 round-lg text-xs">
                            {"40% تخفیف"}
                          </span>
                        </div>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"2025"}</span>

                          <span>{"|"}</span>

                          <span>{"3400 کارکرد"}</span>
                        </div>

                        <div className="flex column gap-2 mt-2 mb-2">
                          <div className="flex justify-content-between align-items-center">
                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" دنده اتومات"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" شتاب بالا"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" گرمکن صندلی"}
                            </span>
                          </div>
                        </div>

                        <div className="flex row justify-content-between align-items-center mt-3 pr-3 pl-3">
                          <span className="font-peyda text text-align-center">
                            {"قیمت ساعتی:"}
                          </span>

                          <div className="flex column">
                            <div className="flex align-items-center gap-2 font-sans text-primary semi-bold justify-content-end">
                              <span className="discount font-sans">
                                {"22,500,00"}
                              </span>
                            </div>

                            <div className="flex row gap-2 align-items-center">
                              <span className="semi-bold extra-text-md text-primary">
                                {"12,500,000"}
                              </span>

                              <span className="semi-bold text-primary">
                                {"تومان"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center flex align-items-center">
                        <button
                          className="btn-primary font-peyda full-width"
                          type="button"
                        >
                          {" مشاده آگهی "}
                        </button>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" className="flex column gap-4 overflow-hidden">
                      <div>
                        <div className="absolute top-3 left-3 p-2 bg-background-transparent round-full flex round-md">
                          <i className="icon icon-heart-angle text-primary w-3 h-3 pointer"></i>
                        </div>

                        <img
                          src="/assets/images/example/bmw-car.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width round-md"
                        />
                      </div>

                      <div className="flex column gap-2">
                        <div className="flex justify-content-between align-items-center gap-2">
                          <span className="semi-bold font-sans extra-text-md">
                            {"ماشین بنز S500 "}
                          </span>

                          <span className="bg-primary text-inverse pl-3 pr-3 round-lg text-xs">
                            {"40% تخفیف"}
                          </span>
                        </div>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"2025"}</span>

                          <span>{"|"}</span>

                          <span>{"3400 کارکرد"}</span>
                        </div>

                        <div className="flex column gap-2 mt-2 mb-2">
                          <div className="flex justify-content-between align-items-center">
                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" دنده اتومات"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" شتاب بالا"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" گرمکن صندلی"}
                            </span>
                          </div>
                        </div>

                        <div className="flex row justify-content-between align-items-center mt-3 pr-3 pl-3">
                          <span className="font-peyda text text-align-center">
                            {"قیمت ساعتی:"}
                          </span>

                          <div className="flex column">
                            <div className="flex align-items-center gap-2 font-sans text-primary semi-bold justify-content-end">
                              <span className="discount font-sans">
                                {"22,500,00"}
                              </span>
                            </div>

                            <div className="flex row gap-2 align-items-center">
                              <span className="semi-bold extra-text-md text-primary">
                                {"12,500,000"}
                              </span>

                              <span className="semi-bold text-primary">
                                {"تومان"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center flex align-items-center">
                        <button
                          className="btn-primary font-peyda full-width"
                          type="button"
                        >
                          {" مشاده آگهی "}
                        </button>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a href="#" className="flex column gap-4 overflow-hidden">
                      <div>
                        <div className="absolute top-3 left-3 p-2 bg-background-transparent round-full flex round-md">
                          <i className="icon icon-heart-angle text-primary w-3 h-3 pointer"></i>
                        </div>

                        <img
                          src="/assets/images/example/bmw-car.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width round-md"
                        />
                      </div>

                      <div className="flex column gap-2">
                        <div className="flex justify-content-between align-items-center gap-2">
                          <span className="semi-bold font-sans extra-text-md">
                            {"ماشین بنز S500 "}
                          </span>

                          <span className="bg-primary text-inverse pl-3 pr-3 round-lg text-xs">
                            {"40% تخفیف"}
                          </span>
                        </div>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"2025"}</span>

                          <span>{"|"}</span>

                          <span>{"3400 کارکرد"}</span>
                        </div>

                        <div className="flex column gap-2 mt-2 mb-2">
                          <div className="flex justify-content-between align-items-center">
                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" دنده اتومات"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" شتاب بالا"}
                            </span>

                            <span className="primary-border round-md text-xs text-text font-peyda pt-1 pb-1 pr-2 pl-2">
                              {" گرمکن صندلی"}
                            </span>
                          </div>
                        </div>

                        <div className="flex row justify-content-between align-items-center mt-3 pr-3 pl-3">
                          <span className="font-peyda text text-align-center">
                            {"قیمت ساعتی:"}
                          </span>

                          <div className="flex column">
                            <div className="flex align-items-center gap-2 font-sans text-primary semi-bold justify-content-end">
                              <span className="discount font-sans">
                                {"22,500,00"}
                              </span>
                            </div>

                            <div className="flex row gap-2 align-items-center">
                              <span className="semi-bold extra-text-md text-primary">
                                {"12,500,000"}
                              </span>

                              <span className="semi-bold text-primary">
                                {"تومان"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-content-center flex align-items-center">
                        <button
                          className="btn-primary font-peyda full-width"
                          type="button"
                        >
                          {" مشاده آگهی "}
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex column full-width mt-2">
            <div className="row flex justify-content-between">
              <div className="flex align-items-center gap-3 font-peyda size-6 semi-bold">
                <span>{"ویلا های ایران"}</span>
              </div>

              <a href="#" className="row flex align-items-center gap-2">
                <span className="text-primary font-peyda text-sm semi-bold">
                  {"مشاهده همه"}
                </span>

                <i className="icon icon-left-arrow text-primary"></i>
              </a>
            </div>

            <div className="flex row mt-10">
              <div className="swiper minimal-swiper full-width">
                <div className="swiper-wrapper font-sans">
                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden"
                    >
                      <div>
                        <img
                          src="/assets/images/example/house.jpeg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pl-5 pb-5 pr-5 pt-3 gap-2">
                        <span className="semi-bold">{"ویلا جنگلی چمستان"}</span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"500 متر"}</span>

                          <span>{"|"}</span>

                          <span>{"4 اتاق خواب"}</span>
                        </div>

                        <div className="flex row gap-2 font-sans text-primary semi-bold">
                          <span>{"35,000,000,000"}</span>

                          <span>{"تومان"}</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden"
                    >
                      <div>
                        <img
                          src="/assets/images/example/house.jpeg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pl-5 pb-5 pr-5 pt-3 gap-2">
                        <span className="semi-bold">{"ویلا جنگلی چمستان"}</span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"500 متر"}</span>

                          <span>{"|"}</span>

                          <span>{"4 اتاق خواب"}</span>
                        </div>

                        <div className="flex row gap-2 font-sans text-primary semi-bold">
                          <span>{"35,000,000,000"}</span>

                          <span>{"تومان"}</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden"
                    >
                      <div>
                        <img
                          src="/assets/images/example/house.jpeg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pl-5 pb-5 pr-5 pt-3 gap-2">
                        <span className="semi-bold">{"ویلا جنگلی چمستان"}</span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"500 متر"}</span>

                          <span>{"|"}</span>

                          <span>{"4 اتاق خواب"}</span>
                        </div>

                        <div className="flex row gap-2 font-sans text-primary semi-bold">
                          <span>{"35,000,000,000"}</span>

                          <span>{"تومان"}</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden"
                    >
                      <div>
                        <img
                          src="/assets/images/example/house.jpeg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pl-5 pb-5 pr-5 pt-3 gap-2">
                        <span className="semi-bold">{"ویلا جنگلی چمستان"}</span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"500 متر"}</span>

                          <span>{"|"}</span>

                          <span>{"4 اتاق خواب"}</span>
                        </div>

                        <div className="flex row gap-2 font-sans text-primary semi-bold">
                          <span>{"35,000,000,000"}</span>

                          <span>{"تومان"}</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden"
                    >
                      <div>
                        <img
                          src="/assets/images/example/house.jpeg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pl-5 pb-5 pr-5 pt-3 gap-2">
                        <span className="semi-bold">{"ویلا جنگلی چمستان"}</span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"500 متر"}</span>

                          <span>{"|"}</span>

                          <span>{"4 اتاق خواب"}</span>
                        </div>

                        <div className="flex row gap-2 font-sans text-primary semi-bold">
                          <span>{"35,000,000,000"}</span>

                          <span>{"تومان"}</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden"
                    >
                      <div>
                        <img
                          src="/assets/images/example/house.jpeg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pl-5 pb-5 pr-5 pt-3 gap-2">
                        <span className="semi-bold">{"ویلا جنگلی چمستان"}</span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-sm">
                          <span>{"500 متر"}</span>

                          <span>{"|"}</span>

                          <span>{"4 اتاق خواب"}</span>
                        </div>

                        <div className="flex row gap-2 font-sans text-primary semi-bold">
                          <span>{"35,000,000,000"}</span>

                          <span>{"تومان"}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex column full-width mt-2">
            <div className="row flex justify-content-between">
              <div className="flex align-items-center gap-3 font-peyda size-6 semi-bold">
                <span>{"برند های برتر"}</span>
              </div>

              <a href="#" className="row flex align-items-center gap-2">
                <span className="text-primary font-peyda text-sm semi-bold">
                  {"مشاهده همه"}
                </span>

                <i className="icon icon-left-arrow text-primary"></i>
              </a>
            </div>

            <div className="flex row mt-10">
              <div className="swiper minimal-swiper full-width">
                <div className="swiper-wrapper font-peyda">
                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden font-sans"
                    >
                      <div>
                        <img
                          src="/assets/images/example/beauty-clinic.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                        <div className="flex justify-content-between align-items-center">
                          <span className="semi-bold">
                            {"کلینیک تخصصی تهران "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-primary">
                            <span>{"4.8"}</span>

                            <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                          </div>
                        </div>

                        <span className="opacity-7 mb-1 text-sm text-accent">
                          {"کلینیک زیبایی پوست و زیبایی"}
                        </span>

                        <span className="text-accent text-xs bg-primary-light p-3 round-md mt-2 mb-2">
                          {
                            "محصولات کلینیک طب لوازم آرایشی و بهداشتی همچنین محصولات مراقبت از پوست و مو آمریکایی"
                          }
                        </span>

                        <div className="flex row justify-content-between align-items-center gap-2 mt-1 mb-1">
                          <span className="font-peyda text-sm flex gap-1">
                            <i className="icon icon-map text-primary w-2 h-2"></i>
                            {" آدرس: "}
                          </span>

                          <span className="font-peyda text-sm">
                            {"تهران، پردیس"}
                          </span>
                        </div>

                        <div className="flex row justify-content-center align-items-center gap-2 full-width mt-2">
                          <button
                            className="btn-primary-light p-3"
                            type="button"
                          >
                            <i className="icon icon-qr-code w-2 h-2"></i>
                          </button>

                          <button
                            className="btn-primary full-width font-peyda relative"
                            type="button"
                          >
                            {" مشاهده فروشگاه "}
                            <i className="icon icon-left-2 absolute left-3"></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden font-sans"
                    >
                      <div>
                        <img
                          src="/assets/images/example/beauty-clinic.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                        <div className="flex justify-content-between align-items-center">
                          <span className="semi-bold">
                            {"کلینیک تخصصی تهران "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-primary">
                            <span>{"4.8"}</span>

                            <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                          </div>
                        </div>

                        <span className="opacity-7 mb-1 text-sm text-accent">
                          {"کلینیک زیبایی پوست و زیبایی"}
                        </span>

                        <span className="text-accent text-xs bg-primary-light p-3 round-md mt-2 mb-2">
                          {
                            "محصولات کلینیک طب لوازم آرایشی و بهداشتی همچنین محصولات مراقبت از پوست و مو آمریکایی"
                          }
                        </span>

                        <div className="flex row justify-content-between align-items-center gap-2 mt-1 mb-1">
                          <span className="font-peyda text-sm flex gap-1">
                            <i className="icon icon-map text-primary w-2 h-2"></i>
                            {" آدرس: "}
                          </span>

                          <span className="font-peyda text-sm">
                            {"تهران، پردیس"}
                          </span>
                        </div>

                        <div className="flex row justify-content-center align-items-center gap-2 full-width mt-2">
                          <button
                            className="btn-primary-light p-3"
                            type="button"
                          >
                            <i className="icon icon-qr-code w-2 h-2"></i>
                          </button>

                          <button
                            className="btn-primary full-width font-peyda relative"
                            type="button"
                          >
                            {" مشاهده فروشگاه "}
                            <i className="icon icon-left-2 absolute left-3"></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden font-sans"
                    >
                      <div>
                        <img
                          src="/assets/images/example/beauty-clinic.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                        <div className="flex justify-content-between align-items-center">
                          <span className="semi-bold">
                            {"کلینیک تخصصی تهران "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-primary">
                            <span>{"4.8"}</span>

                            <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                          </div>
                        </div>

                        <span className="opacity-7 mb-1 text-sm text-accent">
                          {"کلینیک زیبایی پوست و زیبایی"}
                        </span>

                        <span className="text-accent text-xs bg-primary-light p-3 round-md mt-2 mb-2">
                          {
                            "محصولات کلینیک طب لوازم آرایشی و بهداشتی همچنین محصولات مراقبت از پوست و مو آمریکایی"
                          }
                        </span>

                        <div className="flex row justify-content-between align-items-center gap-2 mt-1 mb-1">
                          <span className="font-peyda text-sm flex gap-1">
                            <i className="icon icon-map text-primary w-2 h-2"></i>
                            {" آدرس: "}
                          </span>

                          <span className="font-peyda text-sm">
                            {"تهران، پردیس"}
                          </span>
                        </div>

                        <div className="flex row justify-content-center align-items-center gap-2 full-width mt-2">
                          <button
                            className="btn-primary-light p-3"
                            type="button"
                          >
                            <i className="icon icon-qr-code w-2 h-2"></i>
                          </button>

                          <button
                            className="btn-primary full-width font-peyda relative"
                            type="button"
                          >
                            {" مشاهده فروشگاه "}
                            <i className="icon icon-left-2 absolute left-3"></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden font-sans"
                    >
                      <div>
                        <img
                          src="/assets/images/example/beauty-clinic.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                        <div className="flex justify-content-between align-items-center">
                          <span className="semi-bold">
                            {"کلینیک تخصصی تهران "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-primary">
                            <span>{"4.8"}</span>

                            <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                          </div>
                        </div>

                        <span className="opacity-7 mb-1 text-sm text-accent">
                          {"کلینیک زیبایی پوست و زیبایی"}
                        </span>

                        <span className="text-accent text-xs bg-primary-light p-3 round-md mt-2 mb-2">
                          {
                            "محصولات کلینیک طب لوازم آرایشی و بهداشتی همچنین محصولات مراقبت از پوست و مو آمریکایی"
                          }
                        </span>

                        <div className="flex row justify-content-between align-items-center gap-2 mt-1 mb-1">
                          <span className="font-peyda text-sm flex gap-1">
                            <i className="icon icon-map text-primary w-2 h-2"></i>
                            {" آدرس: "}
                          </span>

                          <span className="font-peyda text-sm">
                            {"تهران، پردیس"}
                          </span>
                        </div>

                        <div className="flex row justify-content-center align-items-center gap-2 full-width mt-2">
                          <button
                            className="btn-primary-light p-3"
                            type="button"
                          >
                            <i className="icon icon-qr-code w-2 h-2"></i>
                          </button>

                          <button
                            className="btn-primary full-width font-peyda relative"
                            type="button"
                          >
                            {" مشاهده فروشگاه "}
                            <i className="icon icon-left-2 absolute left-3"></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      href="#"
                      className="flex column light-border round-md overflow-hidden font-sans"
                    >
                      <div>
                        <img
                          src="/assets/images/example/beauty-clinic.jpg"
                          alt="کلینیک زیبایی"
                          className="full-width"
                        />
                      </div>

                      <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                        <div className="flex justify-content-between align-items-center">
                          <span className="semi-bold">
                            {"کلینیک تخصصی تهران "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-primary">
                            <span>{"4.8"}</span>

                            <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                          </div>
                        </div>

                        <span className="opacity-7 mb-1 text-sm text-accent">
                          {"کلینیک زیبایی پوست و زیبایی"}
                        </span>

                        <span className="text-accent text-xs bg-primary-light p-3 round-md mt-2 mb-2">
                          {
                            "محصولات کلینیک طب لوازم آرایشی و بهداشتی همچنین محصولات مراقبت از پوست و مو آمریکایی"
                          }
                        </span>

                        <div className="flex row justify-content-between align-items-center gap-2 mt-1 mb-1">
                          <span className="font-peyda text-sm flex gap-1">
                            <i className="icon icon-map text-primary w-2 h-2"></i>
                            {" آدرس: "}
                          </span>

                          <span className="font-peyda text-sm">
                            {"تهران، پردیس"}
                          </span>
                        </div>

                        <div className="flex row justify-content-center align-items-center gap-2 full-width mt-2">
                          <button
                            className="btn-primary-light p-3"
                            type="button"
                          >
                            <i className="icon icon-qr-code w-2 h-2"></i>
                          </button>

                          <button
                            className="btn-primary full-width font-peyda relative"
                            type="button"
                          >
                            {" مشاهده فروشگاه "}
                            <i className="icon icon-left-2 absolute left-3"></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex column">
            <label
              htmlFor="phone"
              className="flex font-peyda text-sm text-muted mb-2"
            >
              {" دسته بندی "}
              <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                {"*"}
              </span>
            </label>

            <button
              className="full-width light-border font-peyda flex row justify-content-between gap-1 input-primary round-sm"
              type="button"
            >
              <span className="text-muted">{"موبایل و تبلت"}</span>

              <span className="flex justify-content-center align-items-center gap-2 text-primary">
                {"مشاهده همه "}
                <i className="icon icon-left-2 w-13px h-13px text-primary"></i>
              </span>
            </button>
          </div>

          <div className="form bg-gold-light">
            <div className="flex column gap-3">
              <div className="w-40px h-40px round-full bg-gold-transparent flex justify-content-center align-items-center">
                <i className="icon icon-lightning text-gold w-3 h-3"></i>
              </div>

              <h3 className="text-md bold mt-1 mb-0">
                {"آگهی خود را سریع‌تر بفروشید!"}
              </h3>

              <p className="text-text text-xs mt-0">
                {" با ثبت آگهی ویژه در صدر نتایج قرار بگیرید "}
              </p>

              <button
                className="full-width font-peyda text-inverse gold-border-md round-sm py-2 px-4 flex justify-content-center gap-2 bg-gold"
                type="button"
              >
                <i className="icon icon-package text-inverse"></i>
                {" ثبت آگهی ویژه "}
              </button>
            </div>
          </div>
        </main>

        <footer className="mt-10 bg-surface full-width flex justify-content-center pt-4 font-sans">
          <div className="main-container full-width flex row justify-content-between align-items-center main-container gap-5">
            <div className="flex column gap-4 full-width">
              <div className="flex row gap-10 justify-content-center align-items-center">
                <div className="flex fill column light-dark-left-border gap-1 font-peyda">
                  <span className="text-inverse size-5">
                    {"دانلود اپلیکیشن شاپی"}
                  </span>

                  <span className="text-inverse text-sm">
                    {"تجربه بهتر در موبایل"}
                  </span>

                  <div className="flex row gap-3 mt-6 wrap">
                    <img
                      className="w-15"
                      src="/assets/images/buttons/google-play-download.png"
                      alt="لینک گوگل پلی"
                    />

                    <img
                      className="w-15"
                      src="/assets/images/buttons/app-store-download.webp"
                      alt="لینک اپ استور"
                    />
                  </div>
                </div>

                <span className="line-wrapper h-15 bg-surface-alt"></span>

                <div className="flex fill column gap-2 justify-content-center light-dark-left-border align-items-center">
                  <div className="w-fit">
                    <span className="text-inverse extra-text-md">
                      {"خدمات شاپی"}
                    </span>

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
                  <div className="w-fit">
                    <span className="text-inverse extra-text-md">
                      {"راهنما"}
                    </span>

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

                <div className="flex fill column gap-2">
                  <span className="text-inverse extra-text-md">
                    {"درباره شاپی"}
                  </span>

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
