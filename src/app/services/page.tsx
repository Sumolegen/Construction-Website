"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";
import ImagePlaceholder from "../../Components/cards/ImagePlaceholder";
import CTAPreview from "../../Components/sections/CTAPreview";

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

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project, site conditions, requirements, objectives and practical considerations.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "The project is developed through appropriate engineering decisions, coordination and execution planning.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We focus on coordinated implementation, quality workmanship, communication and responsible project delivery.",
  },
];

function ServiceIcon({ number }: { number: string }) {
  const common =
    "h-6 w-6 transition-transform duration-500 group-hover:scale-110";

  const icons: Record<string, ReactNode> = {
    "01": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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
        strokeWidth="1.3"
        className={common}
        aria-hidden="true"
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

function ArrowIcon({
  direction = "right",
}: {
  direction?: "left" | "right";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
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

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [paused, setPaused] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  /*
   * Move the slider one card at a time.
   */
  const goToService = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards =
      slider.querySelectorAll<HTMLElement>(
        "[data-service-card]"
      );

    const target = cards[index];

    if (!target) return;

    slider.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });

    setActiveService(index);
  };

  const nextService = () => {
    const next =
      activeService >= services.length - 1
        ? 0
        : activeService + 1;

    goToService(next);
  };

  const previousService = () => {
    const previous =
      activeService <= 0
        ? services.length - 1
        : activeService - 1;

    goToService(previous);
  };

  /*
   * Automatic left-to-right service movement.
   */
  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveService((current) => {
        const next =
          current >= services.length - 1
            ? 0
            : current + 1;

        const slider = sliderRef.current;

        if (slider) {
          const cards =
            slider.querySelectorAll<HTMLElement>(
              "[data-service-card]"
            );

          const target = cards[next];

          if (target) {
            slider.scrollTo({
              left: target.offsetLeft,
              behavior: "smooth",
            });
          }
        }

        return next;
      });
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, [paused]);

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-gray-200 bg-white">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(17,17,17,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(17,17,17,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <Container>
          <div className="relative grid min-h-[62vh] items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">

            <div className="lg:col-span-7">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gray-950" />

                <span className="text-label text-gray-500">
                  Our Services
                </span>
              </div>

              <h1 className="text-display max-w-5xl text-gray-950">
                Engineering.
                <br />

                <span className="text-gray-500">
                  Construction.
                </span>

                <br />

                Delivered with purpose.
              </h1>

              <p className="text-body-lg mt-8 max-w-2xl text-gray-600">
                From structural design and consultancy to construction,
                restoration and project management, Daya provides practical
                solutions for the built environment.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-h-12
                    items-center
                    gap-4
                    rounded-full
                    bg-gray-950
                    px-6
                    py-3
                    text-button
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-gray-800
                    hover:shadow-xl
                  "
                >
                  <span>Discuss Your Project</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>

                <a
                  href="#services"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-gray-300
                    px-6
                    py-3
                    text-button
                    text-gray-700
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-gray-950
                    hover:text-gray-950
                  "
                >
                  Explore Services
                </a>

              </div>
            </div>

            <div className="relative lg:col-span-5">

              <div className="relative">

                <div className="overflow-hidden border border-gray-200 bg-gray-100 shadow-2xl shadow-gray-950/10">
                  <ImagePlaceholder
                    label="Construction & Engineering"
                    title="Daya"
                    aspectRatio="aspect-[4/5]"
                  />
                </div>

                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-gray-400"
                />

                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-gray-400"
                />

                <div className="absolute -bottom-6 -left-5 w-60 border border-gray-200 bg-white p-5 shadow-xl sm:-left-8">

                  <div className="flex items-center justify-between">

                    <span className="text-label text-gray-400">
                      Daya
                    </span>

                    <span className="group flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-white">
                      <ServiceIcon number="01" />
                    </span>

                  </div>

                  <p className="mt-3 font-[var(--font-primary)] text-h4 text-gray-950">
                    Built on engineering.
                  </p>

                  <div className="mt-4 h-px bg-gray-200" />

                  <p className="text-body-sm mt-3 text-gray-500">
                    Practical construction knowledge supported by structural
                    engineering expertise.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </Container>

        <div
          aria-hidden="true"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
        >
          <span className="h-px w-8 bg-gray-300" />

          <span className="text-label text-gray-400">
            Scroll to explore
          </span>

          <span className="h-px w-8 bg-gray-300" />
        </div>

      </section>


      {/* =====================================================
          WHAT WE DO — PORTRAIT SERVICE SLIDER
      ====================================================== */}

      <section
        id="services"
        className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container>

          {/* Heading */}

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
                We work across design, engineering, construction and project
                coordination to support projects from early decisions through
                execution.
              </p>

            </div>

          </div>


          {/* Slider header */}

          <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-5">

            <div className="flex items-center gap-3">

              <span className="text-label text-gray-400">
                Services
              </span>

              <span className="h-px w-8 bg-gray-300" />

              <span className="font-[var(--font-primary)] text-sm font-semibold text-gray-950">
                {String(activeService + 1).padStart(2, "0")}
              </span>

              <span className="text-sm text-gray-400">
                /
              </span>

              <span className="text-sm text-gray-400">
                {String(services.length).padStart(2, "0")}
              </span>

            </div>


            {/* Slider controls */}

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={previousService}
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

              <button
                type="button"
                onClick={nextService}
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
                  hover:shadow-lg
                "
              >
                <ArrowIcon />
              </button>

            </div>

          </div>


          {/* =================================================
              HORIZONTAL SLIDER
          ================================================== */}

          <div
            ref={sliderRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            className="
              mt-8
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              overflow-y-visible
              scroll-smooth
              px-1
              pb-8
              pt-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {services.map((service, index) => (

              <article
                key={service.number}
                data-service-card
                className="
                  group
                  relative
                  flex
                  min-h-[520px]
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
                  hover:-translate-y-4
                  hover:border-gray-400
                  hover:bg-white
                  hover:shadow-2xl
                  hover:shadow-gray-950/10
                  sm:w-[350px]
                  sm:p-7
                  lg:min-h-[560px]
                  lg:w-[calc((100%-40px)/3)]
                  lg:p-8
                "
              >

                {/* Large background number */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-5
                    -top-4
                    font-[var(--font-primary)]
                    text-[10rem]
                    font-semibold
                    leading-none
                    tracking-[-0.09em]
                    text-gray-100
                    transition-all
                    duration-700
                    group-hover:-translate-y-5
                    group-hover:text-gray-200
                    group-hover:scale-105
                  "
                >
                  {service.number}
                </span>


                {/* Top information */}

                <div className="relative z-10 flex items-start justify-between">

                  <div>

                    <span className="text-label text-gray-400">
                      {service.number}
                    </span>

                    <p className="mt-2 text-label text-gray-400">
                      {service.type}
                    </p>

                  </div>


                  {/* Icon */}

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
                      text-gray-600
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:border-gray-950
                      group-hover:bg-gray-950
                      group-hover:text-white
                      group-hover:shadow-lg
                    "
                  >
                    <ServiceIcon number={service.number} />
                  </div>

                </div>


                {/* Architectural visual */}

                <div
                  className="
                    relative
                    z-10
                    mt-12
                    flex
                    h-28
                    items-center
                    justify-center
                    overflow-hidden
                    border-y
                    border-gray-200
                    bg-white
                  "
                >

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

                  <div
                    className="
                      group/icon
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-300
                      bg-white
                      text-gray-700
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-gray-950
                    "
                  >
                    <ServiceIcon number={service.number} />
                  </div>

                </div>


                {/* Main content */}

                <div className="relative z-10 mt-8 flex flex-1 flex-col">

                  <span
                    className="
                      mb-3
                      h-px
                      w-8
                      bg-gray-950
                      transition-all
                      duration-500
                      group-hover:w-14
                    "
                  />

                  <h2
                    className="
                      font-[var(--font-primary)]
                      text-h3
                      font-semibold
                      tracking-[-0.035em]
                      text-gray-950
                    "
                  >
                    {service.title}
                  </h2>

                  <p className="text-body-sm mt-4 text-gray-500">
                    {service.description}
                  </p>

                </div>


                {/* Bottom */}

                <div
                  className="
                    relative
                    z-10
                    mt-8
                    flex
                    items-center
                    justify-between
                    border-t
                    border-gray-200
                    pt-5
                  "
                >

                  <span
                    className="
                      text-label
                      text-gray-400
                      transition-colors
                      duration-300
                      group-hover:text-gray-950
                    "
                  >
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
                      group-hover:translate-x-1
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


          {/* Slider indicators */}

          <div className="mt-3 flex items-center justify-center gap-2">

            {services.map((service, index) => (

              <button
                key={service.number}
                type="button"
                aria-label={`Go to ${service.title}`}
                onClick={() => goToService(index)}
                className="group flex h-5 items-center"
              >

                <span
                  className={`
                    h-px
                    transition-all
                    duration-500
                    ${
                      index === activeService
                        ? "w-10 bg-gray-950"
                        : "w-5 bg-gray-300 group-hover:bg-gray-600"
                    }
                  `}
                />

              </button>

            ))}

          </div>


          {/* View all services */}

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
              <span>
                View All Services
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>

            </Link>

          </div>

        </Container>
      </section>


      {/* =====================================================
          ENGINEERING APPROACH
      ====================================================== */}

      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

            <div className="lg:col-span-5">

              <div className="relative">

                <ImagePlaceholder
                  label="Engineering Approach"
                  title="Precision"
                  aspectRatio="aspect-[4/5]"
                />

                <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border border-gray-300 bg-white lg:block">

                  <div className="flex h-full items-center justify-center">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      className="h-7 w-7 text-gray-700"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19h16M6 19V8l6-4 6 4v11M9 19v-5h6v5"
                      />
                    </svg>

                  </div>

                </div>

              </div>

            </div>


            <div className="lg:col-span-6 lg:col-start-7">

              <SectionHeading
                eyebrow="Engineering Approach"
                title="Good construction starts with good decisions."
                description="Our work connects engineering knowledge with practical construction understanding."
              />

              <div className="mt-10 space-y-0 border-t border-gray-300">

                <div className="group flex gap-5 border-b border-gray-300 py-6">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        d="M12 3v18M3 12h18"
                      />
                    </svg>

                  </span>

                  <div>

                    <h3 className="font-[var(--font-primary)] text-h4 text-gray-950">
                      Technical Precision
                    </h3>

                    <p className="text-body-sm mt-2 text-gray-500">
                      Engineering decisions are considered with structural
                      performance, safety and durability in mind.
                    </p>

                  </div>

                </div>


                <div className="group flex gap-5 border-b border-gray-300 py-6">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="8" />

                      <path
                        strokeLinecap="round"
                        d="M8 12h8"
                      />
                    </svg>

                  </span>

                  <div>

                    <h3 className="font-[var(--font-primary)] text-h4 text-gray-950">
                      Practical Thinking
                    </h3>

                    <p className="text-body-sm mt-2 text-gray-500">
                      Solutions are developed around real site conditions,
                      project requirements and execution realities.
                    </p>

                  </div>

                </div>


                <div className="group flex gap-5 py-6">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12l4 4L19 6"
                      />
                    </svg>

                  </span>

                  <div>

                    <h3 className="font-[var(--font-primary)] text-h4 text-gray-950">
                      Responsible Execution
                    </h3>

                    <p className="text-body-sm mt-2 text-gray-500">
                      Clear coordination and attention to quality help move
                      projects from plans toward completed spaces.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="flex flex-col gap-12">

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

              <div className="lg:col-span-7">

                <SectionHeading
                  eyebrow="Our Process"
                  title="A clear path from idea to execution."
                  description="Every project is different. Our process gives each one a consistent foundation for making decisions and moving forward."
                />

              </div>

              <div className="lg:col-span-4 lg:col-start-9">

                <p className="text-body-sm text-gray-500">
                  Understand the requirement. Develop the right approach.
                  Execute with attention to detail.
                </p>

              </div>

            </div>


            <div className="grid border-t border-gray-200 md:grid-cols-3">

              {process.map((item) => (

                <article
                  key={item.number}
                  className="
                    group
                    relative
                    min-h-[300px]
                    border-b
                    border-gray-200
                    p-7
                    md:border-b-0
                    md:border-r
                    md:p-9
                    lg:p-10
                  "
                >

                  <div className="flex items-center justify-between">

                    <span className="text-label text-gray-400">
                      {item.number}
                    </span>

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-200
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


                  <div className="mt-20">

                    <h2 className="font-[var(--font-primary)] text-h3 font-semibold tracking-[-0.03em] text-gray-950">
                      {item.title}
                    </h2>

                    <p className="text-body-sm mt-4 max-w-sm text-gray-500">
                      {item.description}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <section className="bg-gray-950 py-20 text-white sm:py-24 lg:py-28">

        <Container>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">

            <div className="lg:col-span-6">

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-white/40" />

                <span className="text-label text-gray-400">
                  Built Around Expertise
                </span>

              </div>

              <h2 className="font-[var(--font-primary)] text-h2 font-semibold tracking-[-0.04em] text-white">
                One project.
                <br />
                Multiple disciplines.
                <br />
                One coordinated approach.
              </h2>

              <p className="text-body mt-7 max-w-xl text-gray-400">
                Construction projects often require decisions across
                structure, execution, contracts, coordination and long-term
                performance. Our services are designed to connect these
                requirements rather than treat them as isolated tasks.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-white/20
                  px-6
                  py-3
                  text-button
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-gray-950
                "
              >
                <span>
                  Talk to Daya
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>

              </Link>

            </div>


            <div className="lg:col-span-5 lg:col-start-8">

              <div className="grid grid-cols-2 border-l border-t border-white/10">

                {[
                  ["01", "Design", "Structural thinking"],
                  ["02", "Engineer", "Technical decisions"],
                  ["03", "Execute", "Quality construction"],
                  ["04", "Manage", "Project coordination"],
                ].map(([number, title, description]) => (

                  <div
                    key={number}
                    className="min-h-[170px] border-b border-r border-white/10 p-6"
                  >

                    <span className="text-label text-gray-500">
                      {number}
                    </span>

                    <div className="mt-8">

                      <p className="font-[var(--font-primary)] text-h4 text-white">
                        {title}
                      </p>

                      <p className="text-body-sm mt-2 text-gray-500">
                        {description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}

      <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-label text-gray-400">
              Your Project
            </p>

            <h2 className="mt-5 font-[var(--font-primary)] text-h2 font-semibold tracking-[-0.04em] text-gray-950">
              Let&apos;s build the right foundation for your project.
            </h2>

            <p className="text-body mt-6 text-gray-500">
              Whether you need structural design, consultancy, construction,
              restoration or project management, we can discuss your
              requirements and identify the right approach.
            </p>

            <div className="mt-8 flex justify-center">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-gray-950
                  px-6
                  py-3
                  text-button
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-gray-800
                  hover:shadow-xl
                "
              >

                <span>
                  Start a Conversation
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>

              </Link>

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          COMMON CTA
      ====================================================== */}

      <CTAPreview />

    </main>
  );
}