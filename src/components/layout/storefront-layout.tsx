import type { ReactNode } from "react";
import { GlobalSiteHeader } from "./global-site-header";
import { SiteFooter } from "./site-footer";
import { PageFrame } from "./page-frame";

/** Standard chrome for catalog and destination pages. */
export function StorefrontLayout({ children }: { children: ReactNode }) {
  return (
    <PageFrame className="">
      <GlobalSiteHeader />
      {children}
      <SiteFooter />
    </PageFrame>
  );
}
