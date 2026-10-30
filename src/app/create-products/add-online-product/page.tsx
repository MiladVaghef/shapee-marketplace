import { MobileSiteHeader } from "@/components/layout/mobile-site-header";
import { GlobalSiteHeader } from "@/components/layout/global-site-header";
import { FlowCategoryName } from "@/components/forms/step-flow";
import {
  StepFlow,
  FlowStep,
  FlowNavigation,
  FlowUploads,
  FlowReview,
  FlowPreview,
} from "@/components/forms/step-flow";
// Migrated from pages/create-products/add-online-product.html; edit this React source directly.
import type { Metadata } from "next";
import { SearchInput } from "@/components/ui/search-input";
import { SelectField } from "@/components/ui/select-field";

import { PageFrame } from "@/components/layout/page-frame";
export const metadata: Metadata = { title: "شاپی | اطلاعات پایه محصول" };
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

        <StepFlow
          labels={[
            "اطلاعات پایه محصول",
            "دسته بندی محصول",
            "ویژگی های محصول",
            "گالری و تصاویر محصول",
            "پلن محصول",
            "ارسال و شرایط محصول",
            "ثبت محصول",
          ]}
          className="main-container mt-10 flex column gap-4 lg-mb-25 lg-mt-20 inline-space md-p-0 lg-gap-2 "
        >
          <div className="flex row font-peyda gap-4 lg-gap-2 lg-column">
            <div className="w-p7 pt-7 pb-7 shadow-md round-md full-page-height max-h-85 pl-5 pr-5 md-p-0 lg-full-width md-shadow-unset lg-full-height lg-max-h-unset">
              <FlowStep
                index={0}
                className="flex column gap-7 pl-5 pr-5 full-height overflow-y-auto lg-hide-scrollbar lg-pr-0 lg-pl-0 md-pl-4 md-pr-4"
              >
                <h1 className="text-xl mb-5 pr-3 lg-p-0 md-pl-3">
                  {"اطلاعات پایه محصول"}
                </h1>

                <div className="flex column pr-3 lg-p-0">
                  <label
                    htmlFor="phone"
                    className="flex font-peyda text-sm text-muted mb-2"
                  >
                    {" عنوان محصول "}
                    <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                      {"*"}
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="عنوان محصول"
                    className="full-width input-primary font-peyda"
                    aria-label="عنوان محصول"
                    required
                  />
                </div>

                <div className="flex row gap-4 full-width align-items-center justify-content-center">
                  <div className="flex column pr-3 full-width md-pr-0">
                    <label
                      htmlFor="phone"
                      className="flex font-peyda text-sm text-muted mb-2"
                    >
                      {" مبلغ محصول "}
                      <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                        {"*"}
                      </span>
                    </label>

                    <input
                      type="number"
                      placeholder="مبلغ به تومان"
                      className="full-width input-primary font-peyda"
                      aria-label="مبلغ محصول"
                      required
                    />
                  </div>

                  <div className="flex column pr-3 full-width md-pr-0">
                    <label
                      htmlFor="phone"
                      className="flex font-peyda text-sm text-muted mb-2"
                    >
                      {" مبلغ بعد از تخفیف "}
                      <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                        {"*"}
                      </span>
                    </label>

                    <input
                      type="number"
                      placeholder="مبلغ تخفیف"
                      className="full-width input-primary font-peyda"
                      aria-label="مبلغ بعد از تخفیف"
                      required
                    />
                  </div>
                </div>

                <div className="flex column full-height pr-3 lg-p-0">
                  <label
                    htmlFor="phone"
                    className="flex font-peyda text-sm text-muted mb-2"
                  >
                    {" توضیحات محصول "}
                    <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                      {"*"}
                    </span>
                  </label>

                  <textarea
                    placeholder="توضیحات مربوط به محصول را بنویسید."
                    className="full-width full-height text-area-primary no-resize font-peyda"
                    aria-label="توضیحات محصول"
                    required
                  />
                </div>
              </FlowStep>

              <FlowStep
                index={1}
                className="flex column gap-0 pl-5 pr-5 full-height overflow-y-auto lg-hide-scrollbar lg-pr-0 lg-pl-0 md-pl-4 md-pr-4 remove"
              >
                <h1 className="text-xl mb-5 pr-3">{"دسته بندی محصول"}</h1>

                <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
                  <div className="flex column mr-1 overflow-y-auto pl-5 lg-pl-0">
                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between border-bottom font-peyda text-sm pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-action="back"
                    >
                      <span className="flex align-items-center gap-4 semi-bold">
                        <i className="icon icon-right-arrow text-muted w-3 h-3"></i>
                        {" بازگشت "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm border-bottom pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-car text-muted w-3 h-3"></i>
                        {" وسایل نقلیه "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm border-bottom pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-motorcycle-race text-muted w-3 h-3"></i>
                        {" موتورسیکلت "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm border-bottom pt-4 pb-4 pr-5 active-category"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-home-smile text-muted w-3 h-3"></i>
                        {" املاک "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm border-bottom pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-car text-muted w-3 h-3"></i>
                        {" وسایل نقلیه "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm border-bottom pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-motorcycle-race text-muted w-3 h-3"></i>
                        {" موتورسیکلت "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda border-bottom text-sm pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-home-smile text-muted w-3 h-3"></i>
                        {" املاک "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm border-bottom pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-car text-muted w-3 h-3"></i>
                        {" وسایل نقلیه "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>

                    <button
                      className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm pt-4 pb-4 pr-5"
                      type="button"
                      data-flow-choice
                      aria-pressed="false"
                    >
                      <span className="flex align-items-center gap-4">
                        <i className="icon icon-motorcycle-race text-muted w-3 h-3"></i>
                        {" موتورسیکلت "}
                      </span>

                      <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                    </button>
                  </div>
                </div>
              </FlowStep>

              <FlowStep
                index={2}
                className="flex column gap-0 pl-5 pr-5 full-height overflow-y-auto lg-hide-scrollbar lg-pr-0 lg-pl-0 md-pl-4 md-pr-4 remove"
              >
                <h1 className="text-xl mb-5">{"ویژگی های محصول"}</h1>

                <div className="bg-background-alt flex align-items-center p-7 round-md gap-2">
                  <i className="icon icon-down-2 text-text w-2 h-2 md-position-unset right-5"></i>

                  <span className="font-peyda text-sm">
                    {"دسته بندی انتخابی:"}
                  </span>

                  <FlowCategoryName />
                </div>

                <div className="flex column gap-5 mt-7">
                  <div className="flex row justify-content-between align-items-center gap-5">
                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" برند دستگاه "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="سامسونگ"
                        className="full-width input-primary font-peyda"
                        aria-label="برند دستگاه"
                        required
                      />
                    </div>

                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" مدل دستگاه "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="S25 Ultra"
                        className="full-width input-primary font-peyda"
                        aria-label="مدل دستگاه"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex row justify-content-between align-items-center gap-5">
                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" حافظه رم "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <SelectField
                        className="custom-select font-peyda"
                        name="city"
                        placeholder="انتخاب شهر"
                        options={[
                          { value: "tehran", label: "تهران" },
                          { value: "tabriz", label: "تبریز" },
                          { value: "shiraz", label: "شیراز" },
                          { value: "mashhad", label: "مشهد" },
                        ]}
                      />
                    </div>

                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" رنگ "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="مشکی مات"
                        className="full-width input-primary font-peyda"
                        aria-label="رنگ"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex row justify-content-between align-items-center gap-5">
                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" حافظه رم "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="8 گیگ"
                        className="full-width input-primary font-peyda"
                        aria-label="حافظه رم"
                        required
                      />
                    </div>

                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" رنگ "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="مشکی مات"
                        className="full-width input-primary font-peyda"
                        aria-label="رنگ"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex row justify-content-between align-items-center gap-5 h-7">
                    <div className="flex row justify-content-between align-items-center gap-5 full-width">
                      <span className="md-text-xs">
                        {"همراه با وسایل جانبی"}
                      </span>

                      <label className="toggle-btn-primary">
                        <input type="checkbox" />

                        <span className="slider"></span>
                      </label>
                    </div>

                    <div className="flex row justify-content-between align-items-center gap-5 full-width">
                      <span className="md-text-xs">{"رجیستر شده"}</span>

                      <label className="toggle-btn-primary">
                        <input type="checkbox" />

                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>

                  <div className="flex row justify-content-between align-items-center gap-5 h-7">
                    <div className="flex row justify-content-between align-items-center gap-5 full-width md-gap-2">
                      <span className="md-text-xs">{"مدل اصلی دستگاه"}</span>

                      <label className="toggle-btn-primary">
                        <input type="checkbox" />

                        <span className="slider"></span>
                      </label>
                    </div>

                    <div className="flex row justify-content-between align-items-center gap-5 full-width md-gap-2">
                      <span className="md-text-xs">
                        {"بدون باز شدگی و تعمیر"}
                      </span>

                      <label className="toggle-btn-primary">
                        <input type="checkbox" />

                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </FlowStep>

              <FlowStep
                index={3}
                className="flex column gap-0 pl-5 pr-5 gap-3 full-height overflow-y-auto primary-scrollbar lg-hide-scrollbar lg-pr-0 lg-pl-0 md-pl-4 md-pr-4 remove"
              >
                <h1 className="text-xl mb-5">{"گالری و تصاویر محصول"}</h1>
                <FlowUploads title="گالری و تصاویر محصول" />
              </FlowStep>

              <FlowStep
                index={4}
                className="flex column justify-content-between gap-0 gap-3 full-height overflow-y-auto primary-scrollbar lg-hide-scrollbar lg-pr-0 lg-pl-0 remove"
              >
                <h1 className="text-xl mb-5 md-pl-3 md-pr-4">{"پلن محصول"}</h1>

                <div className="flex row md-mt-3">
                  <div className="swiper plans-swiper full-width">
                    <div className="swiper-wrapper font-peyda">
                      <div className="swiper-slide">
                        <input
                          type="radio"
                          id="basic-plan"
                          name="flow-4-login-type"
                          className="radio-hidden"
                          defaultChecked
                        />

                        <label
                          htmlFor="basic-plan"
                          className="plans-button flex column primary-border-md round-md overflow-hidden font-sans hover-scale-up justify-content-center align-items-center gap-4 p-3 mr-2 ml-2"
                        >
                          <div className="flex justify-content-center align-items-center mt-7 mb-4">
                            <i className="icon icon-send-3 h-7 w-7 text-primary"></i>
                          </div>

                          <span className="text-lg semi-bold font-peyda">
                            {"عادی"}
                          </span>

                          <div className="flex column justify-content-center align-items-center gap-1 full-width border-bottom pb-4">
                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-primary"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" کاملا رایگان "}
                              </span>

                              <span className="h-px fill bg-primary"></span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-primary"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" قابلیت های پایه محصول "}
                              </span>

                              <span className="h-px fill bg-primary"></span>
                            </div>
                          </div>

                          <span className="text-lg font-peyda text-primary">
                            {"رایگان"}
                          </span>
                        </label>
                      </div>

                      <div className="swiper-slide">
                        <input
                          type="radio"
                          id="plan-2"
                          name="flow-4-login-type"
                          className="radio-hidden"
                          defaultChecked
                        />

                        <label
                          htmlFor="plan-2"
                          className="plans-button plan-gold flex column primary-border-md round-md overflow-hidden font-sans hover-scale-up justify-content-center align-items-center gap-4 p-3 mr-2 ml-2"
                        >
                          <div className="flex justify-content-center align-items-center mt-7 mb-4">
                            <i className="icon icon-lightning h-7 w-7 text-gold"></i>
                          </div>

                          <span className="text-lg semi-bold font-peyda text-gold">
                            {"فوری"}
                          </span>

                          <div className="flex column justify-content-center align-items-center gap-1 full-width border-bottom pb-4">
                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-gold"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" کاملا رایگان "}
                              </span>

                              <span className="h-px fill bg-gold"></span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-gold"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" قابلیت های پایه محصول "}
                              </span>

                              <span className="h-px fill bg-gold"></span>
                            </div>
                          </div>

                          <div className="flex row justify-content-between mt-1">
                            <div className="flex row gap-1 font-sans text-primary semi-bold">
                              <span className="text-gold">{"100,000"}</span>

                              <i className="icon icon-toman-bold w-3 h-3 text-gold"></i>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className="swiper-slide">
                        <input
                          type="radio"
                          id="basic-plan-3"
                          name="flow-4-login-type"
                          className="radio-hidden"
                          defaultChecked
                        />

                        <label
                          htmlFor="basic-plan-3"
                          className="plans-button plan-green flex column primary-border-md round-md overflow-hidden font-sans hover-scale-up justify-content-center align-items-center gap-4 p-3 mr-2 ml-2"
                        >
                          <div className="flex justify-content-center align-items-center mt-7 mb-4">
                            <i className="icon icon-motorcycle-race h-7 w-7 text-green"></i>
                          </div>

                          <span className="text-lg semi-bold font-peyda text-green">
                            {"هوشمند"}
                          </span>

                          <div className="flex column justify-content-center align-items-center gap-1 full-width border-bottom pb-4">
                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-green"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" کاملا رایگان "}
                              </span>

                              <span className="h-px fill bg-green"></span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-green"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" قابلیت های پایه محصول "}
                              </span>

                              <span className="h-px fill bg-green"></span>
                            </div>
                          </div>

                          <div className="flex row justify-content-between mt-1">
                            <div className="flex row gap-1 font-sans text-green semi-bold">
                              <span>{"100,000"}</span>

                              <i className="icon icon-toman-bold w-3 h-3"></i>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className="swiper-slide">
                        <input
                          type="radio"
                          id="basic-plan-6"
                          name="flow-4-login-type"
                          className="radio-hidden"
                          defaultChecked
                        />

                        <label
                          htmlFor="basic-plan-6"
                          className="plans-button flex column primary-border-md round-md overflow-hidden font-sans hover-scale-up justify-content-center align-items-center gap-4 p-3 mr-2 ml-2"
                        >
                          <div className="flex justify-content-center align-items-center mt-7 mb-4">
                            <i className="icon icon-send-3 h-7 w-7 text-primary"></i>
                          </div>

                          <span className="text-lg semi-bold font-peyda">
                            {"عادی"}
                          </span>

                          <div className="flex column justify-content-center align-items-center gap-1 full-width border-bottom pb-4">
                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-primary"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" کاملا رایگان "}
                              </span>

                              <span className="h-px fill bg-primary"></span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-primary"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" قابلیت های پایه محصول "}
                              </span>

                              <span className="h-px fill bg-primary"></span>
                            </div>
                          </div>

                          <span className="text-lg font-peyda text-primary">
                            {"رایگان"}
                          </span>
                        </label>
                      </div>

                      <div className="swiper-slide">
                        <input
                          type="radio"
                          id="plan-4"
                          name="flow-4-login-type"
                          className="radio-hidden"
                          defaultChecked
                        />

                        <label
                          htmlFor="plan-4"
                          className="plans-button plan-gold flex column primary-border-md round-md overflow-hidden font-sans hover-scale-up justify-content-center align-items-center gap-4 p-3 mr-2 ml-2"
                        >
                          <div className="flex justify-content-center align-items-center mt-7 mb-4">
                            <i className="icon icon-lightning h-7 w-7 text-gold"></i>
                          </div>

                          <span className="text-lg semi-bold font-peyda text-gold">
                            {"فوری"}
                          </span>

                          <div className="flex column justify-content-center align-items-center gap-1 full-width border-bottom pb-4">
                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-gold"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" کاملا رایگان "}
                              </span>

                              <span className="h-px fill bg-gold"></span>
                            </div>

                            <div className="flex justify-content-center align-items-center gap-3 full-width">
                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" نمایش محصول به مدت یک ماه "}
                              </span>
                            </div>

                            <div className="flex justify-content-between align-items-center gap-3 full-width">
                              <span className="h-px fill bg-gold"></span>

                              <span className="text-xs font-peyda text-align-center flex justify-content-center align-items-center">
                                {" قابلیت های پایه محصول "}
                              </span>

                              <span className="h-px fill bg-gold"></span>
                            </div>
                          </div>

                          <div className="flex row justify-content-between mt-1">
                            <div className="flex row gap-1 font-sans text-primary semi-bold">
                              <span className="text-gold">{"100,000"}</span>

                              <i className="icon icon-toman-bold w-3 h-3 text-gold"></i>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="swiper-button-next lg-remove"></div>

                    <div className="swiper-button-prev lg-remove"></div>
                  </div>
                </div>

                <div className="bg-primary-light flex align-items-center p-7 round-md gap-6 justify-content-evenly md-grid md-grid-col-2 md-ml-4 md-mr-4">
                  <div className="flex align-items-center gap-2 md-justify-content-center">
                    <i className="icon icon-sub-square text-primary w-2 h-2 md-position-unset right-5"></i>

                    <span className="font-peyda text-sm">{"پلن انتخابی:"}</span>

                    <span className="font-peyda text-sm semi-bold">
                      {"ویژه"}
                    </span>
                  </div>

                  <span className="w-1px full-height bg-surface-alt opacity-5 md-remove"></span>

                  <div className="flex align-items-center gap-2 md-justify-content-center">
                    <i className="icon icon-time-twenty-four text-primary w-2 h-2 md-position-unset right-5"></i>

                    <span className="font-peyda text-sm">{"مدت محصول:"}</span>

                    <span className="font-peyda text-sm semi-bold">
                      {"7 روز"}
                    </span>
                  </div>

                  <span className="w-1px full-height bg-surface-alt opacity-5 md-remove"></span>

                  <div className="flex align-items-center gap-2 md-justify-content-center">
                    <i className="icon icon-grid text-primary w-2 h-2 md-position-unset right-5"></i>

                    <span className="font-peyda text-sm">{"جایگاه:"}</span>

                    <span className="font-peyda text-sm semi-bold">
                      {"صفحه اصلی"}
                    </span>
                  </div>

                  <span className="w-1px full-height bg-surface-alt opacity-5 md-remove"></span>

                  <div className="flex align-items-center gap-2 md-justify-content-center">
                    <i className="icon icon-money text-primary w-2 h-2 md-position-unset right-5"></i>

                    <span className="font-peyda text-sm">{"قیمت:"}</span>

                    <span className="font-sans text-sm semi-bold">
                      {"49,000"}
                    </span>
                  </div>
                </div>
              </FlowStep>

              <FlowStep
                index={5}
                className="flex column gap-7 full-height overflow-y-auto primary-scrollbar pl-4 lg-hide-scrollbar lg-pr-0 lg-pl-0 md-pl-4 md-pr-4 remove"
              >
                <h1 className="text-xl mb-5 pr-3 md-p-0">
                  {"ارسال و شرایط محصول"}
                </h1>

                <div className="flex column p-3 md-p-0">
                  <label
                    htmlFor="phone"
                    className="flex font-peyda text-sm text-muted mb-2"
                  >
                    {" ارسال محصول از "}
                    <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                      {"*"}
                    </span>
                  </label>

                  <button
                    className="full-width light-border font-peyda flex row justify-content-between gap-1 input-primary round-sm"
                    type="button"
                  >
                    <span className="">{"تهران، طالقانی"}</span>

                    <span className="flex justify-content-center align-items-center gap-2 text-primary">
                      {"مشاهده همه مناطق"}
                      <i className="icon icon-left-2 w-13px h-13px text-primary"></i>
                    </span>
                  </button>
                </div>

                <div className="flex column gap-5 p-3">
                  <div className="flex row justify-content-between align-items-center gap-5">
                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" حافظه رم "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <SelectField
                        className="custom-select font-peyda"
                        name="city"
                        placeholder="انتخاب شهر"
                        options={[
                          { value: "tehran", label: "تهران" },
                          { value: "tabriz", label: "تبریز" },
                          { value: "shiraz", label: "شیراز" },
                          { value: "mashhad", label: "مشهد" },
                        ]}
                      />
                    </div>

                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" رنگ "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="مشکی مات"
                        className="full-width input-primary font-peyda"
                        aria-label="رنگ"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex row justify-content-between align-items-center gap-5">
                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" حافظه رم "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="8 گیگ"
                        className="full-width input-primary font-peyda"
                        aria-label="حافظه رم"
                        required
                      />
                    </div>

                    <div className="flex column full-width">
                      <label
                        htmlFor="phone"
                        className="flex font-peyda text-sm text-muted mb-2"
                      >
                        {" رنگ "}
                        <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                          {"*"}
                        </span>
                      </label>

                      <input
                        type="text"
                        placeholder="مشکی مات"
                        className="full-width input-primary font-peyda"
                        aria-label="رنگ"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex row justify-content-between align-items-center gap-5 h-7">
                    <div className="flex row justify-content-between align-items-center gap-5 full-width">
                      <span className="md-text-xs">
                        {"ارسال فقط درون شهری"}
                      </span>

                      <label className="toggle-btn-primary">
                        <input type="checkbox" />

                        <span className="slider"></span>
                      </label>
                    </div>

                    <div className="flex row justify-content-between align-items-center gap-5 full-width">
                      <span className="md-text-xs">{"دارای گارانتی"}</span>

                      <label className="toggle-btn-primary">
                        <input type="checkbox" />

                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>

                  <div className="flex column full-height mt-1 lg-p-0">
                    <label
                      htmlFor="phone"
                      className="flex font-peyda text-sm text-muted mb-2"
                    >
                      {" شرایط مرجوعی محصول "}
                      <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                        {"*"}
                      </span>
                    </label>

                    <textarea
                      placeholder="توضیحات مربوط به محصول را بنویسید."
                      className="full-width full-height text-area-primary no-resize font-peyda"
                      aria-label="شرایط مرجوعی محصول"
                      required
                    />
                  </div>
                </div>
              </FlowStep>

              <FlowStep
                index={6}
                className="flex column gap-8 full-height primary-scrollbar lg-hide-scrollbar lg-pr-0 lg-pl-0 md-pl-4 md-pr-4 remove"
              >
                <h1 className="text-xl mb-5">ثبت محصول</h1>

                <div className="flex column">
                  <label
                    htmlFor="phone"
                    className="flex font-peyda text-sm text-muted mb-2"
                  >
                    {" شماره تماس "}
                    <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                      {"*"}
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="09123456789"
                    className="full-width p-2 input-primary font-peyda"
                    aria-label="شماره تماس"
                    required
                  />
                </div>

                <div className="flex row md-column md-mb-5 justify-content-between align-items-center gap-5 h-7">
                  <div className="flex row justify-content-between align-items-center gap-5 full-width">
                    <span className="semi-bold lg-text-sm md-text-xs">
                      {"بخش نظرات برای محصولات"}
                    </span>

                    <label className="toggle-btn-primary">
                      <input type="checkbox" />

                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="flex row justify-content-between align-items-center gap-5 full-width">
                    <span className="semi-bold lg-text-sm md-text-xs">
                      {"یک ویژگی تایپ کنید"}
                    </span>

                    <label className="toggle-btn-primary">
                      <input type="checkbox" />

                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <FlowReview />
              </FlowStep>
            </div>

            <FlowPreview />
          </div>

          <FlowNavigation />
        </StepFlow>

        <footer className="mt-10 bg-surface full-width flex justify-content-center pt-4 font-sans lg-remove">
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
                        <a href="#">{"ثبت محصول"}</a>
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
