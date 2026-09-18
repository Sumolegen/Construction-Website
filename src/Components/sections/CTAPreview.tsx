import Link from "next/link";
import Container from "../ui/Container";

export default function CTAPreview() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-gray-800 bg-gray-950 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
            <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
                {/* Content */}
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 sm:text-sm">
                    Start a Conversation
                  </p>

                  <h2
                    id="cta-heading"
                    className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
                  >
                    Have a project in mind?
                    <br className="hidden sm:block" />
                    {" "}Let&apos;s build it with confidence.
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
                    Talk to us about your construction, structural design,
                    consultancy or project requirements.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-gray-950 transition-all duration-200 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    Start a Conversation
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-gray-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-gray-400 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}