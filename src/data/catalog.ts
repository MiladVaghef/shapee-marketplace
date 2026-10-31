import { featuredProducts } from "./products";
import { jobAds, jobHref, type JobAd } from "./jobs";
import { tours } from "./tours";
import { properties } from "./properties";
import { topShops, topBrands } from "./home-stores";

export type CatalogKind =
  "products" | "tours" | "houses" | "shops" | "brands" | "jobs";
export type CatalogItem = {
  id: string;
  title: string;
  category: string;
  location: string;
  price: number;
  image: string;
  href: string;
  logo?: string;
  rating?: string;
  job?: JobAd;
};
export const catalogTitles: Record<CatalogKind, string> = {
  products: "محصولات",
  tours: "تورهای منتخب",
  houses: "خانه‌ها و ویلاها",
  shops: "آنلاین شاپ برتر",
  brands: "برند برتر",
  jobs: "فرصت‌های شغلی",
};
export function numericPrice(value: string) {
  return Number(
    value
      .replace(/[۰-۹]/g, (c) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(c)))
      .replace(/[^0-9]/g, ""),
  );
}
export function getCatalogItems(kind: CatalogKind): CatalogItem[] {
  if (kind === "products")
    return featuredProducts.map((p) => ({
      id: p.slug,
      title: p.title,
      category: p.category,
      location: p.location,
      price: numericPrice(p.price),
      image: p.image,
      href: `/products/${p.slug}`,
    }));
  if (kind === "tours")
    return tours.map((t) => ({
      id: t.slug,
      title: t.title,
      category: ["shiraz", "mazandaran"].includes(t.slug)
        ? "تور داخلی"
        : "تور خارجی",
      location: t.destination,
      price: numericPrice(t.price),
      image: t.image,
      href: `/tours/${t.slug}`,
    }));
  if (kind === "houses")
    return properties.map((p) => ({
      id: p.slug,
      title: p.title,
      category: "ویلا",
      location: p.location,
      price: numericPrice(p.price),
      image: p.image,
      href: `/properties/${p.slug}`,
    }));
  if (kind === "jobs")
    return jobAds.map((job) => ({
      id: job.id,
      title: job.title,
      category: job.category,
      location: job.location,
      price: 0,
      image: "",
      href: jobHref(job.id),
      job,
    }));
  return (kind === "brands" ? topBrands : topShops).map((s) => ({
    id: s.id,
    title: s.name,
    category: s.category,
    location: s.city,
    price: 0,
    image: s.cover,
    logo: s.logo,
    rating: s.rating,
    href: `/profile/shops-profile?shop=${s.id}`,
  }));
}
