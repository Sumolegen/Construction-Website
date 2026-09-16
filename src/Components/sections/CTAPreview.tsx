import Link from "next/link";
import Container from "../ui/Container";

export default function CTAPreview() {
  return (
    <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
            Start a Conversation
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a project in mind?
            <br />
            Let&apos;s build it with confidence.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Talk to us about your construction, structural design, consultancy
            or project requirements.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-950 transition-colors duration-200 hover:bg-gray-200"
            >
              Start a Conversation
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-gray-400 hover:bg-gray-900"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}