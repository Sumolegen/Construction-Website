"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const achievements = [
  {
    number: "01",
    title: "Anna University Recognition",
    subtitle: "Academic Achievement",
    description:
      "Received an award from Anna University in recognition of academic achievement as a topper.",
    icon: "award",
  },
  {
    number: "02",
    title: "M.E. Structural Engineering",
    subtitle: "College Topper",
    description:
      "Achieved the position of college topper while pursuing M.E. Structural Engineering.",
    icon: "medal",
  },
  {
    number: "03",
    title: "B.E. Civil Engineering",
    subtitle: "Department Topper",
    description:
      "Recognized as the topper of the Civil Engineering department during B.E. Civil Engineering.",
    icon: "graduation",
  },
];

function AchievementIcon({ type }: { type: string }) {
  if (type === "graduation") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="m2 9 10-5 10 5-10 5L2 9Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "medal") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="5" />
        <path
          d="m8.5 12-2 9 3.5-2 3.5 2-2-9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0V4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 6H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RecognitionPreview() {
  const orderedAchievements = [...achievements].reverse();

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-brand-secondary">
            Recognition
          </div>

          <h2 className="font-[var(--font-primary)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-brand-primary">Academic excellence</span>{" "}
            <span className="text-brand-secondary">
              behind the engineering.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            A strong academic foundation in civil and structural engineering
            supports our approach to every project.
          </p>
        </div>

        {/* Zigzag Achievement Road */}
        <div className="relative mx-auto max-w-4xl">
          <style>{`
            @keyframes runAchievementRoad {
              0% {
                top: 88%;
                left: 25%;
                transform: translate(-50%, -50%) scaleX(1);
              }
              40% {
                top: 50%;
                left: 75%;
                transform: translate(-50%, -50%) scaleX(1);
              }
              60% {
                top: 50%;
                left: 75%;
                transform: translate(-50%, -50%) scaleX(1);
              }
              100% {
                top: 12%;
                left: 25%;
                transform: translate(-50%, -50%) scaleX(1);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .achievement-runner {
                animation: none !important;
                top: 12% !important;
                left: 25% !important;
              }
            }
          `}</style>

          {/* Road */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <svg
              viewBox="0 0 1000 760"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
            >
              <path
                d="M250 670 C250 590 250 550 500 500 S750 390 750 350 S500 220 250 90"
                stroke="#C5A04A"
                strokeWidth="54"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.25"
              />
              <path
                d="M250 670 C250 590 250 550 500 500 S750 390 750 350 S500 220 250 90"
                stroke="#407D41"
                strokeWidth="2"
                strokeDasharray="10 12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Achievement Cards */}
          <div className="relative z-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-12 sm:gap-y-4">
            {orderedAchievements.map((achievement, index) => {
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={achievement.number}
                  className={`relative ${
                    isLeft
                      ? "col-start-1"
                      : "col-start-2 translate-y-12 sm:translate-y-16"
                  } ${
                    index === 0
                      ? "row-start-3"
                      : index === 1
                        ? "row-start-2"
                        : "row-start-1"
                  }`}
                >
                  {/* Small Milestone Marker */}
                  <div
                    className={`absolute top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-brand-primary text-white shadow-md sm:h-9 sm:w-9 ${
                      isLeft
                        ? "-right-9 sm:-right-14"
                        : "-left-9 sm:-left-14"
                    }`}
                  >
                    <AchievementIcon type={achievement.icon} />
                  </div>

                  {/* Achievement Card */}
                  <div className="rounded-xl border border-brand-primary/30 bg-white/95 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:shadow-md sm:rounded-2xl sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-secondary sm:text-[10px] sm:tracking-[0.15em]">
                        {achievement.subtitle}
                      </span>

                      <span className="text-[10px] font-semibold text-brand-primary">
                        {achievement.number}
                      </span>
                    </div>

                    <h3 className="mt-2 font-[var(--font-primary)] text-sm font-bold leading-snug text-gray-950 sm:text-lg">
                      {achievement.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-gray-600 sm:text-sm sm:leading-6">
                      {achievement.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Label */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-secondary sm:text-xs sm:tracking-[0.2em]">
            Knowledge · Dedication · Achievement
          </p>
        </div>
      </Container>
    </section>
  );
}