import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";

const projects = [
  {
    number: "01",
    title: "Residential Construction",
    category: "Construction",
    location: "Tamil Nadu",
  },
  {
    number: "02",
    title: "Structural Design Project",
    category: "Structural Design",
    location: "Tamil Nadu",
  },
  {
    number: "03",
    title: "Building Restoration",
    category: "Restoration",
    location: "Tamil Nadu",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

export default function ProjectsPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="relative flex flex-col gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Selected Projects"
                title="Built environments shaped with purpose."
                description="Explore selected projects that reflect our approach to construction, structural thinking and execution."
              />
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <Link
                href="/projects"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 font-[var(--font-primary)] text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-950 hover:text-white hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
              >
                <span>View All Projects</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                number={project.number}
                title={project.title}
                category={project.category}
                location={project.location}
                featured={index === 0}
              />
            ))}
          </div>

          {/* Bottom Meta */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gray-950" />

              <span className="font-[var(--font-primary)] text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                Selected Work
              </span>
            </div>

            <span className="font-[var(--font-primary)] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              01 — 03
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}