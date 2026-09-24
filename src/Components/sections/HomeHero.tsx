import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-black">
      {/* =========================================================
          FULL-SCREEN LANDING VIDEO
          File:
          public/videos/home-hero.mp4
         ========================================================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-30
          h-full
          w-full
          object-cover
          object-center
        "
      >
        <source
          src="/videos/home-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark readability overlay */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-20
          bg-black/50
        "
      />

      {/* Left-side gradient for text */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-black/80
          via-black/45
          to-transparent
        "
      />

      {/* Subtle green atmosphere */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-br
          from-[#407D41]/10
          via-transparent
          to-[#C5A04A]/10
        "
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-48
          bg-gradient-to-t
          from-black/70
          to-transparent
        "
      />

      {/* =========================================================
          LANDING CONTENT
         ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-80px)]
          max-w-7xl
          items-center
          px-5
          py-24
          sm:px-6
          lg:px-8
        "
      >
        <div className="w-full max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4 sm:mb-8">
            <span className="h-px w-12 bg-[#C5A04A]" />

            <p className="text-label text-white">
              Daya Constructions
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-h1 max-w-4xl text-white">
            Build with
            <br />
            <span className="text-[#C5A04A]">
              confidence.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-2xl
              text-body-lg
              text-white/85
              sm:mt-10
            "
          >
            Construction and structural expertise built on
            engineering precision, practical experience and trust.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-3
              sm:mt-12
              sm:flex-row
            "
          >
            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-md
                bg-[#C5A04A]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#a78335]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C5A04A]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
              "
            >
              Explore Projects
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/about"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-md
                border
                border-white/40
                bg-black/20
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#407D41]
                hover:bg-[#407D41]/80
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C5A04A]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
              "
            >
              Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* =====================================================
              STATS
             ===================================================== */}
          <div
            className="
              mt-14
              grid
              max-w-2xl
              grid-cols-1
              divide-y
              divide-white/15
              border-t
              border-white/15
              sm:mt-16
              sm:grid-cols-2
              sm:divide-x
              sm:divide-y-0
              sm:border-b
            "
          >
            <div className="py-5 sm:pr-8">
              <div className="flex items-baseline gap-3">
                <span
                  className="
                    font-[var(--font-primary)]
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#C5A04A]
                  "
                >
                  5+
                </span>

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white/80
                  "
                >
                  Completed Projects
                </span>
              </div>
            </div>

            <div className="py-5 sm:pl-8">
              <div className="flex items-baseline gap-3">
                <span
                  className="
                    font-[var(--font-primary)]
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#407D41]
                  "
                >
                  40+
                </span>

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white/80
                  "
                >
                  Years Family Legacy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          EXISTING 14.PNG WORKER
         ========================================================= */}
      <div
        className="construction-worker-runner"
        aria-hidden="true"
      >
        <div className="construction-worker-bob">
          <img
            src="/images/14.png"
            alt=""
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="
          absolute
          bottom-6
          right-6
          z-20
          hidden
          items-center
          gap-3
          text-white/70
          sm:flex
          lg:right-10
        "
      >
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
          "
        >
          Scroll
        </span>

        <span
          aria-hidden="true"
          className="
            h-10
            w-px
            bg-gradient-to-b
            from-[#C5A04A]
            to-transparent
          "
        />
      </div>
    </section>
  );
}