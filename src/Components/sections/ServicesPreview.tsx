"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Structural Design",
    description:
      "Engineering-focused structural design solutions developed with safety, precision, functionality and long-term performance in mind.",
    type: "Design",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    description:
      "Professional technical guidance to support structural decisions, project planning and practical engineering requirements.",
    type: "Consultancy",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Reliable construction execution with attention to quality, coordination, workmanship, durability and project requirements.",
    type: "Execution",
  },
  {
    number: "04",
    title: "Restoration",
    description:
      "Careful restoration solutions that help preserve existing structures while improving their usability, condition and performance.",
    type: "Restoration",
  },
  {
    number: "05",
    title: "Rehabilitation",
    description:
      "Engineering-led rehabilitation approaches focused on improving the strength, condition and serviceability of existing structures.",
    type: "Engineering",
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "Structured planning and coordination from project initiation through execution, keeping scope, quality, resources and timelines aligned.",
    type: "Management",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    description:
      "Clearly defined construction contracts with an agreed project scope and fixed contract value for better cost planning and control.",
    type: "Contracts",
  },
  {
    number: "08",
    title: "Labour Contracts",
    description:
      "Skilled labour and workforce coordination for construction activities, supporting efficient execution and quality workmanship.",
    type: "Workforce",
  },
];

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      {direction === "right" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14m-6-6 6 6-6 6"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 12H5m6 6-6-6 6-6"
        />
      )}
    </svg>
  );
}

function ServiceIcon({ number }: { number: string }) {
  const common =
    "h-7 w-7 transition-transform duration-500 group-hover:scale-110";

  const icons: Record<string, React.ReactNode> = {
    "01": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20h16M6 20V9l6-5 6 5v11M9 20v-6h6v6"
        />
      </svg>
    ),

    "02": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <circle cx="12" cy="12" r="8" />
        <path
          strokeLinecap="round"
          d="M12 8v8M8 12h8"
        />
      </svg>
    ),

    "03": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20h16M5 20V9h14v11M8 9V5h8v4M8 13h2m4 0h2M8 17h2m4 0h2"
        />
      </svg>
    ),

    "04": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19h16M6 19V8l6-4 6 4v11"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-5h6v5M8 9h.01M12 7h.01M16 9h.01"
        />
      </svg>
    ),

    "05": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 19h14M7 19V7h10v12M9 7V4h6v3M10 11h4M10 15h4"
        />
      </svg>
    ),

    "06": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="1"
        />
        <path
          strokeLinecap="round"
          d="M8 9h8M8 13h5M8 16h3"
        />
      </svg>
    ),

    "07": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="13"
          rx="1"
        />
        <path
          strokeLinecap="round"
          d="M9 6V4h6v2M8 12h8M12 9v6"
        />
      </svg>
    ),

    "08": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className={common}
      >
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 19c.5-3.2 2-5 4.5-5s4 1.8 4.5 5M11.5 19c.5-3.2 2-5 4.5-5s4 1.8 4.5 5"
        />
      </svg>
    ),
  };

  return icons[number];
}

export default function ServicesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((current) => {
      if (current >= services.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  const previousSlide = () => {
    setActiveIndex((current) => {
      if (current <= 0) {
        return services.length - 1;
      }

      return current - 1;
    });
  };

  /*
   * Automatic next-by-next scrolling.
   */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [paused]);

  /*
   * Scroll the carousel to the active card.
   */
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>(
      "[data-service-card]"
    );

    const activeCard = cards[activeIndex];

    if (!activeCard) return;

    activeCard.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [activeIndex]);

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <Container>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="What We Do"
              title="Services shaped around the realities of construction."
              description="Each service combines technical understanding with practical project experience."
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">

            <p className="text-body-sm text-gray-500">
              From engineering and design to execution and project
              coordination, our services support the complete construction
              journey.
            </p>

          </div>

        </div>

        {/* =====================================================
            CAROUSEL CONTROLS
        ====================================================== */}

        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-5">

          <div className="flex items-center gap-3">

            <span className="text-label text-gray-400">
              Services
            </span>

            <span className="h-px w-8 bg-gray-300" />

            <span className="font-[var(--font-primary)] text-sm font-semibold text-gray-950">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="text-sm text-gray-400">
              /
            </span>

            <span className="text-sm text-gray-400">
              {String(services.length).padStart(2, "0")}
            </span>

          </div>

          <div className="flex items-center gap-2">

            {/* Previous */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous service"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                bg-white
                text-gray-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gray-950
                hover:bg-gray-950
                hover:text-white
              "
            >
              <ArrowIcon direction="left" />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next service"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-gray-950
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-gray-800
              "
            >
              <ArrowIcon />
            </button>

          </div>

        </div>

        {/* =====================================================
            SERVICE CAROUSEL
        ====================================================== */}

        <div
          ref={sliderRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="
            mt-8
            flex
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-6
            pt-2
            snap-x
            snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {services.map((service) => (
            <article
              key={service.number}
              data-service-card
              className="
                group
                relative
                flex
                min-h-[500px]
                w-[82vw]
                shrink-0
                snap-start
                flex-col
                overflow-hidden
                border
                border-gray-200
                bg-gray-50
                p-6
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-gray-400
                hover:bg-white
                hover:shadow-2xl
                hover:shadow-gray-950/10
                sm:w-[360px]
                sm:p-7
                lg:min-h-[540px]
                lg:w-[370px]
                lg:p-8
              "
            >

              {/* =================================================
                  LARGE BACKGROUND NUMBER
              ================================================== */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-5
                  -top-5
                  font-[var(--font-primary)]
                  text-[10rem]
                  font-semibold
                  leading-none
                  tracking-[-0.09em]
                  text-gray-100
                  transition-all
                  duration-500
                  group-hover:-translate-y-3
                  group-hover:text-gray-200
                "
              >
                {service.number}
              </span>

              {/* =================================================
                  TOP AREA
              ================================================== */}

              <div className="relative z-10 flex items-start justify-between">

                <div>

                  <span className="text-label text-gray-400">
                    {service.number}
                  </span>

                  <p className="mt-2 text-label text-gray-400">
                    {service.type}
                  </p>

                </div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    transition-all
                    duration-500
                    group-hover:border-gray-950
                    group-hover:bg-gray-950
                    group-hover:text-white
                  "
                >
                  <ServiceIcon number={service.number} />
                </div>

              </div>

              {/* =================================================
                  VISUAL / ARCHITECTURAL AREA
              ================================================== */}

              <div className="relative z-10 mt-12 flex h-28 items-center justify-center overflow-hidden border-y border-gray-200 bg-white">

                {/* Architectural lines */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    opacity-60
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to right,
                        rgba(17,17,17,0.07) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(17,17,17,0.07) 1px,
                        transparent 1px
                      )
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-transform duration-500 group-hover:scale-110">

                  <ServiceIcon number={service.number} />

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-10 mt-8 flex flex-1 flex-col">

                <h3 className="font-[var(--font-primary)] text-h3 font-semibold tracking-[-0.035em] text-gray-950">
                  {service.title}
                </h3>

                <p className="text-body-sm mt-4 text-gray-500">
                  {service.description}
                </p>

              </div>

              {/* =================================================
                  BOTTOM
              ================================================== */}

              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-gray-200 pt-5">

                <span className="text-label text-gray-400 transition-colors duration-300 group-hover:text-gray-950">
                  Explore Service
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    text-gray-500
                    transition-all
                    duration-300
                    group-hover:border-gray-950
                    group-hover:bg-gray-950
                    group-hover:text-white
                  "
                >
                  <ArrowIcon />
                </span>

              </div>

            </article>
          ))}

        </div>

        {/* =====================================================
            SLIDER PROGRESS
        ====================================================== */}

        <div className="mt-3 flex items-center gap-2">

          {services.map((service, index) => (
            <button
              key={service.number}
              type="button"
              aria-label={`Go to ${service.title}`}
              onClick={() => setActiveIndex(index)}
              className="group flex h-5 items-center"
            >
              <span
                className={`
                  h-px
                  transition-all
                  duration-500
                  ${
                    index === activeIndex
                      ? "w-10 bg-gray-950"
                      : "w-5 bg-gray-300 group-hover:bg-gray-600"
                  }
                `}
              />
            </button>
          ))}

        </div>

        {/* =====================================================
            VIEW ALL
        ====================================================== */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/services"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-gray-300
              px-6
              py-3
              text-button
              text-gray-800
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-gray-950
              hover:bg-gray-950
              hover:text-white
            "
          >
            <span>View All Services</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>

          </Link>

        </div>

      </Container>
    </section>
  );
}