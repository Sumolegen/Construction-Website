import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

interface ProjectCardProps {
  number: string;
  title: string;
  category: string;
  location: string;
  featured?: boolean;
}

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

export default function ProjectCard({
  number,
  title,
  category,
  location,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link
        href="/contact"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-4"
      >
        <div
          className={`relative overflow-hidden border border-gray-200 bg-gray-50 ${
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <ImagePlaceholder
            label={category}
            title={title}
            aspectRatio="h-full w-full"
          />

          <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-gray-300 bg-white/95 font-[var(--font-primary)] text-[10px] font-semibold text-gray-700 backdrop-blur-sm">
            {number}
          </span>

          <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-gray-950 group-hover:text-white">
            <ArrowIcon />
          </span>
        </div>

        <div className="mt-5">
          <p className="font-[var(--font-primary)] text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
            {category} · {location}
          </p>

          <h3 className="mt-2 font-[var(--font-primary)] text-2xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-3xl">
            {title}
          </h3>
        </div>
      </Link>
    </article>
  );
}