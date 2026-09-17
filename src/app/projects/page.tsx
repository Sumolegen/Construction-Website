import Link from "next/link";
import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

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
  {
    number: "04",
    title: "Structural Consultancy",
    category: "Consultancy",
    location: "Tamil Nadu",
  },
];

const categories = [
  "All Projects",
  "Construction",
  "Structural Design",
  "Consultancy",
  "Restoration",
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100">
        <Container>
          <div className="flex min-h-[70vh] items-center py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Selected Projects
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
                Built with purpose.
                <br />
                Designed to last.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                A selection of construction, structural and restoration work
                representing our approach to the built environment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Our Work"
                title="Selected projects."
                description="Explore a selection of projects and areas of work."
              />

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-600"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <article className="group">
              <div className="relative aspect-16/8 overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                    Featured Project Image
                  </span>
                </div>

                <span className="absolute left-6 top-6 text-sm font-medium text-gray-500">
                  {projects[0].number}
                </span>

                <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {projects[0].category} · {projects[0].location}
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    {projects[0].title}
                  </h2>
                </div>
              </div>
            </article>

            {/* Project Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {projects.slice(1).map((project) => (
                <article key={project.number} className="group">
                  <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                        Project Image
                      </span>
                    </div>

                    <span className="absolute left-6 top-6 text-sm font-medium text-gray-500">
                      {project.number}
                    </span>

                    <span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm text-gray-500">
                      {project.category} · {project.location}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                      {project.title}
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
              Start a Project
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Let&apos;s discuss your construction or structural requirements.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-950 transition-colors duration-200 hover:bg-gray-200"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}