// Migrated from pages/account/dashboard.html; edit this React source directly.
import type { Metadata } from "next";

export const metadata: Metadata = { title: "شاپی | داشبورد" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30">
        <div className="flex column gap-5">
          <div className="flex row gap-4 font-peyda lg-grid lg-grid-col-2">
            <div className="flex column justify-content-center align-items-center form fill">
              <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                <div className="p-2 bg-primary-light round-sm absolute -right-2 -top-2">
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
                  <span className="text-xs semi-bold text-green">{"4%+"}</span>

                  <span className="text-xs">{"نسبت به ماه قبل"}</span>
                </div>
              </div>
            </div>

            <div className="flex column justify-content-center align-items-center form fill">
              <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                <div className="p-2 bg-primary-light round-sm absolute -right-2 -top-2">
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
                  <span className="text-xs semi-bold text-green">{"12+"}</span>

                  <span className="text-xs">{"نسبت به ماه قبل"}</span>
                </div>
              </div>
            </div>

            <div className="flex column justify-content-center align-items-center form fill">
              <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                <div className="p-2 bg-primary-light round-sm absolute -right-2 -top-2">
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
                  <span className="text-xs semi-bold text-green">{"21%+"}</span>

                  <span className="text-xs">{"نسبت به ماه قبل"}</span>
                </div>
              </div>
            </div>

            <div className="flex column justify-content-center align-items-center form fill">
              <div className="flex column full-width full-height gap-4 justify-content-center align-items-center relative">
                <div className="p-2 bg-primary-light round-sm absolute -right-2 -top-2">
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
          </div>

          <div className="flex row justify-content-center align-items-center font-peyda form">
            <div className="rating-summary full-width">
              <div className="rating-summary__header">
                <h3>{"امتیاز فروشگاه ها"}</h3>
              </div>

              <div className="rating-summary__body">
                <div className="rating-summary__list">
                  <div className="rating-row">
                    <div className="rating-row__numbers font-sans">
                      <span>{"68%"}</span>

                      <span>{"(87)"}</span>
                    </div>

                    <div className="rating-row__line">
                      <div
                        className="rating-row__progress rating-row__progress--green"
                        style={{ "--value": "68" } as React.CSSProperties}
                      ></div>
                    </div>

                    <div className="rating-row__label">{"عالی"}</div>
                  </div>

                  <div className="rating-row">
                    <div className="rating-row__numbers font-sans">
                      <span>{"20%"}</span>

                      <span>{"(26)"}</span>
                    </div>

                    <div className="rating-row__line">
                      <div
                        className="rating-row__progress rating-row__progress--blue"
                        style={{ "--value": "20" } as React.CSSProperties}
                      ></div>
                    </div>

                    <div className="rating-row__label">{"خوب"}</div>
                  </div>

                  <div className="rating-row">
                    <div className="rating-row__numbers font-sans">
                      <span>{"7%"}</span>

                      <span>{"(9)"}</span>
                    </div>

                    <div className="rating-row__line">
                      <div
                        className="rating-row__progress rating-row__progress--orange"
                        style={{ "--value": "7" } as React.CSSProperties}
                      ></div>
                    </div>

                    <div className="rating-row__label">{"متوسط"}</div>
                  </div>

                  <div className="rating-row">
                    <div className="rating-row__numbers font-sans">
                      <span>{"3%"}</span>

                      <span>{"(4)"}</span>
                    </div>

                    <div className="rating-row__line">
                      <div
                        className="rating-row__progress rating-row__progress--purple"
                        style={{ "--value": "3" } as React.CSSProperties}
                      ></div>
                    </div>

                    <div className="rating-row__label">{"ضعیف"}</div>
                  </div>

                  <div className="rating-row">
                    <div className="rating-row__numbers font-sans">
                      <span>{"2%"}</span>

                      <span>{"(2)"}</span>
                    </div>

                    <div className="rating-row__line">
                      <div
                        className="rating-row__progress rating-row__progress--red"
                        style={{ "--value": "2" } as React.CSSProperties}
                      ></div>
                    </div>

                    <div className="rating-row__label">{"بد"}</div>
                  </div>
                </div>

                <div className="rating-chart">
                  <div className="rating-chart__donut">
                    <div className="rating-chart__center font-sans">
                      <span className="rating-chart__score">{"4.8"}</span>

                      <span className="rating-chart__text">{"از 5"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex row gap-4 lg-grid lg-grid-col-1">
            <div className="form flex column gap-4 full-width">
              <h3 className="font-peyda text-lg font-bold text-text">
                {" بیشترین نظرات مربوط به "}
              </h3>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <span className="font-peyda text-md font-medium text-text">
                    {" آیفون 13 پرو مکس "}
                  </span>
                </div>

                <span className="font-peyda text-muted font-bold">
                  {" 45 نظر "}
                </span>
              </a>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <span className="font-peyda text-md font-medium text-text">
                    {" ساعت هوشمند سامسونگ "}
                  </span>
                </div>

                <span className="font-peyda text-muted font-bold">
                  {" 28 نظر "}
                </span>
              </a>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <span className="font-peyda text-md font-medium text-text">
                    {" مک بوک ایر M2 "}
                  </span>
                </div>

                <span className="font-peyda text-muted font-bold">
                  {" 17 نظر "}
                </span>
              </a>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <span className="font-peyda text-md font-medium text-text">
                    {" مک بوک ایر M2 "}
                  </span>
                </div>

                <span className="font-peyda text-muted font-bold">
                  {" 17 نظر "}
                </span>
              </a>

              <a
                href="#"
                className="btn-primary flex justify-content-center align-items-center font-peyda mt-2"
              >
                {" مشاهده همه "}
              </a>
            </div>

            <div className="form flex column gap-4 full-width">
              <h3 className="font-peyda text-lg font-bold text-text">
                {" فروش های اخیر "}
              </h3>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <div className="flex column gap-1">
                    <span className="font-peyda text-md font-medium text-text">
                      {" آیفون 13 پرو مکس "}
                    </span>

                    <span className="font-peyda text-xs font-medium text-text">
                      {" دسته بندی: موبایل "}
                    </span>
                  </div>
                </div>

                <span className="flex justify-content-center align-items-center font-peyda text-xs font-bold bg-green-transparent w-12 h-4 text-green round-full">
                  {"ارسال شده"}
                </span>
              </a>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <div className="flex column gap-1">
                    <span className="font-peyda text-md font-medium text-text">
                      {" ساعت هوشمند سامسونگ "}
                    </span>

                    <span className="font-peyda text-xs font-medium text-text">
                      {" دسته بندی: ساعت "}
                    </span>
                  </div>
                </div>

                <span className="flex justify-content-center align-items-center font-peyda text-xs font-bold bg-red-light w-12 h-4 text-red round-full">
                  {"نیازمند برسی"}
                </span>
              </a>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <div className="flex column gap-1">
                    <span className="font-peyda text-md font-medium text-text">
                      {" میز چوبی پایه دار "}
                    </span>

                    <span className="font-peyda text-xs font-medium text-text">
                      {" دسته بندی: میز "}
                    </span>
                  </div>
                </div>

                <span className="flex justify-content-center align-items-center font-peyda text-xs font-bold bg-green-transparent w-12 h-4 text-green round-full">
                  {"ارسال شده"}
                </span>
              </a>

              <a
                href="#"
                className="flex align-items-center justify-content-between text-decoration-none"
              >
                <div className="flex align-items-center gap-3">
                  <img
                    src="/assets/placeholders/136x136.svg"
                    alt=""
                    className="w-50px h-50px round-md object-cover"
                  />

                  <div className="flex column gap-1">
                    <span className="font-peyda text-md font-medium text-text">
                      {" مک بوک ایر M2 "}
                    </span>

                    <span className="font-peyda text-xs font-medium text-text">
                      {" دسته بندی: لپتاپ "}
                    </span>
                  </div>
                </div>

                <span className="flex justify-content-center align-items-center font-peyda text-xs font-bold bg-green-transparent w-12 h-4 text-green round-full">
                  {"ارسال شده"}
                </span>
              </a>

              <a
                href="#"
                className="btn-primary flex justify-content-center align-items-center font-peyda mt-2"
              >
                {" مشاهده همه "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
