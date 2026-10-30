import { CatalogPage } from "@/components/catalog/catalog-page";
import { catalogTitles } from "@/data/catalog";
export const metadata = { title: catalogTitles["jobs"] + " | شاپی" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; q?: string }>;
}) {
  const params = await searchParams;
  return <CatalogPage kind={"jobs"} query={params.q} />;
}
