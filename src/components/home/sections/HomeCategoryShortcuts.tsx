export function HomeCategoryShortcuts() {
  return (
    <div className="categories flex row full-width mb-5 align-items-center gap-3 inline-space lg-remove">
      <button
        type="button"
        aria-label="دسته‌بندی‌های قبلی"
        className="swiper-button-prev light-border pd-3 round-full bg-background tranistion-all"
      >
        <i className="icon icon-left-arrow flip-x w-3 h-3" aria-hidden="true" />
      </button>

      <div className="categories-viewport full-width light-border p-5 round-md w-55 bg-background-alt tranistion-all pointer">
        <div className="swiper categories-swiper">
          <div className="swiper-wrapper gap-3">
            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/house-category"
                className="flex row align-items-center gap-2 w-fit"
              >
                <i className="icon icon-home-smile w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"اجاره ویلا"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/house-category"
                className="flex row align-items-center gap-3"
              >
                <i className="icon icon-pool w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"استخر دار"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/products-category"
                className="flex row align-items-center gap-2"
              >
                <i className="icon icon-motorcycle-bike w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"موتورسیکلت"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/products-category"
                className="flex row align-items-center gap-2"
              >
                <i className="icon icon-car-suv w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"ماشین"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/house-category"
                className="flex row align-items-center gap-2 w-fit"
              >
                <i className="icon icon-home-smile w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"اجاره ویلا"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/house-category"
                className="flex row align-items-center gap-3"
              >
                <i className="icon icon-pool w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"استخر دار"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/products-category"
                className="flex row align-items-center gap-2"
              >
                <i className="icon icon-motorcycle-bike w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"موتورسیکلت"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/products-category"
                className="flex row align-items-center gap-2"
              >
                <i className="icon icon-car-suv w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"ماشین"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/house-category"
                className="flex row align-items-center gap-2 w-fit"
              >
                <i className="icon icon-home-smile w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"اجاره ویلا"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/house-category"
                className="flex row align-items-center gap-3"
              >
                <i className="icon icon-pool w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"استخر دار"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/products-category"
                className="flex row align-items-center gap-2"
              >
                <i className="icon icon-motorcycle-bike w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"موتورسیکلت"}
                </span>
              </a>
            </div>

            <div className="swiper-slide flex justify-content-center align-items-center">
              <a
                href="/inner-category/products-category"
                className="flex row align-items-center gap-2"
              >
                <i className="icon icon-car-suv w-3 h-3"></i>

                <span className="font-peyda text-md mt-1 text-text">
                  {"ماشین"}
                </span>
              </a>
            </div>

            <div className="swiper-slide"></div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="دسته‌بندی‌های بعدی"
        className="swiper-button-next light-border pd-3 round-full bg-background tranistion-all"
      >
        <i className="icon icon-left-arrow w-3 h-3" aria-hidden="true" />
      </button>
    </div>
  );
}
