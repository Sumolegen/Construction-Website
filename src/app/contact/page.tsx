import Container from "../../Components/ui/Container";
import SectionHeading from "../../Components/ui/SectionHeading";

const contactDetails = [
  {
    label: "Phone",
    value: "6382765593",
    href: "tel:6382765593",
  },
  {
    label: "Email",
    value: "dayaconstructions22@gmail.com",
    href: "mailto:dayaconstructions22@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100">
        <Container>
          <div className="flex min-h-[60vh] items-center py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Contact Daya
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-8xl">
                Let&apos;s discuss
                <br />
                your project.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Tell us about your construction, structural, restoration or
                rehabilitation requirements.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Information + Form */}
      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Contact Information */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Get In Touch"
                title="Start a conversation."
                description="Reach out to discuss your project requirements and explore how we can help."
              />

              <div className="mt-10 border-t border-gray-300">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="border-b border-gray-300 py-6"
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                      {detail.label}
                    </p>

                    <a
                      href={detail.href}
                      className="mt-2 inline-block text-lg font-medium text-gray-900 transition-colors duration-200 hover:text-gray-500"
                    >
                      {detail.value}
                    </a>
                  </div>
                ))}

                <div className="border-b border-gray-300 py-6">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                    Location
                  </p>

                  <p className="mt-2 text-lg leading-8 text-gray-900">
                    Uralpatti, Udumalpet,
                    <br />
                    Tiruppur, Tamil Nadu - 642204
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border border-gray-300 p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Send an enquiry
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Share a few details about your project and we&apos;ll get in
                  touch with you.
                </p>

                <form className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-gray-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-gray-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-gray-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project"
                      className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-gray-950 py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
              Daya Constructions
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building with strength.
              <br />
              Designing with confidence.
            </h2>
          </div>
        </Container>
      </section>
    </main>
  );
}