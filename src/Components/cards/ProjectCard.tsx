import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  location: string;
  label?: string;
  image?: string;
  href?: string;
  featured?: boolean;
};

export default function ProjectCard({
  number,
  title,
  category,
  location,
  label = "Project",
  image,
  href = "/projects",
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`group block ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <article>
        <div className="relative overflow-hidden border border-gray-200 bg-gray-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand-primary/50 group-hover:shadow-xl">
          <ImagePlaceholder
            src={image}
            alt={title}
            label={label}
            title={title}
            aspectRatio={featured ? "aspect-[16/9]" : "aspect-[4/3]"}
          />

          <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-label text-brand-primary shadow-lg backdrop-blur-sm">
            {number}
          </div>

          <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/90 text-gray-900 shadow-lg transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 12L12 3M5 3H12V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-5">
          <div>
            <p className="text-label text-brand-secondary">
              {category}
            </p>

            <h3 className="mt-2 font-[var(--font-primary)] text-h4 text-gray-950 transition-colors duration-300 group-hover:text-brand-primary">
              {title}
            </h3>

            <p className="text-body-sm mt-2 text-gray-500">
              {location}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="mt-1 h-px w-10 shrink-0 bg-brand-primary transition-all duration-300 group-hover:w-16"
          />
        </div>
      </article>
    </Link>
  );
}