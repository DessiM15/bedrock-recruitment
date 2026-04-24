import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
        <h1 className="mb-4 font-serif text-6xl font-light text-dark-green">
          404
        </h1>
        <p className="mb-8 text-lg text-dark-green/70">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="rounded-md bg-tan px-6 py-3 font-medium text-white transition-colors hover:bg-tan-light"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
