import Link from "next/link";
import { ProductCard } from "@/components/products/product-card";
import { TourCard } from "@/components/tours/tour-card";
import { JobCard } from "./job-card";
import { featuredProducts } from "@/data/products";
import { tours } from "@/data/tours";
import type { CatalogItem, CatalogKind } from "@/data/catalog";
export function ListingCard({
  item,
  kind,
}: {
  item: CatalogItem;
  kind: CatalogKind;
}) {
  if (kind === "jobs" && item.job) return <JobCard job={item.job} />;
  if (kind === "products") {
    const product = featuredProducts.find((p) => p.slug === item.id);
    return product ? <ProductCard product={product} /> : null;
  }
  if (kind === "tours") {
    const tour = tours.find((t) => t.slug === item.id);
    return tour ? <TourCard tour={tour} /> : null;
  }
  return (
    <article className="form p-0 overflow-hidden hover-fade-in">
      <Link href={item.href}>
        <div className="relative">
          <img
            decoding="async"
            loading="lazy"
            src={item.image}
            alt={item.title}
            className="full-width h-180px object-cover"
          />
        </div>
        <div className="px-4 pb-4">
          <div className="flex row align-items-center justify-content-between">
            <h3 className="font-peyda bold text-md mb-3">{item.title}</h3>
            {item.logo && (
              <div className="w-12 h-12 round-full overflow-hidden outline-white -mt-20 index-1">
                <img
                  decoding="async"
                  loading="lazy"
                  src={item.logo}
                  alt={item.title}
                  className="full-width full-height object-cover"
                />
              </div>
            )}
          </div>
          <p className="text-muted text-xs mb-4">{item.category}</p>
          <div className="flex justify-content-between align-items-center text-sm">
            <span>{item.location}</span>
            <strong className="text-primary">
              {item.price
                ? item.price.toLocaleString("fa-IR") + " تومان"
                : item.rating || "حقوق توافقی"}
            </strong>
          </div>
          <span className="btn-primary full-width font-peyda semi-bold flex justify-content-center mt-5">
            {kind === "houses"
              ? "مشاهده اقامتگاه"
              : kind === "jobs"
                ? "مشاهده فرصت"
                : "مشاهده فروشگاه"}
          </span>
        </div>
      </Link>
    </article>
  );
}
