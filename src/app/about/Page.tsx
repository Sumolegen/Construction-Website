import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";
import ImagePlaceholder from "../../Components/cards/ImagePlaceholder";
import CTAPreview from "../../Components/sections/CTAPreview";

const timeline = [
  {
    year: "40+",
    title: "Years of Construction Experience",
    description:
      "Our foundation comes from more than four decades of practical construction experience, developed through years of work, learning and industry knowledge.",
  },
  {
    year: "01",
    title: "A Family Construction Legacy",
    description:
      "Daya carries forward a family journey connected to construction, bringing practical understanding of how buildings are planned, executed and maintained.",
  },
  {
    year: "02",
    title: "Experience Across Kerala & Tamil Nadu",
    description:
      "Our construction journey has included projects and work across Kerala and Tamil Nadu, providing valuable knowledge of different construction environments.",
  },
  {
    year: "2026",
    title: "Daya Constructions & Structural Consultants",
    description:
      "Daya brings practical construction experience together with structural engineering knowledge to create a more integrated approach to the built environment.",
  },
];

const recognition = [
  {
    number: "01",
    title: "B.E. Civil Engineering",
    subtitle: "Department Topper",
    description:
      "The founder was recognized as the topper of the Civil Engineering department during B.E. Civil Engineering.",
  },
  {
    number: "02",
    title: "M.E. Structural Engineering",
    subtitle: "College Topper",
    description:
      "The founder achieved the position of college topper while pursuing M.E. Structural Engineering.",
  },
  {
    number: "03",
    title: "Anna University",
    subtitle: "Academic Recognition",
    description:
      "The founder received an award from Anna University in recognition of academic achievement as a topper.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project requirements, site conditions, objectives and practical considerations.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Structural and construction decisions are approached with technical knowledge, precision and long-term performance in mind.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We focus on coordinated execution, quality workmanship and clear communication throughout the project.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#f4f4f1]">
        {/* Blueprint grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(17,24,39,0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(17,24,39,0.045) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 top-0 h-[650px] w-[650px] rounded-full bg-white blur-3xl"
        />

        <Container>
          <div className="relative grid min-h-[90vh] items-center gap-14 py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
            {/* Hero Copy */}
            <div className="relative z-10 lg:col-span-7">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-gray-950" />

                <p className="font-[var(--font-josefin-sans)] text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  About Daya
                </p>
              </div>

              <h1 className="max-w-5xl font-[var(--font-josefin-sans)] text-[3.5rem] font-semibold leading-[0.96] tracking-[-0.05em] text-gray-950 sm:text-6xl lg:text-[6.5rem]">
                Experience
                <br />
                <span className="text-gray-500">behind us.</span>
                <br />
                Engineering ahead.
              </h1>

              <p className="mt-8 max-w-2xl font-[var(--font-inter)] text-base leading-8 text-gray-600 sm:text-lg">
                Daya Constructions & Structural Consultants brings together a
                strong family foundation in construction with structural
                engineering knowledge and a forward-looking approach to the
                built environment.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-gray-950 px-6 py-3 font-[var(--font-josefin-sans)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                >
                  <span>Explore Our Services</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
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
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center rounded-full border border-gray-300 bg-white/60 px-6 py-3 font-[var(--font-josefin-sans)] text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-950 hover:bg-white hover:text-gray-950"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative z-10 lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden border border-gray-300 bg-gray-900 shadow-2xl shadow-gray-900/10">
                  <ImagePlaceholder
                    label="Our Foundation"
                    title="Daya"
                    aspectRatio="aspect-[4/5]"
                  />
                </div>

                {/* Floating experience card */}
                <div className="absolute -bottom-7 -left-4 z-20 w-64 border border-gray-200 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:-left-8">
                  <p className="font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Experience
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="font-[var(--font-josefin-sans)] text-4xl font-semibold tracking-tight text-gray-950">
                      40+
                    </span>

                    <span className="pb-1 font-[var(--font-inter)] text-xs text-gray-500">
                      Years of
                      <br />
                      construction
                    </span>
                  </div>

                  <div className="mt-4 h-px bg-gray-200" />

                  <p className="mt-3 font-[var(--font-inter)] text-[11px] leading-5 text-gray-500">
                    Practical experience carried forward through engineering,
                    construction and consultancy.
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute -right-5 top-10 hidden font-[var(--font-josefin-sans)] text-[10px] uppercase tracking-[0.28em] text-gray-400 [writing-mode:vertical-rl] lg:block"
                >
                  Built on experience
                </span>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
        >
          <span className="h-px w-8 bg-gray-300" />

          <span className="font-[var(--font-josefin-sans)] text-[9px] font-semibold uppercase tracking-[0.28em] text-gray-400">
            Scroll to explore
          </span>

          <span className="h-px w-8 bg-gray-300" />
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================== */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Philosophy"
                title="Build with knowledge. Execute with confidence."
                description="Our work is guided by practical experience, engineering thinking and responsibility toward every project."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-3xl font-[var(--font-josefin-sans)] text-3xl font-medium leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                We believe dependable buildings begin with sound decisions,
                thoughtful engineering and disciplined execution.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="border-t border-gray-200 pt-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3 4 7v5c0 4.8 3.4 7.9 8 9 4.6-1.1 8-4.2 8-9V7l-8-4Z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-[var(--font-josefin-sans)] text-lg font-semibold text-gray-950">
                    Dependable
                  </h3>

                  <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-gray-500">
                    Practical solutions designed around quality,
                    responsibility and long-term performance.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v18M3 12h18"
                      />
                    </svg>
                  </div>

                  <h3 className="font-[var(--font-josefin-sans)] text-lg font-semibold text-gray-950">
                    Engineering-led
                  </h3>

                  <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-gray-500">
                    Structural knowledge integrated into construction
                    thinking and project decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          HERE'S THE THING
      ========================================================== */}
      <section className="bg-[#f3f3f0] py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="relative">
                <ImagePlaceholder
                  label="Engineering"
                  title="Precision"
                  aspectRatio="aspect-[4/5]"
                />

                <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border border-gray-300 bg-white lg:block">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className="h-8 w-8 text-gray-700"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 20 20 4M4 4h16v16"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400">
                Here&apos;s the thing
              </p>

              <h2 className="mt-5 font-[var(--font-josefin-sans)] text-4xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Good construction starts long before the first brick.
              </h2>

              <p className="mt-7 max-w-xl font-[var(--font-inter)] text-base leading-8 text-gray-600">
                Every project carries decisions about structure, materials,
                execution, cost, durability and future performance. Our role is
                to bring these considerations together and create a practical
                path from idea to completed space.
              </p>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-3 font-[var(--font-josefin-sans)] text-sm font-semibold text-gray-950"
              >
                <span className="border-b border-gray-950 pb-1">
                  Explore Our Expertise
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
        </Container>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Who We Are"
                title="Built from experience. Guided by engineering."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-[var(--font-josefin-sans)] text-2xl font-medium leading-9 text-gray-900 sm:text-3xl">
                Daya Constructions & Structural Consultants is a construction
                and structural consultancy company established in 2026,
                focused on dependable construction and engineering solutions.
              </p>

              <p className="mt-7 font-[var(--font-inter)] text-base leading-8 text-gray-600">
                Our approach combines practical construction experience with
                structural engineering knowledge. From structural design and
                consultancy to construction, restoration, rehabilitation and
                project management, we approach every project with precision,
                responsibility and attention to detail.
              </p>

              <p className="mt-6 font-[var(--font-inter)] text-base leading-8 text-gray-600">
                We believe that successful projects are built through a
                combination of sound engineering, quality execution, clear
                communication and long-term thinking.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          COMPANY STORY / TIMELINE
      ========================================================== */}
      <section className="bg-[#f3f3f0] py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="More About Daya"
                  title="A foundation built over time."
                  description="The story behind Daya is connected to practical construction experience, academic growth and a new engineering-led direction."
                />

                <div className="mt-8 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-gray-950" />

                    <span className="font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                      Our Journey
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="relative">
                {/* Timeline line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-[7px] top-0 w-px bg-gray-300"
                />

                <div className="space-y-0">
                  {timeline.map((item, index) => (
                    <article
                      key={`${item.year}-${index}`}
                      className="group relative grid grid-cols-[16px_1fr] gap-7 border-b border-gray-300 py-10 first:pt-0 last:border-b-0"
                    >
                      {/* Timeline dot */}
                      <div className="relative z-10 mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gray-400 bg-[#f3f3f0]">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-950 transition-transform duration-300 group-hover:scale-150" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                          <span className="font-[var(--font-josefin-sans)] text-sm font-semibold tracking-[0.12em] text-gray-400">
                            {item.year}
                          </span>

                          <h2 className="font-[var(--font-josefin-sans)] text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                            {item.title}
                          </h2>
                        </div>

                        <p className="mt-4 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-gray-600 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          ENGINEERING BACKGROUND
      ========================================================== */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Engineering Background"
                  title="Academic knowledge supporting practical work."
                  description="The founder's academic journey provides the structural engineering foundation behind Daya's approach."
                />

                <div className="mt-10 max-w-md">
                  <ImagePlaceholder
                    label="Structural Engineering"
                    title="Daya"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-0 border-t border-gray-300">
                {recognition.map((item) => (
                  <article
                    key={item.number}
                    className="group border-b border-gray-300 py-9"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-[var(--font-josefin-sans)] text-xs font-semibold tracking-[0.2em] text-gray-400">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
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
                            d="M12 3v18M3 12h18"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="mt-8 font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      {item.subtitle}
                    </p>

                    <h2 className="mt-2 font-[var(--font-josefin-sans)] text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                      {item.title}
                    </h2>

                    <p className="mt-4 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-gray-600 sm:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          HEART BEHIND WHAT WE DO
      ========================================================== */}
      <section className="bg-gray-950 py-24 text-white sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-500">
                The Thinking Behind Daya
              </p>

              <h2 className="mt-5 font-[var(--font-josefin-sans)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Engineering should make construction clearer.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-[var(--font-inter)] text-base leading-8 text-gray-400 sm:text-lg">
                Construction is not only about putting materials together. It
                is about understanding how decisions affect strength,
                durability, cost, maintenance and the people who will use the
                space.
              </p>

              <p className="mt-6 font-[var(--font-inter)] text-base leading-8 text-gray-400 sm:text-lg">
                Daya brings practical construction understanding together with
                structural engineering knowledge so that design, consultancy
                and execution can work together rather than existing as
                separate decisions.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/10 p-5">
                  <p className="font-[var(--font-josefin-sans)] text-2xl font-semibold">
                    Precision
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Decisions informed by engineering and practical knowledge.
                  </p>
                </div>

                <div className="border border-white/10 p-5">
                  <p className="font-[var(--font-josefin-sans)] text-2xl font-semibold">
                    Responsibility
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Clear communication and attention to long-term performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================== */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col gap-14">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Our Approach"
                  title="From understanding to execution."
                  description="A simple process built around project understanding, engineering thinking and coordinated execution."
                />
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <p className="font-[var(--font-inter)] text-sm leading-7 text-gray-500">
                  Every project is different. Our approach gives us a
                  consistent framework while leaving room for the realities of
                  each site, structure and client requirement.
                </p>
              </div>
            </div>

            <div className="grid border-t border-gray-200 md:grid-cols-3">
              {approach.map((item) => (
                <article
                  key={item.number}
                  className="group relative min-h-[320px] border-b border-gray-200 p-7 md:border-b-0 md:border-r md:p-9 lg:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-josefin-sans)] text-xs font-semibold tracking-[0.2em] text-gray-400">
                      {item.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
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
                    </span>
                  </div>

                  <div className="mt-20">
                    <h2 className="font-[var(--font-josefin-sans)] text-3xl font-semibold tracking-tight text-gray-950">
                      {item.title}
                    </h2>

                    <p className="mt-4 font-[var(--font-inter)] text-sm leading-7 text-gray-500 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          VISION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f3f3f0] py-28 sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl"
        />

        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400">
              Our Vision
            </p>

            <h2 className="mt-6 font-[var(--font-josefin-sans)] text-4xl font-semibold leading-[1.03] tracking-tight text-gray-950 sm:text-5xl lg:text-7xl">
              Building a stronger future through engineering and execution.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl font-[var(--font-inter)] text-base leading-8 text-gray-600 sm:text-lg">
              We aim to grow Daya into a trusted name in construction and
              structural consultancy by combining practical experience,
              engineering knowledge, quality and responsible project
              execution.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 font-[var(--font-josefin-sans)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
              >
                <span>Explore Our Work</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
        </Container>
      </section>

      {/* =========================================================
          COMMON CTA
      ========================================================== */}
      <CTAPreview />
    </main>
  );
}