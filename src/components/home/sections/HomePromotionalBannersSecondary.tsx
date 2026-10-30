export function HomePromotionalBannersSecondary() {
  return (
    <div className="flex row gap-5 lg-grid lg-grid-col-2 inline-space">
      <div className="flex fill full-width lg-order-1">
        <img
          className="round-md fill flex full-height full-width"
          src="/assets/images/example/online-shop-banner.png"
          alt="بنر"
        />
      </div>

      <div className="flex fill full-width lg-order-2">
        <img
          className="round-md full-height full-width"
          src="/assets/images/example/job-seeking-banner-minimal.png"
          alt="بنر"
        />
      </div>

      <div className="flex fill full-width lg-order-4">
        <img
          className="round-md full-height full-width"
          src="/assets/images/example/shop-banner.png"
          alt="بنر"
        />
      </div>

      <div className="flex fill full-width lg-order-3">
        <img
          className="round-md full-height full-width"
          src="/assets/images/example/sumbit-ad-banner.png"
          alt="بنر"
        />
      </div>
    </div>
  );
}
