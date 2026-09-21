import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";
import ImagePlaceholder from "../../Components/cards/ImagePlaceholder";
import CTAPreview from "../../Components/sections/CTAPreview";

const industries = [
  {
    number: "01",
    title: "Residential",
    description:
      "Construction and structural solutions for homes, residential buildings and related projects.",
    imageLabel: "Residential",
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Practical construction and structural support for commercial spaces and developments.",
    imageLabel: "Commercial",
  },
  {
    number: "03",
    title: "Industrial",
    description:
      "Engineering and construction support for industrial buildings and project requirements.",
    imageLabel: "Industrial",
  },
  {
    number: "04",
    title: "Institutional",
    description:
      "Structural and construction solutions for institutional and functional built environments.",
    imageLabel: "Institutional",
  },
  {
    number: "05",
    title: "Renovation",
    description:
      "Construction and structural solutions for improving and adapting existing spaces.",
    imageLabel: "Renovation",
  },
  {
    number: "06",
    title: "Existing Structures",
    description:
      "Restoration, rehabilitation and structural consultancy for existing buildings.",
    imageLabel: "Existing Structures",
  },
];

const supportAreas = [
  "Structural Design",
  "Structural Consultancy",
  "Construction",
  "Restoration",
  "Rehabilitation",
  "Project Management",
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

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-white">
        {/* Architectural Grid */}
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

        {/* Soft Background Detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-gray-50 blur-3xl"
        />

        <Container>
          <div className="relative grid min-h-[calc(100vh-80px)] items-start gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-20">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:min-h-[calc(100vh-120px)]">
              {/* Eyebrow */}

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-gray-950" />

                <p className="text-label text-gray-500">Industries</p>
              </div>

              {/* Main Heading */}

              <h1 className="text-display max-w-5xl text-gray-950">
                Solutions for
                <br />
                <span className="text-gray-500">different spaces.</span>
              </h1>

              {/* Description */}

              <p className="text-body-lg max-w-2xl pt-10 text-gray-600">
                Our construction and structural expertise can support a range
                of building types and project environments.
              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#industries"
                  className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-gray-950 px-6 py-3 text-button text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                >
                  <span>Explore Industries</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-3 text-button text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-950 hover:text-gray-950 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowIcon />
                </Link>
              </div>

              {/* Industry Stats */}

              <div className="mt-14 max-w-xl border-t border-gray-200 pt-7 sm:mt-16">
                <div className="grid grid-cols-2">
                  <div className="border-r border-gray-200 pr-6">
                    <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                      06
                    </p>

                    <p className="text-label mt-2 text-gray-500">
                      Industry Areas
                    </p>
                  </div>

                  <div className="pl-6">
                    <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                      06
                    </p>

                    <p className="text-label mt-2 text-gray-500">
                      Core Services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE PLACEHOLDER
            ================================================== */}

            <div className="relative z-10 lg:col-span-5">
              <div className="relative">
                {/* Main Image Placeholder */}

                <div className="image-hover relative overflow-hidden border border-gray-200 bg-gray-950 shadow-2xl shadow-gray-950/10">
                  <ImagePlaceholder
                    label="Built Environment"
                    title="Daya"
                    aspectRatio="aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]"
                  />
                </div>

                {/* Architectural Corner */}

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l border-t border-gray-400"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-gray-400"
                />

                {/* Vertical Label */}

                <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 lg:block">
                  <span className="text-label text-gray-400 [writing-mode:vertical-rl]">
                    01 / Built Environment
                  </span>
                </div>

                {/* Floating Information Card */}

                <div className="absolute -bottom-6 -left-4 w-64 border border-gray-200 bg-white p-5 shadow-xl sm:-left-7">
                  <div className="flex items-center justify-between">
                    <p className="text-label text-gray-400">Industries</p>

                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600"
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <p className="mt-3 font-[var(--font-primary)] text-h4 text-gray-950">
                    Different spaces.
                  </p>

                  <div className="mt-4 h-px bg-gray-200" />

                  <p className="text-body-sm mt-3 text-gray-500">
                    Engineering and construction support adapted to different
                    project environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}

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
          INDUSTRIES
      ========================================================== */}

      <section
        id="industries"
        className="bg-gray-50 py-24 sm:py-28 lg:py-32"
      >
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Section Heading */}

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-6">
                <SectionHeading
                  eyebrow="Areas We Serve"
                  title="Built around different project requirements."
                  description="We adapt our construction and engineering approach to the needs of each project and environment."
                />
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-body-sm max-w-xl text-gray-500">
                  Every building environment presents different requirements.
                  Our approach considers the nature of the project, existing
                  conditions, structural needs and practical execution.
                </p>
              </div>
            </div>

            {/* Industry Grid */}

            <div className="grid border-t border-gray-200 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <article
                  key={industry.number}
                  className="group relative border-b border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-lg md:p-8 lg:p-9"
                >
                  {/* Number + Arrow */}

                  <div className="flex items-start justify-between">
                    <span className="font-[var(--font-primary)] text-xs font-semibold tracking-[0.15em] text-gray-400">
                      {industry.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                      <ArrowIcon />
                    </span>
                  </div>

                  {/* Mini Image Placeholder */}

                  <div className="mt-8 overflow-hidden border border-gray-200 bg-white">
                    <ImagePlaceholder
                      label={industry.imageLabel}
                      title={industry.number}
                      aspectRatio="aspect-[16/8]"
                    />
                  </div>

                  {/* Content */}

                  <div className="mt-7">
                    <h2 className="font-[var(--font-primary)] text-2xl font-semibold leading-tight tracking-[-0.025em] text-gray-950 sm:text-3xl">
                      {industry.title}
                    </h2>

                    <p className="text-body-sm mt-4 max-w-md text-gray-500">
                      {industry.description}
                    </p>
                  </div>

                  {/* Bottom Detail */}

                  <div className="mt-7 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <span className="h-px w-6 bg-gray-950 transition-all duration-300 group-hover:w-10" />

                    <span className="font-[var(--font-primary)] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Explore Area
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          SUPPORT
      ========================================================== */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Left */}

            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Support"
                title="Engineering and construction expertise."
                description="Our services can be combined according to the requirements of each project."
              />
            </div>

            {/* Right */}

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-gray-200">
                {supportAreas.map((area, index) => (
                  <Link
                    key={area}
                    href="/services"
                    className="group flex items-center justify-between border-b border-gray-200 py-6 transition-all duration-300 hover:pl-2"
                  >
                    <div className="flex items-center gap-4">
                      <span className="h-px w-6 bg-gray-300 transition-all duration-300 group-hover:w-10 group-hover:bg-gray-950" />

                      <span className="font-[var(--font-primary)] text-lg font-semibold tracking-[-0.015em] text-gray-900">
                        {area}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-[var(--font-primary)] text-[10px] font-semibold tracking-[0.18em] text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-950">
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-3 font-[var(--font-primary)] text-sm font-semibold text-gray-950"
              >
                <span className="border-b border-gray-950 pb-1">
                  Explore Services
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
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