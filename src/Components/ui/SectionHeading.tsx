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
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-9 bg-brand-primary" />

          <p className="text-label text-brand-secondary">{eyebrow}</p>

          {centered && (
            <span className="h-px w-9 bg-brand-secondary" />
          )}
        </div>
      )}

      <h2 className="text-h2 text-gray-950">
        {title}
      </h2>

      {description && (
        <p className="text-body-lg mt-6 max-w-2xl text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}