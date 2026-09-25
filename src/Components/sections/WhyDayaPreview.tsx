import Link from "next/link";
import Container from "../ui/Container";

const principles = [
  {
    number: "01",
    title: "Engineering-Led Approach",
    description:
      "Every project is approached with technical understanding, structural knowledge and practical engineering considerations.",
  },
  {
    number: "02",
    title: "Quality & Precision",
    description:
      "We focus on accurate planning, careful execution and attention to detail throughout every stage of a project.",
  },
  {
    number: "03",
    title: "Safety-Focused Execution",
    description:
      "Safety remains an important consideration in planning, structural decisions and construction execution.",
  },
  {
    number: "04",
    title: "Transparent Coordination",
    description:
      "Clear communication and organized coordination help keep project requirements, expectations and execution aligned.",
  },
  {
    number: "05",
    title: "Long-Term Performance",
    description:
      "Our approach considers durability, functionality and the long-term performance of the structures we work on.",
  },
];

export default function WhyDayaPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        {/* Founder Feature */}
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-secondary text-white shadow-xl sm:rounded-[2.5rem]">
          {/* Decorative background patterns */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 top-0 h-[550px] w-[550px] rounded-full border border-white/10" />
            <div className="absolute left-[10%] top-0 h-[650px] w-[650px] rounded-full border border-white/10" />
            <div className="absolute -right-32 -top-40 h-[650px] w-[650px] rounded-full border border-white/10" />
            <div className="absolute -bottom-80 left-[35%] h-[700px] w-[700px] rounded-full border border-white/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-primary/30" />
          </div>

          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[600px] lg:grid-cols-2 lg:gap-12 lg:px-16">
            {/* Founder Photo */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative h-[380px] w-full overflow-hidden rounded-2xl sm:h-[460px]">
                <img
                  src="/images/founder.jpg"
                  alt="Founder of Daya Constructions & Structural Consultants"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Blend the photo into the section */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/10 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-brand-secondary/10"
                />

                {/* Founder label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-primary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                      Meet Our Founder
                    </span>
                  </div>

                  {/* Replace with the actual founder name */}
                  <h3 className="font-[var(--font-primary)] text-3xl font-bold text-white sm:text-4xl">
                    Founder Name
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                    The vision and experience behind Daya Constructions &
                    Structural Consultants.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-primary" />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                  Experience. Knowledge. Vision.
                </p>
              </div>
            </div>

            {/* Founder Message */}
            <div className="relative z-10 mx-auto max-w-xl lg:mx-0">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-primary" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Why Daya
                </p>
              </div>

              <h2 className="font-[var(--font-primary)] text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Built on experience.
                <br />
                Guided by engineering.
                <br />
                <span className="text-brand-primary">Driven by purpose.</span>
              </h2>

              <p className="mt-8 max-w-lg text-base leading-8 text-white/90 sm:text-lg">
                Daya Constructions &amp; Structural Consultants brings together
                a strong foundation in construction and structural engineering
                to deliver thoughtful, dependable solutions for the built
                environment.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                From technical understanding and careful planning to quality
                execution and long-term performance, our approach is rooted in
                responsibility, precision and trust.
              </p>

              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-4 border-b border-brand-primary pb-3 text-sm font-semibold text-white transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Discover Our Story

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Principles Section */}
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-primary" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                Our Principles
              </p>
            </div>

            <h3 className="font-[var(--font-primary)] text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
              The values behind every project.
            </h3>

            <p className="mt-5 max-w-md text-base leading-8 text-gray-600">
              Our work is guided by practical engineering, responsible
              execution and a commitment to building structures that perform
              over time.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <article
                  key={principle.number}
                  className={`group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-lg sm:p-7 ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-bold text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                      {principle.number}
                    </span>

                    <span className="h-px w-10 bg-brand-primary/40 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-primary" />
                  </div>

                  <h4 className="mt-6 font-[var(--font-primary)] text-xl font-semibold leading-snug text-gray-950">
                    {principle.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}