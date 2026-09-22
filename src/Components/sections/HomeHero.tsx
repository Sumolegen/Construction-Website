import Link from "next/link";
import Container from "../ui/Container";
import ImagePlaceholder from "../cards/ImagePlaceholder";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =====================================================
          ARCHITECTURAL GRID
      ====================================================== */}

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

      <Container>
        <div className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-10 lg:col-span-6">
            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-950" />

              <p className="text-label text-gray-500">
                Daya Constructions
              </p>
            </div>

            {/* Main Heading */}

            <h1 className="text-display max-w-4xl text-gray-950">
              Build with
              <br />
              <span className="text-gray-500">
                confidence.
              </span>
            </h1>

            {/* Description */}

            <p className="text-body-lg mt-8 max-w-xl text-gray-600">
              Construction and structural expertise built
              on engineering precision, practical experience
              and trust.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-3">
              {/* Primary */}

              <Link
                href="/projects"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  gap-4
                  rounded-full
                  bg-gray-950
                  px-6
                  py-3
                  text-button
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-gray-800
                  hover:shadow-xl
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gray-950
                  focus-visible:ring-offset-2
                "
              >
                <span>Explore Projects</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
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

              {/* Secondary */}

              <Link
                href="/about"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  px-6
                  py-3
                  text-button
                  text-gray-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-gray-950
                  hover:text-gray-950
                  hover:shadow-md
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gray-950
                  focus-visible:ring-offset-2
                "
              >
                <span>Our Story</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4"
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

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20">
              <div className="grid grid-cols-2">
                {/* Stat 1 */}

                <div className="border-r border-gray-200 pr-6">
                  <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                    5+
                  </p>

                  <p className="text-label mt-2 text-gray-500">
                    Completed Projects
                  </p>
                </div>

                {/* Stat 2 */}

                <div className="pl-6">
                  <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                    40+
                  </p>

                  <p className="text-label mt-2 text-gray-500">
                    Years Family Legacy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE HOLDER
          ================================================== */}

          <div className="relative z-10 lg:col-span-6">
            <div className="relative">
              {/* Main image */}

              <div
                className="
                  image-hover
                  relative
                  overflow-hidden
                  border
                  border-gray-200
                  bg-gray-100
                  shadow-2xl
                  shadow-gray-950/10
                "
              >
                <ImagePlaceholder
                  src="/images/1.jpg"
                  alt="Daya construction project"
                  label="Featured Project"
                  title="Daya"
                  aspectRatio="aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]"
                />
              </div>

              {/* Architectural corner */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-3
                  -top-3
                  h-16
                  w-16
                  border-l
                  border-t
                  border-gray-400
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-3
                  -right-3
                  h-16
                  w-16
                  border-b
                  border-r
                  border-gray-400
                "
              />

              {/* Project number */}

              <div
                className="
                  absolute
                  -left-5
                  top-1/2
                  hidden
                  -translate-y-1/2
                  lg:block
                "
              >
                <span className="text-label text-gray-400 [writing-mode:vertical-rl]">
                  01 / Featured Project
                </span>
              </div>

              {/* Floating information card */}

              <div
                className="
                  absolute
                  -bottom-6
                  -left-4
                  w-64
                  border
                  border-gray-200
                  bg-white
                  p-5
                  shadow-xl
                  sm:-left-7
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-label text-gray-400">
                    Engineering
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      text-gray-600
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 20h16M6 20V9l6-5 6 5v11M9 20v-6h6v6"
                      />
                    </svg>
                  </span>
                </div>

                <p className="mt-3 font-[var(--font-primary)] text-h4 text-gray-950">
                  Built with precision.
                </p>

                <div className="mt-4 h-px bg-gray-200" />

                <p className="text-body-sm mt-3 text-gray-500">
                  Construction and structural expertise
                  working together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          lg:flex
        "
      >
        <span className="h-px w-8 bg-gray-300" />

        <span className="text-label text-gray-400">
          Scroll to explore
        </span>

        <span className="h-px w-8 bg-gray-300" />
      </div>
    </section>
  );
}