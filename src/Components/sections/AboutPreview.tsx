import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="About Daya"
              title="Built on knowledge. Driven by precision."
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="max-w-2xl">
              <p className="text-xl leading-9 text-gray-800 sm:text-2xl">
                Daya Constructions & Structural Consultants is a construction
                and structural consultancy company focused on creating
                dependable, well-engineered spaces.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-600">
                From structural design and construction to restoration,
                rehabilitation and project management, we approach every
                project with attention to detail, technical understanding and
                long-term performance.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center border-b border-gray-900 pb-1 text-sm font-medium text-gray-900 transition-colors duration-200 hover:border-gray-500 hover:text-gray-600"
              >
                Discover Daya
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}