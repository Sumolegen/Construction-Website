"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Structural Design",
    type: "Design",
    description:
      "Structural design focused on safety, stability, durability and practical construction requirements. We develop structural solutions with careful consideration of loads, materials, site conditions and long-term performance.",
    image: "/images/1.jpg",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    type: "Consultancy",
    description:
      "Engineering guidance for structural requirements, design decisions, assessments and project-specific challenges. Our approach combines technical understanding with practical construction knowledge.",
    image: "/images/2.jpg",
  },
  {
    number: "03",
    title: "Construction",
    type: "Execution",
    description:
      "Construction solutions focused on quality execution, coordination and dependable project delivery. We approach construction with attention to detail, materials, workmanship and the requirements of each project.",
    image: "/images/3.jpg",
  },
  {
    number: "04",
    title: "Restoration",
    type: "Restoration",
    description:
      "Restoration solutions for existing buildings and structures that require repair, improvement or careful intervention. We consider the existing condition while working toward improved performance and service life.",
    image: "/images/4.jpg",
  },
  {
    number: "05",
    title: "Rehabilitation",
    type: "Engineering",
    description:
      "Rehabilitation of existing structures through appropriate engineering assessment, strengthening and repair strategies. The objective is to improve structural performance while responding to the condition of the existing building.",
    image: "/images/5.jpg",
  },
  {
    number: "06",
    title: "Project Management",
    type: "Management",
    description:
      "Project management support focused on planning, coordination, execution and communication. We help bring together technical requirements and practical project needs for smoother delivery.",
    image: "/images/6.jpg",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    type: "Contracts",
    description:
      "Lump sum contract solutions for projects with clearly defined scope, requirements and execution expectations. We focus on coordinated planning, quality and responsible project delivery.",
    image: "/images/7.jpg",
  },
  {
    number: "08",
    title: "Labour Contracts",
    type: "Workforce",
    description:
      "Labour contract support for construction projects requiring organised workforce coordination and execution. Our approach focuses on workmanship, site requirements and efficient project progress.",
    image: "/images/8.jpg",
  },
];

function ServiceIcon({ number }: { number: string }) {
  const icons: Record<string, ReactNode> = {
    "01": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-5 w-5"
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
        aria-hidden="true"
        className="h-5 w-5"
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
        aria-hidden="true"
        className="h-5 w-5"
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
        aria-hidden="true"
        className="h-5 w-5"
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
        aria-hidden="true"
        className="h-5 w-5"
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
        aria-hidden="true"
        className="h-5 w-5"
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
        aria-hidden="true"
        className="h-5 w-5"
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
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M5 20V9l7-5 7 5v11" />
        <path d="M8 20v-6h8v6" />
        <path d="M9 9h6" />
      </svg>
    ),
  };

  return icons[number];
}

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="h-5 w-5"
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

  const sliderRef = useRef<HTMLDivElement>(null);

  const totalServices = services.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalServices);
  }, [totalServices]);

  const previousSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalServices) % totalServices);
  }, [totalServices]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      nextSlide();
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousSlide();
      }
    };

    slider.addEventListener("keydown", handleKeyDown);

    return () => {
      slider.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, previousSlide]);

  const service = services[current];

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Services"
              title="Engineering knowledge. Practical execution."
              description="From structural design and consultancy to construction, restoration and project management, we provide solutions shaped around the requirements of each project."
            />

            <div className="mt-10 flex items-center gap-3">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border-b border-gray-950 pb-2 text-button text-gray-950"
              >
                <span>Explore All Services</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <div className="mt-12 hidden lg:block">
              <div className="flex items-center gap-4">
                <span className="font-[var(--font-primary)] text-sm font-semibold tracking-[0.18em] text-gray-400">
                  {String(current + 1).padStart(2, "0")}
                </span>

                <div className="h-px flex-1 bg-gray-200">
                  <div
                    className="h-px bg-gray-950 transition-all duration-500"
                    style={{
                      width: `${((current + 1) / totalServices) * 100}%`,
                    }}
                  />
                </div>

                <span className="font-[var(--font-primary)] text-sm font-semibold tracking-[0.18em] text-gray-400">
                  {String(totalServices).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          <div
            ref={sliderRef}
            tabIndex={0}
            role="region"
            aria-label="Our services"
            className="relative lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden border border-gray-200 bg-gray-50">
              <div className="relative min-h-[540px] sm:min-h-[560px]">
                <div
                  key={service.number}
                  className="group absolute inset-0 flex flex-col bg-white p-7 sm:p-9 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-label text-gray-400">
                        {service.type}
                      </p>

                      <p className="mt-3 font-[var(--font-primary)] text-sm font-semibold tracking-[0.12em] text-gray-400">
                        {service.number}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center border border-gray-200 text-gray-700 transition-all duration-500 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                      <ServiceIcon number={service.number} />
                    </div>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-h3 text-gray-950">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-body text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  {/* SERVICE IMAGE */}
                  <div className="relative z-10 mt-10 overflow-hidden border-y border-gray-200 bg-gray-100">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 600px"
                        className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={current === 0}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:bg-black/0"
                      />

                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center border border-white/60 bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gray-950 group-hover:text-white">
                        <ServiceIcon number={service.number} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-6 pt-8">
                    <div>
                      <p className="text-label text-gray-400">
                        Daya Constructions
                      </p>

                      <p className="mt-2 text-body-sm text-gray-500">
                        Construction & Structural Consultants
                      </p>
                    </div>

                    <Link
                      href="/services"
                      aria-label={`Learn more about ${service.title}`}
                      className="group/link flex h-11 w-11 shrink-0 items-center justify-center border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                    >
                      <ArrowIcon />

                      <span className="sr-only">
                        Learn more about {service.title}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* PREVIOUS / NEXT CONTROLS */}
              <div className="absolute bottom-7 right-7 z-20 flex items-center gap-2 sm:bottom-9 sm:right-9">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous service"
                  className="flex h-11 w-11 items-center justify-center border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                >
                  <ArrowIcon direction="left" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next service"
                  className="flex h-11 w-11 items-center justify-center border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>

            {/* MOBILE PROGRESS */}
            <div className="mt-7 lg:hidden">
              <div className="flex items-center gap-4">
                <span className="font-[var(--font-primary)] text-sm font-semibold tracking-[0.18em] text-gray-400">
                  {String(current + 1).padStart(2, "0")}
                </span>

                <div className="h-px flex-1 bg-gray-200">
                  <div
                    className="h-px bg-gray-950 transition-all duration-500"
                    style={{
                      width: `${((current + 1) / totalServices) * 100}%`,
                    }}
                  />
                </div>

                <span className="font-[var(--font-primary)] text-sm font-semibold tracking-[0.18em] text-gray-400">
                  {String(totalServices).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* SLIDER DOTS */}
            <div className="mt-6 flex items-center gap-2">
              {services.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${item.title}`}
                  aria-current={current === index ? "true" : undefined}
                  className={`h-1.5 transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-gray-950"
                      : "w-3 bg-gray-300 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}