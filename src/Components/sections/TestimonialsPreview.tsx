"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";

const testimonials = [
  {
    quote:
      "The team approached our project with a clear understanding of our requirements. Their attention to detail and structured approach made the entire process easier to manage.",
    name: "Client Name",
    role: "Residential Project",
    initials: "CN",
    number: "01",
  },
  {
    quote:
      "We appreciated the thoughtful engineering approach and the clarity throughout the project. The team took time to understand our needs and explain the technical aspects.",
    name: "Client Name",
    role: "Structural Consultancy",
    initials: "CN",
    number: "02",
  },
  {
    quote:
      "The project required careful planning and coordination. The team's focus on quality, communication, and practical solutions helped us move forward with confidence.",
    name: "Client Name",
    role: "Construction Project",
    initials: "CN",
    number: "03",
  },
];

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Project Categories",
    description: "Across construction and engineering",
  },
  {
    value: 40,
    suffix: "+",
    label: "Years of Experience",
    description: "Built on a construction legacy",
  },
];

function AnimatedCounter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId = 0;
    const duration = 1800;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  return (
    <span>
      {count}
      <span className="text-brand-primary">{suffix}</span>
    </span>
  );
}

export default function TestimonialsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-12 overflow-hidden rounded-t-[2.5rem] bg-[#f7f7f5] py-20 sm:-mt-16 sm:rounded-t-[3.5rem] sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-brand-secondary/10 blur-3xl"
      />

      <Container>
        <div className="relative">
          {/* Section heading */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-brand-primary" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
                  Client Experiences
                </p>
              </div>

              <h2 className="max-w-xl font-[var(--font-primary)] text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Built on trust.
                <br />
                <span className="text-brand-primary">
                  Remembered for quality.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                Every project begins with a conversation and grows through
                collaboration, engineering knowledge, and a shared commitment
                to quality.
              </p>
            </div>
          </div>

          {/* Animated statistics */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-xl sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-[var(--font-primary)] text-6xl font-bold tracking-tight text-gray-950 sm:text-7xl">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        active={isVisible}
                      />
                    </p>

                    <h3 className="mt-4 text-lg font-semibold text-gray-950 sm:text-xl">
                      {stat.label}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {stat.description}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f7f1e3] text-lg font-semibold text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    {index === 0 ? "01" : "02"}
                  </span>
                </div>

                <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-brand-primary transition-all duration-[1800ms] ease-out"
                    style={{
                      width: isVisible ? `${(stat.value / 40) * 100}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial area */}
          <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
            {/* Left side */}
            <div className="flex flex-col justify-between rounded-2xl bg-gray-950 p-8 text-white sm:p-10">
              <div>
                <span className="font-serif text-7xl leading-none text-brand-primary">
                  “
                </span>

                <h3 className="mt-5 max-w-sm font-[var(--font-primary)] text-3xl font-semibold leading-tight sm:text-4xl">
                  Every project is a promise of quality.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
                  We value the trust our clients place in us and strive to
                  build lasting relationships through responsible execution
                  and thoughtful engineering.
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Client Stories
                </span>

                <span className="text-sm font-medium text-brand-primary">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Right side testimonial card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[25px] border-brand-primary/5"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#f7f1e3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-800">
                    {activeTestimonial.role}
                  </span>

                  <span className="font-[var(--font-primary)] text-3xl font-bold text-gray-100">
                    {activeTestimonial.number}
                  </span>
                </div>

                <div className="mt-10 flex gap-1 text-brand-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="m12 2 3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77l-6.18 3.23L7 14.13 2 9.26l6.91-1L12 2Z" />
                    </svg>
                  ))}
                </div>

                <blockquote
                  key={activeTestimonial.number}
                  className="mt-7 min-h-[170px] font-[var(--font-primary)] text-xl font-medium leading-9 text-gray-800 sm:text-2xl sm:leading-10"
                >
                  “{activeTestimonial.quote}”
                </blockquote>
              </div>

              <div className="relative mt-10 flex flex-col gap-6 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-secondary text-sm font-bold text-white">
                    {activeTestimonial.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-950">
                      {activeTestimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === 0 ? testimonials.length - 1 : current - 1
                      )
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-colors hover:border-brand-primary hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        d="m15 18-6-6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === testimonials.length - 1 ? 0 : current + 1
                      )
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-colors hover:border-brand-primary hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        d="m9 18 6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col gap-6 rounded-2xl border border-brand-primary/20 bg-[#f7f1e3] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <h3 className="font-[var(--font-primary)] text-2xl font-bold text-gray-950 sm:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Let’s discuss your construction, structural or project
                requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-brand-primary px-7 py-4 text-sm font-semibold text-gray-950 transition-colors duration-300 hover:bg-brand-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Contact Us

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}