// Migrated from pages/account/sell-factor.html; edit this React source directly.
import type { Metadata } from "next";
import { SearchInput } from "@/components/ui/search-input";
import { Disclosure } from "@/components/ui/disclosure";

export const metadata: Metadata = { title: "شاپی | فاکتورهای فروش" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space lg-hide-scrollbar lg-pb-30 md-pb-20">
        <div className="flex column gap-5 mb-5">
          <section className="pt-10 font-peyda">
            <div className="bg-background inline-space overflow-hidden">
              <div className="flex md-column gap-4 border-bottom pb-4">
                <div className="w-p3 md-full-width md-order-1">
                  <SearchInput
                    type="text"
                    placeholder="جستجو در فروش ها..."
                    className="full-width px-4 py-3 round-md font-peyda input-primary"
                  />
                </div>

                <div className="flex wrap gap-3 md-order-2">
                  <button
                    className="btn-secondary flex align-items-center gap-2 px-4 py-3 font-peyda"
                    type="button"
                  >
                    {" امتیاز برتر "}
                  </button>

                  <button
                    className="btn-secondary flex align-items-center gap-2 px-4 py-3 font-peyda"
                    type="button"
                  >
                    {" همه "}
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className="flex row justify-content-between py-4 px-5 bg-background-alt border-bottom text-muted text-sm md-remove">
                  <div className="">{"محصول"}</div>

                  <div className="text-center">{"عملیات"}</div>
                </div>

                <Disclosure
                  className="sold-item border-bottom"
                  triggerClassName="sold-toggle full-width bg-transparent border-0 cursor-pointer p-0"
                  contentClassName="sold-details"
                  label={
                    <>
                      <div className="flex justify-content-between align-items-center gap-5 py-5">
                        <div className="flex gap-4 align-items-center full-width pr-4">
                          <img decoding="async" loading="lazy"
                            src="/assets/images/example/headphone.jpg"
                            alt=""
                            className="w-10 h-10 round-md object-cover flex-shrink-0"
                          />

                          <div className="flex column gap-2 min-w-0 sm-full-width">
                            <div className="full-width flex row justify-content-between min-w-0">
                              <h3 className="semi-bold m-0 text-sm text-right font-peyda text-ellipsis">
                                {" آیفون 15 پرو مکس 256 گیگ "}
                              </h3>

                              <i className="icon icon-down-2 sold-arrow text-primary ml-4 remove sm-block"></i>
                            </div>

                            <div className="flex column gap-2 wrap text-xs text-muted">
                              <span className="font-peyda flex align-items-center gap-2">
                                <i className="icon icon-user"></i>
                                {" خریدار: محمد رضایی "}
                              </span>

                              <div className="full-width flex row justify-content-between min-w-0">
                                <span className="font-sans flex align-items-center gap-2 text-ellipsis">
                                  <i className="icon icon-calendar-3"></i>
                                  {" ۱۴۰۴/۰۳/۲۸ "}
                                </span>

                                <div className="flex gap-1 semi-bold text-green font-sans ml-4">
                                  <span>{"52,900,000"}</span>

                                  <i className="icon icon-toman-bold"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex row align-items-center full-height gap-7 pl-5 sm-pl-2 sm-remove">
                          <div className="flex column align-items-start md-align-items-start gap-1">
                            <span className="text-xs font-peyda text-muted">
                              {" مبلغ فروش "}
                            </span>

                            <div className="flex gap-1 semi-bold text-green font-sans">
                              <span>{"52,900,000"}</span>

                              <i className="icon icon-toman-bold"></i>
                            </div>
                          </div>

                          <div className="bg-green-light text-green px-4 py-2 round-full text-xs semi-bold font-peyda">
                            {" فروش "}
                          </div>

                          <i className="icon icon-down-2 sold-arrow text-primary"></i>
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" شماره سفارش "}
                      </span>

                      <div className="semi-bold mt-2">{"ORD-548721"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" روش پرداخت "}
                      </span>

                      <div className="semi-bold mt-2">
                        {"کیف پول "}
                        <span className="text-primary">{"شاپی"}</span>
                      </div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"روش ارسال"}</span>

                      <div className="semi-bold mt-2">{"تیپاکس"}</div>
                    </div>
                  </div>

                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">{"شماره تلفن"}</span>

                      <div className="semi-bold mt-2">{"09125739429"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"کد پستی"}</span>

                      <div className="semi-bold mt-2">{" 1234567910 "}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {"نام و نام خواندگی"}
                      </span>

                      <div className="semi-bold mt-2">{"محمد باقری"}</div>
                    </div>
                  </div>

                  <div className="form p-4 mt-4 mb-5 ml-2 mr-2">
                    <div className="flex align-items-center gap-3 mb-4">
                      <div className="w-48px h-48px round-full bg-primary-light flex justify-content-center align-items-center">
                        <i className="icon icon-map-point text-primary"></i>
                      </div>

                      <div>
                        <div className="semi-bold">{"آدرس کامل"}</div>

                        <div className="text-muted text-sm">{"محمد باقری"}</div>
                      </div>
                    </div>

                    <div className="text-sm text-text">
                      {
                        " کردان، اتوبان کرج، قزوین، کیلومتر3 داخل جاده، ابتدای بلوار شهدا، پلاک 53 "
                      }
                    </div>
                  </div>
                </Disclosure>

                <Disclosure
                  className="sold-item border-bottom"
                  triggerClassName="sold-toggle full-width bg-transparent border-0 cursor-pointer p-0"
                  contentClassName="sold-details"
                  label={
                    <>
                      <div className="flex justify-content-between align-items-center gap-5 py-5">
                        <div className="flex gap-4 align-items-center full-width pr-4">
                          <img decoding="async" loading="lazy"
                            src="/assets/images/example/iPhone-16-Concept-R1.png"
                            alt=""
                            className="w-10 h-10 round-md object-cover flex-shrink-0"
                          />

                          <div className="flex column gap-2 min-w-0 sm-full-width">
                            <div className="full-width flex row justify-content-between min-w-0">
                              <h3 className="semi-bold m-0 text-sm text-right font-peyda text-ellipsis">
                                {" آیفون 15 پرو مکس 256 گیگ "}
                              </h3>

                              <i className="icon icon-down-2 sold-arrow text-primary ml-4 remove sm-block"></i>
                            </div>

                            <div className="flex column gap-2 wrap text-xs text-muted">
                              <span className="font-peyda flex align-items-center gap-2">
                                <i className="icon icon-user"></i>
                                {" خریدار: محمد رضایی "}
                              </span>

                              <div className="full-width flex row justify-content-between min-w-0">
                                <span className="font-sans flex align-items-center gap-2 text-ellipsis">
                                  <i className="icon icon-calendar-3"></i>
                                  {" ۱۴۰۴/۰۳/۲۸ "}
                                </span>

                                <div className="flex gap-1 semi-bold text-green font-sans ml-4">
                                  <span>{"52,900,000"}</span>

                                  <i className="icon icon-toman-bold"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex row align-items-center full-height gap-7 pl-5 sm-pl-2 sm-remove">
                          <div className="flex column align-items-start md-align-items-start gap-1">
                            <span className="text-xs font-peyda text-muted">
                              {" مبلغ فروش "}
                            </span>

                            <div className="flex gap-1 semi-bold text-green font-sans">
                              <span>{"52,900,000"}</span>

                              <i className="icon icon-toman-bold"></i>
                            </div>
                          </div>

                          <div className="bg-green-light text-green px-4 py-2 round-full text-xs semi-bold font-peyda">
                            {" فروش "}
                          </div>

                          <i className="icon icon-down-2 sold-arrow text-primary"></i>
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" شماره سفارش "}
                      </span>

                      <div className="semi-bold mt-2">{"ORD-548721"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" روش پرداخت "}
                      </span>

                      <div className="semi-bold mt-2">
                        {"کیف پول "}
                        <span className="text-primary">{"شاپی"}</span>
                      </div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"روش ارسال"}</span>

                      <div className="semi-bold mt-2">{"تیپاکس"}</div>
                    </div>
                  </div>

                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">{"شماره تلفن"}</span>

                      <div className="semi-bold mt-2">{"09125739429"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"کد پستی"}</span>

                      <div className="semi-bold mt-2">{" 1234567910 "}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {"نام و نام خواندگی"}
                      </span>

                      <div className="semi-bold mt-2">{"محمد باقری"}</div>
                    </div>
                  </div>

                  <div className="form p-4 mt-4 mb-5 ml-2 mr-2">
                    <div className="flex align-items-center gap-3 mb-4">
                      <div className="w-48px h-48px round-full bg-primary-light flex justify-content-center align-items-center">
                        <i className="icon icon-map-point text-primary"></i>
                      </div>

                      <div>
                        <div className="semi-bold">{"آدرس کامل"}</div>

                        <div className="text-muted text-sm">{"محمد باقری"}</div>
                      </div>
                    </div>

                    <div className="text-sm text-text">
                      {
                        " کردان، اتوبان کرج، قزوین، کیلومتر3 داخل جاده، ابتدای بلوار شهدا، پلاک 53 "
                      }
                    </div>
                  </div>
                </Disclosure>

                <Disclosure
                  className="sold-item border-bottom"
                  triggerClassName="sold-toggle full-width bg-transparent border-0 cursor-pointer p-0"
                  contentClassName="sold-details"
                  label={
                    <>
                      <div className="flex justify-content-between align-items-center gap-5 py-5">
                        <div className="flex gap-4 align-items-center full-width pr-4">
                          <img decoding="async" loading="lazy"
                            src="/assets/images/example/headphone.jpg"
                            alt=""
                            className="w-10 h-10 round-md object-cover flex-shrink-0"
                          />

                          <div className="flex column gap-2 min-w-0 sm-full-width">
                            <div className="full-width flex row justify-content-between min-w-0">
                              <h3 className="semi-bold m-0 text-sm text-right font-peyda text-ellipsis">
                                {" آیفون 15 پرو مکس 256 گیگ "}
                              </h3>

                              <i className="icon icon-down-2 sold-arrow text-primary ml-4 remove sm-block"></i>
                            </div>

                            <div className="flex column gap-2 wrap text-xs text-muted">
                              <span className="font-peyda flex align-items-center gap-2">
                                <i className="icon icon-user"></i>
                                {" خریدار: محمد رضایی "}
                              </span>

                              <div className="full-width flex row justify-content-between min-w-0">
                                <span className="font-sans flex align-items-center gap-2 text-ellipsis">
                                  <i className="icon icon-calendar-3"></i>
                                  {" ۱۴۰۴/۰۳/۲۸ "}
                                </span>

                                <div className="flex gap-1 semi-bold text-green font-sans ml-4">
                                  <span>{"52,900,000"}</span>

                                  <i className="icon icon-toman-bold"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex row align-items-center full-height gap-7 pl-5 sm-pl-2 sm-remove">
                          <div className="flex column align-items-start md-align-items-start gap-1">
                            <span className="text-xs font-peyda text-muted">
                              {" مبلغ فروش "}
                            </span>

                            <div className="flex gap-1 semi-bold text-green font-sans">
                              <span>{"52,900,000"}</span>

                              <i className="icon icon-toman-bold"></i>
                            </div>
                          </div>

                          <div className="bg-green-light text-green px-4 py-2 round-full text-xs semi-bold font-peyda">
                            {" فروش "}
                          </div>

                          <i className="icon icon-down-2 sold-arrow text-primary"></i>
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" شماره سفارش "}
                      </span>

                      <div className="semi-bold mt-2">{"ORD-548721"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" روش پرداخت "}
                      </span>

                      <div className="semi-bold mt-2">
                        {"کیف پول "}
                        <span className="text-primary">{"شاپی"}</span>
                      </div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"روش ارسال"}</span>

                      <div className="semi-bold mt-2">{"تیپاکس"}</div>
                    </div>
                  </div>

                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">{"شماره تلفن"}</span>

                      <div className="semi-bold mt-2">{"09125739429"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"کد پستی"}</span>

                      <div className="semi-bold mt-2">{" 1234567910 "}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {"نام و نام خواندگی"}
                      </span>

                      <div className="semi-bold mt-2">{"محمد باقری"}</div>
                    </div>
                  </div>

                  <div className="form p-4 mt-4 mb-5 ml-2 mr-2">
                    <div className="flex align-items-center gap-3 mb-4">
                      <div className="w-48px h-48px round-full bg-primary-light flex justify-content-center align-items-center">
                        <i className="icon icon-map-point text-primary"></i>
                      </div>

                      <div>
                        <div className="semi-bold">{"آدرس کامل"}</div>

                        <div className="text-muted text-sm">{"محمد باقری"}</div>
                      </div>
                    </div>

                    <div className="text-sm text-text">
                      {
                        " کردان، اتوبان کرج، قزوین، کیلومتر3 داخل جاده، ابتدای بلوار شهدا، پلاک 53 "
                      }
                    </div>
                  </div>
                </Disclosure>

                <Disclosure
                  className="sold-item border-bottom"
                  triggerClassName="sold-toggle full-width bg-transparent border-0 cursor-pointer p-0"
                  contentClassName="sold-details"
                  label={
                    <>
                      <div className="flex justify-content-between align-items-center gap-5 py-5">
                        <div className="flex gap-4 align-items-center full-width pr-4">
                          <img decoding="async" loading="lazy"
                            src="/assets/images/example/iPhone-16-Concept-R1.png"
                            alt=""
                            className="w-10 h-10 round-md object-cover flex-shrink-0"
                          />

                          <div className="flex column gap-2 min-w-0 sm-full-width">
                            <div className="full-width flex row justify-content-between min-w-0">
                              <h3 className="semi-bold m-0 text-sm text-right font-peyda text-ellipsis">
                                {" آیفون 15 پرو مکس 256 گیگ "}
                              </h3>

                              <i className="icon icon-down-2 sold-arrow text-primary ml-4 remove sm-block"></i>
                            </div>

                            <div className="flex column gap-2 wrap text-xs text-muted">
                              <span className="font-peyda flex align-items-center gap-2">
                                <i className="icon icon-user"></i>
                                {" خریدار: محمد رضایی "}
                              </span>

                              <div className="full-width flex row justify-content-between min-w-0">
                                <span className="font-sans flex align-items-center gap-2 text-ellipsis">
                                  <i className="icon icon-calendar-3"></i>
                                  {" ۱۴۰۴/۰۳/۲۸ "}
                                </span>

                                <div className="flex gap-1 semi-bold text-green font-sans ml-4">
                                  <span>{"52,900,000"}</span>

                                  <i className="icon icon-toman-bold"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex row align-items-center full-height gap-7 pl-5 sm-pl-2 sm-remove">
                          <div className="flex column align-items-start md-align-items-start gap-1">
                            <span className="text-xs font-peyda text-muted">
                              {" مبلغ فروش "}
                            </span>

                            <div className="flex gap-1 semi-bold text-green font-sans">
                              <span>{"52,900,000"}</span>

                              <i className="icon icon-toman-bold"></i>
                            </div>
                          </div>

                          <div className="bg-green-light text-green px-4 py-2 round-full text-xs semi-bold font-peyda">
                            {" فروش "}
                          </div>

                          <i className="icon icon-down-2 sold-arrow text-primary"></i>
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" شماره سفارش "}
                      </span>

                      <div className="semi-bold mt-2">{"ORD-548721"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" روش پرداخت "}
                      </span>

                      <div className="semi-bold mt-2">
                        {"کیف پول "}
                        <span className="text-primary">{"شاپی"}</span>
                      </div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"روش ارسال"}</span>

                      <div className="semi-bold mt-2">{"تیپاکس"}</div>
                    </div>
                  </div>

                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">{"شماره تلفن"}</span>

                      <div className="semi-bold mt-2">{"09125739429"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"کد پستی"}</span>

                      <div className="semi-bold mt-2">{" 1234567910 "}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {"نام و نام خواندگی"}
                      </span>

                      <div className="semi-bold mt-2">{"محمد باقری"}</div>
                    </div>
                  </div>

                  <div className="form p-4 mt-4 mb-5 ml-2 mr-2">
                    <div className="flex align-items-center gap-3 mb-4">
                      <div className="w-48px h-48px round-full bg-primary-light flex justify-content-center align-items-center">
                        <i className="icon icon-map-point text-primary"></i>
                      </div>

                      <div>
                        <div className="semi-bold">{"آدرس کامل"}</div>

                        <div className="text-muted text-sm">{"محمد باقری"}</div>
                      </div>
                    </div>

                    <div className="text-sm text-text">
                      {
                        " کردان، اتوبان کرج، قزوین، کیلومتر3 داخل جاده، ابتدای بلوار شهدا، پلاک 53 "
                      }
                    </div>
                  </div>
                </Disclosure>

                <Disclosure
                  className="sold-item border-bottom"
                  triggerClassName="sold-toggle full-width bg-transparent border-0 cursor-pointer p-0"
                  contentClassName="sold-details"
                  label={
                    <>
                      <div className="flex justify-content-between align-items-center gap-5 py-5">
                        <div className="flex gap-4 align-items-center full-width pr-4">
                          <img decoding="async" loading="lazy"
                            src="/assets/images/example/headphone.jpg"
                            alt=""
                            className="w-10 h-10 round-md object-cover flex-shrink-0"
                          />

                          <div className="flex column gap-2 min-w-0 sm-full-width">
                            <div className="full-width flex row justify-content-between min-w-0">
                              <h3 className="semi-bold m-0 text-sm text-right font-peyda text-ellipsis">
                                {" آیفون 15 پرو مکس 256 گیگ "}
                              </h3>

                              <i className="icon icon-down-2 sold-arrow text-primary ml-4 remove sm-block"></i>
                            </div>

                            <div className="flex column gap-2 wrap text-xs text-muted">
                              <span className="font-peyda flex align-items-center gap-2">
                                <i className="icon icon-user"></i>
                                {" خریدار: محمد رضایی "}
                              </span>

                              <div className="full-width flex row justify-content-between min-w-0">
                                <span className="font-sans flex align-items-center gap-2 text-ellipsis">
                                  <i className="icon icon-calendar-3"></i>
                                  {" ۱۴۰۴/۰۳/۲۸ "}
                                </span>

                                <div className="flex gap-1 semi-bold text-green font-sans ml-4">
                                  <span>{"52,900,000"}</span>

                                  <i className="icon icon-toman-bold"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex row align-items-center full-height gap-7 pl-5 sm-pl-2 sm-remove">
                          <div className="flex column align-items-start md-align-items-start gap-1">
                            <span className="text-xs font-peyda text-muted">
                              {" مبلغ فروش "}
                            </span>

                            <div className="flex gap-1 semi-bold text-green font-sans">
                              <span>{"52,900,000"}</span>

                              <i className="icon icon-toman-bold"></i>
                            </div>
                          </div>

                          <div className="bg-green-light text-green px-4 py-2 round-full text-xs semi-bold font-peyda">
                            {" فروش "}
                          </div>

                          <i className="icon icon-down-2 sold-arrow text-primary"></i>
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" شماره سفارش "}
                      </span>

                      <div className="semi-bold mt-2">{"ORD-548721"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" روش پرداخت "}
                      </span>

                      <div className="semi-bold mt-2">
                        {"کیف پول "}
                        <span className="text-primary">{"شاپی"}</span>
                      </div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"روش ارسال"}</span>

                      <div className="semi-bold mt-2">{"تیپاکس"}</div>
                    </div>
                  </div>

                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">{"شماره تلفن"}</span>

                      <div className="semi-bold mt-2">{"09125739429"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"کد پستی"}</span>

                      <div className="semi-bold mt-2">{" 1234567910 "}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {"نام و نام خواندگی"}
                      </span>

                      <div className="semi-bold mt-2">{"محمد باقری"}</div>
                    </div>
                  </div>

                  <div className="form p-4 mt-4 mb-5 ml-2 mr-2">
                    <div className="flex align-items-center gap-3 mb-4">
                      <div className="w-48px h-48px round-full bg-primary-light flex justify-content-center align-items-center">
                        <i className="icon icon-map-point text-primary"></i>
                      </div>

                      <div>
                        <div className="semi-bold">{"آدرس کامل"}</div>

                        <div className="text-muted text-sm">{"محمد باقری"}</div>
                      </div>
                    </div>

                    <div className="text-sm text-text">
                      {
                        " کردان، اتوبان کرج، قزوین، کیلومتر3 داخل جاده، ابتدای بلوار شهدا، پلاک 53 "
                      }
                    </div>
                  </div>
                </Disclosure>

                <Disclosure
                  className="sold-item border-bottom"
                  triggerClassName="sold-toggle full-width bg-transparent border-0 cursor-pointer p-0"
                  contentClassName="sold-details"
                  label={
                    <>
                      <div className="flex justify-content-between align-items-center gap-5 py-5">
                        <div className="flex gap-4 align-items-center full-width pr-4">
                          <img decoding="async" loading="lazy"
                            src="/assets/images/example/iPhone-16-Concept-R1.png"
                            alt=""
                            className="w-10 h-10 round-md object-cover flex-shrink-0"
                          />

                          <div className="flex column gap-2 min-w-0 sm-full-width">
                            <div className="full-width flex row justify-content-between min-w-0">
                              <h3 className="semi-bold m-0 text-sm text-right font-peyda text-ellipsis">
                                {" آیفون 15 پرو مکس 256 گیگ "}
                              </h3>

                              <i className="icon icon-down-2 sold-arrow text-primary ml-4 remove sm-block"></i>
                            </div>

                            <div className="flex column gap-2 wrap text-xs text-muted">
                              <span className="font-peyda flex align-items-center gap-2">
                                <i className="icon icon-user"></i>
                                {" خریدار: محمد رضایی "}
                              </span>

                              <div className="full-width flex row justify-content-between min-w-0">
                                <span className="font-sans flex align-items-center gap-2 text-ellipsis">
                                  <i className="icon icon-calendar-3"></i>
                                  {" ۱۴۰۴/۰۳/۲۸ "}
                                </span>

                                <div className="flex gap-1 semi-bold text-green font-sans ml-4">
                                  <span>{"52,900,000"}</span>

                                  <i className="icon icon-toman-bold"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex row align-items-center full-height gap-7 pl-5 sm-pl-2 sm-remove">
                          <div className="flex column align-items-start md-align-items-start gap-1">
                            <span className="text-xs font-peyda text-muted">
                              {" مبلغ فروش "}
                            </span>

                            <div className="flex gap-1 semi-bold text-green font-sans">
                              <span>{"52,900,000"}</span>

                              <i className="icon icon-toman-bold"></i>
                            </div>
                          </div>

                          <div className="bg-green-light text-green px-4 py-2 round-full text-xs semi-bold font-peyda">
                            {" فروش "}
                          </div>

                          <i className="icon icon-down-2 sold-arrow text-primary"></i>
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" شماره سفارش "}
                      </span>

                      <div className="semi-bold mt-2">{"ORD-548721"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {" روش پرداخت "}
                      </span>

                      <div className="semi-bold mt-2">
                        {"کیف پول "}
                        <span className="text-primary">{"شاپی"}</span>
                      </div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"روش ارسال"}</span>

                      <div className="semi-bold mt-2">{"تیپاکس"}</div>
                    </div>
                  </div>

                  <div className="grid grid-col-3 md-grid-col-1 gap-4 pt-5 pb-5 pl-2 pr-2 border-top">
                    <div className="form p-4">
                      <span className="text-muted text-xs">{"شماره تلفن"}</span>

                      <div className="semi-bold mt-2">{"09125739429"}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">{"کد پستی"}</span>

                      <div className="semi-bold mt-2">{" 1234567910 "}</div>
                    </div>

                    <div className="form p-4">
                      <span className="text-muted text-xs">
                        {"نام و نام خواندگی"}
                      </span>

                      <div className="semi-bold mt-2">{"محمد باقری"}</div>
                    </div>
                  </div>

                  <div className="form p-4 mt-4 mb-5 ml-2 mr-2">
                    <div className="flex align-items-center gap-3 mb-4">
                      <div className="w-48px h-48px round-full bg-primary-light flex justify-content-center align-items-center">
                        <i className="icon icon-map-point text-primary"></i>
                      </div>

                      <div>
                        <div className="semi-bold">{"آدرس کامل"}</div>

                        <div className="text-muted text-sm">{"محمد باقری"}</div>
                      </div>
                    </div>

                    <div className="text-sm text-text">
                      {
                        " کردان، اتوبان کرج، قزوین، کیلومتر3 داخل جاده، ابتدای بلوار شهدا، پلاک 53 "
                      }
                    </div>
                  </div>
                </Disclosure>
              </div>
            </div>
          </section>

          <div className="flex md-column gap-4 full-width justify-content-between align-items-center inline-space">
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
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all sm-remove"
                  type="button"
                >
                  {" 3 "}
                </button>

                <span className="pr-2 pl-2 opacity-5 sm-remove">{"..."}</span>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all sm-remove"
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

            <div className="text-muted text-sm font-sans">
              {" نمایش 1 تا 5 از 128 نظر "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
