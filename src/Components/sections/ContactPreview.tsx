import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

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

export default function ContactPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact Daya"
              title="Let's discuss your next project."
              description="Whether you are planning a new construction project, structural work, restoration or rehabilitation, get in touch with our team to discuss your requirements."
            />

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
            >
              Contact Us
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-gray-300">
              <div className="grid gap-3 border-b border-gray-300 py-7 sm:grid-cols-[120px_1fr] sm:gap-8">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                  Phone
                </p>

                <Link
                  href="tel:6382765593"
                  className="text-base font-medium text-gray-900 transition-colors duration-200 hover:text-gray-500 sm:text-lg"
                >
                  6382765593
                </Link>
              </div>

              <div className="grid gap-3 border-b border-gray-300 py-7 sm:grid-cols-[120px_1fr] sm:gap-8">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                  Email
                </p>

                <Link
                  href="mailto:dayaconstructions22@gmail.com"
                  className="break-all text-base font-medium text-gray-900 transition-colors duration-200 hover:text-gray-500 sm:text-lg"
                >
                  dayaconstructions22@gmail.com
                </Link>
              </div>

              <div className="grid gap-3 border-b border-gray-300 py-7 sm:grid-cols-[120px_1fr] sm:gap-8">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-400">
                  Location
                </p>

                <p className="text-base leading-7 text-gray-700 sm:text-lg">
                  Uralpatti, Udumalpet,
                  <br />
                  Tiruppur, Tamil Nadu - 642204
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}