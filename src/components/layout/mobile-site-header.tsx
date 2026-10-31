import { LocationButton } from "@/components/layout/location-provider";

export function MobileSiteHeader() {
  return (
    <>
      <header className="remove pt-3 pb-3 h-10 lg-flex fixed top-0 full-width index-2000 bg-background">
        <div className="full-width flex row justify-content-center gap-3 main-container lg-pl-5 lg-pr-5">
          <div
            id="header-search-bar"
            className="h-fit min-h-7 light-border p-3 round-sm full-width bg-background-alt"
            role="button"
            tabIndex={0}
            aria-label="باز کردن جستجو"
            aria-haspopup="dialog"
          >
            <div className="flex row align-items-center mt-1">
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
        </div>
      </header>
    </>
  );
}
