"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="project-explorer" dir="ltr">
      <h1>Something went wrong.</h1>
      <p>Please try opening this screen again.</p>
      <button type="button" className="btn-primary" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
