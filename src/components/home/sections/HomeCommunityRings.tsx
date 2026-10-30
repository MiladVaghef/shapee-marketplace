import Link from "next/link";

export function HomeCommunityRings() {
  return (
    <div className="flex column inline-space home-rings-bleed">
      <div className="avatar-shell mt-3 mb-3 full-width flex align-items-center gap-3">
        <div className="avatar-viewport">
          <div className="swiper avatar-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/panter.jpg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">{"پنتر"}</span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/snapp.png"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">{"اسنپ"}</span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/irancell.jpg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">{"ایرانسل"}</span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/coffee.jpg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">
                    {"کافی رستوران"}
                  </span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/digikala.jpg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">
                    {"دیجی کالا"}
                  </span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/toranji.jpg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">{"ترنجی"}</span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/myket.jpg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">{"مایکت"}</span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/steak-bbq.jpg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">
                    {"استیک باربیکیو"}
                  </span>
                </Link>
              </div>

              <div className="swiper-slide">
                <Link
                  href="/"
                  className="font-peyda flex column justify-content-center align-items-center"
                >
                  <div className="avatar-ring relative w-14 h-14 md-w-10 md-h-10 round-full">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-20 round-full"
                      src="/assets/logo/abr-arvan.jpeg"
                      alt="avatar"
                    />
                  </div>

                  <span className="mt-5 text-text md-text-sm">
                    {"ابر آروان"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
