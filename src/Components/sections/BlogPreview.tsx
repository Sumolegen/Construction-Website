import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const insights = [
  {
    number: "01",
    category: "Structural Engineering",
    title: "Understanding the fundamentals of structural design",
    description:
      "Explore the principles and considerations that contribute to safe, practical and durable structural solutions.",
  },
  {
    number: "02",
    category: "Construction",
    title: "Planning for better construction outcomes",
    description:
      "A look at the importance of planning, coordination and quality-focused execution in construction projects.",
  },
  {
    number: "03",
    category: "Restoration & Rehabilitation",
    title: "Approaching existing structures with care",
    description:
      "Understanding the key considerations involved in restoring and rehabilitating existing structures.",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Ideas, knowledge and perspectives from the built environment."
              description="Explore insights into structural engineering, construction, restoration and the evolving built environment."
            />

            <Link
              href="/blog"
              className="w-fit shrink-0 border-b border-gray-900 pb-1 text-sm font-medium text-gray-900 transition-colors duration-200 hover:border-gray-500 hover:text-gray-600"
            >
              View All Insights
            </Link>
          </div>

          {/* Insights */}
          <div className="grid border-t border-gray-300 md:grid-cols-3">
            {insights.map((insight) => (
              <article
                key={insight.number}
                className="group border-b border-gray-300 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-medium text-gray-400">
                    {insight.number}
                  </span>

                  <span className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                <p className="mt-12 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  {insight.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-900 lg:text-2xl">
                  {insight.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {insight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}