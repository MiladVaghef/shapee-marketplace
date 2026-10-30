import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProducts, getProduct, products } from "@/data/products";
import { ProductDetail } from "@/components/products/product-detail";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return { title: "محصول پیدا نشد" };
  return {
    title: `شاپی | ${product.title}`,
    description: `${product.title} — ${product.price} تومان در شاپی.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = featuredProducts
    .filter(
      (item) => item.slug !== product.slug && item.image !== product.image,
    )
    .slice(0, 4);
  return <ProductDetail product={product} related={related} />;
}
