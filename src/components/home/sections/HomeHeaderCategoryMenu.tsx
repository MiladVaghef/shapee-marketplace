"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export function HomeHeaderCategoryMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  return (
    <div
      ref={root}
      style={{ display: "contents" }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          setOpen(false);
          trigger.current?.focus();
        }
      }}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) setOpen(false);
      }}
    >
      <div className="flex row gap-3 lg-remove">
        <button
          id="categories-button"
          ref={trigger}
          onClick={() => setOpen((value) => !value)}
          aria-haspopup="true"
          aria-expanded={open}
          className="font-peyda medium text-sm btn-secondary flex justify-content-center align-items-center gap-3 w-18 xl-pl-4 xl-pr-4"
          type="button"
        >
          <span>{"دسته بندی ها"}</span>

          <i className="icon icon-down-2 text-text"></i>
        </button>
      </div>

      <div
        id="mega-menu"
        className={"flex row index-2000 " + (open ? "portfolio-menu-open" : "")}
      >
        <a href="/inner-category/products-category" className="xl-remove">
          <div id="mega-menu-banner" className="flex">
            <img
              src="/assets/images/example/mega-menu-banner.png"
              alt="بنر مگا منو"
            />
          </div>
        </a>

        <div className="flex row gap-1 pl-3 pr-3 pt-6 pb-6 full-width">
          <div className="flex column fill pl-5 pr-5 font-peyda light-gray-left-border">
            <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
              <div className="bg-subtle round-md flex p-4">
                <i className="icon icon-grid text-text w-3 h-3"></i>
              </div>

              <span className="semi-bold">{"آگهی تکی"}</span>
            </div>

            <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
              <div className="flex column gap-6 mr-1">
                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>
              </div>

              <div className="mt-10">
                <Link
                  href="/inner-category/products-category"
                  className="btn-subtle full-width flex justify-content-center align-items-center font-peyda text-secondary semi-bold"
                >
                  {" مشاهده همه "}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex column fill pl-5 pr-5 font-peyda light-gray-left-border">
            <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
              <div className="bg-subtle round-md flex p-4">
                <i className="icon icon-grid text-text w-3 h-3"></i>
              </div>

              <span className="semi-bold">{"آگهی تکی"}</span>
            </div>

            <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
              <div className="flex column gap-6 mr-1">
                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>
              </div>

              <div className="mt-10">
                <Link
                  href="/inner-category/products-category"
                  className="btn-subtle full-width flex justify-content-center align-items-center font-peyda text-secondary semi-bold"
                >
                  {" مشاهده همه "}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex column fill pl-5 pr-5 font-peyda light-gray-left-border">
            <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
              <div className="bg-subtle round-md flex p-4">
                <i className="icon icon-grid text-text w-3 h-3"></i>
              </div>

              <span className="semi-bold">{"آگهی تکی"}</span>
            </div>

            <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
              <div className="flex column gap-6 mr-1">
                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>
              </div>

              <div className="mt-10">
                <Link
                  href="/inner-category/products-category"
                  className="btn-subtle full-width flex justify-content-center align-items-center font-peyda text-secondary semi-bold"
                >
                  {" مشاهده همه "}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex column fill pl-5 pr-5 font-peyda">
            <div className="flex row gap-4 align-items-center light-gray-bottom-border pb-3">
              <div className="bg-subtle round-md flex p-4">
                <i className="icon icon-grid text-text w-3 h-3"></i>
              </div>

              <span className="semi-bold">{"آگهی تکی"}</span>
            </div>

            <div className="flex column mt-5 font-sans text-sm justify-content-between full-height">
              <div className="flex column gap-6 mr-1">
                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-car text-secondary w-3 h-3"></i>
                    {" وسایل نقلیه "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-motorcycle-race text-secondary w-3 h-3"></i>
                    {" موتورسیکلت "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>

                <Link
                  href="/inner-category/products-category"
                  className="flex align-items-center justify-content-between"
                >
                  <span className="flex align-items-center gap-4">
                    <i className="icon icon-home-smile text-secondary w-3 h-3"></i>
                    {" املاک "}
                  </span>

                  <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
                </Link>
              </div>

              <div className="mt-10">
                <Link
                  href="/inner-category/products-category"
                  className="btn-subtle full-width flex justify-content-center align-items-center font-peyda text-secondary semi-bold"
                >
                  {" مشاهده همه "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
