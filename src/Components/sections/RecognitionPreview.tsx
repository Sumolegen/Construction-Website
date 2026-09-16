import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const achievements = [
  {
    number: "01",
    title: "B.E. Civil Engineering",
    subtitle: "Department Topper",
    description:
      "Recognized as the topper of the Civil Engineering department during B.E. Civil Engineering.",
  },
  {
    number: "02",
    title: "M.E. Structural Engineering",
    subtitle: "College Topper",
    description:
      "Achieved the position of college topper while pursuing M.E. Structural Engineering.",
  },
  {
    number: "03",
    title: "Anna University Recognition",
    subtitle: "Academic Achievement",
    description:
      "Received an award from Anna University in recognition of academic achievement as a topper.",
  },
];

export default function RecognitionPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section Heading */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Recognition"
              title="Academic excellence behind the engineering."
              description="A strong academic foundation in civil and structural engineering supports our approach to every project."
            />
          </div>

          {/* Achievements */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-gray-300">
              {achievements.map((achievement) => (
                <article
                  key={achievement.number}
                  className="grid gap-5 border-b border-gray-300 py-8 sm:grid-cols-[60px_1fr] sm:gap-8"
                >
                  <span className="text-sm font-medium text-gray-400">
                    {achievement.number}
                  </span>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                      {achievement.subtitle}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {achievement.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                      {achievement.description}
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