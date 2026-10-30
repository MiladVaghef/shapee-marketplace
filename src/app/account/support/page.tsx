// Migrated from pages/account/support.html; edit this React source directly.
import type { Metadata } from "next";
import { SelectField } from "@/components/ui/select-field";
import { Disclosure } from "@/components/ui/disclosure";

export const metadata: Metadata = { title: "شاپی | پشتیبانی" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30 md-pb-20">
        <div className="flex column gap-5">
          <div className="form md-p-0 md-shadow-unset p-6 font-peyda">
            <div className="flex justify-content-between align-items-center mb-7">
              <div>
                <h2 className="text-lg semi-bold m-0">{"ثبت تیکت جدید"}</h2>

                <span className="text-muted text-sm">
                  {" سوال یا مشکل خود را برای تیم پشتیبانی ارسال کنید. "}
                </span>
              </div>

              <div className="w-60px h-60px round-full bg-primary-light flex justify-content-center align-items-center">
                <i className="icon icon-message-text text-primary text-xl"></i>
              </div>
            </div>

            <div className="flex column gap-5">
              <div className="flex column">
                <label className="flex align-items-center text-sm text-muted mb-2">
                  {" عنوان تیکت "}
                  <span className="text-red font-sans mr-2">{"*"}</span>
                </label>

                <input
                  type="text"
                  placeholder="مثال: مشکل در ثبت آگهی"
                  className="input-primary full-width font-peyda"
                />
              </div>

              <div className="flex md-column gap-5">
                <div className="flex column full-width">
                  <label className="flex align-items-center text-sm text-muted mb-2">
                    {" دسته بندی "}
                    <span className="text-red font-sans mr-2">{"*"}</span>
                  </label>

                  <SelectField
                    className="custom-select font-peyda"
                    name=""
                    placeholder="انتخاب دسته‌بندی"
                    options={[
                      { value: "پشتیبانی فنی", label: "پشتیبانی فنی" },
                      { value: "امور مالی", label: "امور مالی" },
                      { value: "احراز هویت", label: "احراز هویت" },
                      { value: "گزارش تخلف", label: "گزارش تخلف" },
                      { value: "پیشنهادات", label: "پیشنهادات" },
                    ]}
                  />
                </div>

                <div className="flex column gap-2 pr-3 lg-p-0 full-width">
                  <label
                    htmlFor="phone"
                    className="flex font-peyda text-sm text-muted mb-2"
                  >
                    {" اولویت "}
                    <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                      {"*"}
                    </span>
                  </label>

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
                      className="radio-button font-peyda text-sm md-text-xs"
                    >
                      {" آکبند "}
                    </label>

                    <input
                      type="radio"
                      id="status-barely-used"
                      name="login-type"
                      className="radio-hidden"
                    />

                    <label
                      htmlFor="status-barely-used"
                      className="radio-button font-peyda text-sm md-text-xs"
                    >
                      {" درحد نو "}
                    </label>

                    <input
                      type="radio"
                      id="status-used"
                      name="login-type"
                      className="radio-hidden"
                    />

                    <label
                      htmlFor="status-used"
                      className="radio-button font-peyda text-sm md-text-xs"
                    >
                      {" کارکرده "}
                    </label>

                    <input
                      type="radio"
                      id="status-broken"
                      name="login-type"
                      className="radio-hidden"
                    />

                    <label
                      htmlFor="status-broken"
                      className="radio-button font-peyda text-sm md-text-xs"
                    >
                      {" نیازمند تعمیر "}
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex column">
                <label
                  htmlFor="phone"
                  className="flex font-peyda text-sm text-muted mb-2"
                >
                  {" توضیحات "}
                  <span className="flex align-items-center justify-content-center text-red font-sans mr-1">
                    {"*"}
                  </span>
                </label>

                <textarea
                  rows={8}
                  className="input-primary full-width font-peyda resize-none"
                  placeholder="لطفا مشکل خود را به صورت کامل توضیح دهید..."
                />
              </div>

              <div className="flex column">
                <label className="text-sm text-muted mb-2">
                  {" فایل ضمیمه (اختیاری) "}
                </label>

                <label className="input-primary full-width flex justify-content-between align-items-center cursor-pointer">
                  <input type="file" hidden />

                  <span>{"انتخاب فایل"}</span>

                  <i className="icon icon-paperclip text-primary"></i>
                </label>

                <span className="text-xs text-muted mt-2">
                  {" فرمت‌های مجاز: JPG , PNG , PDF , ZIP "}
                </span>
              </div>
            </div>

            <div className="flex md-column gap-4 mt-8">
              <button className="btn-primary font-peyda" type="button">
                <i className="icon icon-send-2 ml-2"></i>
                {" ارسال تیکت "}
              </button>

              <button className="btn-secondary font-peyda" type="button">
                {"انصراف"}
              </button>
            </div>
          </div>

          <section className="font-peyda full-width">
            <div className="flex row md-column full-width gap-5">
              <div className="full-width">
                <div className="form p-0 overflow-hidden">
                  <div className="p-5 border-bottom">
                    <h3 className="semi-bold text-lg m-0">
                      {"راه‌های ارتباطی با ما"}
                    </h3>
                  </div>

                  <div className="flex justify-content-between align-items-center p-5 border-bottom">
                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" گفتگوی آنلاین "}
                      </span>

                      <span className="text-xs text-muted">
                        {" همه حالا با پشتیبانی ما صحبت کنید "}
                      </span>
                    </div>

                    <div className="w-52px h-52px round-full bg-primary-light flex justify-content-center align-items-center">
                      <i className="icon icon-chat-sms text-primary"></i>
                    </div>
                  </div>

                  <div className="flex justify-content-between align-items-center p-5 border-bottom">
                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" تلفن پشتیبانی "}
                      </span>

                      <span className="font-sans text-sm">
                        {" 021-91090000 "}
                      </span>

                      <span className="text-xs text-muted">
                        {" همه روزه از 8 صبح تا 9 شب "}
                      </span>
                    </div>

                    <div className="w-52px h-52px round-full bg-primary-light flex justify-content-center align-items-center">
                      <i className="icon icon-headphone text-primary"></i>
                    </div>
                  </div>

                  <div className="flex justify-content-between align-items-center p-5">
                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" ایمیل پشتیبانی "}
                      </span>

                      <span className="font-sans text-sm">
                        {" support@shapee.com "}
                      </span>

                      <span className="text-xs text-muted">
                        {" پاسخ در کمتر از 24 ساعت "}
                      </span>
                    </div>

                    <div className="w-52px h-52px round-full bg-primary-light flex justify-content-center align-items-center">
                      <i className="icon icon-mail text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="full-width">
                <div className="form p-0 overflow-hidden">
                  <div className="flex justify-content-between align-items-center p-5 border-bottom">
                    <h3 className="semi-bold text-lg m-0">{"سوالات متداول"}</h3>
                  </div>

                  <div className="accordion">
                    <Disclosure
                      className="accordion-item border-bottom"
                      triggerClassName="accordion-trigger font-peyda"
                      contentClassName="accordion-content"
                      label={
                        <>
                          <span className="text-md">
                            {"چگونه می‌توانم در شاپی آگهی ثبت کنم؟"}
                          </span>

                          <i className="icon icon-down-2 accordion-icon"></i>
                        </>
                      }
                    >
                      <div className="accordion-body">
                        {
                          " پس از ثبت نام، وارد پنل کاربری شوید و از بخش ثبت آگهی اطلاعات محصول، خدمات یا فروشگاه خود را ثبت نمایید. "
                        }
                      </div>
                    </Disclosure>

                    <Disclosure
                      className="accordion-item border-bottom"
                      triggerClassName="accordion-trigger font-peyda"
                      contentClassName="accordion-content"
                      label={
                        <>
                          <span className="text-md">
                            {"هزینه ثبت آگهی چقدر است؟"}
                          </span>

                          <i className="icon icon-down-2 accordion-icon"></i>
                        </>
                      }
                    >
                      <div className="accordion-body">
                        {
                          " ثبت آگهی عادی رایگان است و پلن‌های ویژه امکانات بیشتری ارائه می‌کنند. "
                        }
                      </div>
                    </Disclosure>

                    <Disclosure
                      className="accordion-item border-bottom"
                      triggerClassName="accordion-trigger font-peyda"
                      contentClassName="accordion-content"
                      label={
                        <>
                          <span className="text-md">
                            {"چگونه وضعیت سفارش خود را پیگیری کنم؟"}
                          </span>

                          <i className="icon icon-down-2 accordion-icon"></i>
                        </>
                      }
                    >
                      <div className="accordion-body">
                        {
                          " از طریق پنل کاربری و بخش سفارشات می‌توانید وضعیت سفارش را مشاهده نمایید. "
                        }
                      </div>
                    </Disclosure>

                    <Disclosure
                      className="accordion-item border-bottom"
                      triggerClassName="accordion-trigger font-peyda"
                      contentClassName="accordion-content"
                      label={
                        <>
                          <span className="text-md">
                            {"روش‌های پرداخت در شاپی کدامند؟"}
                          </span>

                          <i className="icon icon-down-2 accordion-icon"></i>
                        </>
                      }
                    >
                      <div className="accordion-body">
                        {
                          " پرداخت آنلاین، کیف پول شاپی و پرداخت مستقیم از جمله روش‌های موجود هستند. "
                        }
                      </div>
                    </Disclosure>

                    <Disclosure
                      className="accordion-item"
                      triggerClassName="accordion-trigger font-peyda"
                      contentClassName="accordion-content"
                      label={
                        <>
                          <span className="text-md">
                            {"چگونه می‌توانم آگهی خود را ویرایش یا حذف کنم؟"}
                          </span>

                          <i className="icon icon-down-2 accordion-icon"></i>
                        </>
                      }
                    >
                      <div className="accordion-body">
                        {
                          " از بخش آگهی‌های من می‌توانید آگهی را ویرایش، تمدید یا حذف کنید. "
                        }
                      </div>
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>

            <div className="form mt-5 bg-primary-light overflow-hidden md-mb-10">
              <div className="flex lg-column justify-content-between align-items-center p-6">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/images/example/pink-headphone.webp"
                  alt=""
                  className="w-18 lg-mb-5"
                />

                <div className="flex column align-items-center text-align-center">
                  <h2 className="semi-bold text-xl mb-3">
                    {"هنوز سوالی دارید؟"}
                  </h2>

                  <p className="text-muted mb-5">
                    {" تیم پشتیبانی ما آماده پاسخگویی به شماست. "}
                  </p>

                  <button className="btn-primary px-8 font-peyda" type="button">
                    <i className="icon icon-sms-tracking ml-2"></i>
                    {" گفتگوی آنلاین "}
                  </button>
                </div>

                <div className="w-18 lg-remove"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
