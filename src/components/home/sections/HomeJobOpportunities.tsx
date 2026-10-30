import Link from "next/link";

export function HomeJobOpportunities() {
  return (
    <div className="inline-space md-p-0">
      <div className="flex column product-showcase justify-content-center round-lg md-ml-3 md-mr-3">
        <img
          decoding="async"
          loading="lazy"
          src="/assets/images/example/job-seeking-banner.webp"
          alt="بنر ماشین های لوکس"
          className="round-lg"
        />
      </div>

      <div className="flex column gap-1 full-width">
        <div className="row flex justify-content-between mt-7 mb-0 md-pl-3 md-pr-3">
          <div className="flex column gap-2 font-peyda">
            <span className="size-6 semi-bold md-text-md">
              {" فرصت های شغلی "}
            </span>

            <span className="md-text-xs">
              {"به جمع حرفه ای های شاپی بپیوندید"}
            </span>
          </div>

          <a
            href="/inner-category/hire-ads-category"
            className="row flex align-items-center gap-2"
          >
            <span className="text-primary font-peyda text-sm semi-bold md-text-xs">
              {"مشاهده همه"}
            </span>

            <i className="icon icon-left-arrow text-primary"></i>
          </a>
        </div>

        <div className="flex row mt-6 md-mt-4">
          <div className="swiper showcase-swiper full-width">
            <div className="swiper-wrapper font-peyda">
              <div className="swiper-slide">
                <Link
                  href="/inner-ads/inner-hire-ad"
                  className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up"
                >
                  <div className="relative">
                    <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                      <span className="text-xs text-primary semi-bold">
                        {"استخدام"}
                      </span>
                    </div>
                  </div>

                  <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                    <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                      <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/abr-arvan.jpeg"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column justify-content-between gap-1 align-items-center">
                        <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                          {"استخدام متخصص شبکه IT"}
                        </span>

                        <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                          {"ابرآروان "}
                          <i className="icon icon-verified-2 text-primary"></i>
                        </span>
                      </div>

                      <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                        <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                          <div>
                            <i className="icon icon-map-point text-primary"></i>

                            <span className="text-sm font-peyda">
                              {" موقعیت:"}
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-peyda">
                              {" تهران - دورکاری"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-items-center pl-5 pr-5">
                    <div className="flex column align-items-center full-width">
                      <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                        <span className="text-sm semi-bold">
                          {"مهارت های مورد نیاز:"}
                        </span>

                        <div className="flex row gap-3 wrap align-items-center justify-content-center">
                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Firewall"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"شبکه"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"الگوریتم"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"SQL"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"PHP"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                    <div>{"حقوق:"}</div>

                    <div className="flex column">
                      <div>
                        <span className="text-muted text-xs">
                          {"30,000,000 تا"}
                        </span>
                      </div>

                      <span className="text-primary text-sm semi-bold">
                        {"65,000,000 "}
                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </span>
                    </div>
                  </div>

                  <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                    <div className="flex row justify-content-center align-items-center gap-2 full-width">
                      <span className="btn-secondary p-3">
                        <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                      </span>

                      <span className="btn-secondary text-primary full-width font-peyda relative">
                        {" مشاهده فروشگاه "}
                        <i className="icon icon-left-2 text-primary absolute left-3"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/inner-ads/inner-hire-ad"
                  className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up xs-mr-3 xs-ml-3"
                >
                  <div className="relative">
                    <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                      <span className="text-xs text-primary semi-bold">
                        {"استخدام فوری"}
                      </span>
                    </div>
                  </div>

                  <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                    <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                      <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/panter.jpg"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column justify-content-between gap-1 align-items-center">
                        <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                          {"برنامه نویس بک اند پایتون"}
                        </span>

                        <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                          {"پردازش آریا "}
                          <i className="icon icon-verified-2 text-primary"></i>
                        </span>
                      </div>

                      <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                        <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                          <div>
                            <i className="icon icon-map-point text-primary"></i>

                            <span className="text-sm font-peyda">
                              {" موقعیت:"}
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-peyda">
                              {" تهران - حضوری"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-items-center pl-5 pr-5">
                    <div className="flex column align-items-center full-width">
                      <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                        <span className="text-sm semi-bold">
                          {"مهارت های مورد نیاز:"}
                        </span>

                        <div className="flex row gap-3 wrap align-items-center justify-content-center">
                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Python"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Django"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"PostgreSQL"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Git"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Redis"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                    <div>{"حقوق:"}</div>

                    <div className="flex column">
                      <div>
                        <span className="text-muted text-xs">
                          {"45,000,000 تا"}
                        </span>
                      </div>

                      <span className="text-primary text-sm semi-bold">
                        {"85,000,000 "}
                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </span>
                    </div>
                  </div>

                  <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                    <div className="flex row justify-content-center align-items-center gap-2 full-width">
                      <span className="btn-secondary p-3">
                        <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                      </span>

                      <span className="btn-secondary text-primary full-width font-peyda relative">
                        {" مشاهده فروشگاه "}
                        <i className="icon icon-left-2 text-primary absolute left-3"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/inner-ads/inner-hire-ad"
                  className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up xs-mr-3 xs-ml-3"
                >
                  <div className="relative">
                    <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                      <span className="text-xs text-primary semi-bold">
                        {"استخدام"}
                      </span>
                    </div>
                  </div>

                  <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                    <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                      <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/blue-logo.webp"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column justify-content-between gap-1 align-items-center">
                        <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                          {"تحلیلگر داده"}
                        </span>

                        <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                          {"داتا نگار "}
                          <i className="icon icon-verified-2 text-primary"></i>
                        </span>
                      </div>

                      <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                        <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                          <div>
                            <i className="icon icon-map-point text-primary"></i>

                            <span className="text-sm font-peyda">
                              {" موقعیت:"}
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-peyda">
                              {" تهران - دورکاری"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-items-center pl-5 pr-5">
                    <div className="flex column align-items-center full-width">
                      <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                        <span className="text-sm semi-bold">
                          {"مهارت های مورد نیاز:"}
                        </span>

                        <div className="flex row gap-3 wrap align-items-center justify-content-center">
                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Python"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Pandas"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"SQL"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Tableau"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Excel"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                    <div>{"حقوق:"}</div>

                    <div className="flex column">
                      <div>
                        <span className="text-muted text-xs">
                          {"50,000,000 تا"}
                        </span>
                      </div>

                      <span className="text-primary text-sm semi-bold">
                        {"90,000,000 "}
                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </span>
                    </div>
                  </div>

                  <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                    <div className="flex row justify-content-center align-items-center gap-2 full-width">
                      <span className="btn-secondary p-3">
                        <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                      </span>

                      <span className="btn-secondary text-primary full-width font-peyda relative">
                        {" مشاهده فروشگاه "}
                        <i className="icon icon-left-2 text-primary absolute left-3"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/inner-ads/inner-hire-ad"
                  className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up xs-mr-3 xs-ml-3"
                >
                  <div className="relative">
                    <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                      <span className="text-xs text-primary semi-bold">
                        {"پروژه"}
                      </span>
                    </div>
                  </div>

                  <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                    <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                      <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/defigo.jpg"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column justify-content-between gap-1 align-items-center">
                        <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                          {"طراح رابط کاربری"}
                        </span>

                        <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                          {"نقش آفرین "}
                          <i className="icon icon-verified-2 text-primary"></i>
                        </span>
                      </div>

                      <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                        <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                          <div>
                            <i className="icon icon-map-point text-primary"></i>

                            <span className="text-sm font-peyda">
                              {" موقعیت:"}
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-peyda">
                              {" اصفهان - دورکاری"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-items-center pl-5 pr-5">
                    <div className="flex column align-items-center full-width">
                      <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                        <span className="text-sm semi-bold">
                          {"مهارت های مورد نیاز:"}
                        </span>

                        <div className="flex row gap-3 wrap align-items-center justify-content-center">
                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Figma"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"HTML"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"CSS"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"JavaScript"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"UI/UX"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                    <div>{"حقوق:"}</div>

                    <div className="flex column">
                      <div>
                        <span className="text-muted text-xs">
                          {"35,000,000 تا"}
                        </span>
                      </div>

                      <span className="text-primary text-sm semi-bold">
                        {"60,000,000 "}
                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </span>
                    </div>
                  </div>

                  <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                    <div className="flex row justify-content-center align-items-center gap-2 full-width">
                      <span className="btn-secondary p-3">
                        <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                      </span>

                      <span className="btn-secondary text-primary full-width font-peyda relative">
                        {" مشاهده فروشگاه "}
                        <i className="icon icon-left-2 text-primary absolute left-3"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/inner-ads/inner-hire-ad"
                  className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up xs-mr-3 xs-ml-3"
                >
                  <div className="relative">
                    <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                      <span className="text-xs text-primary semi-bold">
                        {"استخدام"}
                      </span>
                    </div>
                  </div>

                  <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                    <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                      <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/rakhsh.jpg"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column justify-content-between gap-1 align-items-center">
                        <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                          {"مهندس DevOps"}
                        </span>

                        <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                          {"پارس تک "}
                          <i className="icon icon-verified-2 text-primary"></i>
                        </span>
                      </div>

                      <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                        <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                          <div>
                            <i className="icon icon-map-point text-primary"></i>

                            <span className="text-sm font-peyda">
                              {" موقعیت:"}
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-peyda">
                              {" تهران - دورکاری"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-items-center pl-5 pr-5">
                    <div className="flex column align-items-center full-width">
                      <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                        <span className="text-sm semi-bold">
                          {"مهارت های مورد نیاز:"}
                        </span>

                        <div className="flex row gap-3 wrap align-items-center justify-content-center">
                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Docker"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Kubernetes"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Linux"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"GitLab"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"CI/CD"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                    <div>{"حقوق:"}</div>

                    <div className="flex column">
                      <div>
                        <span className="text-muted text-xs">
                          {"60,000,000 تا"}
                        </span>
                      </div>

                      <span className="text-primary text-sm semi-bold">
                        {"110,000,000 "}
                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </span>
                    </div>
                  </div>

                  <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                    <div className="flex row justify-content-center align-items-center gap-2 full-width">
                      <span className="btn-secondary p-3">
                        <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                      </span>

                      <span className="btn-secondary text-primary full-width font-peyda relative">
                        {" مشاهده فروشگاه "}
                        <i className="icon icon-left-2 text-primary absolute left-3"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/inner-ads/inner-hire-ad"
                  className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up xs-mr-3 xs-ml-3"
                >
                  <div className="relative">
                    <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                      <span className="text-xs text-primary semi-bold">
                        {"تمام وقت"}
                      </span>
                    </div>
                  </div>

                  <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                    <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                      <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/irancell.jpg"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column justify-content-between gap-1 align-items-center">
                        <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                          {"مدیر پایگاه داده"}
                        </span>

                        <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                          {"سامانه هدایت "}
                          <i className="icon icon-verified-2 text-primary"></i>
                        </span>
                      </div>

                      <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                        <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                          <div>
                            <i className="icon icon-map-point text-primary"></i>

                            <span className="text-sm font-peyda">
                              {" موقعیت:"}
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-peyda">
                              {" شیراز - حضوری"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-items-center pl-5 pr-5">
                    <div className="flex column align-items-center full-width">
                      <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                        <span className="text-sm semi-bold">
                          {"مهارت های مورد نیاز:"}
                        </span>

                        <div className="flex row gap-3 wrap align-items-center justify-content-center">
                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"MySQL"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Oracle"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Linux"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Backup"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"SQL"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                    <div>{"حقوق:"}</div>

                    <div className="flex column">
                      <div>
                        <span className="text-muted text-xs">
                          {"40,000,000 تا"}
                        </span>
                      </div>

                      <span className="text-primary text-sm semi-bold">
                        {"70,000,000 "}
                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </span>
                    </div>
                  </div>

                  <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                    <div className="flex row justify-content-center align-items-center gap-2 full-width">
                      <span className="btn-secondary p-3">
                        <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                      </span>

                      <span className="btn-secondary text-primary full-width font-peyda relative">
                        {" مشاهده فروشگاه "}
                        <i className="icon icon-left-2 text-primary absolute left-3"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/inner-ads/inner-hire-ad"
                  className="flex column shadow-sm m-2 round-md overflow-hidden font-sans hover-scale-up xs-mr-3 xs-ml-3"
                >
                  <div className="relative">
                    <div className="absolute flex top-5 left-3 pt-1 pb-1 pl-3 pr-3 bg-primary-light round-sm flex index-1000">
                      <span className="text-xs text-primary semi-bold">
                        {"دورکاری"}
                      </span>
                    </div>
                  </div>

                  <div className="flex column justify-content-center align-items-center pl-5 pr-5 index-1000">
                    <div className="flex column justify-content-center align-items-center gap-3 full-width pb-3">
                      <div className="shadow-md round-full mt-8 h-10 w-10 outline-white overflow-hidden">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/logo/iphone-logo.jpg"
                          alt="لوگو فروشگاه"
                          className="full-width full-height round-full block"
                        />
                      </div>

                      <div className="flex column justify-content-between gap-1 align-items-center">
                        <span className="flex gap-2 align-items-center semi-bold font-peyda sm-text-sm">
                          {"تستر نرم افزار"}
                        </span>

                        <span className="opacity-7 mb-1 text-sm text-text font-peyda">
                          {"افه ساز "}
                          <i className="icon icon-verified-2 text-primary"></i>
                        </span>
                      </div>

                      <div className="flex full-width row align-items-center justify-content-center gap-5 md-gap-8">
                        <div className="flex justify-content-between full-width align-items-center gap-2 pl-3 pr-3 pt-2 pb-2 round-sm p-0">
                          <div>
                            <i className="icon icon-map-point text-primary"></i>

                            <span className="text-sm font-peyda">
                              {" موقعیت:"}
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-peyda">
                              {" مشهد - ترکیبی"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-items-center pl-5 pr-5">
                    <div className="flex column align-items-center full-width">
                      <div className="flex column align-items-center gap-4 mb-3 mt-3 font-peyda text-sm round-md">
                        <span className="text-sm semi-bold">
                          {"مهارت های مورد نیاز:"}
                        </span>

                        <div className="flex row gap-3 wrap align-items-center justify-content-center">
                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Selenium"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Python"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Jira"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"Git"}
                          </span>

                          <span className="text-sm pt-1 pb-1 pr-4 pl-4 bg-primary-light text-primary round-full">
                            {"TestRail"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex row justify-content-between font-peyda pl-5 pr-5 mb-3 mt-3 align-items-end md-mb-6">
                    <div>{"حقوق:"}</div>

                    <div className="flex column">
                      <div>
                        <span className="text-muted text-xs">
                          {"25,000,000 تا"}
                        </span>
                      </div>

                      <span className="text-primary text-sm semi-bold">
                        {"55,000,000 "}
                        <i className="icon icon-toman-bold w-3 h-3"></i>
                      </span>
                    </div>
                  </div>

                  <div className="column row justify-content-center align-items-center pl-5 pr-5 mb-5 gap-2 mt-3 md-remove">
                    <div className="flex row justify-content-center align-items-center gap-2 full-width">
                      <span className="btn-secondary p-3">
                        <i className="icon icon-qr-code w-2 h-2 text-primary"></i>
                      </span>

                      <span className="btn-secondary text-primary full-width font-peyda relative">
                        {" مشاهده فروشگاه "}
                        <i className="icon icon-left-2 text-primary absolute left-3"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
