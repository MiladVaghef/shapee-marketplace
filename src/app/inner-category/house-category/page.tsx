import { CatalogPage } from "@/components/catalog/catalog-page";
import { catalogTitles } from "@/data/catalog";
export const metadata = { title: catalogTitles["houses"] + " | شاپی" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; q?: string }>;
}) {
  const params = await searchParams;
  return <CatalogPage kind={"houses"} query={params.q} />;
}
