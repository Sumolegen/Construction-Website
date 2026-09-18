export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto text-center" : ""}>
      <div
        className={`mb-5 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gray-900" />

        <span className="text-label text-gray-500">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-h2 max-w-4xl text-gray-950">
        {title}
      </h2>

      {description && (
        <p
          className={`text-body mt-6 max-w-2xl text-gray-600 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}