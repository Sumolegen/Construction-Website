import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  number: string;
  title: string;
  type: string;
  description: string;
  image: string;
};

function ServiceIcon({ number }: { number: string }) {
  const icons: Record<string, React.ReactNode> = {
    "01": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 20h16" />
        <path d="M6 20V8l6-4 6 4v12" />
        <path d="M9 20v-5h6v5" />
        <path d="M9 9h.01M12 9h.01M15 9h.01" />
      </svg>
    ),

    "02": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),

    "03": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M8 20v-5h8v5" />
        <path d="M8 9h.01M12 9h.01M16 9h.01" />
      </svg>
    ),

    "04": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 20h16" />
        <path d="M6 20V7h12v13" />
        <path d="M9 7V4h6v3" />
        <path d="M9 11h6M9 15h6" />
      </svg>
    ),

    "05": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 18h16" />
        <path d="M6 18V8l6-4 6 4v10" />
        <path d="M9 18v-4h6v4" />
        <path d="M9 9h6" />
      </svg>
    ),

    "06": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),

    "07": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="4" y="5" width="16" height="14" rx="1" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),

    "08": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M5 20V9l7-5 7 5v11" />
        <path d="M8 20v-6h8v6" />
        <path d="M9 9h6" />
      </svg>
    ),
  };

  return icons[number] ?? icons["01"];
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ServiceCard({
  number,
  title,
  type,
  description,
  image,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full min-h-[620px] flex-col overflow-hidden border border-gray-200 bg-white transition-all duration-500 hover:border-gray-400">
      {/* TOP INFORMATION */}
      <div className="flex items-start justify-between px-7 pt-7 sm:px-8 sm:pt-8">
        <div>
          <p className="text-label text-gray-400">{number}</p>

          <p className="mt-2 text-label text-gray-400">{type}</p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all duration-500 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
          <ServiceIcon number={number} />
        </div>
      </div>

      {/* IMAGE */}
      <div className="mt-8 px-7 sm:px-8">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:bg-black/0"
          />

          <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
            <ServiceIcon number={number} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-7 pb-7 pt-8 sm:px-8 sm:pb-8">
        <h3 className="font-[var(--font-primary)] text-[2rem] font-semibold leading-[1.05] tracking-[-0.025em] text-gray-950">
          {title}
        </h3>

        <p className="mt-4 max-w-xl text-body-sm text-gray-600">
          {description}
        </p>

        {/* BOTTOM LINK */}
        <div className="mt-auto border-t border-gray-200 pt-6">
          <Link
            href="/contact"
            className="group/link flex items-center justify-between"
          >
            <span className="text-label text-gray-400 transition-colors duration-300 group-hover/link:text-gray-950">
              Explore Service
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 group-hover/link:border-gray-950 group-hover/link:bg-gray-950 group-hover/link:text-white">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}