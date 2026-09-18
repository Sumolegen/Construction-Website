import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "Structural Engineering",
    title: "Why Structural Design Matters in Every Construction Project",
    description:
      "A well-planned structural design creates the foundation for a safe, durable, and efficient building. Learn why structural engineering should be considered from the beginning of a project.",
  },
  {
    id: 2,
    category: "Construction",
    title: "Key Considerations Before Starting a Construction Project",
    description:
      "From planning and materials to structural requirements and execution, several important decisions shape the success of a construction project.",
  },
  {
    id: 3,
    category: "Restoration & Rehabilitation",
    title: "Understanding Structural Restoration and Rehabilitation",
    description:
      "Existing buildings may require strengthening, repair, or rehabilitation to improve their structural performance and extend their service life.",
  },
  {
    id: 4,
    category: "Structural Consultancy",
    title: "The Role of a Structural Consultant in Modern Construction",
    description:
      "Structural consultants help transform architectural concepts into safe, practical, and technically sound structures through careful analysis and engineering.",
  },
  {
    id: 5,
    category: "Engineering",
    title: "Common Structural Problems in Existing Buildings",
    description:
      "Cracks, deterioration, water damage, and changes in building usage can affect structural performance. Understanding these issues is the first step toward the right solution.",
  },
  {
    id: 6,
    category: "Construction Insights",
    title: "Building with Strength, Safety and Long-Term Performance",
    description:
      "Good construction is more than completing a project. It is about creating structures that perform reliably and continue to serve their purpose for years.",
  },
];

const categories = [
  "All",
  "Structural Engineering",
  "Construction",
  "Restoration & Rehabilitation",
  "Structural Consultancy",
];

export default function BlogPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Daya Constructions & Structural Consultants
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Insights, Ideas & Engineering Knowledge
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore practical insights on structural engineering,
              construction, restoration, rehabilitation, and building
              with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          FEATURED BLOG
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Featured Article
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Building Knowledge That Creates Stronger Structures
            </h2>
          </div>

          <div className="grid overflow-hidden border border-gray-200 bg-gray-50 lg:grid-cols-2">

            {/* IMAGE PLACEHOLDER */}
            <div className="flex min-h-[320px] items-center justify-center bg-gray-200 lg:min-h-[500px]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-gray-400 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-7h.01M5 20h14a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>

                <p className="text-sm text-gray-500">
                  Featured Image
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                Structural Engineering
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                Designing Structures With Strength, Safety & Confidence
              </h3>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Structural engineering plays an important role in creating
                buildings that are safe, functional, durable, and capable of
                performing throughout their intended service life.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Explore the principles behind thoughtful structural design
                and understand how engineering decisions influence the
                performance of a building.
              </p>

              <div className="mt-8">
                <Link
                  href="/blog/article/1"
                  className="inline-flex items-center gap-2 border border-gray-900 bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
                >
                  Read the article

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Explore Topics
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-950">
                Browse by category
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`border px-4 py-2 text-xs font-medium transition ${
                    index === 0
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-600 hover:border-gray-900 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          BLOG GRID
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              From Our Blog
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Construction & Engineering Insights
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Practical knowledge and ideas covering structural engineering,
              construction, restoration, rehabilitation, and consultancy.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group"
              >

                {/* IMAGE PLACEHOLDER */}
                <div className="flex aspect-[16/10] items-center justify-center border border-gray-200 bg-gray-100 transition group-hover:bg-gray-200">

                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center border border-gray-300 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-7h.01M5 20h14a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1z"
                        />
                      </svg>
                    </div>

                    <p className="text-xs text-gray-400">
                      Blog Image
                    </p>
                  </div>

                </div>

                {/* CARD CONTENT */}
                <div className="pt-5">

                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">
                    {post.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-snug text-gray-950 transition group-hover:text-gray-600">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/article/${post.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
                  >
                    Read the post

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-6-6l6 6-6 6"
                      />
                    </svg>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-gray-200 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Work With Us
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-300">
                Take the next step with Daya Constructions & Structural
                Consultants. Let&apos;s discuss your structural engineering,
                restoration, rehabilitation, or consultancy requirements.
              </p>

            </div>

            <div className="shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 border border-white bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
              >
                Inquire Now

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}