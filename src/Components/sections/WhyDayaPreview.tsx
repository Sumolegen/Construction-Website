import Link from "next/link";
import Container from "../ui/Container";

const principles = [
  {
    number: "01",
    title: "Engineering-Led Approach",
    description:
      "Every project is approached with technical understanding, structural knowledge and practical engineering considerations.",
    image: "/images/13.jpg",
    rotation: "-rotate-[12deg]",
    position: "translate-y-16",
  },
  {
    number: "02",
    title: "Quality & Precision",
    description:
      "We focus on accurate planning, careful execution and attention to detail throughout every stage of a project.",
    image: "/images/14.jpg",
    rotation: "-rotate-[7deg]",
    position: "translate-y-2",
  },
  {
    number: "03",
    title: "Safety-Focused Execution",
    description:
      "Safety remains an important consideration in planning, structural decisions and construction execution.",
    image: "/images/15.jpg",
    rotation: "rotate-0",
    position: "-translate-y-12",
  },
  {
    number: "04",
    title: "Transparent Coordination",
    description:
      "Clear communication and organized coordination help keep project requirements, expectations and execution aligned.",
    image: "/images/10.jpg",
    rotation: "rotate-[7deg]",
    position: "translate-y-2",
  },
  {
    number: "05",
    title: "Long-Term Performance",
    description:
      "Our approach considers durability, functionality and the long-term performance of the structures we work on.",
    image: "/images/16.jpg",
    rotation: "rotate-[12deg]",
    position: "translate-y-16",
  },
];

export default function WhyDayaPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        {/* Founder Feature */}
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-secondary text-white shadow-xl sm:rounded-[2.5rem]">
          {/* Decorative background */}
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

                {/* Blend the image into the background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/10 to-transparent"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-primary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                      Meet Our Founder
                    </span>
                  </div>

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

        {/* Our Principles - Image Gallery */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-brand-primary/10 px-5 pb-14 pt-16 sm:mt-28 sm:px-10 sm:pb-20 sm:pt-20 lg:mt-32 lg:rounded-[3rem] lg:px-12 lg:pb-24 lg:pt-24">
          {/* Clean background without side circle lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-primary/5 via-transparent to-brand-secondary/5"
          />

          {/* Heading */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-brand-secondary" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary sm:text-sm">
                Our Principles
              </p>
              <span className="h-px w-10 bg-brand-secondary" />
            </div>

            <h3 className="font-[var(--font-primary)] text-4xl font-bold leading-[1.12] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              <span className="text-brand-primary">
                The values behind
              </span>
              <br />
              <span className="text-brand-secondary">every project.</span>
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Five principles that shape how we plan, engineer and execute
              every project with care, precision and responsibility.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#principle-details"
                className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                Explore Principles
              </a>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-brand-secondary/30 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-secondary transition-colors hover:bg-brand-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                How We Work
              </Link>
            </div>
          </div>

          {/* Curved dotted arc */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-210px] left-1/2 hidden h-[430px] w-[110%] -translate-x-1/2 rounded-[50%] border-t-2 border-dotted border-brand-secondary/40 lg:block"
          />

          {/* Floating Principle Cards */}
          <div className="relative z-10 mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-20 sm:grid-cols-3 sm:gap-6 lg:mt-24 lg:grid-cols-5 lg:items-center lg:gap-5">
            {principles.map((principle) => (
              <a
                key={principle.number}
                href="#principle-details"
                className={`group relative mx-auto block w-full max-w-[250px] transition-transform duration-500 hover:z-20 hover:scale-105 lg:${principle.position} ${principle.rotation}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl transition-shadow duration-500 group-hover:shadow-2xl sm:rounded-3xl">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/10 to-transparent opacity-90" />

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-gray-950 shadow-md sm:left-5 sm:top-5 sm:h-10 sm:w-10">
                    {principle.number}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h4 className="font-[var(--font-primary)] text-base font-semibold leading-snug text-white sm:text-lg">
                      {principle.title}
                    </h4>

                    <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-gray-950">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17 17 7M7 7h10v10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom label */}
          <div className="relative z-10 mt-12 text-center lg:mt-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-secondary">
              Built on trust · Guided by engineering · Driven by quality
            </p>
          </div>
        </div>

        {/* Detailed Principle Cards */}
        <div
          id="principle-details"
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3"
        >
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-lg sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-bold text-brand-secondary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-gray-950">
                  {principle.number}
                </span>

                <span className="h-px w-10 bg-brand-primary/50 transition-all duration-300 group-hover:w-16" />
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
      </Container>
    </section>
  );
}