import Link from "next/link";
import type { Metadata } from "next";
import { pages } from "@/data/pages";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Shapee | Project explorer" };
export default function ExplorePage() {
  const groups = [...new Set(pages.map((p) => p.group))];
  return (
    <main className="project-explorer" dir="ltr">
      <header>
        <Link href="/" className="project-brand">
          <img src="/assets/logo/shapee.png" alt="Shapee" width="130" />
        </Link>
        <span className="project-eyebrow">
          NEXT.JS · REACT · TYPESCRIPT · SCSS
        </span>
        <div className="project-actions">
          <Link href={`/products/${products[0].slug}`}>
            Explore product details →
          </Link>
        </div>
        <h1>
          A marketplace.
          <br />
          Every screen, connected.
        </h1>
        <p>
          A Persian marketplace interface with responsive storefronts, listing
          flows, and a shared account dashboard. Explore all {pages.length}{" "}
          screens below.
        </p>
        <div className="project-actions">
          <Link href="/" className="project-primary">
            Open marketplace ↗
          </Link>
          <Link href="/account/dashboard">Explore dashboard →</Link>
        </div>
      </header>
      {groups.map((group) => (
        <section key={group}>
          <h2>{group.replaceAll("-", " ")}</h2>
          <div className="project-grid">
            {pages
              .filter((p) => p.group === group)
              .map((page, index) => (
                <Link
                  href={page.route}
                  key={page.route}
                  className="project-card"
                >
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 dir="rtl">{page.title}</h3>
                  <code>{page.route}</code>
                  <span className="project-arrow">↗</span>
                </Link>
              ))}
          </div>
        </section>
      ))}
      <footer>Design and original frontend: Milad Vaghef · Shapee</footer>
    </main>
  );
}
