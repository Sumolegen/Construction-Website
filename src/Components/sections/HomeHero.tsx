import Link from "next/link";
import Container from "../ui/Container";

const YOUTUBE_VIDEO_ID = "dnBIUC5w0F0";

export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gray-950">
      {/* YouTube Background Video */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&playsinline=1&rel=0`}
          title="Daya Constructions background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
        />
      </div>

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-950/65"
      />

      {/* Brand Accent Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/55 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero Content */}
      <Container>
        <div className="relative z-10 max-w-4xl py-20 sm:py-24 lg:py-28">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-brand-primary" />
            <p className="text-label uppercase tracking-[0.22em] text-brand-primary">
              Daya Constructions &amp; Structural Consultants
            </p>
          </div>

          <h1 className="max-w-4xl font-[var(--font-primary)] text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Daya Constructions
            <span className="mt-3 block font-medium text-brand-primary">
              Build with confidence.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Construction and structural engineering solutions built on
            experience, precision and a commitment to lasting quality.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-brand-primary px-7 py-4 font-[var(--font-primary)] text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-gray-950"
            >
              <span>Explore Projects</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-white/50 bg-white/5 px-7 py-4 font-[var(--font-primary)] text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-gray-950"
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-lg grid-cols-2 gap-8 border-t border-white/20 pt-8 sm:mt-16">
            <div>
              <p className="font-[var(--font-primary)] text-4xl font-bold tracking-tight text-brand-primary sm:text-5xl">
                5<span className="text-white">+</span>
              </p>
              <p className="mt-3 text-sm text-white/75 sm:text-base">
                Project Categories
              </p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <p className="font-[var(--font-primary)] text-4xl font-bold tracking-tight text-brand-primary sm:text-5xl">
                40<span className="text-white">+</span>
              </p>
              <p className="mt-3 text-sm text-white/75 sm:text-base">
                Years of Construction Experience
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}