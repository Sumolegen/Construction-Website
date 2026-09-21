import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";
import ImagePlaceholder from "../../Components/cards/ImagePlaceholder";

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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

export default function AwardsPage() {
  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="architectural-grid pointer-events-none absolute inset-0 opacity-60"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-gray-50 blur-3xl"
        />

        <Container>
          <div className="relative flex min-h-[calc(100vh-80px)] items-center py-16 sm:py-20 lg:py-24">
            <div className="max-w-5xl">
              <p className="text-label text-gray-500">
                Recognition
              </p>

              <h1 className="text-display mt-7 max-w-5xl text-gray-950">
                Achievement built
                <br />
                on knowledge.
              </h1>

              <p className="text-body-lg mt-14 max-w-2xl text-gray-600">
                Academic achievement and engineering knowledge form an
                important part of the foundation behind Daya.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#achievements"
                  className="group inline-flex items-center gap-3 rounded-full bg-gray-950 px-5 py-3 font-[var(--font-primary)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                >
                  <span>View Achievements</span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 font-[var(--font-primary)] text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-950"
                >
                  <span>Start a Conversation</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
        >
          <span className="h-px w-10 bg-gray-300" />
          <span className="text-label text-gray-400">Scroll</span>
          <span className="h-px w-10 bg-gray-300" />
        </div>
      </section>

      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}
      <section
        id="achievements"
        className="bg-white py-24 sm:py-28 lg:py-32"
      >
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            <SectionHeading
              eyebrow="Achievements"
              title="A strong academic foundation."
              description="The founder's academic journey reflects a continued focus on engineering knowledge and structural understanding."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {achievements.map((achievement) => (
                <article
                  key={achievement.number}
                  className="group relative overflow-hidden border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-950/5 sm:p-8 lg:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-primary)] text-sm font-semibold tracking-[0.16em] text-gray-400">
                      {achievement.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-gray-950 group-hover:text-gray-950"
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <div className="mt-20">
                    <h2 className="font-[var(--font-primary)] text-2xl font-semibold leading-tight tracking-[-0.025em] text-gray-950">
                      {achievement.title}
                    </h2>

                    <p className="text-body-sm mt-5 text-gray-600">
                      {achievement.description}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-0 bg-gray-950 transition-all duration-500 group-hover:w-full"
                  />
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          RECOGNITION
      ========================================================= */}
      <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Recognition Image */}
            <div className="relative lg:col-span-5">
              <div className="image-hover overflow-hidden border border-gray-200 bg-white">
                <ImagePlaceholder
                  label="Recognition"
                  title="Anna University"
                  aspectRatio="aspect-[4/3]"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 hidden border border-gray-300 bg-white px-5 py-4 sm:block">
                <p className="text-label text-gray-400">
                  Recognition
                </p>

                <p className="mt-1 font-[var(--font-primary)] text-lg font-semibold text-gray-950">
                  Academic Achievement
                </p>
              </div>
            </div>

            {/* Recognition Content */}
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-label text-gray-500">
                Anna University
              </p>

              <h2 className="text-h2 mt-6 max-w-2xl text-gray-950">
                Recognition for academic achievement.
              </h2>

              <p className="text-body mt-10 max-w-2xl text-gray-600">
                Academic performance has played an important role in shaping
                the founder&apos;s engineering journey. Recognition from Anna
                University represents an important milestone in that journey.
              </p>

              <p className="text-body mt-6 max-w-2xl text-gray-600">
                This academic foundation continues to support the
                engineering-led approach behind Daya Constructions &amp;
                Structural Consultants.
              </p>

              <div className="mt-10">
                <div className="h-px w-full bg-gray-200" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-label text-gray-400">
                    Engineering Foundation
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500"
                  >
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHAT IT REPRESENTS
      ========================================================= */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            <SectionHeading
              eyebrow="What It Represents"
              title="Knowledge that supports better decisions."
              description="Recognition is not only about achievement. It represents the knowledge and discipline brought into practical engineering work."
            />

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="group border-t border-gray-300 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-primary)] text-sm font-semibold tracking-[0.16em] text-gray-400">
                      {value.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-gray-950 group-hover:text-gray-950"
                    >
                      <ArrowIcon />
                    </span>
                  </div>

                  <h2 className="font-[var(--font-primary)] mt-10 text-2xl font-semibold leading-tight tracking-[-0.025em] text-gray-950">
                    {value.title}
                  </h2>

                  <p className="text-body-sm mt-5 max-w-sm text-gray-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-label text-gray-400">
              Work With Us
            </p>

            <h2 className="text-h2 mt-6 text-white">
              Let&apos;s build something with confidence.
            </h2>

            <p className="text-body-lg mx-auto mt-8 max-w-2xl text-gray-400">
              Discuss your construction, structural or restoration
              requirements with us.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-[var(--font-primary)] text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-lg"
              >
                <span>Start a Conversation</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}