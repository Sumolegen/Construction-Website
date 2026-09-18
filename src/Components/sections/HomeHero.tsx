import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-white">
      {/* Main Hero */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1600px] items-center px-5 pb-28 pt-16 sm:px-8 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="grid w-full items-center lg:grid-cols-12">
          {/* Founder Image */}
          <div className="relative order-2 mt-10 h-[400px] sm:h-[500px] lg:order-1 lg:col-span-5 lg:mt-0 lg:h-[650px]">
            <div className="absolute bottom-0 left-[-10%] h-full w-[115%] sm:left-0 sm:w-full">
              <Image
                src="/images/founder-sketch.jpg"
                alt="Daya Constructions founder"
                fill
                priority
                className="object-contain object-bottom grayscale"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 order-1 text-center lg:order-2 lg:col-span-7 lg:text-left">
            <div className="mx-auto max-w-5xl lg:ml-auto lg:mr-0">
              {/* Eyebrow */}
              <p className="mb-6 font-[var(--font-josefin-sans)] text-xs font-medium uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
                Daya Constructions
              </p>

              {/* Main Heading */}
              <h1 className="font-[var(--font-josefin-sans)] font-bold uppercase leading-[0.82] tracking-[-0.055em] text-gray-950">
                <span className="block text-[clamp(4rem,10vw,9rem)]">
                  Build
                </span>

                <span className="block text-[clamp(4rem,10vw,9rem)] text-gray-400">
                  With
                </span>

                <span className="block text-[clamp(4rem,10vw,9rem)]">
                  Confidence.
                </span>
              </h1>

              {/* Tagline */}
              <div className="mt-8 sm:mt-10">
                <p className="font-[var(--font-josefin-sans)] text-sm font-medium uppercase tracking-[0.3em] text-gray-800 sm:text-base">
                  Strength. Precision. Trust.
                </p>

                <div className="mx-auto mt-4 h-px w-16 bg-gray-400 lg:mx-0" />
              </div>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-500 sm:text-base lg:mx-0">
                Construction and structural expertise shaped by engineering,
                experience and a commitment to quality.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-4 rounded-full bg-gray-950 px-6 py-3.5 font-[var(--font-josefin-sans)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
                >
                  <span>Explore Projects</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-3 py-3 font-[var(--font-josefin-sans)] text-sm font-medium text-gray-700 transition-all duration-300 hover:text-gray-950"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 transition-all duration-300 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5 h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M8 5.14v13.72L19 12 8 5.14z" />
                    </svg>
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Our Story
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-10 left-5 z-20 hidden sm:block lg:left-12">
        <p className="font-[var(--font-josefin-sans)] text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
          Building With Strength
        </p>
      </div>

      {/* Torn Bottom Shape */}
      <div
        className="absolute bottom-0 left-0 z-10 h-24 w-full bg-gray-950"
        style={{
          clipPath:
            "polygon(0 55%, 3% 62%, 7% 58%, 11% 68%, 15% 62%, 19% 70%, 24% 64%, 29% 73%, 34% 66%, 39% 72%, 44% 60%, 49% 68%, 54% 61%, 59% 71%, 64% 65%, 69% 75%, 74% 67%, 79% 73%, 84% 64%, 89% 71%, 94% 65%, 100% 70%, 100% 100%, 0 100%)",
        }}
      />

      {/* Torn Edge */}
      <div
        className="absolute bottom-[70px] left-0 z-10 h-1 w-full bg-gray-400"
        style={{
          clipPath:
            "polygon(0 60%, 5% 45%, 10% 62%, 15% 48%, 20% 64%, 25% 44%, 30% 58%, 35% 42%, 40% 61%, 45% 45%, 50% 57%, 55% 42%, 60% 60%, 65% 45%, 70% 62%, 75% 47%, 80% 59%, 85% 44%, 90% 60%, 95% 48%, 100% 58%, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}