import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5]">
      {/* Subtle Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-70 blur-3xl" />

      <div className="relative mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-5 py-16 sm:px-6 lg:flex lg:min-h-[calc(100vh-80px)] lg:items-center lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-500" />

              <p className="font-[var(--font-josefin-sans)] text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
                Daya Constructions
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-[var(--font-josefin-sans)] text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-gray-950 sm:text-5xl lg:text-6xl">
              Build with
              <br />
              confidence.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-md font-[var(--font-inter)] text-sm leading-7 text-gray-500 sm:text-base">
              Construction and structural expertise built on engineering
              precision, practical experience and trust.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-4 rounded-full bg-gray-950 px-5 py-3 font-[var(--font-josefin-sans)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
              >
                <span>Explore Projects</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-[var(--font-josefin-sans)] text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-950"
              >
                <span>Our Story</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Small Information */}
            <div className="mt-12 grid max-w-md grid-cols-2 border-t border-gray-300 pt-5">
              <div>
                <p className="font-[var(--font-josefin-sans)] text-xl font-semibold text-gray-950">
                  5+
                </p>

                <p className="mt-1 font-[var(--font-inter)] text-xs text-gray-500">
                  Completed Projects
                </p>
              </div>

              <div className="border-l border-gray-300 pl-6">
                <p className="font-[var(--font-josefin-sans)] text-xl font-semibold text-gray-950">
                  40+
                </p>

                <p className="mt-1 font-[var(--font-inter)] text-xs text-gray-500">
                  Years Family Legacy
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / VISUAL HOLDER */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-gray-300 bg-gray-200">
              {/* Architectural Image Placeholder */}

              <div className="absolute inset-0 bg-[#e9e9e7]">
                {/* Vertical Architectural Lines */}
                <div className="absolute left-[18%] top-0 h-full w-px bg-gray-300" />

                <div className="absolute left-[38%] top-0 h-full w-px bg-gray-300" />

                <div className="absolute left-[62%] top-0 h-full w-px bg-gray-300" />

                <div className="absolute left-[82%] top-0 h-full w-px bg-gray-300" />

                {/* Horizontal Architectural Lines */}
                <div className="absolute left-0 top-[22%] h-px w-full bg-gray-300" />

                <div className="absolute left-0 top-[48%] h-px w-full bg-gray-300" />

                <div className="absolute left-0 top-[74%] h-px w-full bg-gray-300" />

                {/* Large Architectural Shape */}
                <div className="absolute bottom-[12%] left-[12%] h-[45%] w-[65%] border border-gray-400 bg-gray-300/40">
                  <div className="absolute bottom-0 left-[12%] h-[70%] w-[22%] bg-gray-400/50" />

                  <div className="absolute bottom-0 left-[42%] h-[85%] w-[20%] bg-gray-500/40" />

                  <div className="absolute bottom-0 right-[10%] h-[55%] w-[15%] bg-gray-400/50" />
                </div>

                {/* Image Placeholder Label */}
                <div className="absolute left-6 top-6">
                  <p className="font-[var(--font-josefin-sans)] text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
                    Featured Project
                  </p>
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-6 left-6">
                  <p className="font-[var(--font-josefin-sans)] text-2xl font-semibold tracking-tight text-gray-800">
                    Daya
                  </p>

                  <p className="mt-1 font-[var(--font-inter)] text-xs text-gray-500">
                    Construction / Structural
                  </p>
                </div>
              </div>

              {/* Corner Mark */}
              <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center border border-gray-400 text-xs text-gray-500">
                ↗
              </div>
            </div>

            {/* Side Number */}
            <div className="absolute -right-3 bottom-10 hidden lg:block">
              <p className="font-[var(--font-josefin-sans)] text-[10px] uppercase tracking-[0.25em] text-gray-400 [writing-mode:vertical-rl]">
                Building With Strength
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gray-300" />
    </section>
  );
}