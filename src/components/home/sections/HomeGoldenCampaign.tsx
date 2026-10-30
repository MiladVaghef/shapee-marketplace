import Link from "next/link";

export function HomeGoldenCampaign() {
  return (
    <>
      <div className="md-bg-primary inline-space md-p-0 md-pb-4 md-pt-4">
        <div className="flex column overflow-hidden round-top-md relative md-remove">
          <img
            decoding="async"
            loading="lazy"
            className="full-width"
            src="/assets/images/example/golden-campaign-optimized-2.webp"
            alt="بنر کمپین طلایی"
          />

          <div className="flex row absolute lg-position-unset shadow-sm round-md overflow-hidden bottom-7 left-7 lg-round-bottom-sm md-column">
            <div className="bg-primary p-5 font-peyda flex row align-items-center justify-content-center gap-5 w-25 lg-full-width md-p-3 md-w-unset">
              <i className="icon icon-clock-alt text-gold w-5 h-5 md-h-3 md-w-3"></i>

              <span className="text-inverse text-lg md-text-sm">
                {"زمان پایان کمپین طلایی"}
              </span>
            </div>

            <div className="bg-background pt-3 pb-3 pl-5 pr-5 flex row justify-content-between align-items-center gap-5 lg-full-width lg-justify-content-center lg-primary-border lg-round-left-bottom-sm md-w-unset md-round-bottom-sm xs-gap-3 xxs-gap-2">
              <div className="flex column justify-content-center align-items-center gap-1 font-peyda bold pt-2 pb-2 pl-5 pr-5 shadow-sm round-md min-w-10 lg-w-4">
                <span className="text-primary text-xxl md-text-xl">{"12"}</span>

                <span className="text-primary md-text-xs">{"ثانیه"}</span>
              </div>

              <span className="size-10 text-primary flex justify-content-center align-items-center mb-3">
                {":"}
              </span>

              <div className="flex column justify-content-center align-items-center gap-1 font-peyda bold pt-2 pb-2 pl-5 pr-5 shadow-sm round-md min-w-10 lg-w-4">
                <span className="text-primary text-xxl md-text-xl">{"35"}</span>

                <span className="text-primary md-text-xs">{"دقیقه"}</span>
              </div>

              <span className="size-10 text-primary flex justify-content-center align-items-center mb-3">
                {":"}
              </span>

              <div className="flex column justify-content-center align-items-center gap-1 font-peyda bold pt-2 pb-2 pl-5 pr-5 shadow-sm round-md min-w-10 lg-w-4">
                <span className="text-primary text-xxl md-text-xl">{"22"}</span>

                <span className="text-primary md-text-xs">{"ساعت"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="remove row md-flex justify-content-between mb-4 md-pr-2">
          <div className="flex row gap-5 font-peyda">
            <div className="flex row gap-2 align-items-center">
              <span className="flex align-items-center justify-content-center text-sm flex h-4 w-4 round-sm font-sans bg-background semi-bold">
                {"58"}
              </span>

              <span className="text-inverse">{":"}</span>

              <span className="flex align-items-center justify-content-center text-sm flex h-4 w-4 round-sm font-sans bg-background semi-bold">
                {"39"}
              </span>

              <span className="text-inverse">{":"}</span>

              <span className="flex align-items-center justify-content-center text-sm flex h-4 w-4 round-sm font-sans bg-background semi-bold">
                {"22"}
              </span>
            </div>
          </div>
        </div>

        <div className="swiper campaign-swiper md-pl-2 md-pr-2">
          <div className="swiper-wrapper mt-10 md-m-0">
            <div className="swiper-slide">
              <Link
                href="/products/headphone-ad0860e"
                className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background md-round-right-md m-1 md-m-0"
              >
                <div className="block relative overflow-hidden">
                  <div className="absolute top-3 right-3 index-1000">
                    <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                      <span className="text-sm">{"4.8"}</span>

                      <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                    </div>
                  </div>

                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/images/products/studio-headphones.webp"
                    alt="هدفون بی‌سیم گرافیتی"
                    className="block full-width scale-up"
                  />
                </div>

                <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                  <div className="flex justify-content-between align-items-center min-w-0">
                    <span className="semi-bold text-ellipsis sm-text-sm">
                      {"هدفون بی‌سیم گرافیتی"}
                    </span>
                  </div>

                  <span className="opacity-7 mb-1 text-sm text-accent">
                    {"صوتی و تصویری"}
                  </span>

                  <div className="flex row justify-content-between mt-1">
                    <div className="flex row gap-2 align-items-center">
                      <span className="font-peyda">{"قیمت:"}</span>
                    </div>

                    <div className="flex row gap-1 font-sans text-primary semi-bold">
                      <span>{"12,000,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>

                  <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                    <span className="btn-primary-light p-3 md-full-width">
                      <i className="icon icon-cart w-2 h-2 text-primary"></i>
                    </span>

                    <span className="btn-primary text-inverse full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/perfume-093e712"
                className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background md-round-unset m-1 md-m-0"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 right-3 index-1000">
                    <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                      <span className="text-sm">{"4.8"}</span>

                      <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                    </div>
                  </div>

                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/images/products/studio-perfume.webp"
                    alt="ادو پرفیوم شیشه‌ای"
                    className="block full-width scale-up"
                  />
                </div>

                <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                  <div className="flex justify-content-between align-items-center min-w-0">
                    <span className="semi-bold text-ellipsis sm-text-sm">
                      {"ادو پرفیوم شیشه‌ای"}
                    </span>
                  </div>

                  <span className="opacity-7 mb-1 text-sm text-accent">
                    {"زیبایی و مراقبت"}
                  </span>

                  <div className="flex row justify-content-between mt-1">
                    <div className="flex row gap-2 align-items-center">
                      <span className="font-peyda">{"قیمت:"}</span>
                    </div>

                    <div className="flex row gap-1 font-sans text-primary semi-bold">
                      <span>{"12,000,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>

                  <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-cart w-2 h-2 text-primary"></i>
                    </span>

                    <span className="btn-primary text-inverse full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/studio-smartwatch"
                className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background md-round-unset m-1 md-m-0"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 right-3 index-1000">
                    <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                      <span className="text-sm">{"4.8"}</span>

                      <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                    </div>
                  </div>

                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/images/products/studio-watch.webp"
                    alt="ساعت هوشمند گرافیتی"
                    className="block full-width scale-up"
                  />
                </div>

                <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                  <div className="flex justify-content-between align-items-center min-w-0">
                    <span className="semi-bold text-ellipsis sm-text-sm">
                      {"ساعت هوشمند گرافیتی"}
                    </span>
                  </div>

                  <span className="opacity-7 mb-1 text-sm text-accent">
                    {"کالای دیجیتال"}
                  </span>

                  <div className="flex row justify-content-between mt-1">
                    <div className="flex row gap-2 align-items-center">
                      <span className="font-peyda">{"قیمت:"}</span>
                    </div>

                    <div className="flex row gap-1 font-sans text-primary semi-bold">
                      <span>{"4,900,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>

                  <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-cart w-2 h-2 text-primary"></i>
                    </span>

                    <span className="btn-primary text-inverse full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/dualsense-9cc09b6"
                className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background md-round-unset m-1 md-m-0"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 right-3 index-1000">
                    <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                      <span className="text-sm">{"4.8"}</span>

                      <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                    </div>
                  </div>

                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/images/products/studio-controller.webp"
                    alt="دسته بازی بی‌سیم"
                    className="block full-width scale-up"
                  />
                </div>

                <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                  <div className="flex justify-content-between align-items-center min-w-0">
                    <span className="semi-bold text-ellipsis sm-text-sm">
                      {"دسته بازی بی‌سیم"}
                    </span>
                  </div>

                  <span className="opacity-7 mb-1 text-sm text-accent">
                    {"بازی و سرگرمی"}
                  </span>

                  <div className="flex row justify-content-between mt-1">
                    <div className="flex row gap-2 align-items-center">
                      <span className="font-peyda">{"قیمت:"}</span>
                    </div>

                    <div className="flex row gap-1 font-sans text-primary semi-bold">
                      <span>{"12,000,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>

                  <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-cart w-2 h-2 text-primary"></i>
                    </span>

                    <span className="btn-primary text-inverse full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/tshirt-f5a2223"
                className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background md-round-unset m-1 md-m-0"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 right-3 index-1000">
                    <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                      <span className="text-sm">{"4.8"}</span>

                      <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                    </div>
                  </div>

                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/images/products/studio-tshirt.webp"
                    alt="تی‌شرت نخ پنبه کرم"
                    className="block full-width scale-up"
                  />
                </div>

                <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                  <div className="flex justify-content-between align-items-center min-w-0">
                    <span className="semi-bold text-ellipsis sm-text-sm">
                      {"تی‌شرت نخ پنبه کرم"}
                    </span>
                  </div>

                  <span className="opacity-7 mb-1 text-sm text-accent">
                    {"پوشاک و کفش"}
                  </span>

                  <div className="flex row justify-content-between mt-1">
                    <div className="flex row gap-2 align-items-center">
                      <span className="font-peyda">{"قیمت:"}</span>
                    </div>

                    <div className="flex row gap-1 font-sans text-primary semi-bold">
                      <span>{"12,000,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>

                  <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-cart w-2 h-2 text-primary"></i>
                    </span>

                    <span className="btn-primary text-inverse full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/decorative-d16d5ba"
                className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm bg-background md-round-left-md m-1 md-m-0"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 right-3 index-1000">
                    <div className="flex justify-content-center align-items-center pr-4 pl-4 pt-1 pb-1 round-full gap-2 semi-bold text-primary bg-primary-light">
                      <span className="text-sm">{"4.8"}</span>

                      <i className="icon icon-star-3 w-2 h-2 mb-1"></i>
                    </div>
                  </div>

                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/images/products/studio-vase.webp"
                    alt="گلدان سرامیکی دکوراتیو"
                    className="block full-width scale-up"
                  />
                </div>

                <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-1">
                  <div className="flex justify-content-between align-items-center min-w-0">
                    <span className="semi-bold text-ellipsis sm-text-sm">
                      {"گلدان سرامیکی دکوراتیو"}
                    </span>
                  </div>

                  <span className="opacity-7 mb-1 text-sm text-accent">
                    {"خانه و دکوراسیون"}
                  </span>

                  <div className="flex row justify-content-between mt-1">
                    <div className="flex row gap-2 align-items-center">
                      <span className="font-peyda">{"قیمت:"}</span>
                    </div>

                    <div className="flex row gap-1 font-sans text-primary semi-bold">
                      <span>{"12,000,000"}</span>

                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </div>
                  </div>

                  <div className="flex row justify-content-center align-items-center gap-2 full-width mt-3 md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-cart w-2 h-2 text-primary"></i>
                    </span>

                    <span className="btn-primary text-inverse full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="swiper-pagination lg-remove"></div>
        </div>
      </div>
    </>
  );
}
