import { SiteFooter } from "@/components/layout/site-footer";
import { MobileSiteHeader } from "@/components/layout/mobile-site-header";
import { GlobalSiteHeader } from "@/components/layout/global-site-header";
// Migrated from pages/inner-ads/inner-hire-ad.html; edit this React source directly.
import type { Metadata } from "next";
import Link from "next/link";
import { SearchInput } from "@/components/ui/search-input";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = {
  title: "شاپی | برنامه نویس Laravel مید لول",
};
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

        <main className="main-container mt-3 flex column lg-mb-35 lg-mt-20 md-mb-24 md-mt-19 font-peyda">
          <div className="flex column gap-4">
            <div className="flex row lg-column gap-5 inline-space">
              <aside className="w-p5 lg-full-width lg-order-2">
                <div className="form">
                  <h1 className="text-xl md-text-lg bold mb-5 flex align-items-center gap-2">
                    {" برنامه نویس Laravel مید لول "}
                  </h1>

                  <div className="flex justify-content-between mb-6 text-muted">
                    <div className="flex align-items-center gap-2">
                      <i className="icon icon-map-point"></i>

                      <span className="text-sm">{"تهران، منطقه ۲"}</span>
                    </div>

                    <div className="flex align-items-center gap-2">
                      <i className="icon icon-clock"></i>

                      <span className="text-sm">{"تمام وقت"}</span>
                    </div>

                    <div className="flex align-items-center gap-2">
                      <i className="icon icon-people"></i>

                      <span className="text-sm">{"دورکاری / حضوری"}</span>
                    </div>
                  </div>

                  <div className="bg-primary-light round-lg p-5 text-center mb-5">
                    <div className="text-text semi-bold mb-2 md-text-sm">
                      {"حقوق"}
                    </div>

                    <div className="text-xl md-text-md text-primary mt-1 bold font-peyda mb-2">
                      {" ۳۰ تا ۵۰ میلیون تومان "}
                    </div>

                    <div className="text-muted text-sm md-text-xs">
                      {"بسته به تجربه و مهارت شما"}
                    </div>
                  </div>

                  <div className="flex column gap-3 mb-5">
                    <button
                      className="btn-primary full-width py-4 font-peyda relative"
                      type="button"
                    >
                      <i className="icon icon-send w-3 h-3 absolute right-4 ab-y-center"></i>
                      {" ارسال رزومه "}
                    </button>

                    <button
                      className="btn-secondary full-width py-4 font-peyda relative"
                      type="button"
                    >
                      <i className="icon icon-chat-sms w-3 h-3 absolute right-4 ab-y-center"></i>
                      {" چت با کارفرما "}
                    </button>
                  </div>

                  <div className="grid grid-col-3 gap-2 mt-5 pt-5 border-top">
                    <button
                      className="btn-secondary p-3 shadow-md"
                      type="button"
                    >
                      <div className="flex fill column gap-2 align-items-center">
                        <i className="icon icon-share-filled h-3 w-3 text-primary"></i>

                        <span className="text-xs text-primary font-peyda">
                          {"اشتراک"}
                        </span>
                      </div>
                    </button>

                    <button
                      className="btn-secondary p-3 shadow-md"
                      type="button"
                    >
                      <div className="flex fill column gap-2 align-items-center">
                        <i className="icon icon-saved-filled h-3 w-3 text-primary"></i>

                        <span className="text-xs text-primary font-peyda">
                          {"نشان"}
                        </span>
                      </div>
                    </button>

                    <button className="btn-red p-3 shadow-md" type="button">
                      <div className="flex fill column gap-2 align-items-center">
                        <i className="icon icon-flag h-3 w-3 text-inverse"></i>

                        <span className="text-xs text-inverse font-peyda">
                          {"گزارش"}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </aside>

              <div className="w-p5 lg-full-width lg-order-1">
                <div className="form">
                  <div className="relative overflow-hidden round-md mb-4">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/images/example/digikala-banner.png"
                      className="full-width"
                      alt=""
                    />

                    <span className="absolute top-3 right-3 bg-red outline-white-sm text-inverse px-3 py-1 round-sm text-xs">
                      {" فوری "}
                    </span>
                  </div>

                  <div className="flex align-items-center gap-4 mb-5">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/logo/digikala.jpg"
                      className="w-10 h-10 round-full"
                      alt=""
                    />

                    <div>
                      <h3 className="bold mb-1">{"دیجی کالا"}</h3>

                      <p className="text-muted text-sm mb-2 mt-0">
                        {"فروشگاه اینترنتی"}
                      </p>

                      <div className="text-gold">{"★★★★★"}</div>
                    </div>
                  </div>

                  <div className="grid grid-col-4 md-grid-col-2 gap-4">
                    <div className="text-center">
                      <div className="text-muted text-sm mb-2">
                        {"تعداد کارمند"}
                      </div>

                      <div className="semi-bold">{"۲۰۰+"}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-muted text-sm mb-2">{"صنعت"}</div>

                      <div className="semi-bold">{"فناوری"}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-muted text-sm mb-2">
                        {"سال تاسیس"}
                      </div>

                      <div className="semi-bold">{"۱۳۸۵"}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-muted text-sm mb-2">
                        {"فرصت شغلی"}
                      </div>

                      <div className="semi-bold">{"۳۲"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-col-2 lg-grid-col-2 md-grid-col-1 gap-4 inline-space">
              <div className="column-span-3">
                <div className="form mb-4">
                  <h3 className="bold mb-5">{"توضیحات شغل"}</h3>

                  <p className="line-height-lg">
                    {
                      " ما به دنبال یک برنامه‌نویس موبایل React Native با توانایی‌ها و مهارت‌های فنی زیر برای پیوستن به تیم توسعه اپلیکیشن سلامت دیجیتال اپتیت هستیم. در این نقش، شما به عنوان یک عضو کلیدی در توسعه و بهینه‌سازی اپلیکیشن ما و ایجاد تجربه کاربری بی‌نظیر برای کاربرانمان مشغول خواهید بود. "
                    }
                    <br />

                    <br />
                    {
                      ' اپلیکیشن سلامت دیجیتال "اَپِتیت" در سال ۱۳۹۸ با هدف تغییر سبک زندگی و ایجاد تجربه‌ای متفاوت در دنیای سلامت راه‌اندازی شد و به سرعت به عنوان محبوب‌ترین پلتفرم تخصصی در حوزه فیتنس و تغذیه در ایران شناخته شد. اَپِتیت به عنوان جایگزینی هوشمند برای باشگاه‌های ورزشی، امکان دسترسی به تمرینات ورزشی در خانه، کلاس‌های On-demand و Live و برنامه‌های تغذیه‌ای شخصی‌سازی‌شده را فراهم می‌کند. '
                    }
                    <br />

                    <br />
                    {
                      ' اپلیکیشن سلامت دیجیتال "اَپِتیت" در سال ۱۳۹۸ با هدف تغییر سبک زندگی و ایجاد تجربه‌ای متفاوت در دنیای سلامت راه‌اندازی شد و به سرعت به عنوان محبوب‌ترین پلتفرم تخصصی در حوزه فیتنس و تغذیه در ایران شناخته شد. اَپِتیت به عنوان جایگزینی هوشمند برای باشگاه‌های ورزشی، امکان دسترسی به تمرینات ورزشی در خانه، کلاس‌های On-demand و Live و برنامه‌های تغذیه‌ای شخصی‌سازی‌شده را فراهم می‌کند. '
                    }
                  </p>
                </div>

                <div className="form mb-4">
                  <h3 className="bold mb-5">{"وظایف و مسئولیت‌ها"}</h3>

                  <div className="flex column gap-3">
                    <div className="flex gap-2">
                      <i className="icon icon-tick text-green"></i>

                      <span>{"توسعه API"}</span>
                    </div>

                    <div className="flex gap-2">
                      <i className="icon icon-tick text-green"></i>

                      <span>{"بهینه‌سازی دیتابیس"}</span>
                    </div>

                    <div className="flex gap-2">
                      <i className="icon icon-tick text-green"></i>

                      <span>{"همکاری با تیم Frontend"}</span>
                    </div>
                  </div>
                </div>

                <div className="form">
                  <h3 className="bold mb-5">{"مهارت‌های موردنیاز"}</h3>

                  <div className="flex align-items-center">
                    <div className="flex column full-width">
                      <div className="flex row gap-3 wrap align-items-start justify-content-start">
                        <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                          {"Firewall"}
                        </span>

                        <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                          {"شبکه"}
                        </span>

                        <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                          {"الگوریتم"}
                        </span>

                        <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                          {"FTP"}
                        </span>

                        <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                          {"SQL"}
                        </span>

                        <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                          {"PHP"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex column gap-4">
                <div className="form">
                  <h3 className="bold mb-5">{"اطلاعات موقعیت شغلی"}</h3>

                  <div className="flex column gap-4">
                    <div className="flex justify-content-between">
                      <span className="text-muted">{"نوع همکاری"}</span>

                      <span>{"تمام وقت"}</span>
                    </div>

                    <div className="flex justify-content-between">
                      <span className="text-muted">{"سابقه"}</span>

                      <span>{"۲ سال"}</span>
                    </div>

                    <div className="flex justify-content-between">
                      <span className="text-muted">{"جنسیت"}</span>

                      <span>{"مهم نیست"}</span>
                    </div>

                    <div className="flex justify-content-between">
                      <span className="text-muted">{"تحصیلات"}</span>

                      <span>{"کارشناسی"}</span>
                    </div>
                  </div>
                </div>

                <div className="form">
                  <h3 className="bold mb-4">{"موقعیت مکانی"}</h3>

                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/placeholders/400x250.svg"
                    className="full-width round-md"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="inline-space md-p-0">
              <div className="flex column gap-1 full-width">
                <div className="row flex justify-content-between mt-2 mb-2 md-pl-3 md-pr-3">
                  <div className="flex column gap-2 font-peyda">
                    <span className="size-6 semi-bold md-text-md">
                      {" فرصت های شغلی مشابه"}
                    </span>
                  </div>

                  <a href="#" className="row flex align-items-center gap-2">
                    <span className="text-primary font-peyda text-sm semi-bold md-text-xs">
                      {"مشاهده همه"}
                    </span>

                    <i className="icon icon-left-arrow text-primary"></i>
                  </a>
                </div>

                <div className="flex row mt-3 md-mt-3">
                  <div className="swiper showcase-swiper full-width">
                    <div className="swiper-wrapper font-peyda">
                      <div className="swiper-slide">
                        <Link
                          href="/"
                          className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up md-m-5"
                        >
                          <div className="relative">
                            <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                              <span className="text-xs text-primary semi-bold">
                                {"استخدام"}
                              </span>
                            </div>
                          </div>

                          <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                            <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                              <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  src="/assets/logo/abr-arvan.jpeg"
                                  alt="لوگو فروشگاه"
                                  className="full-width full-height round-full block"
                                />
                              </div>

                              <div className="flex column justify-content-between gap-1 align-items-center">
                                <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                                  {"استخدام متخصص شبکه IT"}
                                </span>

                                <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                                  {"ابرآروان "}
                                  <i className="icon icon-verified-2 text-primary"></i>
                                </span>
                              </div>

                              <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                                <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                                  <div>
                                    <i className="icon icon-map-point text-primary"></i>

                                    <span className="text-sm font-peyda">
                                      {" موقعیت:"}
                                    </span>
                                  </div>

                                  <div>
                                    <span className="text-sm font-peyda">
                                      {" تهران - دورکاری"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex align-items-center pl-5 pr-5">
                            <div className="flex column align-items-center full-width">
                              <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                                <span className="text-sm semi-bold">
                                  {"مهارت های مورد نیاز:"}
                                </span>

                                <div className="flex row gap-3 wrap align-items-center justify-content-center">
                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"Firewall"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"شبکه"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"الگوریتم"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"SQL"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"PHP"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                            <div>{"حقوق:"}</div>

                            <div className="flex column">
                              <div>
                                <span className="text-muted text-xs">
                                  {"30,000,000 تا"}
                                </span>
                              </div>

                              <span className="text-primary text-sm semi-bold">
                                {"65,000,000 "}
                                <i className="icon icon-toman-bold w-3 h-3"></i>
                              </span>
                            </div>
                          </div>

                          <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                            <div className="flex row justify-content-center align-items-center gap-2 full-width">
                              <button
                                className="btn-secondary p-3"
                                type="button"
                              >
                                <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                              </button>

                              <button
                                className="btn-secondary text-primary full-width font-peyda relative"
                                type="button"
                              >
                                {" مشاهده فروشگاه "}
                                <i className="icon icon-left-2 text-primary absolute left-3"></i>
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="swiper-slide">
                        <Link
                          href="/"
                          className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up md-m-5"
                        >
                          <div className="relative">
                            <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                              <span className="text-xs text-primary semi-bold">
                                {"استخدام"}
                              </span>
                            </div>
                          </div>

                          <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                            <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                              <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  src="/assets/logo/abr-arvan.jpeg"
                                  alt="لوگو فروشگاه"
                                  className="full-width full-height round-full block"
                                />
                              </div>

                              <div className="flex column justify-content-between gap-1 align-items-center">
                                <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                                  {"استخدام متخصص شبکه IT"}
                                </span>

                                <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                                  {"ابرآروان "}
                                  <i className="icon icon-verified-2 text-primary"></i>
                                </span>
                              </div>

                              <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                                <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                                  <div>
                                    <i className="icon icon-map-point text-primary"></i>

                                    <span className="text-sm font-peyda">
                                      {" موقعیت:"}
                                    </span>
                                  </div>

                                  <div>
                                    <span className="text-sm font-peyda">
                                      {" تهران - دورکاری"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex align-items-center pl-5 pr-5">
                            <div className="flex column align-items-center full-width">
                              <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                                <span className="text-sm semi-bold">
                                  {"مهارت های مورد نیاز:"}
                                </span>

                                <div className="flex row gap-3 wrap align-items-center justify-content-center">
                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"Firewall"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"شبکه"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"الگوریتم"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"SQL"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"PHP"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                            <div>{"حقوق:"}</div>

                            <div className="flex column">
                              <div>
                                <span className="text-muted text-xs">
                                  {"30,000,000 تا"}
                                </span>
                              </div>

                              <span className="text-primary text-sm semi-bold">
                                {"65,000,000 "}
                                <i className="icon icon-toman-bold w-3 h-3"></i>
                              </span>
                            </div>
                          </div>

                          <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                            <div className="flex row justify-content-center align-items-center gap-2 full-width">
                              <button
                                className="btn-secondary p-3"
                                type="button"
                              >
                                <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                              </button>

                              <button
                                className="btn-secondary text-primary full-width font-peyda relative"
                                type="button"
                              >
                                {" مشاهده فروشگاه "}
                                <i className="icon icon-left-2 text-primary absolute left-3"></i>
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="swiper-slide">
                        <Link
                          href="/"
                          className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up md-m-5"
                        >
                          <div className="relative">
                            <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                              <span className="text-xs text-primary semi-bold">
                                {"استخدام"}
                              </span>
                            </div>
                          </div>

                          <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                            <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                              <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  src="/assets/logo/abr-arvan.jpeg"
                                  alt="لوگو فروشگاه"
                                  className="full-width full-height round-full block"
                                />
                              </div>

                              <div className="flex column justify-content-between gap-1 align-items-center">
                                <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                                  {"استخدام متخصص شبکه IT"}
                                </span>

                                <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                                  {"ابرآروان "}
                                  <i className="icon icon-verified-2 text-primary"></i>
                                </span>
                              </div>

                              <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                                <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                                  <div>
                                    <i className="icon icon-map-point text-primary"></i>

                                    <span className="text-sm font-peyda">
                                      {" موقعیت:"}
                                    </span>
                                  </div>

                                  <div>
                                    <span className="text-sm font-peyda">
                                      {" تهران - دورکاری"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex align-items-center pl-5 pr-5">
                            <div className="flex column align-items-center full-width">
                              <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                                <span className="text-sm semi-bold">
                                  {"مهارت های مورد نیاز:"}
                                </span>

                                <div className="flex row gap-3 wrap align-items-center justify-content-center">
                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"Firewall"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"شبکه"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"الگوریتم"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"SQL"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"PHP"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                            <div>{"حقوق:"}</div>

                            <div className="flex column">
                              <div>
                                <span className="text-muted text-xs">
                                  {"30,000,000 تا"}
                                </span>
                              </div>

                              <span className="text-primary text-sm semi-bold">
                                {"65,000,000 "}
                                <i className="icon icon-toman-bold w-3 h-3"></i>
                              </span>
                            </div>
                          </div>

                          <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                            <div className="flex row justify-content-center align-items-center gap-2 full-width">
                              <button
                                className="btn-secondary p-3"
                                type="button"
                              >
                                <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                              </button>

                              <button
                                className="btn-secondary text-primary full-width font-peyda relative"
                                type="button"
                              >
                                {" مشاهده فروشگاه "}
                                <i className="icon icon-left-2 text-primary absolute left-3"></i>
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="swiper-slide">
                        <Link
                          href="/"
                          className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up md-m-5"
                        >
                          <div className="relative">
                            <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                              <span className="text-xs text-primary semi-bold">
                                {"استخدام"}
                              </span>
                            </div>
                          </div>

                          <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                            <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                              <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  src="/assets/logo/abr-arvan.jpeg"
                                  alt="لوگو فروشگاه"
                                  className="full-width full-height round-full block"
                                />
                              </div>

                              <div className="flex column justify-content-between gap-1 align-items-center">
                                <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                                  {"استخدام متخصص شبکه IT"}
                                </span>

                                <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                                  {"ابرآروان "}
                                  <i className="icon icon-verified-2 text-primary"></i>
                                </span>
                              </div>

                              <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                                <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                                  <div>
                                    <i className="icon icon-map-point text-primary"></i>

                                    <span className="text-sm font-peyda">
                                      {" موقعیت:"}
                                    </span>
                                  </div>

                                  <div>
                                    <span className="text-sm font-peyda">
                                      {" تهران - دورکاری"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex align-items-center pl-5 pr-5">
                            <div className="flex column align-items-center full-width">
                              <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                                <span className="text-sm semi-bold">
                                  {"مهارت های مورد نیاز:"}
                                </span>

                                <div className="flex row gap-3 wrap align-items-center justify-content-center">
                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"Firewall"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"شبکه"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"الگوریتم"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"SQL"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"PHP"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                            <div>{"حقوق:"}</div>

                            <div className="flex column">
                              <div>
                                <span className="text-muted text-xs">
                                  {"30,000,000 تا"}
                                </span>
                              </div>

                              <span className="text-primary text-sm semi-bold">
                                {"65,000,000 "}
                                <i className="icon icon-toman-bold w-3 h-3"></i>
                              </span>
                            </div>
                          </div>

                          <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                            <div className="flex row justify-content-center align-items-center gap-2 full-width">
                              <button
                                className="btn-secondary p-3"
                                type="button"
                              >
                                <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                              </button>

                              <button
                                className="btn-secondary text-primary full-width font-peyda relative"
                                type="button"
                              >
                                {" مشاهده فروشگاه "}
                                <i className="icon icon-left-2 text-primary absolute left-3"></i>
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="swiper-slide">
                        <Link
                          href="/"
                          className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up md-m-5"
                        >
                          <div className="relative">
                            <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                              <span className="text-xs text-primary semi-bold">
                                {"استخدام"}
                              </span>
                            </div>
                          </div>

                          <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                            <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                              <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  src="/assets/logo/abr-arvan.jpeg"
                                  alt="لوگو فروشگاه"
                                  className="full-width full-height round-full block"
                                />
                              </div>

                              <div className="flex column justify-content-between gap-1 align-items-center">
                                <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                                  {"استخدام متخصص شبکه IT"}
                                </span>

                                <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                                  {"ابرآروان "}
                                  <i className="icon icon-verified-2 text-primary"></i>
                                </span>
                              </div>

                              <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                                <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                                  <div>
                                    <i className="icon icon-map-point text-primary"></i>

                                    <span className="text-sm font-peyda">
                                      {" موقعیت:"}
                                    </span>
                                  </div>

                                  <div>
                                    <span className="text-sm font-peyda">
                                      {" تهران - دورکاری"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex align-items-center pl-5 pr-5">
                            <div className="flex column align-items-center full-width">
                              <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                                <span className="text-sm semi-bold">
                                  {"مهارت های مورد نیاز:"}
                                </span>

                                <div className="flex row gap-3 wrap align-items-center justify-content-center">
                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"Firewall"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"شبکه"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"الگوریتم"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"SQL"}
                                  </span>

                                  <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                                    {"PHP"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                            <div>{"حقوق:"}</div>

                            <div className="flex column">
                              <div>
                                <span className="text-muted text-xs">
                                  {"30,000,000 تا"}
                                </span>
                              </div>

                              <span className="text-primary text-sm semi-bold">
                                {"65,000,000 "}
                                <i className="icon icon-toman-bold w-3 h-3"></i>
                              </span>
                            </div>
                          </div>

                          <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                            <div className="flex row justify-content-center align-items-center gap-2 full-width">
                              <button
                                className="btn-secondary p-3"
                                type="button"
                              >
                                <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                              </button>

                              <button
                                className="btn-secondary text-primary full-width font-peyda relative"
                                type="button"
                              >
                                {" مشاهده فروشگاه "}
                                <i className="icon icon-left-2 text-primary absolute left-3"></i>
                              </button>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </PageFrame>
    </>
  );
}
