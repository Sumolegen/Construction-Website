import Link from "next/link";
import Container from "../ui/Container";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Team", href: "/team" },
  { name: "Awards", href: "/awards" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-primary/30 bg-gray-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-[var(--font-primary)] text-2xl font-semibold tracking-tight text-white">
                DAYA
              </span>

              <span className="text-label mt-1 text-brand-primary">
                CONSTRUCTIONS
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              Daya Constructions & Structural Consultants provides
              construction, structural design, consultancy, restoration,
              rehabilitation and project management services.
            </p>

            <div className="mt-7 h-px w-20 bg-brand-primary" />
          </div>

          {/* NAVIGATION */}
          <div>
            <h2 className="text-label text-brand-primary">
              Navigation
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  <span className="h-px w-0 bg-brand-primary transition-all duration-300 group-hover:w-4" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-label text-brand-secondary">
              Contact
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <p>
                Uralpatti, Udumalpet,
                <br />
                Tiruppur, Tamil Nadu - 642204
              </p>

              <p>India</p>

              <Link
                href="tel:6382765593"
                className="block transition-colors hover:text-brand-primary"
              >
                6382765593
              </Link>

              <Link
                href="mailto:dayaconstructions22@gmail.com"
                className="block break-all transition-colors hover:text-brand-secondary"
              >
                dayaconstructions22@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 border-t border-brand-secondary/30 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Daya Constructions & Structural
            Consultants. All rights reserved.
          </p>

          <p className="text-brand-primary">
            Building with strength. Designing with confidence.
          </p>
        </div>
      </Container>
    </footer>
  );
}