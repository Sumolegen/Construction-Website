import Image from "next/image";

type ImagePlaceholderProps = {
  label?: string;
  title?: string;
  aspectRatio?: string;
  src?: string;
  alt?: string;
};

export default function ImagePlaceholder({
  label = "Image",
  title = "Daya",
  aspectRatio = "aspect-[4/3]",
  src,
  alt = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gray-100 ${aspectRatio}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="architectural-grid absolute inset-0 opacity-60"
          />

          <div
            aria-hidden="true"
            className="absolute left-5 top-5 h-12 w-12 border-l border-t border-brand-primary"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-brand-secondary"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-label text-brand-primary">{label}</p>

              <p className="mt-3 font-[var(--font-primary)] text-2xl font-semibold tracking-tight text-gray-600">
                {title}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}