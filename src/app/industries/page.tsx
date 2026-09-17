import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

const industries = [
  {
    number: "01",
    title: "Residential",
    description:
      "Construction and structural solutions for homes, residential buildings and related projects.",
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Practical construction and structural support for commercial spaces and developments.",
  },
  {
    number: "03",
    title: "Industrial",
    description:
      "Engineering and construction support for industrial buildings and project requirements.",
  },
  {
    number: "04",
    title: "Institutional",
    description:
      "Structural and construction solutions for institutional and functional built environments.",
  },
  {
    number: "05",
    title: "Renovation",
    description:
      "Construction and structural solutions for improving and adapting existing spaces.",
  },
  {
    number: "06",
    title: "Existing Structures",
    description:
      "Restoration, rehabilitation and structural consultancy for existing buildings.",
  },
];

const supportAreas = [
  "Structural Design",
  "Structural Consultancy",
  "Construction",
  "Restoration",
  "Rehabilitation",
  "Project Management",
];

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100">
        <Container>
          <div className="flex min-h-[65vh] items-center py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Industries
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
                Solutions for
                <br />
                different spaces.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Our construction and structural expertise can support a range
                of building types and project environments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Areas We Serve"
              title="Built around different project requirements."
              description="We adapt our construction and engineering approach to the needs of each project and environment."
            />

            <div className="grid border-t border-gray-300 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <article
                  key={industry.number}
                  className="group border-b border-gray-300 p-6 md:p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      {industry.number}
                    </span>

                    <span className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h2 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
                    {industry.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {industry.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Support */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Support"
                title="Engineering and construction expertise."
                description="Our services can be combined according to the requirements of each project."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-gray-300">
                {supportAreas.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-center justify-between border-b border-gray-300 py-6"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {area}
                    </span>

                    <span className="text-sm text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center border-b border-gray-900 pb-1 text-sm font-medium text-gray-900 transition-colors duration-200 hover:border-gray-500 hover:text-gray-600"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
              Start a Project
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s discuss your project.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Tell us about your construction or structural requirements.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-950 transition-colors duration-200 hover:bg-gray-200"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}