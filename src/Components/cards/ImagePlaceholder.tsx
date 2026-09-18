type ImagePlaceholderProps = {
  label?: string;
  title?: string;
  aspectRatio?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label = "Project Image",
  title = "Daya",
  aspectRatio = "aspect-[4/3]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-gray-900 ${aspectRatio} ${className}`}
    >
      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Building geometry */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[12%] h-[72%] w-[42%] border border-white/10 bg-gray-800 transition-transform duration-700 group-hover:scale-[1.03]"
      >
        <div className="grid h-full grid-cols-4 gap-3 p-4 opacity-50">
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="border border-white/10 bg-gray-950/40"
            />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[8%] h-[52%] w-[28%] border border-white/10 bg-gray-800"
      />

      {/* Top label */}
      <div className="absolute left-5 top-5">
        <span className="text-label text-gray-400">
          {label}
        </span>
      </div>

      {/* Center title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-[var(--font-primary)] text-4xl font-semibold tracking-[-0.04em] text-white/90 sm:text-5xl">
          {title}
        </span>
      </div>

      {/* Corner marks */}
      <span
        aria-hidden="true"
        className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-white/20"
      />

      <span
        aria-hidden="true"
        className="absolute right-5 top-5 h-8 w-8 border-r border-t border-white/20"
      />

      {/* Bottom label */}
      <div className="absolute bottom-5 right-5">
        <span className="text-label text-gray-500">
          Daya / 001
        </span>
      </div>
    </div>
  );
}