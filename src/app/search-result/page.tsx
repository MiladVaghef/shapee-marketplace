import { CatalogPage } from "@/components/catalog/catalog-page";
export const metadata = { title: "نتایج جستجو | شاپی" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string }>;
}) {
  const params = await searchParams;
  return (
    <CatalogPage
      kind={params.type === "tours" ? "tours" : "products"}
      query={params.q}
    />
  );
}
