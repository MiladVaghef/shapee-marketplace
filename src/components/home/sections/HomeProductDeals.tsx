import Link from "next/link";

export function HomeProductDeals() {
  return (
    <div className="inline-space md-p-0">
      <div className="flex overflow-hidden round-md relative md-mr-3 md-ml-3">
        <img decoding="async" loading="lazy"
          className="full-width"
          src="/assets/images/example/single-products-banner.webp"
          alt="بنر کمپین طلایی"
        />
      </div>

      <div className="row flex justify-content-between align-items-center mt-7 mb-0 md-pl-3 md-pr-3 font-peyda">
        <h2 className="size-6 semi-bold md-text-md m-0">محصولات منتخب</h2>
        <Link
          href="/inner-category/products-category"
          className="row flex align-items-center gap-2 text-primary text-sm semi-bold md-text-xs"
        >
          <span>مشاهده همه</span>
          <i className="icon icon-left-arrow text-primary" aria-hidden="true" />
        </Link>
      </div>

      <div className="swiper minimal-swiper">
        <div className="swiper-wrapper mt-6">
          <div className="swiper-slide">
            <Link
              href="/products/used-iphone-b2d53ad"
              className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm m-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                  <span className="text-primary text-xs font-peyda semi-bold">
                    {"4 ساعت پیش"}
                  </span>
                </div>

                <img decoding="async" loading="lazy"
                  src="/assets/images/example/used-iphone.jpg"
                  alt="فروش آیفون 16 پرو رجیستر شده"
                  className="full-width scale-up"
                />
              </div>

              <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-2">
                <div className="flex justify-content-between align-items-center min-w-0">
                  <span className="semi-bold text-sm text-ellipsis">
                    {"فروش آیفون 16 پرو رجیستر شده "}
                  </span>
                </div>

                <div className="flex row gap-2 align-items-center font-peyda">
                  <i className="icon icon-map-point text-muted mb-1"></i>

                  <span className="text-muted mb-1 text-sm text-accent">
                    {"مشهد، دشت کوه"}
                  </span>
                </div>

                <div className="flex row justify-content-between mt-1">
                  <div className="flex row gap-2 align-items-center">
                    <span className="font-peyda">{"قیمت:"}</span>
                  </div>

                  <div className="flex row gap-1 font-sans text-primary semi-bold">
                    <span>{"12,000,000"}</span>

                    <i className="icon icon-toman-bold w-3 h-3"></i>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center gap-2 md-remove">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="swiper-slide">
            <Link
              href="/products/car-front-view-c0f9b8b"
              className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm m-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                  <span className="text-primary text-xs font-peyda semi-bold">
                    {"1 ساعت پیش"}
                  </span>
                </div>

                <img decoding="async" loading="lazy"
                  src="/assets/images/example/car-front-view.webp"
                  alt="ماشین تمیز بدون خط و خش"
                  className="full-width scale-up"
                />
              </div>

              <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-2">
                <div className="flex justify-content-between align-items-center min-w-0">
                  <span className="semi-bold text-sm text-ellipsis">
                    {"ماشین تمیز بدون خط و خش "}
                  </span>
                </div>

                <div className="flex row gap-2 align-items-center font-peyda">
                  <i className="icon icon-map-point text-muted mb-1"></i>

                  <span className="text-muted mb-1 text-sm text-accent">
                    {"مشهد، دشت کوه"}
                  </span>
                </div>

                <div className="flex row justify-content-between mt-1">
                  <div className="flex row gap-2 align-items-center">
                    <span className="font-peyda">{"قیمت:"}</span>
                  </div>

                  <div className="flex row gap-1 font-sans text-primary semi-bold">
                    <span>{"2,400,000,000"}</span>

                    <i className="icon icon-toman-bold w-3 h-3"></i>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center gap-2 md-remove">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="swiper-slide">
            <Link
              href="/products/dog-32a7f25"
              className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm m-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                  <span className="text-primary text-xs font-peyda semi-bold">
                    {"36 دقیقه پیش"}
                  </span>
                </div>

                <img decoding="async" loading="lazy"
                  src="/assets/images/example/dog.jpg"
                  alt="دو عدد سگ بامزه عروسکی"
                  className="full-width scale-up"
                />
              </div>

              <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-2">
                <div className="flex justify-content-between align-items-center min-w-0">
                  <span className="semi-bold text-sm text-ellipsis">
                    {"دو عدد سگ بامزه عروسکی "}
                  </span>
                </div>

                <div className="flex row gap-2 align-items-center font-peyda">
                  <i className="icon icon-map-point text-muted mb-1"></i>

                  <span className="text-muted mb-1 text-sm text-accent">
                    {"مشهد، دشت کوه"}
                  </span>
                </div>

                <div className="flex row justify-content-between mt-1">
                  <div className="flex row gap-2 align-items-center">
                    <span className="font-peyda">{"قیمت:"}</span>
                  </div>

                  <div className="flex row gap-1 font-sans text-primary semi-bold">
                    <span>{"40,000,000"}</span>

                    <i className="icon icon-toman-bold w-3 h-3"></i>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center gap-2 md-remove">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="swiper-slide">
            <Link
              href="/products/bed-hang-ca9b544"
              className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm m-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                  <span className="text-primary text-xs font-peyda semi-bold">
                    {"4 روز پیش"}
                  </span>
                </div>

                <img decoding="async" loading="lazy"
                  src="/assets/images/example/bed-hang.jpg"
                  alt="آویز تخت موزیکال نو"
                  className="full-width scale-up"
                />
              </div>

              <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-2">
                <div className="flex justify-content-between align-items-center min-w-0">
                  <span className="semi-bold text-sm text-ellipsis">
                    {"آویز تخت موزیکال نو "}
                  </span>
                </div>

                <div className="flex row gap-2 align-items-center font-peyda">
                  <i className="icon icon-map-point text-muted mb-1"></i>

                  <span className="text-muted mb-1 text-sm text-accent">
                    {"مشهد، دشت کوه"}
                  </span>
                </div>

                <div className="flex row justify-content-between mt-1">
                  <div className="flex row gap-2 align-items-center">
                    <span className="font-peyda">{"قیمت:"}</span>
                  </div>

                  <div className="flex row gap-1 font-sans text-primary semi-bold">
                    <span>{"700,000"}</span>

                    <i className="icon icon-toman-bold w-3 h-3"></i>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center gap-2 md-remove">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="swiper-slide">
            <Link
              href="/products/headset-62b06e6"
              className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm m-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                  <span className="text-primary text-xs font-peyda semi-bold">
                    {"2 روز پیش"}
                  </span>
                </div>

                <img decoding="async" loading="lazy"
                  src="/assets/images/example/headset.webp"
                  alt="هدست اونیکیما RGB دار"
                  className="full-width scale-up"
                />
              </div>

              <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-2">
                <div className="flex justify-content-between align-items-center min-w-0">
                  <span className="semi-bold text-sm text-ellipsis">
                    {"هدست اونیکیما RGB دار "}
                  </span>
                </div>

                <div className="flex row gap-2 align-items-center font-peyda">
                  <i className="icon icon-map-point text-muted mb-1"></i>

                  <span className="text-muted mb-1 text-sm text-accent">
                    {"مشهد، دشت کوه"}
                  </span>
                </div>

                <div className="flex row justify-content-between mt-1">
                  <div className="flex row gap-2 align-items-center">
                    <span className="font-peyda">{"قیمت:"}</span>
                  </div>

                  <div className="flex row gap-1 font-sans text-primary semi-bold">
                    <span>{"4,300,000"}</span>

                    <i className="icon icon-toman-bold w-3 h-3"></i>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center gap-2 md-remove">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="swiper-slide">
            <Link
              href="/products/used-iphone-b2d53ad"
              className="flex column round-md overflow-hidden font-sans hover-scale-up shadow-sm m-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-md flex index-1000">
                  <span className="text-primary text-xs font-peyda semi-bold">
                    {"4 ساعت پیش"}
                  </span>
                </div>

                <img decoding="async" loading="lazy"
                  src="/assets/images/example/used-iphone.jpg"
                  alt="فروش آیفون 16 پرو رجیستر شده"
                  className="full-width scale-up"
                />
              </div>

              <div className="flex column pt-2 pl-5 pr-5 pb-5 gap-2">
                <div className="flex justify-content-between align-items-center min-w-0">
                  <span className="semi-bold text-sm text-ellipsis">
                    {"فروش آیفون 16 پرو رجیستر شده "}
                  </span>
                </div>

                <div className="flex row gap-2 align-items-center font-peyda">
                  <i className="icon icon-map-point text-muted mb-1"></i>

                  <span className="text-muted mb-1 text-sm text-accent">
                    {"مشهد، دشت کوه"}
                  </span>
                </div>

                <div className="flex row justify-content-between mt-1">
                  <div className="flex row gap-2 align-items-center">
                    <span className="font-peyda">{"قیمت:"}</span>
                  </div>

                  <div className="flex row gap-1 font-sans text-primary semi-bold">
                    <span>{"12,000,000"}</span>

                    <i className="icon icon-toman-bold w-3 h-3"></i>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center gap-2 md-remove">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده محصول "}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
