// Migrated from pages/account/plans.html; edit this React source directly.
import type { Metadata } from "next";

export const metadata: Metadata = { title: "شاپی | اشتراک‌ها" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space lg-hide-scrollbar lg-pb-40 md-pb-32">
        <div className="flex column gap-5 full-height lg-mb-50">
          <div className="flex column gap-6 font-peyda">
            <div className="flex full-width justify-content-between row p-5 lg-column min-h-30 lg-min-h-42 md-min-h-38">
              <div className="w-p6 lg-remove">
                <div>
                  <h1 className="text-xxl bold text-text mb-2 md-text-lg">
                    {" کیف پول من "}
                  </h1>

                  <p className="text-sm md-text-xs text-muted">
                    {"داشبورد / کیف پول"}
                  </p>
                </div>
              </div>

              <div className="form plan-status-card p-6 max-w-50 lg-max-w-unset bg-primary text-white full-width">
                <div className="flex justify-content-between align-items-center mb-4">
                  <div className="flex column gap-1">
                    <span className="text-sm opacity-80">{"پلن فعلی شما"}</span>

                    <h3 className="bold text-xxl mt-2 mb-2">{"رشد"}</h3>
                  </div>

                  <div className="w-50px h-50px flex justify-content-center align-items-center bg-white rounded-full">
                    <i className="icon icon-chart-column text-primary"></i>
                  </div>
                </div>

                <div className="text-xs opacity-70 mb-6 flex align-items-center gap-1">
                  <i className="icon icon-calendar-3 ml-3"></i>

                  <span>{"فعال تا ۳۰ اسفند ۱۴۰۵"}</span>
                </div>

                <div className="divider border-white-opacity-20 my-4"></div>

                <div className="flex justify-content-around text-center mb-6">
                  <div className="flex column align-items-center gap-2">
                    <div className="text-lg bold">{"۱۰"}</div>

                    <span className="text-xs opacity-80">{"آگهی فعال"}</span>
                  </div>

                  <span className="bg-white h-6 opacity-2 round-full w-2px"></span>

                  <div className="flex column align-items-center gap-2">
                    <div className="text-lg bold">{"۱"}</div>

                    <span className="text-xs opacity-80">{"فروشگاه"}</span>
                  </div>

                  <span className="bg-white h-6 opacity-2 round-full w-2px"></span>

                  <div className="flex column align-items-center gap-2">
                    <div className="text-lg bold">{"۱"}</div>

                    <span className="text-xs opacity-80">{"بنر فعال"}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="full-width flex justify-content-center align-items-center gap-2 bg-white text-primary py-3 rounded-12 bold font-peyda relative"
                >
                  <i className="icon icon-refresh-ccw-alt right-4 absolute"></i>
                  {" تمدید پلن "}
                </button>
              </div>
            </div>

            <div
              className="swiper plan-swiper full-width overflow-hidden pl-10 pr-10 pt-5 pb-5 lg-pl-6 lg-pr-6"
              dir="rtl"
            >
              <div className="swiper-wrapper font-peyda">
                <div className="swiper-slide h-auto">
                  <button
                    type="button"
                    className="form full-height flex column relative p-0 plan-green text-right cursor-pointer w-full"
                  >
                    <div
                      className="card-overlay-click"
                      aria-hidden="true"
                    ></div>

                    <div className="p-6 flex column full-height z-1">
                      <div className="w-60px h-60px icon-wrapper flex justify-content-center align-items-center mb-4">
                        <i className="icon icon-rocket w-3 h-3"></i>
                      </div>

                      <h3 className="bold text-xl theme-text mb-2">{"شروع"}</h3>

                      <p className="text-xs text-muted mb-5">
                        {
                          " مناسب برای شروع فعالیت و تست اولیه سیستم مدیریت شاپی "
                        }
                      </p>

                      <div className="flex column gap-3 text-sm mb-6">
                        <div className="flex align-items-center gap-3">
                          <i className="icon icon-tick theme-text text-md"></i>

                          <span className="theme-text">{"۵ آگهی فعال"}</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 flex justify-content-between column">
                        <div className="text-3xl bold theme-text mb-4">
                          {"رایگان"}
                        </div>

                        <div className="full-width plan-button font-peyda py-3 text-center">
                          {" انتخاب پلن "}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="swiper-slide h-auto">
                  <button
                    type="button"
                    className="form full-height flex column relative p-0 plan-primary active-premium-card m-3 text-right cursor-pointer w-full"
                  >
                    <div
                      className="card-overlay-click"
                      aria-hidden="true"
                    ></div>

                    <div className="watermark-mask">
                      <div className="watermark-icon">
                        <i className="icon icon-chart-column h-4 w-4"></i>
                      </div>
                    </div>

                    <div className="p-6 flex column full-height z-1">
                      <div className="w-60px h-60px icon-wrapper flex justify-content-center align-items-center mb-4">
                        <i className="icon icon-chart-column w-3 h-3"></i>
                      </div>

                      <h3 className="bold text-xl theme-text mb-2">{"رشد"}</h3>

                      <p className="text-xs text-muted mb-5">
                        {" بهترین گزینه برای کسب‌وکارهای در حال توسعه "}
                      </p>

                      <div className="flex column gap-3 text-sm mb-6">
                        <div className="flex align-items-center gap-3">
                          <i className="icon icon-tick theme-text text-md"></i>

                          <span className="theme-text">{"۳۰ آگهی فعال"}</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="flex row gap-1 align-items-baseline theme-text mb-4">
                          <span className="text-3xl bold">{"49,000"}</span>

                          <span className="text-xs text-muted font-normal mr-1">
                            {"تومان / ماهانه"}
                          </span>
                        </div>

                        <div className="full-width plan-button font-peyda text-center">
                          {" تمدید پلن کاربری "}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="swiper-slide h-auto">
                  <button
                    type="button"
                    className="form full-height flex column relative p-0 plan-gold m-3 text-right cursor-pointer w-full"
                  >
                    <div
                      className="card-overlay-click"
                      aria-hidden="true"
                    ></div>

                    <div className="p-6 flex column full-height z-1">
                      <div className="w-60px h-60px icon-wrapper flex justify-content-center align-items-center mb-4">
                        <i className="icon icon-crown w-3 h-3"></i>
                      </div>

                      <h3 className="bold text-xl theme-text mb-2">
                        {"پیشرفته"}
                      </h3>

                      <p className="text-xs text-muted mb-5">
                        {
                          " برای حرفه‌ای‌هایی که نیاز به دیده‌شدن حداکثری دارند "
                        }
                      </p>

                      <div className="flex column gap-3 text-sm mb-6">
                        <div className="flex align-items-center gap-3">
                          <i className="icon icon-tick theme-text text-md"></i>

                          <span className="theme-text">{"۱۰۰ آگهی فعال"}</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="flex row gap-1 align-items-baseline theme-text mb-4">
                          <span className="text-3xl bold">{"79,000"}</span>

                          <span className="text-xs text-muted font-normal mr-1">
                            {"تومان / ماهانه"}
                          </span>
                        </div>

                        <div className="full-width plan-button font-peyda text-center">
                          {" انتخاب پلن "}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="swiper-slide h-auto">
                  <button
                    type="button"
                    className="form full-height flex column relative p-0 plan-blue m-3 text-right cursor-pointer w-full"
                  >
                    <div
                      className="card-overlay-click"
                      aria-hidden="true"
                    ></div>

                    <div className="p-6 flex column full-height z-1">
                      <div className="w-60px h-60px icon-wrapper flex justify-content-center align-items-center mb-4">
                        <i className="icon icon-diamond w-3 h-3"></i>
                      </div>

                      <h3 className="bold text-xl theme-text mb-2">
                        {"حرفه‌ای"}
                      </h3>

                      <p className="text-xs text-muted mb-5">
                        {" بدون محدودیت، مجهز به ابزارهای تبلیغاتی VIP "}
                      </p>

                      <div className="flex column gap-3 text-sm mb-6">
                        <div className="flex align-items-center gap-3">
                          <i className="icon icon-tick theme-text text-md"></i>

                          <span className="theme-text">{"۵00 آگهی فعال"}</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="flex row gap-1 align-items-baseline theme-text mb-4">
                          <span className="text-3xl bold">{"149,000"}</span>

                          <span className="text-xs text-muted font-normal mr-1">
                            {"تومان / ماهانه"}
                          </span>
                        </div>

                        <div className="full-width plan-button font-peyda text-center">
                          {" انتخاب پلن "}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="swiper-button-next lg-remove"></div>

              <div className="swiper-button-prev lg-remove"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
