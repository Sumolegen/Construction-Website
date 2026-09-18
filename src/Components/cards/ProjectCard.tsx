import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

interface ProjectCardProps {
  number: string;
  title: string;
  category: string;
  location: string;
  href?: string;
  featured?: boolean;
}

export default function ProjectCard({
  number,
  title,
  category,
  location,
  href = "/projects",
  featured = false,
}: ProjectCardProps) {
  return (
    <article className={`group ${featured ? "lg:col-span-2" : ""}`}>
      <Link href={href} className="block">
        {/* Image */}
        <div
          className={`relative overflow-hidden border border-gray-200 bg-gray-100 ${
            featured ? "aspect-[16/8]" : "aspect-[4/3]"
          }`}
        >
          <ImagePlaceholder
            label={`Project ${number}`}
            title="Daya"
            aspectRatio="h-full w-full"
          />

          {/* Project Number */}
          <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
            <span className="flex h-9 min-w-9 items-center justify-center border border-white/20 bg-black/20 px-2 font-[var(--font-josefin-sans)] text-xs font-semibold text-white backdrop-blur-sm">
              {number}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 z-10 sm:bottom-6 sm:right-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-gray-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17 17 7M7 7h10v10"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-[var(--font-inter)] text-xs text-gray-500 sm:text-sm">
            <span>{category}</span>

            <span aria-hidden="true" className="text-gray-300">
              •
            </span>

            <span>{location}</span>
          </div>

          <div className="mt-2 flex items-start justify-between gap-5">
            <h3 className="max-w-2xl font-[var(--font-josefin-sans)] text-2xl font-semibold tracking-tight text-gray-950 transition-colors duration-300 group-hover:text-gray-600 sm:text-3xl">
              {title}
            </h3>

            <span className="hidden shrink-0 pt-1 font-[var(--font-josefin-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-gray-950 sm:block">
              View Project
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}