import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const expertise = [
  {
    number: "01",
    title: "Structural Engineering",
    description:
      "Engineering-focused structural solutions designed with safety, precision and long-term performance in mind.",
  },
  {
    number: "02",
    title: "Construction Execution",
    description:
      "Coordinated construction execution with attention to workmanship, quality, timelines and project requirements.",
  },
  {
    number: "03",
    title: "Restoration & Rehabilitation",
    description:
      "Practical solutions for restoring, strengthening and improving existing structures while extending their service life.",
  },
  {
    number: "04",
    title: "Project Management",
    description:
      "Structured planning and coordination to keep project scope, resources, quality and execution aligned.",
  },
  {
    number: "05",
    title: "Technical Consultancy",
    description:
      "Professional technical guidance that supports better structural and construction decisions throughout a project.",
  },
];

export default function ExpertisePreview() {
  return (
    <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section Heading */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Knowledge that supports better structures."
              description="Our expertise combines structural understanding, construction knowledge and practical project coordination."
            />
          </div>

          {/* Expertise List */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-gray-300">
              {expertise.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 border-b border-gray-300 py-7 sm:grid-cols-[60px_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="text-sm font-medium text-gray-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {item.title}
                    </h3>

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
  );
}