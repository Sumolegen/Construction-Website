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
    image: "/images/1.jpg",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    type: "Consultancy",
    description:
      "Professional technical guidance to support structural decisions, project planning and practical engineering requirements.",
    image: "/images/2.jpg",
  },
  {
    number: "03",
    title: "Construction",
    type: "Execution",
    description:
      "Reliable construction execution with attention to quality, coordination, workmanship, durability and project requirements.",
    image: "/images/3.jpg",
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
        <path d="M12 8v8" />
        <path d="M8 12h8" />
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

    const timer = window.setInterval(() => {
      nextSlide();
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Services"
              title="Engineering knowledge. Practical execution."
              description="From structural design and consultancy to construction, restoration and project management, we provide solutions shaped around the requirements of each project."
            />

            <Link
              href="/services"
              className="group mt-10 inline-flex items-center gap-3 border-b border-gray-950 pb-2 text-button text-gray-950"
            >
              <span>Explore All Services</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          {/* RIGHT SLIDER */}
          <div
            className="lg:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden border border-gray-200 bg-white">
              <div className="grid min-h-[590px] md:grid-cols-[1fr_1.35fr]">
                {/* IMAGE */}
                <div className="relative min-h-[300px] overflow-hidden bg-gray-100 md:min-h-full">
                  <Image
                    key={service.image}
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700"
                    priority={current === 0}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/5"
                  />

                  <div className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm">
                    <ServiceIcon number={service.number} />
                  </div>

                  <div className="absolute left-6 top-6">
                    <p className="text-label text-white drop-shadow-md">
                      {service.number}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-label text-gray-400">
                        {service.type}
                      </p>

                      <p className="mt-3 font-[var(--font-primary)] text-sm font-semibold tracking-[0.12em] text-gray-400">
                        {service.number} /{" "}
                        {String(total).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700">
                      <ServiceIcon number={service.number} />
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-h3 text-gray-950">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-body text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-gray-200 pt-7">
                    <div className="flex items-center justify-between gap-6">
                      <Link
                        href="/services"
                        className="text-label text-gray-400 transition-colors hover:text-gray-950"
                      >
                        Explore Service
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={previousSlide}
                          aria-label="Previous service"
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                        >
                          <ArrowIcon direction="left" />
                        </button>

                        <button
                          type="button"
                          onClick={nextSlide}
                          aria-label="Next service"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white transition-all duration-300 hover:bg-gray-700"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DOTS */}
            <div className="mt-6 flex items-center gap-2">
              {services.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show ${item.title}`}
                  aria-current={current === index ? "true" : undefined}
                  className={`h-1.5 transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-gray-950"
                      : "w-3 bg-gray-300 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* PROGRESS */}
            <div className="mt-5 flex items-center gap-4">
              <span className="font-[var(--font-primary)] text-xs font-semibold tracking-[0.18em] text-gray-400">
                {String(current + 1).padStart(2, "0")}
              </span>

              <div className="h-px flex-1 bg-gray-200">
                <div
                  className="h-px bg-gray-950 transition-all duration-500"
                  style={{
                    width: `${((current + 1) / total) * 100}%`,
                  }}
                />
              </div>

              <span className="font-[var(--font-primary)] text-xs font-semibold tracking-[0.18em] text-gray-400">
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}