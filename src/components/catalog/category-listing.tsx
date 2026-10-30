"use client";
import { useModalFocus, trapModalTab } from "@/hooks/use-modal-focus";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  type CatalogKind,
  catalogTitles,
  getCatalogItems,
} from "@/data/catalog";
import { ListingCard } from "./listing-card";
import "./category-listing.scss";
type Filters = {
  query: string;
  category: string;
  location: string;
  maximum: string;
};
const empty: Filters = { query: "", category: "", location: "", maximum: "" };
const routes: Record<CatalogKind, string> = {
  products: "products-category",
  tours: "products-category?type=tours",
  houses: "house-category",
  shops: "online-shops-category",
  brands: "brands-category",
  jobs: "hire-ads-category",
};
const normalize = (value: string) =>
  value.replace(/ي/g, "ی").replace(/ك/g, "ک").trim().toLocaleLowerCase();
export function CategoryListing({
  kind,
  initialQuery = "",
}: {
  kind: CatalogKind;
  initialQuery?: string;
}) {
  const [draft, setDraft] = useState<Filters>({
    ...empty,
    query: initialQuery,
  });
  const [filters, setFilters] = useState(draft);
  const [sort, setSort] = useState("default");
  const [panel, setPanel] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useModalFocus(panelRef, Boolean(panel));

  const items = getCatalogItems(kind);
  const categories = [...new Set(items.map((i) => i.category))];
  const locations = [...new Set(items.map((i) => i.location))];
  const results = items
    .filter(
      (i) =>
        normalize(i.title + " " + i.category + " " + i.location).includes(
          normalize(filters.query),
        ) &&
        (!filters.category || i.category === filters.category) &&
        (!filters.location || i.location === filters.location) &&
        (!filters.maximum || i.price <= Number(filters.maximum)),
    )
    .sort((a, b) =>
      sort === "cheap"
        ? a.price - b.price
        : sort === "expensive"
          ? b.price - a.price
          : 0,
    );
  const reset = () => {
    setDraft(empty);
    setFilters(empty);
    setSort("default");
  };
  const apply = () => {
    setFilters(draft);
    setPanel(null);
  };
  const fields = (prefix: string) => (
    <>
      <label htmlFor={prefix + "-query"}>
        جستجو
        <input
          id={prefix + "-query"}
          type="search"
          value={draft.query}
          onChange={(e) => setDraft({ ...draft, query: e.target.value })}
          placeholder="نام، دسته‌بندی یا شهر"
        />
      </label>
      <label htmlFor={prefix + "-category"}>
        دسته‌بندی
        <select
          id={prefix + "-category"}
          value={draft.category}
          onChange={(e) => setDraft({ ...draft, category: e.target.value })}
        >
          <option value="">همه دسته‌بندی‌ها</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <label htmlFor={prefix + "-location"}>
        موقعیت
        <select
          id={prefix + "-location"}
          value={draft.location}
          onChange={(e) => setDraft({ ...draft, location: e.target.value })}
        >
          <option value="">همه شهرها</option>
          {locations.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      {items.some((i) => i.price > 0) && (
        <label htmlFor={prefix + "-price"}>
          حداکثر قیمت (تومان)
          <input
            id={prefix + "-price"}
            type="number"
            min="0"
            value={draft.maximum}
            onChange={(e) => setDraft({ ...draft, maximum: e.target.value })}
          />
        </label>
      )}
      <button className="btn-primary full-width font-peyda" type="submit">
        اعمال فیلترها
      </button>
      <button
        className="btn-secondary full-width font-peyda"
        type="button"
        onClick={reset}
      >
        حذف همه فیلترها
      </button>
    </>
  );
  const sorting = (prefix: string) => (
    <label htmlFor={prefix + "-sort"}>
      مرتب‌سازی
      <select
        id={prefix + "-sort"}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">مرتبط‌ترین</option>
        {items.some((i) => i.price > 0) && (
          <>
            <option value="cheap">ارزان‌ترین</option>
            <option value="expensive">گران‌ترین</option>
          </>
        )}
      </select>
    </label>
  );
  const categoryLinks = () =>
    (Object.keys(routes) as CatalogKind[]).map((k) => (
      <Link
        key={k}
        href={"/inner-category/" + routes[k]}
        className={
          "flex justify-content-between p-4 text-sm " +
          (kind === k ? "bg-primary-light text-primary" : "")
        }
        aria-current={kind === k ? "page" : undefined}
      >
        {catalogTitles[k]}
        <i className="icon icon-left-2" />
      </Link>
    ));
  return (
    <main
      className="products-category-page main-container mt-10 flex column gap-5 lg-mb-20 inline-space font-peyda listing"
      onClick={(e) => e.stopPropagation()}
    >
      <nav aria-label="مسیر صفحه" className="text-sm text-muted">
        <Link href="/">خانه</Link> / {catalogTitles[kind]}
      </nav>
      <h1 className="text-lg semi-bold m-0">{catalogTitles[kind]}</h1>
      <div className="flex gap-5 lg-column">
        <aside className="lg-full-width flex column gap-4 full-width max-w-35 lg-max-w-unset">
          <form
            className="form lg-remove listing-fields"
            onSubmit={(e) => {
              e.preventDefault();
              apply();
            }}
          >
            <h2 className="text-md bold m-0">فیلترهای جستجو</h2>
            {fields("desktop")}
          </form>
          <div className="form lg-remove">
            <h2 className="text-md bold">دسته‌بندی‌ها</h2>
            {categoryLinks()}
          </div>
          <div className="row gap-2 remove lg-flex">
            {[
              ["sort-sorting", "sort", "مرتب‌سازی"],
              ["fitler-trigger", "fitler", "فیلتر‌"],
              ["category-trigger", "category", "دسته بندی"],
            ].map(([trigger, key, label]) => (
              <button
                key={key}
                id={"products-mobile-" + trigger}
                className="btn-secondary font-peyda fill"
                type="button"
                onClick={() => {
                  setPanel(key);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </aside>
        <div className="full-width min-w-0">
          <div className="flex justify-content-between align-items-center mb-5 gap-3">
            <span role="status" className="text-sm text-muted">
              {results.length.toLocaleString("fa-IR")} نتیجه
            </span>
            <div className="lg-remove listing-fields">{sorting("desktop")}</div>
          </div>
          {results.length ? (
            <section
              aria-label="نتایج"
              className={
                kind === "tours"
                  ? "grid grid-col-3 xl-grid-col-2 md-grid-col-1 gap-4"
                  : ["shops", "brands", "houses"].includes(kind)
                    ? "grid grid-col-2 sm-grid-col-1 gap-4"
                    : "grid grid-col-4 xl-grid-col-3 md-grid-col-1 gap-4"
              }
            >
              {results.map((item) => (
                <ListingCard key={item.id} item={item} kind={kind} />
              ))}
            </section>
          ) : (
            <div className="form flex column align-items-center gap-4">
              <h2 className="text-md">نتیجه‌ای پیدا نشد</h2>
              <p className="text-sm text-muted">
                عبارت جستجو یا فیلترها را تغییر دهید.
              </p>
              <button className="btn-secondary" onClick={reset}>
                حذف همه فیلترها
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        id="products-mobile-overlay"
        aria-label="بستن فیلترها"
        className={
          "background-overlay listing-backdrop " + (!panel ? "hidden" : "")
        }
        onClick={() => setPanel(null)}
      />
      {["sort", "fitler", "category"].map((key) => (
        <div
          key={key}
          id={"products-mobile-" + key + "-drawer"}
          ref={panel === key ? panelRef : undefined}
          role="dialog"
          aria-modal="true"
          aria-hidden={panel !== key}
          aria-label={
            key === "sort"
              ? "مرتب‌سازی"
              : key === "category"
                ? "دسته‌بندی‌ها"
                : "فیلترهای جستجو"
          }
          hidden={panel !== key}
          className="listing-drawer form font-peyda"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              setPanel(null);
            }
            trapModalTab(e);
          }}
        >
          <button
            type="button"
            className="overlay-close-button"
            aria-label="بستن پنجره"
            onClick={() => setPanel(null)}
          >
            <i className="icon icon-cross" />
          </button>
          <h2 className="text-md">
            {key === "sort"
              ? "مرتب‌سازی"
              : key === "category"
                ? "دسته‌بندی‌ها"
                : "فیلترهای جستجو"}
          </h2>
          {key === "sort" ? (
            <div className="listing-fields">
              {sorting("mobile")}
              <button className="btn-primary" onClick={() => setPanel(null)}>
                اعمال
              </button>
            </div>
          ) : key === "category" ? (
            <nav className="flex column gap-3">{categoryLinks()}</nav>
          ) : (
            <form
              className="listing-fields"
              onSubmit={(e) => {
                e.preventDefault();
                apply();
              }}
            >
              {fields("mobile")}
            </form>
          )}
        </div>
      ))}
    </main>
  );
}
