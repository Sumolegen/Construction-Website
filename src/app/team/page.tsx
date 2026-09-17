import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

const founderHighlights = [
  {
    number: "01",
    title: "B.E. Civil Engineering",
    description:
      "Department topper during his Civil Engineering studies.",
  },
  {
    number: "02",
    title: "M.E. Structural Engineering",
    description:
      "College topper in Structural Engineering.",
  },
  {
    number: "03",
    title: "5+ Completed Projects",
    description:
      "Hands-on experience through completed construction and structural projects.",
  },
  {
    number: "04",
    title: "Anna University Recognition",
    description:
      "Recognised by Anna University for academic achievement as a topper.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the project, requirements, site conditions and client expectations.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Apply structural knowledge and practical experience to develop appropriate solutions.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Coordinate and deliver work with attention to quality, safety and long-term performance.",
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100">
        <Container>
          <div className="flex min-h-[65vh] items-center py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Our Team
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
                Engineering knowledge.
                <br />
                Practical experience.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Daya brings together engineering knowledge, construction
                experience and a practical approach to every project.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="aspect-4/5 bg-gray-200">
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                    Founder Image
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center lg:col-span-6 lg:col-start-7">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                  Founder
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Dayananthan
                </h2>

                <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
                  M.E. Structural Engineer
                </p>

                <p className="mt-8 text-xl leading-9 text-gray-800 sm:text-2xl">
                  Building a new chapter through engineering, construction and
                  practical experience.
                </p>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  Dayananthan comes from a family with a strong construction
                  background and brings an engineering-led approach to Daya
                  Constructions & Structural Consultants.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  With academic achievements in Civil and Structural
                  Engineering and experience from more than five completed
                  projects, his approach combines technical understanding with
                  practical project experience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Highlights */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Founder Highlights"
            title="A foundation built through education and experience."
            description="Academic achievement and practical project exposure shape the engineering approach behind Daya."
          />

          <div className="mt-12 grid border-t border-gray-300 md:grid-cols-2">
            {founderHighlights.map((highlight) => (
              <article
                key={highlight.number}
                className="border-b border-gray-300 p-6 md:p-8 lg:p-10"
              >
                <span className="text-sm font-medium text-gray-400">
                  {highlight.number}
                </span>

                <h2 className="mt-10 text-2xl font-semibold tracking-tight text-gray-900">
                  {highlight.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering + Experience */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Foundation"
                title="Engineering meets practical experience."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-9 text-gray-800 sm:text-2xl">
                Daya is built around the combination of structural engineering
                knowledge and practical understanding of construction.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                The family&apos;s construction background spans more than four
                decades across Kerala and Tamil Nadu, while the founder brings
                formal engineering education and hands-on project experience
                into the next chapter.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                This foundation helps us approach projects with both technical
                thinking and an understanding of how work is executed on site.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-gray-100 py-24 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="From understanding to execution."
            description="Every project begins with understanding the requirement and ends with focused execution."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {approach.map((item) => (
              <article
                key={item.number}
                className="border-t border-gray-300 pt-6"
              >
                <span className="text-sm font-medium text-gray-400">
                  {item.number}
                </span>

                <h2 className="mt-8 text-2xl font-semibold tracking-tight text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
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
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Let&apos;s discuss your construction or structural requirements.
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