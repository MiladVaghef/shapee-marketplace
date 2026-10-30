import { FeaturedStores } from "@/components/home/featured-stores";

export function HomeFeaturedBrands() {
  return (
    <div className="inline-space md-p-0">
      <div className="flex overflow-hidden round-md relative md-ml-4 md-mr-4">
        <img
          decoding="async"
          loading="lazy"
          className="full-width"
          src="/assets/images/example/top-brand-banner.webp"
          alt="بنر کمپین طلایی"
        />
      </div>

      <div className="row flex justify-content-between mt-9 mb-6 md-pl-4 md-pr-4 md-mb-4 md-mt-6">
        <div className="flex column gap-2 font-peyda">
          <span className="size-6 semi-bold md-text-md">{"برند برتر"}</span>
        </div>

        <a
          href="/inner-category/brands-category"
          className="row flex align-items-center gap-2"
        >
          <span className="text-primary font-peyda text-sm semi-bold md-text-xs">
            {"مشاهده همه"}
          </span>

          <i className="icon icon-left-arrow text-primary"></i>
        </a>
      </div>

      <div className="flex row mt-10 md-mt-3">
        <FeaturedStores kind="brands" />
      </div>
    </div>
  );
}
