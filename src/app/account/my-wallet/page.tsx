// Migrated from pages/account/my-wallet.html; edit this React source directly.
import type { Metadata } from "next";
import { FinanceChart } from "@/components/account/finance-chart";

export const metadata: Metadata = { title: "شاپی | کیف پول" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30">
        <div className="flex column gap-6 font-peyda">
          <div className="flex row lg-column min-h-30 lg-min-h-42 md-min-h-38">
            <div className="w-p6">
              <div>
                <h1 className="text-xxl bold text-text mb-2 md-text-lg">
                  {"کیف پول من"}
                </h1>

                <p className="text-sm md-text-xs text-muted">
                  {"داشبورد / کیف پول"}
                </p>
              </div>
            </div>

            <div className="wallet-cover full-width full-height flex justify-content-between align-items-start column p-8 pr-12 sm-pr-7">
              <div>
                <span className="text-inverse opacity-9 text-xs">
                  {"موجودی فعلی"}
                </span>

                <div className="flex row gap-1 font-sans text-inverse semi-bold">
                  <span className="size-9 md-size-8 sm-size-6">
                    {"2,450,000"}
                  </span>

                  <i className="icon icon-toman-bold w-7 h-7 md-h-5 md-w-5 sm-w-4 sm-h-4"></i>
                </div>
              </div>

              <div className="flex justify-content-between">
                <button
                  className="btn-secondary text-primary semi-bold flex justify-content-center align-items-center gap-3 font-peyda"
                  type="button"
                >
                  <i className="icon icon-plus-alt"></i>
                  {" شارژ کیف پول "}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-col-4 lg-grid-col-2 sm-grid-col-1 gap-4">
            <button
              className="shadow-sm font-peyda btn-primary p-5 text-center hover-scale-up cursor-pointer"
              type="button"
            >
              <div className="flex justify-content-between align-items-start">
                <div className="flex align-items-start column">
                  <p className="text-lg mb-2 text-inverse m-0 semi-bold">
                    {" شارژ کیف پول "}
                  </p>

                  <p className="text-inverse text-xs m-0">
                    {"واریز سریع و آسان"}
                  </p>
                </div>

                <div className="w-50px h-50px round-md bg-white flex justify-content-center align-items-center">
                  <i className="icon icon-wallet-plus text-primary w-3 h-3"></i>
                </div>
              </div>
            </button>

            <button
              className="shadow-sm round-md font-peyda bg-blue p-5 text-center hover-scale-up cursor-pointer"
              type="button"
            >
              <div className="flex justify-content-between align-items-start">
                <div className="flex align-items-start column">
                  <p className="text-lg mb-2 text-inverse m-0 semi-bold">
                    {" برداشت وجه "}
                  </p>

                  <p className="text-inverse text-xs m-0">
                    {"تسویه حساب بانکی"}
                  </p>
                </div>

                <div className="w-50px h-50px round-md bg-white flex justify-content-center align-items-center">
                  <i className="icon icon-wallet-minus text-blue w-3 h-3"></i>
                </div>
              </div>
            </button>

            <button
              className="shadow-sm round-md font-peyda bg-gold p-5 text-center hover-scale-up cursor-pointer"
              type="button"
            >
              <div className="flex justify-content-between align-items-start">
                <div className="flex align-items-start column">
                  <p className="text-lg mb-2 text-inverse m-0 semi-bold">
                    {" انتقال اعتبار "}
                  </p>

                  <p className="text-inverse text-xs m-0">{"به شاپیی دیگری"}</p>
                </div>

                <div className="w-50px h-50px round-md bg-white flex justify-content-center align-items-center">
                  <i className="icon icon-transfer text-gold w-3 h-3"></i>
                </div>
              </div>
            </button>

            <button
              className="shadow-sm round-md font-peyda bg-green p-5 text-center hover-scale-up cursor-pointer"
              type="button"
            >
              <div className="flex justify-content-between align-items-start">
                <div className="flex align-items-start column">
                  <p className="text-lg mb-2 text-inverse m-0 semi-bold">
                    {" گزارش مالی "}
                  </p>

                  <p className="text-inverse text-xs m-0">
                    {"تحلیل درآمد ماهانه"}
                  </p>
                </div>

                <div className="w-50px h-50px round-md bg-white flex justify-content-center align-items-center">
                  <i className="icon icon-chart-column text-green w-3 h-3"></i>
                </div>
              </div>
            </button>
          </div>

          <div>
            <div className="flex justify-content-between align-items-center mb-4">
              <h2 className="bold">{"خلاصه درآمدها"}</h2>
            </div>

            <div className="grid grid-col-4 lg-grid-col-2 sm-grid-col-1 gap-4">
              <div className="form p-5 primary-border bg-primary-light">
                <div className="flex justify-content-between align-items-start mb-5">
                  <div>
                    <p className="text-muted text-sm mb-2">{"درآمد بنر ها"}</p>

                    <div className="flex row gap-1 font-sans text-primary text-xl semi-bold">
                      <span>{"890,000"}</span>

                      <i className="icon icon-toman-bold w-4 h-4"></i>
                    </div>
                  </div>

                  <div className="w-50px h-50px round-md bg-primary flex justify-content-center align-items-center">
                    <i className="icon icon-flag-2 text-inverse w-3 h-3"></i>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center">
                  <span className="text-xs text-muted">
                    {" در ۳۰ روز اخیر "}
                  </span>

                  <span className="text-green text-md font-sans">
                    {" +5% "}
                  </span>
                </div>
              </div>

              <div className="form p-5 blue-border bg-blue-light">
                <div className="flex justify-content-between align-items-start mb-5">
                  <div>
                    <p className="text-muted text-sm mb-2">{"درآمد فروشگاه"}</p>

                    <div className="flex row gap-1 font-sans text-blue text-xl semi-bold">
                      <span>{"4,390,000"}</span>

                      <i className="icon icon-toman-bold w-4 h-4"></i>
                    </div>
                  </div>

                  <div className="w-50px h-50px round-md bg-blue flex justify-content-center align-items-center">
                    <i className="icon icon-shop text-inverse w-3 h-3"></i>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center">
                  <span className="text-xs text-muted">
                    {" در ۳۰ روز اخیر "}
                  </span>

                  <span className="text-green text-md font-sans">
                    {" +8% "}
                  </span>
                </div>
              </div>

              <div className="form p-5 gold-border bg-gold-light">
                <div className="flex justify-content-between align-items-start mb-5">
                  <div>
                    <p className="text-muted text-sm mb-2">{"درآمد همکاری"}</p>

                    <div className="flex row gap-1 font-sans text-gold text-xl semi-bold">
                      <span>{"12,000,000"}</span>

                      <i className="icon icon-toman-bold w-4 h-4"></i>
                    </div>
                  </div>

                  <div className="w-50px h-50px round-md bg-gold flex justify-content-center align-items-center">
                    <i className="icon icon-people text-inverse w-3 h-3"></i>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center">
                  <span className="text-xs text-muted">
                    {" در ۳۰ روز اخیر "}
                  </span>

                  <span className="text-green text-md font-sans">
                    {" +4% "}
                  </span>
                </div>
              </div>

              <div className="form p-5 green-border bg-green-transparent">
                <div className="flex justify-content-between align-items-start mb-5">
                  <div>
                    <p className="text-muted text-sm mb-2">{"درآمد آگهی ها"}</p>

                    <div className="flex row gap-1 font-sans text-green text-xl semi-bold">
                      <span>{"12,000,000"}</span>

                      <i className="icon icon-toman-bold w-4 h-4"></i>
                    </div>
                  </div>

                  <div className="w-50px h-50px round-md bg-green flex justify-content-center align-items-center">
                    <i className="icon icon-package text-inverse w-3 h-3"></i>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center">
                  <span className="text-xs text-muted">
                    {" در ۳۰ روز اخیر "}
                  </span>

                  <span className="text-green text-md font-sans">
                    {" +12% "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="form mt-5">
            <div className="flex justify-content-between align-items-center mb-5">
              <h3 className="bold">{"تراکنش‌های اخیر"}</h3>

              <a href="#" className="text-primary text-sm semi-bold">
                {" مشاهده همه "}
              </a>
            </div>

            <div className="flex column gap-3">
              <div className="border round-md p-4">
                <div className="flex justify-content-between align-items-start gap-3">
                  <div className="flex align-items-center gap-3 min-w-0">
                    <div className="w-45px h-45px round-md bg-green-light flex justify-content-center align-items-center flex-shrink-0">
                      <i className="icon icon-bank text-green"></i>
                    </div>

                    <div className="min-w-0">
                      <h4 className="semi-bold text-sm mt-0 mb-1">
                        {" واریز از درگاه پرداخت "}
                      </h4>

                      <p className="text-xs text-muted m-0">
                        {"۱۴۰۴/۰۲/۲۴ - ۱۶:۳۲"}
                      </p>
                    </div>
                  </div>

                  <span className="text-green semi-bold font-sans flex-shrink-0">
                    {" +500,000 "}
                  </span>
                </div>
              </div>

              <div className="border round-md p-4">
                <div className="flex justify-content-between align-items-start gap-3">
                  <div className="flex align-items-center gap-3 min-w-0">
                    <div className="w-45px h-45px round-md bg-red-light flex justify-content-center align-items-center flex-shrink-0">
                      <i className="icon icon-cart text-red"></i>
                    </div>

                    <div>
                      <h4 className="semi-bold text-sm mt-0 mb-1">
                        {" خرید پلن ویژه آگهی "}
                      </h4>

                      <p className="text-xs text-muted m-0">
                        {"۱۴۰۴/۰۲/۲۳ - ۱۱:۵۵"}
                      </p>
                    </div>
                  </div>

                  <span className="text-red semi-bold font-sans flex-shrink-0">
                    {" -99,000 "}
                  </span>
                </div>
              </div>

              <div className="border round-md p-4">
                <div className="flex justify-content-between align-items-start gap-3">
                  <div className="flex align-items-center gap-3 min-w-0">
                    <div className="w-45px h-45px round-md bg-blue-light flex justify-content-center align-items-center flex-shrink-0">
                      <i className="icon icon-bag text-blue"></i>
                    </div>

                    <div>
                      <h4 className="semi-bold text-sm mt-0 mb-1">
                        {" درآمد فروشگاه لیان شاپ "}
                      </h4>

                      <p className="text-xs text-muted m-0">
                        {"۱۴۰۴/۰۲/۲۱ - ۰۹:۴۰"}
                      </p>
                    </div>
                  </div>

                  <span className="text-green semi-bold font-sans flex-shrink-0">
                    {" +1,200,000 "}
                  </span>
                </div>
              </div>

              <div className="border round-md p-4">
                <div className="flex justify-content-between align-items-start gap-3">
                  <div className="flex align-items-center gap-3 min-w-0">
                    <div className="w-45px h-45px round-md bg-gold-light flex justify-content-center align-items-center flex-shrink-0">
                      <i className="icon icon-wallet text-gold"></i>
                    </div>

                    <div>
                      <h4 className="semi-bold text-sm mt-0 mb-1">
                        {" پرداخت وجه به شما "}
                      </h4>

                      <p className="text-xs text-muted m-0">
                        {"۱۴۰۴/۰۲/۲۰ - ۱۹:۱۸"}
                      </p>
                    </div>
                  </div>

                  <span className="text-red semi-bold font-sans flex-shrink-0">
                    {" -800,000 "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="form md-shadow-unset md-p-0 mt-5">
            <div className="flex md-column justify-content-between align-items-center md-align-items-start mb-5">
              <h3 className="bold">{"نمودار وضعیت مالی"}</h3>

              <div className="flex gap-2">
                <button
                  className="btn-secondary text-xs font-peyda"
                  type="button"
                >
                  {"۷ روز"}
                </button>

                <button
                  className="btn-secondary text-xs font-peyda"
                  type="button"
                >
                  {"۳۰ روز"}
                </button>

                <button
                  className="btn-primary text-xs font-peyda"
                  type="button"
                >
                  {"۹۰ روز"}
                </button>

                <button
                  className="btn-secondary text-xs font-peyda"
                  type="button"
                >
                  {"یک سال"}
                </button>
              </div>
            </div>

            <div className="relative h-50">
              <FinanceChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
