// Migrated from pages/account/my-products.html; edit this React source directly.
import type { Metadata } from "next";
import { SearchInput } from "@/components/ui/search-input";
import { SelectField } from "@/components/ui/select-field";

export const metadata: Metadata = { title: "شاپی | آگهی‌های من" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30 md-pb-20">
        <div className="flex column gap-5 full-height">
          <div className="flex column gap-6">
            <div className="flex md-column justify-content-between align-items-center md-align-items-start font-peyda">
              <div>
                <h1 className="text-xxl bold text-text mb-2 md-text-lg">
                  {" محصولات من "}
                </h1>

                <p className="text-sm md-text-xs text-muted">
                  {" داشبورد / فروشگاه‌های من / محصولات من "}
                </p>
              </div>

              <button
                className="btn-primary font-peyda flex gap-2 align-items-center"
                type="button"
              >
                <i className="icon icon-plus-alt"></i>
                {" ساخت محصول جدید "}
              </button>
            </div>

            <div className="form p-0">
              <div className="flex wrap border round-md full-width">
                <button
                  className="fill p-4 bg-primary-light min-w-20"
                  type="button"
                >
                  <div className="bold text-primary font-peyda mb-2">
                    {"همه"}
                  </div>

                  <div className="text-sm text-muted font-sans">
                    {"24 آگهی"}
                  </div>
                </button>

                <button
                  className="fill p-4 light-border min-w-20"
                  type="button"
                >
                  <div className="text-green font-peyda mb-2">{"● فعال"}</div>

                  <div className="text-sm text-muted font-sans">
                    {"14 آگهی"}
                  </div>
                </button>

                <button
                  className="fill p-4 light-border min-w-20"
                  type="button"
                >
                  <div className="text-gold font-peyda mb-2">
                    {"● در انتظار تایید"}
                  </div>

                  <div className="text-sm text-muted font-sans">{"3 آگهی"}</div>
                </button>

                <button
                  className="fill p-4 light-border min-w-20"
                  type="button"
                >
                  <div className="text-red font-peyda mb-2">
                    {"● منقضی شده"}
                  </div>

                  <div className="text-sm text-muted font-sans">{"5 آگهی"}</div>
                </button>

                <button
                  className="fill p-4 light-border min-w-20"
                  type="button"
                >
                  <div className="text-muted font-peyda mb-2">
                    {"● غیرفعال"}
                  </div>

                  <div className="text-sm text-muted font-sans">{"2 آگهی"}</div>
                </button>
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
                      <div className="relative flex justify-content-center align-items-center max-w-17 md-max-w-13 round-md">
                        <img
                          src="/assets/images/example/square-shoe-5.jpg"
                          alt=""
                          className="full-width object-cover round-md"
                        />

                        <span className="absolute top-3 right-3 bg-primary text-inverse py-1 px-4 round-full text-xs md-remove">
                          {" ویژه "}
                        </span>
                      </div>

                      <div className="flex column justify-content-between full-height pb-3 pt-3">
                        <div className="flex column gap-1">
                          <h3 className="text-lg bold mb-1 mt-0 xs-text-sm">
                            {" گالری زرین بان "}
                          </h3>

                          <p className="text-sm text-muted mt-0 mb-5 xs-text-xs">
                            {" طلا و جواهر "}
                          </p>
                        </div>

                        <p className="text-sm text-muted flex gap-2 xs-text-xs m-0">
                          <i className="icon icon-map-pin-alt text-primary"></i>
                          {" تهران، پاسداران "}
                        </p>
                      </div>
                    </div>

                    <div className="flex fill row justify-content-center lg-justify-content-end align-items-center md-remove">
                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"بازدید"}</p>

                        <h4 className="text-xl bold font-sans">{"12,300"}</h4>
                      </div>

                      <div className="text-center max-w-20 border-left full-width">
                        <p className="text-sm text-muted mb-2">{"نشان"}</p>

                        <h4 className="text-xl bold font-sans">{"128"}</h4>
                      </div>

                      <div className="text-center max-w-20 full-width">
                        <p className="text-sm text-muted mb-2">{"فروش"}</p>

                        <h4 className="text-xl bold font-sans">{"12"}</h4>
                      </div>
                    </div>

                    <div className="column mt-4 align-items-end justify-content-between remove md-flex">
                      <span className="font-sans text-muted text-sm">
                        {" 34,500 "}
                        <i className="icon icon-eye text-primary"></i>
                      </span>

                      <div className="flex row gap-2 mb-3">
                        <div className="flex row gap-1 font-sans text-green semi-bold">
                          <span className="text-sm">{"12,000,000"}</span>

                          <i className="icon icon-toman-bold w-2 h-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex column lg-row gap-2 justify-content-center lg-justify-content-between lg-full-width align-items-center">
                    <div className="flex justify-content-center align-items-start full-width lg-w-unset min-w-0">
                      <p className="text-xs text-muted text-ellipsis">
                        {" آخرین بروزرسانی: ۱۴۰۴/۰۳/۲۲ "}
                      </p>
                    </div>

                    <div className="flex row gap-2">
                      <button
                        className="btn-primary font-peyda flex gap-2 align-items-center"
                        type="button"
                      >
                        <i className="icon icon-eye"></i>
                        {" مشاهده "}
                      </button>

                      <button
                        className="btn-secondary w-43px h-43px p-0"
                        type="button"
                      >
                        <i className="icon icon-edit"></i>
                      </button>
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
