import Link from "next/link";
export default function NotFound() {
  return (
    <main className="project-explorer" dir="ltr">
      <h1>404</h1>
      <p>This page could not be found.</p>
      <div className="project-actions">
        <Link href="/">Back to marketplace</Link>
        <Link href="/explore">Explore all pages →</Link>
      </div>
    </main>
  );
}
