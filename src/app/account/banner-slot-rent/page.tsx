import { FlowUploads } from "@/components/forms/step-flow";
// Migrated from pages/account/banner-slot-rent.html; edit this React source directly.
import type { Metadata } from "next";
import Link from "next/link";
import { SearchInput } from "@/components/ui/search-input";
import { SelectField } from "@/components/ui/select-field";
import { BookingCalendar } from "@/components/forms/booking-calendar";
import { BookingWizard } from "@/components/forms/step-flow";

export const metadata: Metadata = { title: "شاپی | رزرو بنر تبلیغاتی" };
export default function Page() {
  return (
    <>
      <BookingWizard className="banner-rent-wizard flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30">
        <div className="flex justify-content-between column gap-10 full-height">
          <div className="flex column gap-10">
            <div className="flex column gap-3 font-peyda">
              <h1 className="m-0 semi-bold text-xxl md-text-xl">
                {" رزرو بنر تبلیغاتی "}
              </h1>

              <span className="text-sm semi-bold">{"انتخاب جایگاه بنر"}</span>
            </div>

            <div className="flex column justify-content-center align-items-center gap-5">
              <div className="flex row align-items-center full-width input-primary">
                <i className="icon icon-search text-muted w-3 h-3 mr-2"></i>

                <SearchInput
                  type="text"
                  className="font-peyda full-width indent-1 pt-3 pb-3 pl-3 pr-0"
                  placeholder="جستجو بنر های موجود.."
                />
              </div>

              <div className="flex row xs-column justify-content-between align-items-center gap-5 full-width">
                <div className="flex column full-width">
                  <SelectField
                    className="custom-select font-peyda"
                    name="city"
                    placeholder="همه مکان ها"
                    options={[
                      { value: "tehran", label: "صفحه اصلی" },
                      { value: "tabriz", label: "صفحه ورود" },
                      { value: "shiraz", label: "صفحه دسته بندی ها" },
                      { value: "mashhad", label: "صفحه کاربری" },
                    ]}
                  />
                </div>

                <div className="flex column full-width">
                  <SelectField
                    className="custom-select font-peyda"
                    name="city"
                    placeholder="همه اندازه ها"
                    options={[
                      { value: "tehran", label: "200x200" },
                      { value: "tabriz", label: "600x300" },
                      { value: "shiraz", label: "1200x700" },
                      { value: "mashhad", label: "2000x1000" },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-col-4 lg-grid-col-3 md-grid-col-2 xxs-grid-col-1 gap-5">
              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex row gap-3 wrap">
                <input
                  type="radio"
                  id="status-new"
                  name="login-type"
                  className="radio-hidden"
                  defaultChecked
                />

                <label
                  htmlFor="status-new"
                  className="radio-button font-peyda text-sm md-text-xs flex column round-md p-0 overflow-hidden font-sans hover-scale-up shadow-sm bg-background m-1 md-m-0"
                >
                  <div className="block relative overflow-hidden">
                    <div className="absolute top-3 right-3 md-top-2 md-right-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-green bg-green-transparent md-p-0 md-w-30px md-h-30px">
                        <span className="text-xs">{"آزاد"}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 md-top-2 md-left-2 index-1000">
                      <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-red-transparent bg-gold-light md-pl-2 md-pr-2">
                        <span className="text-xs">{"پر تقاضا"}</span>
                      </div>
                    </div>

                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/banner-slot-wireframe.svg"
                      alt="نمای شماتیک جایگاه بنر در صفحه"
                      className="block full-width scale-up"
                    />
                  </div>

                  <div className="flex column justify-content-center align-items-center pt-2 pl-5 pr-5 pb-5 gap-1 full-width">
                    <div className="flex justify-content-center align-items-center min-w-0">
                      <span className="semi-bold text-ellipsis text-md sm-text-sm">
                        {"بنر بالای هدر "}
                      </span>
                    </div>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold mt-3">
                      {"محل نمایش: صفحه اصلی"}
                    </span>

                    <span className="opacity-7 mb-1 text-sm text-accent font-peyda semi-bold">
                      {"سایز بنر: 400x200"}
                    </span>

                    <div className="flex row justify-content-between mt-1 full-width">
                      <div className="flex row gap-2 align-items-center">
                        <span className="font-peyda semi-bold">
                          {"روزانه:"}
                        </span>
                      </div>

                      <div className="flex row gap-1 font-sans text-primary semi-bold">
                        <span>{"12,000,000"}</span>

                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-content-center align-items-center">
              <div className="flex align-items-center gap-2 p-2 bg-background-alt round-full border border-surface">
                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-muted hover-bg-background cursor-pointer"
                  type="button"
                >
                  <i className="icon icon-right-2 w-19px h-19px"></i>
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center bg-primary text-white semi-bold cursor-pointer text-inverse font-sans tranistion-all"
                  type="button"
                >
                  {" 1 "}
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all"
                  type="button"
                >
                  {" 2 "}
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all"
                  type="button"
                >
                  {" 3 "}
                </button>

                <span className="pr-2 pl-2 opacity-5">{"..."}</span>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all"
                  type="button"
                >
                  {" 12 "}
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-muted hover-bg-background cursor-pointer tranistion-all"
                  type="button"
                >
                  <i className="icon icon-left w-19px h-19px"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-content-between column gap-10 full-height">
          <div className="flex column gap-10">
            <div className="flex column gap-3 font-peyda">
              <h1 className="m-0 semi-bold text-xxl md-text-xl">
                {" رزرو بنر تبلیغاتی "}
              </h1>

              <span className="text-sm semi-bold">{"پیش نمایش جایگاه"}</span>
            </div>

            <div className="flex column full-width gap-0 pl-5 pr-5">
              <img
                decoding="async"
                loading="lazy"
                src="/assets/placeholders/banner-slot-wireframe.svg"
                className="full-width round-top-md"
                alt="پیش‌نمایش شماتیک محل قرارگیری بنر"
              />

              <div className="flex row bg-primary p-2 round-bottom-md">
                <div className="flex row lg-grid lg-grid-col-2 gap-5 md-gap-3 full-width">
                  <div className="pr-3 pl-3 pt-4 pb-4 md-pl-3 md-pr-3 full-width">
                    <div className="flex row gap-5 xxs-gap-3 align-items-center">
                      <div className="p-4 md-p-3 bg-primary-light round-md">
                        <i className="icon icon-calendar-2 w-3 h-3 text-primary"></i>
                      </div>

                      <div className="flex column gap-1">
                        <span className="text-inverse font-peyda md-text-sm semi-bold">
                          {"مکان بنر:"}
                        </span>

                        <span className="text-inverse font-peyda text-sm md-text-xs">
                          {"صفحه اصلی"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pr-3 pl-3 pt-4 pb-4 md-pl-3 md-pr-3 full-width">
                    <div className="flex row gap-5 xxs-gap-3 align-items-center">
                      <div className="p-4 md-p-3 bg-primary-light round-md">
                        <i className="icon icon-calendar-2 w-3 h-3 text-primary"></i>
                      </div>

                      <div className="flex column gap-1">
                        <span className="text-inverse font-peyda md-text-sm semi-bold">
                          {"جایگاه:"}
                        </span>

                        <span className="text-inverse font-peyda text-sm md-text-xs">
                          {"بالای هدر"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pr-3 pl-3 pt-4 pb-4 md-pl-3 md-pr-3 full-width">
                    <div className="flex row gap-5 xxs-gap-3 align-items-center">
                      <div className="p-4 md-p-3 bg-primary-light round-md">
                        <i className="icon icon-calendar-2 w-3 h-3 text-primary"></i>
                      </div>

                      <div className="flex column gap-1">
                        <span className="text-inverse font-peyda md-text-sm semi-bold">
                          {"روز های فعال این ماه:"}
                        </span>

                        <span className="text-inverse font-peyda text-sm md-text-xs">
                          {"12"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pr-3 pl-3 pt-4 pb-4 md-pl-3 md-pr-3 full-width">
                    <div className="flex row gap-5 xxs-gap-3 align-items-center">
                      <div className="p-4 md-p-3 bg-primary-light round-md">
                        <i className="icon icon-calendar-2 w-3 h-3 text-primary"></i>
                      </div>

                      <div className="flex column gap-1">
                        <span className="text-inverse font-peyda md-text-sm semi-bold">
                          {"هزینه روزانه:"}
                        </span>

                        <span className="flex align-items-center font-sans text-inverse text-sm md-text-xs">
                          {"350,000 تومان "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex column gap-0 pl-5 pr-5 gap-3 full-height overflow-y-auto primary-scrollbar lg-hide-scrollbar lg-pr-0 lg-pl-0 md-pl-4 md-pr-4 font-peyda">
              <h1 className="text-xl mb-5">{"آپلود بنر تبلیغاتی"}</h1>
              <FlowUploads title="تصویر بنر تبلیغاتی" max={1} />
            </div>
          </div>
        </div>
        <div className="flex justify-content-between column gap-10 full-height">
          <BookingCalendar />
        </div>
        <div className="flex justify-content-between column gap-10 full-height">
          <div className="flex column gap-10">
            <div className="flex column gap-3 font-peyda">
              <h1 className="m-0 semi-bold text-xxl md-text-xl">
                {" رزرو بنر تبلیغاتی "}
              </h1>

              <span className="text-sm semi-bold">{"فاکتور نهایی"}</span>
            </div>

            <div className="flex column mr-1 form p-0">
              <Link
                href="#"
                className="flex align-items-center gap-4 hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 border-bottom"
              >
                <div className="p-4 md-p-3 bg-primary-light round-md">
                  <i className="icon icon-page w-3 h-3 text-primary"></i>
                </div>

                <div className="flex column gap-1">
                  <span className="flex align-items-center gap-4 font-peyda text-xs">
                    {" صفحه بنر "}
                  </span>

                  <span className="flex align-items-center gap-4 font-peyda text-md semi-bold">
                    {" صفحه اصلی "}
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex align-items-center gap-4 hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 border-bottom"
              >
                <div className="p-4 md-p-3 bg-primary-light round-md">
                  <i className="icon icon-size-fullscreen w-3 h-3 text-primary"></i>
                </div>

                <div className="flex column gap-1">
                  <span className="flex align-items-center gap-4 font-peyda text-xs">
                    {" سایز بنر "}
                  </span>

                  <span className="flex align-items-center gap-4 font-peyda text-md semi-bold">
                    {" 900x350 پیکسل "}
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex align-items-center gap-4 hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 border-bottom"
              >
                <div className="p-4 md-p-3 bg-primary-light round-md">
                  <i className="icon icon-page w-3 h-3 text-primary"></i>
                </div>

                <div className="flex column gap-1">
                  <span className="flex align-items-center gap-4 font-peyda text-xs">
                    {" جایگاه بنر "}
                  </span>

                  <span className="flex align-items-center gap-4 font-peyda text-md semi-bold">
                    {" بالای هدر "}
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex align-items-center gap-4 hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 border-bottom"
              >
                <div className="p-4 md-p-3 bg-primary-light round-md">
                  <i className="icon icon-calendar-2 w-3 h-3 text-primary"></i>
                </div>

                <div className="flex column gap-1">
                  <span className="flex align-items-center gap-4 font-peyda text-xs">
                    {" تاریخ شروع "}
                  </span>

                  <span className="flex align-items-center gap-4 font-peyda text-md semi-bold">
                    {" 1403/04/05 "}
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex align-items-center gap-4 hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 border-bottom"
              >
                <div className="p-4 md-p-3 bg-primary-light round-md">
                  <i className="icon icon-calendar-2 w-3 h-3 text-primary"></i>
                </div>

                <div className="flex column gap-1">
                  <span className="flex align-items-center gap-4 font-peyda text-xs">
                    {" تاریخ پایان "}
                  </span>

                  <span className="flex align-items-center gap-4 font-peyda text-md semi-bold">
                    {" 1403/04/15 "}
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex align-items-center gap-4 hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 border-bottom"
              >
                <div className="p-4 md-p-3 bg-primary-light round-md">
                  <i className="icon icon-time-twenty-four w-3 h-3 text-primary"></i>
                </div>

                <div className="flex column gap-1">
                  <span className="flex align-items-center gap-4 font-peyda text-xs">
                    {" مدت زمان "}
                  </span>

                  <span className="flex align-items-center gap-4 font-peyda text-md semi-bold">
                    {" 10 روز "}
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex align-items-center gap-4 hover-bg-background-alt pr-5 pl-5 pt-4 pb-4 border-bottom"
              >
                <div className="p-4 md-p-3 bg-primary-light round-md">
                  <i className="icon icon-money w-3 h-3 text-primary"></i>
                </div>

                <div className="flex column gap-1">
                  <span className="flex align-items-center gap-4 font-peyda text-xs">
                    {" قیمت روزانه "}
                  </span>

                  <span className="flex align-items-center gap-4 font-peyda text-md semi-bold">
                    {" 350,000 تومان "}
                  </span>
                </div>
              </Link>
            </div>

            <div>
              <div className="flex column gap-3">
                <h3 className="font-peyda text-lg font-bold">{"روش پرداخت"}</h3>

                <div className="summary-row form pt-4 pb-4 md-pl-3 md-pr-3 full-width bg-primary">
                  <div className="flex row gap-5 xxs-gap-3 align-items-center">
                    <div className="p-4 md-p-3 bg-primary-light round-md">
                      <i className="icon icon-wallet w-3 h-3 text-primary"></i>
                    </div>

                    <div className="flex column gap-1">
                      <span className="md-text-sm text-inverse font-peyda text-lg">
                        {"مبلغ قابل پرداخت"}
                      </span>

                      <strong
                        id="startDate"
                        className="text-inverse font-peyda text-sm md-text-xs"
                      >
                        {" ۳,۲۰۰,۰۰۰ تومان "}
                      </strong>
                    </div>
                  </div>
                </div>

                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="payment-online"
                    className="radio-hidden"
                    defaultChecked
                  />

                  <label htmlFor="payment-online" className="payment-method">
                    <div className="payment-method__indicator"></div>

                    <div className="flex-1">
                      <div className="font-peyda font-medium">
                        {" درگاه پرداخت آنلاین "}
                      </div>
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="payment-wallet"
                    className="radio-hidden"
                  />

                  <label htmlFor="payment-wallet" className="payment-method">
                    <div className="payment-method__indicator"></div>

                    <div className="flex-1">
                      <div className="font-peyda font-medium mb-1">
                        {" کیف پول شاپی "}
                      </div>

                      <div className="text-sm text-muted">
                        {" موجودی: ۳,۲۰۰,۰۰۰ تومان "}
                      </div>
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="payment-card"
                    className="radio-hidden"
                  />

                  <label htmlFor="payment-card" className="payment-method">
                    <div className="payment-method__indicator"></div>

                    <div className="flex-1">
                      <div className="font-peyda font-medium mb-1">
                        {" واریز به حساب "}
                      </div>

                      <div className="text-sm text-muted">
                        {" پرداخت از طریق کارت به کارت "}
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="terms-agreement mt-5">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  className="radio-hidden"
                />

                <label
                  htmlFor="acceptTerms"
                  className="terms-agreement__checkbox"
                >
                  <span></span>
                </label>

                <div className="terms-agreement__text mb-4 mt-4">
                  <a href="#">{" قوانین و مقررات "}</a>
                  {" را مطالعه کرده و می‌پذیرم. "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BookingWizard>
    </>
  );
}
