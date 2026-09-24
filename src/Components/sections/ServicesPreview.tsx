"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Structural Design",
    type: "Design",
    description:
      "Engineering-focused structural design solutions developed with safety, precision, functionality and long-term performance in mind.",
    image: "/images/13.jpg",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    type: "Consultancy",
    description:
      "Professional technical guidance to support structural decisions, project planning and practical engineering requirements.",
    image: "/images/3.jpg",
  },
  {
    number: "03",
    title: "Construction",
    type: "Execution",
    description:
      "Reliable construction execution with attention to quality, coordination, workmanship, durability and project requirements.",
    image: "/images/10.jpg",
  },
  {
    number: "04",
    title: "Restoration",
    type: "Restoration",
    description:
      "Careful restoration solutions for existing structures while improving usability, condition and performance.",
    image: "/images/4.jpg",
  },
  {
    number: "05",
    title: "Rehabilitation",
    type: "Engineering",
    description:
      "Structural rehabilitation solutions focused on improving the condition, strength, functionality and long-term performance of existing buildings.",
    image: "/images/5.jpg",
  },
  {
    number: "06",
    title: "Project Management",
    type: "Management",
    description:
      "Project management support covering planning, coordination, execution and communication to help maintain quality and project progress.",
    image: "/images/6.jpg",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    type: "Contracts",
    description:
      "Lump sum contract solutions for clearly defined project requirements, scope, execution and delivery expectations.",
    image: "/images/7.jpg",
  },
  {
    number: "08",
    title: "Labour Contracts",
    type: "Workforce",
    description:
      "Labour contract support focused on organised workforce coordination, workmanship, site requirements and efficient project execution.",
    image: "/images/8.jpg",
  },
];

function ServiceIcon({ number }: { number: string }) {
  const icons: Record<string, React.ReactNode> = {
    "01": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 20h16" />
        <path d="M6 20V8l6-4 6 4v12" />
        <path d="M9 20v-5h6v5" />
        <path d="M9 9h.01M12 9h.01M15 9h.01" />
      </svg>
    ),
    "02": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    "03": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M8 20v-5h8v5" />
        <path d="M8 9h.01M12 9h.01M16 9h.01" />
      </svg>
    ),
    "04": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 20h16" />
        <path d="M6 20V7h12v13" />
        <path d="M9 7V4h6v3" />
        <path d="M9 11h6M9 15h6" />
      </svg>
    ),
    "05": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 18h16" />
        <path d="M6 18V8l6-4 6 4v10" />
        <path d="M9 18v-4h6v4" />
        <path d="M9 9h6" />
      </svg>
    ),
    "06": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
    "07": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="4" y="5" width="16" height="14" rx="1" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
    "08": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M5 20V9l7-5 7 5v11" />
        <path d="M8 20v-6h8v6" />
        <path d="M9 9h6" />
      </svg>
    ),
  };

  return icons[number] ?? icons["01"];
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
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "right" ? (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      ) : (
        <>
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </>
      )}
    </svg>
  );
}

export default function ServicesPreview() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = services.length;
  const service = services[current];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const previousSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(nextSlide, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pt-5">
            <SectionHeading
              eyebrow="Our Services"
              title="Engineering knowledge. Practical execution."
              description="From structural design and consultancy to construction, restoration and project management, we provide solutions shaped around the requirements of each project."
            />

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 border-b border-brand-primary pb-3 text-sm font-semibold text-brand-secondary transition-colors duration-300 hover:border-brand-secondary hover:text-brand-primary sm:mt-10"
            >
              <span>Explore All Services</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>

            {/* Small brand detail */}
            <div className="mt-12 hidden items-center gap-4 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Design · Engineering · Execution
              </span>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div
            className="min-w-0 lg:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            {/* MAIN CARD */}
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_12px_50px_rgba(0,0,0,0.045)] transition-shadow duration-500 hover:shadow-[0_18px_60px_rgba(0,0,0,0.075)]">
              <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                {/* IMAGE */}
                <div className="relative min-h-[300px] overflow-hidden bg-gray-100 md:min-h-[500px]">
                  <Image
                    key={service.image}
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out"
                    priority={current === 0}
                  />

                  {/* Subtle image gradient */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
                  />

                  {/* Image number */}
                  <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                    <span className="h-px w-8 bg-brand-primary" />
                    <span className="text-xs font-semibold tracking-[0.2em] text-white">
                      {service.number}
                    </span>
                  </div>

                  {/* Image caption */}
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                      Daya Constructions
                    </p>
                    <p className="mt-2 max-w-xs font-[var(--font-primary)] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {service.title}
                    </p>
                  </div>

                  {/* Gold accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-24 bg-brand-primary" />
                </div>

                {/* CONTENT */}
                <div className="flex min-h-[420px] flex-col p-6 sm:p-9 lg:min-h-[500px] lg:p-10 xl:p-12">
                  {/* Top row */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center rounded-full bg-brand-secondary-light px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-secondary">
                      {service.type}
                    </span>

                    <span className="font-[var(--font-primary)] text-sm font-semibold tracking-[0.12em] text-gray-400">
                      {service.number}
                      <span className="mx-2 text-brand-primary">/</span>
                      {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-9 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary-light text-brand-primary sm:mt-12">
                    <ServiceIcon number={service.number} />
                  </div>

                  {/* Text */}
                  <div className="mt-7">
                    <h3 className="font-[var(--font-primary)] text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-gray-950 sm:text-4xl">
                      {service.title}
                    </h3>

                    <div className="mt-6 h-1 w-12 rounded-full bg-brand-primary" />

                    <p className="mt-6 max-w-lg text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom action */}
                  <div className="mt-auto pt-9">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href="/services"
                        className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-secondary transition-colors duration-300 hover:text-brand-primary"
                      >
                        Explore Service
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowIcon />
                        </span>
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={previousSlide}
                          aria-label="Previous service"
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                        >
                          <ArrowIcon direction="left" />
                        </button>

                        <button
                          type="button"
                          onClick={nextSlide}
                          aria-label="Next service"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-secondary text-white transition-all duration-300 hover:bg-brand-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDER FOOTER */}
            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              {/* DOTS */}
              <div className="flex items-center gap-2">
                {services.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Show ${item.title}`}
                    aria-current={current === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-9 bg-brand-primary"
                        : "w-3 bg-gray-300 hover:bg-brand-secondary"
                    }`}
                  />
                ))}
              </div>

              {/* PROGRESS */}
              <div className="flex min-w-0 items-center gap-4 sm:w-1/2 sm:max-w-xs">
                <span className="font-[var(--font-primary)] text-xs font-semibold tracking-[0.16em] text-brand-primary">
                  {String(current + 1).padStart(2, "0")}
                </span>

                <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-brand-primary transition-all duration-500"
                    style={{
                      width: `${((current + 1) / total) * 100}%`,
                    }}
                  />
                </div>

                <span className="font-[var(--font-primary)] text-xs font-semibold tracking-[0.16em] text-gray-400">
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}