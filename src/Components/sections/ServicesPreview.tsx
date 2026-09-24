"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Structural Design",
    category: "Design",
    image: "/images/13.jpg",
    description:
      "Thoughtful structural design solutions focused on safety, stability, efficiency, and long-term performance.",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    category: "Consultancy",
    image: "/images/3.jpg",
    description:
      "Technical guidance and engineering expertise to support informed decisions throughout your project.",
  },
  {
    number: "03",
    title: "Construction",
    category: "Execution",
    image: "/images/10.jpg",
    description:
      "Reliable construction solutions with a focus on quality, coordination, and practical execution.",
  },
  {
    number: "04",
    title: "Restoration",
    category: "Restoration",
    image: "/images/4.jpg",
    description:
      "Restoration solutions that help preserve existing structures and improve their long-term usability.",
  },
  {
    number: "05",
    title: "Rehabilitation",
    category: "Engineering",
    image: "/images/5.jpg",
    description:
      "Structural rehabilitation and strengthening solutions designed to improve building performance.",
  },
  {
    number: "06",
    title: "Project Management",
    category: "Management",
    image: "/images/6.jpg",
    description:
      "Coordinated project planning and management to support efficient and organized execution.",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    category: "Contracts",
    image: "/images/7.jpg",
    description:
      "Contract-based construction services with a clear project scope and coordinated delivery.",
  },
  {
    number: "08",
    title: "Labour Contracts",
    category: "Workforce",
    image: "/images/8.jpg",
    description:
      "Skilled workforce support for construction activities, with attention to workmanship and execution.",
  },
];

export default function ServicesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeService = services[activeIndex];

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % services.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + services.length) % services.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(goToNext, 5000);

    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  return (
    <section
      className="bg-[#fafaf8] py-20 sm:py-24 lg:py-28"
      aria-label="Our services"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our Services"
              title="Engineering solutions built around your project."
              description="From structural design and consultancy to construction and rehabilitation, we provide practical solutions tailored to your project."
              align="left"
            />
          </div>

          <div className="flex lg:col-span-5 lg:justify-end">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 border-b border-brand-primary pb-2 text-sm font-semibold text-gray-950 transition-colors hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
            >
              Explore All Services
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm sm:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gray-100 sm:min-h-[380px] lg:min-h-[480px]">
              <img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white sm:bottom-8 sm:left-8">
                <span className="text-sm font-medium tracking-[0.2em]">
                  {activeService.number}
                </span>
                <span className="h-px w-10 bg-brand-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.18em]">
                  {activeService.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                    What We Do
                  </span>

                  <span className="text-sm tabular-nums text-gray-400">
                    {activeService.number}{" "}
                    <span className="mx-1">/</span>{" "}
                    {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mb-4 text-sm font-medium text-brand-secondary">
                  {activeService.category}
                </p>

                <h3
                  key={activeService.title}
                  className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl"
                >
                  {activeService.title}
                </h3>

                <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                  {activeService.description}
                </p>

                <Link
                  href="/services"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-gray-950 transition-colors hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
                >
                  Discover Service
                  <span
                    aria-hidden="true"
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              <div className="mt-12 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {services.map((service, index) => (
                      <button
                        key={service.number}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show ${service.title}`}
                        aria-pressed={activeIndex === index}
                        className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 ${
                          activeIndex === index
                            ? "w-8 bg-brand-primary"
                            : "w-2 bg-gray-300 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={goToPrevious}
                      aria-label="Previous service"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                    >
                      <span aria-hidden="true" className="text-xl">
                        ←
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={goToNext}
                      aria-label="Next service"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                    >
                      <span aria-hidden="true" className="text-xl">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}