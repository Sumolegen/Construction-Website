"use client";

import Link from "next/link";
import Container from "../ui/Container";

const heroImages = [
  {
    src: "/images/13.jpg",
    alt: "Structural engineering project",
    className:
      "gallery-card-1 left-[8%] top-[8%] h-[145px] w-[38%] sm:h-[175px]",
  },
  {
    src: "/images/14.jpg",
    alt: "Structural design project",
    className:
      "gallery-card-2 right-[8%] top-[8%] h-[145px] w-[38%] sm:h-[175px]",
  },
  {
    src: "/images/15.jpg",
    alt: "Featured construction project",
    className:
      "gallery-card-center left-[26%] top-[29%] z-20 h-[235px] w-[48%] sm:h-[285px]",
  },
  {
    src: "/images/10.jpg",
    alt: "Modern construction project",
    className:
      "gallery-card-3 bottom-[7%] left-[7%] h-[145px] w-[38%] sm:h-[175px]",
  },
  {
    src: "/images/16.jpg",
    alt: "Building restoration project",
    className:
      "gallery-card-4 bottom-[7%] right-[7%] h-[145px] w-[38%] sm:h-[175px]",
  },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f7f5]">
      {/* Background Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-brand-secondary/10 blur-3xl"
      />

      <Container>
        <div className="grid min-h-[calc(100svh-80px)] items-center gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-10 xl:gap-16">
          {/* Left: Hero Content */}
          <div className="relative z-20 max-w-xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-brand-primary" />

              <p className="text-label uppercase tracking-[0.2em] text-gray-800">
                Daya Constructions &amp; Structural Consultants
              </p>
            </div>

            {/* Heading — Two Lines */}
            <h1 className="font-[var(--font-primary)] text-5xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-6xl lg:text-6xl xl:text-7xl">
              <span className="block">
                Daya <span className="text-brand-primary">Constructions</span>
              </span>

              <span className="mt-3 block font-medium text-gray-950">
                Build with{" "}
                <span className="text-brand-primary">confidence.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
              Construction and structural engineering solutions built on
              experience, precision and a commitment to lasting quality.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-brand-primary px-7 py-4 font-[var(--font-primary)] text-sm font-semibold text-gray-950 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-brand-secondary hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
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
                className="inline-flex items-center justify-center rounded-md border border-brand-primary/50 bg-white/80 px-7 py-4 font-[var(--font-primary)] text-sm font-semibold text-gray-950 transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-8 border-t border-gray-200 pt-8 sm:mt-14">
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

          {/* Right: Animated Five-Image Gallery */}
          <div className="relative mx-auto w-full max-w-[560px] lg:-mt-8">
            <div
              aria-hidden="true"
              className="absolute -right-2 top-4 h-28 w-28 rounded-full bg-brand-primary/25 blur-2xl sm:-right-5"
            />

            <div className="relative mx-auto h-[390px] w-full max-w-[520px] sm:h-[470px]">
              {heroImages.map((item) => (
                <div
                  key={item.src}
                  className={`absolute overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl transition-shadow duration-500 hover:z-30 hover:shadow-2xl ${item.className}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full rounded-[inherit] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Floating Brand Label */}
            <div className="absolute -bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-gray-100 bg-white px-5 py-3 shadow-xl sm:bottom-0">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />

              <p className="font-[var(--font-primary)] text-xs font-semibold tracking-wide text-gray-900 sm:text-sm">
                Engineering. Construction. Excellence.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Image Motion */}
      <style jsx>{`
        .gallery-card-1 {
          animation: floatOne 6s ease-in-out infinite;
          transform: rotate(-12deg);
        }

        .gallery-card-2 {
          animation: floatTwo 7s ease-in-out infinite;
          transform: rotate(12deg);
        }

        .gallery-card-center {
          animation: centerMotion 8s ease-in-out infinite;
          transform: rotate(-3deg);
        }

        .gallery-card-3 {
          animation: floatThree 6.5s ease-in-out infinite;
          transform: rotate(10deg);
        }

        .gallery-card-4 {
          animation: floatFour 7.5s ease-in-out infinite;
          transform: rotate(-10deg);
        }

        @keyframes floatOne {
          0%,
          100% {
            transform: rotate(-12deg) translateY(0);
          }
          50% {
            transform: rotate(-7deg) translateY(-12px);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: rotate(12deg) translateY(0);
          }
          50% {
            transform: rotate(7deg) translateY(14px);
          }
        }

        @keyframes centerMotion {
          0%,
          100% {
            transform: rotate(-3deg) translateY(0);
          }
          50% {
            transform: rotate(3deg) translateY(-10px);
          }
        }

        @keyframes floatThree {
          0%,
          100% {
            transform: rotate(10deg) translateY(0);
          }
          50% {
            transform: rotate(5deg) translateY(-10px);
          }
        }

        @keyframes floatFour {
          0%,
          100% {
            transform: rotate(-10deg) translateY(0);
          }
          50% {
            transform: rotate(-5deg) translateY(12px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-card-1,
          .gallery-card-2,
          .gallery-card-center,
          .gallery-card-3,
          .gallery-card-4 {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}