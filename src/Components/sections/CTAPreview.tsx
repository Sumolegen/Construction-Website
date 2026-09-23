import Link from "next/link";
import Container from "../ui/Container";

export default function CTAPreview() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-28 lg:py-32">
      {/* GOLD DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-40 w-40 border-r border-b border-brand-primary/40"
      />

      {/* GREEN DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 border-l border-t border-brand-secondary/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-3xl"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-primary" />

            <p className="text-label text-brand-primary">
              Start a Conversation
            </p>

            <span className="h-px w-10 bg-brand-secondary" />
          </div>

          <h2 className="font-[var(--font-primary)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Have a project in mind?
            <br />
            <span className="text-brand-primary">
              Let&apos;s build it with confidence.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Talk to us about your construction, structural design,
            consultancy or project requirements.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-brand-primary px-6 py-3 font-[var(--font-primary)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 brand-primary-hover hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <span>Start a Conversation</span>

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
              href="/services"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-brand-secondary/50 bg-transparent px-6 py-3 font-[var(--font-primary)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <span>Explore Services</span>

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
        </div>
      </Container>
    </section>
  );
}