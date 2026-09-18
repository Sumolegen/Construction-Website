import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ImagePlaceholder from "../cards/ImagePlaceholder";

const services = [
  {
    number: "01",
    title: "Structural Design",
    description:
      "Thoughtful structural solutions developed with engineering precision, safety and long-term performance in mind.",
  },
  {
    number: "02",
    title: "Structural Consultancy",
    description:
      "Technical guidance and structural expertise to support informed decisions throughout your project.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Reliable construction execution focused on quality, coordination, durability and attention to detail.",
  },
  {
    number: "04",
    title: "Restoration",
    description:
      "Careful restoration solutions that preserve existing structures while improving their performance and usability.",
  },
  {
    number: "05",
    title: "Rehabilitation",
    description:
      "Engineering-led rehabilitation approaches for improving the condition, strength and serviceability of structures.",
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "Organized project coordination from planning through execution, keeping quality, time and requirements aligned.",
  },
  {
    number: "07",
    title: "Lump Sum Contracts",
    description:
      "Clearly defined construction contracts with an agreed project scope and fixed contract value for better cost planning and control.",
  },
  {
    number: "08",
    title: "Labour Contracts",
    description:
      "Skilled labour and workforce coordination for construction activities, supporting efficient execution and quality workmanship.",
  },
];

function ServiceIcon({ number }: { number: string }) {
  const icons: Record<string, React.ReactNode> = {
    "01": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20h16M6 20V9l6-5 6 5v11M9 20v-6h6v6"
        />
      </svg>
    ),

    "02": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v8M8 12h8"
        />
      </svg>
    ),

    "03": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20h16M5 20V9h14v11M8 9V5h8v4M8 13h2m4 0h2M8 17h2m4 0h2"
        />
      </svg>
    ),

    "04": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19h16M6 19V8l6-4 6 4v11M9 19v-5h6v5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9h.01M12 7h.01M16 9h.01"
        />
      </svg>
    ),

    "05": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 19h14M7 19V7h10v12M9 7V4h6v3M10 11h4M10 15h4"
        />
      </svg>
    ),

    "06": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19h16M6 19V6h12v13M9 9h6M9 13h6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 4h8"
        />
      </svg>
    ),

    "07": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="13"
          rx="1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6V4h6v2M8 12h8M12 9v6"
        />
      </svg>
    ),

    "08": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5"
      >
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 19c.5-3.2 2-5 4.5-5s4 1.8 4.5 5M11.5 19c.5-3.2 2-5 4.5-5s4 1.8 4.5 5"
        />
      </svg>
    ),
  };

  return icons[number];
}

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-14">

          {/* =================================================
              SECTION INTRO
          ================================================== */}

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Services"
                title="Engineering expertise for every stage of a project."
                description="From structural thinking to project execution, we provide integrated solutions for the built environment."
              />
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="flex flex-col items-start">
                <p className="text-body-sm max-w-md text-gray-500">
                  Our services bring engineering, construction and
                  project coordination together through one practical
                  approach.
                </p>

                <Link
                  href="/services"
                  className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    gap-3
                    text-button
                    text-gray-950
                  "
                >
                  <span className="border-b border-gray-950 pb-1">
                    View All Services
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-300
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:border-gray-950
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-6-6 6 6-6 6"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              FEATURED SERVICE VISUAL
          ================================================== */}

          <div className="grid gap-6 lg:grid-cols-12">

            {/* Image */}

            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden border border-gray-200 bg-gray-100">
                <ImagePlaceholder
                  label="Engineering Services"
                  title="Precision"
                  aspectRatio="aspect-[4/3] lg:aspect-[4/5]"
                />

                {/* Overlay information */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    border-t
                    border-white/20
                    bg-gray-950/90
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-label text-gray-400">
                        Daya
                      </p>

                      <p className="mt-2 font-[var(--font-primary)] text-h4 text-white">
                        Built around expertise.
                      </p>
                    </div>

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        text-white
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                SERVICE GRID
            ================================================== */}

            <div className="lg:col-span-7">
              <div className="grid border-l border-t border-gray-200 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.number}
                    href="/services"
                    className="
                      group
                      relative
                      min-h-[250px]
                      border-b
                      border-r
                      border-gray-200
                      p-6
                      transition-all
                      duration-300
                      hover:bg-gray-50
                      sm:p-7
                    "
                  >
                    {/* Top row */}

                    <div className="flex items-start justify-between">
                      <span className="text-label text-gray-400">
                        {service.number}
                      </span>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-gray-200
                          text-gray-400
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:border-gray-950
                          group-hover:bg-gray-950
                          group-hover:text-white
                        "
                      >
                        <ServiceIcon
                          number={service.number}
                        />
                      </span>
                    </div>

                    {/* Content */}

                    <div className="mt-12">
                      <h3 className="font-[var(--font-primary)] text-h4 tracking-[-0.025em] text-gray-950">
                        {service.title}
                      </h3>

                      <p className="text-body-sm mt-3 max-w-md text-gray-500">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom arrow */}

                    <span
                      className="
                        absolute
                        bottom-5
                        left-6
                        flex
                        items-center
                        gap-2
                        text-label
                        text-gray-400
                        transition-all
                        duration-300
                        group-hover:text-gray-950
                        sm:left-7
                      "
                    >
                      Explore
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-body-sm max-w-xl text-gray-500">
                From the first structural decision to the final
                stage of execution, our work is guided by precision,
                practical knowledge and responsibility.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-gray-950
                  px-5
                  py-3
                  text-button
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-gray-800
                  hover:shadow-lg
                "
              >
                <span>Discuss Your Project</span>

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </span>
              </Link>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}