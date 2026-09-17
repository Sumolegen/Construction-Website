import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

const foundation = [
  {
    number: "01",
    title: "40+ Years of Construction Experience",
    description:
      "Our foundation comes from more than four decades of practical construction experience, developed through years of work, learning and industry knowledge.",
  },
  {
    number: "02",
    title: "Experience Across Kerala & Tamil Nadu",
    description:
      "Our family construction journey has included projects and work across Kerala and Tamil Nadu, providing valuable practical knowledge of different construction environments.",
  },
  {
    number: "03",
    title: "Engineering-Led Direction",
    description:
      "Daya brings this practical construction foundation together with structural engineering knowledge to create a more integrated approach to the built environment.",
  },
];

const recognition = [
  {
    number: "01",
    title: "B.E. Civil Engineering",
    subtitle: "Department Topper",
    description:
      "The founder was recognized as the topper of the Civil Engineering department during B.E. Civil Engineering.",
  },
  {
    number: "02",
    title: "M.E. Structural Engineering",
    subtitle: "College Topper",
    description:
      "The founder achieved the position of college topper while pursuing M.E. Structural Engineering.",
  },
  {
    number: "03",
    title: "Anna University",
    subtitle: "Academic Recognition",
    description:
      "The founder received an award from Anna University in recognition of academic achievement as a topper.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project requirements, site conditions, objectives and practical considerations.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Structural and construction decisions are approached with technical knowledge, precision and long-term performance in mind.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We focus on coordinated execution, quality workmanship and clear communication throughout the project.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100">
        <Container>
          <div className="flex min-h-[70vh] items-center py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                About Daya
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
                Experience behind us.
                <br />
                Engineering ahead.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Daya Constructions & Structural Consultants brings together a
                strong family foundation in construction with structural
                engineering knowledge and a forward-looking approach to the
                built environment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Who We Are"
                title="Built from experience. Guided by engineering."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-9 text-gray-800 sm:text-2xl">
                Daya Constructions & Structural Consultants is a construction
                and structural consultancy company established in 2026,
                focused on dependable construction and engineering solutions.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Our approach combines practical construction experience with
                structural engineering knowledge. From structural design and
                consultancy to construction, restoration, rehabilitation and
                project management, we aim to approach every project with
                precision, responsibility and attention to detail.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                We believe that successful projects are built through a
                combination of sound engineering, quality execution, clear
                communication and long-term thinking.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Foundation */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Foundation"
                title="A construction legacy carried forward."
                description="Daya's foundation is connected to decades of practical construction experience and industry knowledge."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-gray-300">
                {foundation.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-5 border-b border-gray-300 py-8 sm:grid-cols-[60px_1fr] sm:gap-8"
                  >
                    <span className="text-sm font-medium text-gray-400">
                      {item.number}
                    </span>

                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                        {item.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Background */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Engineering Background"
                title="Academic knowledge supporting practical work."
                description="The founder's academic journey provides the structural engineering foundation behind Daya's approach."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-gray-300">
                <article className="border-b border-gray-300 py-8">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                    Civil Engineering
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    B.E. Civil Engineering
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
                    A strong foundation in civil engineering developed through
                    undergraduate study, complemented by practical exposure to
                    construction.
                  </p>
                </article>

                <article className="border-b border-gray-300 py-8">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                    Structural Engineering
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    M.E. Structural Engineering
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
                    Advanced study in structural engineering strengthened the
                    technical foundation for understanding structural systems,
                    design and performance.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Recognition"
                title="Academic achievement that shaped the foundation."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-gray-300">
                {recognition.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-5 border-b border-gray-300 py-8 sm:grid-cols-[60px_1fr] sm:gap-8"
                  >
                    <span className="text-sm font-medium text-gray-400">
                      {item.number}
                    </span>

                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                        {item.subtitle}
                      </p>

                      <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                        {item.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Our Approach"
              title="From understanding to execution."
              description="We bring together project understanding, engineering thinking and coordinated execution."
            />

            <div className="grid border-t border-gray-300 md:grid-cols-3">
              {approach.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-gray-300 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10"
                >
                  <span className="text-sm font-medium text-gray-400">
                    {item.number}
                  </span>

                  <h2 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Our Vision
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Building a stronger future through engineering and execution.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              We aim to grow Daya into a trusted name in construction and
              structural consultancy by combining practical experience,
              engineering knowledge, quality and responsible project
              execution.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
              Work With Daya
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Let&apos;s discuss your construction, structural or project
              requirements.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-950 transition-colors duration-200 hover:bg-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}