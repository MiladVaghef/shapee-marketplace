import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPersianPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="catalog-product-card">
      <div className="catalog-product-image">
        <img
          loading="lazy"
          src={product.image}
          alt={product.title}
          decoding="async"
          srcSet={
            product.image.startsWith("/assets/images/products/")
              ? `${product.image.replace(".webp", "-480.webp")} 480w, ${product.image} 1024w`
              : undefined
          }
          sizes="(max-width: 768px) 132px, (max-width: 1300px) 30vw, 22vw"
        />
      </div>
      <div className="catalog-product-content">
        <span className="catalog-product-category">{product.category}</span>
        <h3>{product.title}</h3>
        <div className="catalog-product-bottom">
          <span className="catalog-product-price">
            <span>{formatPersianPrice(product.price)}</span>
            <span>تومان</span>
          </span>
          <i className="icon icon-left-2" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
