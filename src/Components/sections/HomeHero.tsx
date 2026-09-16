import Link from "next/link";
import Container from "../ui/Container";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gray-100">
      <Container>
        <div className="flex min-h-[calc(100vh-80px)] items-center py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Daya Constructions & Structural Consultants
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
              Building with strength.
              <br />
              Designing with confidence.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Construction and structural solutions built around precision,
              reliability and long-term performance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
              >
                Explore Projects
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-900 px-6 py-3 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}