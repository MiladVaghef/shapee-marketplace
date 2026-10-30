import Link from "next/link";
import { properties } from "@/data/properties";
import { HomePropertyCard } from "@/components/home/property-card";

export function HomePropertyShowcase() {
  return (
    <div className="inline-space md-p-0">
      <div className="flex column product-showcase justify-content-center round-lg md-mr-3 md-ml-3">
        <img decoding="async" loading="lazy"
          src="/assets/images/example/villa-banner.webp"
          alt="بنر ماشین های لوکس"
        />
      </div>

      <div className="row flex justify-content-between align-items-center mt-7 mb-7 md-pl-3 md-pr-3 font-peyda">
        <h2 className="size-6 semi-bold md-text-md m-0">خانه‌ها و ویلاها</h2>
        <Link
          href="/inner-category/house-category"
          className="row flex align-items-center gap-2 text-primary text-sm semi-bold md-text-xs"
        >
          <span>مشاهده همه</span>
          <i className="icon icon-left-arrow" aria-hidden="true" />
        </Link>
      </div>
      <div className="flex row mt-10">
        <div className="swiper showcase-swiper full-width">
          <div className="swiper-wrapper font-sans full-width mb-8">
            {properties.map((property) => (
              <div className="swiper-slide" key={property.slug}>
                <HomePropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
