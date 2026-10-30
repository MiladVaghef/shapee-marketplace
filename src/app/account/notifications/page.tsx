// Migrated from pages/account/notifications.html; edit this React source directly.
import type { Metadata } from "next";

export const metadata: Metadata = { title: "شاپی | اعلان‌ها" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30 md-pb-20">
        <div className="flex column gap-5 full-height">
          <div className="pb-7 font-peyda flex column gap-7 mt-3">
            <div className="flex column gap-3 font-peyda">
              <h1 className="m-0 semi-bold text-xxl md-text-xl">
                {" اخرین اعلانات "}
              </h1>
            </div>

            <div className="flex column gap-3">
              <div className="form p-4">
                <div className="flex md-column justify-content-between align-items-center gap-5 md-gap-2 flex-wrap md-align-items-start">
                  <div className="flex justify-content-center align-items-center md-align-items-start md-column gap-4 md-gap-1 min-w-0 md-full-width">
                    <div className="flex align-items-center md-justify-content-between gap-4 md-full-width">
                      <div className="w-60px h-60px round-md bg-green-light flex justify-content-center align-items-center flex-shrink-0">
                        <i className="icon icon-shield-check text-green text-xl"></i>
                      </div>

                      <span className="bg-green-light text-green px-3 py-1 round-full text-xs semi-bold">
                        {" تایید شد "}
                      </span>
                    </div>

                    <p className="semi-bold min-w-0 md-text-sm m-0 md-mt-4 md-mb-2">
                      {
                        " آگهی شما با عنوان «آیفون ۱۳ پرو مکس» تایید و منتشر شد. "
                      }
                    </p>
                  </div>

                  <div className="flex align-items-center gap-3 flex-shrink-0">
                    <span className="text-muted text-sm">{"۱۰ دقیقه پیش"}</span>

                    <span className="w-8px h-8px round-full bg-primary"></span>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex md-column justify-content-between align-items-center md-align-items-start gap-5 md-gap-2 flex-wrap">
                  <div className="flex md-column align-items-center md-align-items-start gap-4 md-gap-1 min-w-0 md-full-width">
                    <div className="flex align-items-center md-justify-content-between gap-4 md-full-width">
                      <div className="w-60px h-60px round-md bg-primary-light flex justify-content-center align-items-center flex-shrink-0">
                        <i className="icon icon-chat-sms text-primary text-xl"></i>
                      </div>

                      <span className="bg-primary-light text-primary px-3 py-1 round-full text-xs semi-bold">
                        {" پیام جدید "}
                      </span>
                    </div>

                    <p className="semi-bold min-w-0 md-text-sm m-0 md-mt-4 md-mb-2">
                      {" شما یک پیام جدید از کاربر علی احمدی دریافت کردید. "}
                    </p>
                  </div>

                  <div className="flex align-items-center gap-3 flex-shrink-0">
                    <span className="text-muted text-sm">{"۲۳ دقیقه پیش"}</span>

                    <span className="w-8px h-8px round-full bg-primary"></span>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex md-column justify-content-between align-items-center md-align-items-start gap-5 md-gap-2 flex-wrap">
                  <div className="flex md-column align-items-center md-align-items-start gap-4 md-gap-1 min-w-0 md-full-width">
                    <div className="flex align-items-center md-justify-content-between gap-4 md-full-width">
                      <div className="w-60px h-60px round-md bg-gold-light flex justify-content-center align-items-center flex-shrink-0">
                        <i className="icon icon-wallet text-gold text-xl"></i>
                      </div>

                      <span className="bg-gold-light text-gold px-3 py-1 round-full text-xs semi-bold">
                        {" پرداخت موفق "}
                      </span>
                    </div>

                    <p className="semi-bold min-w-0 md-text-sm m-0 md-mt-4 md-mb-2">
                      {" مبلغ ۳۴۵,۰۰۰ تومان به کیف پول شما اضافه شد. "}
                    </p>
                  </div>

                  <div className="flex align-items-center gap-3 flex-shrink-0">
                    <span className="text-muted text-sm">{"۱ ساعت پیش"}</span>

                    <span className="w-8px h-8px round-full bg-primary"></span>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex md-column justify-content-between align-items-center md-align-items-start gap-5 md-gap-2 flex-wrap">
                  <div className="flex md-column align-items-center md-align-items-start gap-4 md-gap-1 min-w-0 md-full-width">
                    <div className="flex align-items-center md-justify-content-between gap-4 md-full-width">
                      <div className="w-60px h-60px round-md bg-red-light flex justify-content-center align-items-center flex-shrink-0">
                        <i className="icon icon-attention-circle text-red text-xl"></i>
                      </div>

                      <span className="bg-red-light text-red px-3 py-1 round-full text-xs semi-bold">
                        {" پایان پلن "}
                      </span>
                    </div>

                    <p className="semi-bold min-w-0 md-text-sm m-0 md-mt-4 md-mb-2">
                      {" پلن ویژه آگهی شما تا ۲ روز دیگر به پایان می‌رسد. "}
                    </p>
                  </div>

                  <div className="flex align-items-center gap-3 flex-shrink-0">
                    <span className="text-muted text-sm">{"۳ ساعت پیش"}</span>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex md-column justify-content-between align-items-center md-align-items-start gap-5 md-gap-2 flex-wrap">
                  <div className="flex md-column align-items-center md-align-items-start gap-4 md-gap-1 min-w-0 md-full-width">
                    <div className="flex align-items-center md-justify-content-between gap-4 md-full-width">
                      <div className="w-60px h-60px round-md bg-blue-light flex justify-content-center align-items-center flex-shrink-0">
                        <i className="icon icon-cart text-blue text-xl"></i>
                      </div>

                      <span className="bg-blue-light text-blue px-3 py-1 round-full text-xs semi-bold">
                        {" سفارش جدید "}
                      </span>
                    </div>

                    <p className="semi-bold min-w-0 md-text-sm m-0 md-mt-4 md-mb-2">
                      {" سفارش جدید شما با شماره #۴۱۲۵۶۷ ثبت شد. "}
                    </p>
                  </div>

                  <div className="flex align-items-center gap-3 flex-shrink-0">
                    <span className="text-muted text-sm">{"۵ ساعت پیش"}</span>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex md-column justify-content-between align-items-center md-align-items-start gap-5 md-gap-2 flex-wrap">
                  <div className="flex md-column align-items-center md-align-items-start gap-4 md-gap-1 min-w-0 md-full-width">
                    <div className="flex align-items-center md-justify-content-between gap-4 md-full-width">
                      <div className="w-60px h-60px round-md bg-green-light flex justify-content-center align-items-center flex-shrink-0">
                        <i className="icon icon-chart-column text-green text-xl"></i>
                      </div>

                      <span className="bg-green-light text-green px-3 py-1 round-full text-xs semi-bold">
                        {" گزارش هفتگی "}
                      </span>
                    </div>

                    <p className="semi-bold min-w-0 md-text-sm m-0 md-mt-4 md-mb-2">
                      {" گزارش هفتگی عملکرد آگهی‌های شما آماده مشاهده است. "}
                    </p>
                  </div>

                  <div className="flex align-items-center gap-3 flex-shrink-0">
                    <span className="text-muted text-sm">
                      {"دیروز - ۱۲:۳۰"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="form p-4">
                <div className="flex md-column justify-content-between align-items-center md-align-items-start gap-5 md-gap-2 flex-wrap">
                  <div className="flex md-column align-items-center md-align-items-start gap-4 md-gap-1 min-w-0 md-full-width">
                    <div className="flex align-items-center md-justify-content-between gap-4 md-full-width">
                      <div className="w-60px h-60px round-md bg-primary-light flex justify-content-center align-items-center flex-shrink-0">
                        <i className="icon icon-attention-circle text-primary text-xl"></i>
                      </div>

                      <span className="bg-primary-light text-primary px-3 py-1 round-full text-xs semi-bold">
                        {" اعلان سیستم "}
                      </span>
                    </div>

                    <p className="semi-bold min-w-0 md-text-sm m-0 md-mt-4 md-mb-2">
                      {
                        " بروزرسانی جدید شاپی منتشر شد. از امکانات جدید لذت ببرید. "
                      }
                    </p>
                  </div>

                  <div className="flex align-items-center gap-3 flex-shrink-0">
                    <span className="text-muted text-sm">{"۲ روز پیش"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-content-center mt-8">
              <button className="btn-secondary font-peyda px-6" type="button">
                <i className="icon icon-down-2 ml-2"></i>
                {" بارگذاری بیشتر "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
