"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const projectCategories = [
  {
    name: "Construction",
    image: "/images/15.jpg",
    alt: "Residential construction project",
    number: "01",
    title: "Residential Construction",
    location: "Tamil Nadu",
  },
  {
    name: "Structural Design",
    image: "/images/14.jpg",
    alt: "Structural design project",
    number: "02",
    title: "Structural Design Project",
    location: "Tamil Nadu",
  },
  {
    name: "Restoration",
    image: "/images/16.jpg",
    alt: "Building restoration project",
    number: "03",
    title: "Building Restoration",
    location: "Tamil Nadu",
  },
];

export default function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div className="relative z-10 max-w-xl">
            <SectionHeading
              eyebrow="Selected Projects"
              title="Built environments shaped with purpose."
              description="Explore selected projects that reflect our approach to construction, structural thinking and execution."
              align="left"
              className="max-w-xl"
            />

            <Link
              href="/projects"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-brand-primary/40 bg-white px-6 py-3.5 font-[var(--font-primary)] text-sm font-semibold text-brand-secondary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:bg-brand-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
            >
              <span>View All Projects</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </Link>

            {/* Interactive Project Categories */}
            <div className="mt-10 flex flex-wrap gap-3">
              {projectCategories.map((category, index) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveProject(index)}
                  aria-pressed={activeProject === index}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 ${
                    activeProject === index
                      ? "border-brand-secondary bg-brand-secondary text-white shadow-md"
                      : "border-gray-300 bg-white/80 text-gray-700 hover:border-brand-primary hover:text-brand-secondary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Three Interactive Overlapping Images */}
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:ml-auto">
            <div className="relative h-[400px] w-full sm:h-[500px]">
              {projectCategories.map((category, index) => {
                const position =
                  (index - activeProject + projectCategories.length) %
                  projectCategories.length;

                const isActive = position === 0;

                const positionStyles = [
                  {
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  },
                  {
                    left: "80%",
                    transform: "translate(-50%, -45%) scale(0.78)",
                  },
                  {
                    left: "20%",
                    transform: "translate(-50%, -45%) scale(0.78)",
                  },
                ];

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => setActiveProject(index)}
                    aria-label={`Bring ${category.title} to the center`}
                    aria-pressed={isActive}
                    className={`absolute top-1/2 block aspect-[3/4] w-[58%] max-w-[290px] overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl transition-all duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 sm:rounded-3xl ${
                      isActive
                        ? "cursor-default"
                        : "cursor-pointer hover:brightness-105"
                    }`}
                    style={{
                      ...positionStyles[position],
                      zIndex: isActive ? 30 : position === 1 ? 20 : 10,
                    }}
                  >
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Project Information */}
                    <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-6">
                      <div className="mb-3 flex items-center gap-2 sm:gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-gray-950 sm:h-9 sm:w-9">
                          {category.number}
                        </span>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-xs sm:tracking-[0.16em]">
                          {category.name}
                        </span>
                      </div>

                      <h3 className="font-[var(--font-primary)] text-base font-bold leading-snug text-white sm:text-xl">
                        {category.title}
                      </h3>

                      <p className="mt-2 text-xs text-white/75">
                        {category.location}
                      </p>
                    </div>

                    {/* Active Image Accent */}
                    {isActive && (
                      <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-gray-950 shadow-lg sm:right-5 sm:top-5 sm:h-10 sm:w-10">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 12h14m-6-6 6 6-6 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}