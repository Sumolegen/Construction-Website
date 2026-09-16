import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const journey = [
  {
    year: "40+ Years",
    title: "A Foundation in Construction",
    description:
      "Our foundation is rooted in more than four decades of construction experience, built through years of practical work and industry knowledge.",
  },
  {
    year: "Kerala & Tamil Nadu",
    title: "Experience Across Regions",
    description:
      "Our construction journey has included work across Kerala and Tamil Nadu, building practical knowledge across different projects and environments.",
  },
  {
    year: "2026",
    title: "Daya Constructions",
    description:
      "Daya Constructions & Structural Consultants was established in 2026, bringing construction experience together with structural engineering expertise.",
  },
  {
    year: "The Future",
    title: "Building the Next Chapter",
    description:
      "With a foundation built on experience and a focus on engineering, we aim to deliver dependable construction and structural solutions for the future.",
  },
];

export default function JourneyPreview() {
  return (
    <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section Heading */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Our Journey"
              title="Experience carried forward. A new chapter begins."
              description="Daya builds on a family foundation in construction while bringing a new engineering-led approach to the built environment."
            />
          </div>

          {/* Journey Timeline */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-gray-300">
              {journey.map((item) => (
                <article
                  key={item.year}
                  className="grid gap-5 border-b border-gray-300 py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
                >
                  <span className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                    {item.year}
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