import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import ImagePlaceholder from "../cards/ImagePlaceholder";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ARCHITECTURAL GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(197,160,74,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(64,125,65,0.07) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <Container>
        <div className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          {/* LEFT */}
          <div className="relative z-10 lg:col-span-6">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-primary" />

              <p className="text-label text-brand-secondary">
                Daya Constructions
              </p>
            </div>

            <h1 className="text-display max-w-4xl text-gray-950">
              Build with
              <br />
              <span className="text-brand-primary">
                confidence.
              </span>
            </h1>

            <p className="text-body-lg mt-8 max-w-xl text-gray-600">
              Construction and structural expertise built on engineering
              precision, practical experience and trust.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-brand-primary px-6 py-3 text-button text-white transition-all duration-300 hover:-translate-y-1 brand-primary-hover hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                <span>Explore Projects</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
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

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-brand-primary/30 bg-white px-6 py-3 text-button text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:text-brand-secondary hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                <span>Our Story</span>

                <svg
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

            {/* STATS */}
            <div className="mt-16 border-t border-brand-primary/20 pt-8 sm:mt-20">
              <div className="grid grid-cols-2">
                <div className="border-r border-brand-primary/20 pr-6">
                  <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                    5+
                  </p>

                  <p className="text-label mt-2 text-brand-primary">
                    Completed Projects
                  </p>
                </div>

                <div className="pl-6">
                  <p className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-5xl">
                    40+
                  </p>

                  <p className="text-label mt-2 text-brand-secondary">
                    Years Family Legacy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative z-10 lg:col-span-6">
            <div className="relative">
              <div className="image-hover relative overflow-hidden border border-brand-primary/20 bg-brand-primary-light shadow-2xl shadow-gray-950/10">
                <ImagePlaceholder
                  src="/images/1.jpg"
                  alt="Daya construction project"
                  label="Featured Project"
                  title="Daya"
                  aspectRatio="aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]"
                />
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l border-t border-brand-primary"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-brand-secondary"
              />

              <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 lg:block">
                <span className="text-label text-brand-primary [writing-mode:vertical-rl]">
                  01 / Featured Project
                </span>
              </div>

              <div className="absolute -bottom-6 -left-4 w-64 border border-brand-primary/20 bg-white p-5 shadow-xl sm:-left-7">
                <div className="flex items-center justify-between">
                  <p className="text-label text-brand-secondary">
                    Engineering
                  </p>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-primary/20 text-brand-primary"
                  >
                    <svg
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

                <div className="mt-4 h-px bg-brand-primary-light" />

                <p className="text-body-sm mt-3 text-gray-500">
                  Construction and structural expertise working together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* WORKER */}
      <div
        className="construction-worker-runner"
        aria-hidden="true"
      >
        <div className="construction-worker-bob">
          <Image
            src="/images/14.png"
            alt=""
            width={1920}
            height={1920}
            draggable={false}
          />
        </div>
      </div>

      {/* SCROLL */}
      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
      >
        <span className="h-px w-8 bg-brand-primary/40" />

        <span className="text-label text-brand-primary-dark">
          Scroll to explore
        </span>

        <span className="h-px w-8 bg-brand-secondary/40" />
      </div>
    </section>
  );
}