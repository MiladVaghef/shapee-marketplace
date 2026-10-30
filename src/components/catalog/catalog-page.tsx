import { StorefrontLayout } from "@/components/layout/storefront-layout";

import { CategoryListing } from "./category-listing";
import type { CatalogKind } from "@/data/catalog";
export function CatalogPage({
  kind,
  query = "",
}: {
  kind: CatalogKind;
  query?: string;
}) {
  return (
    <StorefrontLayout>
      <CategoryListing key={kind + query} kind={kind} initialQuery={query} />
    </StorefrontLayout>
  );
}
