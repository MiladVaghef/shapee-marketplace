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
import { CatalogSelect } from "./catalog-select";
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
const countFilters = (value: Filters) =>
  Object.values(value).filter((value) => value.trim()).length;
type Panel = "sort" | "fitler" | "category";
const panelTitles = {
  sort: "مرتب‌سازی",
  fitler: "فیلترهای جستجو",
  category: "دسته‌بندی‌ها",
};

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
  const [draftSort, setDraftSort] = useState(sort);
  const [panel, setPanel] = useState<Panel | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useModalFocus(panelRef, Boolean(panel));
  const items = getCatalogItems(kind);
  const categories = [...new Set(items.map((i) => i.category))];
  const locations = [...new Set(items.map((i) => i.location))];
  const hasPrice = items.some((i) => i.price > 0);
  const matches = (i: (typeof items)[number], value: Filters) =>
    normalize(
      [
        i.title,
        i.category,
        i.location,
        i.job?.company,
        i.job?.workplace,
        ...(i.job?.skills ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    ).includes(normalize(value.query)) &&
    (!value.category || i.category === value.category) &&
    (!value.location || i.location === value.location) &&
    (!value.maximum || i.price <= Number(value.maximum));
  const results = items
    .filter((i) => matches(i, filters))
    .sort((a, b) =>
      sort === "cheap"
        ? a.price - b.price
        : sort === "expensive"
          ? b.price - a.price
          : 0,
    );
  const previewCount = items.filter((i) => matches(i, draft)).length;
  const activeCount = countFilters(filters);
  const reset = () => {
    setDraft(empty);
    setFilters(empty);
  };
  const apply = () => {
    setFilters({ ...draft, query: draft.query.trim() });
    setPanel(null);
  };
  const removeFilter = (key: keyof Filters) => {
    const next = { ...filters, [key]: "" };
    setFilters(next);
    setDraft(next);
  };
  const openPanel = (key: Panel) => {
    if (key === "fitler") setDraft(filters);
    if (key === "sort") setDraftSort(sort);
    setPanel(key);
  };
  const filterHeader = () => (
    <div className="listing-filter-heading">
      <h2>
        <i className="icon icon-filter" aria-hidden="true" />
        فیلترهای جستجو
        {activeCount > 0 && (
          <span className="listing-count">
            {activeCount.toLocaleString("fa-IR")}
          </span>
        )}
      </h2>
      {(activeCount > 0 || countFilters(draft) > 0) && (
        <button className="listing-reset" type="button" onClick={reset}>
          حذف همه فیلترها
        </button>
      )}
    </div>
  );
  const fields = (prefix: string) => (
    <>
      <div className="listing-fields__body">
        <label htmlFor={prefix + "-query"}>
          جستجو
          <span className="listing-search">
            <i className="icon icon-search" aria-hidden="true" />
            <input
              id={prefix + "-query"}
              type="search"
              value={draft.query}
              onChange={(e) => setDraft({ ...draft, query: e.target.value })}
              placeholder={
                kind === "jobs" ? "عنوان شغل یا مهارت" : "نام، دسته‌بندی یا شهر"
              }
            />
          </span>
        </label>
        <CatalogSelect
          id={prefix + "-category"}
          label="دسته‌بندی"
          value={draft.category}
          onChange={(category) => setDraft({ ...draft, category })}
          options={[
            { value: "", label: "همه دسته‌بندی‌ها" },
            ...categories.map((value) => ({ value, label: value })),
          ]}
        />
        <CatalogSelect
          id={prefix + "-location"}
          label="شهر"
          value={draft.location}
          onChange={(location) => setDraft({ ...draft, location })}
          options={[
            { value: "", label: "همه شهرها" },
            ...locations.map((value) => ({ value, label: value })),
          ]}
        />
        {hasPrice && (
          <label htmlFor={prefix + "-price"}>
            <span className="listing-field-label">
              حداکثر قیمت <small>تومان</small>
            </span>
            <input
              id={prefix + "-price"}
              type="number"
              inputMode="numeric"
              min="0"
              value={draft.maximum}
              onChange={(e) => setDraft({ ...draft, maximum: e.target.value })}
              placeholder="بدون محدودیت"
            />
          </label>
        )}
      </div>
      <div className="listing-fields__footer">
        <button
          className="listing-apply"
          type="submit"
          aria-label="اعمال فیلترها"
        >
          <span>اعمال فیلترها</span>
          <span className="listing-apply__count" aria-hidden="true">
            <bdi>{previewCount.toLocaleString("fa-IR")}</bdi>
            <span>نتیجه</span>
          </span>
        </button>
        {prefix === "mobile" &&
          (countFilters(draft) > 0 || activeCount > 0) && (
            <button className="listing-reset" type="button" onClick={reset}>
              حذف همه فیلترها
            </button>
          )}
      </div>
    </>
  );
  const sorting = (prefix: string) => (
    <CatalogSelect
      id={prefix + "-sort"}
      label="مرتب‌سازی"
      value={prefix === "mobile" ? draftSort : sort}
      onChange={prefix === "mobile" ? setDraftSort : setSort}
      options={[
        { value: "default", label: "مرتبط‌ترین" },
        ...(hasPrice
          ? [
              { value: "cheap", label: "ارزان‌ترین" },
              { value: "expensive", label: "گران‌ترین" },
            ]
          : []),
      ]}
    />
  );
  const categoryLinks = () =>
    (Object.keys(routes) as CatalogKind[]).map((k) => (
      <Link
        key={k}
        href={"/inner-category/" + routes[k]}
        aria-current={kind === k ? "page" : undefined}
      >
        {catalogTitles[k]}
        <i className="icon icon-left-2" aria-hidden="true" />
      </Link>
    ));
  const chips = (Object.keys(filters) as (keyof Filters)[])
    .filter((key) => filters[key])
    .map((key) => ({
      key,
      label:
        key === "maximum"
          ? "تا " + Number(filters[key]).toLocaleString("fa-IR") + " تومان"
          : key === "query"
            ? "جستجو: " + filters[key]
            : filters[key],
    }));
  return (
    <main
      className="products-category-page main-container mt-10 flex column gap-5 lg-mb-20 inline-space font-peyda listing"
      onClick={(e) => e.stopPropagation()}
    >
      <nav aria-label="مسیر صفحه" className="text-sm text-muted">
        <Link href="/">خانه</Link> / {catalogTitles[kind]}
      </nav>
      <h1 className="text-lg semi-bold m-0">{catalogTitles[kind]}</h1>
      {kind === "jobs" && (
        <p className="jobs-intro">
          فرصت بعدی‌تان را بر اساس تخصص و شهر پیدا کنید.
          <span>آگهی‌های نمونه</span>
        </p>
      )}
      <div className="listing-layout">
        <aside className="listing-sidebar" aria-label="فیلترها و دسته‌بندی‌ها">
          <form
            className="listing-filter-card listing-fields lg-remove"
            onSubmit={(e) => {
              e.preventDefault();
              apply();
            }}
          >
            {filterHeader()}
            {fields("desktop")}
          </form>
          <nav
            className="listing-categories lg-remove"
            aria-label="دسته‌بندی‌های شاپی"
          >
            <h2>دسته‌بندی‌ها</h2>
            {categoryLinks()}
          </nav>
          <div className="listing-mobile-tools">
            {(
              [
                ["fitler-trigger", "fitler", "فیلترها", "icon-filter"],
                ["sort-sorting", "sort", "مرتب‌سازی", "icon-sort-amount-down"],
                ["category-trigger", "category", "دسته‌بندی‌ها", "icon-grid"],
              ] as const
            ).map(([trigger, key, label, icon]) => (
              <button
                key={key}
                id={"products-mobile-" + trigger}
                type="button"
                aria-expanded={panel === key}
                aria-controls={"products-mobile-" + key + "-drawer"}
                onClick={() => openPanel(key)}
              >
                <i className={"icon " + icon} aria-hidden="true" />
                {label}
                {key === "fitler" && activeCount > 0 && (
                  <span className="listing-count">
                    {activeCount.toLocaleString("fa-IR")}
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>
        <div className="listing-results">
          <div className="listing-toolbar">
            <span
              className="listing-result-count"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              <strong>{results.length.toLocaleString("fa-IR")}</strong>
              <span>نتیجه</span>
              {activeCount > 0 && (
                <small> از {items.length.toLocaleString("fa-IR")} مورد</small>
              )}
            </span>
            <div className="lg-remove listing-sorting">
              {sorting("desktop")}
            </div>
          </div>
          {activeCount > 0 && (
            <div
              className="listing-active"
              role="group"
              aria-label="فیلترهای فعال"
            >
              {chips.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => removeFilter(key)}
                  aria-label={"حذف فیلتر " + label}
                >
                  {label}
                  <span aria-hidden="true">×</span>
                </button>
              ))}
              <button type="button" className="listing-reset" onClick={reset}>
                حذف همه فیلترها
              </button>
            </div>
          )}
          {results.length ? (
            <section
              aria-label="نتایج"
              className={
                kind === "jobs"
                  ? "jobs-grid"
                  : kind === "tours"
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
            <div className="listing-empty">
              <i className="icon icon-search" aria-hidden="true" />
              <h2>نتیجه‌ای پیدا نشد</h2>
              <p>عبارت جستجو یا فیلترها را تغییر دهید.</p>
              <button type="button" onClick={reset}>
                حذف همه فیلترها
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        id="products-mobile-overlay"
        aria-label="بستن فیلترها"
        tabIndex={-1}
        className={
          "background-overlay listing-backdrop " + (!panel ? "hidden" : "")
        }
        onClick={() => setPanel(null)}
      />
      {(["sort", "fitler", "category"] as const).map((key) => (
        <div
          key={key}
          id={"products-mobile-" + key + "-drawer"}
          ref={panel === key ? panelRef : undefined}
          role="dialog"
          aria-modal="true"
          aria-hidden={panel !== key}
          aria-labelledby={"listing-" + key + "-title"}
          hidden={panel !== key}
          className="listing-drawer font-peyda"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              setPanel(null);
            }
            trapModalTab(e);
          }}
        >
          <div className="listing-drawer__header">
            <h2 id={"listing-" + key + "-title"}>{panelTitles[key]}</h2>
            <button
              type="button"
              aria-label="بستن پنجره"
              onClick={() => setPanel(null)}
            >
              <i className="icon icon-cross" aria-hidden="true" />
            </button>
          </div>
          {key === "sort" ? (
            <div className="listing-fields">
              <div className="listing-fields__body">{sorting("mobile")}</div>
              <div className="listing-fields__footer">
                <button
                  type="button"
                  className="listing-apply"
                  onClick={() => {
                    setSort(draftSort);
                    setPanel(null);
                  }}
                >
                  اعمال
                </button>
              </div>
            </div>
          ) : key === "category" ? (
            <nav className="listing-categories">{categoryLinks()}</nav>
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
