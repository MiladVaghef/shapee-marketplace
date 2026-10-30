// Migrated from pages/account/my-shops.html; edit this React source directly.
import type { Metadata } from "next";
import Link from "next/link";
import { SearchInput } from "@/components/ui/search-input";
import { SelectField } from "@/components/ui/select-field";

export const metadata: Metadata = { title: "شاپی | فروشگاه‌های من" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30 md-pb-20">
        <div className="flex column gap-5 full-height">
          <div className="flex column gap-6">
            <div className="flex justify-content-between align-items-center font-peyda">
              <div>
                <h1 className="text-xxl bold text-text mb-2 md-text-lg">
                  {"فروشگاه‌های من"}
                </h1>

                <p className="text-sm md-text-xs text-muted">
                  {"داشبورد / فروشگاه‌های من"}
                </p>
              </div>

              <button
                className="btn-primary font-peyda flex gap-2 align-items-center"
                type="button"
              >
                <i className="icon icon-plus-alt"></i>
                {" ایجاد فروشگاه جدید "}
              </button>
            </div>

            <div className="grid grid-col-4 lg-grid-col-2 sm-grid-col-2 gap-4 font-peyda">
              <div className="form bg-primary-light h-22">
                <div className="flex justify-content-between align-items-center">
                  <span className="flex justify-content-center align-items-center round-full w-5 h-5 md-w-4 md-h-4 bg-primary">
                    <i className="icon icon-case-fill w-3 h-3 md-h-2 md-w-2 text-inverse"></i>
                  </span>

                  <span className="text-sm text-text semi-bold md-text-xs">
                    {"کل فروشگاه‌ها"}
                  </span>
                </div>

                <h2 className="text-xxl bold text-center m-0 font-sans mt-2">
                  {"4"}
                </h2>

                <p className="text-sm text-muted mt-2 text-center m-0 semi-bold">
                  {" فروشگاه "}
                </p>
              </div>

              <div className="form bg-blue-light h-22">
                <div className="flex justify-content-between align-items-center">
                  <span className="flex justify-content-center align-items-center round-full w-5 h-5 md-w-4 md-h-4  bg-blue-transparent">
                    <i className="icon icon-eye w-3 h-3 md-h-2 md-w-2 text-inverse"></i>
                  </span>

                  <span className="text-sm text-text semi-bold md-text-xs">
                    {"کل بازدید"}
                  </span>
                </div>

                <h2 className="text-xxl bold text-center m-0 font-sans mt-2">
                  {"12,450"}
                </h2>

                <p className="text-sm text-muted mt-2 text-center m-0 semi-bold">
                  {" بازدید "}
                </p>
              </div>

              <div className="form bg-green-transparent h-22">
                <div className="flex justify-content-between align-items-center">
                  <span className="flex justify-content-center align-items-center round-full w-5 h-5 w-5 h-5 md-w-4 md-h-4  bg-green">
                    <i className="icon icon-tick-circle w-3 h-3 md-h-2 md-w-2 text-inverse"></i>
                  </span>

                  <span className="text-sm text-text semi-bold md-text-xs">
                    {"فعال"}
                  </span>
                </div>

                <h2 className="text-xxl bold text-center m-0 font-sans mt-2">
                  {"3"}
                </h2>

                <p className="text-sm text-muted mt-2 text-center m-0 semi-bold">
                  {" فروشگاه "}
                </p>
              </div>

              <div className="form bg-red-light h-22">
                <div className="flex justify-content-between align-items-center">
                  <span className="flex justify-content-center align-items-center round-full w-5 h-5 w-5 h-5 md-w-4 md-h-4 bg-red-transparent">
                    <i className="icon icon-cross-circle w-3 h-3 md-h-2 md-w-2 text-inverse"></i>
                  </span>

                  <span className="text-sm text-text semi-bold md-text-xs">
                    {"غیرفعال"}
                  </span>
                </div>

                <h2 className="text-xxl bold text-center m-0 font-sans mt-2">
                  {"1"}
                </h2>

                <p className="text-sm text-muted mt-2 text-center m-0 semi-bold">
                  {" فروشگاه "}
                </p>
              </div>
            </div>

            <div className="form md-p-0 md-border-unset md-shadow-unset font-peyda">
              <div className="flex lg-column gap-4">
                <div className="flex row align-items-center w-p10 md-full-width md-order-1 input-primary">
                  <i className="icon icon-search text-muted w-3 h-3 mr-3"></i>

                  <SearchInput
                    type="text"
                    placeholder="جستجو در فروشگاه ها..."
                    className="full-width full-height round-md font-peyda px-2 py-1 md- h-37px"
                  />
                </div>

                <SelectField
                  className="custom-select font-peyda"
                  name="city"
                  placeholder="وضعیت: همه"
                  options={[
                    { value: "tehran", label: "فعال" },
                    { value: "tabriz", label: "غیر فعال" },
                  ]}
                />

                <SelectField
                  className="custom-select font-peyda"
                  name="city"
                  placeholder="مرتب سازی: جدید ترین"
                  options={[{ value: "tehran", label: "قدیمی ترین" }]}
                />
              </div>
            </div>

            <div className="flex column gap-4 font-peyda mb-10 lg-mb-30 md-mb-25">
              <div className="form p-4">
                <div className="flex justify-content-between lg-column gap-5 align-items-center">
                  <div className="flex md-justify-content-between row full-width">
                    <div className="flex row align-items-center gap-3">
                      <div className="flex column justify-content-center align-items-center relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/defigo.jpg"
                          alt=""
                          className="w-14 h-14 xs-w-11 xs-h-11 round-full"
                        />

                        <div>
                          <span className="bg-green-transparent text-green round-full px-5 py-1 text-xs absolute ab-x-center -bottom-1 outline-white">
                            {" فعال "}
                          </span>
                        </div>
                      </div>

                      <div className="">
                        <h3 className="text-lg bold mb-1 xs-text-sm">
                          {"گالری زرین بان"}
                        </h3>

                        <p className="text-sm text-muted mt-0 mb-5 xs-text-xs">
                          {"طلا و جواهر"}
                        </p>

                        <p className="text-sm text-muted flex gap-2 xs-text-xs">
                          <i className="icon icon-map-pin-alt text-primary"></i>
                          {" تهران، پاسداران "}
                        </p>
                      </div>
                    </div>

                    <div className="flex fill row justify-content-center lg-justify-content-end align-items-center md-remove">
                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"محصول"}</p>

                        <h4 className="text-xl bold font-sans">{"287"}</h4>
                      </div>

                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"بازدید"}</p>

                        <h4 className="text-xl bold font-sans">{"3,245"}</h4>
                      </div>

                      <div className="text-center max-w-20 full-width">
                        <p className="text-sm text-muted mb-2">{"سفارش"}</p>

                        <h4 className="text-xl bold font-sans">{"46"}</h4>
                      </div>
                    </div>

                    <div className=" column mt-5 align-items-center remove md-flex">
                      <span className="font-sans text-muted text-sm">
                        {" 34,500 "}
                        <i className="icon icon-package text-primary"></i>
                      </span>
                    </div>
                  </div>

                  <div className="flex column lg-row gap-2 justify-content-center lg-justify-content-between lg-full-width align-items-center">
                    <div className="flex row gap-2">
                      <Link
                        href="/profile/shops-profile"
                        className="btn-primary font-peyda flex gap-2 align-items-center"
                      >
                        <i className="icon icon-eye"></i>
                        {" مشاهده "}
                      </Link>

                      <button
                        className="btn-secondary w-43px h-43px p-0"
                        type="button"
                      >
                        <i className="icon icon-dot-menu"></i>
                      </button>
                    </div>

                    <div className="flex justify-content-center align-items-start full-width lg-w-unset min-w-0">
                      <p className="text-xs text-muted text-ellipsis">
                        {" آخرین بروزرسانی: ۱۴۰۴/۰۳/۲۲ "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex justify-content-between lg-column gap-5 align-items-center">
                  <div className="flex md-justify-content-between row full-width">
                    <div className="flex row align-items-center gap-3">
                      <div className="flex column justify-content-center align-items-center relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/iphone-logo.jpg"
                          alt=""
                          className="w-14 h-14 xs-w-11 xs-h-11 round-full"
                        />

                        <div>
                          <span className="bg-green-transparent text-green round-full px-5 py-1 text-xs absolute ab-x-center -bottom-1 outline-white">
                            {" فعال "}
                          </span>
                        </div>
                      </div>

                      <div className="">
                        <h3 className="text-lg bold mb-1 xs-text-sm">
                          {"گالری زرین بان"}
                        </h3>

                        <p className="text-sm text-muted mt-0 mb-5 xs-text-xs">
                          {"طلا و جواهر"}
                        </p>

                        <p className="text-sm text-muted flex gap-2 xs-text-xs">
                          <i className="icon icon-map-pin-alt text-primary"></i>
                          {" تهران، پاسداران "}
                        </p>
                      </div>
                    </div>

                    <div className="flex fill row justify-content-center lg-justify-content-end align-items-center md-remove">
                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"محصول"}</p>

                        <h4 className="text-xl bold font-sans">{"287"}</h4>
                      </div>

                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"بازدید"}</p>

                        <h4 className="text-xl bold font-sans">{"3,245"}</h4>
                      </div>

                      <div className="text-center max-w-20 full-width">
                        <p className="text-sm text-muted mb-2">{"سفارش"}</p>

                        <h4 className="text-xl bold font-sans">{"46"}</h4>
                      </div>
                    </div>

                    <div className=" column mt-5 align-items-center remove md-flex">
                      <span className="font-sans text-muted text-sm">
                        {" 34,500 "}
                        <i className="icon icon-package text-primary"></i>
                      </span>
                    </div>
                  </div>

                  <div className="flex column lg-row gap-2 justify-content-center lg-justify-content-between lg-full-width align-items-center">
                    <div className="flex row gap-2">
                      <Link
                        href="/profile/shops-profile"
                        className="btn-primary font-peyda flex gap-2 align-items-center"
                      >
                        <i className="icon icon-eye"></i>
                        {" مشاهده "}
                      </Link>

                      <button
                        className="btn-secondary w-43px h-43px p-0"
                        type="button"
                      >
                        <i className="icon icon-dot-menu"></i>
                      </button>
                    </div>

                    <div className="flex justify-content-center align-items-start full-width lg-w-unset min-w-0">
                      <p className="text-xs text-muted text-ellipsis">
                        {" آخرین بروزرسانی: ۱۴۰۴/۰۳/۲۲ "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex justify-content-between lg-column gap-5 align-items-center">
                  <div className="flex md-justify-content-between row full-width">
                    <div className="flex row align-items-center gap-3">
                      <div className="flex column justify-content-center align-items-center relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/steak-bbq.jpg"
                          alt=""
                          className="w-14 h-14 xs-w-11 xs-h-11 round-full"
                        />

                        <div>
                          <span className="bg-green-transparent text-green round-full px-5 py-1 text-xs absolute ab-x-center -bottom-1 outline-white">
                            {" فعال "}
                          </span>
                        </div>
                      </div>

                      <div className="">
                        <h3 className="text-lg bold mb-1 xs-text-sm">
                          {"گالری زرین بان"}
                        </h3>

                        <p className="text-sm text-muted mt-0 mb-5 xs-text-xs">
                          {"طلا و جواهر"}
                        </p>

                        <p className="text-sm text-muted flex gap-2 xs-text-xs">
                          <i className="icon icon-map-pin-alt text-primary"></i>
                          {" تهران، پاسداران "}
                        </p>
                      </div>
                    </div>

                    <div className="flex fill row justify-content-center lg-justify-content-end align-items-center md-remove">
                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"محصول"}</p>

                        <h4 className="text-xl bold font-sans">{"287"}</h4>
                      </div>

                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"بازدید"}</p>

                        <h4 className="text-xl bold font-sans">{"3,245"}</h4>
                      </div>

                      <div className="text-center max-w-20 full-width">
                        <p className="text-sm text-muted mb-2">{"سفارش"}</p>

                        <h4 className="text-xl bold font-sans">{"46"}</h4>
                      </div>
                    </div>

                    <div className=" column mt-5 align-items-center remove md-flex">
                      <span className="font-sans text-muted text-sm">
                        {" 34,500 "}
                        <i className="icon icon-package text-primary"></i>
                      </span>
                    </div>
                  </div>

                  <div className="flex column lg-row gap-2 justify-content-center lg-justify-content-between lg-full-width align-items-center">
                    <div className="flex row gap-2">
                      <Link
                        href="/profile/shops-profile"
                        className="btn-primary font-peyda flex gap-2 align-items-center"
                      >
                        <i className="icon icon-eye"></i>
                        {" مشاهده "}
                      </Link>

                      <button
                        className="btn-secondary w-43px h-43px p-0"
                        type="button"
                      >
                        <i className="icon icon-dot-menu"></i>
                      </button>
                    </div>

                    <div className="flex justify-content-center align-items-start full-width lg-w-unset min-w-0">
                      <p className="text-xs text-muted text-ellipsis">
                        {" آخرین بروزرسانی: ۱۴۰۴/۰۳/۲۲ "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex justify-content-between lg-column gap-5 align-items-center">
                  <div className="flex md-justify-content-between row full-width">
                    <div className="flex row align-items-center gap-3">
                      <div className="flex column justify-content-center align-items-center relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/coffee.jpg"
                          alt=""
                          className="w-14 h-14 xs-w-11 xs-h-11 round-full"
                        />

                        <div>
                          <span className="bg-green-transparent text-green round-full px-5 py-1 text-xs absolute ab-x-center -bottom-1 outline-white">
                            {" فعال "}
                          </span>
                        </div>
                      </div>

                      <div className="">
                        <h3 className="text-lg bold mb-1 xs-text-sm">
                          {"گالری زرین بان"}
                        </h3>

                        <p className="text-sm text-muted mt-0 mb-5 xs-text-xs">
                          {"طلا و جواهر"}
                        </p>

                        <p className="text-sm text-muted flex gap-2 xs-text-xs">
                          <i className="icon icon-map-pin-alt text-primary"></i>
                          {" تهران، پاسداران "}
                        </p>
                      </div>
                    </div>

                    <div className="flex fill row justify-content-center lg-justify-content-end align-items-center md-remove">
                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"محصول"}</p>

                        <h4 className="text-xl bold font-sans">{"287"}</h4>
                      </div>

                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"بازدید"}</p>

                        <h4 className="text-xl bold font-sans">{"3,245"}</h4>
                      </div>

                      <div className="text-center max-w-20 full-width">
                        <p className="text-sm text-muted mb-2">{"سفارش"}</p>

                        <h4 className="text-xl bold font-sans">{"46"}</h4>
                      </div>
                    </div>

                    <div className=" column mt-5 align-items-center remove md-flex">
                      <span className="font-sans text-muted text-sm">
                        {" 34,500 "}
                        <i className="icon icon-package text-primary"></i>
                      </span>
                    </div>
                  </div>

                  <div className="flex column lg-row gap-2 justify-content-center lg-justify-content-between lg-full-width align-items-center">
                    <div className="flex row gap-2">
                      <Link
                        href="/profile/shops-profile"
                        className="btn-primary font-peyda flex gap-2 align-items-center"
                      >
                        <i className="icon icon-eye"></i>
                        {" مشاهده "}
                      </Link>

                      <button
                        className="btn-secondary w-43px h-43px p-0"
                        type="button"
                      >
                        <i className="icon icon-dot-menu"></i>
                      </button>
                    </div>

                    <div className="flex justify-content-center align-items-start full-width lg-w-unset min-w-0">
                      <p className="text-xs text-muted text-ellipsis">
                        {" آخرین بروزرسانی: ۱۴۰۴/۰۳/۲۲ "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex justify-content-between lg-column gap-5 align-items-center">
                  <div className="flex md-justify-content-between row full-width">
                    <div className="flex row align-items-center gap-3">
                      <div className="flex column justify-content-center align-items-center relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/panter.jpg"
                          alt=""
                          className="w-14 h-14 xs-w-11 xs-h-11 round-full"
                        />

                        <div>
                          <span className="bg-green-transparent text-green round-full px-5 py-1 text-xs absolute ab-x-center -bottom-1 outline-white">
                            {" فعال "}
                          </span>
                        </div>
                      </div>

                      <div className="">
                        <h3 className="text-lg bold mb-1 xs-text-sm">
                          {"گالری زرین بان"}
                        </h3>

                        <p className="text-sm text-muted mt-0 mb-5 xs-text-xs">
                          {"طلا و جواهر"}
                        </p>

                        <p className="text-sm text-muted flex gap-2 xs-text-xs">
                          <i className="icon icon-map-pin-alt text-primary"></i>
                          {" تهران، پاسداران "}
                        </p>
                      </div>
                    </div>

                    <div className="flex fill row justify-content-center lg-justify-content-end align-items-center md-remove">
                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"محصول"}</p>

                        <h4 className="text-xl bold font-sans">{"287"}</h4>
                      </div>

                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"بازدید"}</p>

                        <h4 className="text-xl bold font-sans">{"3,245"}</h4>
                      </div>

                      <div className="text-center max-w-20 full-width">
                        <p className="text-sm text-muted mb-2">{"سفارش"}</p>

                        <h4 className="text-xl bold font-sans">{"46"}</h4>
                      </div>
                    </div>

                    <div className=" column mt-5 align-items-center remove md-flex">
                      <span className="font-sans text-muted text-sm">
                        {" 34,500 "}
                        <i className="icon icon-package text-primary"></i>
                      </span>
                    </div>
                  </div>

                  <div className="flex column lg-row gap-2 justify-content-center lg-justify-content-between lg-full-width align-items-center">
                    <div className="flex row gap-2">
                      <Link
                        href="/profile/shops-profile"
                        className="btn-primary font-peyda flex gap-2 align-items-center"
                      >
                        <i className="icon icon-eye"></i>
                        {" مشاهده "}
                      </Link>

                      <button
                        className="btn-secondary w-43px h-43px p-0"
                        type="button"
                      >
                        <i className="icon icon-dot-menu"></i>
                      </button>
                    </div>

                    <div className="flex justify-content-center align-items-start full-width lg-w-unset min-w-0">
                      <p className="text-xs text-muted text-ellipsis">
                        {" آخرین بروزرسانی: ۱۴۰۴/۰۳/۲۲ "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
