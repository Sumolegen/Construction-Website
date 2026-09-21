import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section heading */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="About Daya"
              title="Built on knowledge. Driven by precision."
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="max-w-2xl">
              <p className="font-[var(--font-primary)] text-2xl font-medium leading-tight tracking-tight text-gray-900 sm:text-3xl">
                Daya Constructions & Structural Consultants is a construction
                and structural consultancy company focused on creating
                dependable, well-engineered spaces.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                From structural design and construction to restoration,
                rehabilitation and project management, we approach every
                project with attention to detail, technical understanding and
                long-term performance.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 border-b border-gray-900 pb-1 font-[var(--font-primary)] text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-gray-500 hover:text-gray-600"
              >
                <span>Discover Daya</span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}