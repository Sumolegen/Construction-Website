import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Structural Design",
    description:
      "Thoughtful structural solutions developed with engineering precision, safety and long-term performance in mind.",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    description:
      "Technical guidance and structural expertise to support informed decisions throughout your project.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Reliable construction execution focused on quality, coordination, durability and attention to detail.",
  },
  {
    number: "04",
    title: "Restoration",
    description:
      "Careful restoration solutions that preserve existing structures while improving their performance and usability.",
  },
  {
    number: "05",
    title: "Rehabilitation",
    description:
      "Engineering-led rehabilitation approaches for improving the condition, strength and serviceability of structures.",
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "Organized project coordination from planning through execution, keeping quality, time and requirements aligned.",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    description:
      "Clearly defined construction contracts with an agreed project scope and fixed contract value for better cost planning and control.",
  },
  {
    number: "08",
    title: "Labour Contracts",
    description:
      "Skilled labour and workforce coordination for construction activities, supporting efficient execution and quality workmanship.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Services"
              title="Engineering expertise for every stage of a project."
              description="From structural thinking to project execution, we provide integrated solutions for the built environment."
            />

            <Link
              href="/services"
              className="w-fit shrink-0 border-b border-gray-900 pb-1 text-sm font-medium text-gray-900 transition-colors duration-200 hover:border-gray-500 hover:text-gray-600"
            >
              View All Services
            </Link>
          </div>

          <div className="grid border-t border-gray-300 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-b border-gray-300 p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-medium text-gray-400">
                    {service.number}
                  </span>

                  <span className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}