import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Structural Design",
    description:
      "Engineering-focused structural design solutions developed with safety, precision, functionality and long-term performance in mind.",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    description:
      "Professional technical guidance to support structural decisions, project planning and practical engineering requirements.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Reliable construction execution with attention to quality, coordination, workmanship, durability and project requirements.",
  },
  {
    number: "04",
    title: "Restoration",
    description:
      "Careful restoration solutions that help preserve existing structures while improving their usability, condition and performance.",
  },
  {
    number: "05",
    title: "Rehabilitation",
    description:
      "Engineering-led rehabilitation approaches focused on improving the strength, condition and serviceability of existing structures.",
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "Structured planning and coordination from project initiation through execution, keeping scope, quality, resources and timelines aligned.",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    description:
      "Clearly defined construction contracts with an agreed project scope and contract value, supporting better cost planning and control.",
  },
  {
    number: "08",
    title: "Labour Contracts",
    description:
      "Skilled labour and workforce coordination for construction activities, supporting efficient execution and quality workmanship.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project requirements, objectives, site conditions and practical constraints.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We organize the technical requirements, resources and execution approach around the needs of the project.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We focus on coordinated execution, quality workmanship and attention to detail throughout the project.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We work toward delivering dependable outcomes with a focus on quality, functionality and long-term performance.",
  },
];

const industries = [
  "Residential",
  "Commercial",
  "Industrial",
  "Institutional",
  "Renovation",
  "Existing Structures",
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100">
        <Container>
          <div className="flex min-h-[70vh] items-center py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Our Services
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
                Engineering.
                <br />
                Construction.
                <br />
                Complete solutions.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                From structural design and consultancy to construction,
                restoration and project management, we provide practical
                solutions for the built environment.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                >
                  Explore Services
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-900 px-6 py-3 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-white py-24 sm:py-28 lg:py-32"
      >
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="What We Do"
              title="Solutions for every stage of your project."
              description="Our services bring together structural engineering, construction knowledge and project coordination to support different project requirements."
            />

            <div className="grid border-t border-gray-300 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group border-b border-gray-300 p-6 md:p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-sm font-medium text-gray-400">
                      {service.number}
                    </span>

                    <span className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h2 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Our Process"
              title="A structured approach from start to finish."
              description="Every project is approached through clear stages that help align technical requirements, execution and project goals."
            />

            <div className="grid border-t border-gray-300 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-gray-300 p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-8"
                >
                  <span className="text-sm font-medium text-gray-400">
                    {item.number}
                  </span>

                  <h2 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Delivery Approach */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Project Delivery"
                title="Focused on what makes a project work."
                description="We consider technical requirements and practical execution together to create a coordinated project approach."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-gray-300">
                <article className="border-b border-gray-300 py-8">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                    Quality
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                    Attention to detail
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    We emphasize careful planning, accurate work and quality
                    execution throughout the project lifecycle.
                  </p>
                </article>

                <article className="border-b border-gray-300 py-8">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                    Coordination
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                    Clear project communication
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    Clear coordination helps keep project requirements,
                    responsibilities and execution aligned.
                  </p>
                </article>

                <article className="border-b border-gray-300 py-8">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                    Performance
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                    Long-term thinking
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    We consider durability, functionality and long-term
                    performance when approaching construction and structural
                    requirements.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Industries"
                title="Supporting different types of built environments."
                description="Our services can support a range of construction and structural requirements across different project environments."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid border-t border-gray-300 sm:grid-cols-2">
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className="flex items-center justify-between border-b border-gray-300 py-6 sm:px-4"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {industry}
                    </span>

                    <span className="text-sm text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
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
              Let&apos;s build with confidence.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Talk to Daya about your construction, structural design,
              consultancy, restoration or project management requirements.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-950 transition-colors duration-200 hover:bg-gray-200"
              >
                Contact Daya
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}