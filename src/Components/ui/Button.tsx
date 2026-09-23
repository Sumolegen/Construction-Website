import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary: `
      bg-brand-primary text-white
      hover:bg-brand-primary-dark
      hover:shadow-xl
    `,
    secondary: `
      border border-brand-secondary/40
      bg-white text-brand-secondary
      hover:border-brand-secondary
      hover:bg-brand-secondary
      hover:text-white
    `,
    dark: `
      bg-gray-950 text-white
      hover:bg-brand-secondary
      hover:shadow-xl
    `,
  };

  const classes = `
    group inline-flex min-h-12 items-center justify-center
    gap-3 rounded-full px-6 py-3
    text-button transition-all duration-300
    hover:-translate-y-1
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-primary
    focus-visible:ring-offset-2
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 7H11M7 3L11 7L7 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      <span>{children}</span>
    </button>
  );
}