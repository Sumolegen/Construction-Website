import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";
import ImagePlaceholder from "../../Components/cards/ImagePlaceholder";

const founderHighlights = [
  {
    number: "01",
    title: "B.E. Civil Engineering",
    description:
      "Department topper during his Civil Engineering studies.",
  },
  {
    number: "02",
    title: "M.E. Structural Engineering",
    description:
      "College topper in Structural Engineering.",
  },
  {
    number: "03",
    title: "5+ Completed Projects",
    description:
      "Hands-on experience through completed construction and structural projects.",
  },
  {
    number: "04",
    title: "Anna University Recognition",
    description:
      "Recognised by Anna University for academic achievement as a topper.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the project, requirements, site conditions and client expectations.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Apply structural knowledge and practical experience to develop appropriate solutions.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Coordinate and deliver work with attention to quality, safety and long-term performance.",
  },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-white">
        {/* Architectural grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(17,17,17,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(17,17,17,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Soft background detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-gray-50 blur-3xl"
        />

        <Container>
          <div className="relative flex min-h-[calc(100vh-80px)] items-center py-16 sm:py-20 lg:py-24">
            <div className="relative z-10 max-w-5xl">
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-gray-950" />

                <p className="text-label text-gray-500">
                  Our Team
                </p>
              </div>

              {/* Main heading */}
              <h1 className="text-display max-w-5xl text-gray-950">
                Engineering knowledge.
                <br />
                <span className="text-gray-500">
                  Practical experience.
                </span>
              </h1>

              {/* Description */}
              <p className="text-body-lg mt-10 max-w-2xl text-gray-600">
                Daya brings together engineering knowledge, construction
                experience and a practical approach to every project.
              </p>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
        >
          <span className="h-px w-8 bg-gray-300" />

          <span className="text-label text-gray-400">
            Scroll to explore
          </span>

          <span className="h-px w-8 bg-gray-300" />
        </div>
      </section>

      {/* =========================================================
          FOUNDER
      ========================================================== */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Founder Image Placeholder */}

            <div className="relative lg:col-span-5">
              <div className="image-hover relative overflow-hidden border border-gray-200 bg-gray-100 shadow-xl shadow-gray-950/5">
                <ImagePlaceholder
                  label="Founder"
                  title="Dayananthan"
                  aspectRatio="aspect-[4/5]"
                />
              </div>

              {/* Architectural corners */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l border-t border-gray-400"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-gray-400"
              />

              {/* Vertical label */}
              <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 lg:block">
                <span className="text-label text-gray-400 [writing-mode:vertical-rl]">
                  01 / Founder
                </span>
              </div>
            </div>

            {/* Founder Content */}

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-label text-gray-500">
                Founder
              </p>

              <h2 className="mt-4 font-[var(--font-primary)] text-4xl font-semibold leading-tight tracking-[-0.035em] text-gray-950 sm:text-5xl">
                Dayananthan
              </h2>

              <p className="text-label mt-3 text-gray-500">
                M.E. Structural Engineer
              </p>

              <p className="mt-9 font-[var(--font-primary)] text-2xl font-medium leading-tight tracking-[-0.025em] text-gray-900 sm:text-3xl">
                Building a new chapter through engineering, construction and
                practical experience.
              </p>

              <p className="text-body mt-7 max-w-xl text-gray-600">
                Dayananthan comes from a family with a strong construction
                background and brings an engineering-led approach to Daya
                Constructions & Structural Consultants.
              </p>

              <p className="text-body mt-5 max-w-xl text-gray-600">
                With academic achievements in Civil and Structural
                Engineering and experience from more than five completed
                projects, his approach combines technical understanding with
                practical project experience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          FOUNDER HIGHLIGHTS
      ========================================================== */}

      <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Founder Highlights"
            title="A foundation built through education and experience."
            description="Academic achievement and practical project exposure shape the engineering approach behind Daya."
          />

          <div className="mt-14 grid border-t border-gray-200 md:grid-cols-2">
            {founderHighlights.map((highlight) => (
              <article
                key={highlight.number}
                className="group border-b border-gray-200 p-6 transition-colors duration-300 hover:bg-white md:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-label text-gray-400">
                    {highlight.number}
                  </span>

                  <span className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowIcon />
                  </span>
                </div>

                <h2 className="mt-10 font-[var(--font-primary)] text-2xl font-semibold leading-tight tracking-[-0.025em] text-gray-950 sm:text-3xl">
                  {highlight.title}
                </h2>

                <p className="text-body-sm mt-4 max-w-md text-gray-600">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          ENGINEERING + EXPERIENCE
      ========================================================== */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Foundation"
                title="Engineering meets practical experience."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-[var(--font-primary)] text-2xl font-medium leading-tight tracking-[-0.025em] text-gray-900 sm:text-3xl">
                Daya is built around the combination of structural engineering
                knowledge and practical understanding of construction.
              </p>

              <p className="text-body mt-7 max-w-2xl text-gray-600">
                The family&apos;s construction background spans more than four
                decades across Kerala and Tamil Nadu, while the founder brings
                formal engineering education and hands-on project experience
                into the next chapter.
              </p>

              <p className="text-body mt-5 max-w-2xl text-gray-600">
                This foundation helps us approach projects with both technical
                thinking and an understanding of how work is executed on site.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================== */}

      <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="From understanding to execution."
            description="Every project begins with understanding the requirement and ends with focused execution."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {approach.map((item) => (
              <article
                key={item.number}
                className="group border-t border-gray-300 pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-label text-gray-400">
                    {item.number}
                  </span>

                  <span className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowIcon />
                  </span>
                </div>

                <h2 className="mt-8 font-[var(--font-primary)] text-2xl font-semibold leading-tight tracking-[-0.025em] text-gray-950">
                  {item.title}
                </h2>

                <p className="text-body-sm mt-4 max-w-sm text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-label text-gray-400">
              Work With Us
            </p>

            <h2 className="mt-5 font-[var(--font-primary)] text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Let&apos;s discuss your construction or structural requirements.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-[var(--font-primary)] text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                <span>Start a Conversation</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}