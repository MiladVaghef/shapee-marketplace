import Link from "next/link";

export function HomeVehicleShowcase() {
  return (
    <div className="inline-space md-p-0">
      <div className="flex column product-showcase justify-content-center round-lg md-mr-3 md-ml-3">
        <img decoding="async" loading="lazy"
          src="/assets/images/example/suv-banner-with-shadow.webp"
          alt="بنر ماشین های لوکس"
        />
      </div>

      <div className="flex row mt-10">
        <div className="swiper showcase-swiper full-width">
          <div className="swiper-wrapper font-sans full-width mb-8">
            <div className="swiper-slide">
              <Link
                href="/products/kia-logo-d00ff70"
                className="flex column shadow-sm m-1 round-md overflow-hidden font-sans hover-scale-up md-mr-3 md-ml-3"
              >
                <div className="relative">
                  <div className="absolute flex bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary round-sm flex index-1000">
                    <span className="text-xs text-inverse">{"20% تخفیف"}</span>
                  </div>

                  <div className="absolute bottom-5 left-3 pt-1 pb-1 pl-3 pr-3 h-2 bg-background round-sm flex justify-content-center align-items-center index-1000 w-8">
                    <img decoding="async" loading="lazy"
                      src="/assets/images/example/kia-logo.png"
                      className="full-width h-fit"
                      alt=""
                    />
                  </div>

                  <img decoding="async" loading="lazy"
                    src="/assets/images/example/kia-stinger-silver.webp"
                    alt="کیا استینگر مدل 2026"
                    className="full-width scale-up"
                  />
                </div>

                <div className="flex column pl-3 pr-3 index-1000">
                  <div className="flex column gap-3 full-width pb-3 border-bottom mb-1">
                    <div className="flex row align-items-center gap-3 mt-2">
                      <div className="shadow-md round-full h-7 w-7 outline-white overflow-hidden">
                        <img decoding="async" loading="lazy"
                          src="/assets/images/example/shoe-logo.avif"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column min-w-0">
                        <span className="semi-bold mb-2 text-text font-sans text-ellipsis xl-text-sm">
                          {"کیا استینگر مدل 2026"}
                        </span>

                        <div className="flex row gap-3 align-items-center">
                          <span className="text-xs font-peyda">
                            {"اتوگالری مکس "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <span>{"|"}</span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-sm">
                            <span className="opacity-6 font-peyda">
                              {"4.8"}
                            </span>

                            <i className="icon icon-star-3 text-gold w-2 h-2 mb-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex pl-3 pr-3">
                  <div className="flex column border-bottom pb-3 pt-3 gap-3 full-width font-peyda">
                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-color-picker h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"رنگ بدنه:"}</span>
                      </div>

                      <div className="flex align-items-center gap-2">
                        <span className="text-xs">{"نقره ای"}</span>

                        <span className="opacity-5 text-xs">{"|"}</span>

                        <span className="bg-silver light-border round-full w-13px h-13px"></span>
                      </div>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-speed-one h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"کارکرد:"}</span>
                      </div>

                      <span className="text-xs">{"15,000 کیلومتر"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-calendar-3 h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"سال ساخت:"}</span>
                      </div>

                      <span className="text-xs">{"2026"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-gearbox h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"گیربکس:"}</span>
                      </div>

                      <span className="text-xs">{"اتوماتیک"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex row justify-content-between font-peyda pl-3 pr-3 mb-3 mt-3 align-items-end">
                  <div>{"قیمت:"}</div>

                  <div className="flex column">
                    <div>
                      <span className="discount text-muted text-xs">
                        {"2,950,000"}
                      </span>
                    </div>

                    <span className="text-primary text-md semi-bold">
                      {"2,650,000 "}
                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </span>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center pl-3 pr-3 mb-3 gap-2">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده فروشگاه "}
                      <i className="icon icon-left-2 absolute left-3"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/hyundai-logo-wide-b33ffb0"
                className="flex column shadow-sm m-1 round-md overflow-hidden font-sans hover-scale-up md-mr-3 md-ml-3"
              >
                <div className="relative">
                  <div className="absolute flex bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary round-sm flex index-1000">
                    <span className="text-xs text-inverse">{"20% تخفیف"}</span>
                  </div>

                  <div className="absolute bottom-5 left-3 pt-1 pb-1 pl-3 pr-3 h-2 bg-background round-sm flex justify-content-center align-items-center index-1000 w-8">
                    <img decoding="async" loading="lazy"
                      src="/assets/images/example/hyundai-logo-wide.png"
                      className="full-width h-fit"
                      alt=""
                    />
                  </div>

                  <img decoding="async" loading="lazy"
                    src="/assets/images/example/suv-driving-trough-road.jpg"
                    alt="سانتافه تمیز مدل 2023"
                    className="full-width scale-up"
                  />
                </div>

                <div className="flex column pl-3 pr-3 index-1000">
                  <div className="flex column gap-3 full-width pb-3 border-bottom mb-1">
                    <div className="flex row align-items-center gap-3 mt-2">
                      <div className="shadow-md round-full h-7 w-7 outline-white overflow-hidden">
                        <img decoding="async" loading="lazy"
                          src="/assets/images/example/shoe-logo.avif"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column min-w-0">
                        <span className="semi-bold mb-2 text-text font-sans text-ellipsis xl-text-sm">
                          {"سانتافه تمیز مدل 2023"}
                        </span>

                        <div className="flex row gap-3 align-items-center">
                          <span className="text-xs font-peyda">
                            {"اتوگالری مکس "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <span>{"|"}</span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-sm">
                            <span className="opacity-6 font-peyda">
                              {"4.8"}
                            </span>

                            <i className="icon icon-star-3 text-gold w-2 h-2 mb-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex pl-3 pr-3">
                  <div className="flex column border-bottom pb-3 pt-3 gap-3 full-width font-peyda">
                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-color-picker h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"رنگ بدنه:"}</span>
                      </div>

                      <div className="flex align-items-center gap-2">
                        <span className="text-xs">{"نقره ای"}</span>

                        <span className="opacity-5 text-xs">{"|"}</span>

                        <span className="bg-silver light-border round-full w-13px h-13px"></span>
                      </div>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-speed-one h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"کارکرد:"}</span>
                      </div>

                      <span className="text-xs">{"15,000 کیلومتر"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-calendar-3 h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"سال ساخت:"}</span>
                      </div>

                      <span className="text-xs">{"2026"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-gearbox h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"گیربکس:"}</span>
                      </div>

                      <span className="text-xs">{"اتوماتیک"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex row justify-content-between font-peyda pl-3 pr-3 mb-3 mt-3 align-items-end">
                  <div>{"قیمت:"}</div>

                  <div className="flex column">
                    <div>
                      <span className="discount text-muted text-xs">
                        {"2,950,000"}
                      </span>
                    </div>

                    <span className="text-primary text-md semi-bold">
                      {"2,650,000 "}
                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </span>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center pl-3 pr-3 mb-3 gap-2">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده فروشگاه "}
                      <i className="icon icon-left-2 absolute left-3"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/hongqi-logo-b462f54"
                className="flex column shadow-sm m-1 round-md overflow-hidden font-sans hover-scale-up md-mr-3 md-ml-3"
              >
                <div className="relative">
                  <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary round-sm flex index-1000">
                    <span className="text-xs text-inverse">{"20% تخفیف"}</span>
                  </div>

                  <div className="absolute bottom-5 left-3 pt-1 pb-1 pl-3 pr-3 h-2 bg-background round-sm flex justify-content-center align-items-center index-1000 w-8">
                    <img decoding="async" loading="lazy"
                      src="/assets/images/example/Hongqi-Logo.png"
                      className="full-width full-height"
                      alt=""
                    />
                  </div>

                  <img decoding="async" loading="lazy"
                    src="/assets/images/example/suv-LS7-8.webp"
                    alt="هونگچی LS7 مدل 2025"
                    className="full-width scale-up"
                  />
                </div>

                <div className="flex column pl-3 pr-3 index-1000">
                  <div className="flex column gap-3 full-width pb-3 border-bottom mb-1">
                    <div className="flex row align-items-center gap-3 mt-2">
                      <div className="shadow-md round-full h-7 w-7 outline-white overflow-hidden">
                        <img decoding="async" loading="lazy"
                          src="/assets/images/example/shoe-logo.avif"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column min-w-0">
                        <span className="semi-bold mb-2 text-text font-sans text-ellipsis xl-text-sm">
                          {"هونگچی LS7 مدل 2025"}
                        </span>

                        <div className="flex row gap-3 align-items-center">
                          <span className="text-xs font-peyda">
                            {"اتوگالری مکس "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <span>{"|"}</span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-sm">
                            <span className="opacity-6 font-peyda">
                              {"4.8"}
                            </span>

                            <i className="icon icon-star-3 text-gold w-2 h-2 mb-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex pl-3 pr-3">
                  <div className="flex column border-bottom pb-3 pt-3 gap-3 full-width font-peyda">
                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-color-picker h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"رنگ بدنه:"}</span>
                      </div>

                      <div className="flex align-items-center gap-2">
                        <span className="text-xs">{"نقره ای"}</span>

                        <span className="opacity-5 text-xs">{"|"}</span>

                        <span className="bg-silver light-border round-full w-13px h-13px"></span>
                      </div>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-speed-one h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"کارکرد:"}</span>
                      </div>

                      <span className="text-xs">{"15,000 کیلومتر"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-calendar-3 h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"سال ساخت:"}</span>
                      </div>

                      <span className="text-xs">{"2026"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-gearbox h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"گیربکس:"}</span>
                      </div>

                      <span className="text-xs">{"اتوماتیک"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex row justify-content-between font-peyda pl-3 pr-3 mb-3 mt-3 align-items-end">
                  <div>{"قیمت:"}</div>

                  <div className="flex column">
                    <div>
                      <span className="discount text-muted text-xs">
                        {"2,950,000"}
                      </span>
                    </div>

                    <span className="text-primary text-md semi-bold">
                      {"2,650,000 "}
                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </span>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center pl-3 pr-3 mb-3 gap-2">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده فروشگاه "}
                      <i className="icon icon-left-2 absolute left-3"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/bmw-1b6e9c1"
                className="flex column shadow-sm m-1 round-md overflow-hidden font-sans hover-scale-up md-mr-3 md-ml-3"
              >
                <div className="relative">
                  <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary round-sm flex index-1000">
                    <span className="text-xs text-inverse">{"20% تخفیف"}</span>
                  </div>

                  <div className="absolute bottom-5 left-3 pt-1 pb-1 pl-3 pr-3 h-2 bg-background round-sm flex justify-content-center align-items-center index-1000 w-8">
                    <img decoding="async" loading="lazy"
                      src="/assets/images/example/BMW.png"
                      className="full-width full-height"
                      alt=""
                    />
                  </div>

                  <img decoding="async" loading="lazy"
                    src="/assets/images/example/bmw-m5-yellow.webp"
                    alt="بی ام و M5 برقی مدل 2022"
                    className="full-width scale-up"
                  />
                </div>

                <div className="flex column pl-3 pr-3 index-1000">
                  <div className="flex column gap-3 full-width pb-3 border-bottom mb-1">
                    <div className="flex row align-items-center gap-3 mt-2">
                      <div className="shadow-md round-full h-7 w-7 outline-white overflow-hidden">
                        <img decoding="async" loading="lazy"
                          src="/assets/images/example/shoe-logo.avif"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column min-w-0">
                        <span className="semi-bold mb-2 text-text font-sans text-ellipsis xl-text-sm">
                          {"بی ام و M5 برقی مدل 2022"}
                        </span>

                        <div className="flex row gap-3 align-items-center">
                          <span className="text-xs font-peyda">
                            {"اتوگالری مکس "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <span>{"|"}</span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-sm">
                            <span className="opacity-6 font-peyda">
                              {"4.8"}
                            </span>

                            <i className="icon icon-star-3 text-gold w-2 h-2 mb-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex pl-3 pr-3">
                  <div className="flex column border-bottom pb-3 pt-3 gap-3 full-width font-peyda">
                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-color-picker h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"رنگ بدنه:"}</span>
                      </div>

                      <div className="flex align-items-center gap-2">
                        <span className="text-xs">{"نقره ای"}</span>

                        <span className="opacity-5 text-xs">{"|"}</span>

                        <span className="bg-silver light-border round-full w-13px h-13px"></span>
                      </div>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-speed-one h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"کارکرد:"}</span>
                      </div>

                      <span className="text-xs">{"15,000 کیلومتر"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-calendar-3 h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"سال ساخت:"}</span>
                      </div>

                      <span className="text-xs">{"2026"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-gearbox h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"گیربکس:"}</span>
                      </div>

                      <span className="text-xs">{"اتوماتیک"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex row justify-content-between font-peyda pl-3 pr-3 mb-3 mt-3 align-items-end">
                  <div>{"قیمت:"}</div>

                  <div className="flex column">
                    <div>
                      <span className="discount text-muted text-xs">
                        {"2,950,000"}
                      </span>
                    </div>

                    <span className="text-primary text-md semi-bold">
                      {"2,650,000 "}
                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </span>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center pl-3 pr-3 mb-3 gap-2">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده فروشگاه "}
                      <i className="icon icon-left-2 absolute left-3"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link
                href="/products/aston-martin-logo-15dc61e"
                className="flex column shadow-sm m-1 round-md overflow-hidden font-sans hover-scale-up md-mr-3 md-ml-3"
              >
                <div className="relative">
                  <div className="absolute bottom-5 right-3 pt-1 pb-1 pl-3 pr-3 bg-primary round-sm flex index-1000">
                    <span className="text-xs text-inverse">{"20% تخفیف"}</span>
                  </div>

                  <div className="absolute bottom-5 left-3 pt-1 pb-1 pl-3 pr-3 h-2 bg-background round-sm flex justify-content-center align-items-center index-1000 w-8">
                    <img decoding="async" loading="lazy"
                      src="/assets/images/example/Aston-Martin-Logo.webp"
                      className="full-width full-height"
                      alt=""
                    />
                  </div>

                  <img decoding="async" loading="lazy"
                    src="/assets/images/example/grand-touring-red-optimized.webp"
                    alt="استون مارتین مدل 2020"
                    className="full-width scale-up"
                  />
                </div>

                <div className="flex column pl-3 pr-3 index-1000">
                  <div className="flex column gap-3 full-width pb-3 border-bottom mb-1">
                    <div className="flex row align-items-center gap-3 mt-2">
                      <div className="shadow-md round-full h-7 w-7 outline-white overflow-hidden">
                        <img decoding="async" loading="lazy"
                          src="/assets/images/example/shoe-logo.avif"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column min-w-0">
                        <span className="semi-bold mb-2 text-text font-sans text-ellipsis xl-text-sm">
                          {"استون مارتین مدل 2020"}
                        </span>

                        <div className="flex row gap-3 align-items-center">
                          <span className="text-xs font-peyda">
                            {"اتوگالری مکس "}
                            <i className="icon icon-verified-2 text-primary"></i>
                          </span>

                          <span>{"|"}</span>

                          <div className="flex justify-content-center align-items-center gap-2 semi-bold text-sm">
                            <span className="opacity-6 font-peyda">
                              {"4.8"}
                            </span>

                            <i className="icon icon-star-3 text-gold w-2 h-2 mb-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex pl-3 pr-3">
                  <div className="flex column border-bottom pb-3 pt-3 gap-3 full-width font-peyda">
                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-color-picker h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"رنگ بدنه:"}</span>
                      </div>

                      <div className="flex align-items-center gap-2">
                        <span className="text-xs">{"نقره ای"}</span>

                        <span className="opacity-5 text-xs">{"|"}</span>

                        <span className="bg-silver light-border round-full w-13px h-13px"></span>
                      </div>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-speed-one h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"کارکرد:"}</span>
                      </div>

                      <span className="text-xs">{"15,000 کیلومتر"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-calendar-3 h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"سال ساخت:"}</span>
                      </div>

                      <span className="text-xs">{"2026"}</span>
                    </div>

                    <div className="flex justify-content-between row align-items-center">
                      <div className="flex row gap-2 align-items-center opacity-8">
                        <i className="icon icon-gearbox h-14px w-14px ml-1"></i>

                        <span className="text-xs">{"گیربکس:"}</span>
                      </div>

                      <span className="text-xs">{"اتوماتیک"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex row justify-content-between font-peyda pl-3 pr-3 mb-3 mt-3 align-items-end">
                  <div>{"قیمت:"}</div>

                  <div className="flex column">
                    <div>
                      <span className="discount text-muted text-xs">
                        {"2,950,000"}
                      </span>
                    </div>

                    <span className="text-primary text-md semi-bold">
                      {"2,650,000 "}
                      <i className="icon icon-toman-bold w-3 h-3"></i>
                    </span>
                  </div>
                </div>

                <div className="column row justify-content-center align-items-center pl-3 pr-3 mb-3 gap-2">
                  <div className="flex row justify-content-center align-items-center gap-2 full-width md-remove">
                    <span className="btn-primary-light p-3">
                      <i className="icon icon-qr-code w-2 h-2"></i>
                    </span>

                    <span className="btn-primary full-width font-peyda relative">
                      {" مشاهده فروشگاه "}
                      <i className="icon icon-left-2 absolute left-3"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
