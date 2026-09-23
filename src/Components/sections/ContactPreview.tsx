import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function ContactPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact Daya"
              title="Let&apos;s talk about your project."
              description="Whether you are planning a new construction project, structural work or an existing-building requirement, we would be glad to understand your needs."
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-brand-primary/20 bg-gray-50 p-7 sm:p-9">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                  <svg
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
                      d="M21 10.5c0 5.25-9 11-9 11s-9-5.75-9-11a9 9 0 1 1 18 0Z"
                    />
                    <circle cx="12" cy="10.5" r="2.5" />
                  </svg>
                </span>

                <div>
                  <p className="text-label text-brand-secondary">
                    Location
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Uralpatti, Udumalpet,
                    <br />
                    Tiruppur, Tamil Nadu - 642204
                  </p>
                </div>
              </div>

              <div className="my-7 h-px bg-brand-primary/20" />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-label text-brand-primary">
                    Phone
                  </p>

                  <Link
                    href="tel:6382765593"
                    className="mt-3 block font-[var(--font-primary)] text-lg font-semibold text-gray-950 transition-colors hover:text-brand-secondary"
                  >
                    6382765593
                  </Link>
                </div>

                <div>
                  <p className="text-label text-brand-secondary">
                    Email
                  </p>

                  <Link
                    href="mailto:dayaconstructions22@gmail.com"
                    className="mt-3 block break-all font-[var(--font-primary)] text-lg font-semibold text-gray-950 transition-colors hover:text-brand-primary"
                  >
                    dayaconstructions22@gmail.com
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand-secondary px-6 py-3 font-[var(--font-primary)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 brand-secondary-hover hover:shadow-lg"
              >
                <span>Contact Us</span>

                <svg
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
          </div>
        </div>
      </Container>
    </section>
  );
}