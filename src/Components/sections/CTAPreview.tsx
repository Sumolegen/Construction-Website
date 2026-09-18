import Link from "next/link";
import Container from "../ui/Container";

export default function CTAPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden bg-gray-950 px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.15) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.15) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-label text-gray-500">
                Start a Conversation
              </p>

              <h2 className="text-h2 mt-5 max-w-4xl text-white">
                Have a project in mind? Let&apos;s build it with confidence.
              </h2>

              <p className="text-body mt-6 max-w-2xl text-gray-400">
                Talk to us about your construction, structural design,
                consultancy or project requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-white px-6 py-3 text-button text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
              >
                <span>Start a Conversation</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4"
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
                className="inline-flex min-h-12 items-center rounded-full border border-gray-700 px-6 py-3 text-button text-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-400"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}