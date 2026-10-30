export function SiteFooter() {
  return (
    <>
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
                      <a href="#">{"ثبت آگهی"}</a>
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
                  <span className="text-inverse extra-text-md">{"راهنما"}</span>

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
    </>
  );
}
