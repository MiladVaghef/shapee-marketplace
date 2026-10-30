import { LocationButton } from "@/components/layout/location-provider";

export function MobileSiteHeader() {
  return (
    <>
      <header className="remove pt-2 pb-2 lg-flex gap-3 fixed top-0 full-width index-2000 bg-background">
        <div
          id="header-search-bar"
          className="h-fit light-border p-3 round-sm full-width bg-background-alt mr-5"
          role="button"
          tabIndex={0}
          aria-label="باز کردن جستجو"
          aria-haspopup="dialog"
        >
          <div className="flex row align-items-center">
            <i className="icon icon-search text-muted w-3 h-3"></i>

            <div className="flex row align-items-center gap-2 full-width indent-1 pointer">
              <span className="font-peyda text-muted text-sm">
                {"جستجو در"}
              </span>

              <img
                src="/assets/logo/shapee-optimized-2.webp"
                alt="لوگو شاپی"
                className="w-8 mb-1"
              />
            </div>
          </div>
        </div>

        <LocationButton />
      </header>
    </>
  );
}
