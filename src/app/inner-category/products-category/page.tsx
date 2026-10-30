import { CatalogPage } from "@/components/catalog/catalog-page";
import { catalogTitles } from "@/data/catalog";
export const metadata = { title: catalogTitles["products"] + " | شاپی" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; q?: string }>;
}) {
  const params = await searchParams;
  return (
    <CatalogPage
      kind={params.type === "tours" ? "tours" : "products"}
      query={params.q}
    />
  );
}
