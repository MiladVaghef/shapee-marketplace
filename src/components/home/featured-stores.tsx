import Link from "next/link";
import { topBrands, topShops } from "@/data/home-stores";
import "./featured-stores.scss";

export function FeaturedStores({ kind }: { kind: "shops" | "brands" }) {
  const stores = kind === "shops" ? topShops : topBrands;
  return (
    <div
      className="swiper shops-swiper full-width home-featured-stores"
      data-store-kind={kind}
    >
      <div className="swiper-wrapper font-peyda">
        {stores.map((store) => (
          <div className="swiper-slide" key={store.id}>
            <Link
              href={`/profile/shops-profile?shop=${store.id}`}
              className="home-store-card flex column shadow-sm m-2 round-md overflow-hidden font-peyda hover-scale-up"
            >
              <div className="home-store-cover relative overflow-hidden">
                <span className="home-store-badge text-xs">{store.badge}</span>
                <img
                  src={store.cover}
                  alt={`${store.name}؛ ${store.category}`}
                  className="full-width scale-up"
                  loading="lazy"
                />
              </div>
              <div className="home-store-identity">
                <img
                  className="home-store-mark"
                  src={store.logo}
                  alt={`لوگوی ${store.name}`}
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <h3>
                  {store.name}{" "}
                  <i
                    className="icon icon-verified-2 text-primary"
                    aria-label="تأییدشده"
                  />
                </h3>
                <p className="text-muted text-sm">{store.category}</p>
                <div className="home-store-meta text-sm">
                  <span>
                    <i
                      className="icon icon-map-point-rotate text-primary"
                      aria-hidden="true"
                    />
                    {store.city}
                  </span>
                  <span className="home-store-rating text-primary">
                    {store.rating}
                    <i className="icon icon-star-3" aria-hidden="true" />
                  </span>
                </div>
              </div>
              {store.products && (
                <div className="home-store-products md-remove">
                  <span className="text-sm">محصولات منتخب</span>
                  <div>
                    {store.products.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`محصول منتخب ${store.name}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              )}
              {store.description && (
                <p className="home-store-description text-sm">
                  {store.description}
                </p>
              )}
              <div className="home-store-footer">
                {store.count && (
                  <p className="text-sm">
                    <span className="text-muted">تعداد محصولات</span>
                    <span>
                      {store.count}{" "}
                      <i
                        className="icon icon-package text-primary"
                        aria-hidden="true"
                      />
                    </span>
                  </p>
                )}
                <span className="btn-primary home-store-visit md-remove">
                  {kind === "shops" ? "مشاهده فروشگاه" : "مشاهده برند"}
                  <i className="icon icon-left-2" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
