import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 / Page Not Found</p>
      <h1>
        This page is<br />
        <em>still an idea.</em>
      </h1>
      <p>The page you’re looking for isn’t here or has been moved.</p>
      <Link className="button dark" href="/">
        Return to the Portfolio
      </Link>
    </main>
  );
}
