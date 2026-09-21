import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";
import ImagePlaceholder from "../../Components/cards/ImagePlaceholder";
import CTAPreview from "../../Components/sections/CTAPreview";

const projects = [
  {
    number: "01",
    title: "Residential Construction",
    category: "Construction",
    location: "Tamil Nadu",
    imageLabel: "Residential Project",
  },
  {
    number: "02",
    title: "Structural Design Project",
    category: "Structural Design",
    location: "Tamil Nadu",
    imageLabel: "Structural Design",
  },
  {
    number: "03",
    title: "Building Restoration",
    category: "Restoration",
    location: "Tamil Nadu",
    imageLabel: "Building Restoration",
  },
  {
    number: "04",
    title: "Structural Consultancy",
    category: "Consultancy",
    location: "Tamil Nadu",
    imageLabel: "Structural Consultancy",
  },
];

const categories = [
  "All Projects",
  "Construction",
  "Structural Design",
  "Consultancy",
  "Restoration",
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

export default function ProjectsPage() {
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

        {/* Soft background glow */}
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

                <p className="text-label text-gray-500">
                  Selected Projects
                </p>
              </div>

              {/* Main Heading */}

              {/* Main Heading */}
              {/* Main Heading */}

              <h1 className="text-display max-w-5xl text-gray-950">
                Built with
                <br />
                <span className="text-gray-500">purpose.</span>
                <br />
                Designed to last.
              </h1>

              {/* Description */}

              <p className="text-body-lg max-w-2xl pt-10 text-gray-600">
                A selection of construction, structural and restoration work
                representing our approach to the built environment.
              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-gray-950 px-6 py-3 text-button text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                >
                  <span>Explore Projects</span>

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

              {/* Project stats */}

              <div className="mt-14 max-w-xl border-t border-gray-200 pt-7 sm:mt-16">
                <div className="grid grid-cols-2">
                  <div className="border-r border-gray-200 pr-6">
                    <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                      04
                    </p>

                    <p className="text-label mt-2 text-gray-500">
                      Project Categories
                    </p>
                  </div>

                  <div className="pl-6">
                    <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                      TN
                    </p>

                    <p className="text-label mt-2 text-gray-500">
                      Current Region
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE HOLDER
            ================================================== */}

            <div className="relative z-10 lg:col-span-5">
              <div className="relative">
                {/* Main project placeholder */}

                <div className="image-hover relative overflow-hidden border border-gray-200 bg-gray-950 shadow-2xl shadow-gray-950/10">
                  <ImagePlaceholder
                    label="Selected Work"
                    title="Daya"
                    aspectRatio="aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]"
                  />
                </div>

                {/* Architectural corner */}

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
                    01 / Featured Project
                  </span>
                </div>

                {/* Floating project information */}

                <div className="absolute -bottom-6 -left-4 w-64 border border-gray-200 bg-white p-5 shadow-xl sm:-left-7">
                  <div className="flex items-center justify-between">
                    <p className="text-label text-gray-400">
                      Project Portfolio
                    </p>

                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600"
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <p className="mt-3 font-[var(--font-primary)] text-h4 text-gray-950">
                    Built with purpose.
                  </p>

                  <div className="mt-4 h-px bg-gray-200" />

                  <p className="text-body-sm mt-3 text-gray-500">
                    Construction, structural engineering and restoration
                    delivered with precision.
                  </p>
                </div>
              </div>
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
          PROJECTS
      ========================================================== */}

      <section
        id="projects"
        className="bg-gray-50 py-24 sm:py-28 lg:py-32"
      >
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Section heading */}

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-6">
                <SectionHeading
                  eyebrow="Our Work"
                  title="Selected projects."
                  description="Explore a selection of construction, structural and restoration work that reflects our approach to practical engineering and execution."
                />
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-body-sm max-w-xl text-gray-500">
                  Each project represents a different set of requirements,
                  site conditions and technical considerations. Our focus
                  remains on dependable solutions and thoughtful execution.
                </p>
              </div>
            </div>

            {/* Categories */}

            <div className="flex flex-wrap gap-2 border-y border-gray-200 py-5">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`rounded-full border px-4 py-2 font-[var(--font-primary)] text-xs font-semibold transition-colors duration-300 ${index === 0
                      ? "border-gray-950 bg-gray-950 text-white"
                      : "border-gray-300 bg-white text-gray-600 hover:border-gray-950 hover:text-gray-950"
                    }`}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* =================================================
                FEATURED PROJECT
            ================================================== */}

            <article className="group">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
                {/* Image */}

                <div className="lg:col-span-8">
                  <div className="relative overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl">
                    <ImagePlaceholder
                      label={projects[0].imageLabel}
                      title="01"
                      aspectRatio="aspect-[16/8]"
                    />

                    {/* Number */}

                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/40 bg-white/90 font-[var(--font-primary)] text-xs font-semibold text-gray-700 backdrop-blur-sm">
                      {projects[0].number}
                    </div>

                    {/* Arrow */}

                    <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>

                {/* Content */}

                <div className="lg:col-span-4">
                  <p className="text-label text-gray-400">
                    {projects[0].category} · {projects[0].location}
                  </p>

                  <h2 className="mt-3 font-[var(--font-primary)] text-3xl font-semibold leading-tight tracking-[-0.025em] text-gray-950 sm:text-4xl">
                    {projects[0].title}
                  </h2>

                  <p className="mt-5 text-body-sm max-w-md text-gray-500">
                    A residential construction project approached with
                    attention to planning, structural requirements,
                    execution and long-term performance.
                  </p>

                  <div className="mt-7">
                    <span className="inline-flex items-center gap-3 border-b border-gray-950 pb-1 font-[var(--font-primary)] text-sm font-semibold text-gray-950">
                      View Project
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* =================================================
                PROJECT GRID
            ================================================== */}

            <div className="grid gap-x-8 gap-y-14 border-t border-gray-200 pt-14 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
              {projects.slice(1).map((project) => (
                <article key={project.number} className="group">
                  {/* Image */}

                  <div className="relative overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-500 group-hover:shadow-lg">
                    <ImagePlaceholder
                      label={project.imageLabel}
                      title={project.number}
                      aspectRatio="aspect-[4/3]"
                    />

                    {/* Number */}

                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-white/40 bg-white/90 font-[var(--font-primary)] text-[11px] font-semibold text-gray-700 backdrop-blur-sm">
                      {project.number}
                    </div>

                    {/* Arrow */}

                    <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                      <ArrowIcon />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="mt-5">
                    <p className="text-label text-gray-400">
                      {project.category} · {project.location}
                    </p>

                    <h2 className="mt-2 font-[var(--font-primary)] text-2xl font-semibold leading-tight tracking-[-0.02em] text-gray-950 sm:text-3xl">
                      {project.title}
                    </h2>

                    <div className="mt-4 flex items-center gap-2 font-[var(--font-primary)] text-sm font-semibold text-gray-600 transition-colors duration-300 group-hover:text-gray-950">
                      <span>View Project</span>
                      <ArrowIcon />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          PROJECT STATEMENT
      ========================================================== */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Perspective"
                title="Every project begins with understanding."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-[var(--font-primary)] text-3xl font-medium leading-tight tracking-[-0.025em] text-gray-900 sm:text-4xl lg:text-5xl">
                Good project outcomes are shaped by the decisions made before
                construction begins.
              </p>

              <p className="text-body mt-7 max-w-2xl text-gray-600">
                From structural considerations and material selection to
                execution, coordination and long-term performance, we believe
                every part of a project should work together.
              </p>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-3 font-[var(--font-primary)] text-sm font-semibold text-gray-950"
              >
                <span className="border-b border-gray-950 pb-1">
                  Explore Our Services
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