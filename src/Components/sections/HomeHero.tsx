import Link from "next/link";
import Container from "../ui/Container";

const heroImages = [
  {
    src: "/images/13.jpg",
    alt: "Structural engineering and construction project",
    className: "left-0 top-0 h-[145px] w-[42%] sm:h-[185px]",
  },
  {
    src: "/images/14.jpg",
    alt: "Structural design and engineering project",
    className: "right-0 top-0 h-[145px] w-[42%] sm:h-[185px]",
  },
  {
    src: "/images/15.jpg",
    alt: "Featured Daya construction project",
    className:
      "left-1/2 top-[24%] z-10 h-[270px] w-[58%] -translate-x-1/2 sm:h-[340px]",
  },
  {
    src: "/images/10.jpg",
    alt: "Construction project with modern architecture",
    className: "bottom-0 left-0 h-[145px] w-[42%] sm:h-[185px]",
  },
  {
    src: "/images/16.jpg",
    alt: "Building restoration and rehabilitation project",
    className: "bottom-0 right-0 h-[145px] w-[42%] sm:h-[185px]",
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
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-16 xl:gap-16">
          {/* Left: Hero Content */}
          <div className="relative z-20 max-w-xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-brand-primary" />

              <p className="text-label uppercase tracking-[0.2em] text-brand-secondary">
                Daya Constructions &amp; Structural Consultants
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-[var(--font-primary)] text-5xl font-bold leading-[1.08] tracking-tight text-brand-secondary sm:text-6xl lg:text-6xl xl:text-7xl">
              Daya
              <span className="text-brand-secondary"> Constructions</span>
              <span className="mt-3 block font-medium text-brand-primary">
                Build with confidence.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Construction and structural engineering solutions built on
              experience, precision and a commitment to lasting quality.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-brand-secondary px-7 py-4 font-[var(--font-primary)] text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-brand-primary hover:text-gray-950 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
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
                className="inline-flex items-center justify-center rounded-md border border-brand-secondary/30 bg-white/80 px-7 py-4 font-[var(--font-primary)] text-sm font-semibold text-brand-secondary transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-8 border-t border-gray-200 pt-8 sm:mt-14">
              <div>
                <p className="font-[var(--font-primary)] text-4xl font-bold tracking-tight text-brand-secondary sm:text-5xl">
                  5<span className="text-brand-primary">+</span>
                </p>

                <p className="mt-3 text-sm text-gray-600 sm:text-base">
                  Project Categories
                </p>
              </div>

              <div className="border-l border-gray-200 pl-8">
                <p className="font-[var(--font-primary)] text-4xl font-bold tracking-tight text-brand-secondary sm:text-5xl">
                  40<span className="text-brand-primary">+</span>
                </p>

                <p className="mt-3 text-sm text-gray-600 sm:text-base">
                  Years of Construction Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right: Five-Image Composition */}
          <div className="relative mx-auto w-full max-w-[560px]">
            {/* Decorative Brand Shape */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[85%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_48%_52%/40%_40%_60%_60%] bg-brand-secondary"
            />

            <div
              aria-hidden="true"
              className="absolute -right-2 top-4 h-28 w-28 rounded-full bg-brand-primary/25 blur-2xl sm:-right-5"
            />

            {/* Image Grid */}
            <div className="relative mx-auto h-[430px] w-full max-w-[520px] sm:h-[520px]">
              {heroImages.map((item, index) => (
                <div
                  key={item.src}
                  className={`absolute overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg transition-transform duration-500 hover:scale-[1.03] ${
                    item.className
                  } ${
                    index === 2
                      ? "rounded-[28px] border-4 border-white shadow-2xl"
                      : ""
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}

              {/* Center Image Accent */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-primary shadow-xl sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7 text-gray-950 sm:h-9 sm:w-9"
                  aria-hidden="true"
                >
                  <path
                    d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-7h6v7M9 10h.01M15 10h.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Brand Label */}
            <div className="absolute -bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-gray-100 bg-white px-5 py-3 shadow-xl sm:bottom-0">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-secondary" />

              <p className="font-[var(--font-primary)] text-xs font-semibold tracking-wide text-gray-800 sm:text-sm">
                Engineering. Construction. Excellence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}