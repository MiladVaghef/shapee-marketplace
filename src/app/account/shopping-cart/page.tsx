// Migrated from pages/account/shopping-cart.html; edit this React source directly.
import type { Metadata } from "next";

export const metadata: Metadata = { title: "شاپی | سبد خرید" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30 md-pb-20">
        <div className="flex row lg-column gap-5">
          <div className="form p-0 md-shadow-unset overflow-hidden font-peyda w-p7 lg-full-width">
            <div className="flex justify-content-between align-items-center p-5 md-pl-0 md-pr-0 border-bottom">
              <div className="flex align-items-center gap-3">
                <span className="semi-bold">{"سبد خرید"}</span>
              </div>

              <button
                className="flex align-items-center gap-2 text-red bg-transparent border-0 cursor-pointer font-peyda"
                type="button"
              >
                <i className="icon icon-trash-bin"></i>
                {" حذف انتخاب شده ها "}
              </button>
            </div>

            <div className="p-5 md-p-0 md-pt-5 md-pb-2 border-bottom">
              <div className="flex md-column gap-5 md-gap-1 justify-content-between align-items-center">
                <div className="flex gap-4 align-items-center md-full-width">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      className="checkbox-hidden"
                    />

                    <label htmlFor="terms" className="checkbox-button">
                      <span></span>
                    </label>
                  </div>

                  <img
                    src="/assets/images/example/headphone.jpg"
                    alt=""
                    className="w-15 h-15 md-w-12 md-h-12 round-md object-cover flex-shrink-0"
                  />

                  <div className="flex column md-full-width gap-2 min-w-0">
                    <h3 className="semi-bold text-sm m-0 text-ellipsis">
                      {" هدفون بی سیم سونی مدل WH-CH720N "}
                    </h3>

                    <span className="text-muted text-xs">{" رنگ: مشکی "}</span>

                    <div className="flex gap-1 semi-bold text-primary font-sans mt-4">
                      <span>{"1,290,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center w-p4 md-full-width">
                  <div className="quantity">
                    <button className="quantity__btn" type="button">
                      <i className="icon icon-plus-alt"></i>
                    </button>

                    <span className="quantity__value">{"1"}</span>

                    <button className="quantity__btn" type="button">
                      <i className="icon icon-minus"></i>
                    </button>
                  </div>

                  <div className="flex column h-13 md-h-10 align-items-end lg-align-items-end justify-content-end md-justify-content-center">
                    <button
                      className="flex align-items-center gap-2 text-red bg-transparent border-0 mb-2 md-mb-0 cursor-pointer font-peyda"
                      type="button"
                    >
                      <i className="icon icon-trash-bin"></i>
                      {" حذف "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 md-p-0 md-pt-5 md-pb-2 border-bottom">
              <div className="flex md-column gap-5 md-gap-1 justify-content-between align-items-center">
                <div className="flex gap-4 align-items-center md-full-width">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      className="checkbox-hidden"
                    />

                    <label htmlFor="terms" className="checkbox-button">
                      <span></span>
                    </label>
                  </div>

                  <img
                    src="/assets/images/example/perfume.jpg"
                    alt=""
                    className="w-15 h-15 md-w-12 md-h-12 round-md object-cover flex-shrink-0"
                  />

                  <div className="flex column md-full-width gap-2 min-w-0">
                    <h3 className="semi-bold text-sm m-0 text-ellipsis">
                      {" عطر برند کلینکز 400 گرمی "}
                    </h3>

                    <span className="text-muted text-xs">{" رنگ: مشکی "}</span>

                    <div className="flex gap-1 semi-bold text-primary font-sans mt-4">
                      <span>{"1,290,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center w-p4 md-full-width">
                  <div className="quantity">
                    <button className="quantity__btn" type="button">
                      <i className="icon icon-plus-alt"></i>
                    </button>

                    <span className="quantity__value">{"1"}</span>

                    <button className="quantity__btn" type="button">
                      <i className="icon icon-minus"></i>
                    </button>
                  </div>

                  <div className="flex column h-13 md-h-10 align-items-end lg-align-items-end justify-content-end md-justify-content-center">
                    <button
                      className="flex align-items-center gap-2 text-red bg-transparent border-0 mb-2 md-mb-0 cursor-pointer font-peyda"
                      type="button"
                    >
                      <i className="icon icon-trash-bin"></i>
                      {" حذف "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 md-p-0 md-pt-5 md-pb-2 border-bottom">
              <div className="flex md-column gap-5 md-gap-1 justify-content-between align-items-center">
                <div className="flex gap-4 align-items-center md-full-width">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      className="checkbox-hidden"
                    />

                    <label htmlFor="terms" className="checkbox-button">
                      <span></span>
                    </label>
                  </div>

                  <img
                    src="/assets/images/example/headphone.jpg"
                    alt=""
                    className="w-15 h-15 md-w-12 md-h-12 round-md object-cover flex-shrink-0"
                  />

                  <div className="flex column md-full-width gap-2 min-w-0">
                    <h3 className="semi-bold text-sm m-0 text-ellipsis">
                      {" هدفون بی سیم سونی مدل WH-CH720N "}
                    </h3>

                    <span className="text-muted text-xs">{" رنگ: مشکی "}</span>

                    <div className="flex gap-1 semi-bold text-primary font-sans mt-4">
                      <span>{"1,290,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center w-p4 md-full-width">
                  <div className="quantity">
                    <button className="quantity__btn" type="button">
                      <i className="icon icon-plus-alt"></i>
                    </button>

                    <span className="quantity__value">{"1"}</span>

                    <button className="quantity__btn" type="button">
                      <i className="icon icon-minus"></i>
                    </button>
                  </div>

                  <div className="flex column h-13 md-h-10 align-items-end lg-align-items-end justify-content-end md-justify-content-center">
                    <button
                      className="flex align-items-center gap-2 text-red bg-transparent border-0 mb-2 md-mb-0 cursor-pointer font-peyda"
                      type="button"
                    >
                      <i className="icon icon-trash-bin"></i>
                      {" حذف "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 md-p-0 md-pt-5 md-pb-2 border-bottom">
              <div className="flex md-column gap-5 md-gap-1 justify-content-between align-items-center">
                <div className="flex gap-4 align-items-center md-full-width">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      className="checkbox-hidden"
                    />

                    <label htmlFor="terms" className="checkbox-button">
                      <span></span>
                    </label>
                  </div>

                  <img
                    src="/assets/images/example/perfume.jpg"
                    alt=""
                    className="w-15 h-15 md-w-12 md-h-12 round-md object-cover flex-shrink-0"
                  />

                  <div className="flex column md-full-width gap-2 min-w-0">
                    <h3 className="semi-bold text-sm m-0 text-ellipsis">
                      {" عطر برند کلینکز 400 گرمی "}
                    </h3>

                    <span className="text-muted text-xs">{" رنگ: مشکی "}</span>

                    <div className="flex gap-1 semi-bold text-primary font-sans mt-4">
                      <span>{"1,290,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>
                </div>

                <div className="flex justify-content-between align-items-center w-p4 md-full-width">
                  <div className="quantity">
                    <button className="quantity__btn" type="button">
                      <i className="icon icon-plus-alt"></i>
                    </button>

                    <span className="quantity__value">{"1"}</span>

                    <button className="quantity__btn" type="button">
                      <i className="icon icon-minus"></i>
                    </button>
                  </div>

                  <div className="flex column h-13 md-h-10 align-items-end lg-align-items-end justify-content-end md-justify-content-center">
                    <button
                      className="flex align-items-center gap-2 text-red bg-transparent border-0 mb-2 md-mb-0 cursor-pointer font-peyda"
                      type="button"
                    >
                      <i className="icon icon-trash-bin"></i>
                      {" حذف "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-p3 lg-full-width mb-10">
            <div className="flex column gap-3 full-width">
              <h3 className="font-peyda text-lg font-bold">{"روش پرداخت"}</h3>

              <div className="summary-row form pt-4 pb-4 md-pl-3 md-pr-3 full-width bg-primary">
                <div className="flex row gap-5 xxs-gap-3 align-items-center">
                  <div className="p-4 md-p-3 bg-primary-light round-md">
                    <i className="icon icon-wallet w-3 h-3 text-primary"></i>
                  </div>

                  <div className="flex column gap-1">
                    <span className="md-text-sm text-inverse font-peyda text-lg">
                      {"مبلغ قابل پرداخت"}
                    </span>

                    <strong
                      id="startDate"
                      className="text-inverse font-peyda text-sm md-text-xs"
                    >
                      {" ۳,۲۰۰,۰۰۰ تومان "}
                    </strong>
                  </div>
                </div>
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="payment-online"
                  className="radio-hidden"
                  defaultChecked
                />

                <label htmlFor="payment-online" className="payment-method">
                  <div className="payment-method__indicator"></div>

                  <div className="flex-1">
                    <div className="font-peyda font-medium">
                      {" درگاه پرداخت آنلاین "}
                    </div>
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="payment-wallet"
                  className="radio-hidden"
                />

                <label htmlFor="payment-wallet" className="payment-method">
                  <div className="payment-method__indicator"></div>

                  <div className="flex-1">
                    <div className="font-peyda font-medium mb-1">
                      {" کیف پول شاپی "}
                    </div>

                    <div className="text-sm text-muted">
                      {" موجودی: ۳,۲۰۰,۰۰۰ تومان "}
                    </div>
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="payment-card"
                  className="radio-hidden"
                />

                <label htmlFor="payment-card" className="payment-method">
                  <div className="payment-method__indicator"></div>

                  <div className="flex-1">
                    <div className="font-peyda font-medium mb-1">
                      {" واریز به حساب "}
                    </div>

                    <div className="text-sm text-muted">
                      {" پرداخت از طریق کارت به کارت "}
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="terms-agreement mt-5">
              <input
                type="checkbox"
                id="acceptTerms"
                className="radio-hidden"
              />

              <label
                htmlFor="acceptTerms"
                className="terms-agreement__checkbox"
              >
                <span></span>
              </label>

              <div className="terms-agreement__text mb-4 mt-4">
                <a href="#">{" قوانین و مقررات "}</a>
                {" را مطالعه کرده و می‌پذیرم. "}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary full-width h-56px round-xl mt-5 flex align-items-center justify-content-center gap-2"
            >
              <i className="ri-bank-card-line"></i>

              <span className="font-peyda">{"پرداخت و ثبت رزرو"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
