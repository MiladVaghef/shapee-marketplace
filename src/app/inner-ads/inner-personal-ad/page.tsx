import { SiteFooter } from "@/components/layout/site-footer";
import { MobileSiteHeader } from "@/components/layout/mobile-site-header";
import { GlobalSiteHeader } from "@/components/layout/global-site-header";
// Migrated from pages/inner-ads/inner-personal-ad.html; edit this React source directly.
import type { Metadata } from "next";
import { SearchInput } from "@/components/ui/search-input";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = { title: "شاپی | تویوتا کمری XLE مدل 2021" };
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
          <div className="mb-3 flex justify-content-between mt-4 mb-7 inline-space">
            <p className="text-sm md-text-xs text-muted m-0">
              {" داشبورد / فروشگاه‌های من / محصولات من "}
            </p>

            <div className="flex align-items-center gap-3 text-text lg-text-xs">
              {" بازگشت "}
              <i className="icon icon-left-arrow lg-h-12px lg-h-12px"></i>
            </div>
          </div>

          <div className="flex column gap-3">
            <div className="flex row gap-5 lg-column inline-space">
              <aside className="lg-full-width flex column justify-content-between gap-4 w-p5 lg-order-2">
                <div className="">
                  <div className="flex row align-items-center gap-3">
                    <h1 className="text-2xl bold m-0 lg-text-lg">
                      {" تویوتا کمری XLE مدل 2021 "}
                    </h1>

                    <div className="flex gap-2 mb-1">
                      <span className="bg-red text-inverse round-sm px-3 py-1 text-xs">
                        {" فوری "}
                      </span>

                      <span className="bg-primary text-inverse round-sm px-3 py-1 text-xs remove">
                        {" ویژه "}
                      </span>
                    </div>
                  </div>

                  <div className="flex row gap-1 font-sans text-green semi-bold align-items-center mb-10">
                    <span className="text-xl">{"12,550,000"}</span>

                    <i className="icon icon-toman-bold w-3 h-3"></i>
                  </div>

                  <div className="flex wrap gap-4 text-sm text-muted mb-3">
                    <span className="text-primary semi-bold">
                      {"تهران، سعادت آباد"}
                    </span>

                    <span className="opacity-4">{"|"}</span>

                    <span>{"۴۲۵ بازدید"}</span>

                    <span className="opacity-4">{"|"}</span>

                    <span>{"شناسه آگهی: 2234567"}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex align-items-center gap-3 mb-5">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/images/example/profile-picture.jpg"
                      className="w-60px h-60px round-full"
                      alt=""
                    />

                    <div>
                      <h4 className="mb-1">{"محمد کریمی"}</h4>

                      <div className="flex align-items-center gap-1 text-gold mb-1">
                        {" ★★★★★ "}
                      </div>

                      <span className="text-xs text-muted font-sans">
                        {" عضو از 1401 "}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-5">
                    <span className="bg-green-light text-green px-3 py-1 round-full text-xs">
                      {" احراز هویت "}
                    </span>

                    <span className="bg-primary-light text-primary px-3 py-1 round-full text-xs">
                      {" 17 آگهی فعال "}
                    </span>
                  </div>

                  <div className="flex row gap-5">
                    <button
                      className="btn-primary full-width font-peyda relative flex justify-content-center align-items-center mt-1"
                      type="button"
                    >
                      <i className="icon icon-call-fill flip-x absolute right-5 mt-1"></i>
                      {" شماره تماس "}
                    </button>

                    <button
                      className="btn-secondary full-width font-peyda relative flex justify-content-center align-items-center mt-1"
                      type="button"
                    >
                      <i className="icon icon-chat-sms flip-x absolute right-5 mt-1"></i>
                      {" چت در شاپی "}
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

              <div className="w-p5 lg-full-width">
                <div className="md-p-0 md-shadow-unset mb-3 lg-order-1 sticky top-3">
                  <div className="swiper product-gallery-main mb-3 relative">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/2015-bmw-i8-first-drive-rear-angle.webp"
                          alt="BMW i8"
                          className="full-width round-md object-cover block pointer"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_01-1_1.webp"
                          alt="BMW i8"
                          className="full-width round-md object-cover block pointer"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_03.webp"
                          alt="BMW i8"
                          className="full-width round-md object-cover block pointer"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_04.webp"
                          alt="BMW i8"
                          className="full-width round-md object-cover block pointer"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_05.webp"
                          alt="BMW i8"
                          className="full-width round-md object-cover block pointer"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_06-1.webp"
                          alt="BMW i8"
                          className="full-width round-md object-cover block pointer"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Interior_01.webp"
                          alt="BMW i8"
                          className="full-width round-md object-cover block pointer"
                        />
                      </div>
                    </div>

                    <div className="gallery-counter absolute top-3 right-3 bg-white-transparent text-text px-4 py-1 round-full text-xs font-sans index-1000">
                      <span id="gallery-current" className="">
                        {"1"}
                      </span>
                      {"/"}
                      <span id="gallery-total">{"7"}</span>
                    </div>

                    <button
                      className="gallery-prev absolute right-3 ab-y-center index-1000 w-40px h-40px round-full bg-white shadow-sm flex justify-content-center align-items-center cursor-pointer opacity-4"
                      type="button"
                    >
                      <i className="icon icon-right-2"></i>
                    </button>

                    <button
                      className="gallery-next absolute left-3 ab-y-center index-1000 w-40px h-40px round-full bg-white shadow-sm flex justify-content-center align-items-center cursor-pointer opacity-4"
                      type="button"
                    >
                      <i className="icon icon-left"></i>
                    </button>
                  </div>

                  <div className="swiper product-gallery-thumbs">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/2015-bmw-i8-first-drive-rear-angle.webp"
                          className="full-width round-sm cursor-pointer block"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_01-1_1.webp"
                          className="full-width round-sm cursor-pointer block"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_03.webp"
                          className="full-width round-sm cursor-pointer block"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_04.webp"
                          className="full-width round-sm cursor-pointer block"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_05.webp"
                          className="full-width round-sm cursor-pointer block"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Exterior_06-1.webp"
                          className="full-width round-sm cursor-pointer block"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/images/example/BMWi_i8_Gallery_Interior_01.webp"
                          className="full-width round-sm cursor-pointer block"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-col-2 lg-grid-col-1 gap-4 inline-space">
              <div className="form">
                <div className="flex align-items-center gap-3 mb-5">
                  <i className="icon icon-document-text text-primary"></i>

                  <h3 className="bold mb-0 mt-0">{"توضیحات آگهی"}</h3>
                </div>

                <p className="text-sm line-height-lg mb-5">
                  {
                    " تویوتا کمری XLE مدل 2021 با کارکرد بسیار پایین و وضعیت فنی و ظاهری فوق‌العاده. تمامی سرویس‌ها به صورت منظم در نمایندگی انجام شده و خودرو کاملاً بدون رنگ و تصادف می‌باشد. "
                  }
                </p>

                <div className="flex column gap-3">
                  <div className="flex align-items-center gap-2">
                    <i className="icon icon-tick-circle text-green"></i>

                    <span>{"بدون رنگ"}</span>
                  </div>

                  <div className="flex align-items-center gap-2">
                    <i className="icon icon-tick-circle text-green"></i>

                    <span>{"سرویس کامل نمایندگی"}</span>
                  </div>

                  <div className="flex align-items-center gap-2">
                    <i className="icon icon-tick-circle text-green"></i>

                    <span>{"بیمه بدنه فعال"}</span>
                  </div>

                  <div className="flex align-items-center gap-2">
                    <i className="icon icon-tick-circle text-green"></i>

                    <span>{"مانیتور و دوربین 360 درجه"}</span>
                  </div>

                  <div className="flex align-items-center gap-2">
                    <i className="icon icon-tick-circle text-green"></i>

                    <span>{"سنسور جلو و عقب"}</span>
                  </div>

                  <p className="text-sm line-height-lg mb-5">
                    {
                      " تویوتا کمری XLE مدل 2021 با کارکرد بسیار پایین و وضعیت فنی و ظاهری فوق‌العاده. تمامی سرویس‌ها به صورت منظم در نمایندگی انجام شده و خودرو کاملاً بدون رنگ و تصادف می‌باشد. تویوتا کمری XLE مدل 2021 با کارکرد بسیار پایین و وضعیت فنی و ظاهری فوق‌العاده. تمامی سرویس‌ها به صورت منظم در نمایندگی انجام شده و خودرو کاملاً بدون رنگ و تصادف می‌باشد. "
                    }
                  </p>

                  <span className="text-primary text-sm flex gap-3 align-items-center pointer">
                    {" مشاهده بیشتر "}
                    <i className="icon icon-down-2 h-13px w-13px"></i>
                  </span>
                </div>
              </div>

              <div className="form">
                <div className="flex align-items-center gap-3 mb-5">
                  <i className="icon icon-document-text text-primary"></i>

                  <h3 className="bold mb-0 mt-0">{"مشخصات خودرو"}</h3>
                </div>

                <div className="flex column gap-4">
                  <div className="flex justify-content-between border-bottom pb-3">
                    <span className="text-muted">{"برند"}</span>

                    <span className="semi-bold">{"Toyota"}</span>
                  </div>

                  <div className="flex justify-content-between border-bottom pb-3">
                    <span className="text-muted">{"مدل"}</span>

                    <span className="semi-bold">{"Camry XLE"}</span>
                  </div>

                  <div className="flex justify-content-between border-bottom pb-3">
                    <span className="text-muted">{"سال ساخت"}</span>

                    <span className="semi-bold font-sans">{"2021"}</span>
                  </div>

                  <div className="flex justify-content-between border-bottom pb-3">
                    <span className="text-muted">{"کارکرد"}</span>

                    <span className="semi-bold">{"23,000 کیلومتر"}</span>
                  </div>

                  <div className="flex justify-content-between border-bottom pb-3">
                    <span className="text-muted">{"گیربکس"}</span>

                    <span className="semi-bold">{"اتوماتیک"}</span>
                  </div>

                  <div className="flex justify-content-between border-bottom pb-3">
                    <span className="text-muted">{"رنگ"}</span>

                    <span className="semi-bold">{"مشکی متالیک"}</span>
                  </div>

                  <div className="flex justify-content-between">
                    <span className="text-muted">{"وضعیت فنی"}</span>

                    <span className="text-green semi-bold">{"عالی"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex row lg-column gap-4 mt-2 align-items-stretch inline-space md-p-0">
              <div className="form md-shadow-unset md-pl-4 md-pr-4 w-p3 lg-full-width lg-h-50 flex column">
                <div className="flex justify-content-between align-items-center">
                  <h3 className="bold">{"موقعیت آگهی"}</h3>

                  <a href="#" className="text-primary text-sm semi-bold">
                    {" مشاهده روی نقشه "}
                  </a>
                </div>

                <p className="text-muted text-sm mb-4">
                  {" تهران، سعادت‌آباد، خیابان سرو شرقی، پلاک ۲۱ "}
                </p>

                <div className="fill bg-background-alt round-sm flex justify-content-center align-items-center overflow-hidden min-h-180px">
                  <i className="icon icon-image text-muted opacity-7 w-15 h-15"></i>
                </div>
              </div>

              <div className="form md-p-0 md-shadow-unset w-p7 lg-full-width overflow-hidden">
                <div className="flex justify-content-between align-items-center mb-4 inline-space">
                  <h3 className="bold">{"آگهی‌های مشابه"}</h3>

                  <a href="#" className="text-primary text-sm semi-bold">
                    {" مشاهده همه "}
                  </a>
                </div>

                <div className="pr-3 pl-3 swiper related-products-swiper">
                  <div className="swiper-wrapper pl-8">
                    <div className="swiper-slide">
                      <a
                        href="#"
                        className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm border"
                      >
                        <div className="relative overflow-hidden">
                          <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                            <span className="text-primary text-xs font-peyda semi-bold">
                              {" 4 ساعت پیش "}
                            </span>
                          </div>

                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/placeholders/400x250.svg"
                            alt=""
                            className="full-width scale-up"
                          />
                        </div>

                        <div className="flex column pt-2 pl-4 pr-4 pb-4 gap-2">
                          <span className="semi-bold text-sm text-ellipsis">
                            {" تویوتا کمری 2020 "}
                          </span>

                          <div className="flex row gap-2 align-items-center font-peyda">
                            <i className="icon icon-map-point text-muted"></i>

                            <span className="text-muted text-sm">
                              {" پاسداران "}
                            </span>
                          </div>

                          <div className="flex justify-content-between mt-1">
                            <span className="font-peyda text-sm">
                              {" قیمت: "}
                            </span>

                            <div className="flex gap-1 font-sans text-primary semi-bold">
                              <span>{"2,150,000,000"}</span>

                              <i className="icon icon-toman-bold w-3 h-3"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="swiper-slide">
                      <a
                        href="#"
                        className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm border"
                      >
                        <div className="relative overflow-hidden">
                          <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                            <span className="text-primary text-xs font-peyda semi-bold">
                              {" دیروز "}
                            </span>
                          </div>

                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/placeholders/400x250.svg"
                            alt=""
                            className="full-width scale-up"
                          />
                        </div>

                        <div className="flex column pt-2 pl-4 pr-4 pb-4 gap-2">
                          <span className="semi-bold text-sm text-ellipsis">
                            {" هیوندای سوناتا 2021 "}
                          </span>

                          <div className="flex row gap-2 align-items-center font-peyda">
                            <i className="icon icon-map-point text-muted"></i>

                            <span className="text-muted text-sm">
                              {" شهرک غرب "}
                            </span>
                          </div>

                          <div className="flex justify-content-between mt-1">
                            <span className="font-peyda text-sm">
                              {" قیمت: "}
                            </span>

                            <div className="flex gap-1 font-sans text-primary semi-bold">
                              <span>{"2,050,000,000"}</span>

                              <i className="icon icon-toman-bold w-3 h-3"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="swiper-slide">
                      <a
                        href="#"
                        className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm border"
                      >
                        <div className="relative overflow-hidden">
                          <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                            <span className="text-primary text-xs font-peyda semi-bold">
                              {" 2 روز پیش "}
                            </span>
                          </div>

                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/placeholders/400x250.svg"
                            alt=""
                            className="full-width scale-up"
                          />
                        </div>

                        <div className="flex column pt-2 pl-4 pr-4 pb-4 gap-2">
                          <span className="semi-bold text-sm text-ellipsis">
                            {" کیا K5 GT Line "}
                          </span>

                          <div className="flex row gap-2 align-items-center font-peyda">
                            <i className="icon icon-map-point text-muted"></i>

                            <span className="text-muted text-sm">
                              {" جردن "}
                            </span>
                          </div>

                          <div className="flex justify-content-between mt-1">
                            <span className="font-peyda text-sm">
                              {" قیمت: "}
                            </span>

                            <div className="flex gap-1 font-sans text-primary semi-bold">
                              <span>{"2,470,000,000"}</span>

                              <i className="icon icon-toman-bold w-3 h-3"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="swiper-slide">
                      <a
                        href="#"
                        className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm border"
                      >
                        <div className="relative overflow-hidden">
                          <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                            <span className="text-primary text-xs font-peyda semi-bold">
                              {" 3 روز پیش "}
                            </span>
                          </div>

                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/placeholders/400x250.svg"
                            alt=""
                            className="full-width scale-up"
                          />
                        </div>

                        <div className="flex column pt-2 pl-4 pr-4 pb-4 gap-2">
                          <span className="semi-bold text-sm text-ellipsis">
                            {" تویوتا کمری XLE 2022 "}
                          </span>

                          <div className="flex row gap-2 align-items-center font-peyda">
                            <i className="icon icon-map-point text-muted"></i>

                            <span className="text-muted text-sm">
                              {" نیاوران "}
                            </span>
                          </div>

                          <div className="flex justify-content-between mt-1">
                            <span className="font-peyda text-sm">
                              {" قیمت: "}
                            </span>

                            <div className="flex gap-1 font-sans text-primary semi-bold">
                              <span>{"2,850,000,000"}</span>

                              <i className="icon icon-toman-bold w-3 h-3"></i>
                            </div>
                          </div>
                        </div>
                      </a>
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
