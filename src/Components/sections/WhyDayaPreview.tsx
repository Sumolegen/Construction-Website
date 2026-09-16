import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Engineering-Led Approach",
    description:
      "Every project is approached with technical understanding, structural knowledge and practical engineering considerations.",
  },
  {
    number: "02",
    title: "Quality & Precision",
    description:
      "We focus on accurate planning, careful execution and attention to detail throughout every stage of a project.",
  },
  {
    number: "03",
    title: "Safety-Focused Execution",
    description:
      "Safety remains an important consideration in planning, structural decisions and construction execution.",
  },
  {
    number: "04",
    title: "Transparent Coordination",
    description:
      "Clear communication and organized coordination help keep project requirements, expectations and execution aligned.",
  },
  {
    number: "05",
    title: "Long-Term Performance",
    description:
      "Our approach considers durability, functionality and the long-term performance of the structures we work on.",
  },
];

export default function WhyDayaPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section Heading */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Why Daya"
              title="Built around principles that matter."
              description="Our approach combines engineering knowledge, quality execution and clear project coordination."
            />
          </div>

          {/* Principles */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-gray-300">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-5 border-b border-gray-300 py-7 sm:grid-cols-[60px_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="text-sm font-medium text-gray-400">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {principle.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}