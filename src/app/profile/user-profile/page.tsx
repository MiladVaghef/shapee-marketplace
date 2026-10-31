import { SiteFooter } from "@/components/layout/site-footer";
import { MobileSiteHeader } from "@/components/layout/mobile-site-header";
import { GlobalSiteHeader } from "@/components/layout/global-site-header";
// Migrated from pages/profile/user-profile.html; edit this React source directly.
import type { Metadata } from "next";
import Link from "next/link";
import { SearchInput } from "@/components/ui/search-input";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = { title: "شاپی | پروفایل کاربر" };
export default function Page() {
  return (
    <>
      <PageFrame className="">
        <GlobalSiteHeader desktopOnly />

        <MobileSiteHeader />

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
                    decoding="async"
                    loading="lazy"
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
                    decoding="async"
                    loading="lazy"
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
                    decoding="async"
                    loading="lazy"
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
                    decoding="async"
                    loading="lazy"
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
                    decoding="async"
                    loading="lazy"
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

        <main className="user-profile-page main-container mt-10 flex column gap-10 lg-mb-35 lg-mt-20 font-peyda">
          <div className="inline-space py-8">
            <section className="form">
              <div className="flex md-column gap-5 relative">
                <div className="flex justify-content-center">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/images/example/profile-picture.jpg"
                    alt="Profile"
                    className="w-60px h-60px round-full"
                  />
                </div>

                <div className="fill flex row md-column justify-content-between gap-3 md-gap-6">
                  <div className="flex column md-column md-align-items-center gap-3">
                    <div className="flex column md-align-items-center">
                      <span className="semi-bold font-peyda">
                        {"علی محمدی "}
                        <i className="icon icon-verified-2 text-primary"></i>
                      </span>

                      <p className="text-muted text-sm mt-1">
                        {" فروشنده حرفه‌ای لوازم دیجیتال "}
                      </p>
                    </div>

                    <div className="flex gap-2 wrap font-sans">
                      <span className="flex justify-content-center align-items-center bg-primary-light text-primary round-full px-3 py-1 text-xs">
                        {" کاربر تایید شده "}
                      </span>

                      <span className="flex justify-content-center align-items-center bg-background-alt text-muted round-full px-3 py-1 text-xs">
                        {" عضو از ۱۴۰۱ "}
                      </span>
                    </div>
                  </div>

                  <div className="flex row md-justify-content-between gap-3 wrap">
                    <button
                      className="btn-primary font-peyda flex gap-3 align-items-center text-sm max-h-5 md-remove"
                      type="button"
                    >
                      <i className="icon icon-user-plus-alt"></i>
                      {" دنبال کردن "}
                    </button>

                    <button
                      className="btn-primary font-peyda flex justify-content-center gap-3 align-items-center text-sm max-h-5 w-3 absolute top-0"
                      type="button"
                    >
                      <i className="icon icon-user-plus-alt remove"></i>

                      <i className="icon icon-user-minus-alt"></i>
                    </button>

                    <button
                      className="btn-secondary font-peyda flex justify-content-center gap-3 align-items-center align-items-center text-sm max-h-5 p-3 md-absolute top-0 left-0 w-40px h-40px"
                      type="button"
                    >
                      <i className="icon icon-chat-sms"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-col-4 lg-grid-col-2 sm-grid-col-1 gap-4 mt-5">
              <div className="flex column justify-content-center align-items-center form fill">
                <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                  <div className="p-2 bg-primary-light round-sm absolute -right-1 -top-1">
                    <i className="icon icon-profile h-20px w-20px text-primary"></i>
                  </div>

                  <span className="text-sm semi-bold">
                    {"درصد رضایت مشتریان"}
                  </span>

                  <div className="flex column align-items-center justify-content-center">
                    <span className="text-xxl semi-bold text-primary">
                      {"94%"}
                    </span>

                    <span className="text-sm">{"کاربران راضی"}</span>
                  </div>

                  <div className="flex row gap-2 align-items-center justify-content-center">
                    <span className="text-xs semi-bold text-green">
                      {"4%+"}
                    </span>

                    <span className="text-xs">{"نسبت به ماه قبل"}</span>
                  </div>
                </div>
              </div>

              <div className="flex column justify-content-center align-items-center form fill">
                <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                  <div className="p-2 bg-primary-light round-sm absolute -right-1 -top-1">
                    <i className="icon icon-profile h-20px w-20px text-primary"></i>
                  </div>

                  <span className="text-sm semi-bold">{"نظرات این ماه"}</span>

                  <div className="flex column align-items-center justify-content-center">
                    <span className="text-xxl semi-bold text-primary">
                      {"32"}
                    </span>

                    <span className="text-sm">{"تعداد نظرات جدید"}</span>
                  </div>

                  <div className="flex row gap-2 align-items-center justify-content-center">
                    <span className="text-xs semi-bold text-green">
                      {"12+"}
                    </span>

                    <span className="text-xs">{"نسبت به ماه قبل"}</span>
                  </div>
                </div>
              </div>

              <div className="flex column justify-content-center align-items-center form fill">
                <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                  <div className="p-2 bg-primary-light round-sm absolute -right-1 -top-1">
                    <i className="icon icon-profile h-20px w-20px text-primary"></i>
                  </div>

                  <span className="text-sm semi-bold">{"تعداد فروش ماه"}</span>

                  <div className="flex column align-items-center justify-content-center">
                    <span className="text-xxl semi-bold text-primary">
                      {"86"}
                    </span>

                    <span className="text-sm">{"کاربران راضی"}</span>
                  </div>

                  <div className="flex row gap-2 align-items-center justify-content-center">
                    <span className="text-xs semi-bold text-green">
                      {"21%+"}
                    </span>

                    <span className="text-xs">{"نسبت به ماه قبل"}</span>
                  </div>
                </div>
              </div>

              <div className="flex column justify-content-center align-items-center form fill">
                <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                  <div className="p-2 bg-primary-light round-sm absolute -right-1 -top-1">
                    <i className="icon icon-profile h-20px w-20px text-primary"></i>
                  </div>

                  <span className="text-sm semi-bold">{"میانگین امتیاز"}</span>

                  <div className="flex column align-items-center justify-content-center">
                    <span className="text-xxl semi-bold text-primary">
                      {"4.6"}
                    </span>

                    <div className="flex gap-1 mb-2">
                      <i className="icon icon-half-star text-gold"></i>

                      <i className="icon icon-star text-gold"></i>

                      <i className="icon icon-star text-gold"></i>

                      <i className="icon icon-star text-gold"></i>

                      <i className="icon icon-star text-gold"></i>
                    </div>

                    <span className="text-sm">{"از 5 ستاره"}</span>
                  </div>

                  <div className="flex row gap-2 align-items-center justify-content-center">
                    <span className="text-xs semi-bold text-green">
                      {"0.4%+"}
                    </span>

                    <span className="text-xs">{"نسبت به ماه قبل"}</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="form mt-5">
              <h2 className="text-lg semi-bold mb-4">{"درباره فروشنده"}</h2>

              <p className="text-muted leading-loose">
                {
                  " فروشگاه‌های زنجیره‌ای، مجموعه‌ای به هم پیوسته از مراکز فروش هستند که زیر نظر یک مدیریت مرکزی قرار دارند. فروشگاه‌های زنجیره‌ای ممکن است به صورت شهری، استانی، کشوری یا حتی جهانی ایجاد شده باشند. برای مثال فروشگاه‌ والمارت یک مجموعۀ تجاری جهانی است؛ که در بیست و هشت کشور دنیا دارای شعبه فعال است. مهم‌ترین محصولات فروشگاه‌های زنجیره‌ای اغلب نیازهای روزانۀ مصرف‌کنندگان را شامل می‌شود. "
                }
              </p>
            </section>

            <section className="form round-unset round-top mt-5">
              <h2 className="text-lg semi-bold mb-4">{"اطلاعات تماس"}</h2>

              <div className="flex column gap-4">
                <div className="flex justify-content-between align-items-center border-bottom pb-3">
                  <span className="text-muted">{" شماره تماس "}</span>

                  <span>{" 0912 123 4567 "}</span>
                </div>

                <div className="flex justify-content-between align-items-center border-bottom pb-3">
                  <span className="text-muted">{" شهر "}</span>

                  <span>{" تهران "}</span>
                </div>

                <div className="flex justify-content-between align-items-center">
                  <span className="text-muted">{" آخرین فعالیت "}</span>

                  <span>{" ۲ ساعت پیش "}</span>
                </div>
              </div>
            </section>

            <div className="swiper minimal-swiper md-pl-2 md-pr-2 mt-4">
              <div className="swiper-wrapper mt-10 md-m-0">
                <div className="swiper-slide">
                  <Link
                    href="/products/headphone-ad0860e"
                    className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1"
                  >
                    <div className="block relative overflow-hidden">
                      <div className="absolute top-3 right-3 index-1000">
                        <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                          <span className="text-sm">{"4.8"}</span>

                          <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                        </div>
                      </div>

                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/products/studio-headphones.webp"
                        alt="هدفون بی‌سیم گرافیتی"
                        className="block full-width scale-up"
                      />
                    </div>

                    <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                      <div className="flex justify-content-between align-items-center min-w-0">
                        <span className="semi-bold text-ellipsis sm-text-sm">
                          {"هدفون بی‌سیم گرافیتی"}
                        </span>
                      </div>

                      <span className="opacity-7 mb-1 text-sm text-accent">
                        {"صوتی و تصویری"}
                      </span>

                      <div className="flex row justify-content-between mt-1">
                        <div className="flex row gap-2 align-items-center">
                          <span className="font-peyda">{"قیمت:"}</span>
                        </div>

                        <div className="flex row gap-1 font-sans text-primary semi-bold">
                          <span>{"12,000,000"}</span>

                          <i className="icon icon-toman-bold w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                        <button
                          className="btn-primary-light p-3 md-full-width"
                          type="button"
                        >
                          <i className="icon icon-cart w-2 h-2 text-primary"></i>
                        </button>

                        <button
                          className="btn-primary text-inverse full-width font-peyda relative"
                          type="button"
                        >
                          {" مشاهده محصول "}
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="swiper-slide">
                  <Link
                    href="/products/perfume-093e712"
                    className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute top-3 right-3 index-1000">
                        <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                          <span className="text-sm">{"4.8"}</span>

                          <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                        </div>
                      </div>

                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/products/studio-perfume.webp"
                        alt="ادو پرفیوم شیشه‌ای"
                        className="block full-width scale-up"
                      />
                    </div>

                    <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                      <div className="flex justify-content-between align-items-center min-w-0">
                        <span className="semi-bold text-ellipsis sm-text-sm">
                          {"ادو پرفیوم شیشه‌ای"}
                        </span>
                      </div>

                      <span className="opacity-7 mb-1 text-sm text-accent">
                        {"زیبایی و مراقبت"}
                      </span>

                      <div className="flex row justify-content-between mt-1">
                        <div className="flex row gap-2 align-items-center">
                          <span className="font-peyda">{"قیمت:"}</span>
                        </div>

                        <div className="flex row gap-1 font-sans text-primary semi-bold">
                          <span>{"12,000,000"}</span>

                          <i className="icon icon-toman-bold w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                        <button className="btn-primary-light p-3" type="button">
                          <i className="icon icon-cart w-2 h-2 text-primary"></i>
                        </button>

                        <button
                          className="btn-primary text-inverse full-width font-peyda relative"
                          type="button"
                        >
                          {" مشاهده محصول "}
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="swiper-slide">
                  <Link
                    href="/products/toy-f3aee1e"
                    className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute top-3 right-3 index-1000">
                        <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                          <span className="text-sm">{"4.8"}</span>

                          <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                        </div>
                      </div>

                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/products/studio-toy.webp"
                        alt="اسباب‌بازی عروسکی"
                        className="block full-width scale-up"
                      />
                    </div>

                    <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                      <div className="flex justify-content-between align-items-center min-w-0">
                        <span className="semi-bold text-ellipsis sm-text-sm">
                          {"اسباب‌بازی عروسکی"}
                        </span>
                      </div>

                      <span className="opacity-7 mb-1 text-sm text-accent">
                        {"کودک و سرگرمی"}
                      </span>

                      <div className="flex row justify-content-between mt-1">
                        <div className="flex row gap-2 align-items-center">
                          <span className="font-peyda">{"قیمت:"}</span>
                        </div>

                        <div className="flex row gap-1 font-sans text-primary semi-bold">
                          <span>{"12,000,000"}</span>

                          <i className="icon icon-toman-bold w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                        <button className="btn-primary-light p-3" type="button">
                          <i className="icon icon-cart w-2 h-2 text-primary"></i>
                        </button>

                        <button
                          className="btn-primary text-inverse full-width font-peyda relative"
                          type="button"
                        >
                          {" مشاهده محصول "}
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="swiper-slide">
                  <Link
                    href="/products/dualsense-9cc09b6"
                    className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute top-3 right-3 index-1000">
                        <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                          <span className="text-sm">{"4.8"}</span>

                          <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                        </div>
                      </div>

                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/products/studio-controller.webp"
                        alt="دسته بازی بی‌سیم"
                        className="block full-width scale-up"
                      />
                    </div>

                    <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                      <div className="flex justify-content-between align-items-center min-w-0">
                        <span className="semi-bold text-ellipsis sm-text-sm">
                          {"دسته بازی بی‌سیم"}
                        </span>
                      </div>

                      <span className="opacity-7 mb-1 text-sm text-accent">
                        {"بازی و سرگرمی"}
                      </span>

                      <div className="flex row justify-content-between mt-1">
                        <div className="flex row gap-2 align-items-center">
                          <span className="font-peyda">{"قیمت:"}</span>
                        </div>

                        <div className="flex row gap-1 font-sans text-primary semi-bold">
                          <span>{"12,000,000"}</span>

                          <i className="icon icon-toman-bold w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                        <button className="btn-primary-light p-3" type="button">
                          <i className="icon icon-cart w-2 h-2 text-primary"></i>
                        </button>

                        <button
                          className="btn-primary text-inverse full-width font-peyda relative"
                          type="button"
                        >
                          {" مشاهده محصول "}
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="swiper-slide">
                  <Link
                    href="/products/tshirt-f5a2223"
                    className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute top-3 right-3 index-1000">
                        <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                          <span className="text-sm">{"4.8"}</span>

                          <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                        </div>
                      </div>

                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/products/studio-tshirt.webp"
                        alt="تی‌شرت نخ پنبه کرم"
                        className="block full-width scale-up"
                      />
                    </div>

                    <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                      <div className="flex justify-content-between align-items-center min-w-0">
                        <span className="semi-bold text-ellipsis sm-text-sm">
                          {"تی‌شرت نخ پنبه کرم"}
                        </span>
                      </div>

                      <span className="opacity-7 mb-1 text-sm text-accent">
                        {"پوشاک و کفش"}
                      </span>

                      <div className="flex row justify-content-between mt-1">
                        <div className="flex row gap-2 align-items-center">
                          <span className="font-peyda">{"قیمت:"}</span>
                        </div>

                        <div className="flex row gap-1 font-sans text-primary semi-bold">
                          <span>{"12,000,000"}</span>

                          <i className="icon icon-toman-bold w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                        <button className="btn-primary-light p-3" type="button">
                          <i className="icon icon-cart w-2 h-2 text-primary"></i>
                        </button>

                        <button
                          className="btn-primary text-inverse full-width font-peyda relative"
                          type="button"
                        >
                          {" مشاهده محصول "}
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="swiper-slide">
                  <Link
                    href="/products/decorative-d16d5ba"
                    className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute top-3 right-3 index-1000">
                        <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                          <span className="text-sm">{"4.8"}</span>

                          <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                        </div>
                      </div>

                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/images/products/studio-vase.webp"
                        alt="گلدان سرامیکی دکوراتیو"
                        className="block full-width scale-up"
                      />
                    </div>

                    <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                      <div className="flex justify-content-between align-items-center min-w-0">
                        <span className="semi-bold text-ellipsis sm-text-sm">
                          {"گلدان سرامیکی دکوراتیو"}
                        </span>
                      </div>

                      <span className="opacity-7 mb-1 text-sm text-accent">
                        {"خانه و دکوراسیون"}
                      </span>

                      <div className="flex row justify-content-between mt-1">
                        <div className="flex row gap-2 align-items-center">
                          <span className="font-peyda">{"قیمت:"}</span>
                        </div>

                        <div className="flex row gap-1 font-sans text-primary semi-bold">
                          <span>{"12,000,000"}</span>

                          <i className="icon icon-toman-bold w-3 h-3"></i>
                        </div>
                      </div>

                      <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                        <button className="btn-primary-light p-3" type="button">
                          <i className="icon icon-cart w-2 h-2 text-primary"></i>
                        </button>

                        <button
                          className="btn-primary text-inverse full-width font-peyda relative"
                          type="button"
                        >
                          {" مشاهده محصول "}
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="swiper-pagination lg-remove"></div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </PageFrame>
    </>
  );
}
