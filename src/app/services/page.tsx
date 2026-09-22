import ImagePlaceholder from "../../Components/cards/ImagePlaceholder";
import ServiceCard from "../../Components/cards/ServiceCard";
import CTAPreview from "../../Components/sections/CTAPreview";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Structural Design",
    type: "Design",
    description:
      "Engineering-focused structural design solutions developed with safety, precision, functionality and long-term performance in mind.",
    image: "/images/1.jpg",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    type: "Consultancy",
    description:
      "Professional technical guidance to support structural decisions, project planning and practical engineering requirements.",
    image: "/images/2.jpg",
  },
  {
    number: "03",
    title: "Construction",
    type: "Execution",
    description:
      "Reliable construction execution with attention to quality, coordination, workmanship, durability and project requirements.",
    image: "/images/3.jpg",
  },
  {
    number: "04",
    title: "Restoration",
    type: "Restoration",
    description:
      "Careful restoration solutions for existing structures while improving usability, condition and performance.",
    image: "/images/4.jpg",
  },
  {
    number: "05",
    title: "Rehabilitation",
    type: "Engineering",
    description:
      "Structural rehabilitation solutions focused on improving the condition, strength, functionality and long-term performance of existing buildings.",
    image: "/images/5.jpg",
  },
  {
    number: "06",
    title: "Project Management",
    type: "Management",
    description:
      "Project management support covering planning, coordination, execution and communication to help maintain quality and project progress.",
    image: "/images/6.jpg",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    type: "Contracts",
    description:
      "Lump sum contract solutions for clearly defined project requirements, scope, execution and delivery expectations.",
    image: "/images/7.jpg",
  },
  {
    number: "08",
    title: "Labour Contracts",
    type: "Workforce",
    description:
      "Labour contract support focused on organised workforce coordination, workmanship, site requirements and efficient project execution.",
    image: "/images/8.jpg",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project, requirements, site conditions and expectations.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We bring together engineering thinking, practical experience and coordinated planning.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We focus on responsible execution, quality workmanship and long-term performance.",
  },
];

const capabilities = [
  "Structural Design",
  "Structural Consultancy",
  "Construction",
  "Restoration",
  "Rehabilitation",
  "Project Management",
  "Lump Sum Contracts",
  "Labour Contracts",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-gray-50">
        <Container>
          <div className="grid min-h-[70vh] items-center gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-6">
              <p className="text-label text-gray-500">Our Services</p>

              <h1 className="mt-6 text-h1 text-gray-950">
                Engineering knowledge.
                <br />
                Practical execution.
              </h1>

              <p className="mt-14 max-w-xl text-body-lg text-gray-600">
                From structural design and consultancy to construction,
                restoration, rehabilitation and project management, we provide
                dependable solutions shaped around the requirements of each
                project.
              </p>
            </div>

            <div className="lg:col-span-6">
              <ImagePlaceholder
                src="/images/hero.jpg"
                alt="Daya Constructions and Structural Consultants"
                title="Daya"
                label="Services"
                aspectRatio="aspect-[4/5]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Services built around the project."
            description="We bring together structural engineering knowledge and practical construction experience across a range of project requirements."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                title={service.title}
                type={service.type}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          ENGINEERING APPROACH
      ===================================================== */}
      <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-label text-gray-500">
                Engineering Approach
              </p>

              <h2 className="mt-6 text-h2 text-gray-950">
                Practical thinking behind every solution.
              </h2>

              <p className="mt-8 text-body-lg text-gray-600">
                Our approach combines engineering knowledge with practical
                understanding of construction. This allows us to consider
                technical requirements alongside execution, coordination and
                long-term performance.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ImagePlaceholder
                src="/images/2.jpg"
                alt="Structural engineering and consultancy"
                title="Engineering"
                label="Technical Thinking"
                aspectRatio="aspect-[16/10]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="From understanding to execution."
            description="A straightforward process helps us keep project requirements, engineering decisions and execution connected."
          />

          <div className="mt-16 grid gap-0 border-y border-gray-200 md:grid-cols-3">
            {process.map((item, index) => (
              <div
                key={item.number}
                className={`p-8 sm:p-10 ${
                  index !== process.length - 1
                    ? "border-b border-gray-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="text-label text-gray-400">{item.number}</p>

                <h3 className="mt-8 text-h3 text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-5 text-body text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="bg-gray-950 py-24 text-white sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-label text-gray-400">Capabilities</p>

              <h2 className="mt-6 text-h2">
                Construction and structural expertise.
              </h2>

              <p className="mt-8 text-body-lg text-gray-400">
                Our capabilities bring together engineering, construction and
                project coordination to support different stages of the built
                environment.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid border-t border-gray-800 sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className={`flex items-center gap-5 border-b border-gray-800 py-6 ${
                      index % 2 === 0
                        ? "sm:border-r sm:pr-8"
                        : "sm:pl-8"
                    }`}
                  >
                    <span className="font-[var(--font-primary)] text-sm tracking-[0.15em] text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-[var(--font-primary)] text-lg font-semibold tracking-tight">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="text-label text-gray-400">The Daya Approach</p>

            <h2 className="mt-6 text-h2 text-gray-950">
              Practical experience supported by engineering thinking.
            </h2>

            <p className="mt-8 max-w-3xl text-body-lg text-gray-600">
              We believe dependable projects come from understanding the
              requirements, making informed engineering decisions and executing
              carefully. Our services are structured around that approach.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <CTAPreview />
    </main>
  );
}