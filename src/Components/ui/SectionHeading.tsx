type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`w-full max-w-2xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-6 flex items-center gap-3 ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-px w-9 shrink-0 bg-brand-primary" />

          <p className="text-label whitespace-nowrap text-brand-secondary">
            {eyebrow}
          </p>

          {centered && (
            <span className="h-px w-9 shrink-0 bg-brand-secondary" />
          )}
        </div>
      )}

      <h2 className="max-w-2xl text-h2 text-gray-950">{title}</h2>

      {description && (
        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}