import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

const achievements = [
  {
    number: "01",
    title: "B.E. Civil Engineering",
    description:
      "Achieved Department Topper recognition during Civil Engineering studies.",
  },
  {
    number: "02",
    title: "M.E. Structural Engineering",
    description:
      "Achieved College Topper recognition during Structural Engineering studies.",
  },
  {
    number: "03",
    title: "Anna University Recognition",
    description:
      "Received recognition from Anna University for academic achievement as a topper.",
  },
];

const values = [
  {
    number: "01",
    title: "Knowledge",
    description:
      "A strong academic foundation supports sound engineering decisions.",
  },
  {
    number: "02",
    title: "Precision",
    description:
      "Technical understanding helps us approach projects with attention to detail.",
  },
  {
    number: "03",
    title: "Responsibility",
    description:
      "Engineering knowledge is applied with a focus on quality and long-term performance.",
  },
];

export default function AwardsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100">
        <Container>
          <div className="flex min-h-[65vh] items-center py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Recognition
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
                Achievement built
                <br />
                on knowledge.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Academic achievement and engineering knowledge form an
                important part of the foundation behind Daya.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Achievements"
            title="A strong academic foundation."
            description="The founder's academic journey reflects a continued focus on engineering knowledge and structural understanding."
          />

          <div className="mt-12 grid border-t border-gray-300 md:grid-cols-3">
            {achievements.map((achievement) => (
              <article
                key={achievement.number}
                className="border-b border-gray-300 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10 last:md:border-r-0"
              >
                <span className="text-sm font-medium text-gray-400">
                  {achievement.number}
                </span>

                <h2 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
                  {achievement.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {achievement.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="aspect-4/3 bg-gray-200">
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                    Recognition Image
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center lg:col-span-6 lg:col-start-7">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                  Anna University
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Recognition for academic achievement.
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  Academic performance has played an important role in shaping
                  the founder&apos;s engineering journey. Recognition from Anna
                  University represents an important milestone in that journey.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  This academic foundation continues to support the
                  engineering-led approach behind Daya Constructions &
                  Structural Consultants.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What It Represents"
            title="Knowledge that supports better decisions."
            description="Recognition is not only about achievement. It represents the knowledge and discipline brought into practical engineering work."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-t border-gray-300 pt-6"
              >
                <span className="text-sm font-medium text-gray-400">
                  {value.number}
                </span>

                <h2 className="mt-8 text-2xl font-semibold tracking-tight text-gray-900">
                  {value.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
              Work With Us
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something with confidence.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Discuss your construction, structural or restoration
              requirements with us.
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