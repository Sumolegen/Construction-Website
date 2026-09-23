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
    label: "Residential Project",
  },
  {
    number: "02",
    title: "Structural Design Project",
    category: "Structural Design",
    location: "Tamil Nadu",
    label: "Structural Design",
  },
  {
    number: "03",
    title: "Building Restoration",
    category: "Restoration",
    location: "Tamil Nadu",
    label: "Building Restoration",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 border-l border-b border-brand-primary/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 border-r border-t border-brand-secondary/20"
      />

      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Built environments shaped with purpose."
            description="Explore selected projects that reflect our approach to construction, structural thinking and execution."
          />

          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-brand-primary/30 bg-white px-5 py-3 font-[var(--font-primary)] text-sm font-semibold text-brand-secondary transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:bg-brand-secondary hover:text-white sm:self-end"
          >
            <span>View All Projects</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
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
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ProjectCard
            {...projects[0]}
            featured
          />

          <div className="grid gap-8">
            <ProjectCard {...projects[1]} />

            <ProjectCard {...projects[2]} />
          </div>
        </div>
      </Container>
    </section>
  );
}