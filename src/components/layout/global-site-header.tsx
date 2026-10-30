import { LocationButton } from "@/components/layout/location-provider";
import Link from "next/link";
import { SearchInput } from "@/components/ui/search-input";
import { HomeHeaderCategoryMenu } from "@/components/home/sections/HomeHeaderCategoryMenu";

export function GlobalSiteHeader({
  desktopOnly = false,
}: {
  desktopOnly?: boolean;
}) {
  return (
    <>
      <header
        className={`home-page-header flex pt-3 pb-3 h-10 ${desktopOnly ? "lg-remove" : ""}`}
      >
        <div className="full-width flex row justify-content-between gap-5 main-container">
          <div
            id="header-shapee-logo"
            className="flex align-items-center mr-7 lg-remove"
          >
            <Link href="/">
              <img
                src="/assets/logo/shapee-optimized-2.webp"
                className="w-13 xl-w-11"
                alt="لوگوی شاپی"
              />
            </Link>
          </div>

          <div className="flex row justify-content-center gap-3 index-1000 full-width lg-pl-5 lg-pr-5">
            <HomeHeaderCategoryMenu />
            <div
              id="header-search-bar"
              className="h-fit min-h-7 round-md full-width max-w-55 lg-max-w-unset input-primary pb-3 lg-remove"
            >
              <div className="flex row index-1000 mt-1">
                <i className="icon icon-search text-muted w-3 h-3"></i>

                <SearchInput
                  type="text"
                  className="font-peyda text-text full-width indent-1 bg-background-alt tranistion-all"
                  placeholder="جستجو در آگهی ها، کسب و کار ها، فروشگاها و کاریابی"
                />
              </div>

              <div
                id="search-bar-popup"
                className="flex column bg-background p-5 round-md light-border mt-5 remove xl-p-3"
              >
                <div className="flex column gap-6 remove">
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
                </div>

                <div className="flex column gap-6">
                  <span className="font-peyda text-sm semi-bold">
                    {"نتایج جستجو"}
                  </span>

                  <div
                    id="search-results"
                    className="flex row wrap gap-5 round-md"
                  >
                    <a
                      href="#"
                      className="search-results-product flex row gap-5 justify-content-between align-items-center full-width overflow-hidden"
                    >
                      <div className="flex">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="w-10 round-md"
                          src="/assets/images/example/Jaguar-F-Type.jpg"
                          alt="محصول"
                        />
                      </div>

                      <div className="font-sans full-width min-w-0">
                        <span className="semi-bold mb-3 text-sm text-ellipsis">
                          {"جگوار مارک ۲ اتومات"}
                        </span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-3">
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
                        <i className="icon icon-left-2 text-inverse w-3 h-3"></i>
                      </button>
                    </a>

                    <a
                      href="#"
                      className="search-results-product flex row gap-5 justify-content-between align-items-center full-width overflow-hidden"
                    >
                      <div className="flex">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="w-10 round-md"
                          src="/assets/images/example/Jaguar-F-Type.jpg"
                          alt="محصول"
                        />
                      </div>

                      <div className="font-sans full-width min-w-0">
                        <span className="semi-bold mb-3 text-sm text-ellipsis">
                          {"جگوار مارک ۲ اتومات"}
                        </span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-3">
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
                        <i className="icon icon-left-2 text-inverse w-3 h-3"></i>
                      </button>
                    </a>

                    <a
                      href="#"
                      className="search-results-product flex row gap-5 justify-content-between align-items-center full-width overflow-hidden"
                    >
                      <div className="flex">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="w-10 round-md"
                          src="/assets/images/example/Jaguar-F-Type.jpg"
                          alt="محصول"
                        />
                      </div>

                      <div className="font-sans full-width min-w-0">
                        <span className="semi-bold mb-3 text-sm text-ellipsis">
                          {"جگوار مارک ۲ اتومات"}
                        </span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-3">
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
                        <i className="icon icon-left-2 text-inverse w-3 h-3"></i>
                      </button>
                    </a>

                    <a
                      href="#"
                      className="search-results-product flex row gap-5 justify-content-between align-items-center full-width overflow-hidden"
                    >
                      <div className="flex">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="w-10 round-md"
                          src="/assets/images/example/Jaguar-F-Type.jpg"
                          alt="محصول"
                        />
                      </div>

                      <div className="font-sans full-width min-w-0">
                        <span className="semi-bold mb-3 text-sm text-ellipsis">
                          {"جگوار مارک ۲ اتومات"}
                        </span>

                        <div className="flex row gap-2 font-sans text-accent opacity-7 text-xs mt-3">
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
                        <i className="icon icon-left-2 text-inverse w-3 h-3"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="header-search-bar"
              className="remove h-fit min-h-7 light-border p-3 round-sm full-width bg-background-alt tranistion-all lg-block"
              role="button"
              tabIndex={0}
              aria-label="باز کردن جستجو"
              aria-haspopup="dialog"
            >
              <div className="flex row align-items-center mt-1">
                <i className="icon icon-search text-muted w-3 h-3"></i>

                <div className="flex row align-items-center gap-2 full-width indent-1 pointer">
                  <span className="font-peyda text-muted text-sm">
                    {"جستجو در"}
                  </span>

                  <img
                    src="/assets/logo/shapee-optimized-2.webp"
                    alt="لوگو شاپی"
                    className="w-8 mb-1"
                  />
                </div>
              </div>
            </div>

            <LocationButton />
          </div>

          <div className="ml-7 lg-remove">
            <button
              className="font-peyda btn-primary text-sm flex row justify-content-center align-items-center gap-2 full-height lg-full-width w-20 round-full xl-pl-4 xl-pr-4 remove"
              type="button"
            >
              <i className="icon icon-login text-inverse w-2 h-2"></i>

              <span className="word-space-md">{"ورود | ثبت‌نام"}</span>
            </button>

            <button
              className="font-peyda text-sm flex row align-items-center gap-3 full-height lg-full-width w-20 round-full"
              type="button"
            >
              <div className="flex relative">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/images/example/profile-picture.jpg"
                  className="w-6 h-6 round-full"
                  alt=""
                />

                <span className="text-xs absolute bg-primary h-2 w-2 round-full flex align-items-center justify-content-center text-inverse font-sans top-0 right-0">
                  {"4"}
                </span>
              </div>

              <div className="flex column">
                <span className="text-sm flex semi-bold">{"علی محمدی"}</span>

                <span className="text-xs mt-1">{"حساب کاربری "}</span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {!desktopOnly && (
        <div
          id="search-bar-popup"
          className="fixed inset-0 bg-background overflow-y-auto index-2000 top-0 full-width full-page-height remove"
        >
          <div className="flex row full-width justify-content-center align-items-center gap-5 mt-5 pl-5 pr-5">
            <button type="button" data-close-search aria-label="بستن جستجو">
              <i className="icon icon-left-arrow w-3 h-3 flip-x"></i>
            </button>

            <div className="full-width flex row align-items-center gap-3 input-primary">
              <i className="icon icon-search text-muted w-3 h-3"></i>

              <SearchInput
                type="text"
                className="bg-background-alt text-text font-peyda full-width"
                placeholder="جستجو کنید..."
              />
            </div>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
