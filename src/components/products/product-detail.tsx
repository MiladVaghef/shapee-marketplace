import { SiteFooter } from "@/components/layout/site-footer";
import { MobileSiteHeader } from "@/components/layout/mobile-site-header";
import { GlobalSiteHeader } from "@/components/layout/global-site-header";
import Link from "next/link";
import type { Product } from "@/data/products";
import { PageFrame } from "@/components/layout/page-frame";

import { DetailImage } from "@/components/ui/detail-image";
import {
  defaultProductVariations,
  ProductVariationPicker,
} from "./product-variation-picker";
import { formatPersianPrice } from "@/lib/format";

// Adapted from the original inner-personal-ad detail page: shared site chrome,
// RTL gallery/seller columns, price, description, specifications and related ads.
export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const specifications = [
    ["نام محصول", product.title],
    ["دسته‌بندی", product.category],
    ["فروشنده", product.seller],
  ];
  return (
    <PageFrame className="">
      <GlobalSiteHeader desktopOnly />
      <MobileSiteHeader />
      <main className="main-container inline-space font-peyda product-detail">
        <nav
          aria-label="مسیر صفحه"
          className="product-detail-breadcrumb flex justify-content-between align-items-center gap-4"
        >
          <div className="flex wrap align-items-center gap-2 text-sm text-muted">
            <Link href="/">خانه</Link>
            <span aria-hidden="true">/</span>
            <Link href="/inner-category/products-category">محصولات</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.title}</span>
          </div>
          <Link
            href="/inner-category/products-category"
            className="text-primary text-sm product-back-link"
          >
            بازگشت به محصولات <i className="icon icon-left-arrow" />
          </Link>
        </nav>
        <div className="product-detail-hero">
          <aside className="product-detail-summary">
            <div className="product-summary">
              <span className="text-primary text-sm semi-bold">
                {product.category}
              </span>
              <h1 className="text-2xl bold mt-3 mb-4 lg-text-lg">
                {product.title}
              </h1>
              <div className="product-price-card" data-testid="product-price">
                <span className="product-price-label">قیمت آگهی</span>
                <span className="product-price-value">
                  <strong>{formatPersianPrice(product.price)}</strong>
                  <i
                    className="icon icon-toman-bold"
                    role="img"
                    aria-label="تومان"
                  />
                </span>
              </div>
              <ProductVariationPicker
                variations={product.variations ?? defaultProductVariations}
                initiallySelected={product.variations?.[0]?.name}
              />
            </div>
            <section className="form product-seller">
              <Link
                href="/profile/user-profile"
                className="flex align-items-center gap-3 product-seller-profile"
              >
                <img decoding="async" loading="lazy"
                  src="/assets/images/example/profile-picture.jpg"
                  className="w-60px h-60px round-full"
                  alt="تصویر فروشنده"
                />
                <div>
                  <h2 className="text-md semi-bold m-0">{product.seller}</h2>
                  <span className="text-xs text-muted">عضو از ۱۴۰۱</span>
                </div>
              </Link>
              <div
                className="product-seller-stats"
                aria-label="اطلاعات فروشنده"
              >
                <div>
                  <span className="product-seller-stars" aria-label="۵ ستاره">
                    ★★★★★
                  </span>
                  <span className="text-xs text-muted">امتیاز فروشنده</span>
                </div>
                <div>
                  <strong>۱۷</strong>
                  <span className="text-xs text-muted">آگهی فعال</span>
                </div>
                <div>
                  <i
                    className="icon icon-verified text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-muted">احراز هویت</span>
                </div>
              </div>
              <div className="product-seller-actions">
                <Link
                  href="/account/chat"
                  className="btn-primary full-width flex justify-content-center align-items-center gap-2"
                >
                  <i className="icon icon-chat-sms" />
                  گفتگو با فروشنده
                </Link>
                <Link
                  href="/profile/shops-profile"
                  className="btn-secondary full-width flex justify-content-center align-items-center"
                >
                  مشاهده فروشگاه
                </Link>
              </div>
            </section>
            {product.highlights && product.highlights.length > 0 && (
              <section
                className="form product-highlights"
                aria-labelledby="product-highlights-title"
              >
                <div className="flex align-items-center gap-3">
                  <i
                    className="icon icon-package text-primary"
                    aria-hidden="true"
                  />
                  <h2
                    id="product-highlights-title"
                    className="text-md bold m-0"
                  >
                    ویژگی‌های محصول
                  </h2>
                </div>
                <p className="text-sm text-muted m-0 product-highlights-summary">
                  {product.title} در دسته {product.category}؛ جزئیات اصلی کالا
                  را اینجا ببینید.
                </p>
                <dl className="product-highlights-list">
                  {product.highlights.map(({ label, value }) => (
                    <div key={label}>
                      <dt className="text-sm text-muted">{label}</dt>
                      <dd className="text-sm semi-bold m-0">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </aside>
          <div className="product-detail-media">
            <DetailImage image={product.image} title={product.title} />
          </div>
        </div>
        <div className="product-detail-information">
          <section className="form">
            <div className="flex align-items-center gap-3 mb-5">
              <i className="icon icon-document-text text-primary" />
              <h2 className="text-md bold m-0">توضیحات محصول</h2>
            </div>
            <p className="text-sm product-description">
              {product.title} با قیمت {formatPersianPrice(product.price)} تومان
              در شاپی ثبت شده است. برای مشاهده سایر آگهی‌ها و اطلاعات فروشنده،
              از لینک‌های همین صفحه استفاده کنید.
            </p>
          </section>
          <section className="form">
            <div className="flex align-items-center gap-3 mb-5">
              <i className="icon icon-page text-primary" />
              <h2 className="text-md bold m-0">مشخصات محصول</h2>
            </div>
            <dl className="product-specifications">
              {specifications.map(([name, value]) => (
                <div
                  key={name}
                  className="flex justify-content-between gap-4 border-bottom pb-3 pt-3"
                >
                  <dt className="text-muted text-sm">{name}</dt>
                  <dd className="semi-bold text-sm m-0">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
        {related.length > 0 && (
          <section>
            <div className="flex align-items-center justify-content-between mb-5">
              <h2 className="text-md bold m-0">محصولات دیگر</h2>
              <Link
                href="/inner-category/products-category"
                className="text-primary text-sm"
              >
                مشاهده همه
              </Link>
            </div>
            <div className="product-related-grid">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="form flex column p-0 overflow-hidden product-related-card"
                >
                  <img decoding="async" loading="lazy" src={item.image} alt={item.title} />
                  <div className="p-4">
                    <h3 className="semi-bold text-sm m-0 mb-3">{item.title}</h3>
                    <span className="text-primary text-sm">
                      {formatPersianPrice(item.price)} تومان
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </PageFrame>
  );
}
