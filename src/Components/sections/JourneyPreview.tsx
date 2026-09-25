"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const journey = [
  {
    id: "01",
    year: "40+ Years",
    title: "A Foundation in Construction",
    location: "Kerala",
    description:
      "Our foundation is rooted in more than four decades of construction experience, built through years of practical work and industry knowledge.",
    icon: "foundation",
    position: "left",
  },
  {
    id: "02",
    year: "Kerala & Tamil Nadu",
    title: "Experience Across Regions",
    location: "Kerala → Tamil Nadu",
    description:
      "Our construction journey has included work across Kerala and Tamil Nadu, building practical knowledge across different projects and environments.",
    icon: "regions",
    position: "right",
  },
  {
    id: "03",
    year: "2026",
    title: "Daya Constructions",
    location: "Tamil Nadu",
    description:
      "Daya Constructions & Structural Consultants was established in 2026, bringing construction experience together with structural engineering expertise.",
    icon: "building",
    position: "left",
  },
  {
    id: "04",
    year: "The Future",
    title: "Building the Next Chapter",
    location: "A Growing Journey",
    description:
      "With a foundation built on experience and a focus on engineering, we aim to deliver dependable construction and structural solutions for the future.",
    icon: "future",
    position: "right",
  },
];

function JourneyPin({
  active,
  number,
}: {
  active: boolean;
  number: string;
}) {
  return (
    <div
      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
        active
          ? "scale-110 bg-brand-primary text-gray-950"
          : "bg-brand-secondary text-white"
      }`}
    >
      <span className="text-xs font-bold">{number}</span>
      <span
        className={`absolute -inset-2 rounded-full border transition-all duration-300 ${
          active ? "border-brand-primary/50" : "border-brand-secondary/20"
        }`}
      />
    </div>
  );
}

export default function JourneyPreview() {
  const [activeJourney, setActiveJourney] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-32">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Our Journey"
            title="Experience carried forward. A new chapter begins."
            description="From decades of construction experience to a new engineering-led vision, explore the milestones that shape the journey of Daya."
            align="center"
          />
        </div>

        {/* Journey Route */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-gray-200 bg-white px-5 py-10 shadow-sm sm:mt-20 sm:px-10 sm:py-14 lg:rounded-[2.5rem] lg:px-14 lg:py-16">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5"
          />

          {/* Route Heading */}
          <div className="relative z-10 mb-12 flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                The Road We Have Travelled
              </p>
              <h3 className="mt-3 font-[var(--font-primary)] text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                From experience to the future
              </h3>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-brand-secondary/15 bg-white px-4 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-30" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-secondary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-secondary">
                Our Story in Milestones
              </span>
            </div>
          </div>

          {/* Desktop Route Map */}
          <div className="relative hidden min-h-[560px] lg:block">
            {/* Decorative map grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(#407D41 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Travel Route */}
            <svg
              viewBox="0 0 1000 560"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 105 430 C 170 430, 210 360, 270 350 S 390 420, 470 330 S 600 170, 700 210 S 820 320, 900 100"
                stroke="#407D41"
                strokeWidth="3"
                strokeDasharray="10 12"
                strokeLinecap="round"
                opacity="0.45"
              />

              <path
                d="M 105 430 C 170 430, 210 360, 270 350 S 390 420, 470 330 S 600 170, 700 210 S 820 320, 900 100"
                stroke="#C5A04A"
                strokeWidth="2"
                strokeDasharray="4 16"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>

            {/* Milestone 1 */}
            <button
              type="button"
              onClick={() => setActiveJourney(0)}
              className="absolute left-[5%] top-[65%] z-10 flex -translate-y-1/2 flex-col items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              aria-label="View milestone 1: A Foundation in Construction"
            >
              <JourneyPin
                active={activeJourney === 0}
                number="01"
              />
              <div
                className={`mt-5 w-52 rounded-2xl border p-5 shadow-md transition-all duration-300 ${
                  activeJourney === 0
                    ? "border-brand-primary bg-white shadow-xl"
                    : "border-gray-200 bg-white/90"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
                  40+ Years
                </span>
                <h4 className="mt-3 text-lg font-bold leading-snug text-gray-950">
                  A Foundation in Construction
                </h4>
                <p className="mt-3 text-xs font-medium text-brand-secondary">
                  Kerala
                </p>
              </div>
            </button>

            {/* Milestone 2 */}
            <button
              type="button"
              onClick={() => setActiveJourney(1)}
              className="absolute left-[27%] top-[50%] z-10 flex -translate-y-1/2 flex-col items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              aria-label="View milestone 2: Experience Across Regions"
            >
              <JourneyPin
                active={activeJourney === 1}
                number="02"
              />
              <div
                className={`mt-5 w-52 rounded-2xl border p-5 shadow-md transition-all duration-300 ${
                  activeJourney === 1
                    ? "border-brand-primary bg-white shadow-xl"
                    : "border-gray-200 bg-white/90"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
                  Kerala & Tamil Nadu
                </span>
                <h4 className="mt-3 text-lg font-bold leading-snug text-gray-950">
                  Experience Across Regions
                </h4>
                <p className="mt-3 text-xs font-medium text-brand-secondary">
                  Regional Experience
                </p>
              </div>
            </button>

            {/* Milestone 3 */}
            <button
              type="button"
              onClick={() => setActiveJourney(2)}
              className="absolute left-[52%] top-[27%] z-10 flex -translate-y-1/2 flex-col items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              aria-label="View milestone 3: Daya Constructions"
            >
              <JourneyPin
                active={activeJourney === 2}
                number="03"
              />
              <div
                className={`mt-5 w-52 rounded-2xl border p-5 shadow-md transition-all duration-300 ${
                  activeJourney === 2
                    ? "border-brand-primary bg-white shadow-xl"
                    : "border-gray-200 bg-white/90"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
                  2026
                </span>
                <h4 className="mt-3 text-lg font-bold leading-snug text-gray-950">
                  Daya Constructions
                </h4>
                <p className="mt-3 text-xs font-medium text-brand-secondary">
                  Tamil Nadu
                </p>
              </div>
            </button>

            {/* Milestone 4 */}
            <button
              type="button"
              onClick={() => setActiveJourney(3)}
              className="absolute right-[3%] top-[18%] z-10 flex -translate-y-1/2 flex-col items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              aria-label="View milestone 4: Building the Next Chapter"
            >
              <JourneyPin
                active={activeJourney === 3}
                number="04"
              />
              <div
                className={`mt-5 w-52 rounded-2xl border p-5 shadow-md transition-all duration-300 ${
                  activeJourney === 3
                    ? "border-brand-primary bg-white shadow-xl"
                    : "border-gray-200 bg-white/90"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
                  The Future
                </span>
                <h4 className="mt-3 text-lg font-bold leading-snug text-gray-950">
                  Building the Next Chapter
                </h4>
                <p className="mt-3 text-xs font-medium text-brand-secondary">
                  A Growing Journey
                </p>
              </div>
            </button>
          </div>

          {/* Mobile and Tablet Route */}
          <div className="relative lg:hidden">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[23px] top-8 w-[2px] bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary/20"
            />

            <div className="relative space-y-6">
              {journey.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveJourney(index)}
                  className={`relative flex w-full gap-5 rounded-2xl border p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary sm:gap-6 sm:p-6 ${
                    activeJourney === index
                      ? "border-brand-primary bg-brand-primary/5 shadow-lg"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="relative z-10 mt-1">
                    <JourneyPin
                      active={activeJourney === index}
                      number={item.id}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
                        {item.year}
                      </span>
                      <span className="rounded-full bg-brand-secondary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-secondary">
                        {item.location}
                      </span>
                    </div>

                    <h4 className="mt-3 text-lg font-bold leading-snug text-gray-950 sm:text-xl">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Milestone Details */}
          <div className="relative z-10 mt-12 overflow-hidden rounded-2xl bg-brand-secondary p-6 text-white sm:p-8 lg:mt-14">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-gray-950">
                    {journey[activeJourney].id}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                    Selected Milestone · {journey[activeJourney].year}
                  </span>
                </div>

                <h4 className="mt-5 font-[var(--font-primary)] text-2xl font-bold tracking-tight sm:text-3xl">
                  {journey[activeJourney].title}
                </h4>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
                  {journey[activeJourney].description}
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {journey[activeJourney].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone Navigation */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
              <p className="text-xs font-medium text-white/60">
                Milestone {activeJourney + 1} of {journey.length}
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveJourney((current) =>
                      current === 0 ? journey.length - 1 : current - 1
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-brand-primary hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  aria-label="Previous milestone"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="m15 18-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveJourney((current) =>
                      current === journey.length - 1 ? 0 : current + 1
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-brand-primary hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  aria-label="Next milestone"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}