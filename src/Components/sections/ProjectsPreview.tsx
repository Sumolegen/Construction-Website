import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

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

export default function ProjectsPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected Projects"
              title="Built environments shaped with purpose."
              description="Explore selected projects that reflect our approach to construction, structural thinking and execution."
            />

            <Link
              href="/projects"
              className="w-fit shrink-0 border-b border-gray-900 pb-1 text-sm font-medium text-gray-900 transition-colors duration-200 hover:border-gray-500 hover:text-gray-600"
            >
              View All Projects
            </Link>
          </div>

          {/* Projects */}
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`group ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Image Placeholder */}
                <div
                  className={`relative overflow-hidden bg-gray-200 ${
                    index === 0
                      ? "aspect-16/8"
                      : "aspect-4/3"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                      Project Image
                    </span>
                  </div>

                  <div className="absolute left-6 top-6">
                    <span className="text-sm font-medium text-gray-500">
                      {project.number}
                    </span>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-5 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                    <span>{project.category}</span>
                    <span className="text-gray-300">•</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}