import { TourCard } from "@/components/tours/tour-card";
import { tours } from "@/data/tours";
import Link from "next/link";
export function HomeTravelShowcase() {
  return (
    <div className="inline-space md-p-0">
      <div className="flex column product-showcase justify-content-center round-lg md-mr-3 md-ml-3">
        <img
          decoding="async"
          loading="lazy"
          src="/assets/images/example/tour-banner.webp"
          alt="بنر ماشین های لوکس"
        />
      </div>
      <div className="row flex justify-content-between mt-7 mb-7 md-pl-3 md-pr-3">
        <div className="flex column gap-2 font-peyda">
          <span className="size-6 semi-bold md-text-md">
            <i className="icon icon-flight text-primary w-4 h-4 md-h-3 md-w-3"></i>
            {"\n              تور های منتخب\n            "}
          </span>
          <span className="md-text-xs">{"برترین تور های داخلی و خارچی"}</span>
        </div>
        <Link
          href="/inner-category/products-category?type=tours"
          className="row flex align-items-center gap-2"
        >
          <span className="text-primary font-peyda text-sm semi-bold md-text-xs">
            {"مشاهده همه"}
          </span>
          <i className="icon icon-left-arrow text-primary"></i>
        </Link>
      </div>
      <div className="flex row">
        <div className="swiper showcase-swiper full-width">
          <div className="swiper-wrapper font-sans full-width mb-8">
            {tours.map((tour) => (
              <div className="swiper-slide" key={tour.slug}>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
