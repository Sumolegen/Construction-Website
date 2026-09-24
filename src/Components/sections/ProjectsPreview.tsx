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
  const project = projectCategories[activeProject];

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

          {/* Right: Dynamic Featured Image */}
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:ml-auto">
            {/* Organic Brand Shape */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 h-[85%] -translate-y-1/2 rounded-[42%_58%_52%_48%/35%_35%_65%_65%] bg-brand-secondary"
            />

            <div
              aria-hidden="true"
              className="absolute -right-3 top-8 h-24 w-24 rounded-full bg-brand-primary/20 blur-2xl sm:-right-6"
            />

            {/* Image Frame */}
            <div className="relative z-10 h-[340px] w-[78%] overflow-hidden rounded-2xl border border-white/60 bg-gray-200 shadow-xl sm:h-[420px]">
              <img
                key={project.image}
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative Brand Accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 right-8 z-0 h-20 w-20 rounded-full border-[10px] border-brand-primary/25"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}