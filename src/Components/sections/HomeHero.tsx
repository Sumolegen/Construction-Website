"use client";

import Link from "next/link";
import Container from "../ui/Container";

const heroImages = [
  {
    src: "/images/13.jpg",
    alt: "Structural engineering project",
    className:
      "hero-float absolute left-0 top-8 h-[150px] w-[44%] sm:h-[190px] sm:w-[45%] lg:top-8",
  },
  {
    src: "/images/14.jpg",
    alt: "Structural design project",
    className:
      "hero-float-reverse absolute right-0 top-0 h-[155px] w-[44%] sm:h-[200px] sm:w-[45%] lg:top-0",
  },
  {
    src: "/images/15.jpg",
    alt: "Featured construction project",
    className:
      "hero-float-center absolute left-1/2 top-1/2 z-10 h-[220px] w-[58%] -translate-x-1/2 -translate-y-1/2 sm:h-[290px] sm:w-[60%]",
  },
  {
    src: "/images/10.jpg",
    alt: "Modern construction project",
    className:
      "hero-float-reverse absolute bottom-0 left-0 h-[150px] w-[44%] sm:h-[190px] sm:w-[45%]",
  },
  {
    src: "/images/16.jpg",
    alt: "Building restoration project",
    className:
      "hero-float absolute bottom-8 right-0 h-[150px] w-[44%] sm:h-[190px] sm:w-[45%]",
  },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f7f5]">
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-brand-secondary/10 blur-3xl"
      />

      <Container>
        <div className="grid min-h-[calc(100svh-80px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-12">
          {/* Left content */}
          <div className="relative z-20 max-w-xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-brand-primary" />

              <p className="text-label uppercase tracking-[0.2em] text-gray-800">
                Daya Constructions &amp; Structural Consultants
              </p>
            </div>

            <h1 className="font-[var(--font-primary)] text-5xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-6xl lg:text-6xl xl:text-7xl">
              <span className="block">
                Daya <span className="text-brand-primary">Constructions</span>
              </span>

              <span className="mt-3 block font-medium text-gray-950">
                Build with{" "}
                <span className="text-brand-primary">confidence.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
              Construction and structural engineering solutions built on
              experience, precision, and a commitment to lasting quality.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-brand-primary px-7 py-4 text-sm font-semibold text-gray-950 transition-colors duration-300 hover:bg-brand-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Explore Projects

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
                className="inline-flex items-center justify-center rounded-md border border-brand-primary bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition-colors duration-300 hover:bg-brand-primary hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="font-[var(--font-primary)] text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                  5<span className="text-brand-primary">+</span>
                </p>

                <p className="mt-3 text-sm text-gray-700 sm:text-base">
                  Project Categories
                </p>
              </div>

              <div className="border-l border-gray-200 pl-8">
                <p className="font-[var(--font-primary)] text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                  40<span className="text-brand-primary">+</span>
                </p>

                <p className="mt-3 text-sm text-gray-700 sm:text-base">
                  Years of Construction Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right image gallery */}
          <div className="relative mx-auto w-full max-w-[560px] lg:-mt-8">
            <div
              aria-hidden="true"
              className="absolute -right-2 top-4 h-28 w-28 rounded-full bg-brand-primary/20 blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-4 left-8 h-32 w-32 rounded-full bg-brand-secondary/15 blur-2xl"
            />

            <div className="relative mx-auto h-[390px] w-full max-w-[520px] sm:h-[470px]">
              {heroImages.map((item) => (
                <div
                  key={item.src}
                  className={`${item.className} overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full rounded-[inherit] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Gallery label */}
            <div className="absolute -bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-gray-100 bg-white px-5 py-3 shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />

              <p className="font-[var(--font-primary)] text-xs font-semibold tracking-wide text-gray-900 sm:text-sm">
                Engineering. Construction. Excellence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}