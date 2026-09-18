import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f5f2] text-gray-950">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(17,24,39,0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17,24,39,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-white blur-3xl"
      />

      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gray-200/60 blur-3xl"
      />

      {/* =========================================================
          MAIN HERO
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-gray-950"
              />

              <p className="font-[var(--font-josefin-sans)] text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
                Daya Constructions
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl font-[var(--font-josefin-sans)] text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.045em] text-gray-950 sm:text-6xl lg:text-[5.2rem] xl:text-[5.7rem]">
              Build with
              <br />
              <span className="text-gray-500">confidence.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg font-[var(--font-inter)] text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              Construction and structural expertise built on engineering
              precision, practical experience and trust.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Primary */}
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center justify-between gap-5 rounded-full bg-gray-950 px-6 py-3 font-[var(--font-josefin-sans)] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 sm:min-w-[190px]"
              >
                <span>Explore Projects</span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
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
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-gray-300 bg-white/60 px-6 py-3 font-[var(--font-josefin-sans)] text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-950 hover:bg-white hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
              >
                <span>Our Story</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
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

            {/* ===================================================
                STATS
            ==================================================== */}

            <div className="mt-12 grid max-w-xl grid-cols-2 border-t border-gray-300 pt-6 sm:mt-16 sm:pt-7">
              {/* Stat 1 */}
              <div className="pr-6">
                <p className="font-[var(--font-josefin-sans)] text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                  5+
                </p>

                <p className="mt-2 font-[var(--font-inter)] text-[11px] uppercase tracking-[0.12em] text-gray-500 sm:text-xs">
                  Completed Projects
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-l border-gray-300 pl-6">
                <p className="font-[var(--font-josefin-sans)] text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                  40+
                </p>

                <p className="mt-2 font-[var(--font-inter)] text-[11px] uppercase tracking-[0.12em] text-gray-500 sm:text-xs">
                  Years Family Legacy
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            {/* Decorative number */}
            <div
              aria-hidden="true"
              className="absolute -left-5 top-10 z-20 hidden select-none font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400 [writing-mode:vertical-rl] lg:block"
            >
              01 / Featured Project
            </div>

            {/* Main image frame */}
            <div className="group relative overflow-hidden rounded-sm border border-gray-300 bg-gray-900 shadow-2xl shadow-gray-900/10">
              {/* Image placeholder */}
              <div className="relative aspect-[4/4.7] overflow-hidden bg-[#202124]">
                {/* Architectural background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#242629]"
                />

                {/* Blueprint grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: "52px 52px",
                  }}
                />

                {/* Large architectural building silhouette */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-[8%] h-[73%] w-[78%] border border-white/20 bg-gradient-to-t from-white/[0.10] to-white/[0.02] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                >
                  {/* Main tower */}
                  <div className="absolute bottom-0 left-[12%] h-[88%] w-[30%] border-x border-t border-white/20 bg-white/[0.04]">
                    {/* Windows */}
                    <div className="absolute inset-x-4 top-5 grid grid-cols-2 gap-3">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-8 border border-white/10 bg-white/[0.05] transition-colors duration-500 group-hover:bg-white/[0.10]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Secondary tower */}
                  <div className="absolute bottom-0 right-[10%] h-[68%] w-[28%] border-x border-t border-white/20 bg-white/[0.025]">
                    <div className="absolute inset-x-3 top-5 grid grid-cols-2 gap-2">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <span
                          key={index}
                          className="h-7 border border-white/10 bg-white/[0.04]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Structural beam */}
                  <div className="absolute left-0 right-0 top-[24%] h-px bg-white/20" />

                  {/* Structural column */}
                  <div className="absolute bottom-0 left-[49%] h-full w-px bg-white/20" />

                  {/* Ground plane */}
                  <div className="absolute bottom-0 left-0 h-[7%] w-full border-t border-white/20 bg-black/10" />
                </div>

                {/* Vertical line details */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-[5%] top-0 w-px bg-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-[8%] top-0 w-px bg-white/10"
                />

                {/* Image placeholder overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Top label */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />

                    <p className="font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      Featured Project
                    </p>
                  </div>
                </div>

                {/* Image placeholder center mark */}
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      className="h-6 w-6 text-white/70"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6"
                      />
                    </svg>
                  </div>

                  <p className="mt-3 font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Architectural Visual
                  </p>
                </div>

                {/* Bottom project information */}
                <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-7 sm:right-7">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="font-[var(--font-josefin-sans)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Daya
                      </p>

                      <p className="mt-1 font-[var(--font-inter)] text-xs text-white/50">
                        Construction / Structural
                      </p>
                    </div>

                    {/* Project arrow */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-gray-950">
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
                          d="M7 17 17 7M7 7h10v10"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner marks */}
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 h-5 w-5 border-l border-t border-white/30"
                />

                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 h-5 w-5 border-r border-t border-white/30"
                />

                <span
                  aria-hidden="true"
                  className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-white/30"
                />

                <span
                  aria-hidden="true"
                  className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-white/30"
                />
              </div>
            </div>

            {/* ===================================================
                FLOATING INFORMATION CARD
            ==================================================== */}

            <div className="relative z-20 mt-4 ml-auto w-[88%] rounded-sm border border-gray-300 bg-white/90 p-4 shadow-xl shadow-gray-900/10 backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 sm:absolute sm:-bottom-7 sm:-right-7 sm:mt-0 sm:w-64">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Engineering
                  </p>

                  <p className="mt-2 font-[var(--font-josefin-sans)] text-sm font-semibold text-gray-950">
                    Built with precision
                  </p>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">
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

              <div className="mt-4 h-px w-full bg-gray-200" />

              <p className="mt-3 font-[var(--font-inter)] text-[11px] leading-5 text-gray-500">
                Practical construction expertise combined with structural
                engineering knowledge.
              </p>
            </div>

            {/* Decorative side text */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 left-0 hidden font-[var(--font-josefin-sans)] text-[10px] uppercase tracking-[0.28em] text-gray-400 sm:block"
            >
              Building With Strength
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
      >
        <span className="h-px w-8 bg-gray-300" />

        <span className="font-[var(--font-josefin-sans)] text-[9px] font-semibold uppercase tracking-[0.28em] text-gray-400">
          Scroll to explore
        </span>

        <span className="h-px w-8 bg-gray-300" />
      </div>

      {/* Bottom border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-gray-300"
      />
    </section>
  );
}